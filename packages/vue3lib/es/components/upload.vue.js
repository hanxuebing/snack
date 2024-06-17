import { ref as r, openBlock as m, createBlock as d, unref as t, isRef as u, withCtx as o, createVNode as c, createTextVNode as f, createElementVNode as g } from "vue";
import "../node_modules/element-plus/theme-chalk/el-upload.css.js";
import "../node_modules/element-plus/theme-chalk/el-button.css.js";
import { ElUpload as v } from "../node_modules/element-plus/es/components/upload/index.js";
import { ElButton as _ } from "../node_modules/element-plus/es/components/button/index.js";
const h = /* @__PURE__ */ g("div", { class: "el-upload__tip" }, " jpg/png files with a size less than 500KB. ", -1), N = /* @__PURE__ */ Object.assign({
  name: "file-upload"
}, {
  __name: "upload",
  setup(x) {
    const e = r([
      {
        name: "element-plus-logo.svg",
        url: "https://element-plus.org/images/element-plus-logo.svg"
      },
      {
        name: "element-plus-logo2.svg",
        url: "https://element-plus.org/images/element-plus-logo.svg"
      }
    ]), s = () => {
    }, n = () => {
    }, i = () => {
    }, p = () => {
    };
    return (b, l) => (m(), d(t(v), {
      "file-list": t(e),
      "onUpdate:fileList": l[0] || (l[0] = (a) => u(e) ? e.value = a : null),
      class: "upload-demo",
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: "",
      "on-preview": s,
      "on-remove": n,
      "before-remove": i,
      limit: 3,
      "on-exceed": p
    }, {
      tip: o(() => [
        h
      ]),
      default: o(() => [
        c(t(_), { type: "primary" }, {
          default: o(() => [
            f("Click to upload")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["file-list"]));
  }
});
export {
  N as default
};
