import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  fas,
  faHome,
  faNewspaper,
  faUser,
  faDiagramProject,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faCss3,
  faBootstrap,
  faVuejs,
  faNodeJs,
  faTelegramPlane,
  faGithub,
  faFigma,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  fas,
  faHome,
  faNewspaper,
  faUser,
  faDiagramProject,
  faGithub,
  faJs,
  faCss3,
  faBootstrap,
  faVuejs,
  faNodeJs,
  faTelegramPlane,
  faFigma,
  faHtml5,
  faReact,
  faCalendarDays
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});

// Modify the `nuxt.config.ts` file by adding to the `export default defineNuxtConfig()`
// export default defineNuxtConfig({
//   css: [
//     '@fortawesome/fontawesome-svg-core/styles.css'
//   ]
// })
