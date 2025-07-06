(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [534], {
        977: function(e, t, i) {
            Promise.resolve().then(i.bind(i, 5021))
        },
        5021: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return g
                }
            });
            var a = i(7437),
                n = i(2265),
                s = i(2951),
                r = i(7955);
            i(3034);
            var l = i(3781),
                o = i(9666),
                c = i(7138),
                d = i(6648),
                u = i(7692),
                m = () => {
                    let e = (0, r.oc)();
                    return (0, a.jsxs)("div", {
                        className: "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none",
                        children: [(0, a.jsx)("button", {
                            className: "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all",
                            onClick: () => e.slidePrev(),
                            children: (0, a.jsx)(u.gTV, {
                                className: ""
                            })
                        }), (0, a.jsx)("button", {
                            className: "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all",
                            onClick: () => e.slideNext(),
                            children: (0, a.jsx)(u.hmH, {
                                className: ""
                            })
                        })]
                    })
                };
            let p = [{
                num: "10",
                category: "ERP System",
                title: "On Duty Management System",
                description: "An online On-Duty application system streamlines the process of requesting, approving, and managing on-duty requests by eliminating paper forms between students and faculty / employer and employees.",
                stack: [{
                    name: "ReactJS"
                }, {
                    name: "MongoDB"
                }, {
                    name: "ExpressJS"
                }],
                image: "/1.png",
                live: "https://onduty.vercel.app",
                github: "https://github.com/githubjerin/OnDuty"
            }, {
                num: "02",
                category: "Server",
                title: "A Fun Home Server",
                description: "Set up a home server with Media Service (Jellyfin), Local DNS (Pihole), Nginx (Web proxy), Distributed File Storage (Hadoop on WSL and Fedora) and private cloud (Next Cloud) connected via VPN (Tailscale).",
                stack: [{
                    name: "DNS"
                }, {
                    name: "Nginx"
                }, {
                    name: "VPN"
                }],
                image: "/assets/work/server.png",
                live: "",
                github: ""
            }, {
                num: "03",
                category: "E-Commerce",
                title: "Floral Fiesta",
                description: "Floral Fiesta, a leading plant app, offers seamless online plant ordering with personalized recommendations and fosters a global community for plant enthusiasts, blending nature's beauty with tech convenience.",
                stack: [{
                    name: "Flutter"
                }, {
                    name: "Firebase"
                }],
                image: "/assets/work/floralfiesta.png",
                live: "",
                github: "https://github.com/githubjerin/FloralFiesta"
            }, {
                num: "04",
                category: "Event Website",
                title: "Bootup24",
                description: "A website built for registering various events interdepartmental symposium with an exciting UI/UX.",
                stack: [{
                    name: "ReactJS"
                }],
                image: "/assets/work/bootup.png",
                live: "https://boot-up-24.vercel.app",
                github: "https://github.com/githubjerin/boot-up-24"
            }, {
                num: "05",
                category: "Internet of Things (IoT)",
                title: "Robotic Arm and Led Cube",
                description: "Arduino Controlled robotic arm using servo and 4x4 led cube for display using 74HC595 shift registers.",
                stack: [{
                    name: "Embedded C / C++"
                }, {
                    name: "Digital Logic"
                }],
                image: "/assets/work/armandcube.png",
                live: "",
                github: "https://github.com/githubjerin/ledCube"
            }, {
                num: "06",
                category: "VAPT Report",
                title: "Parameter Tampering",
                description: "An UiPath bot used to automate the process of report generation by tampering different request parameters using Burpsuite",
                stack: [{
                    name: "Burpsuite"
                }, {
                    name: "UiPath Studio"
                }],
                image: "/assets/work/idscrapper.png",
                live: "https://raxen001.github.io/projects/rec_companion_app/",
                github: "https://github.com/githubjerin/UiPath"
            }, {
                num: "07",
                category: "API",
                title: "CVE API",
                description: "Stays updated with the CVEs listed in NVD API. Also provides a clean UI to read / visualize the data about the CVEs.",
                stack: [{
                    name: "EJS Engine"
                }, {
                    name: "CSS 3"
                }, {
                    name: "ExpressJS"
                }],
                image: "/assets/work/cveapi.png",
                live: "",
                github: "https://github.com/githubjerin/CVE-API"
            }, {
                num: "08",
                category: "Machine Learning",
                title: "Plagedoctor",
                description: "This project enhances plagiarism detection by integrating cosine and semantic similarity metrics, a user-friendly interface, and superior accuracy in identifying document similarities.",
                stack: [{
                    name: "Python"
                }, {
                    name: "Scikit Learn"
                }, {
                    name: "Cosine Similarity"
                }, {
                    name: "Semantic Similarity"
                }, {
                    name: "Ensemble Learning"
                }],
                image: "/assets/work/plagedoctor.png",
                live: "",
                github: "https://github.com/githubjerin/Plagiarism-Detector"
            }, {
                num: "09",
                category: "Event Website",
                title: "Recharge 2024",
                description: "A website to register for Cultural fest of our institution with more than 50 components and secure payment gateway.",
                stack: [{
                    name: "NextJS"
                }, {
                    name: "Tailwind"
                }, {
                    name: "DjangoAPI"
                }, {
                    name: "SQLite"
                }],
                image: "/assets/work/recharge24.png",
                live: "rechargefest.in",
                github: "https://github.com/geek-team-recharge/recharge-2024-frontend"
            }];
            var h = i(7449),
                x = i.n(h),
                g = () => {
                    let [e, t] = (0, n.useState)(p[0]);
                    return (0, a.jsxs)(s.E.div, {
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
                        className: "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0",
                        children: [(0, a.jsx)(x(), {
                            children: (0, a.jsx)("link", {
                                rel: "canonical",
                                href: "https://jerinbs.vercel.app/work"
                            }, "canonical")
                        }), (0, a.jsx)("div", {
                            className: "container mx-auto",
                            children: (0, a.jsxs)("div", {
                                className: "flex flex-col xl:flex-row xl:gap-[30px]",
                                children: [(0, a.jsx)("div", {
                                    className: "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex flex-col gap-[30px] h-[50%]",
                                        children: [(0, a.jsx)("div", {
                                            className: "text-7xl leading-none font-extrabold text-white",
                                            children: e.num
                                        }), (0, a.jsx)("p", {
                                            className: "text-accent text-2xl leading-3",
                                            children: e.category
                                        }), (0, a.jsx)("h2", {
                                            className: "text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize",
                                            children: e.title
                                        }), (0, a.jsx)("p", {
                                            className: "text-white/60",
                                            children: e.description
                                        }), (0, a.jsx)("ul", {
                                            className: "flex gap-4 flex-wrap",
                                            children: e.stack.map((t, i) => (0, a.jsxs)("li", {
                                                className: "text-xl text-accent",
                                                children: [t.name, i !== e.stack.length - 1 && ","]
                                            }, i))
                                        }), (0, a.jsx)("div", {
                                            className: "border border-white/20"
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center gap-4",
                                            children: ["" !== e.live && (0, a.jsx)(c.default, {
                                                href: e.live,
                                                children: (0, a.jsx)(o.pn, {
                                                    delayDuration: 100,
                                                    children: (0, a.jsxs)(o.u, {
                                                        children: [(0, a.jsx)(o.aJ, {
                                                            className: "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group",
                                                            children: (0, a.jsx)(l.poN, {
                                                                className: "text-white text-3xl group-hover:text-accent"
                                                            })
                                                        }), (0, a.jsx)(o._v, {
                                                            children: (0, a.jsx)("p", {
                                                                children: "Live project"
                                                            })
                                                        })]
                                                    })
                                                })
                                            }), (0, a.jsx)(c.default, {
                                                href: e.github,
                                                children: (0, a.jsx)(o.pn, {
                                                    delayDuration: 100,
                                                    children: (0, a.jsxs)(o.u, {
                                                        children: [(0, a.jsx)(o.aJ, {
                                                            className: "w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group",
                                                            children: (0, a.jsx)(l.rFR, {
                                                                className: "text-white text-3xl group-hover:text-accent"
                                                            })
                                                        }), (0, a.jsx)(o._v, {
                                                            children: (0, a.jsx)("p", {
                                                                children: "Github  repositoryt"
                                                            })
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-full xl:w-[50%]",
                                    children: (0, a.jsxs)(r.tq, {
                                        spaceBetween: 30,
                                        slidesPerView: 1,
                                        className: "xl:h-[520px] mb-12",
                                        onSlideChange: e => {
                                            t(p[e.activeIndex])
                                        },
                                        children: [p.map((e, t) => (0, a.jsx)(r.o5, {
                                            className: "w-full",
                                            children: (0, a.jsxs)("div", {
                                                className: "h-[460px] relative group flex justify-center items-center bg-pink-50/20",
                                                children: [(0, a.jsx)("div", {
                                                    className: "absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"
                                                }), (0, a.jsx)("div", {
                                                    className: "relative w-full h-full",
                                                    children: (0, a.jsx)(d.default, {
                                                        src: e.image,
                                                        fill: !0,
                                                        sizes: "(max-width: 1200px) 100vw, 33vw",
                                                        className: "object-cover",
                                                        alt: ""
                                                    })
                                                })]
                                            })
                                        }, t)), (0, a.jsx)(m, {})]
                                    })
                                })]
                            })
                        })]
                    })
                }
        },
        9666: function(e, t, i) {
            "use strict";
            i.d(t, {
                _v: function() {
                    return d
                },
                aJ: function() {
                    return c
                },
                pn: function() {
                    return l
                },
                u: function() {
                    return o
                }
            });
            var a = i(7437),
                n = i(2265),
                s = i(8748),
                r = i(7440);
            let l = s.zt,
                o = s.fC,
                c = s.xz,
                d = n.forwardRef((e, t) => {
                    let {
                        className: i,
                        sideOffset: n = 4,
                        ...l
                    } = e;
                    return (0, a.jsx)(s.VY, {
                        ref: t,
                        sideOffset: n,
                        className: (0, r.cn)("z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", i),
                        ...l
                    })
                });
            d.displayName = s.VY.displayName
        },
        7440: function(e, t, i) {
            "use strict";
            i.d(t, {
                cn: function() {
                    return s
                }
            });
            var a = i(4839),
                n = i(6164);

            function s() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return (0, n.m6)((0, a.W)(t))
            }
        }
    },
    function(e) {
        e.O(0, [342, 665, 779, 951, 504, 231, 648, 193, 210, 642, 971, 23, 744], function() {
            return e(e.s = 977)
        }), _N_E = e.O()
    }
]);