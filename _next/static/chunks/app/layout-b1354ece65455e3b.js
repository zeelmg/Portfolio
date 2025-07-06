(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        7854: function(e, t, a) {
            Promise.resolve().then(a.t.bind(a, 6857, 23)), Promise.resolve().then(a.bind(a, 8012)), Promise.resolve().then(a.bind(a, 8599)), Promise.resolve().then(a.bind(a, 6841)), Promise.resolve().then(a.bind(a, 7744)), Promise.resolve().then(a.t.bind(a, 231, 23)), Promise.resolve().then(a.t.bind(a, 4080, 23)), Promise.resolve().then(a.t.bind(a, 8987, 23))
        },
        8012: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return g
                }
            });
            var s = a(7437),
                r = a(2265),
                n = a(9673),
                o = a(2218),
                i = a(7440),
                d = a(9824);
            let l = n.fC,
                c = n.xz;
            n.x8;
            let u = n.h_,
                f = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(n.aV, {
                        className: (0, i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...r,
                        ref: t
                    })
                });
            f.displayName = n.aV.displayName;
            let m = (0, o.j)("fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950", {
                    variants: {
                        side: {
                            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                            right: "inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
                        }
                    },
                    defaultVariants: {
                        side: "right"
                    }
                }),
                p = r.forwardRef((e, t) => {
                    let {
                        side: a = "right",
                        className: r,
                        children: o,
                        ...l
                    } = e;
                    return (0, s.jsxs)(u, {
                        children: [(0, s.jsx)(f, {}), (0, s.jsxs)(n.VY, {
                            ref: t,
                            className: (0, i.cn)(m({
                                side: a
                            }), r),
                            ...l,
                            children: [o, (0, s.jsxs)(n.x8, {
                                className: "absolute top-8 right-8 transition-opacity outline-none",
                                children: [(0, s.jsx)(d.QAE, {
                                    className: "text-3xl text-accent"
                                }), (0, s.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close"
                                })]
                            })]
                        })]
                    })
                });
            p.displayName = n.VY.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Dx, {
                    ref: t,
                    className: (0, i.cn)("text-lg font-semibold text-slate-950 dark:text-slate-50", a),
                    ...r
                })
            }).displayName = n.Dx.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.dk, {
                    ref: t,
                    className: (0, i.cn)("text-sm text-slate-500 dark:text-slate-400", a),
                    ...r
                })
            }).displayName = n.dk.displayName;
            var x = a(6463),
                h = a(7138),
                v = a(3003),
                b = a(7054),
                g = () => {
                    let e = (0, x.usePathname)();
                    return (0, s.jsxs)(l, {
                        children: [(0, s.jsx)(c, {
                            className: "flex justify-center items-center",
                            children: (0, s.jsx)(v.F3G, {
                                className: "text-[32px] text-accent",
                                "aria-label": "menu"
                            })
                        }), (0, s.jsxs)(p, {
                            className: "flex flex-col",
                            children: [(0, s.jsx)("div", {
                                className: "mt-32 mb-40 text-center text-2xl",
                                children: (0, s.jsx)(h.default, {
                                    href: "/",
                                    children: (0, s.jsxs)("h1", {
                                        className: "text-4xl font-semibold",
                                        children: ["Zeel", (0, s.jsx)("span", {
                                            className: "text-accent",
                                            children: "."
                                        })]
                                    })
                                })
                            }), (0, s.jsx)("nav", {
                                className: "flex flex-col justify-center items-center gap-8",
                                children: b.O.map((t, a) => (0, s.jsx)(h.default, {
                                    href: t.path,
                                    className: "".concat(t.path === e && "text-accent border-b-2 border-accent", " \n                            test-xl capitalize font-medium hover:text-accent transition-all"),
                                    children: t.name
                                }, a))
                            })]
                        })]
                    })
                }
        },
        8599: function(e, t, a) {
            "use strict";
            var s = a(7437),
                r = a(7138),
                n = a(6463),
                o = a(7054);
            t.default = function() {
                let e = (0, n.usePathname)();
                return (0, s.jsx)("nav", {
                    className: "flex gap-8",
                    children: o.O.map((t, a) => (0, s.jsx)(r.default, {
                        href: t.path,
                        className: "".concat(t.path === e && "text-accent border-b-2 border-accent", " \n                        capitalize font-medium hover:text-accent transition-all"),
                        children: t.name
                    }, a))
                })
            }
        },
        6841: function(e, t, a) {
            "use strict";
            var s = a(7437),
                r = a(5127),
                n = a(2951),
                o = a(8298),
                i = a(6463);
            t.default = e => {
                let {
                    children: t
                } = e, a = (0, i.usePathname)();
                return (0, s.jsx)(r.M, {
                    children: (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(n.E.div, {
                            initial: {
                                opacity: 1
                            },
                            animate: {
                                opacity: 0,
                                transition: {
                                    delay: 0,
                                    duration: .4,
                                    ease: o.mZ
                                }
                            },
                            className: "h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                        }), t]
                    }, a)
                })
            }
        },
        7744: function(e, t, a) {
            "use strict";
            a.d(t, {
                Toaster: function() {
                    return v
                }
            });
            var s = a(7437),
                r = a(2265),
                n = a(4504),
                o = a(2218),
                i = a(4697),
                d = a(7440);
            let l = n.zt,
                c = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(n.l_, {
                        ref: t,
                        className: (0, d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", a),
                        ...r
                    })
                });
            c.displayName = n.l_.displayName;
            let u = (0, o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-slate-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800", {
                    variants: {
                        variant: {
                            default: "border border-accent text-accent bg-[#27272c]",
                            destructive: "destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                f = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: r,
                        ...o
                    } = e;
                    return (0, s.jsx)(n.fC, {
                        ref: t,
                        className: (0, d.cn)(u({
                            variant: r
                        }), a),
                        ...o
                    })
                });
            f.displayName = n.fC.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.aU, {
                    ref: t,
                    className: (0, d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900", a),
                    ...r
                })
            }).displayName = n.aU.displayName;
            let m = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.x8, {
                    ref: t,
                    className: (0, d.cn)("absolute right-2 top-2 rounded-md p-1 text-white/70 opacity-0 transition-opacity hover:text-white focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50", a),
                    "toast-close": "",
                    ...r,
                    children: (0, s.jsx)(i.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            m.displayName = n.x8.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.Dx, {
                    ref: t,
                    className: (0, d.cn)("text-sm font-semibold", a),
                    ...r
                })
            });
            p.displayName = n.Dx.displayName;
            let x = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(n.dk, {
                    ref: t,
                    className: (0, d.cn)("text-sm opacity-90", a),
                    ...r
                })
            });
            x.displayName = n.dk.displayName;
            var h = a(5657);

            function v() {
                let {
                    toasts: e
                } = (0, h.pm)();
                return (0, s.jsxs)(l, {
                    children: [e.map(function(e) {
                        let {
                            id: t,
                            title: a,
                            description: r,
                            action: n,
                            ...o
                        } = e;
                        return (0, s.jsxs)(f, {
                            ...o,
                            children: [(0, s.jsxs)("div", {
                                className: "grid gap-1",
                                children: [a && (0, s.jsx)(p, {
                                    children: a
                                }), r && (0, s.jsx)(x, {
                                    children: r
                                })]
                            }), n, (0, s.jsx)(m, {})]
                        }, t)
                    }), (0, s.jsx)(c, {})]
                })
            }
        },
        5657: function(e, t, a) {
            "use strict";
            a.d(t, {
                pm: function() {
                    return f
                }
            });
            var s = a(2265);
            let r = 0,
                n = new Map,
                o = e => {
                    if (n.has(e)) return;
                    let t = setTimeout(() => {
                        n.delete(e), c({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    n.set(e, t)
                },
                i = (e, t) => {
                    switch (t.type) {
                        case "ADD_TOAST":
                            return {
                                ...e, toasts: [t.toast, ...e.toasts].slice(0, 1)
                            };
                        case "UPDATE_TOAST":
                            return {
                                ...e, toasts: e.toasts.map(e => e.id === t.toast.id ? {
                                    ...e,
                                    ...t.toast
                                } : e)
                            };
                        case "DISMISS_TOAST": {
                            let {
                                toastId: a
                            } = t;
                            return a ? o(a) : e.toasts.forEach(e => {
                                o(e.id)
                            }), {
                                ...e,
                                toasts: e.toasts.map(e => e.id === a || void 0 === a ? {
                                    ...e,
                                    open: !1
                                } : e)
                            }
                        }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return {
                                ...e,
                                toasts: []
                            };
                            return {
                                ...e, toasts: e.toasts.filter(e => e.id !== t.toastId)
                            }
                    }
                },
                d = [],
                l = {
                    toasts: []
                };

            function c(e) {
                l = i(l, e), d.forEach(e => {
                    e(l)
                })
            }

            function u(e) {
                let {
                    ...t
                } = e, a = (r = (r + 1) % Number.MAX_SAFE_INTEGER).toString(), s = () => c({
                    type: "DISMISS_TOAST",
                    toastId: a
                });
                return c({
                    type: "ADD_TOAST",
                    toast: {
                        ...t,
                        id: a,
                        open: !0,
                        onOpenChange: e => {
                            e || s()
                        }
                    }
                }), {
                    id: a,
                    dismiss: s,
                    update: e => c({
                        type: "UPDATE_TOAST",
                        toast: {
                            ...e,
                            id: a
                        }
                    })
                }
            }

            function f() {
                let [e, t] = s.useState(l);
                return s.useEffect(() => (d.push(t), () => {
                    let e = d.indexOf(t);
                    e > -1 && d.splice(e, 1)
                }), [e]), {
                    ...e,
                    toast: u,
                    dismiss: e => c({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        7054: function(e, t, a) {
            "use strict";
            a.d(t, {
                O: function() {
                    return s
                }
            });
            let s = [{
                name: "Home",
                path: "/"
            }, {
                name: "Resume",
                path: "/resume.html"
            }, {
                name: "Achievements",
                path: "/achievements.html"
            }, /*{
                name: "Work",
                path: "/work"
            }*/, {
                name: "Contact",
                path: "/contact.html"
            }]
        },
        7440: function(e, t, a) {
            "use strict";
            a.d(t, {
                cn: function() {
                    return n
                }
            });
            var s = a(4839),
                r = a(6164);

            function n() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, r.m6)((0, s.W)(t))
            }
        },
        6857: function() {}
    },
    function(e) {
        e.O(0, [921, 452, 994, 951, 504, 231, 193, 459, 971, 23, 744], function() {
            return e(e.s = 7854)
        }), _N_E = e.O()
    }
]);
