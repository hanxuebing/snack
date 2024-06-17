import { openBlock as a, createElementBlock as m, createElementVNode as s, unref as o } from "vue";
import p from "../../node_modules/dayjs/dayjs.min.js";
import "D:/own/game/packages/vue3lib/src/components/calendar/period.vue?vue&type=style&index=0&lang.css";
const c = { class: "date-period" }, f = {
  __name: "period",
  emits: ["onSelectPeriod"],
  setup(u, { emit: d }) {
    const l = d, e = p(), r = (i, t, n) => {
      l("onSelectPeriod", i, [t, n]);
    };
    return (i, t) => (a(), m("div", c, [
      s("div", {
        class: "period-btn",
        onClick: t[0] || (t[0] = (n) => r("近1周", o(e).subtract(7, "day"), o(e)))
      }, "近1周"),
      s("div", {
        class: "period-btn",
        onClick: t[1] || (t[1] = (n) => r("近1月", o(e).subtract(1, "month"), o(e)))
      }, "近1月"),
      s("div", {
        class: "period-btn",
        onClick: t[2] || (t[2] = (n) => r("近半年", o(e).subtract(6, "month"), o(e)))
      }, "近半年"),
      s("div", {
        class: "period-btn",
        onClick: t[3] || (t[3] = (n) => r("近1年", o(e).subtract(1, "year"), o(e)))
      }, "近1年")
    ]));
  }
};
export {
  f as default
};
