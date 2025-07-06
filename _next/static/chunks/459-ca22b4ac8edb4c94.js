(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [459], {
        8030: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(2265);
            /**
             * @license lucide-react v0.399.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                a = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.filter((e, t, n) => !!e && n.indexOf(e) === t).join(" ")
                };
            /**
             * @license lucide-react v0.399.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            var i = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            /**
             * @license lucide-react v0.399.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let u = (0, r.forwardRef)((e, t) => {
                    let {
                        color: n = "currentColor",
                        size: o = 24,
                        strokeWidth: u = 2,
                        absoluteStrokeWidth: l,
                        className: c = "",
                        children: s,
                        iconNode: d,
                        ...f
                    } = e;
                    return (0, r.createElement)("svg", {
                        ref: t,
                        ...i,
                        width: o,
                        height: o,
                        stroke: n,
                        strokeWidth: l ? 24 * Number(u) / Number(o) : u,
                        className: a("lucide", c),
                        ...f
                    }, [...d.map(e => {
                        let [t, n] = e;
                        return (0, r.createElement)(t, n)
                    }), ...Array.isArray(s) ? s : [s]])
                }),
                l = (e, t) => {
                    let n = (0, r.forwardRef)((n, i) => {
                        let {
                            className: l,
                            ...c
                        } = n;
                        return (0, r.createElement)(u, {
                            ref: i,
                            iconNode: t,
                            className: a("lucide-".concat(o(e)), l),
                            ...c
                        })
                    });
                    return n.displayName = "".concat(e), n
                }
        },
        4697: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.399.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(8030).Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        7138: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return o.a
                }
            });
            var r = n(231),
                o = n.n(r)
        },
        6463: function(e, t, n) {
            "use strict";
            var r = n(1169);
            n.o(r, "usePathname") && n.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            })
        },
        905: function(e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return r
                    },
                    default: function() {
                        return i
                    },
                    isEqualNode: function() {
                        return a
                    }
                });
            let r = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function o(e) {
                let {
                    type: t,
                    props: n
                } = e, o = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let a = r[e] || e.toLowerCase();
                    "script" === t && ("async" === a || "defer" === a || "noModule" === a) ? o[a] = !!n[e] : o.setAttribute(a, n[e])
                }
                let {
                    children: a,
                    dangerouslySetInnerHTML: i
                } = n;
                return i ? o.innerHTML = i.__html || "" : a && (o.textContent = "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""), o
            }

            function a(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
                    }
                }
                return e.isEqualNode(t)
            }

            function i() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let r = t.title ? t.title[0] : null,
                            o = "";
                        if (r) {
                            let {
                                children: e
                            } = r.props;
                            o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        o !== document.title && (document.title = o), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    i = Number(r.content),
                    u = [];
                for (let t = 0, n = r.previousElementSibling; t < i; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var l;
                    (null == n ? void 0 : null == (l = n.tagName) ? void 0 : l.toLowerCase()) === e && u.push(n)
                }
                let c = t.map(o).filter(e => {
                    for (let t = 0, n = u.length; t < n; t++)
                        if (a(u[t], e)) return u.splice(t, 1), !1;
                    return !0
                });
                u.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), c.forEach(e => n.insertBefore(e, r)), r.content = (i - u.length + c.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        4080: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return w
                    },
                    handleClientScriptLoad: function() {
                        return h
                    },
                    initScriptLoader: function() {
                        return y
                    }
                });
            let r = n(9920),
                o = n(1452),
                a = n(7437),
                i = r._(n(4887)),
                u = o._(n(2265)),
                l = n(6590),
                c = n(905),
                s = n(9189),
                d = new Map,
                f = new Set,
                p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                v = e => {
                    if (i.default.preinit) {
                        e.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                m = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: o = null,
                        dangerouslySetInnerHTML: a,
                        children: i = "",
                        strategy: u = "afterInteractive",
                        onError: l,
                        stylesheets: s
                    } = e, m = n || t;
                    if (m && f.has(m)) return;
                    if (d.has(t)) {
                        f.add(m), d.get(t).then(r, l);
                        return
                    }
                    let h = () => {
                            o && o(), f.add(m)
                        },
                        y = document.createElement("script"),
                        g = new Promise((e, t) => {
                            y.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), h()
                            }), y.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            l && l(e)
                        });
                    for (let [n, r] of(a ? (y.innerHTML = a.__html || "", h()) : i ? (y.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", h()) : t && (y.src = t, d.set(t, g)), Object.entries(e))) {
                        if (void 0 === r || p.includes(n)) continue;
                        let e = c.DOMAttributeNames[n] || n.toLowerCase();
                        y.setAttribute(e, r)
                    }
                    "worker" === u && y.setAttribute("type", "text/partytown"), y.setAttribute("data-nscript", u), s && v(s), document.body.appendChild(y)
                };

            function h(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, s.requestIdleCallback)(() => m(e))
                }) : m(e)
            }

            function y(e) {
                e.forEach(h), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function g(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: o = null,
                    strategy: c = "afterInteractive",
                    onError: d,
                    stylesheets: p,
                    ...v
                } = e, {
                    updateScripts: h,
                    scripts: y,
                    getIsSsr: g,
                    appDir: w,
                    nonce: E
                } = (0, u.useContext)(l.HeadManagerContext), b = (0, u.useRef)(!1);
                (0, u.useEffect)(() => {
                    let e = t || n;
                    b.current || (o && e && f.has(e) && o(), b.current = !0)
                }, [o, t, n]);
                let x = (0, u.useRef)(!1);
                if ((0, u.useEffect)(() => {
                        !x.current && ("afterInteractive" === c ? m(e) : "lazyOnload" === c && ("complete" === document.readyState ? (0, s.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                            (0, s.requestIdleCallback)(() => m(e))
                        })), x.current = !0)
                    }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (h ? (y[c] = (y[c] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: o,
                        onError: d,
                        ...v
                    }]), h(y)) : g && g() ? f.add(t || n) : g && !g() && m(e)), w) {
                    if (p && p.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === c) return n ? (i.default.preload(n, v.integrity ? {
                        as: "script",
                        integrity: v.integrity,
                        nonce: E
                    } : {
                        as: "script",
                        nonce: E
                    }), (0, a.jsx)("script", {
                        nonce: E,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, {
                                ...v,
                                id: t
                            }]) + ")"
                        }
                    })) : (v.dangerouslySetInnerHTML && (v.children = v.dangerouslySetInnerHTML.__html, delete v.dangerouslySetInnerHTML), (0, a.jsx)("script", {
                        nonce: E,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...v,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === c && n && i.default.preload(n, v.integrity ? {
                        as: "script",
                        integrity: v.integrity,
                        nonce: E
                    } : {
                        as: "script",
                        nonce: E
                    })
                }
                return null
            }
            Object.defineProperty(g, "__nextScript", {
                value: !0
            });
            let w = g;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8987: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__JetBrains_Mono_c5dbd7', '__JetBrains_Mono_Fallback_c5dbd7'",
                    fontStyle: "normal"
                },
                className: "__className_c5dbd7",
                variable: "__variable_c5dbd7"
            }
        },
        976: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return l
                }
            });
            var r = n(2265),
                o = n(8324),
                a = n(1584),
                i = n(1538),
                u = n(7437);

            function l(e) {
                let t = e + "CollectionProvider",
                    [n, l] = (0, o.b)(t),
                    [c, s] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), a = r.useRef(new Map).current;
                        return (0, u.jsx)(c, {
                            scope: t,
                            itemMap: a,
                            collectionRef: o,
                            children: n
                        })
                    };
                d.displayName = t;
                let f = e + "CollectionSlot",
                    p = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r
                        } = e, o = s(f, n), l = (0, a.e)(t, o.collectionRef);
                        return (0, u.jsx)(i.g7, {
                            ref: l,
                            children: r
                        })
                    });
                p.displayName = f;
                let v = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    h = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...l
                        } = e, c = r.useRef(null), d = (0, a.e)(t, c), f = s(v, n);
                        return r.useEffect(() => (f.itemMap.set(c, {
                            ref: c,
                            ...l
                        }), () => void f.itemMap.delete(c))), (0, u.jsx)(i.g7, {
                            [m]: "",
                            ref: d,
                            children: o
                        })
                    });
                return h.displayName = v, [{
                    Provider: d,
                    Slot: p,
                    ItemSlot: h
                }, function(t) {
                    let n = s(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, l]
            }
        },
        9673: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                x8: function() {
                    return tn
                },
                VY: function() {
                    return e6
                },
                dk: function() {
                    return tt
                },
                aV: function() {
                    return e9
                },
                h_: function() {
                    return e4
                },
                fC: function() {
                    return e3
                },
                Dx: function() {
                    return te
                },
                xz: function() {
                    return e8
                }
            });
            var o, a, i, u, l, c, s, d = n(2265),
                f = n(8149),
                p = n(1584),
                v = n(8324),
                m = n(3201),
                h = n(1715),
                y = n(3938),
                g = n(5171),
                w = n(5137),
                E = n(7437),
                b = "focusScope.autoFocusOnMount",
                x = "focusScope.autoFocusOnUnmount",
                C = {
                    bubbles: !1,
                    cancelable: !0
                },
                R = d.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...i
                    } = e, [u, l] = d.useState(null), c = (0, w.W)(o), s = (0, w.W)(a), f = d.useRef(null), v = (0, p.e)(t, e => l(e)), m = d.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    d.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (m.paused || !u) return;
                                    let t = e.target;
                                    u.contains(t) ? f.current = t : S(f.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (m.paused || !u) return;
                                    let t = e.relatedTarget;
                                    null === t || u.contains(t) || S(f.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && S(u)
                            });
                            return u && n.observe(u, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, u, m.paused]), d.useEffect(() => {
                        if (u) {
                            j.add(m);
                            let e = document.activeElement;
                            if (!u.contains(e)) {
                                let t = new CustomEvent(b, C);
                                u.addEventListener(b, c), u.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (S(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(T(u).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && S(u))
                            }
                            return () => {
                                u.removeEventListener(b, c), setTimeout(() => {
                                    let t = new CustomEvent(x, C);
                                    u.addEventListener(x, s), u.dispatchEvent(t), t.defaultPrevented || S(null != e ? e : document.body, {
                                        select: !0
                                    }), u.removeEventListener(x, s), j.remove(m)
                                }, 0)
                            }
                        }
                    }, [u, c, s, m]);
                    let h = d.useCallback(e => {
                        if (!n && !r || m.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, a] = function(e) {
                                    let t = T(e);
                                    return [M(t, e), M(t.reverse(), e)]
                                }(t);
                            r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && S(a, {
                                select: !0
                            })) : (e.preventDefault(), n && S(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, m.paused]);
                    return (0, E.jsx)(g.WV.div, {
                        tabIndex: -1,
                        ...i,
                        ref: v,
                        onKeyDown: h
                    })
                });

            function T(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function M(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function S(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            R.displayName = "FocusScope";
            var j = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = N(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = N(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function N(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var P = n(6935),
                A = n(1383),
                L = 0;

            function k() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
            var _ = function() {
                return (_ = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function I(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n
            }
            "function" == typeof SuppressedError && SuppressedError;
            var D = "right-scroll-bar-position",
                O = "width-before-scroll-bar";

            function F(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var W = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
                H = new WeakMap,
                K = (void 0 === o && (o = {}), (void 0 === a && (a = function(e) {
                    return e
                }), i = [], u = !1, l = {
                    read: function() {
                        if (u) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return i.length ? i[i.length - 1] : null
                    },
                    useMedium: function(e) {
                        var t = a(e, u);
                        return i.push(t),
                            function() {
                                i = i.filter(function(e) {
                                    return e !== t
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (u = !0; i.length;) {
                            var t = i;
                            i = [], t.forEach(e)
                        }
                        i = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return i
                            }
                        }
                    },
                    assignMedium: function(e) {
                        u = !0;
                        var t = [];
                        if (i.length) {
                            var n = i;
                            i = [], n.forEach(e), t = i
                        }
                        var r = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            o = function() {
                                return Promise.resolve().then(r)
                            };
                        o(), i = {
                            push: function(e) {
                                t.push(e), o()
                            },
                            filter: function(e) {
                                return t = t.filter(e), i
                            }
                        }
                    }
                }).options = _({
                    async: !0,
                    ssr: !1
                }, o), l),
                V = function() {},
                B = d.forwardRef(function(e, t) {
                    var n, r, o, a, i = d.useRef(null),
                        u = d.useState({
                            onScrollCapture: V,
                            onWheelCapture: V,
                            onTouchMoveCapture: V
                        }),
                        l = u[0],
                        c = u[1],
                        s = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        v = e.removeScrollBar,
                        m = e.enabled,
                        h = e.shards,
                        y = e.sideCar,
                        g = e.noIsolation,
                        w = e.inert,
                        E = e.allowPinchZoom,
                        b = e.as,
                        x = e.gapMode,
                        C = I(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        R = (n = [i, t], r = function(e) {
                            return n.forEach(function(t) {
                                return F(t, e)
                            })
                        }, (o = (0, d.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, a = o.facade, W(function() {
                            var e = H.get(a);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = a.current;
                                t.forEach(function(e) {
                                    r.has(e) || F(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || F(e, o)
                                })
                            }
                            H.set(a, n)
                        }, [n]), a),
                        T = _(_({}, C), l);
                    return d.createElement(d.Fragment, null, m && d.createElement(y, {
                        sideCar: K,
                        removeScrollBar: v,
                        shards: h,
                        noIsolation: g,
                        inert: w,
                        setCallbacks: c,
                        allowPinchZoom: !!E,
                        lockRef: i,
                        gapMode: x
                    }), s ? d.cloneElement(d.Children.only(f), _(_({}, T), {
                        ref: R
                    })) : d.createElement(void 0 === b ? "div" : b, _({}, T, {
                        className: p,
                        ref: R
                    }), f))
                });
            B.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, B.classNames = {
                fullWidth: O,
                zeroRight: D
            };
            var q = function(e) {
                var t = e.sideCar,
                    n = I(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return d.createElement(r, _({}, n))
            };
            q.isSideCarExport = !0;
            var z = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = s || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, a;
                                (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                X = function() {
                    var e = z();
                    return function(t, n) {
                        d.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                U = function() {
                    var e = X();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                Y = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                Z = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                $ = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [Z(n), Z(r), Z(o)]
                },
                J = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Y;
                    var t = $(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                G = U(),
                Q = "data-scroll-locked",
                ee = function(e, t, n, r) {
                    var o = e.left,
                        a = e.top,
                        i = e.right,
                        u = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body[").concat(Q, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(D, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(O, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(D, " .").concat(D, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(O, " .").concat(O, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(Q, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
                },
                et = function() {
                    var e = parseInt(document.body.getAttribute(Q) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                en = function() {
                    d.useEffect(function() {
                        return document.body.setAttribute(Q, (et() + 1).toString()),
                            function() {
                                var e = et() - 1;
                                e <= 0 ? document.body.removeAttribute(Q) : document.body.setAttribute(Q, e.toString())
                            }
                    }, [])
                },
                er = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    en();
                    var a = d.useMemo(function() {
                        return J(o)
                    }, [o]);
                    return d.createElement(G, {
                        styles: ee(a, !t, o, n ? "" : "!important")
                    })
                },
                eo = !1;
            if ("undefined" != typeof window) try {
                var ea = Object.defineProperty({}, "passive", {
                    get: function() {
                        return eo = !0, !0
                    }
                });
                window.addEventListener("test", ea, ea), window.removeEventListener("test", ea, ea)
            } catch (e) {
                eo = !1
            }
            var ei = !!eo && {
                    passive: !1
                },
                eu = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                el = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), ec(e, r)) {
                            var o = es(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                ec = function(e, t) {
                    return "v" === e ? eu(t, "overflowY") : eu(t, "overflowX")
                },
                es = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                ed = function(e, t, n, r, o) {
                    var a, i = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                        u = i * r,
                        l = n.target,
                        c = t.contains(l),
                        s = !1,
                        d = u > 0,
                        f = 0,
                        p = 0;
                    do {
                        var v = es(e, l),
                            m = v[0],
                            h = v[1] - v[2] - i * m;
                        (m || h) && ec(e, l) && (f += h, p += m), l instanceof ShadowRoot ? l = l.host : l = l.parentNode
                    } while (!c && l !== document.body || c && (t.contains(l) || t === l));
                    return d && (o && 1 > Math.abs(f) || !o && u > f) ? s = !0 : !d && (o && 1 > Math.abs(p) || !o && -u > p) && (s = !0), s
                },
                ef = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                ep = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                ev = function(e) {
                    return e && "current" in e ? e.current : e
                },
                em = 0,
                eh = [],
                ey = (c = function(e) {
                    var t = d.useRef([]),
                        n = d.useRef([0, 0]),
                        r = d.useRef(),
                        o = d.useState(em++)[0],
                        a = d.useState(U)[0],
                        i = d.useRef(e);
                    d.useEffect(function() {
                        i.current = e
                    }, [e]), d.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(o));
                            var t = (function(e, t, n) {
                                if (n || 2 == arguments.length)
                                    for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                                return e.concat(r || Array.prototype.slice.call(t))
                            })([e.lockRef.current], (e.shards || []).map(ev), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(o))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(o))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var u = d.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var o, a = ef(e),
                                u = n.current,
                                l = "deltaX" in e ? e.deltaX : u[0] - a[0],
                                c = "deltaY" in e ? e.deltaY : u[1] - a[1],
                                s = e.target,
                                d = Math.abs(l) > Math.abs(c) ? "h" : "v";
                            if ("touches" in e && "h" === d && "range" === s.type) return !1;
                            var f = el(d, s);
                            if (!f) return !0;
                            if (f ? o = d : (o = "v" === d ? "h" : "v", f = el(d, s)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (l || c) && (r.current = o), !o) return !0;
                            var p = r.current || o;
                            return ed(p, t, e, "h" === p ? l : c, !0)
                        }, []),
                        l = d.useCallback(function(e) {
                            if (eh.length && eh[eh.length - 1] === a) {
                                var n = "deltaY" in e ? ep(e) : ef(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var o = (i.current.shards || []).map(ev).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        c = d.useCallback(function(e, n, r, o) {
                            var a = {
                                name: e,
                                delta: n,
                                target: r,
                                should: o,
                                shadowParent: function(e) {
                                    for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                    return t
                                }(r)
                            };
                            t.current.push(a), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== a
                                })
                            }, 1)
                        }, []),
                        s = d.useCallback(function(e) {
                            n.current = ef(e), r.current = void 0
                        }, []),
                        f = d.useCallback(function(t) {
                            c(t.type, ep(t), t.target, u(t, e.lockRef.current))
                        }, []),
                        p = d.useCallback(function(t) {
                            c(t.type, ef(t), t.target, u(t, e.lockRef.current))
                        }, []);
                    d.useEffect(function() {
                        return eh.push(a), e.setCallbacks({
                                onScrollCapture: f,
                                onWheelCapture: f,
                                onTouchMoveCapture: p
                            }), document.addEventListener("wheel", l, ei), document.addEventListener("touchmove", l, ei), document.addEventListener("touchstart", s, ei),
                            function() {
                                eh = eh.filter(function(e) {
                                    return e !== a
                                }), document.removeEventListener("wheel", l, ei), document.removeEventListener("touchmove", l, ei), document.removeEventListener("touchstart", s, ei)
                            }
                    }, []);
                    var v = e.removeScrollBar,
                        m = e.inert;
                    return d.createElement(d.Fragment, null, m ? d.createElement(a, {
                        styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                    }) : null, v ? d.createElement(er, {
                        gapMode: e.gapMode
                    }) : null)
                }, K.useMedium(c), q),
                eg = d.forwardRef(function(e, t) {
                    return d.createElement(B, _({}, e, {
                        ref: t,
                        sideCar: ey
                    }))
                });
            eg.classNames = B.classNames;
            var ew = new WeakMap,
                eE = new WeakMap,
                eb = {},
                ex = 0,
                eC = function(e) {
                    return e && (e.host || eC(e.parentNode))
                },
                eR = function(e, t, n, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = eC(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    eb[n] || (eb[n] = new WeakMap);
                    var a = eb[n],
                        i = [],
                        u = new Set,
                        l = new Set(o),
                        c = function(e) {
                            !e || u.has(e) || (u.add(e), c(e.parentNode))
                        };
                    o.forEach(c);
                    var s = function(e) {
                        !e || l.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (u.has(e)) s(e);
                            else try {
                                var t = e.getAttribute(r),
                                    o = null !== t && "false" !== t,
                                    l = (ew.get(e) || 0) + 1,
                                    c = (a.get(e) || 0) + 1;
                                ew.set(e, l), a.set(e, c), i.push(e), 1 === l && o && eE.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return s(t), u.clear(), ex++,
                        function() {
                            i.forEach(function(e) {
                                var t = ew.get(e) - 1,
                                    o = a.get(e) - 1;
                                ew.set(e, t), a.set(e, o), t || (eE.has(e) || e.removeAttribute(r), eE.delete(e)), o || e.removeAttribute(n)
                            }), --ex || (ew = new WeakMap, ew = new WeakMap, eE = new WeakMap, eb = {})
                        }
                },
                eT = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), eR(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                },
                eM = n(1538),
                eS = "Dialog",
                [ej, eN] = (0, v.b)(eS),
                [eP, eA] = ej(eS),
                eL = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: a,
                        modal: i = !0
                    } = e, u = d.useRef(null), l = d.useRef(null), [c = !1, s] = (0, h.T)({
                        prop: r,
                        defaultProp: o,
                        onChange: a
                    });
                    return (0, E.jsx)(eP, {
                        scope: t,
                        triggerRef: u,
                        contentRef: l,
                        contentId: (0, m.M)(),
                        titleId: (0, m.M)(),
                        descriptionId: (0, m.M)(),
                        open: c,
                        onOpenChange: s,
                        onOpenToggle: d.useCallback(() => s(e => !e), [s]),
                        modal: i,
                        children: n
                    })
                };
            eL.displayName = eS;
            var ek = "DialogTrigger",
                e_ = d.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eA(ek, n), a = (0, p.e)(t, o.triggerRef);
                    return (0, E.jsx)(g.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": eQ(o.open),
                        ...r,
                        ref: a,
                        onClick: (0, f.M)(e.onClick, o.onOpenToggle)
                    })
                });
            e_.displayName = ek;
            var eI = "DialogPortal",
                [eD, eO] = ej(eI, {
                    forceMount: void 0
                }),
                eF = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, a = eA(eI, t);
                    return (0, E.jsx)(eD, {
                        scope: t,
                        forceMount: n,
                        children: d.Children.map(r, e => (0, E.jsx)(A.z, {
                            present: n || a.open,
                            children: (0, E.jsx)(P.h, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            eF.displayName = eI;
            var eW = "DialogOverlay",
                eH = d.forwardRef((e, t) => {
                    let n = eO(eW, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        a = eA(eW, e.__scopeDialog);
                    return a.modal ? (0, E.jsx)(A.z, {
                        present: r || a.open,
                        children: (0, E.jsx)(eK, {
                            ...o,
                            ref: t
                        })
                    }) : null
                });
            eH.displayName = eW;
            var eK = d.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eA(eW, n);
                    return (0, E.jsx)(eg, {
                        as: eM.g7,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, E.jsx)(g.WV.div, {
                            "data-state": eQ(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                eV = "DialogContent",
                eB = d.forwardRef((e, t) => {
                    let n = eO(eV, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        a = eA(eV, e.__scopeDialog);
                    return (0, E.jsx)(A.z, {
                        present: r || a.open,
                        children: a.modal ? (0, E.jsx)(eq, {
                            ...o,
                            ref: t
                        }) : (0, E.jsx)(ez, {
                            ...o,
                            ref: t
                        })
                    })
                });
            eB.displayName = eV;
            var eq = d.forwardRef((e, t) => {
                    let n = eA(eV, e.__scopeDialog),
                        r = d.useRef(null),
                        o = (0, p.e)(t, n.contentRef, r);
                    return d.useEffect(() => {
                        let e = r.current;
                        if (e) return eT(e)
                    }, []), (0, E.jsx)(eX, {
                        ...e,
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, f.M)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, f.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, f.M)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                ez = d.forwardRef((e, t) => {
                    let n = eA(eV, e.__scopeDialog),
                        r = d.useRef(!1),
                        o = d.useRef(!1);
                    return (0, E.jsx)(eX, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var a, i;
                            null === (a = e.onCloseAutoFocus) || void 0 === a || a.call(e, t), t.defaultPrevented || (r.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            var a, i;
                            null === (a = e.onInteractOutside) || void 0 === a || a.call(e, t), t.defaultPrevented || (r.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                            let u = t.target;
                            (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(u)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                eX = d.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: a,
                        ...i
                    } = e, u = eA(eV, n), l = d.useRef(null), c = (0, p.e)(t, l);
                    return d.useEffect(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : k()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : k()), L++, () => {
                            1 === L && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), L--
                        }
                    }, []), (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsx)(R, {
                            asChild: !0,
                            loop: !0,
                            trapped: r,
                            onMountAutoFocus: o,
                            onUnmountAutoFocus: a,
                            children: (0, E.jsx)(y.XB, {
                                role: "dialog",
                                id: u.contentId,
                                "aria-describedby": u.descriptionId,
                                "aria-labelledby": u.titleId,
                                "data-state": eQ(u.open),
                                ...i,
                                ref: c,
                                onDismiss: () => u.onOpenChange(!1)
                            })
                        }), (0, E.jsxs)(E.Fragment, {
                            children: [(0, E.jsx)(e7, {
                                titleId: u.titleId
                            }), (0, E.jsx)(e5, {
                                contentRef: l,
                                descriptionId: u.descriptionId
                            })]
                        })]
                    })
                }),
                eU = "DialogTitle",
                eY = d.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eA(eU, n);
                    return (0, E.jsx)(g.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            eY.displayName = eU;
            var eZ = "DialogDescription",
                e$ = d.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eA(eZ, n);
                    return (0, E.jsx)(g.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            e$.displayName = eZ;
            var eJ = "DialogClose",
                eG = d.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = eA(eJ, n);
                    return (0, E.jsx)(g.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, f.M)(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function eQ(e) {
                return e ? "open" : "closed"
            }
            eG.displayName = eJ;
            var e0 = "DialogTitleWarning",
                [e1, e2] = (0, v.k)(e0, {
                    contentName: eV,
                    titleName: eU,
                    docsSlug: "dialog"
                }),
                e7 = e => {
                    let {
                        titleId: t
                    } = e, n = e2(e0), r = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                    return d.useEffect(() => {
                        t && !document.getElementById(t) && console.error(r)
                    }, [r, t]), null
                },
                e5 = e => {
                    let {
                        contentRef: t,
                        descriptionId: n
                    } = e, r = e2("DialogDescriptionWarning"), o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName, "}.");
                    return d.useEffect(() => {
                        var e;
                        let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        n && r && !document.getElementById(n) && console.warn(o)
                    }, [o, t, n]), null
                },
                e3 = eL,
                e8 = e_,
                e4 = eF,
                e9 = eH,
                e6 = eB,
                te = eY,
                tt = e$,
                tn = eG
        },
        4504: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dx: function() {
                    return Q
                },
                aU: function() {
                    return et
                },
                dk: function() {
                    return ee
                },
                fC: function() {
                    return G
                },
                l_: function() {
                    return J
                },
                x8: function() {
                    return en
                },
                zt: function() {
                    return $
                }
            });
            var r = n(2265),
                o = n(4887),
                a = n(8149),
                i = n(1584),
                u = n(976),
                l = n(8324),
                c = n(3938),
                s = n(6935),
                d = n(1383),
                f = n(5171),
                p = n(5137),
                v = n(1715),
                m = n(1336),
                h = n(1725),
                y = n(7437),
                g = "ToastProvider",
                [w, E, b] = (0, u.B)("Toast"),
                [x, C] = (0, l.b)("Toast", [b]),
                [R, T] = x(g),
                M = e => {
                    let {
                        __scopeToast: t,
                        label: n = "Notification",
                        duration: o = 5e3,
                        swipeDirection: a = "right",
                        swipeThreshold: i = 50,
                        children: u
                    } = e, [l, c] = r.useState(null), [s, d] = r.useState(0), f = r.useRef(!1), p = r.useRef(!1);
                    return n.trim() || console.error("Invalid prop `label` supplied to `".concat(g, "`. Expected non-empty `string`.")), (0, y.jsx)(w.Provider, {
                        scope: t,
                        children: (0, y.jsx)(R, {
                            scope: t,
                            label: n,
                            duration: o,
                            swipeDirection: a,
                            swipeThreshold: i,
                            toastCount: s,
                            viewport: l,
                            onViewportChange: c,
                            onToastAdd: r.useCallback(() => d(e => e + 1), []),
                            onToastRemove: r.useCallback(() => d(e => e - 1), []),
                            isFocusedToastEscapeKeyDownRef: f,
                            isClosePausedRef: p,
                            children: u
                        })
                    })
                };
            M.displayName = g;
            var S = "ToastViewport",
                j = ["F8"],
                N = "toast.viewportPause",
                P = "toast.viewportResume",
                A = r.forwardRef((e, t) => {
                    let {
                        __scopeToast: n,
                        hotkey: o = j,
                        label: a = "Notifications ({hotkey})",
                        ...u
                    } = e, l = T(S, n), s = E(n), d = r.useRef(null), p = r.useRef(null), v = r.useRef(null), m = r.useRef(null), h = (0, i.e)(t, m, l.onViewportChange), g = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = l.toastCount > 0;
                    r.useEffect(() => {
                        let e = e => {
                            var t;
                            o.every(t => e[t] || e.code === t) && (null === (t = m.current) || void 0 === t || t.focus())
                        };
                        return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                    }, [o]), r.useEffect(() => {
                        let e = d.current,
                            t = m.current;
                        if (b && e && t) {
                            let n = () => {
                                    if (!l.isClosePausedRef.current) {
                                        let e = new CustomEvent(N);
                                        t.dispatchEvent(e), l.isClosePausedRef.current = !0
                                    }
                                },
                                r = () => {
                                    if (l.isClosePausedRef.current) {
                                        let e = new CustomEvent(P);
                                        t.dispatchEvent(e), l.isClosePausedRef.current = !1
                                    }
                                },
                                o = t => {
                                    e.contains(t.relatedTarget) || r()
                                },
                                a = () => {
                                    e.contains(document.activeElement) || r()
                                };
                            return e.addEventListener("focusin", n), e.addEventListener("focusout", o), e.addEventListener("pointermove", n), e.addEventListener("pointerleave", a), window.addEventListener("blur", n), window.addEventListener("focus", r), () => {
                                e.removeEventListener("focusin", n), e.removeEventListener("focusout", o), e.removeEventListener("pointermove", n), e.removeEventListener("pointerleave", a), window.removeEventListener("blur", n), window.removeEventListener("focus", r)
                            }
                        }
                    }, [b, l.isClosePausedRef]);
                    let x = r.useCallback(e => {
                        let {
                            tabbingDirection: t
                        } = e, n = s().map(e => {
                            let n = e.ref.current,
                                r = [n, ... function(e) {
                                    let t = [],
                                        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                            acceptNode: e => {
                                                let t = "INPUT" === e.tagName && "hidden" === e.type;
                                                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                                            }
                                        });
                                    for (; n.nextNode();) t.push(n.currentNode);
                                    return t
                                }(n)];
                            return "forwards" === t ? r : r.reverse()
                        });
                        return ("forwards" === t ? n.reverse() : n).flat()
                    }, [s]);
                    return r.useEffect(() => {
                        let e = m.current;
                        if (e) {
                            let t = t => {
                                let n = t.altKey || t.ctrlKey || t.metaKey;
                                if ("Tab" === t.key && !n) {
                                    var r, o, a;
                                    let n = document.activeElement,
                                        i = t.shiftKey;
                                    if (t.target === e && i) {
                                        null === (r = p.current) || void 0 === r || r.focus();
                                        return
                                    }
                                    let u = x({
                                            tabbingDirection: i ? "backwards" : "forwards"
                                        }),
                                        l = u.findIndex(e => e === n);
                                    Z(u.slice(l + 1)) ? t.preventDefault() : i ? null === (o = p.current) || void 0 === o || o.focus() : null === (a = v.current) || void 0 === a || a.focus()
                                }
                            };
                            return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
                        }
                    }, [s, x]), (0, y.jsxs)(c.I0, {
                        ref: d,
                        role: "region",
                        "aria-label": a.replace("{hotkey}", g),
                        tabIndex: -1,
                        style: {
                            pointerEvents: b ? void 0 : "none"
                        },
                        children: [b && (0, y.jsx)(k, {
                            ref: p,
                            onFocusFromOutsideViewport: () => {
                                Z(x({
                                    tabbingDirection: "forwards"
                                }))
                            }
                        }), (0, y.jsx)(w.Slot, {
                            scope: n,
                            children: (0, y.jsx)(f.WV.ol, {
                                tabIndex: -1,
                                ...u,
                                ref: h
                            })
                        }), b && (0, y.jsx)(k, {
                            ref: v,
                            onFocusFromOutsideViewport: () => {
                                Z(x({
                                    tabbingDirection: "backwards"
                                }))
                            }
                        })]
                    })
                });
            A.displayName = S;
            var L = "ToastFocusProxy",
                k = r.forwardRef((e, t) => {
                    let {
                        __scopeToast: n,
                        onFocusFromOutsideViewport: r,
                        ...o
                    } = e, a = T(L, n);
                    return (0, y.jsx)(h.T, {
                        "aria-hidden": !0,
                        tabIndex: 0,
                        ...o,
                        ref: t,
                        style: {
                            position: "fixed"
                        },
                        onFocus: e => {
                            var t;
                            let n = e.relatedTarget;
                            (null === (t = a.viewport) || void 0 === t ? void 0 : t.contains(n)) || r()
                        }
                    })
                });
            k.displayName = L;
            var _ = "Toast",
                I = r.forwardRef((e, t) => {
                    let {
                        forceMount: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: i,
                        ...u
                    } = e, [l = !0, c] = (0, v.T)({
                        prop: r,
                        defaultProp: o,
                        onChange: i
                    });
                    return (0, y.jsx)(d.z, {
                        present: n || l,
                        children: (0, y.jsx)(F, {
                            open: l,
                            ...u,
                            ref: t,
                            onClose: () => c(!1),
                            onPause: (0, p.W)(e.onPause),
                            onResume: (0, p.W)(e.onResume),
                            onSwipeStart: (0, a.M)(e.onSwipeStart, e => {
                                e.currentTarget.setAttribute("data-swipe", "start")
                            }),
                            onSwipeMove: (0, a.M)(e.onSwipeMove, e => {
                                let {
                                    x: t,
                                    y: n
                                } = e.detail.delta;
                                e.currentTarget.setAttribute("data-swipe", "move"), e.currentTarget.style.setProperty("--radix-toast-swipe-move-x", "".concat(t, "px")), e.currentTarget.style.setProperty("--radix-toast-swipe-move-y", "".concat(n, "px"))
                            }),
                            onSwipeCancel: (0, a.M)(e.onSwipeCancel, e => {
                                e.currentTarget.setAttribute("data-swipe", "cancel"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                            }),
                            onSwipeEnd: (0, a.M)(e.onSwipeEnd, e => {
                                let {
                                    x: t,
                                    y: n
                                } = e.detail.delta;
                                e.currentTarget.setAttribute("data-swipe", "end"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), e.currentTarget.style.setProperty("--radix-toast-swipe-end-x", "".concat(t, "px")), e.currentTarget.style.setProperty("--radix-toast-swipe-end-y", "".concat(n, "px")), c(!1)
                            })
                        })
                    })
                });
            I.displayName = _;
            var [D, O] = x(_, {
                onClose() {}
            }), F = r.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    type: u = "foreground",
                    duration: l,
                    open: s,
                    onClose: d,
                    onEscapeKeyDown: v,
                    onPause: m,
                    onResume: h,
                    onSwipeStart: g,
                    onSwipeMove: E,
                    onSwipeCancel: b,
                    onSwipeEnd: x,
                    ...C
                } = e, R = T(_, n), [M, S] = r.useState(null), j = (0, i.e)(t, e => S(e)), A = r.useRef(null), L = r.useRef(null), k = l || R.duration, I = r.useRef(0), O = r.useRef(k), F = r.useRef(0), {
                    onToastAdd: H,
                    onToastRemove: K
                } = R, V = (0, p.W)(() => {
                    var e;
                    (null == M ? void 0 : M.contains(document.activeElement)) && (null === (e = R.viewport) || void 0 === e || e.focus()), d()
                }), B = r.useCallback(e => {
                    e && e !== 1 / 0 && (window.clearTimeout(F.current), I.current = new Date().getTime(), F.current = window.setTimeout(V, e))
                }, [V]);
                r.useEffect(() => {
                    let e = R.viewport;
                    if (e) {
                        let t = () => {
                                B(O.current), null == h || h()
                            },
                            n = () => {
                                let e = new Date().getTime() - I.current;
                                O.current = O.current - e, window.clearTimeout(F.current), null == m || m()
                            };
                        return e.addEventListener(N, n), e.addEventListener(P, t), () => {
                            e.removeEventListener(N, n), e.removeEventListener(P, t)
                        }
                    }
                }, [R.viewport, k, m, h, B]), r.useEffect(() => {
                    s && !R.isClosePausedRef.current && B(k)
                }, [s, k, R.isClosePausedRef, B]), r.useEffect(() => (H(), () => K()), [H, K]);
                let q = r.useMemo(() => M ? function e(t) {
                    let n = [];
                    return Array.from(t.childNodes).forEach(t => {
                        if (t.nodeType === t.TEXT_NODE && t.textContent && n.push(t.textContent), t.nodeType === t.ELEMENT_NODE) {
                            let r = t.ariaHidden || t.hidden || "none" === t.style.display,
                                o = "" === t.dataset.radixToastAnnounceExclude;
                            if (!r) {
                                if (o) {
                                    let e = t.dataset.radixToastAnnounceAlt;
                                    e && n.push(e)
                                } else n.push(...e(t))
                            }
                        }
                    }), n
                }(M) : null, [M]);
                return R.viewport ? (0, y.jsxs)(y.Fragment, {
                    children: [q && (0, y.jsx)(W, {
                        __scopeToast: n,
                        role: "status",
                        "aria-live": "foreground" === u ? "assertive" : "polite",
                        "aria-atomic": !0,
                        children: q
                    }), (0, y.jsx)(D, {
                        scope: n,
                        onClose: V,
                        children: o.createPortal((0, y.jsx)(w.ItemSlot, {
                            scope: n,
                            children: (0, y.jsx)(c.fC, {
                                asChild: !0,
                                onEscapeKeyDown: (0, a.M)(v, () => {
                                    R.isFocusedToastEscapeKeyDownRef.current || V(), R.isFocusedToastEscapeKeyDownRef.current = !1
                                }),
                                children: (0, y.jsx)(f.WV.li, {
                                    role: "status",
                                    "aria-live": "off",
                                    "aria-atomic": !0,
                                    tabIndex: 0,
                                    "data-state": s ? "open" : "closed",
                                    "data-swipe-direction": R.swipeDirection,
                                    ...C,
                                    ref: j,
                                    style: {
                                        userSelect: "none",
                                        touchAction: "none",
                                        ...e.style
                                    },
                                    onKeyDown: (0, a.M)(e.onKeyDown, e => {
                                        "Escape" !== e.key || (null == v || v(e.nativeEvent), e.nativeEvent.defaultPrevented || (R.isFocusedToastEscapeKeyDownRef.current = !0, V()))
                                    }),
                                    onPointerDown: (0, a.M)(e.onPointerDown, e => {
                                        0 === e.button && (A.current = {
                                            x: e.clientX,
                                            y: e.clientY
                                        })
                                    }),
                                    onPointerMove: (0, a.M)(e.onPointerMove, e => {
                                        if (!A.current) return;
                                        let t = e.clientX - A.current.x,
                                            n = e.clientY - A.current.y,
                                            r = !!L.current,
                                            o = ["left", "right"].includes(R.swipeDirection),
                                            a = ["left", "up"].includes(R.swipeDirection) ? Math.min : Math.max,
                                            i = o ? a(0, t) : 0,
                                            u = o ? 0 : a(0, n),
                                            l = "touch" === e.pointerType ? 10 : 2,
                                            c = {
                                                x: i,
                                                y: u
                                            },
                                            s = {
                                                originalEvent: e,
                                                delta: c
                                            };
                                        r ? (L.current = c, U("toast.swipeMove", E, s, {
                                            discrete: !1
                                        })) : Y(c, R.swipeDirection, l) ? (L.current = c, U("toast.swipeStart", g, s, {
                                            discrete: !1
                                        }), e.target.setPointerCapture(e.pointerId)) : (Math.abs(t) > l || Math.abs(n) > l) && (A.current = null)
                                    }),
                                    onPointerUp: (0, a.M)(e.onPointerUp, e => {
                                        let t = L.current,
                                            n = e.target;
                                        if (n.hasPointerCapture(e.pointerId) && n.releasePointerCapture(e.pointerId), L.current = null, A.current = null, t) {
                                            let n = e.currentTarget,
                                                r = {
                                                    originalEvent: e,
                                                    delta: t
                                                };
                                            Y(t, R.swipeDirection, R.swipeThreshold) ? U("toast.swipeEnd", x, r, {
                                                discrete: !0
                                            }) : U("toast.swipeCancel", b, r, {
                                                discrete: !0
                                            }), n.addEventListener("click", e => e.preventDefault(), {
                                                once: !0
                                            })
                                        }
                                    })
                                })
                            })
                        }), R.viewport)
                    })]
                }) : null
            }), W = e => {
                let {
                    __scopeToast: t,
                    children: n,
                    ...o
                } = e, a = T(_, t), [i, u] = r.useState(!1), [l, c] = r.useState(!1);
                return function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {},
                        t = (0, p.W)(e);
                    (0, m.b)(() => {
                        let e = 0,
                            n = 0;
                        return e = window.requestAnimationFrame(() => n = window.requestAnimationFrame(t)), () => {
                            window.cancelAnimationFrame(e), window.cancelAnimationFrame(n)
                        }
                    }, [t])
                }(() => u(!0)), r.useEffect(() => {
                    let e = window.setTimeout(() => c(!0), 1e3);
                    return () => window.clearTimeout(e)
                }, []), l ? null : (0, y.jsx)(s.h, {
                    asChild: !0,
                    children: (0, y.jsx)(h.T, {
                        ...o,
                        children: i && (0, y.jsxs)(y.Fragment, {
                            children: [a.label, " ", n]
                        })
                    })
                })
            }, H = r.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    ...r
                } = e;
                return (0, y.jsx)(f.WV.div, {
                    ...r,
                    ref: t
                })
            });
            H.displayName = "ToastTitle";
            var K = r.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    ...r
                } = e;
                return (0, y.jsx)(f.WV.div, {
                    ...r,
                    ref: t
                })
            });
            K.displayName = "ToastDescription";
            var V = "ToastAction",
                B = r.forwardRef((e, t) => {
                    let {
                        altText: n,
                        ...r
                    } = e;
                    return n.trim() ? (0, y.jsx)(X, {
                        altText: n,
                        asChild: !0,
                        children: (0, y.jsx)(z, {
                            ...r,
                            ref: t
                        })
                    }) : (console.error("Invalid prop `altText` supplied to `".concat(V, "`. Expected non-empty `string`.")), null)
                });
            B.displayName = V;
            var q = "ToastClose",
                z = r.forwardRef((e, t) => {
                    let {
                        __scopeToast: n,
                        ...r
                    } = e, o = O(q, n);
                    return (0, y.jsx)(X, {
                        asChild: !0,
                        children: (0, y.jsx)(f.WV.button, {
                            type: "button",
                            ...r,
                            ref: t,
                            onClick: (0, a.M)(e.onClick, o.onClose)
                        })
                    })
                });
            z.displayName = q;
            var X = r.forwardRef((e, t) => {
                let {
                    __scopeToast: n,
                    altText: r,
                    ...o
                } = e;
                return (0, y.jsx)(f.WV.div, {
                    "data-radix-toast-announce-exclude": "",
                    "data-radix-toast-announce-alt": r || void 0,
                    ...o,
                    ref: t
                })
            });

            function U(e, t, n, r) {
                let {
                    discrete: o
                } = r, a = n.originalEvent.currentTarget, i = new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                });
                t && a.addEventListener(e, t, {
                    once: !0
                }), o ? (0, f.jH)(a, i) : a.dispatchEvent(i)
            }
            var Y = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = Math.abs(e.x),
                    o = Math.abs(e.y),
                    a = r > o;
                return "left" === t || "right" === t ? a && r > n : !a && o > n
            };

            function Z(e) {
                let t = document.activeElement;
                return e.some(e => e === t || (e.focus(), document.activeElement !== t))
            }
            var $ = M,
                J = A,
                G = I,
                Q = H,
                ee = K,
                et = B,
                en = z
        },
        2218: function(e, t, n) {
            "use strict";
            n.d(t, {
                j: function() {
                    return a
                }
            });
            let r = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                o = function() {
                    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = function e(t) {
                        var n, r, o = "";
                        if ("string" == typeof t || "number" == typeof t) o += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t))
                                for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r);
                            else
                                for (n in t) t[n] && (o && (o += " "), o += n)
                        }
                        return o
                    }(e)) && (r && (r += " "), r += t);
                    return r
                },
                a = (e, t) => n => {
                    var a;
                    if ((null == t ? void 0 : t.variants) == null) return o(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
                    let {
                        variants: i,
                        defaultVariants: u
                    } = t, l = Object.keys(i).map(e => {
                        let t = null == n ? void 0 : n[e],
                            o = null == u ? void 0 : u[e];
                        if (null === t) return null;
                        let a = r(t) || r(o);
                        return i[e][a]
                    }), c = n && Object.entries(n).reduce((e, t) => {
                        let [n, r] = t;
                        return void 0 === r || (e[n] = r), e
                    }, {});
                    return o(e, l, null == t ? void 0 : null === (a = t.compoundVariants) || void 0 === a ? void 0 : a.reduce((e, t) => {
                        let {
                            class: n,
                            className: r,
                            ...o
                        } = t;
                        return Object.entries(o).every(e => {
                            let [t, n] = e;
                            return Array.isArray(n) ? n.includes({
                                ...u,
                                ...c
                            } [t]) : ({
                                ...u,
                                ...c
                            })[t] === n
                        }) ? [...e, n, r] : e
                    }, []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
                }
        },
        5127: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return g
                }
            });
            var r = n(7437),
                o = n(2265),
                a = n(9033);

            function i() {
                let e = (0, o.useRef)(!1);
                return (0, a.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var u = n(6219),
                l = n(7797),
                c = n(458),
                s = n(9791);
            class d extends o.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function f({
                children: e,
                isPresent: t
            }) {
                let n = (0, o.useId)(),
                    a = (0, o.useRef)(null),
                    i = (0, o.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    }),
                    {
                        nonce: u
                    } = (0, o.useContext)(s._);
                return (0, o.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: r,
                        top: o,
                        left: l
                    } = i.current;
                    if (t || !a.current || !e || !r) return;
                    a.current.dataset.motionPopId = n;
                    let c = document.createElement("style");
                    return u && (c.nonce = u), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `), () => {
                        document.head.removeChild(c)
                    }
                }, [t]), (0, r.jsx)(d, {
                    isPresent: t,
                    childRef: a,
                    sizeRef: i,
                    children: o.cloneElement(e, {
                        ref: a
                    })
                })
            }
            let p = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: a,
                custom: i,
                presenceAffectsLayout: u,
                mode: s
            }) => {
                let d = (0, c.h)(v),
                    p = (0, o.useId)(),
                    m = (0, o.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: n,
                        custom: i,
                        onExitComplete: e => {
                            for (let t of (d.set(e, !0), d.values()))
                                if (!t) return;
                            a && a()
                        },
                        register: e => (d.set(e, !1), () => d.delete(e))
                    }), u ? [Math.random()] : [n]);
                return (0, o.useMemo)(() => {
                    d.forEach((e, t) => d.set(t, !1))
                }, [n]), o.useEffect(() => {
                    n || d.size || !a || a()
                }, [n]), "popLayout" === s && (e = (0, r.jsx)(f, {
                    isPresent: n,
                    children: e
                })), (0, r.jsx)(l.O.Provider, {
                    value: m,
                    children: e
                })
            };

            function v() {
                return new Map
            }
            var m = n(5050),
                h = n(9047);
            let y = e => e.key || "",
                g = ({
                    children: e,
                    custom: t,
                    initial: n = !0,
                    onExitComplete: l,
                    exitBeforeEnter: c,
                    presenceAffectsLayout: s = !0,
                    mode: d = "sync"
                }) => {
                    var f;
                    (0, h.k)(!c, "Replace exitBeforeEnter with mode='wait'");
                    let v = (0, o.useContext)(m.p).forceRender || function() {
                            let e = i(),
                                [t, n] = (0, o.useState)(0),
                                r = (0, o.useCallback)(() => {
                                    e.current && n(t + 1)
                                }, [t]);
                            return [(0, o.useCallback)(() => u.Wi.postRender(r), [r]), t]
                        }()[0],
                        g = i(),
                        w = function(e) {
                            let t = [];
                            return o.Children.forEach(e, e => {
                                (0, o.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        E = w,
                        b = (0, o.useRef)(new Map).current,
                        x = (0, o.useRef)(E),
                        C = (0, o.useRef)(new Map).current,
                        R = (0, o.useRef)(!0);
                    if ((0, a.L)(() => {
                            R.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let n = y(e);
                                        t.set(n, e)
                                    })
                                }(w, C), x.current = E
                        }), f = () => {
                            R.current = !0, C.clear(), b.clear()
                        }, (0, o.useEffect)(() => () => f(), []), R.current) return (0, r.jsx)(r.Fragment, {
                        children: E.map(e => (0, r.jsx)(p, {
                            isPresent: !0,
                            initial: !!n && void 0,
                            presenceAffectsLayout: s,
                            mode: d,
                            children: e
                        }, y(e)))
                    });
                    E = [...E];
                    let T = x.current.map(y),
                        M = w.map(y),
                        S = T.length;
                    for (let e = 0; e < S; e++) {
                        let t = T[e]; - 1 !== M.indexOf(t) || b.has(t) || b.set(t, void 0)
                    }
                    return "wait" === d && b.size && (E = []), b.forEach((e, n) => {
                        if (-1 !== M.indexOf(n)) return;
                        let o = C.get(n);
                        if (!o) return;
                        let a = T.indexOf(n),
                            i = e;
                        i || (i = (0, r.jsx)(p, {
                            isPresent: !1,
                            onExitComplete: () => {
                                b.delete(n);
                                let e = Array.from(C.keys()).filter(e => !M.includes(e));
                                if (e.forEach(e => C.delete(e)), x.current = w.filter(t => {
                                        let r = y(t);
                                        return r === n || e.includes(r)
                                    }), !b.size) {
                                    if (!1 === g.current) return;
                                    v(), l && l()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: s,
                            mode: d,
                            children: o
                        }, y(o)), b.set(n, i)), E.splice(a, 0, i)
                    }), E = E.map(e => {
                        let t = e.key;
                        return b.has(t) ? e : (0, r.jsx)(p, {
                            isPresent: !0,
                            presenceAffectsLayout: s,
                            mode: d,
                            children: e
                        }, y(e))
                    }), (0, r.jsx)(r.Fragment, {
                        children: b.size ? E : E.map(e => (0, o.cloneElement)(e))
                    })
                }
        }
    }
]);