import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import Popup2 from "@/components/student/Popup2";

describe("Testing emit behaviour", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should call the join method onclick", async () => {
    const assignmentId = "assign1";
    const assignNo = 1;

    const joinSpy = jest.spyOn(Popup2.methods, "join");
    // const createSpy = jest.spyOn(Popup2.methods, 'create');
    // const matchmakeSpy = jest.spyOn(Popup2.methods, 'matchmake');

    const wrapper = mount(Popup2, {
      vuetify,
      propsData: {
        assignmentId,
        assignNo,
      },
    });

    await wrapper.find(".join-btn.btn").trigger("click");

    expect(joinSpy).toHaveBeenCalled();
  });

  it("should call the create method onclick", async () => {
    const assignmentId = "assign1";
    const assignNo = 1;

    const createSpy = jest.spyOn(Popup2.methods, "create");

    const wrapper = mount(Popup2, {
      vuetify,
      propsData: {
        assignmentId,
        assignNo,
      },
    });

    await wrapper.find(".create-btn.btn").trigger("click");

    expect(createSpy).toHaveBeenCalled();
  });

  it("should call the matchmake method onclick", async () => {
    const assignmentId = "assign1";
    const assignNo = 1;

    const matchmakeSpy = jest.spyOn(Popup2.methods, "matchmake");

    const wrapper = mount(Popup2, {
      vuetify,
      propsData: {
        assignmentId,
        assignNo,
      },
    });

    await wrapper.find(".matchmake-btn").trigger("click");

    expect(matchmakeSpy).toHaveBeenCalled();
  });
});
