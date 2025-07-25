"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [504], {
        1584: function(e, r, t) {
            t.d(r, {
                F: function() {
                    return n
                },
                e: function() {
                    return l
                }
            });
            var o = t(2265);

            function n(...e) {
                return r => e.forEach(e => {
                    "function" == typeof e ? e(r) : null != e && (e.current = r)
                })
            }

            function l(...e) {
                return o.useCallback(n(...e), e)
            }
        },
        1538: function(e, r, t) {
            t.d(r, {
                A4: function() {
                    return s
                },
                g7: function() {
                    return i
                }
            });
            var o = t(2265),
                n = t(1584),
                l = t(7437),
                i = o.forwardRef((e, r) => {
                    let {
                        children: t,
                        ...n
                    } = e, i = o.Children.toArray(t), s = i.find(c);
                    if (s) {
                        let e = s.props.children,
                            t = i.map(r => r !== s ? r : o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null);
                        return (0, l.jsx)(a, {
                            ...n,
                            ref: r,
                            children: o.isValidElement(e) ? o.cloneElement(e, void 0, t) : null
                        })
                    }
                    return (0, l.jsx)(a, {
                        ...n,
                        ref: r,
                        children: t
                    })
                });
            i.displayName = "Slot";
            var a = o.forwardRef((e, r) => {
                let {
                    children: t,
                    ...l
                } = e;
                if (o.isValidElement(t)) {
                    let e, i;
                    let a = (e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get) && "isReactWarning" in e && e.isReactWarning ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get) && "isReactWarning" in e && e.isReactWarning ? t.props.ref : t.props.ref || t.ref;
                    return o.cloneElement(t, {
                        ... function(e, r) {
                            let t = {
                                ...r
                            };
                            for (let o in r) {
                                let n = e[o],
                                    l = r[o];
                                /^on[A-Z]/.test(o) ? n && l ? t[o] = (...e) => {
                                    l(...e), n(...e)
                                } : n && (t[o] = n) : "style" === o ? t[o] = {
                                    ...n,
                                    ...l
                                } : "className" === o && (t[o] = [n, l].filter(Boolean).join(" "))
                            }
                            return {
                                ...e,
                                ...t
                            }
                        }(l, t.props),
                        ref: r ? (0, n.F)(r, a) : a
                    })
                }
                return o.Children.count(t) > 1 ? o.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            var s = ({
                children: e
            }) => (0, l.jsx)(l.Fragment, {
                children: e
            });

            function c(e) {
                return o.isValidElement(e) && e.type === s
            }
        },
        4839: function(e, r, t) {
            t.d(r, {
                W: function() {
                    return o
                }
            });

            function o() {
                for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)(e = arguments[t]) && (r = function e(r) {
                    var t, o, n = "";
                    if ("string" == typeof r || "number" == typeof r) n += r;
                    else if ("object" == typeof r) {
                        if (Array.isArray(r)) {
                            var l = r.length;
                            for (t = 0; t < l; t++) r[t] && (o = e(r[t])) && (n && (n += " "), n += o)
                        } else
                            for (o in r) r[o] && (n && (n += " "), n += o)
                    }
                    return n
                }(e)) && (o && (o += " "), o += r);
                return o
            }
        },
        1810: function(e, r, t) {
            t.d(r, {
                w_: function() {
                    return d
                }
            });
            var o = t(2265),
                n = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                l = o.createContext && o.createContext(n),
                i = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    r && (o = o.filter(function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    })), t.push.apply(t, o)
                }
                return t
            }

            function c(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? s(Object(t), !0).forEach(function(r) {
                        var o, n;
                        o = r, n = t[r], (o = function(e) {
                            var r = function(e, r) {
                                if ("object" != typeof e || !e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (void 0 !== t) {
                                    var o = t.call(e, r || "default");
                                    if ("object" != typeof o) return o;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === r ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof r ? r : r + ""
                        }(o)) in e ? Object.defineProperty(e, o, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[o] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    })
                }
                return e
            }

            function d(e) {
                return r => o.createElement(u, a({
                    attr: c({}, e.attr)
                }, r), function e(r) {
                    return r && r.map((r, t) => o.createElement(r.tag, c({
                        key: t
                    }, r.attr), e(r.child)))
                }(e.child))
            }

            function u(e) {
                var r = r => {
                    var t, {
                            attr: n,
                            size: l,
                            title: s
                        } = e,
                        d = function(e, r) {
                            if (null == e) return {};
                            var t, o, n = function(e, r) {
                                if (null == e) return {};
                                var t = {};
                                for (var o in e)
                                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                                        if (r.indexOf(o) >= 0) continue;
                                        t[o] = e[o]
                                    } return t
                            }(e, r);
                            if (Object.getOwnPropertySymbols) {
                                var l = Object.getOwnPropertySymbols(e);
                                for (o = 0; o < l.length; o++) t = l[o], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
                            }
                            return n
                        }(e, i),
                        u = l || r.size || "1em";
                    return r.className && (t = r.className), e.className && (t = (t ? t + " " : "") + e.className), o.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, r.attr, n, d, {
                        className: t,
                        style: c(c({
                            color: e.color || r.color
                        }, r.style), e.style),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && o.createElement("title", null, s), e.children)
                };
                return void 0 !== l ? o.createElement(l.Consumer, null, e => r(e)) : r(n)
            }
        },
        6164: function(e, r, t) {
            t.d(r, {
                m6: function() {
                    return $
                }
            });
            let o = /^\[(.+)\]$/;

            function n(e, r) {
                let t = e;
                return r.split("-").forEach(e => {
                    t.nextPart.has(e) || t.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), t = t.nextPart.get(e)
                }), t
            }
            let l = /\s+/;

            function i() {
                let e, r, t = 0,
                    o = "";
                for (; t < arguments.length;)(e = arguments[t++]) && (r = function e(r) {
                    let t;
                    if ("string" == typeof r) return r;
                    let o = "";
                    for (let n = 0; n < r.length; n++) r[n] && (t = e(r[n])) && (o && (o += " "), o += t);
                    return o
                }(e)) && (o && (o += " "), o += r);
                return o
            }

            function a(e) {
                let r = r => r[e] || [];
                return r.isThemeGetter = !0, r
            }
            let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                p = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                b = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                m = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function g(e) {
                return y(e) || d.has(e) || c.test(e)
            }

            function h(e) {
                return G(e, "length", R)
            }

            function y(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function v(e) {
                return G(e, "number", y)
            }

            function w(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function x(e) {
                return e.endsWith("%") && y(e.slice(0, -1))
            }

            function k(e) {
                return s.test(e)
            }

            function j(e) {
                return u.test(e)
            }
            let z = new Set(["length", "size", "percentage"]);

            function O(e) {
                return G(e, z, W)
            }

            function C(e) {
                return G(e, "position", W)
            }
            let P = new Set(["image", "url"]);

            function E(e) {
                return G(e, P, M)
            }

            function S(e) {
                return G(e, "", I)
            }

            function N() {
                return !0
            }

            function G(e, r, t) {
                let o = s.exec(e);
                return !!o && (o[1] ? "string" == typeof r ? o[1] === r : r.has(o[1]) : t(o[2]))
            }

            function R(e) {
                return p.test(e) && !f.test(e)
            }

            function W() {
                return !1
            }

            function I(e) {
                return b.test(e)
            }

            function M(e) {
                return m.test(e)
            }
            let $ = function(e, ...r) {
                let t, a, s;
                let c = function(l) {
                    var i;
                    return a = (t = {
                        cache: function(e) {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let r = 0,
                                t = new Map,
                                o = new Map;

                            function n(n, l) {
                                t.set(n, l), ++r > e && (r = 0, o = t, t = new Map)
                            }
                            return {
                                get(e) {
                                    let r = t.get(e);
                                    return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0
                                },
                                set(e, r) {
                                    t.has(e) ? t.set(e, r) : n(e, r)
                                }
                            }
                        }((i = r.reduce((e, r) => r(e), e())).cacheSize),
                        splitModifiers: function(e) {
                            let r = e.separator,
                                t = 1 === r.length,
                                o = r[0],
                                n = r.length;
                            return function(e) {
                                let l;
                                let i = [],
                                    a = 0,
                                    s = 0;
                                for (let c = 0; c < e.length; c++) {
                                    let d = e[c];
                                    if (0 === a) {
                                        if (d === o && (t || e.slice(c, c + n) === r)) {
                                            i.push(e.slice(s, c)), s = c + n;
                                            continue
                                        }
                                        if ("/" === d) {
                                            l = c;
                                            continue
                                        }
                                    }
                                    "[" === d ? a++ : "]" === d && a--
                                }
                                let c = 0 === i.length ? e : e.substring(s),
                                    d = c.startsWith("!"),
                                    u = d ? c.substring(1) : c;
                                return {
                                    modifiers: i,
                                    hasImportantModifier: d,
                                    baseClassName: u,
                                    maybePostfixModifierPosition: l && l > s ? l - s : void 0
                                }
                            }
                        }(i),
                        ... function(e) {
                            let r = function(e) {
                                    var r;
                                    let {
                                        theme: t,
                                        prefix: o
                                    } = e, l = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return (r = Object.entries(e.classGroups), o ? r.map(([e, r]) => [e, r.map(e => "string" == typeof e ? o + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [o + e, r])) : e)]) : r).forEach(([e, r]) => {
                                        (function e(r, t, o, l) {
                                            r.forEach(r => {
                                                if ("string" == typeof r) {
                                                    ("" === r ? t : n(t, r)).classGroupId = o;
                                                    return
                                                }
                                                if ("function" == typeof r) {
                                                    if (r.isThemeGetter) {
                                                        e(r(l), t, o, l);
                                                        return
                                                    }
                                                    t.validators.push({
                                                        validator: r,
                                                        classGroupId: o
                                                    });
                                                    return
                                                }
                                                Object.entries(r).forEach(([r, i]) => {
                                                    e(i, n(t, r), o, l)
                                                })
                                            })
                                        })(r, l, e, t)
                                    }), l
                                }(e),
                                {
                                    conflictingClassGroups: t,
                                    conflictingClassGroupModifiers: l
                                } = e;
                            return {
                                getClassGroupId: function(e) {
                                    let t = e.split("-");
                                    return "" === t[0] && 1 !== t.length && t.shift(),
                                        function e(r, t) {
                                            if (0 === r.length) return t.classGroupId;
                                            let o = r[0],
                                                n = t.nextPart.get(o),
                                                l = n ? e(r.slice(1), n) : void 0;
                                            if (l) return l;
                                            if (0 === t.validators.length) return;
                                            let i = r.join("-");
                                            return t.validators.find(({
                                                validator: e
                                            }) => e(i))?.classGroupId
                                        }(t, r) || function(e) {
                                            if (o.test(e)) {
                                                let r = o.exec(e)[1],
                                                    t = r?.substring(0, r.indexOf(":"));
                                                if (t) return "arbitrary.." + t
                                            }
                                        }(e)
                                },
                                getConflictingClassGroupIds: function(e, r) {
                                    let o = t[e] || [];
                                    return r && l[e] ? [...o, ...l[e]] : o
                                }
                            }
                        }(i)
                    }).cache.get, s = t.cache.set, c = d, d(l)
                };

                function d(e) {
                    let r = a(e);
                    if (r) return r;
                    let o = function(e, r) {
                        let {
                            splitModifiers: t,
                            getClassGroupId: o,
                            getConflictingClassGroupIds: n
                        } = r, i = new Set;
                        return e.trim().split(l).map(e => {
                            let {
                                modifiers: r,
                                hasImportantModifier: n,
                                baseClassName: l,
                                maybePostfixModifierPosition: i
                            } = t(e), a = o(i ? l.substring(0, i) : l), s = !!i;
                            if (!a) {
                                if (!i || !(a = o(l))) return {
                                    isTailwindClass: !1,
                                    originalClassName: e
                                };
                                s = !1
                            }
                            let c = (function(e) {
                                if (e.length <= 1) return e;
                                let r = [],
                                    t = [];
                                return e.forEach(e => {
                                    "[" === e[0] ? (r.push(...t.sort(), e), t = []) : t.push(e)
                                }), r.push(...t.sort()), r
                            })(r).join(":");
                            return {
                                isTailwindClass: !0,
                                modifierId: n ? c + "!" : c,
                                classGroupId: a,
                                originalClassName: e,
                                hasPostfixModifier: s
                            }
                        }).reverse().filter(e => {
                            if (!e.isTailwindClass) return !0;
                            let {
                                modifierId: r,
                                classGroupId: t,
                                hasPostfixModifier: o
                            } = e, l = r + t;
                            return !i.has(l) && (i.add(l), n(t, o).forEach(e => i.add(r + e)), !0)
                        }).reverse().map(e => e.originalClassName).join(" ")
                    }(e, t);
                    return s(e, o), o
                }
                return function() {
                    return c(i.apply(null, arguments))
                }
            }(function() {
                let e = a("colors"),
                    r = a("spacing"),
                    t = a("blur"),
                    o = a("brightness"),
                    n = a("borderColor"),
                    l = a("borderRadius"),
                    i = a("borderSpacing"),
                    s = a("borderWidth"),
                    c = a("contrast"),
                    d = a("grayscale"),
                    u = a("hueRotate"),
                    p = a("invert"),
                    f = a("gap"),
                    b = a("gradientColorStops"),
                    m = a("gradientColorStopPositions"),
                    z = a("inset"),
                    P = a("margin"),
                    G = a("opacity"),
                    R = a("padding"),
                    W = a("saturate"),
                    I = a("scale"),
                    M = a("sepia"),
                    $ = a("skew"),
                    _ = a("space"),
                    D = a("translate"),
                    T = () => ["auto", "contain", "none"],
                    A = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    V = () => ["auto", k, r],
                    F = () => [k, r],
                    q = () => ["", g, h],
                    B = () => ["auto", y, k],
                    Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    H = () => ["solid", "dashed", "dotted", "double", "none"],
                    J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    L = () => ["", "0", k],
                    Q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    U = () => [y, v],
                    X = () => [y, k];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [N],
                        spacing: [g, h],
                        blur: ["none", "", j, k],
                        brightness: U(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", j, k],
                        borderSpacing: F(),
                        borderWidth: q(),
                        contrast: U(),
                        grayscale: L(),
                        hueRotate: X(),
                        invert: L(),
                        gap: F(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [x, h],
                        inset: V(),
                        margin: V(),
                        opacity: U(),
                        padding: F(),
                        saturate: U(),
                        scale: U(),
                        sepia: L(),
                        skew: X(),
                        space: F(),
                        translate: F()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", k]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [j]
                        }],
                        "break-after": [{
                            "break-after": Q()
                        }],
                        "break-before": [{
                            "break-before": Q()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...Z(), k]
                        }],
                        overflow: [{
                            overflow: A()
                        }],
                        "overflow-x": [{
                            "overflow-x": A()
                        }],
                        "overflow-y": [{
                            "overflow-y": A()
                        }],
                        overscroll: [{
                            overscroll: T()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": T()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": T()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [z]
                        }],
                        "inset-x": [{
                            "inset-x": [z]
                        }],
                        "inset-y": [{
                            "inset-y": [z]
                        }],
                        start: [{
                            start: [z]
                        }],
                        end: [{
                            end: [z]
                        }],
                        top: [{
                            top: [z]
                        }],
                        right: [{
                            right: [z]
                        }],
                        bottom: [{
                            bottom: [z]
                        }],
                        left: [{
                            left: [z]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", w, k]
                        }],
                        basis: [{
                            basis: V()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", k]
                        }],
                        grow: [{
                            grow: L()
                        }],
                        shrink: [{
                            shrink: L()
                        }],
                        order: [{
                            order: ["first", "last", "none", w, k]
                        }],
                        "grid-cols": [{
                            "grid-cols": [N]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", w, k]
                            }, k]
                        }],
                        "col-start": [{
                            "col-start": B()
                        }],
                        "col-end": [{
                            "col-end": B()
                        }],
                        "grid-rows": [{
                            "grid-rows": [N]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [w, k]
                            }, k]
                        }],
                        "row-start": [{
                            "row-start": B()
                        }],
                        "row-end": [{
                            "row-end": B()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", k]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", k]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...K()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...K(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...K(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [R]
                        }],
                        px: [{
                            px: [R]
                        }],
                        py: [{
                            py: [R]
                        }],
                        ps: [{
                            ps: [R]
                        }],
                        pe: [{
                            pe: [R]
                        }],
                        pt: [{
                            pt: [R]
                        }],
                        pr: [{
                            pr: [R]
                        }],
                        pb: [{
                            pb: [R]
                        }],
                        pl: [{
                            pl: [R]
                        }],
                        m: [{
                            m: [P]
                        }],
                        mx: [{
                            mx: [P]
                        }],
                        my: [{
                            my: [P]
                        }],
                        ms: [{
                            ms: [P]
                        }],
                        me: [{
                            me: [P]
                        }],
                        mt: [{
                            mt: [P]
                        }],
                        mr: [{
                            mr: [P]
                        }],
                        mb: [{
                            mb: [P]
                        }],
                        ml: [{
                            ml: [P]
                        }],
                        "space-x": [{
                            "space-x": [_]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [_]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, r]
                        }],
                        "min-w": [{
                            "min-w": [k, r, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [k, r, "none", "full", "min", "max", "fit", "prose", {
                                screen: [j]
                            }, j]
                        }],
                        h: [{
                            h: [k, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [k, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [k, r, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", j, h]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", v]
                        }],
                        "font-family": [{
                            font: [N]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", y, v]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", g, k]
                        }],
                        "list-image": [{
                            "list-image": ["none", k]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", k]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [G]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [G]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...H(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", g, h]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", g, k]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: F()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", k]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [G]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...Z(), C]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", O]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, E]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [m]
                        }],
                        "gradient-via-pos": [{
                            via: [m]
                        }],
                        "gradient-to-pos": [{
                            to: [m]
                        }],
                        "gradient-from": [{
                            from: [b]
                        }],
                        "gradient-via": [{
                            via: [b]
                        }],
                        "gradient-to": [{
                            to: [b]
                        }],
                        rounded: [{
                            rounded: [l]
                        }],
                        "rounded-s": [{
                            "rounded-s": [l]
                        }],
                        "rounded-e": [{
                            "rounded-e": [l]
                        }],
                        "rounded-t": [{
                            "rounded-t": [l]
                        }],
                        "rounded-r": [{
                            "rounded-r": [l]
                        }],
                        "rounded-b": [{
                            "rounded-b": [l]
                        }],
                        "rounded-l": [{
                            "rounded-l": [l]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [l]
                        }],
                        "rounded-se": [{
                            "rounded-se": [l]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [l]
                        }],
                        "rounded-es": [{
                            "rounded-es": [l]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [l]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [l]
                        }],
                        "rounded-br": [{
                            "rounded-br": [l]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [l]
                        }],
                        "border-w": [{
                            border: [s]
                        }],
                        "border-w-x": [{
                            "border-x": [s]
                        }],
                        "border-w-y": [{
                            "border-y": [s]
                        }],
                        "border-w-s": [{
                            "border-s": [s]
                        }],
                        "border-w-e": [{
                            "border-e": [s]
                        }],
                        "border-w-t": [{
                            "border-t": [s]
                        }],
                        "border-w-r": [{
                            "border-r": [s]
                        }],
                        "border-w-b": [{
                            "border-b": [s]
                        }],
                        "border-w-l": [{
                            "border-l": [s]
                        }],
                        "border-opacity": [{
                            "border-opacity": [G]
                        }],
                        "border-style": [{
                            border: [...H(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [s]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [s]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [G]
                        }],
                        "divide-style": [{
                            divide: H()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: ["", ...H()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [g, k]
                        }],
                        "outline-w": [{
                            outline: [g, h]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: q()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [G]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [g, h]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", j, S]
                        }],
                        "shadow-color": [{
                            shadow: [N]
                        }],
                        opacity: [{
                            opacity: [G]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...J(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": J()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [t]
                        }],
                        brightness: [{
                            brightness: [o]
                        }],
                        contrast: [{
                            contrast: [c]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", j, k]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [p]
                        }],
                        saturate: [{
                            saturate: [W]
                        }],
                        sepia: [{
                            sepia: [M]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [t]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [o]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [c]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [p]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [G]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [W]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [M]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [i]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [i]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [i]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
                        }],
                        duration: [{
                            duration: X()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", k]
                        }],
                        delay: [{
                            delay: X()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", k]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [I]
                        }],
                        "scale-x": [{
                            "scale-x": [I]
                        }],
                        "scale-y": [{
                            "scale-y": [I]
                        }],
                        rotate: [{
                            rotate: [w, k]
                        }],
                        "translate-x": [{
                            "translate-x": [D]
                        }],
                        "translate-y": [{
                            "translate-y": [D]
                        }],
                        "skew-x": [{
                            "skew-x": [$]
                        }],
                        "skew-y": [{
                            "skew-y": [$]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": F()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": F()
                        }],
                        "scroll-my": [{
                            "scroll-my": F()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": F()
                        }],
                        "scroll-me": [{
                            "scroll-me": F()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": F()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": F()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": F()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": F()
                        }],
                        "scroll-p": [{
                            "scroll-p": F()
                        }],
                        "scroll-px": [{
                            "scroll-px": F()
                        }],
                        "scroll-py": [{
                            "scroll-py": F()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": F()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": F()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": F()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": F()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": F()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": F()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", k]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [g, h, v]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        }
    }
]);