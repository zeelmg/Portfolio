"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [193], {
        8149: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return r
                }
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
                }
            }
        },
        8324: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return o
                },
                k: function() {
                    return i
                }
            });
            var r = n(2265),
                u = n(7437);

            function i(e, t) {
                let n = r.createContext(t);

                function i(e) {
                    let {
                        children: t,
                        ...i
                    } = e, o = r.useMemo(() => i, Object.values(i));
                    return (0, u.jsx)(n.Provider, {
                        value: o,
                        children: t
                    })
                }
                return i.displayName = e + "Provider", [i, function(u) {
                    let i = r.useContext(n);
                    if (i) return i;
                    if (void 0 !== t) return t;
                    throw Error(`\`${u}\` must be used within \`${e}\``)
                }]
            }

            function o(e, t = []) {
                let n = [],
                    i = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let u = n?.[e] || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: {
                                    ...n,
                                    [e]: u
                                }
                            }), [n, u])
                        }
                    };
                return i.scopeName = e, [function(t, i) {
                    let o = r.createContext(i),
                        s = n.length;

                    function a(t) {
                        let {
                            scope: n,
                            children: i,
                            ...a
                        } = t, l = n?.[e][s] || o, c = r.useMemo(() => a, Object.values(a));
                        return (0, u.jsx)(l.Provider, {
                            value: c,
                            children: i
                        })
                    }
                    return n = [...n, i], a.displayName = t + "Provider", [a, function(n, u) {
                        let a = u?.[e][s] || o,
                            l = r.useContext(a);
                        if (l) return l;
                        if (void 0 !== i) return i;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let u = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let u = n(e)[`__scope${r}`];
                                return {
                                    ...t,
                                    ...u
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: u
                            }), [u])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(i, ...t)]
            }
        },
        3938: function(e, t, n) {
            n.d(t, {
                I0: function() {
                    return y
                },
                XB: function() {
                    return f
                },
                fC: function() {
                    return E
                }
            });
            var r, u = n(2265),
                i = n(8149),
                o = n(5171),
                s = n(1584),
                a = n(5137),
                l = n(7437),
                c = "dismissableLayer.update",
                d = u.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = u.forwardRef((e, t) => {
                    var n, f;
                    let {
                        disableOutsidePointerEvents: v = !1,
                        onEscapeKeyDown: E,
                        onPointerDownOutside: y,
                        onFocusOutside: b,
                        onInteractOutside: h,
                        onDismiss: w,
                        ...N
                    } = e, g = u.useContext(d), [O, C] = u.useState(null), P = null !== (f = null == O ? void 0 : O.ownerDocument) && void 0 !== f ? f : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, L] = u.useState({}), T = (0, s.e)(t, e => C(e)), W = Array.from(g.layers), [D] = [...g.layersWithOutsidePointerEventsDisabled].slice(-1), M = W.indexOf(D), S = O ? W.indexOf(O) : -1, x = g.layersWithOutsidePointerEventsDisabled.size > 0, R = S >= M, _ = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, a.W)(e),
                            i = u.useRef(!1),
                            o = u.useRef(() => {});
                        return u.useEffect(() => {
                            let e = e => {
                                    if (e.target && !i.current) {
                                        let t = function() {
                                                p("dismissableLayer.pointerDownOutside", r, u, {
                                                    discrete: !0
                                                })
                                            },
                                            u = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", o.current), o.current = t, n.addEventListener("click", o.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", o.current);
                                    i.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", o.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => i.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...g.branches].some(e => e.contains(t));
                        !R || n || (null == y || y(e), null == h || h(e), e.defaultPrevented || null == w || w())
                    }, P), k = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, a.W)(e),
                            i = u.useRef(!1);
                        return u.useEffect(() => {
                            let e = e => {
                                e.target && !i.current && p("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => i.current = !0,
                            onBlurCapture: () => i.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...g.branches].some(e => e.contains(t)) || (null == b || b(e), null == h || h(e), e.defaultPrevented || null == w || w())
                    }, P);
                    return ! function(e, t = globalThis?.document) {
                        let n = (0, a.W)(e);
                        u.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        S !== g.layers.size - 1 || (null == E || E(e), !e.defaultPrevented && w && (e.preventDefault(), w()))
                    }, P), u.useEffect(() => {
                        if (O) return v && (0 === g.layersWithOutsidePointerEventsDisabled.size && (r = P.body.style.pointerEvents, P.body.style.pointerEvents = "none"), g.layersWithOutsidePointerEventsDisabled.add(O)), g.layers.add(O), m(), () => {
                            v && 1 === g.layersWithOutsidePointerEventsDisabled.size && (P.body.style.pointerEvents = r)
                        }
                    }, [O, P, v, g]), u.useEffect(() => () => {
                        O && (g.layers.delete(O), g.layersWithOutsidePointerEventsDisabled.delete(O), m())
                    }, [O, g]), u.useEffect(() => {
                        let e = () => L({});
                        return document.addEventListener(c, e), () => document.removeEventListener(c, e)
                    }, []), (0, l.jsx)(o.WV.div, {
                        ...N,
                        ref: T,
                        style: {
                            pointerEvents: x ? R ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, i.M)(e.onFocusCapture, k.onFocusCapture),
                        onBlurCapture: (0, i.M)(e.onBlurCapture, k.onBlurCapture),
                        onPointerDownCapture: (0, i.M)(e.onPointerDownCapture, _.onPointerDownCapture)
                    })
                });
            f.displayName = "DismissableLayer";
            var v = u.forwardRef((e, t) => {
                let n = u.useContext(d),
                    r = u.useRef(null),
                    i = (0, s.e)(t, r);
                return u.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, l.jsx)(o.WV.div, {
                    ...e,
                    ref: i
                })
            });

            function m() {
                let e = new CustomEvent(c);
                document.dispatchEvent(e)
            }

            function p(e, t, n, r) {
                let {
                    discrete: u
                } = r, i = n.originalEvent.target, s = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), u ? (0, o.jH)(i, s) : i.dispatchEvent(s)
            }
            v.displayName = "DismissableLayerBranch";
            var E = f,
                y = v
        },
        3201: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return a
                }
            });
            var r, u = n(2265),
                i = n(1336),
                o = (r || (r = n.t(u, 2)))["useId".toString()] || (() => void 0),
                s = 0;

            function a(e) {
                let [t, n] = u.useState(o());
                return (0, i.b)(() => {
                    e || n(e => e ?? String(s++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        6935: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return a
                }
            });
            var r = n(2265),
                u = n(4887),
                i = n(5171),
                o = n(1336),
                s = n(7437),
                a = r.forwardRef((e, t) => {
                    var n, a;
                    let {
                        container: l,
                        ...c
                    } = e, [d, f] = r.useState(!1);
                    (0, o.b)(() => f(!0), []);
                    let v = l || d && (null === (a = globalThis) || void 0 === a ? void 0 : null === (n = a.document) || void 0 === n ? void 0 : n.body);
                    return v ? u.createPortal((0, s.jsx)(i.WV.div, {
                        ...c,
                        ref: t
                    }), v) : null
                });
            a.displayName = "Portal"
        },
        1383: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return s
                }
            });
            var r = n(2265),
                u = n(4887),
                i = n(1584),
                o = n(1336),
                s = e => {
                    var t, n;
                    let s, l;
                    let {
                        present: c,
                        children: d
                    } = e, f = function(e) {
                        var t, n;
                        let [i, s] = r.useState(), l = r.useRef({}), c = r.useRef(e), d = r.useRef("none"), [f, v] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = a(l.current);
                            d.current = "mounted" === f ? e : "none"
                        }, [f]), (0, o.b)(() => {
                            let t = l.current,
                                n = c.current;
                            if (n !== e) {
                                let r = d.current,
                                    u = a(t);
                                e ? v("MOUNT") : "none" === u || (null == t ? void 0 : t.display) === "none" ? v("UNMOUNT") : n && r !== u ? v("ANIMATION_OUT") : v("UNMOUNT"), c.current = e
                            }
                        }, [e, v]), (0, o.b)(() => {
                            if (i) {
                                let e = e => {
                                        let t = a(l.current).includes(e.animationName);
                                        e.target === i && t && u.flushSync(() => v("ANIMATION_END"))
                                    },
                                    t = e => {
                                        e.target === i && (d.current = a(l.current))
                                    };
                                return i.addEventListener("animationstart", t), i.addEventListener("animationcancel", e), i.addEventListener("animationend", e), () => {
                                    i.removeEventListener("animationstart", t), i.removeEventListener("animationcancel", e), i.removeEventListener("animationend", e)
                                }
                            }
                            v("ANIMATION_END")
                        }, [i, v]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: r.useCallback(e => {
                                e && (l.current = getComputedStyle(e)), s(e)
                            }, [])
                        }
                    }(c), v = "function" == typeof d ? d({
                        present: f.isPresent
                    }) : r.Children.only(d), m = (0, i.e)(f.ref, (s = null === (t = Object.getOwnPropertyDescriptor(v.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in s && s.isReactWarning ? v.ref : (s = null === (n = Object.getOwnPropertyDescriptor(v, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in s && s.isReactWarning ? v.props.ref : v.props.ref || v.ref);
                    return "function" == typeof d || f.isPresent ? r.cloneElement(v, {
                        ref: m
                    }) : null
                };

            function a(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            s.displayName = "Presence"
        },
        5171: function(e, t, n) {
            n.d(t, {
                WV: function() {
                    return s
                },
                jH: function() {
                    return a
                }
            });
            var r = n(2265),
                u = n(4887),
                i = n(1538),
                o = n(7437),
                s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = r.forwardRef((e, n) => {
                        let {
                            asChild: r,
                            ...u
                        } = e, s = r ? i.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, o.jsx)(s, {
                            ...u,
                            ref: n
                        })
                    });
                    return n.displayName = `Primitive.${t}`, {
                        ...e,
                        [t]: n
                    }
                }, {});

            function a(e, t) {
                e && u.flushSync(() => e.dispatchEvent(t))
            }
        },
        5137: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return u
                }
            });
            var r = n(2265);

            function u(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current?.(...e), [])
            }
        },
        1715: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return i
                }
            });
            var r = n(2265),
                u = n(5137);

            function i({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [i, o] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = r.useState(e),
                        [i] = n,
                        o = r.useRef(i),
                        s = (0, u.W)(t);
                    return r.useEffect(() => {
                        o.current !== i && (s(i), o.current = i)
                    }, [i, o, s]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), s = void 0 !== e, a = s ? e : i, l = (0, u.W)(n);
                return [a, r.useCallback(t => {
                    if (s) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && l(n)
                    } else o(t)
                }, [s, e, o, l])]
            }
        },
        1336: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return u
                }
            });
            var r = n(2265),
                u = globalThis?.document ? r.useLayoutEffect : () => {}
        },
        1725: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return o
                },
                f: function() {
                    return s
                }
            });
            var r = n(2265),
                u = n(5171),
                i = n(7437),
                o = r.forwardRef((e, t) => (0, i.jsx)(u.WV.span, {
                    ...e,
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }));
            o.displayName = "VisuallyHidden";
            var s = o
        }
    }
]);