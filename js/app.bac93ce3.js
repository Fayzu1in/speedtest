(function () {
  "use strict";
  var t = {
      3721: function (t, e, i) {
        var n = i(8935),
          s = function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { attrs: { id: "app" } }, [
              i("div", { attrs: { id: "wrapper" } }, [
                t._m(0),
                i("div", { attrs: { id: "mainDiv" } }, [
                  i("div", { attrs: { id: "upperDiv" } }, [
                    t._m(1),
                    i("div", { staticClass: "speedChecker" }, [
                      i(
                        "p",
                        {
                          class: { finished: t.finished },
                          attrs: { id: "speed-text" },
                        },
                        [t._v(t._s(t.speed + " Mb/s"))]
                      ),
                      t._m(2),
                      i(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.checkBtn,
                              expression: "checkBtn",
                            },
                          ],
                          attrs: { id: "checkBtn" },
                          on: { click: t.checkSpeed },
                        },
                        [t._v(" Check Internet Speed ")]
                      ),
                      i(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.checkBtnNone,
                              expression: "checkBtnNone",
                            },
                          ],
                          attrs: { id: "checkBtnNone" },
                        },
                        [t._v(" Check Internet Speed ")]
                      ),
                    ]),
                  ]),
                  i("div", { attrs: { id: "downDiv" } }, [
                    i("div", { staticClass: "listView" }, [
                      i("p", { attrs: { id: "ipSection" } }, [
                        t._v("IP address:"),
                      ]),
                      t._m(3),
                      i(
                        "div",
                        { staticClass: "list", attrs: { id: "clientList" } },
                        [
                          i("div", { staticClass: "leftSide" }, [
                            t._v("Client:"),
                          ]),
                          i("div", { attrs: { id: "clientRight" } }, [
                            t._v(t._s(t.clientIP)),
                          ]),
                        ]
                      ),
                      i(
                        "div",
                        { staticClass: "list", attrs: { id: "xIpList" } },
                        [
                          i("div", { staticClass: "leftSide" }, [
                            t._v("X-Ip-Region:"),
                          ]),
                          i("div", { attrs: { id: "xIpRight" } }, [
                            t._v(t._s(t.ipRegion)),
                          ]),
                        ]
                      ),
                      i(
                        "div",
                        { staticClass: "list", attrs: { id: "xSiteList" } },
                        [
                          i("div", { staticClass: "leftSide" }, [
                            t._v("X-Site-Region:"),
                          ]),
                          i("div", { attrs: { id: "xSiteRight" } }, [
                            t._v(t._s(t.siteRegion)),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  i(
                    "button",
                    {
                      staticClass: "copyBtn",
                      on: {
                        click: function (e) {
                          return t.copyText("clientRight");
                        },
                      },
                    },
                    [t._v(" Copy IP ")]
                  ),
                ]),
              ]),
            ]);
          },
          r = [
            function () {
              var t = this,
                e = t.$createElement,
                i = t._self._c || e;
              return i("div", { attrs: { id: "alertBox" } }, [
                i("p", { attrs: { id: "alertBox__text" } }, [
                  t._v("IP copied"),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n("a", { attrs: { href: "https://allplay.uz/" } }, [
                n("img", { attrs: { id: "logoImg", src: i(6316), alt: "" } }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                i = t._self._c || e;
              return i("div", { staticClass: "ring" }, [
                i("span", { staticClass: "span" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                i = t._self._c || e;
              return i(
                "div",
                { staticClass: "list first", attrs: { id: "serverList" } },
                [
                  i("div", { staticClass: "leftSide" }, [t._v("Server:")]),
                  i("div", { attrs: { id: "serverRight" } }, [
                    t._v("91.234.218.52"),
                  ]),
                ]
              );
            },
          ],
          a = {
            name: "App",
            components: {},
            data() {
              return {
                clientIP: "Client IP",
                ipRegion: "IP Region",
                siteRegion: "Site Region",
                fileUrl: "https://st16.allmovies.uz/test.bin",
                loaded: 0,
                timestamp: 0,
                speed: 0,
                finished: !1,
                checkBtn: !0,
                checkBtnNone: !1,
              };
            },
            methods: {
              copyText(t) {
                let e = document.createElement("input");
                e.setAttribute("value", document.getElementById(t).innerHTML),
                  document.body.appendChild(e),
                  e.select(),
                  document.execCommand("copy"),
                  document.body.removeChild(e),
                  (document.getElementById("alertBox").style.opacity = "1"),
                  setTimeout(function () {
                    document.getElementById("alertBox").style.opacity = "0";
                  }, 2e3);
              },
              checkSpeed() {
                let t = new XMLHttpRequest();
                (t.responseType = "arraybuffer"),
                  (t.onprogress = (t) => {
                    const e = t.loaded - this.loaded,
                      i = t.timeStamp - this.timestamp;
                    (this.speed = e / i / 1024),
                      this.speed <= 10
                        ? (this.speed = this.speed.toFixed(2))
                        : this.speed > 10 &&
                          (this.speed = Math.round(e / i / 1024)),
                      (this.loaded = t.loaded),
                      (this.timestamp = t.timeStamp),
                      (this.checkBtn = !1),
                      (this.checkBtnNone = !0);
                  }),
                  t.open("GET", "https://st16.allmovies.uz/test.bin"),
                  t.send(),
                  setTimeout(() => {
                    t.abort(),
                      (this.finished = !0),
                      (this.checkBtn = !0),
                      (this.checkBtnNone = !1);
                  }, 7e3);
              },
            },
            async mounted() {
              const t = await fetch("https://api.allplay.uz/api/v1/region");
              if (t.ok) {
                let e = await t.json();
                (this.clientIP = e.data.ip),
                  (this.ipRegion = e.data.ip_region),
                  (this.siteRegion = e.data.site_region);
              }
            },
          },
          o = a,
          c = i(1001),
          d = (0, c.Z)(o, s, r, !1, null, null, null),
          l = d.exports;
        (n.Z.config.productionTip = !1),
          new n.Z({ render: (t) => t(l) }).$mount("#app");
      },
      6316: function (t, e, i) {
        t.exports = i.p + "/allplayLogoWhite.f089b77b.png";
      },
    },
    e = {};
  function i(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var r = (e[n] = { exports: {} });
    return t[n](r, r.exports, i), r.exports;
  }
  (i.m = t),
    (function () {
      var t = [];
      i.O = function (e, n, s, r) {
        if (!n) {
          var a = 1 / 0;
          for (l = 0; l < t.length; l++) {
            (n = t[l][0]), (s = t[l][1]), (r = t[l][2]);
            for (var o = !0, c = 0; c < n.length; c++)
              (!1 & r || a >= r) &&
              Object.keys(i.O).every(function (t) {
                return i.O[t](n[c]);
              })
                ? n.splice(c--, 1)
                : ((o = !1), r < a && (a = r));
            if (o) {
              t.splice(l--, 1);
              var d = s();
              void 0 !== d && (e = d);
            }
          }
          return e;
        }
        r = r || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > r; l--) t[l] = t[l - 1];
        t[l] = [n, s, r];
      };
    })(),
    (function () {
      i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return i.d(e, { a: e }), e;
      };
    })(),
    (function () {
      i.d = function (t, e) {
        for (var n in e)
          i.o(e, n) &&
            !i.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      };
    })(),
    (function () {
      i.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      i.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      i.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, n) {
          var s,
            r,
            a = n[0],
            o = n[1],
            c = n[2],
            d = 0;
          if (
            a.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (s in o) i.o(o, s) && (i.m[s] = o[s]);
            if (c) var l = c(i);
          }
          for (e && e(n); d < a.length; d++)
            (r = a[d]), i.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return i.O(l);
        },
        n = (self["webpackChunkallplay_speed_test"] =
          self["webpackChunkallplay_speed_test"] || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var n = i.O(void 0, [998], function () {
    return i(3721);
  });
  n = i.O(n);
})();
//# sourceMappingURL=app.bac93ce3.js.map
