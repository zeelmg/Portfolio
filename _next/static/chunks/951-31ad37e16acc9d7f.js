"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [951], {
        5050: function(t, e, i) {
            i.d(e, {
                p: function() {
                    return s
                }
            });
            let s = (0, i(2265).createContext)({})
        },
        9791: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return s
                }
            });
            let s = (0, i(2265).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        7797: function(t, e, i) {
            i.d(e, {
                O: function() {
                    return s
                }
            });
            let s = (0, i(2265).createContext)(null)
        },
        3194: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return r
                }
            });
            var s = i(9276);
            let n = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function r(t, e, i, r) {
                if (t === e && i === r) return s.Z;
                let o = e => (function(t, e, i, s, r) {
                    let o, a;
                    let l = 0;
                    do(o = n(a = e + (i - e) / 2, s, r) - t) > 0 ? i = a : e = a; while (Math.abs(o) > 1e-7 && ++l < 12);
                    return a
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : n(o(t), e, r)
            }
        },
        8298: function(t, e, i) {
            i.d(e, {
                Vv: function() {
                    return r
                },
                YQ: function() {
                    return n
                },
                mZ: function() {
                    return o
                }
            });
            var s = i(3194);
            let n = (0, s._)(.42, 0, 1, 1),
                r = (0, s._)(0, 0, .58, 1),
                o = (0, s._)(.42, 0, .58, 1)
        },
        2981: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return o
                }
            });
            var s = i(565);
            class n {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            }
            let r = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

            function o(t, e) {
                let i = !1,
                    o = !0,
                    a = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = r.reduce((t, e) => (t[e] = function(t) {
                        let e = new n,
                            i = new n,
                            s = 0,
                            r = !1,
                            o = !1,
                            a = new WeakSet,
                            l = {
                                schedule: (t, n = !1, o = !1) => {
                                    let l = o && r,
                                        h = l ? e : i;
                                    return n && a.add(t), h.add(t) && l && r && (s = e.order.length), t
                                },
                                cancel: t => {
                                    i.remove(t), a.delete(t)
                                },
                                process: n => {
                                    if (r) {
                                        o = !0;
                                        return
                                    }
                                    if (r = !0, [e, i] = [i, e], i.clear(), s = e.order.length)
                                        for (let i = 0; i < s; i++) {
                                            let s = e.order[i];
                                            a.has(s) && (l.schedule(s), t()), s(n)
                                        }
                                    r = !1, o && (o = !1, l.process(n))
                                }
                            };
                        return l
                    }(() => i = !0), t), {}),
                    h = t => {
                        l[t].process(a)
                    },
                    u = () => {
                        let n = s.c.useManualTiming ? a.timestamp : performance.now();
                        i = !1, a.delta = o ? 1e3 / 60 : Math.max(Math.min(n - a.timestamp, 40), 1), a.timestamp = n, a.isProcessing = !0, r.forEach(h), a.isProcessing = !1, i && e && (o = !1, t(u))
                    },
                    d = () => {
                        i = !0, o = !0, a.isProcessing || t(u)
                    };
                return {
                    schedule: r.reduce((t, e) => {
                        let s = l[e];
                        return t[e] = (t, e = !1, n = !1) => (i || d(), s.schedule(t, e, n)), t
                    }, {}),
                    cancel: t => r.forEach(e => l[e].cancel(t)),
                    state: a,
                    steps: l
                }
            }
        },
        6219: function(t, e, i) {
            i.d(e, {
                Pn: function() {
                    return r
                },
                S6: function() {
                    return a
                },
                Wi: function() {
                    return n
                },
                frameData: function() {
                    return o
                }
            });
            var s = i(9276);
            let {
                schedule: n,
                cancel: r,
                state: o,
                steps: a
            } = (0, i(2981).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : s.Z, !0)
        },
        2951: function(t, e, i) {
            let s;
            i.d(e, {
                E: function() {
                    return n7
                }
            });
            var n, r = i(7437),
                o = i(2265),
                a = i(9791);
            let l = (0, o.createContext)({});
            var h = i(7797),
                u = i(9033);
            let d = (0, o.createContext)({
                    strict: !1
                }),
                c = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                p = "data-" + c("framerAppearId"),
                {
                    schedule: m,
                    cancel: f
                } = (0, i(2981).Z)(queueMicrotask, !1);

            function v(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            let g = (0, o.createContext)({}),
                y = !1;

            function x() {
                window.HandoffComplete = !0
            }

            function P(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function T(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
            let w = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                b = ["initial", ...w];

            function S(t) {
                return T(t.animate) || b.some(e => P(t[e]))
            }

            function A(t) {
                return !!(S(t) || t.variants)
            }

            function V(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let E = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                M = {};
            for (let t in E) M[t] = {
                isEnabled: e => E[t].some(t => !!e[t])
            };
            var C = i(7282),
                D = i(5050);
            let R = Symbol.for("motionComponentSymbol"),
                k = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function L(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (k.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            let j = {},
                F = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                B = new Set(F);

            function O(t, {
                layout: e,
                layoutId: i
            }) {
                return B.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!j[t] || "opacity" === t)
            }
            let W = t => !!(t && t.getVelocity),
                U = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                I = F.length,
                $ = t => e => "string" == typeof e && e.startsWith(t),
                N = $("--"),
                H = $("var(--"),
                Z = t => !!H(t) && z.test(t.split("/*")[0].trim()),
                z = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                K = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                Y = (t, e, i) => i > e ? e : i < t ? t : i,
                X = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                G = {
                    ...X,
                    transform: t => Y(0, 1, t)
                },
                _ = {
                    ...X,
                    default: 1
                },
                q = t => Math.round(1e5 * t) / 1e5,
                Q = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                J = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

            function te(t) {
                return "string" == typeof t
            }
            let ti = t => ({
                    test: e => te(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                ts = ti("deg"),
                tn = ti("%"),
                tr = ti("px"),
                to = ti("vh"),
                ta = ti("vw"),
                tl = {
                    ...tn,
                    parse: t => tn.parse(t) / 100,
                    transform: t => tn.transform(100 * t)
                },
                th = {
                    ...X,
                    transform: Math.round
                },
                tu = {
                    borderWidth: tr,
                    borderTopWidth: tr,
                    borderRightWidth: tr,
                    borderBottomWidth: tr,
                    borderLeftWidth: tr,
                    borderRadius: tr,
                    radius: tr,
                    borderTopLeftRadius: tr,
                    borderTopRightRadius: tr,
                    borderBottomRightRadius: tr,
                    borderBottomLeftRadius: tr,
                    width: tr,
                    maxWidth: tr,
                    height: tr,
                    maxHeight: tr,
                    size: tr,
                    top: tr,
                    right: tr,
                    bottom: tr,
                    left: tr,
                    padding: tr,
                    paddingTop: tr,
                    paddingRight: tr,
                    paddingBottom: tr,
                    paddingLeft: tr,
                    margin: tr,
                    marginTop: tr,
                    marginRight: tr,
                    marginBottom: tr,
                    marginLeft: tr,
                    rotate: ts,
                    rotateX: ts,
                    rotateY: ts,
                    rotateZ: ts,
                    scale: _,
                    scaleX: _,
                    scaleY: _,
                    scaleZ: _,
                    skew: ts,
                    skewX: ts,
                    skewY: ts,
                    distance: tr,
                    translateX: tr,
                    translateY: tr,
                    translateZ: tr,
                    x: tr,
                    y: tr,
                    z: tr,
                    perspective: tr,
                    transformPerspective: tr,
                    opacity: G,
                    originX: tl,
                    originY: tl,
                    originZ: tr,
                    zIndex: th,
                    backgroundPositionX: tr,
                    backgroundPositionY: tr,
                    fillOpacity: G,
                    strokeOpacity: G,
                    numOctaves: th
                };

            function td(t, e, i, s) {
                let {
                    style: n,
                    vars: r,
                    transform: o,
                    transformOrigin: a
                } = t, l = !1, h = !1, u = !0;
                for (let t in e) {
                    let i = e[t];
                    if (N(t)) {
                        r[t] = i;
                        continue
                    }
                    let s = tu[t],
                        d = K(i, s);
                    if (B.has(t)) {
                        if (l = !0, o[t] = d, !u) continue;
                        i !== (s.default || 0) && (u = !1)
                    } else t.startsWith("origin") ? (h = !0, a[t] = d) : n[t] = d
                }
                if (!e.transform && (l || s ? n.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, s, n) {
                        let r = "";
                        for (let e = 0; e < I; e++) {
                            let i = F[e];
                            if (void 0 !== t[i]) {
                                let e = U[i] || i;
                                r += `${e}(${t[i]}) `
                            }
                        }
                        return e && !t.z && (r += "translateZ(0)"), r = r.trim(), n ? r = n(t, s ? "" : r) : i && s && (r = "none"), r
                    }(t.transform, i, u, s) : n.transform && (n.transform = "none")), h) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = a;
                    n.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let tc = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function tp(t, e, i) {
                for (let s in e) W(e[s]) || O(s, i) || (t[s] = e[s])
            }
            let tm = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function tf(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tm.has(t)
            }
            let tv = t => !tf(t);
            try {
                (n = require("@emotion/is-prop-valid").default) && (tv = t => t.startsWith("on") ? !tf(t) : n(t))
            } catch (t) {}

            function tg(t, e, i) {
                return "string" == typeof t ? t : tr.transform(e + i * t)
            }
            let ty = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                tx = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function tP(t, {
                attrX: e,
                attrY: i,
                attrScale: s,
                originX: n,
                originY: r,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...h
            }, u, d, c) {
                if (td(t, h, u, c), d) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: m,
                    dimensions: f
                } = t;
                p.transform && (f && (m.transform = p.transform), delete p.transform), f && (void 0 !== n || void 0 !== r || m.transform) && (m.transformOrigin = function(t, e, i) {
                    let s = tg(e, t.x, t.width),
                        n = tg(i, t.y, t.height);
                    return `${s} ${n}`
                }(f, void 0 !== n ? n : .5, void 0 !== r ? r : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== s && (p.scale = s), void 0 !== o && function(t, e, i = 1, s = 0, n = !0) {
                    t.pathLength = 1;
                    let r = n ? ty : tx;
                    t[r.offset] = tr.transform(-s);
                    let o = tr.transform(e),
                        a = tr.transform(i);
                    t[r.array] = `${o} ${a}`
                }(p, o, a, l, !1)
            }
            let tT = () => ({
                    ...tc(),
                    attrs: {}
                }),
                tw = t => "string" == typeof t && "svg" === t.toLowerCase();

            function tb(t, {
                style: e,
                vars: i
            }, s, n) {
                for (let r in Object.assign(t.style, e, n && n.getProjectionStyles(s)), i) t.style.setProperty(r, i[r])
            }
            let tS = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function tA(t, e, i, s) {
                for (let i in tb(t, e, void 0, s), e.attrs) t.setAttribute(tS.has(i) ? i : c(i), e.attrs[i])
            }

            function tV(t, e, i) {
                var s;
                let {
                    style: n
                } = t, r = {};
                for (let o in n)(W(n[o]) || e.style && W(e.style[o]) || O(o, t) || (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s ? void 0 : s.liveStyle) !== void 0) && (r[o] = n[o]);
                return r
            }

            function tE(t, e, i) {
                let s = tV(t, e, i);
                for (let i in t)(W(t[i]) || W(e[i])) && (s[-1 !== F.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return s
            }

            function tM(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function tC(t, e, i, s) {
                if ("function" == typeof e) {
                    let [n, r] = tM(s);
                    e = e(void 0 !== i ? i : t.custom, n, r)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [n, r] = tM(s);
                    e = e(void 0 !== i ? i : t.custom, n, r)
                }
                return e
            }
            var tD = i(458);
            let tR = t => Array.isArray(t),
                tk = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                tL = t => tR(t) ? t[t.length - 1] || 0 : t;

            function tj(t) {
                let e = W(t) ? t.get() : t;
                return tk(e) ? e.toValue() : e
            }
            let tF = t => (e, i) => {
                let s = (0, o.useContext)(l),
                    n = (0, o.useContext)(h.O),
                    r = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: i
                    }, s, n, r) {
                        let o = {
                            latestValues: function(t, e, i, s) {
                                let n = {},
                                    r = s(t, {});
                                for (let t in r) n[t] = tj(r[t]);
                                let {
                                    initial: o,
                                    animate: a
                                } = t, l = S(t), h = A(t);
                                e && h && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                                let u = !!i && !1 === i.initial,
                                    d = (u = u || !1 === o) ? a : o;
                                return d && "boolean" != typeof d && !T(d) && (Array.isArray(d) ? d : [d]).forEach(e => {
                                    let i = tC(t, e);
                                    if (!i) return;
                                    let {
                                        transitionEnd: s,
                                        transition: r,
                                        ...o
                                    } = i;
                                    for (let t in o) {
                                        let e = o[t];
                                        if (Array.isArray(e)) {
                                            let t = u ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (n[t] = e)
                                    }
                                    for (let t in s) n[t] = s[t]
                                }), n
                            }(s, n, r, t),
                            renderState: e()
                        };
                        return i && (o.mount = t => i(s, t, o)), o
                    })(t, e, s, n);
                return i ? r() : (0, tD.h)(r)
            };
            var tB = i(6219);
            let tO = {
                    useVisualState: tF({
                        scrapeMotionValuesFromProps: tE,
                        createRenderState: tT,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: s
                        }) => {
                            tB.Wi.read(() => {
                                try {
                                    i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    i.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), tB.Wi.render(() => {
                                tP(i, s, {
                                    enableHardwareAcceleration: !1
                                }, tw(e.tagName), t.transformTemplate), tA(e, i)
                            })
                        }
                    })
                },
                tW = {
                    useVisualState: tF({
                        scrapeMotionValuesFromProps: tV,
                        createRenderState: tc
                    })
                };

            function tU(t, e, i, s = {
                passive: !0
            }) {
                return t.addEventListener(e, i, s), () => t.removeEventListener(e, i)
            }
            let tI = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function t$(t, e = "page") {
                return {
                    point: {
                        x: t[`${e}X`],
                        y: t[`${e}Y`]
                    }
                }
            }
            let tN = t => e => tI(e) && t(e, t$(e));

            function tH(t, e, i, s) {
                return tU(t, e, tN(i), s)
            }
            let tZ = (t, e) => i => e(t(i)),
                tz = (...t) => t.reduce(tZ);

            function tK(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            let tY = tK("dragHorizontal"),
                tX = tK("dragVertical");

            function tG(t) {
                let e = !1;
                if ("y" === t) e = tX();
                else if ("x" === t) e = tY();
                else {
                    let t = tY(),
                        i = tX();
                    t && i ? e = () => {
                        t(), i()
                    } : (t && t(), i && i())
                }
                return e
            }

            function t_() {
                let t = tG(!0);
                return !t || (t(), !1)
            }
            class tq {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }

            function tQ(t, e) {
                let i = e ? "onHoverStart" : "onHoverEnd";
                return tH(t.current, e ? "pointerenter" : "pointerleave", (s, n) => {
                    if ("touch" === s.pointerType || t_()) return;
                    let r = t.getProps();
                    t.animationState && r.whileHover && t.animationState.setActive("whileHover", e);
                    let o = r[i];
                    o && tB.Wi.postRender(() => o(s, n))
                }, {
                    passive: !t.getProps()[i]
                })
            }
            class tJ extends tq {
                mount() {
                    this.unmount = tz(tQ(this.node, !0), tQ(this.node, !1))
                }
                unmount() {}
            }
            class t0 extends tq {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = tz(tU(this.node.current, "focus", () => this.onFocus()), tU(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let t1 = (t, e) => !!e && (t === e || t1(t, e.parentElement));
            var t5 = i(9276);

            function t2(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, t$(i))
            }
            class t3 extends tq {
                constructor() {
                    super(...arguments), this.removeStartListeners = t5.Z, this.removeEndListeners = t5.Z, this.removeAccessibleListeners = t5.Z, this.startPointerPress = (t, e) => {
                        if (this.isPressing) return;
                        this.removeEndListeners();
                        let i = this.node.getProps(),
                            s = tH(window, "pointerup", (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: i,
                                    onTapCancel: s,
                                    globalTapTarget: n
                                } = this.node.getProps(), r = n || t1(this.node.current, t.target) ? i : s;
                                r && tB.Wi.update(() => r(t, e))
                            }, {
                                passive: !(i.onTap || i.onPointerUp)
                            }),
                            n = tH(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(i.onTapCancel || i.onPointerCancel)
                            });
                        this.removeEndListeners = tz(s, n), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = tU(this.node.current, "keydown", t => {
                                "Enter" !== t.key || this.isPressing || (this.removeEndListeners(), this.removeEndListeners = tU(this.node.current, "keyup", t => {
                                    "Enter" === t.key && this.checkPressEnd() && t2("up", (t, e) => {
                                        let {
                                            onTap: i
                                        } = this.node.getProps();
                                        i && tB.Wi.postRender(() => i(t, e))
                                    })
                                }), t2("down", (t, e) => {
                                    this.startPress(t, e)
                                }))
                            }),
                            e = tU(this.node.current, "blur", () => {
                                this.isPressing && t2("cancel", (t, e) => this.cancelPress(t, e))
                            });
                        this.removeAccessibleListeners = tz(t, e)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: i,
                        whileTap: s
                    } = this.node.getProps();
                    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && tB.Wi.postRender(() => i(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !t_()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: i
                    } = this.node.getProps();
                    i && tB.Wi.postRender(() => i(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = tH(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        i = tU(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = tz(e, i)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let t9 = new WeakMap,
                t6 = new WeakMap,
                t4 = t => {
                    let e = t9.get(t.target);
                    e && e(t)
                },
                t7 = t => {
                    t.forEach(t4)
                },
                t8 = {
                    some: 0,
                    all: 1
                };
            class et extends tq {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: s = "some",
                        once: n
                    } = t, r = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof s ? s : t8[s]
                    };
                    return function(t, e, i) {
                        let s = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            t6.has(i) || t6.set(i, {});
                            let s = t6.get(i),
                                n = JSON.stringify(e);
                            return s[n] || (s[n] = new IntersectionObserver(t7, {
                                root: t,
                                ...e
                            })), s[n]
                        }(e);
                        return t9.set(t, i), s.observe(t), () => {
                            t9.delete(t), s.unobserve(t)
                        }
                    }(this.node.current, r, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: s
                        } = this.node.getProps(), r = e ? i : s;
                        r && r(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }

            function ee(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let s = 0; s < i; s++)
                    if (e[s] !== t[s]) return !1;
                return !0
            }

            function ei(t, e, i) {
                let s = t.getProps();
                return tC(s, e, void 0 !== i ? i : s.custom, t)
            }
            let es = t => 1e3 * t,
                en = t => t / 1e3,
                er = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                eo = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                ea = {
                    type: "keyframes",
                    duration: .8
                },
                el = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                eh = (t, {
                    keyframes: e
                }) => e.length > 2 ? ea : B.has(t) ? t.startsWith("scale") ? eo(e[1]) : er : el;

            function eu(t, e) {
                return t[e] || t.default || t
            }
            var ed = i(565);
            let ec = {
                    current: !1
                },
                ep = t => null !== t;

            function em(t, {
                repeat: e,
                repeatType: i = "loop"
            }, s) {
                let n = t.filter(ep),
                    r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
                return r && void 0 !== s ? s : n[r]
            }

            function ef() {
                s = void 0
            }
            let ev = {
                    now: () => (void 0 === s && ev.set(tB.frameData.isProcessing || ed.c.useManualTiming ? tB.frameData.timestamp : performance.now()), s),
                    set: t => {
                        s = t, queueMicrotask(ef)
                    }
                },
                eg = t => /^0[^.\s]+$/u.test(t);
            var ey = i(9047);
            let ex = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                eP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                eT = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                ew = t => t === X || t === tr,
                eb = (t, e) => parseFloat(t.split(", ")[e]),
                eS = (t, e) => (i, {
                    transform: s
                }) => {
                    if ("none" === s || !s) return 0;
                    let n = s.match(/^matrix3d\((.+)\)$/u);
                    if (n) return eb(n[1], e);
                    {
                        let e = s.match(/^matrix\((.+)\)$/u);
                        return e ? eb(e[1], t) : 0
                    }
                },
                eA = new Set(["x", "y", "z"]),
                eV = F.filter(t => !eA.has(t)),
                eE = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: eS(4, 13),
                    y: eS(5, 14)
                };
            eE.translateX = eE.x, eE.translateY = eE.y;
            let eM = t => e => e.test(t),
                eC = [X, tr, tn, ts, ta, to, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                eD = t => eC.find(eM(t)),
                eR = new Set,
                ek = !1,
                eL = !1;

            function ej() {
                if (eL) {
                    let t = Array.from(eR).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return eV.forEach(i => {
                                let s = t.getValue(i);
                                void 0 !== s && (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0))
                            }), e
                        }(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            var s;
                            null === (s = t.getValue(e)) || void 0 === s || s.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                eL = !1, ek = !1, eR.forEach(t => t.complete()), eR.clear()
            }

            function eF() {
                eR.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (eL = !0)
                })
            }
            class eB {
                constructor(t, e, i, s, n, r = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = s, this.element = n, this.isAsync = r
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (eR.add(this), ek || (ek = !0, tB.Wi.read(eF), tB.Wi.resolveKeyframes(ej))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: s
                    } = this;
                    for (let n = 0; n < t.length; n++)
                        if (null === t[n]) {
                            if (0 === n) {
                                let n = null == s ? void 0 : s.get(),
                                    r = t[t.length - 1];
                                if (void 0 !== n) t[0] = n;
                                else if (i && e) {
                                    let s = i.readValue(e, r);
                                    null != s && (t[0] = s)
                                }
                                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0])
                            } else t[n] = t[n - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), eR.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, eR.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            let eO = (t, e) => i => !!(te(i) && tt.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                eW = (t, e, i) => s => {
                    if (!te(s)) return s;
                    let [n, r, o, a] = s.match(Q);
                    return {
                        [t]: parseFloat(n),
                        [e]: parseFloat(r),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                eU = t => Y(0, 255, t),
                eI = {
                    ...X,
                    transform: t => Math.round(eU(t))
                },
                e$ = {
                    test: eO("rgb", "red"),
                    parse: eW("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: s = 1
                    }) => "rgba(" + eI.transform(t) + ", " + eI.transform(e) + ", " + eI.transform(i) + ", " + q(G.transform(s)) + ")"
                },
                eN = {
                    test: eO("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            s = "",
                            n = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), s = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), s = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, s += s, n += n), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(s, 16),
                            alpha: n ? parseInt(n, 16) / 255 : 1
                        }
                    },
                    transform: e$.transform
                },
                eH = {
                    test: eO("hsl", "hue"),
                    parse: eW("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: s = 1
                    }) => "hsla(" + Math.round(t) + ", " + tn.transform(q(e)) + ", " + tn.transform(q(i)) + ", " + q(G.transform(s)) + ")"
                },
                eZ = {
                    test: t => e$.test(t) || eN.test(t) || eH.test(t),
                    parse: t => e$.test(t) ? e$.parse(t) : eH.test(t) ? eH.parse(t) : eN.parse(t),
                    transform: t => te(t) ? t : t.hasOwnProperty("red") ? e$.transform(t) : eH.transform(t)
                },
                ez = "number",
                eK = "color",
                eY = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function eX(t) {
                let e = t.toString(),
                    i = [],
                    s = {
                        color: [],
                        number: [],
                        var: []
                    },
                    n = [],
                    r = 0,
                    o = e.replace(eY, t => (eZ.test(t) ? (s.color.push(r), n.push(eK), i.push(eZ.parse(t))) : t.startsWith("var(") ? (s.var.push(r), n.push("var"), i.push(t)) : (s.number.push(r), n.push(ez), i.push(parseFloat(t))), ++r, "${}")).split("${}");
                return {
                    values: i,
                    split: o,
                    indexes: s,
                    types: n
                }
            }

            function eG(t) {
                return eX(t).values
            }

            function e_(t) {
                let {
                    split: e,
                    types: i
                } = eX(t), s = e.length;
                return t => {
                    let n = "";
                    for (let r = 0; r < s; r++)
                        if (n += e[r], void 0 !== t[r]) {
                            let e = i[r];
                            e === ez ? n += q(t[r]) : e === eK ? n += eZ.transform(t[r]) : n += t[r]
                        } return n
                }
            }
            let eq = t => "number" == typeof t ? 0 : t,
                eQ = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && te(t) && ((null === (e = t.match(Q)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(J)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: eG,
                    createTransformer: e_,
                    getAnimatableNone: function(t) {
                        let e = eG(t);
                        return e_(t)(e.map(eq))
                    }
                },
                eJ = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function e0(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [s] = i.match(Q) || [];
                if (!s) return t;
                let n = i.replace(s, ""),
                    r = eJ.has(e) ? 1 : 0;
                return s !== i && (r *= 100), e + "(" + r + n + ")"
            }
            let e1 = /\b([a-z-]*)\(.*?\)/gu,
                e5 = {
                    ...eQ,
                    getAnimatableNone: t => {
                        let e = t.match(e1);
                        return e ? e.map(e0).join(" ") : t
                    }
                },
                e2 = {
                    ...tu,
                    color: eZ,
                    backgroundColor: eZ,
                    outlineColor: eZ,
                    fill: eZ,
                    stroke: eZ,
                    borderColor: eZ,
                    borderTopColor: eZ,
                    borderRightColor: eZ,
                    borderBottomColor: eZ,
                    borderLeftColor: eZ,
                    filter: e5,
                    WebkitFilter: e5
                },
                e3 = t => e2[t];

            function e9(t, e) {
                let i = e3(t);
                return i !== e5 && (i = eQ), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let e6 = new Set(["auto", "none", "0"]);
            class e4 extends eB {
                constructor(t, e, i, s) {
                    super(t, e, i, s, null == s ? void 0 : s.owner, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        if ("string" == typeof s && Z(s = s.trim())) {
                            let n = function t(e, i, s = 1) {
                                (0, ey.k)(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [n, r] = function(t) {
                                    let e = eP.exec(t);
                                    if (!e) return [, ];
                                    let [, i, s, n] = e;
                                    return [`--${null!=i?i:s}`, n]
                                }(e);
                                if (!n) return;
                                let o = window.getComputedStyle(i).getPropertyValue(n);
                                if (o) {
                                    let t = o.trim();
                                    return ex(t) ? parseFloat(t) : t
                                }
                                return Z(r) ? t(r, i, s + 1) : r
                            }(s, e.current);
                            void 0 !== n && (t[i] = n), i === t.length - 1 && (this.finalKeyframe = s)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !eT.has(i) || 2 !== t.length) return;
                    let [s, n] = t, r = eD(s), o = eD(n);
                    if (r !== o) {
                        if (ew(r) && ew(o))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var s;
                        ("number" == typeof(s = t[e]) ? 0 === s : null === s || "none" === s || "0" === s || eg(s)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let s, n = 0;
                        for (; n < t.length && !s;) {
                            let e = t[n];
                            "string" == typeof e && !e6.has(e) && eX(e).values.length && (s = t[n]), n++
                        }
                        if (s && i)
                            for (let n of e) t[n] = e9(i, s)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = eE[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let s = e[e.length - 1];
                    void 0 !== s && t.getValue(i, s).jump(s, !1)
                }
                measureEndState() {
                    var t;
                    let {
                        element: e,
                        name: i,
                        unresolvedKeyframes: s
                    } = this;
                    if (!e.current) return;
                    let n = e.getValue(i);
                    n && n.jump(this.measuredOrigin, !1);
                    let r = s.length - 1,
                        o = s[r];
                    s[r] = eE[i](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o), (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach(([t, i]) => {
                        e.getValue(t).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }

            function e7(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let e8 = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (eQ.test(t) || "0" === t) && !t.startsWith("url("));
            class it {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: s = 0,
                    repeatDelay: n = 0,
                    repeatType: r = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: s,
                        repeatDelay: n,
                        repeatType: r,
                        ...o
                    }, this.updateFinishedPromise()
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (eF(), ej()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: s,
                        velocity: n,
                        delay: r,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, i, s) {
                            let n = t[0];
                            if (null === n) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let r = t[t.length - 1],
                                o = e8(n, e),
                                a = e8(r, e);
                            return (0, ey.K)(o === a, `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let i = 0; i < t.length; i++)
                                    if (t[i] !== e) return !0
                            }(t) || "spring" === i && s)
                        }(t, i, s, n)) {
                        if (ec.current || !r) {
                            null == a || a(em(t, this.options, e)), null == o || o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let h = this.initPlayback(t, e);
                    !1 !== h && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...h
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }

            function ie(t, e, i) {
                var s, n;
                let r = Math.max(e - 5, 0);
                return s = i - t(r), (n = e - r) ? 1e3 / n * s : 0
            }

            function ii(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let is = ["duration", "bounce"],
                ir = ["stiffness", "damping", "mass"];

            function io(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function ia({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...s
            }) {
                let n;
                let r = t[0],
                    o = t[t.length - 1],
                    a = {
                        done: !1,
                        value: r
                    },
                    {
                        stiffness: l,
                        damping: h,
                        mass: u,
                        duration: d,
                        velocity: c,
                        isResolvedFromDuration: p
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!io(t, ir) && io(t, is)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: s = 1
                            }) {
                                let n, r;
                                (0, ey.K)(t <= es(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = Y(.05, 1, o), t = Y(.01, 10, en(t)), o < 1 ? (n = e => {
                                    let s = e * o,
                                        n = s * t;
                                    return .001 - (s - i) / ii(e, o) * Math.exp(-n)
                                }, r = e => {
                                    let s = e * o * t,
                                        r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                        a = ii(Math.pow(e, 2), o);
                                    return (s * i + i - r) * Math.exp(-s) * (-n(e) + .001 > 0 ? -1 : 1) / a
                                }) : (n = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), r = e => t * t * (i - e) * Math.exp(-e * t));
                                let a = function(t, e, i) {
                                    let s = i;
                                    for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                                    return s
                                }(n, r, 5 / t);
                                if (t = es(t), isNaN(a)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                };
                                {
                                    let e = Math.pow(a, 2) * s;
                                    return {
                                        stiffness: e,
                                        damping: 2 * o * Math.sqrt(s * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = {
                                ...e,
                                ...i,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }({
                        ...s,
                        velocity: -en(s.velocity || 0)
                    }),
                    m = c || 0,
                    f = h / (2 * Math.sqrt(l * u)),
                    v = o - r,
                    g = en(Math.sqrt(l / u)),
                    y = 5 > Math.abs(v);
                if (i || (i = y ? .01 : 2), e || (e = y ? .005 : .5), f < 1) {
                    let t = ii(g, f);
                    n = e => o - Math.exp(-f * g * e) * ((m + f * g * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
                } else if (1 === f) n = t => o - Math.exp(-g * t) * (v + (m + g * v) * t);
                else {
                    let t = g * Math.sqrt(f * f - 1);
                    n = e => {
                        let i = Math.exp(-f * g * e),
                            s = Math.min(t * e, 300);
                        return o - i * ((m + f * g * v) * Math.sinh(s) + t * v * Math.cosh(s)) / t
                    }
                }
                return {
                    calculatedDuration: p && d || null,
                    next: t => {
                        let s = n(t);
                        if (p) a.done = t >= d;
                        else {
                            let r = m;
                            0 !== t && (r = f < 1 ? ie(n, t, s) : 0);
                            let l = Math.abs(r) <= i,
                                h = Math.abs(o - s) <= e;
                            a.done = l && h
                        }
                        return a.value = a.done ? o : s, a
                    }
                }
            }

            function il({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: s = 325,
                bounceDamping: n = 10,
                bounceStiffness: r = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: h = .5,
                restSpeed: u
            }) {
                let d, c;
                let p = t[0],
                    m = {
                        done: !1,
                        value: p
                    },
                    f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    g = i * e,
                    y = p + g,
                    x = void 0 === o ? y : o(y);
                x !== y && (g = x - p);
                let P = t => -g * Math.exp(-t / s),
                    T = t => x + P(t),
                    w = t => {
                        let e = P(t),
                            i = T(t);
                        m.done = Math.abs(e) <= h, m.value = m.done ? x : i
                    },
                    b = t => {
                        f(m.value) && (d = t, c = ia({
                            keyframes: [m.value, v(m.value)],
                            velocity: ie(T, t, m.value),
                            damping: n,
                            stiffness: r,
                            restDelta: h,
                            restSpeed: u
                        }))
                    };
                return b(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (c || void 0 !== d || (e = !0, w(t), b(t)), void 0 !== d && t >= d) ? c.next(t - d) : (e || w(t), m)
                    }
                }
            }
            var ih = i(8298);
            let iu = t => Array.isArray(t) && "number" != typeof t[0];
            var id = i(3194);
            let ic = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                ip = t => e => 1 - t(1 - e),
                im = t => 1 - Math.sin(Math.acos(t)),
                iv = ip(im),
                ig = ic(im),
                iy = (0, id._)(.33, 1.53, .69, .99),
                ix = ip(iy),
                iP = ic(ix),
                iT = {
                    linear: t5.Z,
                    easeIn: ih.YQ,
                    easeInOut: ih.mZ,
                    easeOut: ih.Vv,
                    circIn: im,
                    circInOut: ig,
                    circOut: iv,
                    backIn: ix,
                    backInOut: iP,
                    backOut: iy,
                    anticipate: t => (t *= 2) < 1 ? .5 * ix(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                iw = t => {
                    if (Array.isArray(t)) {
                        (0, ey.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, s, n] = t;
                        return (0, id._)(e, i, s, n)
                    }
                    return "string" == typeof t ? ((0, ey.k)(void 0 !== iT[t], `Invalid easing type '${t}'`), iT[t]) : t
                },
                ib = (t, e, i) => {
                    let s = e - t;
                    return 0 === s ? 1 : (i - t) / s
                },
                iS = (t, e, i) => t + (e - t) * i;

            function iA(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function iV(t, e) {
                return i => i > 0 ? e : t
            }
            let iE = (t, e, i) => {
                    let s = t * t,
                        n = i * (e * e - s) + s;
                    return n < 0 ? 0 : Math.sqrt(n)
                },
                iM = [eN, e$, eH],
                iC = t => iM.find(e => e.test(t));

            function iD(t) {
                let e = iC(t);
                if ((0, ey.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === eH && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: s
                }) {
                    t /= 360, i /= 100;
                    let n = 0,
                        r = 0,
                        o = 0;
                    if (e /= 100) {
                        let s = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - s;
                        n = iA(a, s, t + 1 / 3), r = iA(a, s, t), o = iA(a, s, t - 1 / 3)
                    } else n = r = o = i;
                    return {
                        red: Math.round(255 * n),
                        green: Math.round(255 * r),
                        blue: Math.round(255 * o),
                        alpha: s
                    }
                }(i)), i
            }
            let iR = (t, e) => {
                    let i = iD(t),
                        s = iD(e);
                    if (!i || !s) return iV(t, e);
                    let n = {
                        ...i
                    };
                    return t => (n.red = iE(i.red, s.red, t), n.green = iE(i.green, s.green, t), n.blue = iE(i.blue, s.blue, t), n.alpha = iS(i.alpha, s.alpha, t), e$.transform(n))
                },
                ik = new Set(["none", "hidden"]);

            function iL(t, e) {
                return i => iS(t, e, i)
            }

            function ij(t) {
                return "number" == typeof t ? iL : "string" == typeof t ? Z(t) ? iV : eZ.test(t) ? iR : iO : Array.isArray(t) ? iF : "object" == typeof t ? eZ.test(t) ? iR : iB : iV
            }

            function iF(t, e) {
                let i = [...t],
                    s = i.length,
                    n = t.map((t, i) => ij(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < s; e++) i[e] = n[e](t);
                    return i
                }
            }

            function iB(t, e) {
                let i = {
                        ...t,
                        ...e
                    },
                    s = {};
                for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (s[n] = ij(t[n])(t[n], e[n]));
                return t => {
                    for (let e in s) i[e] = s[e](t);
                    return i
                }
            }
            let iO = (t, e) => {
                let i = eQ.createTransformer(e),
                    s = eX(t),
                    n = eX(e);
                return s.indexes.var.length === n.indexes.var.length && s.indexes.color.length === n.indexes.color.length && s.indexes.number.length >= n.indexes.number.length ? ik.has(t) && !n.values.length || ik.has(e) && !s.values.length ? ik.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : tz(iF(function(t, e) {
                    var i;
                    let s = [],
                        n = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let r = 0; r < e.values.length; r++) {
                        let o = e.types[r],
                            a = t.indexes[o][n[o]],
                            l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        s[r] = l, n[o]++
                    }
                    return s
                }(s, n), n.values), i) : ((0, ey.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), iV(t, e))
            };

            function iW(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? iS(t, e, i) : ij(t)(t, e)
            }

            function iU({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: s = "easeInOut"
            }) {
                let n = iu(s) ? s.map(iw) : iw(s),
                    r = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: i = !0,
                        ease: s,
                        mixer: n
                    } = {}) {
                        let r = t.length;
                        if ((0, ey.k)(r === e.length, "Both input and output ranges must be the same length"), 1 === r) return () => e[0];
                        if (2 === r && t[0] === t[1]) return () => e[1];
                        t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let o = function(t, e, i) {
                                let s = [],
                                    n = i || iW,
                                    r = t.length - 1;
                                for (let i = 0; i < r; i++) {
                                    let r = n(t[i], t[i + 1]);
                                    e && (r = tz(Array.isArray(e) ? e[i] || t5.Z : e, r)), s.push(r)
                                }
                                return s
                            }(e, s, n),
                            a = o.length,
                            l = e => {
                                let i = 0;
                                if (a > 1)
                                    for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                                let s = ib(t[i], t[i + 1], e);
                                return o[i](s)
                            };
                        return i ? e => l(Y(t[0], t[r - 1], e)) : l
                    }((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let s = 1; s <= e; s++) {
                                let n = ib(0, e, s);
                                t.push(iS(i, 1, n))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(n) ? n : e.map(() => n || ih.mZ).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (r.value = o(e), r.done = e >= t, r)
                }
            }
            let iI = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => tB.Wi.update(e, !0),
                        stop: () => (0, tB.Pn)(e),
                        now: () => tB.frameData.isProcessing ? tB.frameData.timestamp : ev.now()
                    }
                },
                i$ = {
                    decay: il,
                    inertia: il,
                    tween: iU,
                    keyframes: iU,
                    spring: ia
                },
                iN = t => t / 100;
            class iH extends it {
                constructor({
                    KeyframeResolver: t = eB,
                    ...e
                }) {
                    super(e), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: i,
                        motionValue: s,
                        keyframes: n
                    } = this.options, r = (t, e) => this.onKeyframesResolved(t, e);
                    i && s && s.owner ? this.resolver = s.owner.resolveKeyframes(n, r, i, s) : this.resolver = new t(n, r, i, s), this.resolver.scheduleResolve()
                }
                initPlayback(t) {
                    let e, i;
                    let {
                        type: s = "keyframes",
                        repeat: n = 0,
                        repeatDelay: r = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, l = i$[s] || iU;
                    l !== iU && "number" != typeof t[0] && (e = tz(iN, iW(t[0], t[1])), t = [0, 100]);
                    let h = l({
                        ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (i = l({
                        ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === h.calculatedDuration && (h.calculatedDuration = function(t) {
                        let e = 0,
                            i = t.next(e);
                        for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                        return e >= 2e4 ? 1 / 0 : e
                    }(h));
                    let {
                        calculatedDuration: u
                    } = h, d = u + r;
                    return {
                        generator: h,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: u,
                        resolvedDuration: d,
                        totalDuration: d * (n + 1) - r
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: i
                    } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: s,
                        generator: n,
                        mirroredGenerator: r,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: h,
                        resolvedDuration: u
                    } = i;
                    if (null === this.startTime) return n.next(0);
                    let {
                        delay: d,
                        repeat: c,
                        repeatType: p,
                        repeatDelay: m,
                        onUpdate: f
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - h / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                        g = this.speed >= 0 ? v < 0 : v > h;
                    this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = h);
                    let y = this.currentTime,
                        x = n;
                    if (c) {
                        let t = Math.min(this.currentTime, h) / u,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i, m && (i -= m / u)) : "mirror" === p && (x = r)), y = Y(0, 1, i) * u
                    }
                    let P = g ? {
                        done: !1,
                        value: a[0]
                    } : x.next(y);
                    o && (P.value = o(P.value));
                    let {
                        done: T
                    } = P;
                    g || null === l || (T = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
                    let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && T);
                    return w && void 0 !== s && (P.value = em(a, this.options, s)), f && f(P.value), w && this.finish(), P
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? en(t.calculatedDuration) : 0
                }
                get time() {
                    return en(this.currentTime)
                }
                set time(t) {
                    t = es(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = en(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = iI,
                        onPlay: e
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let i = this.driver.now();
                    null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime && "finished" !== this.state || (this.startTime = i), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    var t;
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
            }
            let iZ = t => Array.isArray(t) && "number" == typeof t[0],
                iz = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
                iK = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: iz([0, .65, .55, 1]),
                    circOut: iz([.55, 0, 1, .45]),
                    backIn: iz([.31, .01, .66, -.59]),
                    backOut: iz([.33, 1.53, .69, .99])
                };

            function iY(t) {
                return iX(t) || iK.easeOut
            }

            function iX(t) {
                if (t) return iZ(t) ? iz(t) : Array.isArray(t) ? t.map(iY) : iK[t]
            }
            let iG = e7(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                i_ = new Set(["opacity", "clipPath", "filter", "transform"]);
            class iq extends it {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        keyframes: s
                    } = this.options;
                    this.resolver = new e4(s, (t, e) => this.onKeyframesResolved(t, e), e, i), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var i, s;
                    let {
                        duration: n = 300,
                        times: r,
                        ease: o,
                        type: a,
                        motionValue: l,
                        name: h
                    } = this.options;
                    if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current)) return !1;
                    if ("spring" === (s = this.options).type || "backgroundColor" === s.name || ! function t(e) {
                            return !!(!e || "string" == typeof e && e in iK || iZ(e) || Array.isArray(e) && e.every(t))
                        }(s.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: s,
                            ...l
                        } = this.options, h = function(t, e) {
                            let i = new iH({
                                    ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                s = {
                                    done: !1,
                                    value: t[0]
                                },
                                n = [],
                                r = 0;
                            for (; !s.done && r < 2e4;) n.push((s = i.sample(r)).value), r += 10;
                            return {
                                times: void 0,
                                keyframes: n,
                                duration: r - 10,
                                ease: "linear"
                            }
                        }(t, l);
                        1 === (t = h.keyframes).length && (t[1] = t[0]), n = h.duration, r = h.times, o = h.ease, a = "keyframes"
                    }
                    let u = function(t, e, i, {
                        delay: s = 0,
                        duration: n = 300,
                        repeat: r = 0,
                        repeatType: o = "loop",
                        ease: a,
                        times: l
                    } = {}) {
                        let h = {
                            [e]: i
                        };
                        l && (h.offset = l);
                        let u = iX(a);
                        return Array.isArray(u) && (h.easing = u), t.animate(h, {
                            delay: s,
                            duration: n,
                            easing: Array.isArray(u) ? "linear" : u,
                            fill: "both",
                            iterations: r + 1,
                            direction: "reverse" === o ? "alternate" : "normal"
                        })
                    }(l.owner.current, h, t, {
                        ...this.options,
                        duration: n,
                        times: r,
                        ease: o
                    });
                    return u.startTime = ev.now(), this.pendingTimeline ? (u.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : u.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        l.set(em(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: u,
                        duration: n,
                        times: r,
                        type: a,
                        ease: o,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return en(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return en(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = es(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return t5.Z;
                        let {
                            animation: i
                        } = e;
                        i.timeline = t, i.onfinish = null
                    } else this.pendingTimeline = t;
                    return t5.Z
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: s,
                        type: n,
                        ease: r,
                        times: o
                    } = t;
                    if ("idle" !== e.playState && "finished" !== e.playState) {
                        if (this.time) {
                            let {
                                motionValue: t,
                                onUpdate: e,
                                onComplete: a,
                                ...l
                            } = this.options, h = new iH({
                                ...l,
                                keyframes: i,
                                duration: s,
                                type: n,
                                ease: r,
                                times: o,
                                isGenerator: !0
                            }), u = es(this.time);
                            t.setWithVelocity(h.sample(u - 10).value, h.sample(u).value, 10)
                        }
                        this.cancel()
                    }
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: s,
                        repeatType: n,
                        damping: r,
                        type: o
                    } = t;
                    return iG() && i && i_.has(i) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !s && "mirror" !== n && 0 !== r && "inertia" !== o
                }
            }
            let iQ = e7(() => void 0 !== window.ScrollTimeline);
            class iJ {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e)
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t) {
                    let e = this.animations.map(e => {
                        if (!iQ() || !e.attachTimeline) return e.pause(),
                            function(t, e) {
                                let i;
                                let s = () => {
                                    let {
                                        currentTime: s
                                    } = e, n = (null === s ? 0 : s.value) / 100;
                                    i !== n && t(n), i = n
                                };
                                return tB.Wi.update(s, !0), () => (0, tB.Pn)(s)
                            }(t => {
                                e.time = e.duration * t
                            }, t);
                        e.attachTimeline(t)
                    });
                    return () => {
                        e.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            let i0 = (t, e, i, s = {}, n, r) => o => {
                let a = eu(s, t) || {},
                    l = a.delay || s.delay || 0,
                    {
                        elapsed: h = 0
                    } = s;
                h -= es(l);
                let u = {
                    keyframes: Array.isArray(i) ? i : [null, i],
                    ease: "easeOut",
                    velocity: e.getVelocity(),
                    ...a,
                    delay: -h,
                    onUpdate: t => {
                        e.set(t), a.onUpdate && a.onUpdate(t)
                    },
                    onComplete: () => {
                        o(), a.onComplete && a.onComplete()
                    },
                    name: t,
                    motionValue: e,
                    element: r ? void 0 : n
                };
                ! function({
                    when: t,
                    delay: e,
                    delayChildren: i,
                    staggerChildren: s,
                    staggerDirection: n,
                    repeat: r,
                    repeatType: o,
                    repeatDelay: a,
                    from: l,
                    elapsed: h,
                    ...u
                }) {
                    return !!Object.keys(u).length
                }(a) && (u = {
                    ...u,
                    ...eh(t, u)
                }), u.duration && (u.duration = es(u.duration)), u.repeatDelay && (u.repeatDelay = es(u.repeatDelay)), void 0 !== u.from && (u.keyframes[0] = u.from);
                let d = !1;
                if (!1 !== u.type && (0 !== u.duration || u.repeatDelay) || (u.duration = 0, 0 !== u.delay || (d = !0)), (ec.current || ed.c.skipAnimations) && (d = !0, u.duration = 0, u.delay = 0), d && !r && void 0 !== e.get()) {
                    let t = em(u.keyframes, a);
                    if (void 0 !== t) return tB.Wi.update(() => {
                        u.onUpdate(t), u.onComplete()
                    }), new iJ([])
                }
                return !r && iq.supports(u) ? new iq(u) : new iH(u)
            };

            function i1(t) {
                return !!(W(t) && t.add)
            }

            function i5(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function i2(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class i3 {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return i5(this.subscriptions, t), () => i2(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let s = this.subscriptions.length;
                    if (s) {
                        if (1 === s) this.subscriptions[0](t, e, i);
                        else
                            for (let n = 0; n < s; n++) {
                                let s = this.subscriptions[n];
                                s && s(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
            let i9 = t => !isNaN(parseFloat(t)),
                i6 = {
                    current: void 0
                };
            class i4 {
                constructor(t, e = {}) {
                    this.version = "11.2.12", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = ev.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = ev.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = i9(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new i3);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), tB.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return i6.current && i6.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = ev.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function i7(t, e) {
                return new i4(t, e)
            }

            function i8(t) {
                return t.getProps()[p]
            }

            function st(t, e, {
                delay: i = 0,
                transitionOverride: s,
                type: n
            } = {}) {
                var r;
                let {
                    transition: o = t.getDefaultTransition(),
                    transitionEnd: a,
                    ...l
                } = e, h = t.getValue("willChange");
                s && (o = s);
                let u = [],
                    d = n && t.animationState && t.animationState.getState()[n];
                for (let e in l) {
                    let s = t.getValue(e, null !== (r = t.latestValues[e]) && void 0 !== r ? r : null),
                        n = l[e];
                    if (void 0 === n || d && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let s = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, s
                        }(d, e)) continue;
                    let a = {
                            delay: i,
                            elapsed: 0,
                            ...eu(o || {}, e)
                        },
                        c = !1;
                    if (window.HandoffAppearAnimations) {
                        let i = i8(t);
                        if (i) {
                            let t = window.HandoffAppearAnimations(i, e, s, tB.Wi);
                            null !== t && (a.elapsed = t, c = !0)
                        }
                    }
                    s.start(i0(e, s, n, t.shouldReduceMotion && B.has(e) ? {
                        type: !1
                    } : a, t, c));
                    let p = s.animation;
                    p && (i1(h) && (h.add(e), p.then(() => h.remove(e))), u.push(p))
                }
                return a && Promise.all(u).then(() => {
                    tB.Wi.update(() => {
                        a && function(t, e) {
                            let {
                                transitionEnd: i = {},
                                transition: s = {},
                                ...n
                            } = ei(t, e) || {};
                            for (let e in n = {
                                    ...n,
                                    ...i
                                }) {
                                let i = tL(n[e]);
                                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, i7(i))
                            }
                        }(t, a)
                    })
                }), u
            }

            function se(t, e, i = {}) {
                var s;
                let n = ei(t, e, "exit" === i.type ? null === (s = t.presenceContext) || void 0 === s ? void 0 : s.custom : void 0),
                    {
                        transition: r = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (r = i.transitionOverride);
                let o = n ? () => Promise.all(st(t, n, i)) : () => Promise.resolve(),
                    a = t.variantChildren && t.variantChildren.size ? (s = 0) => {
                        let {
                            delayChildren: n = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = r;
                        return function(t, e, i = 0, s = 0, n = 1, r) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * s,
                                l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                            return Array.from(t.variantChildren).sort(si).forEach((t, s) => {
                                t.notify("AnimationStart", e), o.push(se(t, e, {
                                    ...r,
                                    delay: i + l(s)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, n + s, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = r;
                if (!l) return Promise.all([o(), a(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
                    return t().then(() => e())
                }
            }

            function si(t, e) {
                return t.sortNodePosition(e)
            }
            let ss = [...w].reverse(),
                sn = w.length;

            function sr(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function so() {
                return {
                    animate: sr(!0),
                    whileInView: sr(),
                    whileHover: sr(),
                    whileTap: sr(),
                    whileDrag: sr(),
                    whileFocus: sr(),
                    exit: sr()
                }
            }
            class sa extends tq {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let s;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) s = Promise.all(e.map(e => se(t, e, i)));
                                else if ("string" == typeof e) s = se(t, e, i);
                                else {
                                    let n = "function" == typeof e ? ei(t, e, i.custom) : e;
                                    s = Promise.all(st(t, n, i))
                                }
                                return s.then(() => {
                                    tB.Wi.postRender(() => {
                                        t.notify("AnimationComplete", e)
                                    })
                                })
                            })(t, e, i))),
                            i = so(),
                            s = !0,
                            n = e => (i, s) => {
                                var n;
                                let r = ei(t, s, "exit" === e ? null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom : void 0);
                                if (r) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...s
                                    } = r;
                                    i = {
                                        ...i,
                                        ...s,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function r(r) {
                            let o = t.getProps(),
                                a = t.getVariantContext(!0) || {},
                                l = [],
                                h = new Set,
                                u = {},
                                d = 1 / 0;
                            for (let e = 0; e < sn; e++) {
                                var c;
                                let p = ss[e],
                                    m = i[p],
                                    f = void 0 !== o[p] ? o[p] : a[p],
                                    v = P(f),
                                    g = p === r ? m.isActive : null;
                                !1 === g && (d = e);
                                let y = f === a[p] && f !== o[p] && v;
                                if (y && s && t.manuallyAnimateOnMount && (y = !1), m.protectedKeys = {
                                        ...u
                                    }, !m.isActive && null === g || !f && !m.prevProp || T(f) || "boolean" == typeof f) continue;
                                let x = (c = m.prevProp, ("string" == typeof f ? f !== c : !!Array.isArray(f) && !ee(f, c)) || p === r && m.isActive && !y && v || e > d && v),
                                    w = !1,
                                    b = Array.isArray(f) ? f : [f],
                                    S = b.reduce(n(p), {});
                                !1 === g && (S = {});
                                let {
                                    prevResolvedValues: A = {}
                                } = m, V = {
                                    ...A,
                                    ...S
                                }, E = e => {
                                    x = !0, h.has(e) && (w = !0, h.delete(e)), m.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in V) {
                                    let e = S[t],
                                        i = A[t];
                                    if (!u.hasOwnProperty(t))(tR(e) && tR(i) ? ee(e, i) : e === i) ? void 0 !== e && h.has(t) ? E(t) : m.protectedKeys[t] = !0 : null != e ? E(t) : h.add(t)
                                }
                                m.prevProp = f, m.prevResolvedValues = S, m.isActive && (u = {
                                    ...u,
                                    ...S
                                }), s && t.blockInitialAnimation && (x = !1), x && (!y || w) && l.push(...b.map(t => ({
                                    animation: t,
                                    options: {
                                        type: p
                                    }
                                })))
                            }
                            if (h.size) {
                                let e = {};
                                h.forEach(i => {
                                    let s = t.getBaseTarget(i),
                                        n = t.getValue(i);
                                    n && (n.liveStyle = !0), e[i] = null != s ? s : null
                                }), l.push({
                                    animation: e
                                })
                            }
                            let p = !!l.length;
                            return s && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (p = !1), s = !1, p ? e(l) : Promise.resolve()
                        }
                        return {
                            animateChanges: r,
                            setActive: function(e, s) {
                                var n;
                                if (i[e].isActive === s) return Promise.resolve();
                                null === (n = t.variantChildren) || void 0 === n || n.forEach(t => {
                                    var i;
                                    return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, s)
                                }), i[e].isActive = s;
                                let o = r(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return o
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = so(), s = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    T(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this)
                }
            }
            let sl = 0;
            class sh extends tq {
                constructor() {
                    super(...arguments), this.id = sl++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let s = this.node.animationState.setActive("exit", !t);
                    e && !t && s.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let su = (t, e) => Math.abs(t - e);
            class sd {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: s,
                    dragSnapToOrigin: n = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            var t, e;
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let i = sm(this.lastMoveEventInfo, this.history),
                                s = null !== this.startEvent,
                                n = (t = i.offset, e = {
                                    x: 0,
                                    y: 0
                                }, Math.sqrt(su(t.x, e.x) ** 2 + su(t.y, e.y) ** 2) >= 3);
                            if (!s && !n) return;
                            let {
                                point: r
                            } = i, {
                                timestamp: o
                            } = tB.frameData;
                            this.history.push({
                                ...r,
                                timestamp: o
                            });
                            let {
                                onStart: a,
                                onMove: l
                            } = this.handlers;
                            s || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = sc(e, this.transformPagePoint), tB.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: s,
                                resumeAnimation: n
                            } = this.handlers;
                            if (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let r = sm("pointercancel" === t.type ? this.lastMoveEventInfo : sc(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), s && s(t, r)
                        }, !tI(t)) return;
                    this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = i, this.contextWindow = s || window;
                    let r = sc(t$(t), this.transformPagePoint),
                        {
                            point: o
                        } = r,
                        {
                            timestamp: a
                        } = tB.frameData;
                    this.history = [{
                        ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, sm(r, this.history)), this.removeListeners = tz(tH(this.contextWindow, "pointermove", this.handlePointerMove), tH(this.contextWindow, "pointerup", this.handlePointerUp), tH(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, tB.Pn)(this.updatePoint)
                }
            }

            function sc(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function sp(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function sm({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: sp(t, sf(e)),
                    offset: sp(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            s = null,
                            n = sf(t);
                        for (; i >= 0 && (s = t[i], !(n.timestamp - s.timestamp > es(.1)));) i--;
                        if (!s) return {
                            x: 0,
                            y: 0
                        };
                        let r = en(n.timestamp - s.timestamp);
                        if (0 === r) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (n.x - s.x) / r,
                            y: (n.y - s.y) / r
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function sf(t) {
                return t[t.length - 1]
            }

            function sv(t) {
                return t.max - t.min
            }

            function sg(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function sy(t, e, i, s = .5) {
                t.origin = s, t.originPoint = iS(e.min, e.max, t.origin), t.scale = sv(i) / sv(e), (sg(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = iS(i.min, i.max, t.origin) - t.originPoint, (sg(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function sx(t, e, i, s) {
                sy(t.x, e.x, i.x, s ? s.originX : void 0), sy(t.y, e.y, i.y, s ? s.originY : void 0)
            }

            function sP(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + sv(e)
            }

            function sT(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + sv(e)
            }

            function sw(t, e, i) {
                sT(t.x, e.x, i.x), sT(t.y, e.y, i.y)
            }

            function sb(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function sS(t, e) {
                let i = e.min - t.min,
                    s = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function sA(t, e, i) {
                return {
                    min: sV(t, e),
                    max: sV(t, i)
                }
            }

            function sV(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let sE = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                sM = () => ({
                    x: sE(),
                    y: sE()
                }),
                sC = () => ({
                    min: 0,
                    max: 0
                }),
                sD = () => ({
                    x: sC(),
                    y: sC()
                });

            function sR(t) {
                return [t("x"), t("y")]
            }

            function sk({
                top: t,
                left: e,
                right: i,
                bottom: s
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: s
                    }
                }
            }

            function sL(t) {
                return void 0 === t || 1 === t
            }

            function sj({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !sL(t) || !sL(e) || !sL(i)
            }

            function sF(t) {
                return sj(t) || sB(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function sB(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function sO(t, e, i, s, n) {
                return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e
            }

            function sW(t, e = 0, i = 1, s, n) {
                t.min = sO(t.min, e, i, s, n), t.max = sO(t.max, e, i, s, n)
            }

            function sU(t, {
                x: e,
                y: i
            }) {
                sW(t.x, e.translate, e.scale, e.originPoint), sW(t.y, i.translate, i.scale, i.originPoint)
            }

            function sI(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function s$(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function sN(t, e, [i, s, n]) {
                let r = void 0 !== e[n] ? e[n] : .5,
                    o = iS(t.min, t.max, r);
                sW(t, e[i], e[s], o, e.scale)
            }
            let sH = ["x", "scaleX", "originX"],
                sZ = ["y", "scaleY", "originY"];

            function sz(t, e) {
                sN(t.x, e, sH), sN(t.y, e, sZ)
            }

            function sK(t, e) {
                return sk(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        s = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: s.y,
                        right: s.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let sY = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                sX = new WeakMap;
            class sG {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = sD(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: s
                    } = this.getProps();
                    this.panSession = new sd(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(t$(t, "page").point)
                        },
                        onStart: (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: s,
                                onDragStart: n
                            } = this.getProps();
                            if (i && !s && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tG(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), sR(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tn.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let s = i.layout.layoutBox[t];
                                        if (s) {
                                            let t = sv(s);
                                            e = parseFloat(e) / 100 * t
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), n && tB.Wi.postRender(() => n(t, e));
                            let {
                                animationState: r
                            } = this.visualElement;
                            r && r.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: s,
                                onDirectionLock: n,
                                onDrag: r
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && n && n(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), r && r(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => sR(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                        })
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: s,
                        contextWindow: sY(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: s
                    } = e;
                    this.startAnimation(s);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    n && tB.Wi.postRender(() => n(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: s
                    } = this.getProps();
                    if (!i || !s_(t, s, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(t),
                        r = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (r = function(t, {
                        min: e,
                        max: i
                    }, s) {
                        return void 0 !== e && t < e ? t = s ? iS(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? iS(i, t, s.max) : Math.min(t, i)), t
                    }(r, this.constraints[t], this.elastic[t])), n.set(r)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: i
                    } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout, n = this.constraints;
                    e && v(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: s,
                        right: n
                    }) {
                        return {
                            x: sb(t.x, i, n),
                            y: sb(t.y, e, s)
                        }
                    }(s.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: sA(t, "left", "right"),
                            y: sA(t, "top", "bottom")
                        }
                    }(i), n !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && sR(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(s.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !v(e)) return !1;
                    let s = e.current;
                    (0, ey.k)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let r = function(t, e, i) {
                            let s = sK(t, i),
                                {
                                    scroll: n
                                } = e;
                            return n && (s$(s.x, n.offset.x), s$(s.y, n.offset.y)), s
                        }(s, n.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: sS((t = n.layout.layoutBox).x, r.x),
                            y: sS(t.y, r.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = sk(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: s,
                        dragTransition: n,
                        dragSnapToOrigin: r,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(sR(o => {
                        if (!s_(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        r && (l = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: s ? 200 : 1e6,
                            bounceDamping: s ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, h)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start(i0(t, i, 0, e, this.visualElement))
                }
                stopAnimation() {
                    sR(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    sR(t => {
                        var e;
                        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    sR(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!s_(e, i, this.currentDirection)) return;
                        let {
                            projection: s
                        } = this.visualElement, n = this.getAxisMotionValue(e);
                        if (s && s.layout) {
                            let {
                                min: i,
                                max: r
                            } = s.layout.layoutBox[e];
                            n.set(t[e] - iS(i, r, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!v(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let s = {
                        x: 0,
                        y: 0
                    };
                    sR(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            s[t] = function(t, e) {
                                let i = .5,
                                    s = sv(t),
                                    n = sv(e);
                                return n > s ? i = ib(e.min, e.max - s, t.min) : s > n && (i = ib(t.min, t.max - n, e.min)), Y(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: n
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), sR(e => {
                        if (!s_(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: n,
                                max: r
                            } = this.constraints[e];
                        i.set(iS(n, r, s[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    sX.set(this.visualElement, this);
                    let t = tH(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            v(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        s = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), tB.Wi.read(e);
                    let n = tU(window, "resize", () => this.scalePositionWithinConstraints()),
                        r = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (sR(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        n(), t(), s(), r && r()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: s = !1,
                            dragConstraints: n = !1,
                            dragElastic: r = .35,
                            dragMomentum: o = !0
                        } = t;
                    return {
                        ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: s,
                        dragConstraints: n,
                        dragElastic: r,
                        dragMomentum: o
                    }
                }
            }

            function s_(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class sq extends tq {
                constructor(t) {
                    super(t), this.removeGroupControls = t5.Z, this.removeListeners = t5.Z, this.controls = new sG(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || t5.Z
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let sQ = t => (e, i) => {
                t && tB.Wi.postRender(() => t(e, i))
            };
            class sJ extends tq {
                constructor() {
                    super(...arguments), this.removePointerDownListener = t5.Z
                }
                onPointerDown(t) {
                    this.session = new sd(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: sY(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: s
                    } = this.node.getProps();
                    return {
                        onSessionStart: sQ(t),
                        onStart: sQ(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, s && tB.Wi.postRender(() => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = tH(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            let s0 = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function s1(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let s5 = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!tr.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = s1(t, e.target.x),
                        s = s1(t, e.target.y);
                    return `${i}% ${s}%`
                }
            };
            class s2 extends o.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: s
                    } = this.props, {
                        projection: n
                    } = t;
                    Object.assign(j, s9), n && (e.group && e.group.add(n), i && i.register && s && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({
                        ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), s0.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: s,
                        isPresent: n
                    } = this.props, r = i.projection;
                    return r && (r.isPresent = n, s || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(), t.isPresent === n || (n ? r.promote() : r.relegate() || tB.Wi.postRender(() => {
                        let t = r.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), m.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: s
                    } = t;
                    s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function s3(t) {
                let [e, i] = function() {
                    let t = (0, o.useContext)(h.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: s
                    } = t, n = (0, o.useId)();
                    return (0, o.useEffect)(() => s(n), []), !e && i ? [!1, () => i && i(n)] : [!0]
                }(), s = (0, o.useContext)(D.p);
                return (0, r.jsx)(s2, {
                    ...t,
                    layoutGroup: s,
                    switchLayoutGroup: (0, o.useContext)(g),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let s9 = {
                    borderRadius: {
                        ...s5,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: s5,
                    borderTopRightRadius: s5,
                    borderBottomLeftRadius: s5,
                    borderBottomRightRadius: s5,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let s = eQ.parse(t);
                            if (s.length > 5) return t;
                            let n = eQ.createTransformer(t),
                                r = "number" != typeof s[0] ? 1 : 0,
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            s[0 + r] /= o, s[1 + r] /= a;
                            let l = iS(o, a, .5);
                            return "number" == typeof s[2 + r] && (s[2 + r] /= l), "number" == typeof s[3 + r] && (s[3 + r] /= l), n(s)
                        }
                    }
                },
                s6 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                s4 = s6.length,
                s7 = t => "string" == typeof t ? parseFloat(t) : t,
                s8 = t => "number" == typeof t || tr.test(t);

            function nt(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let ne = ns(0, .5, iv),
                ni = ns(.5, .95, t5.Z);

            function ns(t, e, i) {
                return s => s < t ? 0 : s > e ? 1 : i(ib(t, e, s))
            }

            function nn(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nr(t, e) {
                nn(t.x, e.x), nn(t.y, e.y)
            }

            function no(t, e, i, s, n) {
                return t -= e, t = s + 1 / i * (t - s), void 0 !== n && (t = s + 1 / n * (t - s)), t
            }

            function na(t, e, [i, s, n], r, o) {
                ! function(t, e = 0, i = 1, s = .5, n, r = t, o = t) {
                    if (tn.test(e) && (e = parseFloat(e), e = iS(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = iS(r.min, r.max, s);
                    t === r && (a -= e), t.min = no(t.min, e, i, a, n), t.max = no(t.max, e, i, a, n)
                }(t, e[i], e[s], e[n], e.scale, r, o)
            }
            let nl = ["x", "scaleX", "originX"],
                nh = ["y", "scaleY", "originY"];

            function nu(t, e, i, s) {
                na(t.x, e, nl, i ? i.x : void 0, s ? s.x : void 0), na(t.y, e, nh, i ? i.y : void 0, s ? s.y : void 0)
            }

            function nd(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function nc(t) {
                return nd(t.x) && nd(t.y)
            }

            function np(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function nm(t) {
                return sv(t.x) / sv(t.y)
            }
            class nf {
                constructor() {
                    this.members = []
                }
                add(t) {
                    i5(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (i2(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: s
                        } = t.options;
                        !1 === s && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function nv(t, e, i) {
                let s = "",
                    n = t.x.translate / e.x,
                    r = t.y.translate / e.y,
                    o = (null == i ? void 0 : i.z) || 0;
                if ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        transformPerspective: t,
                        rotate: e,
                        rotateX: n,
                        rotateY: r,
                        skewX: o,
                        skewY: a
                    } = i;
                    t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), n && (s += `rotateX(${n}deg) `), r && (s += `rotateY(${r}deg) `), o && (s += `skewX(${o}deg) `), a && (s += `skewY(${a}deg) `)
                }
                let a = t.x.scale * e.x,
                    l = t.y.scale * e.y;
                return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
            }
            let ng = (t, e) => t.depth - e.depth;
            class ny {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    i5(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    i2(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(ng), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let nx = ["", "X", "Y", "Z"],
                nP = {
                    visibility: "hidden"
                },
                nT = 0,
                nw = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function nb(t, e, i, s) {
                let {
                    latestValues: n
                } = e;
                n[t] && (i[t] = n[t], e.setStaticValue(t, 0), s && (s[t] = 0))
            }

            function nS({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: s,
                resetTransform: n
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = nT++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, nw.totalNodes = nw.resolvedTargetDeltas = nw.recalculatedProjection = 0, this.nodes.forEach(nE), this.nodes.forEach(nj), this.nodes.forEach(nF), this.nodes.forEach(nM), window.MotionDebug && window.MotionDebug.record(nw)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new ny)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new i3), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: s,
                            layout: n,
                            visualElement: r
                        } = this.options;
                        if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (n || s) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let s = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = ev.now(),
                                        s = ({
                                            timestamp: e
                                        }) => {
                                            let n = e - i;
                                            n >= 250 && ((0, tB.Pn)(s), t(n - 250))
                                        };
                                    return tB.Wi.read(s, !0), () => (0, tB.Pn)(s)
                                }(s, 0), s0.hasAnimatedSinceResize && (s0.hasAnimatedSinceResize = !1, this.nodes.forEach(nL))
                            })
                        }
                        s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && r && (s || n) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: s
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let n = this.options.transition || r.getDefaultTransition() || n$,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = r.getProps(),
                                l = !this.targetLayout || !np(this.targetLayout, s) || i,
                                h = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, h);
                                let e = {
                                    ...eu(n, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || nL(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = s
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, tB.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(nB), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.HandoffCancelAllAnimations && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return !1;
                                let {
                                    visualElement: i
                                } = e.options;
                                return !!i && (!!i8(i) || !!e.parent && !e.parent.hasCheckedOptimisedAppear && t(e.parent))
                            }(this) && window.HandoffCancelAllAnimations(), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let s = this.getTransformTemplate();
                        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nD);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(nR), this.isUpdating = !1, this.nodes.forEach(nk), this.nodes.forEach(nA), this.nodes.forEach(nV), this.clearAllSnapshots();
                        let t = ev.now();
                        tB.frameData.delta = Y(0, 1e3 / 60, t - tB.frameData.timestamp), tB.frameData.timestamp = t, tB.frameData.isProcessing = !0, tB.S6.update.process(tB.frameData), tB.S6.preRender.process(tB.frameData), tB.S6.render.process(tB.frameData), tB.frameData.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, m.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(nC), this.sharedNodes.forEach(nO)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, tB.Wi.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        tB.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = sD(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: s(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !nc(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            r = s !== this.prevTransformTemplateValue;
                        t && (e || sF(this.latestValues) || r) && (n(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            s = this.removeElementScroll(i);
                        return t && (s = this.removeTransform(s)), nZ((e = s).x), nZ(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: s,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return sD();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (s$(e.x, i.offset.x), s$(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = sD();
                        nr(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let s = this.path[i],
                                {
                                    scroll: n,
                                    options: r
                                } = s;
                            if (s !== this.root && n && r.layoutScroll) {
                                if (n.isRoot) {
                                    nr(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && (s$(e.x, -i.offset.x), s$(e.y, -i.offset.y))
                                }
                                s$(e.x, n.offset.x), s$(e.y, n.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = sD();
                        nr(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && sz(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), sF(s.latestValues) && sz(i, s.latestValues)
                        }
                        return sF(this.latestValues) && sz(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = sD();
                        nr(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !sF(i.latestValues)) continue;
                            sj(i.latestValues) && i.updateSnapshot();
                            let s = sD();
                            nr(s, i.measurePageBox()), nu(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                        }
                        return sF(this.latestValues) && nu(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = {
                            ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tB.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, s, n;
                        let r = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== r;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        let {
                            layout: a,
                            layoutId: l
                        } = this.options;
                        if (this.layout && (a || l)) {
                            if (this.resolvedRelativeTargetAt = tB.frameData.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = sD(), this.relativeTargetOrigin = sD(), sw(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), nr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = sD(), this.targetWithTransforms = sD()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, s = this.relativeTarget, n = this.relativeParent.target, sP(i.x, s.x, n.x), sP(i.y, s.y, n.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nr(this.target, this.layout.layoutBox), sU(this.target, this.targetDelta)) : nr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = sD(), this.relativeTargetOrigin = sD(), sw(this.relativeTargetOrigin, this.target, t.target), nr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                nw.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || sj(this.parent.latestValues) || sB(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = !!this.resumingFrom || this !== e,
                            s = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === tB.frameData.timestamp && (s = !1), s) return;
                        let {
                            layout: n,
                            layoutId: r
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || r)) return;
                        nr(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, s = !1) {
                            let n, r;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    r = (n = i[a]).projectionDelta;
                                    let o = n.instance;
                                    (!o || !o.style || "contents" !== o.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && sz(t, {
                                        x: -n.scroll.offset.x,
                                        y: -n.scroll.offset.y
                                    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, sU(t, r)), s && sF(n.latestValues) && sz(t, n.latestValues))
                                }
                                e.x = sI(e.x), e.y = sI(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox, e.targetWithTransforms = sD());
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = sM(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = sM(), this.projectionDeltaWithTransform = sM());
                        let h = this.projectionTransform;
                        sx(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = nv(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), nw.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let s = this.snapshot,
                            n = s ? s.latestValues : {},
                            r = {
                                ...this.latestValues
                            },
                            o = sM();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = sD(),
                            l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            h = this.getStack(),
                            u = !h || h.members.length <= 1,
                            d = !!(l && !u && !0 === this.options.crossfade && !this.path.some(nI));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let s = e / 1e3;
                            if (nW(o.x, t.x, s), nW(o.y, t.y, s), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var h, c, p, m;
                                sw(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, nU(p.x, m.x, a.x, s), nU(p.y, m.y, a.y, s), i && (h = this.relativeTarget, c = i, h.x.min === c.x.min && h.x.max === c.x.max && h.y.min === c.y.min && h.y.max === c.y.max) && (this.isProjectionDirty = !1), i || (i = sD()), nr(i, this.relativeTarget)
                            }
                            l && (this.animationValues = r, function(t, e, i, s, n, r) {
                                n ? (t.opacity = iS(0, void 0 !== i.opacity ? i.opacity : 1, ne(s)), t.opacityExit = iS(void 0 !== e.opacity ? e.opacity : 1, 0, ni(s))) : r && (t.opacity = iS(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
                                for (let n = 0; n < s4; n++) {
                                    let r = `border${s6[n]}Radius`,
                                        o = nt(e, r),
                                        a = nt(i, r);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || s8(o) === s8(a) ? (t[r] = Math.max(iS(s7(o), s7(a), s), 0), (tn.test(a) || tn.test(o)) && (t[r] += "%")) : t[r] = a)
                                }(e.rotate || i.rotate) && (t.rotate = iS(e.rotate || 0, i.rotate || 0, s))
                            }(r, n, this.latestValues, s, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, tB.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tB.Wi.update(() => {
                            s0.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let s = W(0) ? 0 : i7(0);
                                return s.start(i0("", s, 1e3, i)), s.animation
                            }(0, 0, {
                                ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: s,
                                latestValues: n
                            } = t;
                        if (e && i && s) {
                            if (this !== t && this.layout && s && nz(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                                i = this.target || sD();
                                let e = sv(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let s = sv(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + s
                            }
                            nr(e, i), sz(e, n), sx(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new nf), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let s = this.getStack();
                        s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let s = {};
                        i.z && nb("z", t, s, this.animationValues);
                        for (let e = 0; e < nx.length; e++) nb(`rotate${nx[e]}`, t, s, this.animationValues), nb(`skew${nx[e]}`, t, s, this.animationValues);
                        for (let e in t.render(), s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return nP;
                        let s = {
                                visibility: ""
                            },
                            n = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = tj(null == t ? void 0 : t.pointerEvents) || "", s.transform = n ? n(this.latestValues, "") : "none", s;
                        let r = this.getLead();
                        if (!this.projectionDelta || !this.layout || !r.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = tj(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !sF(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1), e
                        }
                        let o = r.animationValues || r.latestValues;
                        this.applyTransformsToTarget(), s.transform = nv(this.projectionDeltaWithTransform, this.treeScale, o), n && (s.transform = n(o, s.transform));
                        let {
                            x: a,
                            y: l
                        } = this.projectionDelta;
                        for (let t in s.transformOrigin = `${100*a.origin}% ${100*l.origin}% 0`, r.animationValues ? s.opacity = r === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : s.opacity = r === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0, j) {
                            if (void 0 === o[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = j[t], n = "none" === s.transform ? o[t] : e(o[t], r);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) s[i[e]] = n
                            } else s[t] = n
                        }
                        return this.options.layoutId && (s.pointerEvents = r === this ? tj(null == t ? void 0 : t.pointerEvents) || "" : "none"), s
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(nD), this.root.sharedNodes.clear()
                    }
                }
            }

            function nA(t) {
                t.updateLayout()
            }

            function nV(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: s
                    } = t.layout, {
                        animationType: n
                    } = t.options, r = i.source !== t.layout.source;
                    "size" === n ? sR(t => {
                        let s = r ? i.measuredBox[t] : i.layoutBox[t],
                            n = sv(s);
                        s.min = e[t].min, s.max = s.min + n
                    }) : nz(n, i.layoutBox, e) && sR(s => {
                        let n = r ? i.measuredBox[s] : i.layoutBox[s],
                            o = sv(e[s]);
                        n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + o)
                    });
                    let o = sM();
                    sx(o, e, i.layoutBox);
                    let a = sM();
                    r ? sx(a, t.applyTransform(s, !0), i.measuredBox) : sx(a, e, i.layoutBox);
                    let l = !nc(o),
                        h = !1;
                    if (!t.resumeFrom) {
                        let s = t.getClosestProjectingParent();
                        if (s && !s.resumeFrom) {
                            let {
                                snapshot: n,
                                layout: r
                            } = s;
                            if (n && r) {
                                let o = sD();
                                sw(o, i.layoutBox, n.layoutBox);
                                let a = sD();
                                sw(a, e, r.layoutBox), np(o, a) || (h = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = s)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: i,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeTargetChanged: h
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function nE(t) {
                nw.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function nM(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function nC(t) {
                t.clearSnapshot()
            }

            function nD(t) {
                t.clearMeasurements()
            }

            function nR(t) {
                t.isLayoutDirty = !1
            }

            function nk(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function nL(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function nj(t) {
                t.resolveTargetDelta()
            }

            function nF(t) {
                t.calcProjection()
            }

            function nB(t) {
                t.resetSkewAndRotation()
            }

            function nO(t) {
                t.removeLeadSnapshot()
            }

            function nW(t, e, i) {
                t.translate = iS(e.translate, 0, i), t.scale = iS(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function nU(t, e, i, s) {
                t.min = iS(e.min, i.min, s), t.max = iS(e.max, i.max, s)
            }

            function nI(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let n$ = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                nN = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                nH = nN("applewebkit/") && !nN("chrome/") ? Math.round : t5.Z;

            function nZ(t) {
                t.min = nH(t.min), t.max = nH(t.max)
            }

            function nz(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !sg(nm(e), nm(i), .2)
            }
            let nK = nS({
                    attachResizeListener: (t, e) => tU(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                nY = {
                    current: void 0
                },
                nX = nS({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!nY.current) {
                            let t = new nK({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), nY.current = t
                        }
                        return nY.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                }),
                nG = {
                    current: null
                },
                n_ = {
                    current: !1
                },
                nq = new WeakMap,
                nQ = [...eC, eZ, eQ],
                nJ = t => nQ.find(eM(t)),
                n0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                n1 = b.length;
            class n5 {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: s,
                    blockInitialAnimation: n,
                    visualState: r
                }, o = {}) {
                    this.resolveKeyframes = (t, e, i, s) => new this.KeyframeResolver(t, e, i, s, this), this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = eB, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tB.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: a,
                        renderState: l
                    } = r;
                    this.latestValues = a, this.baseTarget = {
                        ...a
                    }, this.initialValues = e.initial ? {
                        ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = o, this.blockInitialAnimation = !!n, this.isControllingVariants = S(e), this.isVariantNode = A(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: h,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in u) {
                        let e = u[t];
                        void 0 !== a[t] && W(e) && (e.set(a[t], !1), i1(h) && h.add(t))
                    }
                }
                mount(t) {
                    this.current = t, nq.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), n_.current || function() {
                        if (n_.current = !0, C.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => nG.current = t.matches;
                                t.addListener(e), e()
                            } else nG.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || nG.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in nq.delete(this.current), this.projection && this.projection.unmount(), (0, tB.Pn)(this.notifyUpdate), (0, tB.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = B.has(t),
                        s = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tB.Wi.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        n = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        s(), n(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in M) {
                        let e = M[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: s
                        } = e;
                        if (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : sD()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < n0.length; e++) {
                        let i = n0[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let s = t["on" + i];
                        s && (this.propEventSubscriptions[i] = this.on(i, s))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: s
                        } = e;
                        for (let n in e) {
                            let r = e[n],
                                o = i[n];
                            if (W(r)) t.addValue(n, r), i1(s) && s.add(n);
                            else if (W(o)) t.addValue(n, i7(r, {
                                owner: t
                            })), i1(s) && s.remove(n);
                            else if (o !== r) {
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, i7(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let s in i) void 0 === e[s] && t.removeValue(s);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < n1; t++) {
                        let i = b[t],
                            s = this.props[i];
                        (P(s) || !1 === s) && (e[i] = s)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = i7(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    var i;
                    let s = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != s && ("string" == typeof s && (ex(s) || eg(s)) ? s = parseFloat(s) : !nJ(s) && eQ.test(e) && (s = e9(t, e)), this.setBaseTarget(t, W(s) ? s.get() : s)), W(s) ? s.get() : s
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let i;
                    let {
                        initial: s
                    } = this.props;
                    if ("string" == typeof s || "object" == typeof s) {
                        let n = tC(this.props, s, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        n && (i = n[t])
                    }
                    if (s && void 0 !== i) return i;
                    let n = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === n || W(n) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : n
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new i3), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class n2 extends n5 {
                constructor() {
                    super(...arguments), this.KeyframeResolver = e4
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
            }
            class n3 extends n2 {
                constructor() {
                    super(...arguments), this.type = "html"
                }
                readValueFromInstance(t, e) {
                    if (B.has(e)) {
                        let t = e3(e);
                        return t && t.default || 0
                    } {
                        let i = window.getComputedStyle(t),
                            s = (N(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof s ? s.trim() : s
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return sK(t, e)
                }
                build(t, e, i, s) {
                    td(t, e, i, s.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return tV(t, e, i)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    W(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, s) {
                    tb(t, e, i, s)
                }
            }
            class n9 extends n2 {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (B.has(e)) {
                        let t = e3(e);
                        return t && t.default || 0
                    }
                    return e = tS.has(e) ? e : c(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return sD()
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return tE(t, e, i)
                }
                build(t, e, i, s) {
                    tP(t, e, i, this.isSVGTag, s.transformTemplate)
                }
                renderInstance(t, e, i, s) {
                    tA(t, e, i, s)
                }
                mount(t) {
                    this.isSVGTag = tw(t.tagName), super.mount(t)
                }
            }
            let n6 = (t, e) => L(t) ? new n9(e, {
                    enableHardwareAcceleration: !1
                }) : new n3(e, {
                    allowProjection: t !== o.Fragment,
                    enableHardwareAcceleration: !0
                }),
                n4 = {
                    animation: {
                        Feature: sa
                    },
                    exit: {
                        Feature: sh
                    },
                    inView: {
                        Feature: et
                    },
                    tap: {
                        Feature: t3
                    },
                    focus: {
                        Feature: t0
                    },
                    hover: {
                        Feature: tJ
                    },
                    pan: {
                        Feature: sJ
                    },
                    drag: {
                        Feature: sq,
                        ProjectionNode: nX,
                        MeasureLayout: s3
                    },
                    layout: {
                        ProjectionNode: nX,
                        MeasureLayout: s3
                    }
                },
                n7 = function(t) {
                    function e(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: s,
                            Component: n
                        }) {
                            t && function(t) {
                                for (let e in t) M[e] = {
                                    ...M[e],
                                    ...t[e]
                                }
                            }(t);
                            let c = (0, o.forwardRef)(function(t, c) {
                                var f;
                                let T;
                                let w = {
                                        ...(0, o.useContext)(a._),
                                        ...t,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, o.useContext)(D.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(t)
                                    },
                                    {
                                        isStatic: b
                                    } = w,
                                    A = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (S(t)) {
                                                let {
                                                    initial: e,
                                                    animate: i
                                                } = t;
                                                return {
                                                    initial: !1 === e || P(e) ? e : void 0,
                                                    animate: P(i) ? i : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, o.useContext)(l));
                                        return (0, o.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [V(e), V(i)])
                                    }(t),
                                    E = s(t, b);
                                if (!b && C.j) {
                                    (0, o.useContext)(d).strict;
                                    let t = function(t) {
                                        let {
                                            drag: e,
                                            layout: i
                                        } = M;
                                        if (!e && !i) return {};
                                        let s = {
                                            ...e,
                                            ...i
                                        };
                                        return {
                                            MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? s.MeasureLayout : void 0,
                                            ProjectionNode: s.ProjectionNode
                                        }
                                    }(w);
                                    T = t.MeasureLayout, A.visualElement = function(t, e, i, s, n) {
                                        let {
                                            visualElement: r
                                        } = (0, o.useContext)(l), c = (0, o.useContext)(d), f = (0, o.useContext)(h.O), P = (0, o.useContext)(a._).reducedMotion, T = (0, o.useRef)();
                                        s = s || c.renderer, !T.current && s && (T.current = s(t, {
                                            visualState: e,
                                            parent: r,
                                            props: i,
                                            presenceContext: f,
                                            blockInitialAnimation: !!f && !1 === f.initial,
                                            reducedMotionConfig: P
                                        }));
                                        let w = T.current,
                                            b = (0, o.useContext)(g);
                                        w && !w.projection && n && ("html" === w.type || "svg" === w.type) && function(t, e, i, s) {
                                            let {
                                                layoutId: n,
                                                layout: r,
                                                drag: o,
                                                dragConstraints: a,
                                                layoutScroll: l,
                                                layoutRoot: h
                                            } = e;
                                            t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                                if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                            }(t.parent)), t.projection.setOptions({
                                                layoutId: n,
                                                layout: r,
                                                alwaysMeasureLayout: !!o || a && v(a),
                                                visualElement: t,
                                                scheduleRender: () => t.scheduleRender(),
                                                animationType: "string" == typeof r ? r : "both",
                                                initialPromotionConfig: s,
                                                layoutScroll: l,
                                                layoutRoot: h
                                            })
                                        }(T.current, i, n, b), (0, o.useInsertionEffect)(() => {
                                            w && w.update(i, f)
                                        });
                                        let S = (0, o.useRef)(!!(i[p] && !window.HandoffComplete));
                                        return (0, u.L)(() => {
                                            w && (w.updateFeatures(), m.render(w.render), S.current && w.animationState && w.animationState.animateChanges())
                                        }), (0, o.useEffect)(() => {
                                            w && (!S.current && w.animationState && w.animationState.animateChanges(), S.current && (S.current = !1, y || (y = !0, queueMicrotask(x))))
                                        }), w
                                    }(n, E, w, e, t.ProjectionNode)
                                }
                                return (0, r.jsxs)(l.Provider, {
                                    value: A,
                                    children: [T && A.visualElement ? (0, r.jsx)(T, {
                                        visualElement: A.visualElement,
                                        ...w
                                    }) : null, i(n, t, (f = A.visualElement, (0, o.useCallback)(t => {
                                        t && E.mount && E.mount(t), f && (t ? f.mount(t) : f.unmount()), c && ("function" == typeof c ? c(t) : v(c) && (c.current = t))
                                    }, [f])), E, b, A.visualElement)]
                                })
                            });
                            return c[R] = n, c
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let i = new Map;
                    return new Proxy(e, {
                        get: (t, s) => (i.has(s) || i.set(s, e(s)), i.get(s))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, s) {
                    return {
                        ...L(t) ? tO : tW,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            return (e, i, s, {
                                latestValues: n
                            }, r) => {
                                let a = (L(e) ? function(t, e, i, s) {
                                        let n = (0, o.useMemo)(() => {
                                            let i = tT();
                                            return tP(i, e, {
                                                enableHardwareAcceleration: !1
                                            }, tw(s), t.transformTemplate), {
                                                ...i.attrs,
                                                style: {
                                                    ...i.style
                                                }
                                            }
                                        }, [e]);
                                        if (t.style) {
                                            let e = {};
                                            tp(e, t.style, t), n.style = {
                                                ...e,
                                                ...n.style
                                            }
                                        }
                                        return n
                                    } : function(t, e, i) {
                                        let s = {},
                                            n = function(t, e, i) {
                                                let s = t.style || {},
                                                    n = {};
                                                return tp(n, s, t), Object.assign(n, function({
                                                    transformTemplate: t
                                                }, e, i) {
                                                    return (0, o.useMemo)(() => {
                                                        let s = tc();
                                                        return td(s, e, {
                                                            enableHardwareAcceleration: !i
                                                        }, t), Object.assign({}, s.vars, s.style)
                                                    }, [e])
                                                }(t, e, i)), n
                                            }(t, e, i);
                                        return t.drag && !1 !== t.dragListener && (s.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = n, s
                                    })(i, n, r, e),
                                    l = function(t, e, i) {
                                        let s = {};
                                        for (let n in t)("values" !== n || "object" != typeof t.values) && (tv(n) || !0 === i && tf(n) || !e && !tf(n) || t.draggable && n.startsWith("onDrag")) && (s[n] = t[n]);
                                        return s
                                    }(i, "string" == typeof e, t),
                                    h = e !== o.Fragment ? {
                                        ...l,
                                        ...a,
                                        ref: s
                                    } : {},
                                    {
                                        children: u
                                    } = i,
                                    d = (0, o.useMemo)(() => W(u) ? u.get() : u, [u]);
                                return (0, o.createElement)(e, {
                                    ...h,
                                    children: d
                                })
                            }
                        }(e),
                        createVisualElement: s,
                        Component: t
                    }
                })(t, e, n4, n6))
        },
        565: function(t, e, i) {
            i.d(e, {
                c: function() {
                    return s
                }
            });
            let s = {
                skipAnimations: !1,
                useManualTiming: !1
            }
        },
        9047: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return n
                },
                k: function() {
                    return r
                }
            });
            var s = i(9276);
            let n = s.Z,
                r = s.Z
        },
        7282: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return s
                }
            });
            let s = "undefined" != typeof document
        },
        9276: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return s
                }
            });
            let s = t => t
        },
        458: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return n
                }
            });
            var s = i(2265);

            function n(t) {
                let e = (0, s.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        9033: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return n
                }
            });
            var s = i(2265);
            let n = i(7282).j ? s.useLayoutEffect : s.useEffect
        }
    }
]);