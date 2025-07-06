(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        3166: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 4225)), Promise.resolve().then(a.bind(a, 1623)), Promise.resolve().then(a.bind(a, 6796)), Promise.resolve().then(a.t.bind(a, 231, 23))
        },
        4225: function(e, t, a) {
            "use strict";
            var n = a(7437),
                i = a(4365),
                s = a.n(i),
                r = a(2951),
                l = a(9281);
            t.default = () => (0, n.jsx)(r.E.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1,
                    transition: {
                        delay: 0,
                        duration: .4,
                        ease: "easeInOut"
                    }
                },
                children: (0, n.jsx)("span", {
                    className: "text-xl",
                    children: (0, n.jsx)(s(), {
                        options: {
                            strings: l.rU,
                            autoStart: !0,
                            loop: !0,
                            cursor: "_",
                            delay: 90,
                            deleteSpeed: 40
                        }
                    })
                })
            })
        },
        1623: function(e, t, a) {
            "use strict";
            var n = a(7437),
                i = a(2951),
                s = a(6648);
            t.default = () => (0, n.jsx)("div", {
                className: "w-full h-full relative",
                children: (0, n.jsxs)(i.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            delay: 0,
                            duration: .4,
                            ease: "easeInOut"
                        }
                    },
                    children: [(0, n.jsx)(i.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            transition: {
                                delay: .5,
                                duration: .4,
                                ease: "easeInOut"
                            }
                        },
                        children: (0, n.jsx)("img", {
                        src: "/3.jpg",
                        alt: "",
                        className: "w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute object-contain rounded-full"
                        })

                    }), (0, n.jsx)(i.E.svg, {
                        className: "w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]",
                        fill: "transparent",
                        viewBox: "0 0 506 506",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)(i.E.circle, {
                            cx: "253",
                            cy: "253",
                            r: "250",
                            stroke: "#00ff99",
                            strokeWidth: "4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            initial: {
                                strokeDasharray: "24 10 0 0"
                            },
                            animate: {
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360]
                            },
                            transition: {
                                duration: 20,
                                repeat: 1 / 0,
                                repeatType: "reverse"
                            }
                        })
                    })]
                })
            })
        },
        6796: function(e, t, a) {
            "use strict";
            var n = a(7437),
                i = a(7095),
                s = a(9281);
            t.default = () => (0, n.jsx)("section", {
                className: "pt-4 pb-12 xl:pt-0 xl:pb-0",
                children: (0, n.jsx)("div", {
                    className: "container max-auto",
                    children: (0, n.jsx)("div", {
                        className: "flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none",
                        children: s.ot.map((e, t) => (0, n.jsxs)("div", {
                            className: "flex-1 flex gap-4 items-center justify-center xl:justify-start",
                            children: [(0, n.jsx)(i.ZP, {
                                end: e.num,
                                duration: 5,
                                delay: 0,
                                className: "text-4xl xl:text-6xl font-extrabold"
                            }), (0, n.jsx)("p", {
                                className: "".concat(e.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]", " leading-snug text-white/80"),
                                children: e.text
                            })]
                        }, t))
                    })
                })
            })
        },
        9281: function(e, t, a) {
            "use strict";
            a.d(t, {
                ot: function() {
                    return n
                },
                rU: function() {
                    return i
                }
            });
            let n = [{
                    num: 3,
                    text: "Years of experience"
                }, {
                    num: 50,
                    text: "Assessment"
                }, {
                    num: 150,
                    text: "Problems Solved"
                }, {
                    num: 90,
                    text: "Minutes Exercise"
                }],
                i = ["Cybersecurity Engineer", "Ethical Hacker", "Penetration Tester", "Security Analyst"]
        }
    },
    function(e) {
        e.O(0, [951, 231, 648, 428, 971, 23, 744], function() {
            return e(e.s = 3166)
        }), _N_E = e.O()
    }
]);