"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [685], {
        976: function(e, r, t) {
            t.d(r, {
                B: function() {
                    return s
                }
            });
            var n = t(2265),
                o = t(8324),
                l = t(1584),
                i = t(1538),
                a = t(7437);

            function s(e) {
                let r = e + "CollectionProvider",
                    [t, s] = (0, o.b)(r),
                    [c, u] = t(r, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: r,
                            children: t
                        } = e, o = n.useRef(null), l = n.useRef(new Map).current;
                        return (0, a.jsx)(c, {
                            scope: r,
                            itemMap: l,
                            collectionRef: o,
                            children: t
                        })
                    };
                d.displayName = r;
                let f = e + "CollectionSlot",
                    p = n.forwardRef((e, r) => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = u(f, t), s = (0, l.e)(r, o.collectionRef);
                        return (0, a.jsx)(i.g7, {
                            ref: s,
                            children: n
                        })
                    });
                p.displayName = f;
                let v = e + "CollectionItemSlot",
                    h = "data-radix-collection-item",
                    w = n.forwardRef((e, r) => {
                        let {
                            scope: t,
                            children: o,
                            ...s
                        } = e, c = n.useRef(null), d = (0, l.e)(r, c), f = u(v, t);
                        return n.useEffect(() => (f.itemMap.set(c, {
                            ref: c,
                            ...s
                        }), () => void f.itemMap.delete(c))), (0, a.jsx)(i.g7, {
                            [h]: "",
                            ref: d,
                            children: o
                        })
                    });
                return w.displayName = v, [{
                    Provider: d,
                    Slot: p,
                    ItemSlot: w
                }, function(r) {
                    let t = u(e + "CollectionConsumer", r);
                    return n.useCallback(() => {
                        let e = t.collectionRef.current;
                        if (!e) return [];
                        let r = Array.from(e.querySelectorAll("[".concat(h, "]")));
                        return Array.from(t.itemMap.values()).sort((e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current))
                    }, [t.collectionRef, t.itemMap])
                }, s]
            }
        },
        7513: function(e, r, t) {
            t.d(r, {
                gm: function() {
                    return l
                }
            });
            var n = t(2265);
            t(7437);
            var o = n.createContext(void 0);

            function l(e) {
                let r = n.useContext(o);
                return e || r || "ltr"
            }
        },
        2286: function(e, r, t) {
            t.d(r, {
                Ns: function() {
                    return q
                },
                fC: function() {
                    return B
                },
                gb: function() {
                    return y
                },
                q4: function() {
                    return _
                },
                l_: function() {
                    return K
                }
            });
            var n = t(2265),
                o = t(5171),
                l = t(1383),
                i = t(8324),
                a = t(1584),
                s = t(5137),
                c = t(7513),
                u = t(1336),
                d = t(8149),
                f = t(7437),
                p = "ScrollArea",
                [v, h] = (0, i.b)(p),
                [w, b] = v(p),
                m = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        type: l = "hover",
                        dir: i,
                        scrollHideDelay: s = 600,
                        ...u
                    } = e, [d, p] = n.useState(null), [v, h] = n.useState(null), [b, m] = n.useState(null), [g, S] = n.useState(null), [x, y] = n.useState(null), [R, C] = n.useState(0), [E, T] = n.useState(0), [j, D] = n.useState(!1), [P, L] = n.useState(!1), A = (0, a.e)(r, e => p(e)), M = (0, c.gm)(i);
                    return (0, f.jsx)(w, {
                        scope: t,
                        type: l,
                        dir: M,
                        scrollHideDelay: s,
                        scrollArea: d,
                        viewport: v,
                        onViewportChange: h,
                        content: b,
                        onContentChange: m,
                        scrollbarX: g,
                        onScrollbarXChange: S,
                        scrollbarXEnabled: j,
                        onScrollbarXEnabledChange: D,
                        scrollbarY: x,
                        onScrollbarYChange: y,
                        scrollbarYEnabled: P,
                        onScrollbarYEnabledChange: L,
                        onCornerWidthChange: C,
                        onCornerHeightChange: T,
                        children: (0, f.jsx)(o.WV.div, {
                            dir: M,
                            ...u,
                            ref: A,
                            style: {
                                position: "relative",
                                "--radix-scroll-area-corner-width": R + "px",
                                "--radix-scroll-area-corner-height": E + "px",
                                ...e.style
                            }
                        })
                    })
                });
            m.displayName = p;
            var g = "ScrollAreaViewport",
                S = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        children: l,
                        nonce: i,
                        ...s
                    } = e, c = b(g, t), u = n.useRef(null), d = (0, a.e)(r, u, c.onViewportChange);
                    return (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                            },
                            nonce: i
                        }), (0, f.jsx)(o.WV.div, {
                            "data-radix-scroll-area-viewport": "",
                            ...s,
                            ref: d,
                            style: {
                                overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                                overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                                ...e.style
                            },
                            children: (0, f.jsx)("div", {
                                ref: c.onContentChange,
                                style: {
                                    minWidth: "100%",
                                    display: "table"
                                },
                                children: l
                            })
                        })]
                    })
                });
            S.displayName = g;
            var x = "ScrollAreaScrollbar",
                y = n.forwardRef((e, r) => {
                    let {
                        forceMount: t,
                        ...o
                    } = e, l = b(x, e.__scopeScrollArea), {
                        onScrollbarXEnabledChange: i,
                        onScrollbarYEnabledChange: a
                    } = l, s = "horizontal" === e.orientation;
                    return n.useEffect(() => (s ? i(!0) : a(!0), () => {
                        s ? i(!1) : a(!1)
                    }), [s, i, a]), "hover" === l.type ? (0, f.jsx)(R, {
                        ...o,
                        ref: r,
                        forceMount: t
                    }) : "scroll" === l.type ? (0, f.jsx)(C, {
                        ...o,
                        ref: r,
                        forceMount: t
                    }) : "auto" === l.type ? (0, f.jsx)(E, {
                        ...o,
                        ref: r,
                        forceMount: t
                    }) : "always" === l.type ? (0, f.jsx)(T, {
                        ...o,
                        ref: r
                    }) : null
                });
            y.displayName = x;
            var R = n.forwardRef((e, r) => {
                    let {
                        forceMount: t,
                        ...o
                    } = e, i = b(x, e.__scopeScrollArea), [a, s] = n.useState(!1);
                    return n.useEffect(() => {
                        let e = i.scrollArea,
                            r = 0;
                        if (e) {
                            let t = () => {
                                    window.clearTimeout(r), s(!0)
                                },
                                n = () => {
                                    r = window.setTimeout(() => s(!1), i.scrollHideDelay)
                                };
                            return e.addEventListener("pointerenter", t), e.addEventListener("pointerleave", n), () => {
                                window.clearTimeout(r), e.removeEventListener("pointerenter", t), e.removeEventListener("pointerleave", n)
                            }
                        }
                    }, [i.scrollArea, i.scrollHideDelay]), (0, f.jsx)(l.z, {
                        present: t || a,
                        children: (0, f.jsx)(E, {
                            "data-state": a ? "visible" : "hidden",
                            ...o,
                            ref: r
                        })
                    })
                }),
                C = n.forwardRef((e, r) => {
                    var t, o;
                    let {
                        forceMount: i,
                        ...a
                    } = e, s = b(x, e.__scopeScrollArea), c = "horizontal" === e.orientation, u = Y(() => v("SCROLL_END"), 100), [p, v] = (t = "hidden", o = {
                        hidden: {
                            SCROLL: "scrolling"
                        },
                        scrolling: {
                            SCROLL_END: "idle",
                            POINTER_ENTER: "interacting"
                        },
                        interacting: {
                            SCROLL: "interacting",
                            POINTER_LEAVE: "idle"
                        },
                        idle: {
                            HIDE: "hidden",
                            SCROLL: "scrolling",
                            POINTER_ENTER: "interacting"
                        }
                    }, n.useReducer((e, r) => {
                        let t = o[e][r];
                        return null != t ? t : e
                    }, t));
                    return n.useEffect(() => {
                        if ("idle" === p) {
                            let e = window.setTimeout(() => v("HIDE"), s.scrollHideDelay);
                            return () => window.clearTimeout(e)
                        }
                    }, [p, s.scrollHideDelay, v]), n.useEffect(() => {
                        let e = s.viewport,
                            r = c ? "scrollLeft" : "scrollTop";
                        if (e) {
                            let t = e[r],
                                n = () => {
                                    let n = e[r];
                                    t !== n && (v("SCROLL"), u()), t = n
                                };
                            return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
                        }
                    }, [s.viewport, c, v, u]), (0, f.jsx)(l.z, {
                        present: i || "hidden" !== p,
                        children: (0, f.jsx)(T, {
                            "data-state": "hidden" === p ? "hidden" : "visible",
                            ...a,
                            ref: r,
                            onPointerEnter: (0, d.M)(e.onPointerEnter, () => v("POINTER_ENTER")),
                            onPointerLeave: (0, d.M)(e.onPointerLeave, () => v("POINTER_LEAVE"))
                        })
                    })
                }),
                E = n.forwardRef((e, r) => {
                    let t = b(x, e.__scopeScrollArea),
                        {
                            forceMount: o,
                            ...i
                        } = e,
                        [a, s] = n.useState(!1),
                        c = "horizontal" === e.orientation,
                        u = Y(() => {
                            if (t.viewport) {
                                let e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                                    r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                                s(c ? e : r)
                            }
                        }, 10);
                    return X(t.viewport, u), X(t.content, u), (0, f.jsx)(l.z, {
                        present: o || a,
                        children: (0, f.jsx)(T, {
                            "data-state": a ? "visible" : "hidden",
                            ...i,
                            ref: r
                        })
                    })
                }),
                T = n.forwardRef((e, r) => {
                    let {
                        orientation: t = "vertical",
                        ...o
                    } = e, l = b(x, e.__scopeScrollArea), i = n.useRef(null), a = n.useRef(0), [s, c] = n.useState({
                        content: 0,
                        viewport: 0,
                        scrollbar: {
                            size: 0,
                            paddingStart: 0,
                            paddingEnd: 0
                        }
                    }), u = V(s.viewport, s.content), d = {
                        ...o,
                        sizes: s,
                        onSizesChange: c,
                        hasThumb: !!(u > 0 && u < 1),
                        onThumbChange: e => i.current = e,
                        onThumbPointerUp: () => a.current = 0,
                        onThumbPointerDown: e => a.current = e
                    };

                    function p(e, r) {
                        return function(e, r, t) {
                            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ltr",
                                o = k(t),
                                l = r || o / 2,
                                i = t.scrollbar.paddingStart + l,
                                a = t.scrollbar.size - t.scrollbar.paddingEnd - (o - l),
                                s = t.content - t.viewport;
                            return O([i, a], "ltr" === n ? [0, s] : [-1 * s, 0])(e)
                        }(e, a.current, s, r)
                    }
                    return "horizontal" === t ? (0, f.jsx)(j, {
                        ...d,
                        ref: r,
                        onThumbPositionChange: () => {
                            if (l.viewport && i.current) {
                                let e = H(l.viewport.scrollLeft, s, l.dir);
                                i.current.style.transform = "translate3d(".concat(e, "px, 0, 0)")
                            }
                        },
                        onWheelScroll: e => {
                            l.viewport && (l.viewport.scrollLeft = e)
                        },
                        onDragScroll: e => {
                            l.viewport && (l.viewport.scrollLeft = p(e, l.dir))
                        }
                    }) : "vertical" === t ? (0, f.jsx)(D, {
                        ...d,
                        ref: r,
                        onThumbPositionChange: () => {
                            if (l.viewport && i.current) {
                                let e = H(l.viewport.scrollTop, s);
                                i.current.style.transform = "translate3d(0, ".concat(e, "px, 0)")
                            }
                        },
                        onWheelScroll: e => {
                            l.viewport && (l.viewport.scrollTop = e)
                        },
                        onDragScroll: e => {
                            l.viewport && (l.viewport.scrollTop = p(e))
                        }
                    }) : null
                }),
                j = n.forwardRef((e, r) => {
                    let {
                        sizes: t,
                        onSizesChange: o,
                        ...l
                    } = e, i = b(x, e.__scopeScrollArea), [s, c] = n.useState(), u = n.useRef(null), d = (0, a.e)(r, u, i.onScrollbarXChange);
                    return n.useEffect(() => {
                        u.current && c(getComputedStyle(u.current))
                    }, [u]), (0, f.jsx)(A, {
                        "data-orientation": "horizontal",
                        ...l,
                        ref: d,
                        sizes: t,
                        style: {
                            bottom: 0,
                            left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            "--radix-scroll-area-thumb-width": k(t) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: r => e.onThumbPointerDown(r.x),
                        onDragScroll: r => e.onDragScroll(r.x),
                        onWheelScroll: (r, t) => {
                            if (i.viewport) {
                                let n = i.viewport.scrollLeft + r.deltaX;
                                e.onWheelScroll(n), n > 0 && n < t && r.preventDefault()
                            }
                        },
                        onResize: () => {
                            u.current && i.viewport && s && o({
                                content: i.viewport.scrollWidth,
                                viewport: i.viewport.offsetWidth,
                                scrollbar: {
                                    size: u.current.clientWidth,
                                    paddingStart: z(s.paddingLeft),
                                    paddingEnd: z(s.paddingRight)
                                }
                            })
                        }
                    })
                }),
                D = n.forwardRef((e, r) => {
                    let {
                        sizes: t,
                        onSizesChange: o,
                        ...l
                    } = e, i = b(x, e.__scopeScrollArea), [s, c] = n.useState(), u = n.useRef(null), d = (0, a.e)(r, u, i.onScrollbarYChange);
                    return n.useEffect(() => {
                        u.current && c(getComputedStyle(u.current))
                    }, [u]), (0, f.jsx)(A, {
                        "data-orientation": "vertical",
                        ...l,
                        ref: d,
                        sizes: t,
                        style: {
                            top: 0,
                            right: "ltr" === i.dir ? 0 : void 0,
                            left: "rtl" === i.dir ? 0 : void 0,
                            bottom: "var(--radix-scroll-area-corner-height)",
                            "--radix-scroll-area-thumb-height": k(t) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: r => e.onThumbPointerDown(r.y),
                        onDragScroll: r => e.onDragScroll(r.y),
                        onWheelScroll: (r, t) => {
                            if (i.viewport) {
                                let n = i.viewport.scrollTop + r.deltaY;
                                e.onWheelScroll(n), n > 0 && n < t && r.preventDefault()
                            }
                        },
                        onResize: () => {
                            u.current && i.viewport && s && o({
                                content: i.viewport.scrollHeight,
                                viewport: i.viewport.offsetHeight,
                                scrollbar: {
                                    size: u.current.clientHeight,
                                    paddingStart: z(s.paddingTop),
                                    paddingEnd: z(s.paddingBottom)
                                }
                            })
                        }
                    })
                }),
                [P, L] = v(x),
                A = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        sizes: l,
                        hasThumb: i,
                        onThumbChange: c,
                        onThumbPointerUp: u,
                        onThumbPointerDown: p,
                        onThumbPositionChange: v,
                        onDragScroll: h,
                        onWheelScroll: w,
                        onResize: m,
                        ...g
                    } = e, S = b(x, t), [y, R] = n.useState(null), C = (0, a.e)(r, e => R(e)), E = n.useRef(null), T = n.useRef(""), j = S.viewport, D = l.content - l.viewport, L = (0, s.W)(w), A = (0, s.W)(v), M = Y(m, 10);

                    function _(e) {
                        E.current && h({
                            x: e.clientX - E.current.left,
                            y: e.clientY - E.current.top
                        })
                    }
                    return n.useEffect(() => {
                        let e = e => {
                            let r = e.target;
                            (null == y ? void 0 : y.contains(r)) && L(e, D)
                        };
                        return document.addEventListener("wheel", e, {
                            passive: !1
                        }), () => document.removeEventListener("wheel", e, {
                            passive: !1
                        })
                    }, [j, y, D, L]), n.useEffect(A, [l, A]), X(y, M), X(S.content, M), (0, f.jsx)(P, {
                        scope: t,
                        scrollbar: y,
                        hasThumb: i,
                        onThumbChange: (0, s.W)(c),
                        onThumbPointerUp: (0, s.W)(u),
                        onThumbPositionChange: A,
                        onThumbPointerDown: (0, s.W)(p),
                        children: (0, f.jsx)(o.WV.div, {
                            ...g,
                            ref: C,
                            style: {
                                position: "absolute",
                                ...g.style
                            },
                            onPointerDown: (0, d.M)(e.onPointerDown, e => {
                                0 === e.button && (e.target.setPointerCapture(e.pointerId), E.current = y.getBoundingClientRect(), T.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S.viewport && (S.viewport.style.scrollBehavior = "auto"), _(e))
                            }),
                            onPointerMove: (0, d.M)(e.onPointerMove, _),
                            onPointerUp: (0, d.M)(e.onPointerUp, e => {
                                let r = e.target;
                                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = T.current, S.viewport && (S.viewport.style.scrollBehavior = ""), E.current = null
                            })
                        })
                    })
                }),
                M = "ScrollAreaThumb",
                _ = n.forwardRef((e, r) => {
                    let {
                        forceMount: t,
                        ...n
                    } = e, o = L(M, e.__scopeScrollArea);
                    return (0, f.jsx)(l.z, {
                        present: t || o.hasThumb,
                        children: (0, f.jsx)(W, {
                            ref: r,
                            ...n
                        })
                    })
                }),
                W = n.forwardRef((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        style: l,
                        ...i
                    } = e, s = b(M, t), c = L(M, t), {
                        onThumbPositionChange: u
                    } = c, p = (0, a.e)(r, e => c.onThumbChange(e)), v = n.useRef(), h = Y(() => {
                        v.current && (v.current(), v.current = void 0)
                    }, 100);
                    return n.useEffect(() => {
                        let e = s.viewport;
                        if (e) {
                            let r = () => {
                                if (h(), !v.current) {
                                    let r = U(e, u);
                                    v.current = r, u()
                                }
                            };
                            return u(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
                        }
                    }, [s.viewport, h, u]), (0, f.jsx)(o.WV.div, {
                        "data-state": c.hasThumb ? "visible" : "hidden",
                        ...i,
                        ref: p,
                        style: {
                            width: "var(--radix-scroll-area-thumb-width)",
                            height: "var(--radix-scroll-area-thumb-height)",
                            ...l
                        },
                        onPointerDownCapture: (0, d.M)(e.onPointerDownCapture, e => {
                            let r = e.target.getBoundingClientRect(),
                                t = e.clientX - r.left,
                                n = e.clientY - r.top;
                            c.onThumbPointerDown({
                                x: t,
                                y: n
                            })
                        }),
                        onPointerUp: (0, d.M)(e.onPointerUp, c.onThumbPointerUp)
                    })
                });
            _.displayName = M;
            var I = "ScrollAreaCorner",
                N = n.forwardRef((e, r) => {
                    let t = b(I, e.__scopeScrollArea),
                        n = !!(t.scrollbarX && t.scrollbarY);
                    return "scroll" !== t.type && n ? (0, f.jsx)(F, {
                        ...e,
                        ref: r
                    }) : null
                });
            N.displayName = I;
            var F = n.forwardRef((e, r) => {
                let {
                    __scopeScrollArea: t,
                    ...l
                } = e, i = b(I, t), [a, s] = n.useState(0), [c, u] = n.useState(0), d = !!(a && c);
                return X(i.scrollbarX, () => {
                    var e;
                    let r = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                    i.onCornerHeightChange(r), u(r)
                }), X(i.scrollbarY, () => {
                    var e;
                    let r = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                    i.onCornerWidthChange(r), s(r)
                }), d ? (0, f.jsx)(o.WV.div, {
                    ...l,
                    ref: r,
                    style: {
                        width: a,
                        height: c,
                        position: "absolute",
                        right: "ltr" === i.dir ? 0 : void 0,
                        left: "rtl" === i.dir ? 0 : void 0,
                        bottom: 0,
                        ...e.style
                    }
                }) : null
            });

            function z(e) {
                return e ? parseInt(e, 10) : 0
            }

            function V(e, r) {
                let t = e / r;
                return isNaN(t) ? 0 : t
            }

            function k(e) {
                let r = V(e.viewport, e.content),
                    t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
                return Math.max((e.scrollbar.size - t) * r, 18)
            }

            function H(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    n = k(r),
                    o = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
                    l = r.scrollbar.size - o,
                    i = r.content - r.viewport,
                    a = function(e, [r, t]) {
                        return Math.min(t, Math.max(r, e))
                    }(e, "ltr" === t ? [0, i] : [-1 * i, 0]);
                return O([0, i], [0, l - n])(a)
            }

            function O(e, r) {
                return t => {
                    if (e[0] === e[1] || r[0] === r[1]) return r[0];
                    let n = (r[1] - r[0]) / (e[1] - e[0]);
                    return r[0] + n * (t - e[0])
                }
            }
            var U = function(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    t = {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    },
                    n = 0;
                return ! function o() {
                    let l = {
                            left: e.scrollLeft,
                            top: e.scrollTop
                        },
                        i = t.left !== l.left,
                        a = t.top !== l.top;
                    (i || a) && r(), t = l, n = window.requestAnimationFrame(o)
                }(), () => window.cancelAnimationFrame(n)
            };

            function Y(e, r) {
                let t = (0, s.W)(e),
                    o = n.useRef(0);
                return n.useEffect(() => () => window.clearTimeout(o.current), []), n.useCallback(() => {
                    window.clearTimeout(o.current), o.current = window.setTimeout(t, r)
                }, [t, r])
            }

            function X(e, r) {
                let t = (0, s.W)(r);
                (0, u.b)(() => {
                    let r = 0;
                    if (e) {
                        let n = new ResizeObserver(() => {
                            cancelAnimationFrame(r), r = window.requestAnimationFrame(t)
                        });
                        return n.observe(e), () => {
                            window.cancelAnimationFrame(r), n.unobserve(e)
                        }
                    }
                }, [e, t])
            }
            var B = m,
                K = S,
                q = N
        },
        9385: function(e, r, t) {
            t.d(r, {
                VY: function() {
                    return G
                },
                aV: function() {
                    return K
                },
                fC: function() {
                    return B
                },
                xz: function() {
                    return q
                }
            });
            var n = t(2265),
                o = t(8149),
                l = t(8324),
                i = t(976),
                a = t(1584),
                s = t(3201),
                c = t(5171),
                u = t(5137),
                d = t(1715),
                f = t(7513),
                p = t(7437),
                v = "rovingFocusGroup.onEntryFocus",
                h = {
                    bubbles: !1,
                    cancelable: !0
                },
                w = "RovingFocusGroup",
                [b, m, g] = (0, i.B)(w),
                [S, x] = (0, l.b)(w, [g]),
                [y, R] = S(w),
                C = n.forwardRef((e, r) => (0, p.jsx)(b.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, p.jsx)(b.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, p.jsx)(E, {
                            ...e,
                            ref: r
                        })
                    })
                }));
            C.displayName = w;
            var E = n.forwardRef((e, r) => {
                    let {
                        __scopeRovingFocusGroup: t,
                        orientation: l,
                        loop: i = !1,
                        dir: s,
                        currentTabStopId: w,
                        defaultCurrentTabStopId: b,
                        onCurrentTabStopIdChange: g,
                        onEntryFocus: S,
                        preventScrollOnEntryFocus: x = !1,
                        ...R
                    } = e, C = n.useRef(null), E = (0, a.e)(r, C), T = (0, f.gm)(s), [j = null, D] = (0, d.T)({
                        prop: w,
                        defaultProp: b,
                        onChange: g
                    }), [L, A] = n.useState(!1), M = (0, u.W)(S), _ = m(t), W = n.useRef(!1), [I, N] = n.useState(0);
                    return n.useEffect(() => {
                        let e = C.current;
                        if (e) return e.addEventListener(v, M), () => e.removeEventListener(v, M)
                    }, [M]), (0, p.jsx)(y, {
                        scope: t,
                        orientation: l,
                        dir: T,
                        loop: i,
                        currentTabStopId: j,
                        onItemFocus: n.useCallback(e => D(e), [D]),
                        onItemShiftTab: n.useCallback(() => A(!0), []),
                        onFocusableItemAdd: n.useCallback(() => N(e => e + 1), []),
                        onFocusableItemRemove: n.useCallback(() => N(e => e - 1), []),
                        children: (0, p.jsx)(c.WV.div, {
                            tabIndex: L || 0 === I ? -1 : 0,
                            "data-orientation": l,
                            ...R,
                            ref: E,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, o.M)(e.onMouseDown, () => {
                                W.current = !0
                            }),
                            onFocus: (0, o.M)(e.onFocus, e => {
                                let r = !W.current;
                                if (e.target === e.currentTarget && r && !L) {
                                    let r = new CustomEvent(v, h);
                                    if (e.currentTarget.dispatchEvent(r), !r.defaultPrevented) {
                                        let e = _().filter(e => e.focusable);
                                        P([e.find(e => e.active), e.find(e => e.id === j), ...e].filter(Boolean).map(e => e.ref.current), x)
                                    }
                                }
                                W.current = !1
                            }),
                            onBlur: (0, o.M)(e.onBlur, () => A(!1))
                        })
                    })
                }),
                T = "RovingFocusGroupItem",
                j = n.forwardRef((e, r) => {
                    let {
                        __scopeRovingFocusGroup: t,
                        focusable: l = !0,
                        active: i = !1,
                        tabStopId: a,
                        ...u
                    } = e, d = (0, s.M)(), f = a || d, v = R(T, t), h = v.currentTabStopId === f, w = m(t), {
                        onFocusableItemAdd: g,
                        onFocusableItemRemove: S
                    } = v;
                    return n.useEffect(() => {
                        if (l) return g(), () => S()
                    }, [l, g, S]), (0, p.jsx)(b.ItemSlot, {
                        scope: t,
                        id: f,
                        focusable: l,
                        active: i,
                        children: (0, p.jsx)(c.WV.span, {
                            tabIndex: h ? 0 : -1,
                            "data-orientation": v.orientation,
                            ...u,
                            ref: r,
                            onMouseDown: (0, o.M)(e.onMouseDown, e => {
                                l ? v.onItemFocus(f) : e.preventDefault()
                            }),
                            onFocus: (0, o.M)(e.onFocus, () => v.onItemFocus(f)),
                            onKeyDown: (0, o.M)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) {
                                    v.onItemShiftTab();
                                    return
                                }
                                if (e.target !== e.currentTarget) return;
                                let r = function(e, r, t) {
                                    var n;
                                    let o = (n = e.key, "rtl" !== t ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                                    if (!("vertical" === r && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === r && ["ArrowUp", "ArrowDown"].includes(o))) return D[o]
                                }(e, v.orientation, v.dir);
                                if (void 0 !== r) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let o = w().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === r) o.reverse();
                                    else if ("prev" === r || "next" === r) {
                                        var t, n;
                                        "prev" === r && o.reverse();
                                        let l = o.indexOf(e.currentTarget);
                                        o = v.loop ? (t = o, n = l + 1, t.map((e, r) => t[(n + r) % t.length])) : o.slice(l + 1)
                                    }
                                    setTimeout(() => P(o))
                                }
                            })
                        })
                    })
                });
            j.displayName = T;
            var D = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function P(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = document.activeElement;
                for (let n of e)
                    if (n === t || (n.focus({
                            preventScroll: r
                        }), document.activeElement !== t)) return
            }
            var L = t(1383),
                A = "Tabs",
                [M, _] = (0, l.b)(A, [x]),
                W = x(),
                [I, N] = M(A),
                F = n.forwardRef((e, r) => {
                    let {
                        __scopeTabs: t,
                        value: n,
                        onValueChange: o,
                        defaultValue: l,
                        orientation: i = "horizontal",
                        dir: a,
                        activationMode: u = "automatic",
                        ...v
                    } = e, h = (0, f.gm)(a), [w, b] = (0, d.T)({
                        prop: n,
                        onChange: o,
                        defaultProp: l
                    });
                    return (0, p.jsx)(I, {
                        scope: t,
                        baseId: (0, s.M)(),
                        value: w,
                        onValueChange: b,
                        orientation: i,
                        dir: h,
                        activationMode: u,
                        children: (0, p.jsx)(c.WV.div, {
                            dir: h,
                            "data-orientation": i,
                            ...v,
                            ref: r
                        })
                    })
                });
            F.displayName = A;
            var z = "TabsList",
                V = n.forwardRef((e, r) => {
                    let {
                        __scopeTabs: t,
                        loop: n = !0,
                        ...o
                    } = e, l = N(z, t), i = W(t);
                    return (0, p.jsx)(C, {
                        asChild: !0,
                        ...i,
                        orientation: l.orientation,
                        dir: l.dir,
                        loop: n,
                        children: (0, p.jsx)(c.WV.div, {
                            role: "tablist",
                            "aria-orientation": l.orientation,
                            ...o,
                            ref: r
                        })
                    })
                });
            V.displayName = z;
            var k = "TabsTrigger",
                H = n.forwardRef((e, r) => {
                    let {
                        __scopeTabs: t,
                        value: n,
                        disabled: l = !1,
                        ...i
                    } = e, a = N(k, t), s = W(t), u = Y(a.baseId, n), d = X(a.baseId, n), f = n === a.value;
                    return (0, p.jsx)(j, {
                        asChild: !0,
                        ...s,
                        focusable: !l,
                        active: f,
                        children: (0, p.jsx)(c.WV.button, {
                            type: "button",
                            role: "tab",
                            "aria-selected": f,
                            "aria-controls": d,
                            "data-state": f ? "active" : "inactive",
                            "data-disabled": l ? "" : void 0,
                            disabled: l,
                            id: u,
                            ...i,
                            ref: r,
                            onMouseDown: (0, o.M)(e.onMouseDown, e => {
                                l || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : a.onValueChange(n)
                            }),
                            onKeyDown: (0, o.M)(e.onKeyDown, e => {
                                [" ", "Enter"].includes(e.key) && a.onValueChange(n)
                            }),
                            onFocus: (0, o.M)(e.onFocus, () => {
                                let e = "manual" !== a.activationMode;
                                f || l || !e || a.onValueChange(n)
                            })
                        })
                    })
                });
            H.displayName = k;
            var O = "TabsContent",
                U = n.forwardRef((e, r) => {
                    let {
                        __scopeTabs: t,
                        value: o,
                        forceMount: l,
                        children: i,
                        ...a
                    } = e, s = N(O, t), u = Y(s.baseId, o), d = X(s.baseId, o), f = o === s.value, v = n.useRef(f);
                    return n.useEffect(() => {
                        let e = requestAnimationFrame(() => v.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, p.jsx)(L.z, {
                        present: l || f,
                        children: t => {
                            let {
                                present: n
                            } = t;
                            return (0, p.jsx)(c.WV.div, {
                                "data-state": f ? "active" : "inactive",
                                "data-orientation": s.orientation,
                                role: "tabpanel",
                                "aria-labelledby": u,
                                hidden: !n,
                                id: d,
                                tabIndex: 0,
                                ...a,
                                ref: r,
                                style: {
                                    ...e.style,
                                    animationDuration: v.current ? "0s" : void 0
                                },
                                children: n && i
                            })
                        }
                    })
                });

            function Y(e, r) {
                return "".concat(e, "-trigger-").concat(r)
            }

            function X(e, r) {
                return "".concat(e, "-content-").concat(r)
            }
            U.displayName = O;
            var B = F,
                K = V,
                q = H,
                G = U
        }
    }
]);