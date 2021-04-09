import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import Popup2 from "@/components/student/Popup2";

describe("Test data behaviour", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const assignmentId = "assign1";
  const assignNo = 1;

  it("should load local state with default value", async () => {
    const wrapper = mount(Popup2, {
      vuetify,
      propsData: {
        assignmentId,
        assignNo,
      },
    });

    expect(wrapper.vm.errored).toBe(false);
    expect(wrapper.vm.errorMessage).toBe("Unknown Error Occurred!");
  });

  it("should change according to latest state value", async () => {
    const wrapper = mount(Popup2, {
      vuetify,
      propsData: {
        assignmentId,
        assignNo,
      },
    });

    const newErrormessage = "A very serious problem occurred!";

    await wrapper.setData({
      errored: true,
      errorMessage: newErrormessage,
    });

    // Checking the states
    expect(wrapper.vm.errored).toBe(true);
    expect(wrapper.vm.errorMessage).toMatch(newErrormessage);

    // Checking the UI
    expect(wrapper.html()).toContain(newErrormessage);
  });
});
