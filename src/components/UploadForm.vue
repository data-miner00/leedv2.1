<template lang="pug">
  .upload-form
    form(enctype="multipart/form-data" novalidate v-if="isInitial || isSaving")
      .action-label Upload files
      .dropbox
        input.input-file(
          type="file" 
          :name="uploadFieldName" 
          :disabled="isSaving" 
          @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
          accept=".zip"
        )
        p(v-if="isInitial")
          | Drag your file here to begin #[br] or click to browse
        p(v-if="isSaving") Uploading file...
    .success-msg(v-if="isSuccess") Assignment uploaded successfully! Thank you for your effort!
</template>

<script>
import axios from "axios";
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
export default {
  data: () => ({
    uploadedFiles: [],
    uploadError: null,
    currentStatus: null,
    uploadFieldName: "docs",
    fileCount: null,
  }),
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
    assignmentId() {
      return this.$store.state.assignment.assignmentId;
    },
    groupId() {
      return this.$store.state.assignment.groupId;
    },
  },
  methods: {
    reset() {
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      this.currentStatus = STATUS_SAVING;

      this.upload(formData)
        .then((x) => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map((x) => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });

      // save it
      this.save(formData);
    },
    upload(formData) {
      return (
        axios
          .post(
            `assignment/${this.assignmentId}/upload/${this.groupId}`,
            formData
          )
          // get data
          .then((x) => x.data)
          // add url field
          .then((x) =>
            x.map((img) => Object.assign({}, img, { url: `/images/${img.id}` }))
          )
      );
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style lang="scss" scoped>
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: #eee;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: rgb(
    207,
    204,
    204
  ); /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.action-label {
  font-size: 17px;
  font-weight: 800;
}
</style>
