import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Font Awesome Assets
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

/* More free-brands-svg-icons
  // faMedium,
  // faStackOverflow,
  // faStackExchange,
  // faGoogle,
  // faYoutube,
  // faGithub,
  // faGitlab,
  // faKaggle,
  // faCodepen
*/

library.add(fas);
library.add(fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);
