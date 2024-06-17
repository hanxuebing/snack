import { toRefs as m, provide as p, openBlock as f, createElementBlock as _, createVNode as o, toRaw as g } from "vue";
import "../../packages/vue3lib/src/components/calendar/style.css";
import u from "./period.vue.js";
import S from "./panel.vue.js";
import "D:/own/game/packages/vue3lib/src/components/calendar/index.vue?vue&type=style&index=0&scoped=f0049524&lang.css";
import C from "../../_virtual/_plugin-vue_export-helper.js";
const D = { class: "calendar-container" }, h = /* @__PURE__ */ Object.assign({
  name: "test-calendar"
}, {
  __name: "index",
  props: {
    format: {
      type: String,
      default: "YYYY-MM-DD"
    },
    range: {
      type: Array,
      default: () => []
    }
  },
  emits: ["onSelectPeriod", "onCalendarChange", "onSelectDateRange"],
  setup(r, { emit: c }) {
    const n = c, s = r, { format: l, range: d } = m(s), i = (e, t) => {
      n("onSelectPeriod", { btnText: e, range: t });
    }, a = (e) => e.map((t) => g(t.dayjs));
    return p("rootAttr", {
      range: d,
      format: l,
      calendarChange: (e) => {
        n("onCalendarChange", a(e));
      },
      onSelectDateRange: (e) => {
        n("onSelectDateRange", a(e));
      }
    }), (e, t) => (f(), _("div", D, [
      o(u, { onOnSelectPeriod: i }),
      o(S)
    ]));
  }
}), j = /* @__PURE__ */ C(h, [["__scopeId", "data-v-f0049524"]]);
export {
  j as default
};
