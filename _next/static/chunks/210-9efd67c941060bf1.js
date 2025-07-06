"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [210], {
        7449: function(e, t) {
            function n() {
                return null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8748: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return tp
                },
                zt: function() {
                    return tc
                },
                fC: function() {
                    return tf
                },
                xz: function() {
                    return td
                }
            });
            var r = n(2265),
                o = n(8149),
                i = n(1584),
                l = n(8324),
                a = n(3938),
                u = n(3201);
            let s = ["top", "right", "bottom", "left"],
                c = Math.min,
                f = Math.max,
                d = Math.round,
                p = Math.floor,
                h = e => ({
                    x: e,
                    y: e
                }),
                g = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                m = {
                    start: "end",
                    end: "start"
                };

            function y(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function v(e) {
                return e.split("-")[0]
            }

            function x(e) {
                return e.split("-")[1]
            }

            function w(e) {
                return "x" === e ? "y" : "x"
            }

            function b(e) {
                return "y" === e ? "height" : "width"
            }

            function T(e) {
                return ["top", "bottom"].includes(v(e)) ? "y" : "x"
            }

            function R(e) {
                return e.replace(/start|end/g, e => m[e])
            }

            function E(e) {
                return e.replace(/left|right|bottom|top/g, e => g[e])
            }

            function C(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function A(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function L(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    l = T(t),
                    a = w(T(t)),
                    u = b(a),
                    s = v(t),
                    c = "y" === l,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    p = o[u] / 2 - i[u] / 2;
                switch (s) {
                    case "top":
                        r = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (x(t)) {
                    case "start":
                        r[a] -= p * (n && c ? -1 : 1);
                        break;
                    case "end":
                        r[a] += p * (n && c ? -1 : 1)
                }
                return r
            }
            let P = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = i.filter(Boolean), u = await (null == l.isRTL ? void 0 : l.isRTL(t)), s = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: f
                } = L(s, r, u), d = r, p = {}, h = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: i,
                        fn: g
                    } = a[n], {
                        x: m,
                        y: y,
                        data: v,
                        reset: x
                    } = await g({
                        x: c,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: s,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != m ? m : c, f = null != y ? y : f, p = {
                        ...p,
                        [i]: {
                            ...p[i],
                            ...v
                        }
                    }, x && h <= 50 && (h++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (s = !0 === x.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : x.rects), {
                        x: c,
                        y: f
                    } = L(s, d, u)), n = -1)
                }
                return {
                    x: c,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function O(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: u
                } = e, {
                    boundary: s = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: f = "floating",
                    altBoundary: d = !1,
                    padding: p = 0
                } = y(t, e), h = C(p), g = a[d ? "floating" === f ? "reference" : "floating" : f], m = A(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: s,
                    rootBoundary: c,
                    strategy: u
                })), v = "floating" === f ? {
                    x: r,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, x = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), w = await (null == i.isElement ? void 0 : i.isElement(x)) && await (null == i.getScale ? void 0 : i.getScale(x)) || {
                    x: 1,
                    y: 1
                }, b = A(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: v,
                    offsetParent: x,
                    strategy: u
                }) : v);
                return {
                    top: (m.top - b.top + h.top) / w.y,
                    bottom: (b.bottom - m.bottom + h.bottom) / w.y,
                    left: (m.left - b.left + h.left) / w.x,
                    right: (b.right - m.right + h.right) / w.x
                }
            }

            function k(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function S(e) {
                return s.some(t => e[t] >= 0)
            }
            async function j(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = v(n), a = x(n), u = "y" === T(n), s = ["left", "top"].includes(l) ? -1 : 1, c = i && u ? -1 : 1, f = y(t, e), {
                    mainAxis: d,
                    crossAxis: p,
                    alignmentAxis: h
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...f
                };
                return a && "number" == typeof h && (p = "end" === a ? -1 * h : h), u ? {
                    x: p * c,
                    y: d * s
                } : {
                    x: d * s,
                    y: p * c
                }
            }

            function M(e) {
                return _(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function D(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function H(e) {
                var t;
                return null == (t = (_(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function _(e) {
                return e instanceof Node || e instanceof D(e).Node
            }

            function W(e) {
                return e instanceof Element || e instanceof D(e).Element
            }

            function F(e) {
                return e instanceof HTMLElement || e instanceof D(e).HTMLElement
            }

            function N(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof D(e).ShadowRoot)
            }

            function z(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = X(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function B(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function V(e) {
                let t = I(),
                    n = X(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function I() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function Y(e) {
                return ["html", "body", "#document"].includes(M(e))
            }

            function X(e) {
                return D(e).getComputedStyle(e)
            }

            function $(e) {
                return W(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function q(e) {
                if ("html" === M(e)) return e;
                let t = e.assignedSlot || e.parentNode || N(e) && e.host || H(e);
                return N(t) ? t.host : t
            }

            function G(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = q(t);
                        return Y(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : F(n) && z(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = D(o);
                return i ? t.concat(l, l.visualViewport || [], z(o) ? o : [], l.frameElement && n ? G(l.frameElement) : []) : t.concat(o, G(o, [], n))
            }

            function J(e) {
                let t = X(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = F(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    a = d(n) !== i || d(r) !== l;
                return a && (n = i, r = l), {
                    width: n,
                    height: r,
                    $: a
                }
            }

            function K(e) {
                return W(e) ? e : e.contextElement
            }

            function Q(e) {
                let t = K(e);
                if (!F(t)) return h(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = J(t),
                    l = (i ? d(n.width) : n.width) / r,
                    a = (i ? d(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }
            let U = h(0);

            function Z(e) {
                let t = D(e);
                return I() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : U
            }

            function ee(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    l = K(e),
                    a = h(1);
                t && (r ? W(r) && (a = Q(r)) : a = Q(e));
                let u = (void 0 === (o = n) && (o = !1), r && (!o || r === D(l)) && o) ? Z(l) : h(0),
                    s = (i.left + u.x) / a.x,
                    c = (i.top + u.y) / a.y,
                    f = i.width / a.x,
                    d = i.height / a.y;
                if (l) {
                    let e = D(l),
                        t = r && W(r) ? D(r) : r,
                        n = e,
                        o = n.frameElement;
                    for (; o && r && t !== n;) {
                        let e = Q(o),
                            t = o.getBoundingClientRect(),
                            r = X(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        s *= e.x, c *= e.y, f *= e.x, d *= e.y, s += i, c += l, o = (n = D(o)).frameElement
                    }
                }
                return A({
                    width: f,
                    height: d,
                    x: s,
                    y: c
                })
            }

            function et(e) {
                return ee(H(e)).left + $(e).scrollLeft
            }

            function en(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = D(e),
                        r = H(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        u = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = I();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = H(e),
                        n = $(e),
                        r = e.ownerDocument.body,
                        o = f(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = f(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        l = -n.scrollLeft + et(e),
                        a = -n.scrollTop;
                    return "rtl" === X(r).direction && (l += f(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(H(e));
                else if (W(t)) r = function(e, t) {
                    let n = ee(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = F(e) ? Q(e) : h(1),
                        l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = Z(e);
                    r = {
                        ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return A(r)
            }

            function er(e) {
                return "static" === X(e).position
            }

            function eo(e, t) {
                return F(e) && "fixed" !== X(e).position ? t ? t(e) : e.offsetParent : null
            }

            function ei(e, t) {
                let n = D(e);
                if (B(e)) return n;
                if (!F(e)) {
                    let t = q(e);
                    for (; t && !Y(t);) {
                        if (W(t) && !er(t)) return t;
                        t = q(t)
                    }
                    return n
                }
                let r = eo(e, t);
                for (; r && ["table", "td", "th"].includes(M(r)) && er(r);) r = eo(r, t);
                return r && Y(r) && er(r) && !V(r) ? n : r || function(e) {
                    let t = q(e);
                    for (; F(t) && !Y(t) && !B(t);) {
                        if (V(t)) return t;
                        t = q(t)
                    }
                    return null
                }(e) || n
            }
            let el = async function(e) {
                let t = this.getOffsetParent || ei,
                    n = this.getDimensions,
                    r = await n(e.floating);
                return {
                    reference: function(e, t, n) {
                        let r = F(t),
                            o = H(t),
                            i = "fixed" === n,
                            l = ee(e, !0, i, t),
                            a = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = h(0);
                        if (r || !r && !i) {
                            if (("body" !== M(t) || z(o)) && (a = $(t)), r) {
                                let e = ee(t, !0, i, t);
                                u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                            } else o && (u.x = et(o))
                        }
                        return {
                            x: l.left + a.scrollLeft - u.x,
                            y: l.top + a.scrollTop - u.y,
                            width: l.width,
                            height: l.height
                        }
                    }(e.reference, await t(e.floating), e.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: r.width,
                        height: r.height
                    }
                }
            }, ea = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        elements: t,
                        rect: n,
                        offsetParent: r,
                        strategy: o
                    } = e, i = "fixed" === o, l = H(r), a = !!t && B(t.floating);
                    if (r === l || a && i) return n;
                    let u = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        s = h(1),
                        c = h(0),
                        f = F(r);
                    if ((f || !f && !i) && (("body" !== M(r) || z(l)) && (u = $(r)), F(r))) {
                        let e = ee(r);
                        s = Q(r), c.x = e.x + r.clientLeft, c.y = e.y + r.clientTop
                    }
                    return {
                        width: n.width * s.x,
                        height: n.height * s.y,
                        x: n.x * s.x - u.scrollLeft * s.x + c.x,
                        y: n.y * s.y - u.scrollTop * s.y + c.y
                    }
                },
                getDocumentElement: H,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = e, i = [..."clippingAncestors" === n ? B(t) ? [] : function(e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = G(e, [], !1).filter(e => W(e) && "body" !== M(e)),
                            o = null,
                            i = "fixed" === X(e).position,
                            l = i ? q(e) : e;
                        for (; W(l) && !Y(l);) {
                            let t = X(l),
                                n = V(l);
                            n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || z(l) && !n && function e(t, n) {
                                let r = q(t);
                                return !(r === n || !W(r) || Y(r)) && ("fixed" === X(r).position || e(r, n))
                            }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = q(l)
                        }
                        return t.set(e, r), r
                    }(t, this._c) : [].concat(n), r], l = i[0], a = i.reduce((e, n) => {
                        let r = en(t, n, o);
                        return e.top = f(r.top, e.top), e.right = c(r.right, e.right), e.bottom = c(r.bottom, e.bottom), e.left = f(r.left, e.left), e
                    }, en(t, l, o));
                    return {
                        width: a.right - a.left,
                        height: a.bottom - a.top,
                        x: a.left,
                        y: a.top
                    }
                },
                getOffsetParent: ei,
                getElementRects: el,
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    let {
                        width: t,
                        height: n
                    } = J(e);
                    return {
                        width: t,
                        height: n
                    }
                },
                getScale: Q,
                isElement: W,
                isRTL: function(e) {
                    return "rtl" === X(e).direction
                }
            }, eu = e => ({
                name: "arrow",
                options: e,
                async fn(t) {
                    let {
                        x: n,
                        y: r,
                        placement: o,
                        rects: i,
                        platform: l,
                        elements: a,
                        middlewareData: u
                    } = t, {
                        element: s,
                        padding: d = 0
                    } = y(e, t) || {};
                    if (null == s) return {};
                    let p = C(d),
                        h = {
                            x: n,
                            y: r
                        },
                        g = w(T(o)),
                        m = b(g),
                        v = await l.getDimensions(s),
                        R = "y" === g,
                        E = R ? "clientHeight" : "clientWidth",
                        A = i.reference[m] + i.reference[g] - h[g] - i.floating[m],
                        L = h[g] - i.reference[g],
                        P = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(s)),
                        O = P ? P[E] : 0;
                    O && await (null == l.isElement ? void 0 : l.isElement(P)) || (O = a.floating[E] || i.floating[m]);
                    let k = O / 2 - v[m] / 2 - 1,
                        S = c(p[R ? "top" : "left"], k),
                        j = c(p[R ? "bottom" : "right"], k),
                        M = O - v[m] - j,
                        D = O / 2 - v[m] / 2 + (A / 2 - L / 2),
                        H = f(S, c(D, M)),
                        _ = !u.arrow && null != x(o) && D !== H && i.reference[m] / 2 - (D < S ? S : j) - v[m] / 2 < 0,
                        W = _ ? D < S ? D - S : D - M : 0;
                    return {
                        [g]: h[g] + W,
                        data: {
                            [g]: H,
                            centerOffset: D - H - W,
                            ..._ && {
                                alignmentOffset: W
                            }
                        },
                        reset: _
                    }
                }
            }), es = (e, t, n) => {
                let r = new Map,
                    o = {
                        platform: ea,
                        ...n
                    },
                    i = {
                        ...o.platform,
                        _c: r
                    };
                return P(e, t, {
                    ...o,
                    platform: i
                })
            };
            var ec = n(4887),
                ef = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

            function ed(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!ed(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !ed(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function ep(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eh(e, t) {
                let n = ep(e);
                return Math.round(t * n) / n
            }

            function eg(e) {
                let t = r.useRef(e);
                return ef(() => {
                    t.current = e
                }), t
            }
            let em = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eu({
                            element: n.current,
                            padding: r
                        }).fn(t) : {} : n ? eu({
                            element: n,
                            padding: r
                        }).fn(t) : {}
                    }
                }),
                ey = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = 0), {
                            name: "offset",
                            options: n,
                            async fn(e) {
                                var t, r;
                                let {
                                    x: o,
                                    y: i,
                                    placement: l,
                                    middlewareData: a
                                } = e, u = await j(e, n);
                                return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                    x: o + u.x,
                                    y: i + u.y,
                                    data: {
                                        ...u,
                                        placement: l
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ev = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}), {
                            name: "shift",
                            options: n,
                            async fn(e) {
                                let {
                                    x: t,
                                    y: r,
                                    placement: o
                                } = e, {
                                    mainAxis: i = !0,
                                    crossAxis: l = !1,
                                    limiter: a = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...u
                                } = y(n, e), s = {
                                    x: t,
                                    y: r
                                }, d = await O(e, u), p = T(v(o)), h = w(p), g = s[h], m = s[p];
                                if (i) {
                                    let e = "y" === h ? "top" : "left",
                                        t = "y" === h ? "bottom" : "right",
                                        n = g + d[e],
                                        r = g - d[t];
                                    g = f(n, c(g, r))
                                }
                                if (l) {
                                    let e = "y" === p ? "top" : "left",
                                        t = "y" === p ? "bottom" : "right",
                                        n = m + d[e],
                                        r = m - d[t];
                                    m = f(n, c(m, r))
                                }
                                let x = a.fn({
                                    ...e,
                                    [h]: g,
                                    [p]: m
                                });
                                return {
                                    ...x,
                                    data: {
                                        x: x.x - t,
                                        y: x.y - r
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ex = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}), {
                            options: n,
                            fn(e) {
                                let {
                                    x: t,
                                    y: r,
                                    placement: o,
                                    rects: i,
                                    middlewareData: l
                                } = e, {
                                    offset: a = 0,
                                    mainAxis: u = !0,
                                    crossAxis: s = !0
                                } = y(n, e), c = {
                                    x: t,
                                    y: r
                                }, f = T(o), d = w(f), p = c[d], h = c[f], g = y(a, e), m = "number" == typeof g ? {
                                    mainAxis: g,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...g
                                };
                                if (u) {
                                    let e = "y" === d ? "height" : "width",
                                        t = i.reference[d] - i.floating[e] + m.mainAxis,
                                        n = i.reference[d] + i.reference[e] - m.mainAxis;
                                    p < t ? p = t : p > n && (p = n)
                                }
                                if (s) {
                                    var x, b;
                                    let e = "y" === d ? "width" : "height",
                                        t = ["top", "left"].includes(v(o)),
                                        n = i.reference[f] - i.floating[e] + (t && (null == (x = l.offset) ? void 0 : x[f]) || 0) + (t ? 0 : m.crossAxis),
                                        r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (b = l.offset) ? void 0 : b[f]) || 0) - (t ? m.crossAxis : 0);
                                    h < n ? h = n : h > r && (h = r)
                                }
                                return {
                                    [d]: p,
                                    [f]: h
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ew = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}), {
                            name: "flip",
                            options: n,
                            async fn(e) {
                                var t, r, o, i, l;
                                let {
                                    placement: a,
                                    middlewareData: u,
                                    rects: s,
                                    initialPlacement: c,
                                    platform: f,
                                    elements: d
                                } = e, {
                                    mainAxis: p = !0,
                                    crossAxis: h = !0,
                                    fallbackPlacements: g,
                                    fallbackStrategy: m = "bestFit",
                                    fallbackAxisSideDirection: C = "none",
                                    flipAlignment: A = !0,
                                    ...L
                                } = y(n, e);
                                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                                let P = v(a),
                                    k = T(c),
                                    S = v(c) === c,
                                    j = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)),
                                    M = g || (S || !A ? [E(c)] : function(e) {
                                        let t = E(e);
                                        return [R(e), t, R(t)]
                                    }(c)),
                                    D = "none" !== C;
                                !g && D && M.push(... function(e, t, n, r) {
                                    let o = x(e),
                                        i = function(e, t, n) {
                                            let r = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return t ? o : r;
                                                    return t ? r : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(v(e), "start" === n, r);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(R)))), i
                                }(c, A, C, j));
                                let H = [c, ...M],
                                    _ = await O(e, L),
                                    W = [],
                                    F = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                                if (p && W.push(_[P]), h) {
                                    let e = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = x(e),
                                            o = w(T(e)),
                                            i = b(o),
                                            l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (l = E(l)), [l, E(l)]
                                    }(a, s, j);
                                    W.push(_[e[0]], _[e[1]])
                                }
                                if (F = [...F, {
                                        placement: a,
                                        overflows: W
                                    }], !W.every(e => e <= 0)) {
                                    let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                                        t = H[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: F
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (i = F.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!n) switch (m) {
                                        case "bestFit": {
                                            let e = null == (l = F.filter(e => {
                                                if (D) {
                                                    let t = T(e.placement);
                                                    return t === k || "y" === t
                                                }
                                                return !0
                                            }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
                                            e && (n = e);
                                            break
                                        }
                                        case "initialPlacement":
                                            n = c
                                    }
                                    if (a !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                eb = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}), {
                            name: "size",
                            options: n,
                            async fn(e) {
                                let t, r;
                                let {
                                    placement: o,
                                    rects: i,
                                    platform: l,
                                    elements: a
                                } = e, {
                                    apply: u = () => {},
                                    ...s
                                } = y(n, e), d = await O(e, s), p = v(o), h = x(o), g = "y" === T(o), {
                                    width: m,
                                    height: w
                                } = i.floating;
                                "top" === p || "bottom" === p ? (t = p, r = h === (await (null == l.isRTL ? void 0 : l.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (r = p, t = "end" === h ? "top" : "bottom");
                                let b = w - d.top - d.bottom,
                                    R = m - d.left - d.right,
                                    E = c(w - d[t], b),
                                    C = c(m - d[r], R),
                                    A = !e.middlewareData.shift,
                                    L = E,
                                    P = C;
                                if (g ? P = h || A ? c(C, R) : R : L = h || A ? c(E, b) : b, A && !h) {
                                    let e = f(d.left, 0),
                                        t = f(d.right, 0),
                                        n = f(d.top, 0),
                                        r = f(d.bottom, 0);
                                    g ? P = m - 2 * (0 !== e || 0 !== t ? e + t : f(d.left, d.right)) : L = w - 2 * (0 !== n || 0 !== r ? n + r : f(d.top, d.bottom))
                                }
                                await u({
                                    ...e,
                                    availableWidth: P,
                                    availableHeight: L
                                });
                                let k = await l.getDimensions(a.floating);
                                return m !== k.width || w !== k.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                eT = (e, t) => {
                    var n;
                    return {
                        ...(void 0 === (n = e) && (n = {}), {
                            name: "hide",
                            options: n,
                            async fn(e) {
                                let {
                                    rects: t
                                } = e, {
                                    strategy: r = "referenceHidden",
                                    ...o
                                } = y(n, e);
                                switch (r) {
                                    case "referenceHidden": {
                                        let n = k(await O(e, {
                                            ...o,
                                            elementContext: "reference"
                                        }), t.reference);
                                        return {
                                            data: {
                                                referenceHiddenOffsets: n,
                                                referenceHidden: S(n)
                                            }
                                        }
                                    }
                                    case "escaped": {
                                        let n = k(await O(e, {
                                            ...o,
                                            altBoundary: !0
                                        }), t.floating);
                                        return {
                                            data: {
                                                escapedOffsets: n,
                                                escaped: S(n)
                                            }
                                        }
                                    }
                                    default:
                                        return {}
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eR = (e, t) => ({
                    ...em(e),
                    options: [e, t]
                });
            var eE = n(5171),
                eC = n(7437),
                eA = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, eC.jsx)(eE.WV.svg, {
                        ...i,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, eC.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            eA.displayName = "Arrow";
            var eL = n(5137),
                eP = n(1336),
                eO = "Popper",
                [ek, eS] = (0, l.b)(eO),
                [ej, eM] = ek(eO),
                eD = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, i] = r.useState(null);
                    return (0, eC.jsx)(ej, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: i,
                        children: n
                    })
                };
            eD.displayName = eO;
            var eH = "PopperAnchor",
                e_ = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: o,
                        ...l
                    } = e, a = eM(eH, n), u = r.useRef(null), s = (0, i.e)(t, u);
                    return r.useEffect(() => {
                        a.onAnchorChange((null == o ? void 0 : o.current) || u.current)
                    }), o ? null : (0, eC.jsx)(eE.WV.div, {
                        ...l,
                        ref: s
                    })
                });
            e_.displayName = eH;
            var eW = "PopperContent",
                [eF, eN] = ek(eW),
                ez = r.forwardRef((e, t) => {
                    var n, o, l, a, u, s, d, h;
                    let {
                        __scopePopper: g,
                        side: m = "bottom",
                        sideOffset: y = 0,
                        align: v = "center",
                        alignOffset: x = 0,
                        arrowPadding: w = 0,
                        avoidCollisions: b = !0,
                        collisionBoundary: T = [],
                        collisionPadding: R = 0,
                        sticky: E = "partial",
                        hideWhenDetached: C = !1,
                        updatePositionStrategy: A = "optimized",
                        onPlaced: L,
                        ...P
                    } = e, O = eM(eW, g), [k, S] = r.useState(null), j = (0, i.e)(t, e => S(e)), [M, D] = r.useState(null), _ = function(e) {
                        let [t, n] = r.useState(void 0);
                        return (0, eP.b)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(M), W = null !== (d = null == _ ? void 0 : _.width) && void 0 !== d ? d : 0, F = null !== (h = null == _ ? void 0 : _.height) && void 0 !== h ? h : 0, N = "number" == typeof R ? R : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...R
                    }, z = Array.isArray(T) ? T : [T], B = z.length > 0, V = {
                        padding: N,
                        boundary: z.filter(eY),
                        altBoundary: B
                    }, {
                        refs: I,
                        floatingStyles: Y,
                        placement: X,
                        isPositioned: $,
                        middlewareData: q
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: o = [],
                            platform: i,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: s,
                            open: c
                        } = e, [f, d] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = r.useState(o);
                        ed(p, o) || h(o);
                        let [g, m] = r.useState(null), [y, v] = r.useState(null), x = r.useCallback(e => {
                            e !== R.current && (R.current = e, m(e))
                        }, []), w = r.useCallback(e => {
                            e !== E.current && (E.current = e, v(e))
                        }, []), b = l || g, T = a || y, R = r.useRef(null), E = r.useRef(null), C = r.useRef(f), A = null != s, L = eg(s), P = eg(i), O = r.useCallback(() => {
                            if (!R.current || !E.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            P.current && (e.platform = P.current), es(R.current, E.current, e).then(e => {
                                let t = {
                                    ...e,
                                    isPositioned: !0
                                };
                                k.current && !ed(C.current, t) && (C.current = t, ec.flushSync(() => {
                                    d(t)
                                }))
                            })
                        }, [p, t, n, P]);
                        ef(() => {
                            !1 === c && C.current.isPositioned && (C.current.isPositioned = !1, d(e => ({
                                ...e,
                                isPositioned: !1
                            })))
                        }, [c]);
                        let k = r.useRef(!1);
                        ef(() => (k.current = !0, () => {
                            k.current = !1
                        }), []), ef(() => {
                            if (b && (R.current = b), T && (E.current = T), b && T) {
                                if (L.current) return L.current(b, T, O);
                                O()
                            }
                        }, [b, T, O, L, A]);
                        let S = r.useMemo(() => ({
                                reference: R,
                                floating: E,
                                setReference: x,
                                setFloating: w
                            }), [x, w]),
                            j = r.useMemo(() => ({
                                reference: b,
                                floating: T
                            }), [b, T]),
                            M = r.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!j.floating) return e;
                                let t = eh(j.floating, f.x),
                                    r = eh(j.floating, f.y);
                                return u ? {
                                    ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...ep(j.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, j.floating, f.x, f.y]);
                        return r.useMemo(() => ({
                            ...f,
                            update: O,
                            refs: S,
                            elements: j,
                            floatingStyles: M
                        }), [f, O, S, j, M])
                    }({
                        strategy: "fixed",
                        placement: m + ("center" !== v ? "-" + v : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e, t, n, r) {
                                let o;
                                void 0 === r && (r = {});
                                let {
                                    ancestorScroll: i = !0,
                                    ancestorResize: l = !0,
                                    elementResize: a = "function" == typeof ResizeObserver,
                                    layoutShift: u = "function" == typeof IntersectionObserver,
                                    animationFrame: s = !1
                                } = r, d = K(e), h = i || l ? [...d ? G(d) : [], ...G(t)] : [];
                                h.forEach(e => {
                                    i && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), l && e.addEventListener("resize", n)
                                });
                                let g = d && u ? function(e, t) {
                                        let n, r = null,
                                            o = H(e);

                                        function i() {
                                            var e;
                                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                        }
                                        return ! function l(a, u) {
                                            void 0 === a && (a = !1), void 0 === u && (u = 1), i();
                                            let {
                                                left: s,
                                                top: d,
                                                width: h,
                                                height: g
                                            } = e.getBoundingClientRect();
                                            if (a || t(), !h || !g) return;
                                            let m = p(d),
                                                y = p(o.clientWidth - (s + h)),
                                                v = {
                                                    rootMargin: -m + "px " + -y + "px " + -p(o.clientHeight - (d + g)) + "px " + -p(s) + "px",
                                                    threshold: f(0, c(1, u)) || 1
                                                },
                                                x = !0;

                                            function w(e) {
                                                let t = e[0].intersectionRatio;
                                                if (t !== u) {
                                                    if (!x) return l();
                                                    t ? l(!1, t) : n = setTimeout(() => {
                                                        l(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                x = !1
                                            }
                                            try {
                                                r = new IntersectionObserver(w, {
                                                    ...v,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                r = new IntersectionObserver(w, v)
                                            }
                                            r.observe(e)
                                        }(!0), i
                                    }(d, n) : null,
                                    m = -1,
                                    y = null;
                                a && (y = new ResizeObserver(e => {
                                    let [r] = e;
                                    r && r.target === d && y && (y.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = y) || e.observe(t)
                                    })), n()
                                }), d && !s && y.observe(d), y.observe(t));
                                let v = s ? ee(e) : null;
                                return s && function t() {
                                    let r = ee(e);
                                    v && (r.x !== v.x || r.y !== v.y || r.width !== v.width || r.height !== v.height) && n(), v = r, o = requestAnimationFrame(t)
                                }(), n(), () => {
                                    var e;
                                    h.forEach(e => {
                                        i && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
                                    }), null == g || g(), null == (e = y) || e.disconnect(), y = null, s && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === A
                            })
                        },
                        elements: {
                            reference: O.anchor
                        },
                        middleware: [ey({
                            mainAxis: y + F,
                            alignmentAxis: x
                        }), b && ev({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === E ? ex() : void 0,
                            ...V
                        }), b && ew({
                            ...V
                        }), eb({
                            ...V,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: l
                                } = n.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(r, "px")), a.setProperty("--radix-popper-available-height", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), M && eR({
                            element: M,
                            padding: w
                        }), eX({
                            arrowWidth: W,
                            arrowHeight: F
                        }), C && eT({
                            strategy: "referenceHidden",
                            ...V
                        })]
                    }), [J, Q] = e$(X), U = (0, eL.W)(L);
                    (0, eP.b)(() => {
                        $ && (null == U || U())
                    }, [$, U]);
                    let Z = null === (n = q.arrow) || void 0 === n ? void 0 : n.x,
                        et = null === (o = q.arrow) || void 0 === o ? void 0 : o.y,
                        en = (null === (l = q.arrow) || void 0 === l ? void 0 : l.centerOffset) !== 0,
                        [er, eo] = r.useState();
                    return (0, eP.b)(() => {
                        k && eo(window.getComputedStyle(k).zIndex)
                    }, [k]), (0, eC.jsx)("div", {
                        ref: I.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: {
                            ...Y,
                            transform: $ ? Y.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: er,
                            "--radix-popper-transform-origin": [null === (a = q.transformOrigin) || void 0 === a ? void 0 : a.x, null === (u = q.transformOrigin) || void 0 === u ? void 0 : u.y].join(" "),
                            ...(null === (s = q.hide) || void 0 === s ? void 0 : s.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, eC.jsx)(eF, {
                            scope: g,
                            placedSide: J,
                            onArrowChange: D,
                            arrowX: Z,
                            arrowY: et,
                            shouldHideArrow: en,
                            children: (0, eC.jsx)(eE.WV.div, {
                                "data-side": J,
                                "data-align": Q,
                                ...P,
                                ref: j,
                                style: {
                                    ...P.style,
                                    animation: $ ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            ez.displayName = eW;
            var eB = "PopperArrow",
                eV = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                eI = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = eN(eB, n), i = eV[o.placedSide];
                    return (0, eC.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            } [o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            } [o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, eC.jsx)(eA, {
                            ...r,
                            ref: t,
                            style: {
                                ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function eY(e) {
                return null !== e
            }
            eI.displayName = eB;
            var eX = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: s
                    } = t, c = (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, f = c ? 0 : e.arrowWidth, d = c ? 0 : e.arrowHeight, [p, h] = e$(a), g = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    } [h], m = (null !== (i = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== i ? i : 0) + f / 2, y = (null !== (l = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== l ? l : 0) + d / 2, v = "", x = "";
                    return "bottom" === p ? (v = c ? g : "".concat(m, "px"), x = "".concat(-d, "px")) : "top" === p ? (v = c ? g : "".concat(m, "px"), x = "".concat(u.floating.height + d, "px")) : "right" === p ? (v = "".concat(-d, "px"), x = c ? g : "".concat(y, "px")) : "left" === p && (v = "".concat(u.floating.width + d, "px"), x = c ? g : "".concat(y, "px")), {
                        data: {
                            x: v,
                            y: x
                        }
                    }
                }
            });

            function e$(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            n(6935);
            var eq = n(1383),
                eG = n(1538),
                eJ = n(1715),
                eK = n(1725),
                [eQ, eU] = (0, l.b)("Tooltip", [eS]),
                eZ = eS(),
                e0 = "TooltipProvider",
                e1 = "tooltip.open",
                [e2, e5] = eQ(e0),
                e3 = e => {
                    let {
                        __scopeTooltip: t,
                        delayDuration: n = 700,
                        skipDelayDuration: o = 300,
                        disableHoverableContent: i = !1,
                        children: l
                    } = e, [a, u] = r.useState(!0), s = r.useRef(!1), c = r.useRef(0);
                    return r.useEffect(() => {
                        let e = c.current;
                        return () => window.clearTimeout(e)
                    }, []), (0, eC.jsx)(e2, {
                        scope: t,
                        isOpenDelayed: a,
                        delayDuration: n,
                        onOpen: r.useCallback(() => {
                            window.clearTimeout(c.current), u(!1)
                        }, []),
                        onClose: r.useCallback(() => {
                            window.clearTimeout(c.current), c.current = window.setTimeout(() => u(!0), o)
                        }, [o]),
                        isPointerInTransitRef: s,
                        onPointerInTransitChange: r.useCallback(e => {
                            s.current = e
                        }, []),
                        disableHoverableContent: i,
                        children: l
                    })
                };
            e3.displayName = e0;
            var e7 = "Tooltip",
                [e8, e4] = eQ(e7),
                e9 = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: i = !1,
                        onOpenChange: l,
                        disableHoverableContent: a,
                        delayDuration: s
                    } = e, c = e5(e7, e.__scopeTooltip), f = eZ(t), [d, p] = r.useState(null), h = (0, u.M)(), g = r.useRef(0), m = null != a ? a : c.disableHoverableContent, y = null != s ? s : c.delayDuration, v = r.useRef(!1), [x = !1, w] = (0, eJ.T)({
                        prop: o,
                        defaultProp: i,
                        onChange: e => {
                            e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(e1))) : c.onClose(), null == l || l(e)
                        }
                    }), b = r.useMemo(() => x ? v.current ? "delayed-open" : "instant-open" : "closed", [x]), T = r.useCallback(() => {
                        window.clearTimeout(g.current), v.current = !1, w(!0)
                    }, [w]), R = r.useCallback(() => {
                        window.clearTimeout(g.current), w(!1)
                    }, [w]), E = r.useCallback(() => {
                        window.clearTimeout(g.current), g.current = window.setTimeout(() => {
                            v.current = !0, w(!0)
                        }, y)
                    }, [y, w]);
                    return r.useEffect(() => () => window.clearTimeout(g.current), []), (0, eC.jsx)(eD, {
                        ...f,
                        children: (0, eC.jsx)(e8, {
                            scope: t,
                            contentId: h,
                            open: x,
                            stateAttribute: b,
                            trigger: d,
                            onTriggerChange: p,
                            onTriggerEnter: r.useCallback(() => {
                                c.isOpenDelayed ? E() : T()
                            }, [c.isOpenDelayed, E, T]),
                            onTriggerLeave: r.useCallback(() => {
                                m ? R() : window.clearTimeout(g.current)
                            }, [R, m]),
                            onOpen: T,
                            onClose: R,
                            disableHoverableContent: m,
                            children: n
                        })
                    })
                };
            e9.displayName = e7;
            var e6 = "TooltipTrigger",
                te = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...l
                    } = e, a = e4(e6, n), u = e5(e6, n), s = eZ(n), c = r.useRef(null), f = (0, i.e)(t, c, a.onTriggerChange), d = r.useRef(!1), p = r.useRef(!1), h = r.useCallback(() => d.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), (0, eC.jsx)(e_, {
                        asChild: !0,
                        ...s,
                        children: (0, eC.jsx)(eE.WV.button, {
                            "aria-describedby": a.open ? a.contentId : void 0,
                            "data-state": a.stateAttribute,
                            ...l,
                            ref: f,
                            onPointerMove: (0, o.M)(e.onPointerMove, e => {
                                "touch" === e.pointerType || p.current || u.isPointerInTransitRef.current || (a.onTriggerEnter(), p.current = !0)
                            }),
                            onPointerLeave: (0, o.M)(e.onPointerLeave, () => {
                                a.onTriggerLeave(), p.current = !1
                            }),
                            onPointerDown: (0, o.M)(e.onPointerDown, () => {
                                d.current = !0, document.addEventListener("pointerup", h, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.M)(e.onFocus, () => {
                                d.current || a.onOpen()
                            }),
                            onBlur: (0, o.M)(e.onBlur, a.onClose),
                            onClick: (0, o.M)(e.onClick, a.onClose)
                        })
                    })
                });
            te.displayName = e6;
            var [tt, tn] = eQ("TooltipPortal", {
                forceMount: void 0
            }), tr = "TooltipContent", to = r.forwardRef((e, t) => {
                let n = tn(tr, e.__scopeTooltip),
                    {
                        forceMount: r = n.forceMount,
                        side: o = "top",
                        ...i
                    } = e,
                    l = e4(tr, e.__scopeTooltip);
                return (0, eC.jsx)(eq.z, {
                    present: r || l.open,
                    children: l.disableHoverableContent ? (0, eC.jsx)(tu, {
                        side: o,
                        ...i,
                        ref: t
                    }) : (0, eC.jsx)(ti, {
                        side: o,
                        ...i,
                        ref: t
                    })
                })
            }), ti = r.forwardRef((e, t) => {
                let n = e4(tr, e.__scopeTooltip),
                    o = e5(tr, e.__scopeTooltip),
                    l = r.useRef(null),
                    a = (0, i.e)(t, l),
                    [u, s] = r.useState(null),
                    {
                        trigger: c,
                        onClose: f
                    } = n,
                    d = l.current,
                    {
                        onPointerInTransitChange: p
                    } = o,
                    h = r.useCallback(() => {
                        s(null), p(!1)
                    }, [p]),
                    g = r.useCallback((e, t) => {
                        let n = e.currentTarget,
                            r = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            o = function(e, t) {
                                let n = Math.abs(t.top - e.y),
                                    r = Math.abs(t.bottom - e.y),
                                    o = Math.abs(t.right - e.x),
                                    i = Math.abs(t.left - e.x);
                                switch (Math.min(n, r, o, i)) {
                                    case i:
                                        return "left";
                                    case o:
                                        return "right";
                                    case n:
                                        return "top";
                                    case r:
                                        return "bottom";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(r, n.getBoundingClientRect());
                        s(function(e) {
                            let t = e.slice();
                            return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                function(e) {
                                    if (e.length <= 1) return e.slice();
                                    let t = [];
                                    for (let n = 0; n < e.length; n++) {
                                        let r = e[n];
                                        for (; t.length >= 2;) {
                                            let e = t[t.length - 1],
                                                n = t[t.length - 2];
                                            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                            else break
                                        }
                                        t.push(r)
                                    }
                                    t.pop();
                                    let n = [];
                                    for (let t = e.length - 1; t >= 0; t--) {
                                        let r = e[t];
                                        for (; n.length >= 2;) {
                                            let e = n[n.length - 1],
                                                t = n[n.length - 2];
                                            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                            else break
                                        }
                                        n.push(r)
                                    }
                                    return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                }(t)
                        }([... function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                r = [];
                            switch (t) {
                                case "top":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y + n
                                    }, {
                                        x: e.x + n,
                                        y: e.y + n
                                    });
                                    break;
                                case "bottom":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y - n
                                    }, {
                                        x: e.x + n,
                                        y: e.y - n
                                    });
                                    break;
                                case "left":
                                    r.push({
                                        x: e.x + n,
                                        y: e.y - n
                                    }, {
                                        x: e.x + n,
                                        y: e.y + n
                                    });
                                    break;
                                case "right":
                                    r.push({
                                        x: e.x - n,
                                        y: e.y - n
                                    }, {
                                        x: e.x - n,
                                        y: e.y + n
                                    })
                            }
                            return r
                        }(r, o), ... function(e) {
                            let {
                                top: t,
                                right: n,
                                bottom: r,
                                left: o
                            } = e;
                            return [{
                                x: o,
                                y: t
                            }, {
                                x: n,
                                y: t
                            }, {
                                x: n,
                                y: r
                            }, {
                                x: o,
                                y: r
                            }]
                        }(t.getBoundingClientRect())])), p(!0)
                    }, [p]);
                return r.useEffect(() => () => h(), [h]), r.useEffect(() => {
                    if (c && d) {
                        let e = e => g(e, d),
                            t = e => g(e, c);
                        return c.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                            c.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
                        }
                    }
                }, [c, d, g, h]), r.useEffect(() => {
                    if (u) {
                        let e = e => {
                            let t = e.target,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                r = (null == c ? void 0 : c.contains(t)) || (null == d ? void 0 : d.contains(t)),
                                o = ! function(e, t) {
                                    let {
                                        x: n,
                                        y: r
                                    } = e, o = !1;
                                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                        let l = t[e].x,
                                            a = t[e].y,
                                            u = t[i].x,
                                            s = t[i].y;
                                        a > r != s > r && n < (u - l) * (r - a) / (s - a) + l && (o = !o)
                                    }
                                    return o
                                }(n, u);
                            r ? h() : o && (h(), f())
                        };
                        return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                    }
                }, [c, d, u, f, h]), (0, eC.jsx)(tu, {
                    ...e,
                    ref: a
                })
            }), [tl, ta] = eQ(e7, {
                isInside: !1
            }), tu = r.forwardRef((e, t) => {
                let {
                    __scopeTooltip: n,
                    children: o,
                    "aria-label": i,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: u,
                    ...s
                } = e, c = e4(tr, n), f = eZ(n), {
                    onClose: d
                } = c;
                return r.useEffect(() => (document.addEventListener(e1, d), () => document.removeEventListener(e1, d)), [d]), r.useEffect(() => {
                    if (c.trigger) {
                        let e = e => {
                            let t = e.target;
                            (null == t ? void 0 : t.contains(c.trigger)) && d()
                        };
                        return window.addEventListener("scroll", e, {
                            capture: !0
                        }), () => window.removeEventListener("scroll", e, {
                            capture: !0
                        })
                    }
                }, [c.trigger, d]), (0, eC.jsx)(a.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: l,
                    onPointerDownOutside: u,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: d,
                    children: (0, eC.jsxs)(ez, {
                        "data-state": c.stateAttribute,
                        ...f,
                        ...s,
                        ref: t,
                        style: {
                            ...s.style,
                            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                        },
                        children: [(0, eC.jsx)(eG.A4, {
                            children: o
                        }), (0, eC.jsx)(tl, {
                            scope: n,
                            isInside: !0,
                            children: (0, eC.jsx)(eK.f, {
                                id: c.contentId,
                                role: "tooltip",
                                children: i || o
                            })
                        })]
                    })
                })
            });
            to.displayName = tr;
            var ts = "TooltipArrow";
            r.forwardRef((e, t) => {
                let {
                    __scopeTooltip: n,
                    ...r
                } = e, o = eZ(n);
                return ta(ts, n).isInside ? null : (0, eC.jsx)(eI, {
                    ...o,
                    ...r,
                    ref: t
                })
            }).displayName = ts;
            var tc = e3,
                tf = e9,
                td = te,
                tp = to
        }
    }
]);