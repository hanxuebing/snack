import { ref as v, computed as p, openBlock as _, createElementBlock as i, createVNode as n, unref as r } from "vue";
import f from "./ControlSwitcher.vue.js";
import y from "./DatePanel.vue.js";
import c from "../../node_modules/dayjs/dayjs.min.js";
import "D:/own/game/packages/vue3lib/src/components/calendar/panel.vue?vue&type=style&index=0&scoped=c7d8b1e1&lang.css";
import x from "../../_virtual/_plugin-vue_export-helper.js";
const d = { class: "panel" }, D = {
  __name: "panel",
  setup(Y) {
    const a = c(), e = v({
      year: a.year(),
      month: a.month() + 1
    }), l = p(() => {
      const t = e.value.year, o = e.value.month - 1;
      return c(new Date(t, o)).format("YYYY-MM");
    }), m = () => {
      e.value = {
        year: e.value.year - 1,
        month: e.value.month
      };
    }, s = () => {
      let t = e.value.month - 1, o = e.value.year;
      t === 0 && (t = 12, o--), e.value = {
        year: o,
        month: t
      };
    }, u = () => {
      let t = e.value.month + 1, o = e.value.year;
      t === 13 && (t = 1, o++), e.value = {
        year: o,
        month: t
      };
    }, h = () => {
      e.value = {
        year: e.value.year + 1,
        month: e.value.month
      };
    };
    return (t, o) => (_(), i("div", d, [
      n(f, {
        onPrevYear: m,
        onPrevMonth: s,
        onNextMonth: u,
        onNextYear: h,
        currentDateString: r(l)
      }, null, 8, ["currentDateString"]),
      n(y, { showDate: r(e) }, null, 8, ["showDate"])
    ]));
  }
}, k = /* @__PURE__ */ x(D, [["__scopeId", "data-v-c7d8b1e1"]]);
export {
  k as default
};
