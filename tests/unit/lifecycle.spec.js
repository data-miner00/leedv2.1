import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import NotiItem from "@/components/notification/NotiItem";

describe("Test lifecycle hooks", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render lifecycle hooks correctly", () => {
    const createdSpy = jest.spyOn(NotiItem, "created");
    const mountedSpy = jest.spyOn(NotiItem, "mounted");
    const beforeDestroySpy = jest.spyOn(NotiItem, "beforeDestroy");

    const wrapper = shallowMount(NotiItem, {
      localVue,
      vuetify,
    });

    expect(createdSpy).toHaveBeenCalled();
    expect(mountedSpy).toHaveBeenCalled();

    wrapper.destroy();
    expect(beforeDestroySpy).toHaveBeenCalled();
  });
});
