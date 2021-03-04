export default {
  state: {
    assignments: [],

    subjectCode: "",
    subjectTitle: "",
    assignNo: 0,
    groupId: "",
  },
  getters: {},
  mutations: {
    setAssignments(state, assignments) {
      state.assignments = assignments;
    },
    setSubjectCode(state, subjectCode) {
      state.subjectCode = subjectCode;
    },
    setSubjectTitle(state, subjectTitle) {
      state.subjectTitle = subjectTitle;
    },
    setAssignNo(state, assignNo) {
      state.assignNo = assignNo;
    },
    setGroupId(state, groupId) {
      state.groupId = groupId;
    },
  },
  actions: {
    SELECT_WORKSPACE: ({ commit }, payload) => {
      const { subjectCode, subjectTitle, assignNo, groupId } = payload;
      commit("setSubjectCode", subjectCode);
      commit("setSubjectTitle", subjectTitle);
      commit("setAssignNo", assignNo);
      commit("setGroupId", groupId);
    },
  },
};
