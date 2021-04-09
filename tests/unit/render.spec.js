import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Login from "@/views/Login";
import Resources from "@/views/student/Resources";

describe("Testing render behaviour", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("should render Login.vue properly", () => {
    const wrapper = mount(Login, {
      localVue,
      vuetify,
    });

    const html = wrapper.html();

    expect(html).toContain("Where Assignment Meets");
    expect(html).toContain("Join your friends now.");
    expect(html).toContain("Login");
  });

  it("should render Resources.vue correctly", () => {
    library.add(fas);
    library.add(fab);

    localVue.component("font-awesome-icon", FontAwesomeIcon);

    const wrapper = mount(Resources, {
      localVue,
      vuetify,
    });

    const html = wrapper.html();

    expect(html).toContain("Search Engine");
    expect(html).toContain("Screencasts");
    expect(html).toContain("Web Technologies");
  });
});
