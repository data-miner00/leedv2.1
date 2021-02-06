import axios from "axios";

export default {
  state: {
    authenticated: false,
    userType: "",
    userId: "",
    name: "",
    email: "",
    phoneNo: "",
    subjectsId: [],

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

      if (userType === "student" || userType === "students") {
        commit("setGroupsId", groupsId);
      } else {
        commit("setFaculty", faculty);
      }
    },
  },
};
