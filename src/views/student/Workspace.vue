<template>
  <div class="workspace">
    <!-- <div class="header">
      <div class="dummy"></div>
      <div class="logo">Leed</div>
      <div class="avatars">
        <span class="avatar">
          <img src="https://picsum.photos/70" />
        </span>
        <span class="avatar">
          <img src="https://picsum.photos/80" />
        </span>
        <span class="avatar">
          <img src="https://picsum.photos/90" />
        </span>
        <span class="avatar">
          <img src="https://picsum.photos/100" />
        </span>
      </div>
    </div> -->
    <div class="app">
      <div class="sidebar">
        <div class="logo" @click="$router.go(-1)">
          <img src="../../assets/back.svg" alt="" />
        </div>
        <div class="sidebar-inner">
          <router-link :to="{ name: 'Plans', params: { groupId } }">
            <div class="action">
              <v-icon>mdi-24px mdi-calendar-blank-multiple</v-icon>
            </div>
          </router-link>
          <router-link :to="{ name: 'Booking', params: { groupId } }">
            <div class="action">
              <v-icon>mdi-24px mdi-android-messages</v-icon>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'Uploads', params: { groupId } }"
            v-if="isGroupLeader"
          >
            <div class="action">
              <v-icon>mdi-24px mdi-upload</v-icon>
            </div>
          </router-link>
        </div>
        <div class="settings">
          <v-icon>mdi-cog</v-icon>
        </div>
      </div>
      <div class="file-structure">
        <div class="assign-title">{{ title }}</div>
      </div>
      <div class="text-editor">
        <MonacoEditor
          :language="language"
          v-model="code"
          :editorOptions="options"
          @mounted="onMounted"
          style="text-align: left;"
        />
      </div>
      <div class="chat-box">
        <div class="chat-tab">
          <!-- <div class="tab"><div>Important</div></div>
          <div class="tab"><div>General</div></div> -->
          <div>Text Channel</div>
        </div>
        <div class="chat-display">
          <ChatItem
            v-for="chat in chats"
            :key="chat.id"
            :username="chat.name"
            :message="chat.message"
            :avatarUri="chat.avatarUri"
          />
        </div>
        <div class="message-box">
          <input
            type="text"
            @keydown.enter="sendMessage"
            v-model="chatboxValue"
            placeholder="💬 Type something to chat..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MonacoEditor from "vue-monaco-editor";

import ChatItem from "@/components/Chat";

