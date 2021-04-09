import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import AssignmentItem from "@/components/student/AssignmentItem";
import GroupItem from "@/components/lecturer/GroupItem";

describe("Testing props behaviour", function() {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render props at AssignmentItem.vue correctly", () => {
    const props = {
      courseCode: "UECS7777",
      courseName: "Legend Programming",
      assignNo: 2,
      assignDescription: "A dangerous program.",
      groupId: "group32",
      assignmentId: "assign32",
      language: "csharp",
      filename: "file.doc",
    };

    const wrapper = shallowMount(AssignmentItem, {
      localVue,
      vuetify,
      propsData: props,
    });

    const html = wrapper.html();

    expect(html).toContain(props.courseName);
    expect(html).toContain(props.courseCode);
    expect(wrapper.find(".link-icon.download").exists()).toBeTruthy();
    expect(wrapper.find(".link-icon.no-download").exists()).toBeFalsy();
  });

  it("should render props at GroupItem.vue correctly", () => {
    const props = {
      index: 0,
      leaderName: "Sandraa",
      memberCount: 3,
      maxMember: 3,
      groupId: "group01",
      submittedDate: "April 31, 2001",
      assignmentId: "assign01",
    };

    const wrapper = mount(GroupItem, {
      localVue,
      vuetify,
      propsData: props,
    });

    const html = wrapper.html();

    expect(html).toContain(`<div>${props.index + 1}</div`);
    expect(html).toContain(props.leaderName);
    expect(wrapper.find(".link-icon.bad").exists()).toBeTruthy();
    expect(wrapper.find(".link-icon.good").exists()).toBeFalsy();
  });
});
