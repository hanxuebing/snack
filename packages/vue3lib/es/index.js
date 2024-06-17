import "./node_modules/element-plus/theme-chalk/base.css.js";
import "./packages/vue3lib/src/style/base.css";
import { withInstall as o, makeInstaller as t } from "./packages/utils/vue3install.js";
import l from "./components/upload.vue.js";
import m from "./components/calendar/index.vue.js";
const n = [
  o(l),
  o(m)
], s = t(n);
export {
  m as BundleCalendar,
  l as BundleFileUpload,
  s as default
};
