import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import Popup2 from "@/components/student/Popup2";

describe("Testing emit behaviour", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should emit properly", async () => {
    const assignmentId = "assign1";
    const assignNo = 1;

    const wrapper = mount(Popup2, {
      vuetify,
      propsData: {
        assignmentId,
        assignNo,
      },
    });

    wrapper.vm.$emit("done", assignmentId, assignNo);

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().done).toBeTruthy();
    expect(wrapper.emitted().done.length).toBe(1);
  });
});
