import { toRefs as p, openBlock as h, createElementBlock as m, createElementVNode as e, toDisplayString as v, unref as x } from "vue";
import "D:/own/game/packages/vue3lib/src/components/calendar/ControlSwitcher.vue?vue&type=style&index=0&lang.css";
const d = { class: "control-switcher-container" }, f = {
  __name: "ControlSwitcher",
  props: {
    currentDateString: {
      type: String,
      default: ""
    }
  },
  emits: ["prev-year", "prev-month", "next-month", "next-year"],
  setup(c, { emit: n }) {
    const r = c, { currentDateString: o } = p(r), t = n, s = () => {
      t("prev-year");
    }, i = () => {
      t("prev-month");
    }, a = () => {
      t("next-month");
    }, l = () => {
      t("next-year");
    };
    return (u, w) => (h(), m("div", d, [
      e("div", { class: "switcher" }, [
        e("div", {
          class: "switch-icon prev-y",
          onClick: s
        }),
        e("div", {
          class: "switch-icon prev-m",
          onClick: i
        })
      ]),
      e("div", null, v(x(o)), 1),
      e("div", { class: "switcher" }, [
        e("div", {
          class: "switch-icon next-m",
          onClick: a
        }),
        e("div", {
          class: "switch-icon next-y",
          onClick: l
        })
      ])
    ]));
  }
};
export {
  f as default
};
