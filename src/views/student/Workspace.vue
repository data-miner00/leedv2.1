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
        <div class="logo">
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
          <router-link :to="{ name: 'Uploads', params: { groupId } }">
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
        <prism-editor
          class="my-editor"
          v-model="code"
          :highlight="highlighter"
          line-numbers
        ></prism-editor>
      </div>
      <div class="chat-box">
        <div class="chat-tab">
          <div class="tab"><div>Important</div></div>
          <div class="tab"><div>General</div></div>
        </div>
        <div class="chat-display">
          <ChatItem
            v-for="chat in chats"
            :key="chat.id"
            :userName="chat.name"
            :message="chat.message"
          />
        </div>
        <div class="message-box">
          <input
            type="text"
            @keydown.enter="sendMessage"
            v-model="chatboxValue"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Prism Editor -->
<script>
import axios from "axios";
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-duotone-light.css"; // import syntax highlighting styles

import ChatItem from "@/components/Chat";

export default {
  components: {
    PrismEditor,
    ChatItem,
  },
  data: () => ({
    code: `import React, { useState, useEffect } from 'react';
export default class App extends React.Components<Props> {
  render() {
    return (
      <>
        <div></div>
      </>
    );
  }
}`,
    chatboxValue: "",
    chats: [
      {
        id: 1,
        name: "Dango",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis obcaecati eaque quisquam ad dicta rerum, odit iusto est fugit id ea nobis quod reprehenderit doloremque dolore et natus nam vero!",
      },
      {
        id: 2,
        name: "Yui",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis obcaecati eaque quisquam ad dicta rerum, odit iusto est fugit id ea nobis quod reprehenderit doloremque dolore et natus nam vero!",
      },
    ],
    groupInfo: { subjectCode: "placeholder" },
    assignmentInfo: {},
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
  async mounted() {
    this.$socket.emit("join-workspace", {
      groupId: this.groupId,
      name: this.name,
    });

    // Fetch Group info and Assignment info
    // try {
    //   let res = await axios.get(`group/${this.groupId}`);
    //   this.groupInfo = res.data;
    // } catch (error) {
    //   console.error(error);
    // }

    // try {
    //   let res = await axios.get(`assignment/${this.groupInfo.assignId}`);
    //   this.assignmentInfo = res.data;
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      let res = await axios.get(`group/${this.groupId}`);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  },
  beforeDestroy() {
    this.$socket.emit("leave-workspace", {
      groupId: this.groupId,
      name: this.name,
    });
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
    redirectToEditor() {
      // document.getElementsByClassName("my-editor")[0]
    },
    sendMessage() {
      const wrappedMessage = {
        id: Math.floor(Math.random() * 10000),
        name: this.name,
        message: this.chatboxValue,
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
      return `${this.groupInfo.subjectCode.toUpperCase()} Assgn ${
        this.assignmentInfo.assignNo
      }`;
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
.workspace
  height: 100vh
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
      grid-template-columns: auto auto

      .tab
        cursor: pointer
        display: grid
        place-items: center
        div
          height: fit-content
          width: fit-content
        &:hover
          background: #eee

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
        background: yellow
</style>

<style lang="sass" scoped>
.my-editor
  background: #faf8f5//#2d2d2d
  color: #ccc
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace
  font-size: 14px
  line-height: 1.5
  padding: 5px
  cursor: text

.prism-editor__textarea:focus
  outline: none
</style>
