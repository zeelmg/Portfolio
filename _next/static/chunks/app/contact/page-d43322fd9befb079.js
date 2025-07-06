(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327], {
        2899: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 2176))
        },
        2176: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return y
                }
            });
            var a = s(7437),
                n = s(495),
                i = s(2265),
                r = s(7440);
            let l = i.forwardRef((e, t) => {
                let {
                    className: s,
                    type: n,
                    ...i
                } = e;
                return (0, a.jsx)("input", {
                    type: n,
                    className: (0, r.cn)("flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none", s),
                    ref: t,
                    ...i
                })
            });
            l.displayName = "Input";
            let c = i.forwardRef((e, t) => {
                let {
                    className: s,
                    ...n
                } = e;
                return (0, a.jsx)("textarea", {
                    className: (0, r.cn)("flex h-[48px] rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50", s),
                    ref: t,
                    ...n
                })
            });
            c.displayName = "Textarea";
            var o = s(2951),
                d = s(1942),
                p = s(9343),
                x = s(1907),
                u = s(3274),
                f = s(5657),
                m = s(3665),
                h = s(7449),
                b = s.n(h);
            let g = [{
                icon: (0, a.jsx)(d.DNl, {}),
                title: m.P[0].title,
                description: m.P[0].description
            }, {
                icon: (0, a.jsx)(d.SRX, {}),
                title: m.P[1].title,
                description: m.P[1].description
            }, {
                icon: (0, a.jsx)(d.Nh4, {}),
                title: m.P[2].title,
                description: m.P[2].description
            }];
            var y = () => {
                let e = (0, i.useRef)(null),
                    {
                        toast: t
                    } = (0, f.pm)(),
                    {
                        register: s,
                        handleSubmit: r,
                        reset: d,
                        formState: {
                            isSubmitting: m
                        }
                    } = (0, p.cI)({
                        mode: "onChange"
                    }),
                    h = async s => {
                        var a;
                        let n = await (null === (a = e.current) || void 0 === a ? void 0 : a.executeAsync());
                        void 0 !== n && (s.captcha = n, await fetch("/api", {
                            method: "POST",
                            body: JSON.stringify(s),
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(async e => await e.json()), t({
                            description: "✔ Message Sent Seccessfully!"
                        }), d())
                    };
                return (0, a.jsxs)(o.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            delay: 0,
                            duration: .4,
                            ease: "easeIn"
                        }
                    },
                    className: "py-6",
                    children: [(0, a.jsx)(b(), {
                        children: (0, a.jsx)("link", {
                            rel: "canonical",
                            href: "https://jerinbs.vercel.app/contact"
                        }, "canonical")
                    }), (0, a.jsx)("div", {
                        className: "container mx-auto",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col xl:flex-row gap-[30px]",
                            children: [(0, a.jsx)("div", {
                                className: "xl:w-[54%] order-2 xl:order-none",
                                children: (0, a.jsxs)("form", {
                                    className: "flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl",
                                    onSubmit: r(h),
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-4xl text-accent",
                                        children: "Let's Connect"
                                    }), (0, a.jsx)("p", {
                                        className: "text-white/60",
                                        children: "Let's share our knowledge and collaborate on building a safer cyber world and cutting-edge web experiences!"
                                    }), (0, a.jsxs)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [(0, a.jsx)(l, {
                                            ...s("firstname"),
                                            placeholder: "Firstname"
                                        }), (0, a.jsx)(l, {
                                            ...s("lastname"),
                                            type: "lastname",
                                            placeholder: "Lastname"
                                        }), (0, a.jsx)(l, {
                                            ...s("email"),
                                            type: "email",
                                            placeholder: "Email Address"
                                        }), (0, a.jsx)(l, {
                                            ...s("phone"),
                                            type: "phone",
                                            placeholder: "Phone Number",
                                            minLength: 10,
                                            maxLength: 10
                                        })]
                                    }), (0, a.jsx)(c, {
                                        ...s("message"),
                                        className: "h-[200px]",
                                        placeholder: "Type your message here."
                                    }), (0, a.jsx)(x.Z, {
                                        sitekey: "6Le8OAgqAAAAAAurFFz0MbOgUNuJI9OUWN-Qrq8M",
                                        size: "invisible",
                                        ref: e
                                    }), (0, a.jsxs)(n.z, {
                                        type: "submit",
                                        size: "md",
                                        className: "max-w-48",
                                        variant: m ? "disabled" : "default",
                                        children: [m && (0, a.jsx)(u.Z, {
                                            className: " text-black mr-2 h-5 w-5 animate-spin"
                                        }), "Send message"]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0",
                                children: (0, a.jsx)("ul", {
                                    className: "flex flex-col gap-6",
                                    children: g.map((e, t) => (0, a.jsxs)("li", {
                                        className: "flex items-center gap-6",
                                        children: [(0, a.jsx)("div", {
                                            className: "w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center",
                                            children: (0, a.jsx)("div", {
                                                className: "text-[28px]",
                                                children: e.icon
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, a.jsx)("p", {
                                                className: "text-white/60",
                                                children: e.title
                                            }), (0, a.jsx)("h3", {
                                                className: "text-xl",
                                                children: e.description
                                            })]
                                        })]
                                    }, t))
                                })
                            })]
                        })
                    })]
                })
            }
        },
        495: function(e, t, s) {
            "use strict";
            s.d(t, {
                z: function() {
                    return o
                }
            });
            var a = s(7437),
                n = s(2265),
                i = s(1538),
                r = s(2218),
                l = s(7440);
            let c = (0, r.j)("inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors", {
                    variants: {
                        variant: {
                            default: "bg-accent text-primary hover:bg-accent-hover",
                            primary: "bg-primary text-white",
                            outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
                            disabled: "pointer-events-none bg-gray-300 text-gray-800"
                        },
                        size: {
                            default: "h-[44px] px-4",
                            md: "h-[48px] px-6",
                            lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                o = n.forwardRef((e, t) => {
                    let {
                        className: s,
                        variant: n,
                        size: r,
                        asChild: o = !1,
                        ...d
                    } = e, p = o ? i.g7 : "button";
                    return (0, a.jsx)(p, {
                        className: (0, l.cn)(c({
                            variant: n,
                            size: r,
                            className: s
                        })),
                        ref: t,
                        ...d
                    })
                });
            o.displayName = "Button"
        },
        5657: function(e, t, s) {
            "use strict";
            s.d(t, {
                pm: function() {
                    return x
                }
            });
            var a = s(2265);
            let n = 0,
                i = new Map,
                r = e => {
                    if (i.has(e)) return;
                    let t = setTimeout(() => {
                        i.delete(e), d({
                            type: "REMOVE_TOAST",
                            toastId: e
                        })
                    }, 1e6);
                    i.set(e, t)
                },
                l = (e, t) => {
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
                                toastId: s
                            } = t;
                            return s ? r(s) : e.toasts.forEach(e => {
                                r(e.id)
                            }), {
                                ...e,
                                toasts: e.toasts.map(e => e.id === s || void 0 === s ? {
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
                c = [],
                o = {
                    toasts: []
                };

            function d(e) {
                o = l(o, e), c.forEach(e => {
                    e(o)
                })
            }

            function p(e) {
                let {
                    ...t
                } = e, s = (n = (n + 1) % Number.MAX_SAFE_INTEGER).toString(), a = () => d({
                    type: "DISMISS_TOAST",
                    toastId: s
                });
                return d({
                    type: "ADD_TOAST",
                    toast: {
                        ...t,
                        id: s,
                        open: !0,
                        onOpenChange: e => {
                            e || a()
                        }
                    }
                }), {
                    id: s,
                    dismiss: a,
                    update: e => d({
                        type: "UPDATE_TOAST",
                        toast: {
                            ...e,
                            id: s
                        }
                    })
                }
            }

            function x() {
                let [e, t] = a.useState(o);
                return a.useEffect(() => (c.push(t), () => {
                    let e = c.indexOf(t);
                    e > -1 && c.splice(e, 1)
                }), [e]), {
                    ...e,
                    toast: p,
                    dismiss: e => d({
                        type: "DISMISS_TOAST",
                        toastId: e
                    })
                }
            }
        },
        3665: function(e, t, s) {
            "use strict";
            s.d(t, {
                P: function() {
                    return a
                }
            });
            let a = [{
                title: "Phone",
                description: "(+91) 76002 31234"
            }, {
                title: "Email",
                description: "zemsmg@gmail.com"
            }, {
                title: "Address",
                description: "Surat , Gujarat, India"
            }]
        },
        7440: function(e, t, s) {
            "use strict";
            s.d(t, {
                cn: function() {
                    return i
                }
            });
            var a = s(4839),
                n = s(6164);

            function i() {
                for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                return (0, n.m6)((0, a.W)(t))
            }
        }
    },
    function(e) {
        e.O(0, [699, 951, 504, 286, 971, 23, 744], function() {
            return e(e.s = 2899)
        }), _N_E = e.O()
    }
]);