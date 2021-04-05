import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import AssignInfo from "@/components/layouts/AssignInfo";
import Vuetify from "vuetify";

describe("Layout test suites", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  describe("AssignInfo.vue", () => {
    it("should render props correctly", () => {
      const props = {
        courseCode: "UECS1234",
        courseName: "Ancient Programming",
        assignNo: 5,
        purpose: "To get decent knowledge!",
      };

      const wrapper = shallowMount(AssignInfo, {
        localVue,
        vuetify,
        propsData: props,
      });
      expect(wrapper.html()).toContain(props.courseCode);
      expect(wrapper.html()).toContain(props.courseName);
      expect(wrapper.html()).toContain(props.assignNo);
      expect(wrapper.html()).toContain(props.purpose);
    });
  });
});
