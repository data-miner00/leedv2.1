import axios from "axios";
import { LOCAL_STORAGE_PREFIX as prefix } from "../../config";

export default {
  state: {
    authenticated: false,
    userType: "",
    userId: "",
    name: "",
    email: "",
    phoneNo: "",
    subjectsId: [],
    avatarUri: "",

    // student
    groupsId: [],

    // lecturer
    faculty: "",
  },
  getters: {},
  mutations: {
    setAuthenticated(state, status) {
      state.authenticated = status;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
    setUserType(state, userType) {
      state.userType = userType;
    },
    setName(state, name) {
      state.name = name;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setPhoneNo(state, phoneNo) {
      state.phoneNo = phoneNo;
    },
    setSubjectsId(state, subjectsId) {
      state.subjectsId = subjectsId;
    },
    setAvatarUri(state, avatarUri) {
      state.avatarUri = avatarUri;
    },
    setGroupsId(state, groupsId) {
      state.groupsId = groupsId;
    },
    setFaculty(state, faculty) {
      state.faculty = faculty;
    },
  },
  actions: {
    LOGIN: ({ commit }, payload) => {
      console.log(commit);
      return new Promise((resolve, reject) => {
        axios
          .post("login", payload)
          .then(({ data, status }) => {
            if (status === 200) {
              commit("setAuthenticated", true);
              localStorage.setItem(
                `${prefix}user-details`,
                JSON.stringify(data)
              );
              resolve(data);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    RETRIEVE_DETAIL: ({ commit }, payload) => {
      const {
        name,
        userType,
        userId,
        email,
        phoneNo,
        subjectsId,
        avatarUri,

        // optionals
        groupsId,
        faculty,
      } = payload;
      commit("setUserType", userType);
      commit("setName", name);
      commit("setEmail", email);
      commit("setUserId", userId);
      commit("setPhoneNo", phoneNo);
      commit("setSubjectsId", subjectsId);
      commit("setAvatarUri", avatarUri);

      if (userType === "student" || userType === "students") {
        commit("setGroupsId", groupsId);
      } else {
        commit("setFaculty", faculty);
      }
    },
  },
};
