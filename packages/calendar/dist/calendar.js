import { toRefs as ie, openBlock as T, createElementBlock as j, createElementVNode as M, toDisplayString as se, unref as $, computed as E, inject as fe, ref as X, watch as ve, Fragment as re, renderList as ae, normalizeClass as U, createVNode as oe, provide as me, renderSlot as pe, toRaw as ye } from "vue";
const le = (d, w = null) => {
  if (d.install = (i) => {
    for (const p of [d, ...Object.values(w ?? {})])
      i.component(p.name, p);
  }, w)
    for (const [i, p] of Object.entries(w))
      d[i] = p;
  return d;
}, $e = (d = []) => ({
  install: (i) => {
    console.log(d), d.forEach((p) => i.use(p));
  }
});
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ge(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var he = { exports: {} };
(function(d, w) {
  (function(i, p) {
    d.exports = p();
  })(De, function() {
    var i = 1e3, p = 6e4, f = 36e5, S = "millisecond", g = "second", x = "minute", v = "hour", u = "day", l = "week", O = "month", q = "quarter", I = "year", N = "date", Y = "Invalid Date", z = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ee = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, te = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(a) {
      var n = ["th", "st", "nd", "rd"], e = a % 100;
      return "[" + a + (n[(e - 20) % 10] || n[e] || n[0]) + "]";
    } }, c = function(a, n, e) {
      var r = String(a);
      return !r || r.length >= n ? a : "" + Array(n + 1 - r.length).join(e) + a;
    }, R = { s: c, z: function(a) {
      var n = -a.utcOffset(), e = Math.abs(n), r = Math.floor(e / 60), t = e % 60;
      return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(t, 2, "0");
    }, m: function a(n, e) {
      if (n.date() < e.date())
        return -a(e, n);
      var r = 12 * (e.year() - n.year()) + (e.month() - n.month()), t = n.clone().add(r, O), s = e - t < 0, o = n.clone().add(r + (s ? -1 : 1), O);
      return +(-(r + (e - t) / (s ? t - o : o - t)) || 0);
    }, a: function(a) {
      return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }, p: function(a) {
      return { M: O, y: I, w: l, d: u, D: N, h: v, m: x, s: g, ms: S, Q: q }[a] || String(a || "").toLowerCase().replace(/s$/, "");
    }, u: function(a) {
      return a === void 0;
    } }, _ = "en", y = {};
    y[_] = te;
    var W = "$isDayjsObject", ne = function(a) {
      return a instanceof Q || !(!a || !a[W]);
    }, G = function a(n, e, r) {
      var t;
      if (!n)
        return _;
      if (typeof n == "string") {
        var s = n.toLowerCase();
        y[s] && (t = s), e && (y[s] = e, t = s);
        var o = n.split("-");
        if (!t && o.length > 1)
          return a(o[0]);
      } else {
        var m = n.name;
        y[m] = n, t = m;
      }
      return !r && t && (_ = t), t || !r && _;
    }, b = function(a, n) {
      if (ne(a))
        return a.clone();
      var e = typeof n == "object" ? n : {};
      return e.date = a, e.args = arguments, new Q(e);
    }, h = R;
    h.l = G, h.i = ne, h.w = function(a, n) {
      return b(a, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var Q = function() {
      function a(e) {
        this.$L = G(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[W] = !0;
      }
      var n = a.prototype;
      return n.parse = function(e) {
        this.$d = function(r) {
          var t = r.date, s = r.utc;
          if (t === null)
            return /* @__PURE__ */ new Date(NaN);
          if (h.u(t))
            return /* @__PURE__ */ new Date();
          if (t instanceof Date)
            return new Date(t);
          if (typeof t == "string" && !/Z$/i.test(t)) {
            var o = t.match(z);
            if (o) {
              var m = o[2] - 1 || 0, D = (o[7] || "0").substring(0, 3);
              return s ? new Date(Date.UTC(o[1], m, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, D)) : new Date(o[1], m, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, D);
            }
          }
          return new Date(t);
        }(e), this.init();
      }, n.init = function() {
        var e = this.$d;
        this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
      }, n.$utils = function() {
        return h;
      }, n.isValid = function() {
        return this.$d.toString() !== Y;
      }, n.isSame = function(e, r) {
        var t = b(e);
        return this.startOf(r) <= t && t <= this.endOf(r);
      }, n.isAfter = function(e, r) {
        return b(e) < this.startOf(r);
      }, n.isBefore = function(e, r) {
        return this.endOf(r) < b(e);
      }, n.$g = function(e, r, t) {
        return h.u(e) ? this[r] : this.set(t, e);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(e, r) {
        var t = this, s = !!h.u(r) || r, o = h.p(e), m = function(F, P) {
          var A = h.w(t.$u ? Date.UTC(t.$y, P, F) : new Date(t.$y, P, F), t);
          return s ? A : A.endOf(u);
        }, D = function(F, P) {
          return h.w(t.toDate()[F].apply(t.toDate("s"), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(P)), t);
        }, k = this.$W, C = this.$M, H = this.$D, V = "set" + (this.$u ? "UTC" : "");
        switch (o) {
          case I:
            return s ? m(1, 0) : m(31, 11);
          case O:
            return s ? m(1, C) : m(0, C + 1);
          case l:
            var L = this.$locale().weekStart || 0, B = (k < L ? k + 7 : k) - L;
            return m(s ? H - B : H + (6 - B), C);
          case u:
          case N:
            return D(V + "Hours", 0);
          case v:
            return D(V + "Minutes", 1);
          case x:
            return D(V + "Seconds", 2);
          case g:
            return D(V + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(e) {
        return this.startOf(e, !1);
      }, n.$set = function(e, r) {
        var t, s = h.p(e), o = "set" + (this.$u ? "UTC" : ""), m = (t = {}, t[u] = o + "Date", t[N] = o + "Date", t[O] = o + "Month", t[I] = o + "FullYear", t[v] = o + "Hours", t[x] = o + "Minutes", t[g] = o + "Seconds", t[S] = o + "Milliseconds", t)[s], D = s === u ? this.$D + (r - this.$W) : r;
        if (s === O || s === I) {
          var k = this.clone().set(N, 1);
          k.$d[m](D), k.init(), this.$d = k.set(N, Math.min(this.$D, k.daysInMonth())).$d;
        } else
          m && this.$d[m](D);
        return this.init(), this;
      }, n.set = function(e, r) {
        return this.clone().$set(e, r);
      }, n.get = function(e) {
        return this[h.p(e)]();
      }, n.add = function(e, r) {
        var t, s = this;
        e = Number(e);
        var o = h.p(r), m = function(C) {
          var H = b(s);
          return h.w(H.date(H.date() + Math.round(C * e)), s);
        };
        if (o === O)
          return this.set(O, this.$M + e);
        if (o === I)
          return this.set(I, this.$y + e);
        if (o === u)
          return m(1);
        if (o === l)
          return m(7);
        var D = (t = {}, t[x] = p, t[v] = f, t[g] = i, t)[o] || 1, k = this.$d.getTime() + e * D;
        return h.w(k, this);
      }, n.subtract = function(e, r) {
        return this.add(-1 * e, r);
      }, n.format = function(e) {
        var r = this, t = this.$locale();
        if (!this.isValid())
          return t.invalidDate || Y;
        var s = e || "YYYY-MM-DDTHH:mm:ssZ", o = h.z(this), m = this.$H, D = this.$m, k = this.$M, C = t.weekdays, H = t.months, V = t.meridiem, L = function(P, A, J, K) {
          return P && (P[A] || P(r, s)) || J[A].slice(0, K);
        }, B = function(P) {
          return h.s(m % 12 || 12, P, "0");
        }, F = V || function(P, A, J) {
          var K = P < 12 ? "AM" : "PM";
          return J ? K.toLowerCase() : K;
        };
        return s.replace(ee, function(P, A) {
          return A || function(J) {
            switch (J) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return h.s(r.$y, 4, "0");
              case "M":
                return k + 1;
              case "MM":
                return h.s(k + 1, 2, "0");
              case "MMM":
                return L(t.monthsShort, k, H, 3);
              case "MMMM":
                return L(H, k);
              case "D":
                return r.$D;
              case "DD":
                return h.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return L(t.weekdaysMin, r.$W, C, 2);
              case "ddd":
                return L(t.weekdaysShort, r.$W, C, 3);
              case "dddd":
                return C[r.$W];
              case "H":
                return String(m);
              case "HH":
                return h.s(m, 2, "0");
              case "h":
                return B(1);
              case "hh":
                return B(2);
              case "a":
                return F(m, D, !0);
              case "A":
                return F(m, D, !1);
              case "m":
                return String(D);
              case "mm":
                return h.s(D, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return h.s(r.$s, 2, "0");
              case "SSS":
                return h.s(r.$ms, 3, "0");
              case "Z":
                return o;
            }
            return null;
          }(P) || o.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(e, r, t) {
        var s, o = this, m = h.p(r), D = b(e), k = (D.utcOffset() - this.utcOffset()) * p, C = this - D, H = function() {
          return h.m(o, D);
        };
        switch (m) {
          case I:
            s = H() / 12;
            break;
          case O:
            s = H();
            break;
          case q:
            s = H() / 3;
            break;
          case l:
            s = (C - k) / 6048e5;
            break;
          case u:
            s = (C - k) / 864e5;
            break;
          case v:
            s = C / f;
            break;
          case x:
            s = C / p;
            break;
          case g:
            s = C / i;
            break;
          default:
            s = C;
        }
        return t ? s : h.a(s);
      }, n.daysInMonth = function() {
        return this.endOf(O).$D;
      }, n.$locale = function() {
        return y[this.$L];
      }, n.locale = function(e, r) {
        if (!e)
          return this.$L;
        var t = this.clone(), s = G(e, r, !0);
        return s && (t.$L = s), t;
      }, n.clone = function() {
        return h.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, a;
    }(), ce = Q.prototype;
    return b.prototype = ce, [["$ms", S], ["$s", g], ["$m", x], ["$H", v], ["$W", u], ["$M", O], ["$y", I], ["$D", N]].forEach(function(a) {
      ce[a[1]] = function(n) {
        return this.$g(n, a[0], a[1]);
      };
    }), b.extend = function(a, n) {
      return a.$i || (a(n, Q, b), a.$i = !0), b;
    }, b.locale = G, b.isDayjs = ne, b.unix = function(a) {
      return b(1e3 * a);
    }, b.en = y[_], b.Ls = y, b.p = {}, b;
  });
})(he);
var _e = he.exports;
const Z = /* @__PURE__ */ ge(_e);
function Ee(d) {
  return Z(d);
}
const Me = { class: "control-switcher-container" }, we = {
  __name: "ControlSwitcher",
  props: {
    currentDateString: {
      type: String,
      default: ""
    }
  },
  emits: ["prev-year", "prev-month", "next-month", "next-year"],
  setup(d, { emit: w }) {
    const i = d, { currentDateString: p } = ie(i), f = w, S = () => {
      f("prev-year");
    }, g = () => {
      f("prev-month");
    }, x = () => {
      f("next-month");
    }, v = () => {
      f("next-year");
    };
    return (u, l) => (T(), j("div", Me, [
      M("div", { class: "switcher" }, [
        M("div", {
          class: "switch-icon prev-y",
          onClick: S
        }),
        M("div", {
          class: "switch-icon prev-m",
          onClick: g
        })
      ]),
      M("div", null, se($(p)), 1),
      M("div", { class: "switcher" }, [
        M("div", {
          class: "switch-icon next-m",
          onClick: x
        }),
        M("div", {
          class: "switch-icon next-y",
          onClick: v
        })
      ])
    ]));
  }
}, ue = (d, w) => {
  const i = d.__vccOpts || d;
  for (const [p, f] of w)
    i[p] = f;
  return i;
}, Se = { class: "date-panel-container" }, be = { class: "calendar-table" }, ke = { class: "calendar-thead" }, xe = { class: "calendar-item" }, Oe = { class: "calendar-tbody" }, Ce = { class: "tbody-wrap" }, Ye = ["onClick", "onMouseover"], de = 6, Re = {
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
  setup(d) {
    const w = d, { sevenDay: i, showDate: p } = ie(w), f = E(() => ({
      year: p.value.year,
      month: p.value.month - 1
    })), { range: S, format: g, calendarChange: x, onSelectDateRange: v } = fe("rootAttr"), u = (c) => ({
      year: c.year(),
      month: c.month(),
      date: c.date(),
      value: c.format(g.value),
      dayjs: c,
      grey: c.month() !== f.value.month
    }), l = X([]);
    ve(S, (c) => {
      const _ = c.map((y) => u(y));
      l.value = _;
    }, { immediate: !0 });
    const O = E(() => {
      const c = new Date(f.value.year, f.value.month);
      return Z(c).startOf("month").startOf("week");
    }), q = E(() => Array(de * 7).fill(0).map((c, R) => {
      const _ = O.value.add(R, "day");
      return u(_);
    })), I = (c) => {
      if (N.value.length !== 2)
        return !1;
      const R = new Date(c), _ = N.value[0], y = N.value[1];
      return R >= _ && R <= y;
    }, N = E(() => {
      const c = [];
      if (Y.value[0]) {
        const R = new Date(Y.value[0].value);
        c.push(R);
      }
      if (Y.value[1]) {
        const R = new Date(Y.value[1].value);
        c.push(R);
      }
      return c;
    }), Y = E(() => {
      let c = null;
      if (l.value.length < 2)
        c = l.value;
      else {
        const R = l.value[0], _ = l.value[1], y = new Date(R.value), W = new Date(_.value);
        y > W ? c = [l.value[1], l.value[0]] : c = l.value;
      }
      return z && (v(c), z = !1), x(c), c;
    });
    let z = !1;
    const ee = (c) => {
      z = !0, l.value.length < 2 ? l.value.push(c) : l.value = [c];
    }, te = (c) => {
    };
    return (c, R) => (T(), j("div", Se, [
      M("table", be, [
        M("thead", ke, [
          M("tr", null, [
            (T(!0), j(re, null, ae($(i), (_, y) => (T(), j("th", { key: y }, [
              M("div", xe, se(_), 1)
            ]))), 128))
          ])
        ]),
        M("tbody", Oe, [
          M("div", Ce, [
            (T(), j(re, null, ae(de, (_) => M("tr", { key: _ }, [
              (T(!0), j(re, null, ae($(q).slice((_ - 1) * 7, (_ - 1) * 7 + 7), (y) => (T(), j("td", {
                key: y.value,
                class: U(["cell", {
                  "cell--in-range": I(y.value),
                  "cell--start-item": $(Y)[0] && y.value === $(Y)[0].value,
                  "cell--end-item": $(Y)[1] && y.value === $(Y)[1].value
                }])
              }, [
                M("div", {
                  class: U(["calendar-item tbody-item", {
                    "tbody-item--grey": y.grey,
                    "tbody-item--start": $(Y)[0] && y.value === $(Y)[0].value,
                    "tbody-item--end": $(Y)[1] && y.value === $(Y)[1].value
                  }]),
                  onClick: (W) => ee(y),
                  onMouseover: (W) => te()
                }, se(y.date), 43, Ye)
              ], 2))), 128))
            ])), 64))
          ])
        ])
      ])
    ]));
  }
}, Pe = /* @__PURE__ */ ue(Re, [["__scopeId", "data-v-e3e51d57"]]), He = { class: "panel" }, Ie = {
  __name: "panel",
  setup(d) {
    const w = Z(), i = X({
      year: w.year(),
      month: w.month() + 1
    }), p = E(() => {
      const v = i.value.year, u = i.value.month - 1;
      return Z(new Date(v, u)).format("YYYY-MM");
    }), f = () => {
      i.value = {
        year: i.value.year - 1,
        month: i.value.month
      };
    }, S = () => {
      let v = i.value.month - 1, u = i.value.year;
      v === 0 && (v = 12, u--), i.value = {
        year: u,
        month: v
      };
    }, g = () => {
      let v = i.value.month + 1, u = i.value.year;
      v === 13 && (v = 1, u++), i.value = {
        year: u,
        month: v
      };
    }, x = () => {
      i.value = {
        year: i.value.year + 1,
        month: i.value.month
      };
    };
    return (v, u) => (T(), j("div", He, [
      oe(we, {
        onPrevYear: f,
        onPrevMonth: S,
        onNextMonth: g,
        onNextYear: x,
        currentDateString: $(p)
      }, null, 8, ["currentDateString"]),
      oe(Pe, { showDate: $(i) }, null, 8, ["showDate"])
    ]));
  }
}, Ne = /* @__PURE__ */ ue(Ie, [["__scopeId", "data-v-a3d36bde"]]), Te = { class: "calendar-container" }, je = {
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
  setup(d, { emit: w }) {
    const i = w, p = d, { format: f, range: S } = ie(p), g = X(), x = (l) => l.map((O) => ye(O.dayjs));
    return me("rootAttr", {
      range: S,
      format: f,
      calendarChange: (l) => {
        i("onCalendarChange", x(l));
      },
      onSelectDateRange: (l) => {
        g.value && g.value.resetStatus(), i("onSelectDateRange", x(l));
      }
    }), (l, O) => (T(), j("div", Te, [
      pe(l.$slots, "default", {}, void 0, !0),
      oe(Ne)
    ]));
  }
}, Ae = /* @__PURE__ */ ue(je, [["__scopeId", "data-v-482fe5a6"]]), Le = { class: "date-period" }, Fe = {
  __name: "period",
  emits: ["onSelectPeriod"],
  setup(d, { expose: w, emit: i }) {
    const p = i, f = Z(), S = X(""), g = (v, u, l) => {
      S.value = v, p("onSelectPeriod", v, [u, l]);
    };
    return w({ resetStatus: () => {
      S.value = "";
    } }), (v, u) => (T(), j("div", Le, [
      M("div", {
        class: U(["period-btn", { selected: $(S) === "近1周" }]),
        onClick: u[0] || (u[0] = (l) => g("近1周", $(f).subtract(7, "day"), $(f)))
      }, "近1周", 2),
      M("div", {
        class: U(["period-btn", { selected: $(S) === "近1月" }]),
        onClick: u[1] || (u[1] = (l) => g("近1月", $(f).subtract(1, "month"), $(f)))
      }, "近1月", 2),
      M("div", {
        class: U(["period-btn", { selected: $(S) === "近半年" }]),
        onClick: u[2] || (u[2] = (l) => g("近半年", $(f).subtract(6, "month"), $(f)))
      }, "近半年", 2),
      M("div", {
        class: U(["period-btn", { selected: $(S) === "近1年" }]),
        onClick: u[3] || (u[3] = (l) => g("近1年", $(f).subtract(1, "year"), $(f)))
      }, "近1年", 2)
    ]));
  }
}, We = [
  le(Ae),
  le(Fe)
], Ue = $e(We);
export {
  Ae as HCalendar,
  Fe as Period,
  Ue as default,
  Ee as packing
};