export default {
  components: {
    MonacoEditor,
    ChatItem,
  },
  data: () => ({
    code: "// Type away! \n",
    options: {
      selectOnLineNumbers: false,
    },
    chatboxValue: "",
    chats: [
      {
        id: 1,
        name: "Dango",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis obcaecati eaque quisquam ad dicta rerum, odit iusto est fugit id ea nobis quod reprehenderit doloremque dolore et natus nam vero!",
        avatarUri: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Yui",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis obcaecati eaque quisquam ad dicta rerum, odit iusto est fugit id ea nobis quod reprehenderit doloremque dolore et natus nam vero!",
        avatarUri: "https://picsum.photos/200",
      },
    ],
    leaderId: "",
    assignmentInfo: {},
    language: "javascript",
  }),
  sockets: {
    connect() {
      console.log("Socket connected");
    },
    message(wrappedMessage) {
      console.log(wrappedMessage);
      this.chats.push(wrappedMessage);
    },
    code(latestCode) {
      this.code = latestCode;
    },
  },
  async created() {
    // Fetch Group info and Assignment info
    try {
      let res = await axios.get(`group/${this.groupId}/extended/v1`);
      const {
        leader,
        // members,
        // filename,
        // submissionStatus,
        assignNo,
        // description,
        // dueDate,
        language,
        // maxStudent,
        // assignmentDoc,
        assignmentId,
        subjectCode,
        subjectTitle,
      } = res.data;
      this.leaderId = leader.id;
      this.language = language;
      console.log(this.language);
      this.$store.dispatch("SELECT_WORKSPACE", {
        subjectCode,
        subjectTitle,
        assignNo,
        groupId: this.groupId,
        language,
        // maybe set assignmentId to store too? (yes)
        assignmentId,
      });
    } catch (error) {
      console.error(error);
    }
  },
  async mounted() {
    this.$socket.emit("join-workspace", {
      groupId: this.groupId,
      name: this.name,
    });
  },
  beforeDestroy() {
    this.$socket.emit("leave-workspace", {
      groupId: this.groupId,
      name: this.name,
    });
  },
  methods: {
    onMounted(editor) {
      this.editor = editor;
    },
    onCodeChange(editor) {
      console.log("called");
      this.$socket.emit("code", editor.getValue());
    },
    sendMessage() {
      const wrappedMessage = {
        id: Math.floor(Math.random() * 10000),
        name: this.name,
        message: this.chatboxValue,
        avatarUri: this.avatarUri,
      };
      this.chatboxValue = "";
      this.$socket.emit("message", wrappedMessage);

      console.log("proceeded");
    },
  },
  computed: {
    groupId() {
      return this.$route.params.groupId;
    },
    name() {
      return this.$store.state.user.name;
    },
    title() {
      return `${this.subjectCode} Assgn ${this.assignNo}`;
    },
    avatarUri() {
      return this.$store.state.user.avatarUri;
    },
    userId() {
      return this.$store.state.user.userId;
    },
    isGroupLeader() {
      return this.userId === this.leaderId;
    },
    subjectCode() {
      return this.$store.state.assignment.subjectCode;
    },
    assignNo() {
      return this.$store.state.assignment.assignNo;
    },
  },
  watch: {
    code() {
      this.$socket.emit("code", this.code);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"
.workspace
  height: 100vh
  overflow: hidden
.header
  height: 64px
  display: flex
  justify-content: space-around

  .logo
    text-transform: uppercase
    letter-spacing: 1rem
    margin: auto 0
    width: fit-content
    font-size: 24px
    font-family: "Roboto", sans-serif

  .avatars
    direction: rtl /* This is to get the stack with left on top */
    text-align: left /* Now need to explitly align left */
    padding-left: 25px /* Same value as the negative margin */
    padding-top: 5px
    margin: auto 0

    .avatar
      img
        border-radius: 50%
        position: relative
        left: -5px
        margin-left: -25px
        z-index: 1
        width: 40px

.app
  height: 100%
  display: flex

  .sidebar
    flex-basis: 70px
    justify-content: center
    background: #fff
    border-right: 1px solid #eee

    .logo
      width: 40px
      height: 40px
      margin: 5px auto 40px
      position: relative
      opacity: 0.75
      cursor: pointer

      &:hover
        opacity: 0.95

      img
        width: 20px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

    &-inner
      display: flex
      flex-direction: column
      justify-content: space-between

      .action
        width: 50px
        height: 50px
        margin: 0 auto
        display: grid
        place-items: center
        border-radius: 250px
        transition: background .3s

        &:hover
          background: #eee

        i
          display: block
          color: black

    .settings
      width: 50px
      height: 50px
      margin: auto
      display: grid
      place-items: center

      i
        display: block
        color: black

  .file-structure
    background: white
    flex-basis: 230px

    .assign-title
      width: 100%
      text-align: center
      padding: 14px 0
      border-bottom: 1px solid #eee
      font-size: 14px
      text-transform: uppercase
      font-weight: 800

  .text-editor
    flex-grow: 1

  .chat-box
    flex-basis: 300px
    position: relative

    .chat-tab
      height: 60px
      border-bottom: 1px solid #eee
      width: 100%
      display: grid
      place-items: center

      div
        font-size: 18px
        font-weight: 800
        // color: $pcolor7

      // grid-template-columns: auto auto

      // .tab
      //   cursor: pointer
      //   display: grid
      //   place-items: center
      //   div
      //     height: fit-content
      //     width: fit-content
      //   &:hover
      //     background: #eee

    .chat-display
      padding: 10px
      // height: 500px
      // overflow: auto

    .message-box
      height: 50px
      width: 100%
      position: absolute
      bottom: 0
      left: 0

      input
        outline: none
        width: 100%
        height: 100%
        padding: 8px 10px
        border-top: 1px solid #eee
</style>
