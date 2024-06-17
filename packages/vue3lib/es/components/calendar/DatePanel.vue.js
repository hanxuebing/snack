import { toRefs as B, computed as v, inject as E, ref as L, watch as P, openBlock as u, createElementBlock as c, createElementVNode as s, Fragment as f, renderList as D, unref as r, toDisplayString as p, normalizeClass as g } from "vue";
import $ from "../../node_modules/dayjs/dayjs.min.js";
import "D:/own/game/packages/vue3lib/src/components/calendar/DatePanel.vue?vue&type=style&index=0&scoped=00f02a65&lang.css";
import z from "../../_virtual/_plugin-vue_export-helper.js";
const N = { class: "date-panel-container" }, q = { class: "calendar-table" }, G = { class: "calendar-thead" }, H = { class: "calendar-item" }, J = { class: "calendar-tbody" }, K = { class: "tbody-wrap" }, Q = ["onClick", "onMouseover"], w = 6, T = {
  __name: "DatePanel",
  props: {
    sevenDay: {
      type: Array,
      default: () => ["日", "一", "二", "三", "四", "五", "六"]
    },
    showDate: {
      type: Object,
      default: () => ({
        year: 2024,
        month: 5
      })
    }
  },
  setup(b) {
    const R = b, { sevenDay: k, showDate: y } = B(R), i = v(() => ({
      year: y.value.year,
      month: y.value.month - 1
    })), { range: C, format: F, calendarChange: O, onSelectDateRange: S } = E("rootAttr"), _ = (e) => ({
      year: e.year(),
      month: e.month(),
      date: e.date(),
      value: e.format(F.value),
      dayjs: e,
      grey: e.month() !== i.value.month
    }), o = L([]);
    P(C, (e) => {
      const n = e.map((t) => _(t));
      o.value = n;
    }, { immediate: !0 });
    const V = v(() => {
      const e = new Date(i.value.year, i.value.month);
      return $(e).startOf("month").startOf("week");
    }), x = v(() => Array(w * 7).fill(0).map((e, a) => {
      const n = V.value.add(a, "day");
      return _(n);
    })), A = (e) => {
      if (m.value.length !== 2)
        return !1;
      const a = new Date(e), n = m.value[0], t = m.value[1];
      return a >= n && a <= t;
    }, m = v(() => {
      const e = [];
      if (l.value[0]) {
        const a = new Date(l.value[0].value);
        e.push(a);
      }
      if (l.value[1]) {
        const a = new Date(l.value[1].value);
        e.push(a);
      }
      return e;
    }), l = v(() => {
      let e = null;
      if (o.value.length < 2)
        e = o.value;
      else {
        const a = o.value[0], n = o.value[1], t = new Date(a.value), h = new Date(n.value);
        t > h ? e = [o.value[1], o.value[0]] : e = o.value;
      }
      return d && (S(e), d = !1), O(e), e;
    });
    let d = !1;
    const I = (e) => {
      d = !0, o.value.length < 2 ? o.value.push(e) : o.value = [e];
    }, M = (e) => {
    };
    return (e, a) => (u(), c("div", N, [
      s("table", q, [
        s("thead", G, [
          s("tr", null, [
            (u(!0), c(f, null, D(r(k), (n, t) => (u(), c("th", { key: t }, [
              s("div", H, p(n), 1)
            ]))), 128))
          ])
        ]),
        s("tbody", J, [
          s("div", K, [
            (u(), c(f, null, D(w, (n) => s("tr", { key: n }, [
              (u(!0), c(f, null, D(r(x).slice((n - 1) * 7, (n - 1) * 7 + 7), (t) => (u(), c("td", {
                key: t.value,
                class: g(["cell", {
                  "cell--in-range": A(t.value),
                  "cell--start-item": r(l)[0] && t.value === r(l)[0].value,
                  "cell--end-item": r(l)[1] && t.value === r(l)[1].value
                }])
              }, [
                s("div", {
                  class: g(["calendar-item tbody-item", {
                    "tbody-item--grey": t.grey,
                    "tbody-item--start": r(l)[0] && t.value === r(l)[0].value,
                    "tbody-item--end": r(l)[1] && t.value === r(l)[1].value
                  }]),
                  onClick: (h) => I(t),
                  onMouseover: (h) => M()
                }, p(t.date), 43, Q)
              ], 2))), 128))
            ])), 64))
          ])
        ])
      ])
    ]));
  }
}, Z = /* @__PURE__ */ z(T, [["__scopeId", "data-v-00f02a65"]]);
export {
  Z as default
};
