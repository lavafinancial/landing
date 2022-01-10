(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return s(3180)
            }])
        },
        3180: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function () {
                    return me
                },
                default: function () {
                    return xe
                }
            });
            var a = s(5893),
                n = s(9008),
                i = s(7294),
                r = s(5675),
                l = {
                    src: "/_next/static/media/magnet-logo.c852aa47.svg",
                    height: 22,
                    width: 151
                },
                o = s(7985);

            function c(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(s).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })))), a.forEach((function (t) {
                        c(e, t, s[t])
                    }))
                }
                return e
            }

            function h() {
                var e = document.getElementById("mobile-draw");
                e.style.width;
                e.classList.add("open"), document.getElementById("mobile-draw-mask").classList.add("open")
            }

            function u() {
                document.getElementById("mobile-draw").classList.remove("open"), document.getElementById("mobile-draw-mask").classList.remove("open")
            }
            var m = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    var t = (0, i.useState)(!1),
                        s = (t[0], t[1], (0, (0, o.$G)("header").t)("navigation", {
                            returnObjects: !0
                        }));
                    return (0, a.jsxs)("header", {
                        id: "header",
                        children: [(0, a.jsx)(x, {
                            props: s
                        }), (0, a.jsx)(v, {
                            props: s
                        })]
                    })
                },
                x = function (e) {
                    var t = e.props;
                    return (0, a.jsxs)("div", {
                        className: "header-mobile",
                        children: [(0, a.jsxs)("div", {
                            className: "header-mobile-bar",
                            children: [(0, a.jsx)("span", {
                                className: "header-mobile-open-button",
                                onClick: h,
                                children: "\u2630"
                            }), (0, a.jsx)(g, {}), (0, a.jsx)(j, {})]
                        }), (0, a.jsx)(p, {
                            props: t
                        })]
                    })
                },
                p = function (e) {
                    var t = e.props;
                    return (0, a.jsxs)("div", {
                        className: "flex-row",
                        children: [(0, a.jsx)("div", {
                            id: "mobile-draw-mask",
                            className: "header-menu-draw-mask",
                            onClick: function () {
                                return u()
                            }
                        }), (0, a.jsxs)("div", {
                            id: "mobile-draw",
                            onClick: function () {
                                return u()
                            },
                            className: "header-menu-draw",
                            children: [(0, a.jsx)(g, {}), (0, a.jsx)(f, {
                                props: t
                            }), (0, a.jsx)(b, {})]
                        })]
                    })
                },
                v = function (e) {
                    var t = e.props;
                    return (0, a.jsxs)("div", {
                        className: "header-desktop",
                        children: [(0, a.jsxs)("div", {
                            className: "col-left",
                            children: [(0, a.jsx)(g, {}), (0, a.jsx)(f, {
                                props: d({}, t)
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "col-right",
                            children: [(0, a.jsx)(b, {}), (0, a.jsx)(j, {})]
                        })]
                    })
                },
                j = function () {
                    return (0, a.jsx)("div", {
                        className: "launch-button-cont",
                        children: (0, a.jsx)("a", {
                            href: "https://app.magnetdao.finance",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "btn primary",
                            children: (0, a.jsx)("span", {
                                children: "Launch app"
                            })
                        })
                    })
                },
                g = function () {
                    return (0, a.jsx)("a", {
                        href: "#hero",
                        id: "logo-header",
                        className: "anchor",
                        children: (0, a.jsx)(r.default, {
                            src: l,
                            alt: "Magnet DAO Logo",
                            layout: "intrinsic"
                        })
                    })
                },
                f = function (e) {
                    var t = e.props;
                    return (0, a.jsx)("nav", {
                        children: (0, a.jsxs)("ul", {
                            children: [(0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                    onClick: u,
                                    href: "#overview",
                                    className: "anchor",
                                    children: (0, a.jsx)("span", {
                                        children: t.overview
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                    onClick: u,
                                    href: "#tokenomics",
                                    className: "anchor",
                                    children: (0, a.jsx)("span", {
                                        children: t.tokenomics
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                    onClick: u,
                                    href: "#roadmap",
                                    className: "anchor",
                                    children: (0, a.jsx)("span", {
                                        children: t.roadmap
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                    onClick: u,
                                    href: "#faq",
                                    className: "anchor",
                                    children: (0, a.jsx)("span", {
                                        children: t.faq
                                    })
                                })
                            }), (0, a.jsx)("li", {
                                children: (0, a.jsx)("a", {
                                    href: "https://docs.magnetdao.finance",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    title: "Docs",
                                    children: (0, a.jsx)("span", {
                                        children: t.docs
                                    })
                                })
                            })]
                        })
                    })
                },
                b = function () {
                    return (0, a.jsx)("nav", {
                        className: "socials",
                        children: (0, a.jsxs)("ul", {
                            children: [(0, a.jsx)(w, {}), (0, a.jsx)(y, {}), (0, a.jsx)(N, {}), (0, a.jsx)(A, {}), (0, a.jsx)(C, {})]
                        })
                    })
                },
                w = function () {
                    return (0, a.jsx)("li", {
                        children: (0, a.jsx)("a", {
                            href: "https://discord.gg/magnetdao",
                            target: "_blank",
                            rel: "noreferrer",
                            title: "Discord",
                            children: (0, a.jsx)("svg", {
                                width: "50",
                                height: "50",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M42.3272 9.10357C39.1404 7.64136 35.723 6.56401 32.1499 5.94693C32.0848 5.93501 32.0198 5.9648 31.9863 6.02427C31.5468 6.80601 31.0599 7.82573 30.719 8.6273C26.876 8.05191 23.0525 8.05191 19.2883 8.6273C18.9472 7.80796 18.4428 6.80601 18.0012 6.02427C17.9678 5.96675 17.9027 5.93696 17.8377 5.94693C14.2666 6.56196 10.8492 7.63931 7.66033 9.10357C7.63269 9.11548 7.60906 9.1353 7.59334 9.16108C1.1113 18.8452 -0.664477 28.2913 0.206617 37.6202C0.210523 37.6658 0.236206 37.7094 0.271656 37.7372C4.54832 40.8779 8.69109 42.7845 12.7568 44.0484C12.8219 44.0682 12.8908 44.0445 12.9322 43.9909C13.8939 42.6775 14.7512 41.2926 15.4863 39.8363C15.5297 39.751 15.4883 39.6499 15.3996 39.6161C14.0397 39.1002 12.7449 38.4712 11.4993 37.7571C11.4008 37.6996 11.3928 37.5586 11.4836 37.4912C11.7457 37.2948 12.0079 37.0904 12.2582 36.884C12.3035 36.8463 12.3666 36.8384 12.4198 36.8622C20.6026 40.5982 29.4615 40.5982 37.5477 36.8622C37.601 36.8364 37.664 36.8444 37.7113 36.882C37.9617 37.0883 38.2238 37.2947 38.4879 37.4911C38.5785 37.5585 38.5725 37.6995 38.4741 37.757C37.2285 38.4851 35.9337 39.1001 34.5719 39.614C34.4832 39.6477 34.4437 39.7509 34.4872 39.8362C35.2381 41.2905 36.0954 42.6753 37.0393 43.9888C37.0788 44.0444 37.1497 44.0682 37.2147 44.0483C41.3002 42.7845 45.4429 40.8778 49.7196 37.7371C49.7571 37.7093 49.7807 37.6676 49.7846 37.622C50.8272 26.8368 48.0385 17.4681 42.3921 9.16294C42.3784 9.1353 42.3548 9.11548 42.3272 9.10357ZM16.7085 31.9398C14.2449 31.9398 12.2149 29.6781 12.2149 26.9003C12.2149 24.1226 14.2054 21.8609 16.7085 21.8609C19.231 21.8609 21.2414 24.1425 21.2019 26.9003C21.2019 29.6781 19.2113 31.9398 16.7085 31.9398ZM33.3224 31.9398C30.859 31.9398 28.829 29.6781 28.829 26.9003C28.829 24.1226 30.8195 21.8609 33.3224 21.8609C35.8451 21.8609 37.8553 24.1425 37.816 26.9003C37.816 29.6781 35.8452 31.9398 33.3224 31.9398Z"
                                })
                            })
                        })
                    })
                },
                y = function () {
                    return (0, a.jsx)("li", {
                        children: (0, a.jsx)("a", {
                            href: "https://twitter.com/magnet_dao",
                            target: "_blank",
                            rel: "noreferrer",
                            title: "Twitter",
                            children: (0, a.jsx)("svg", {
                                width: "50",
                                height: "50",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M44.882 14.7996C44.912 15.2396 44.912 15.6816 44.912 16.1256C44.912 29.6815 34.592 45.3135 15.724 45.3135V45.3055C10.1498 45.3131 4.69131 43.7161 0 40.7056C0.810449 40.8026 1.62578 40.852 2.44199 40.8537C7.06211 40.8584 11.5494 39.3086 15.182 36.4537C10.7932 36.3713 6.94189 33.5086 5.59805 29.3297C7.13525 29.6258 8.71982 29.5655 10.2301 29.1537C5.44355 28.1868 2.00137 23.9808 2.0001 19.0977C2.0001 19.0537 2.0001 19.0097 2.0001 18.9677C3.42666 19.763 5.02353 20.2034 6.65615 20.2517C2.14795 17.2413 0.757226 11.2449 3.47998 6.55759C8.68896 12.9663 16.3738 16.8621 24.622 17.2757C23.7951 13.7132 24.9255 9.97966 27.5896 7.47419C31.7207 3.58913 38.2189 3.78864 42.1039 7.9197C44.4012 7.46667 46.6042 6.62458 48.6179 5.42966C47.8521 7.80515 46.2493 9.82165 44.1079 11.1037C46.1416 10.8633 48.1276 10.3193 49.9999 9.48972C48.6228 11.5494 46.8896 13.3474 44.882 14.7996Z"
                                })
                            })
                        })
                    })
                },
                N = function () {
                    return (0, a.jsx)("li", {
                        children: (0, a.jsx)("a", {
                            href: "https://github.com/MagnetDao",
                            title: "Github",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, a.jsxs)("svg", {
                                width: "50",
                                height: "50",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, a.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M25 .618c-13.805 0-25 11.192-25 25C0 36.663 7.163 46.034 17.097 49.34c1.249.231 1.708-.542 1.708-1.203 0-.596-.023-2.565-.034-4.654-6.955 1.512-8.423-2.95-8.423-2.95-1.137-2.89-2.776-3.658-2.776-3.658-2.268-1.552.171-1.52.171-1.52 2.51.177 3.833 2.577 3.833 2.577 2.23 3.822 5.848 2.717 7.275 2.078.224-1.616.872-2.719 1.587-3.343-5.553-.632-11.39-2.776-11.39-12.355 0-2.73.976-4.96 2.576-6.71-.26-.63-1.116-3.173.242-6.617 0 0 2.1-.671 6.877 2.563 1.994-.554 4.133-.832 6.257-.841 2.125.01 4.265.287 6.263.841 4.772-3.234 6.868-2.563 6.868-2.563 1.36 3.444.505 5.987.245 6.617 1.603 1.75 2.573 3.98 2.573 6.71 0 9.602-5.848 11.716-11.415 12.335.896.776 1.695 2.297 1.695 4.63 0 3.345-.028 6.037-.028 6.86 0 .666.45 1.445 1.717 1.2C42.846 46.027 50 36.66 50 25.617c0-13.807-11.193-25-25-25Z"
                                }), (0, a.jsx)("path", {
                                    d: "M9.469 36.512c-.055.125-.25.162-.429.077-.181-.082-.283-.252-.224-.376.054-.128.25-.163.43-.078.182.082.286.253.223.377ZM10.482 37.642c-.12.11-.353.059-.51-.116-.165-.174-.195-.407-.074-.52.123-.11.349-.058.513.116.163.177.195.408.07.52ZM11.467 39.081c-.153.107-.404.007-.558-.215-.154-.223-.154-.49.003-.596.155-.107.402-.01.56.21.152.226.152.492-.005.601ZM12.818 40.473c-.137.15-.43.11-.643-.096-.219-.202-.28-.488-.142-.639.14-.151.433-.109.648.096.217.201.283.49.137.639ZM14.68 41.28c-.06.196-.34.285-.624.202-.283-.086-.468-.315-.41-.513.058-.197.34-.29.626-.2.282.085.467.312.409.512ZM16.727 41.43c.006.206-.234.377-.531.38-.299.007-.54-.16-.544-.363 0-.208.235-.377.534-.382.297-.006.54.16.54.365ZM18.63 41.106c.036.201-.17.408-.466.463-.29.053-.558-.071-.596-.27-.036-.207.175-.413.465-.467.295-.051.56.07.598.274Z"
                                })]
                            })
                        })
                    })
                },
                A = function () {
                    return (0, a.jsx)("li", {
                        children: (0, a.jsx)("a", {
                            href: "https://t.me/MagnetDAO",
                            title: "Telegram",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, a.jsx)("svg", {
                                width: "50",
                                height: "50",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M25 0C11.1934 0 0 11.1934 0 25C0 38.8066 11.1934 50 25 50C38.8066 50 50 38.8066 50 25C50 11.1934 38.8066 0 25 0ZM36.5879 17.002C36.2119 20.9551 34.584 30.5479 33.7559 34.9756C33.4053 36.8496 32.7148 37.4775 32.0469 37.5391C30.5957 37.6729 29.4932 36.5791 28.0869 35.6572C25.8867 34.2148 24.6436 33.3174 22.5078 31.9102C20.0391 30.2832 21.6396 29.3896 23.0459 27.9287C23.4141 27.5459 29.8105 21.7275 29.9346 21.2002C29.9502 21.1338 29.9648 20.8877 29.8184 20.7578C29.6719 20.6279 29.4561 20.6729 29.3008 20.708C29.0801 20.7578 25.5645 23.0811 18.7559 27.6777C17.7578 28.3633 16.8545 28.6963 16.0439 28.6797C15.1514 28.6602 13.4346 28.1748 12.1582 27.7598C10.5928 27.251 9.34863 26.9814 9.45703 26.1172C9.51269 25.667 10.1328 25.207 11.3164 24.7363C18.6045 21.5605 23.4639 19.4678 25.8955 18.4561C32.8388 15.5685 34.2813 15.0664 35.2216 15.0498C36.3995 15.029 36.6838 16.0013 36.5879 17.002Z"
                                })
                            })
                        })
                    })
                },
                C = function () {
                    return (0, a.jsx)("li", {
                        children: (0, a.jsx)("a", {
                            href: "https://magnetdao.medium.com/",
                            rel: "noreferrer",
                            target: "_blank",
                            title: "Medium",
                            children: (0, a.jsxs)("svg", {
                                width: "50",
                                height: "50",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, a.jsx)("path", {
                                    d: "M28.2027 24.9999C28.2027 32.8413 21.8894 39.1981 14.1014 39.1981C6.31338 39.1981 0 32.8413 0 24.9999C0 17.1585 6.31338 10.8018 14.1014 10.8018C21.8893 10.8018 28.2027 17.1585 28.2027 24.9999Z"
                                }), (0, a.jsx)("path", {
                                    d: "M43.6722 25.0003C43.6722 32.3816 40.5154 38.3653 36.6215 38.3653C32.7275 38.3653 29.5708 32.3816 29.5708 25.0003C29.5708 17.6189 32.7275 11.6353 36.6215 11.6353C40.5155 11.6353 43.6722 17.6189 43.6722 25.0003Z"
                                }), (0, a.jsx)("path", {
                                    d: "M50 24.9999C50 31.6133 48.8897 36.9744 47.5202 36.9744C46.1506 36.9744 45.0405 31.6133 45.0405 24.9999C45.0405 18.3865 46.1506 13.0254 47.5202 13.0254C48.8897 13.0254 50 18.3865 50 24.9999Z"
                                })]
                            })
                        })
                    })
                },
                k = {
                    src: "/_next/static/media/radar.ef2aa085.png",
                    height: 1400,
                    width: 1e3,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAElBMVEWtsrytsryssrytsrxMaXGtsrwBhYA7AAAABnRSTlMaKw8+AGE22bF7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJ0lEQVQImR3JuQkAMBDEQO3Xf8vmrGhA4LaEK5FEhow2GZS/fLTbBwdFAEwUHTovAAAAAElFTkSuQmCC"
                };

            function M(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var s = [],
                        a = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var r, l = e[Symbol.iterator](); !(a = (r = l.next()).done) && (s.push(r.value), !t || s.length !== t); a = !0);
                    } catch (o) {
                        n = !0, i = o
                    } finally {
                        try {
                            a || null == l.return || l.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                    return s
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function q(e) {
                var t = e.root,
                    s = void 0 === t ? null : t,
                    a = e.rootMargin,
                    n = void 0 === a ? "0px" : a,
                    r = e.threshold,
                    l = void 0 === r ? Array.from(Array(100).keys(), (function (e) {
                        return e / 100
                    })) : r,
                    o = (0, i.useState)(),
                    c = o[0],
                    d = o[1],
                    h = (0, i.useState)(null),
                    u = h[0],
                    m = h[1],
                    x = ((0, i.useRef)(), (0, i.useState)(0)),
                    p = (x[0], x[1], (0, i.useRef)(1));
                return (0, i.useEffect)((function () {
                    var e = new window.IntersectionObserver((function (e) {
                        var t = M(e, 1)[0];
                        if (t.isIntersecting) {
                            var s = t.target,
                                a = window.pageYOffset + s.getBoundingClientRect().top,
                                n = s.offsetHeight,
                                i = document.documentElement.scrollTop;
                            i > a && (p.current = 1 - (i - a) / n)
                        }
                        d(t)
                    }), {
                        root: s,
                        rootMargin: n,
                        threshold: l
                    });
                    return e.disconnect(), u && e.observe(u),
                        function () {
                            return e.disconnect()
                        }
                }), [u]), {
                    setNode: m,
                    entry: c,
                    merp: p
                }
            }
            var O = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    var t = q({}),
                        s = t.setNode,
                        n = (t.entry, t.merp),
                        i = (0, o.$G)("hero").t,
                        r = i("caption", {
                            returnObjects: !0
                        }),
                        l = i("metrics", {
                            returnObjects: !0
                        });
                    return (0, a.jsxs)("section", {
                        ref: s,
                        id: "hero",
                        children: [(0, a.jsx)(G, {
                            props: r
                        }), (0, a.jsx)(D, {}), (0, a.jsx)(T, {
                            metrics: l,
                            ratio: n,
                            factor: 50
                        }), (0, a.jsx)("div", {
                            className: "crosshair"
                        })]
                    })
                },
                G = function (e) {
                    var t = e.props;
                    return (0, a.jsx)("div", {
                        className: "wrapper",
                        children: (0, a.jsxs)("div", {
                            className: "caption",
                            children: [(0, a.jsxs)("h1", {
                                children: [(0, a.jsx)("div", {
                                    className: "line1",
                                    children: t.line1
                                }), (0, a.jsx)("div", {
                                    className: "line2",
                                    children: t.line2
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "intro",
                                children: [t.intro1, (0, a.jsx)("strong", {
                                    children: t.intro2
                                }), ", ", (0, a.jsx)("strong", {
                                    children: t.intro3
                                }), ", ", t.intro4, (0, a.jsx)("strong", {
                                    children: t.intro5
                                }), t.intro6]
                            }), (0, a.jsxs)("div", {
                                className: "btn-group",
                                children: [(0, a.jsx)("a", {
                                    href: "#overview",
                                    className: "btn btn-primary anchor",
                                    children: (0, a.jsx)("span", {
                                        children: t.but1
                                    })
                                }), (0, a.jsx)("a", {
                                    href: "https://discord.gg/magnetdao",
                                    className: "btn btn-secondary",
                                    children: (0, a.jsx)("span", {
                                        children: t.but2
                                    })
                                })]
                            })]
                        })
                    })
                },
                D = function (e) {
                    return (0, a.jsx)("div", {
                        className: "radar",
                        children: (0, a.jsx)(r.default, {
                            src: k,
                            alt: "Radar background image"
                        })
                    })
                },
                T = function (e) {
                    var t = e.metrics;
                    e.ratio, e.factor;
                    return (0, a.jsxs)("div", {
                        className: "metrics",
                        children: [(0, a.jsx)("div", {
                            style: {
                                width: "1px",
                                height: "100vh",
                                top: "-200%",
                                position: "absolute"
                            },
                            children: "f"
                        }), (0, a.jsxs)("div", {
                            className: "flex-row",
                            children: [(0, a.jsx)($, {
                                item: t.cAPY,
                                valClass: "percentage",
                                xClass: "primary"
                            }), (0, a.jsx)($, {
                                item: t.tBal,
                                valClass: "monetary",
                                xClass: ""
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex-row",
                            children: [(0, a.jsx)($, {
                                item: t.mCap,
                                valClass: "monetary",
                                xClass: ""
                            }), (0, a.jsx)($, {
                                item: t.tvl,
                                valClass: "monetary",
                                xClass: ""
                            })]
                        })]
                    })
                },
                $ = function (e) {
                    var t = e.item,
                        s = e.valClass,
                        n = e.xClass;
                    return (0, a.jsxs)("div", {
                        className: "metrics-item " + n,
                        children: [(0, a.jsx)("div", {
                            className: "label",
                            children: t.label
                        }), (0, a.jsx)("div", {
                            className: "value " + s,
                            children: (0, a.jsx)("span", {
                                children: t.value
                            })
                        })]
                    })
                },
                I = {
                    src: "/_next/static/media/satellite.8b2ec613.png",
                    height: 1450,
                    width: 1800,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAACVBMVEVMaXH////////OZTV/AAAAA3RSTlMADBvcpkI+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAFUlEQVQImWNgwASMjFCaiQnBQpEDAAFhABBFlJN1AAAAAElFTkSuQmCC"
                };
            var E = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    var t = (0, o.$G)("overview").t,
                        s = t("title"),
                        n = t("bold1"),
                        i = t("text1"),
                        r = t("text2"),
                        l = t("text3"),
                        c = t("text4"),
                        d = t("text5"),
                        h = t("text6"),
                        u = t("text7"),
                        m = t("text8"),
                        x = t("text9"),
                        p = t("link");
                    return (0, a.jsxs)("section", {
                        id: "overview",
                        children: [(0, a.jsx)(_, {}), (0, a.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, a.jsxs)("div", {
                                className: "outline-title left",
                                children: [(0, a.jsx)("span", {
                                    className: "outline",
                                    children: s
                                }), (0, a.jsx)("h2", {
                                    children: s
                                })]
                            }), (0, a.jsx)(B, {
                                props: {
                                    bold1: n,
                                    text1: i,
                                    text2: r,
                                    text3: l,
                                    text4: c,
                                    text5: d,
                                    text6: h,
                                    text7: u,
                                    text8: m,
                                    text9: x,
                                    link: p
                                }
                            })]
                        }), (0, a.jsx)("div", {
                            className: "angle"
                        })]
                    })
                },
                _ = function () {
                    return (0, a.jsx)("div", {
                        className: "satellite",
                        children: (0, a.jsx)(r.default, {
                            src: I,
                            alt: "Satellite background image",
                            layout: "intrinsic"
                        })
                    })
                },
                B = function (e) {
                    var t = e.props;
                    return (0, a.jsxs)("div", {
                        className: "contents",
                        children: [(0, a.jsx)("p", {
                            className: "big",
                            children: t.bold1
                        }), (0, a.jsxs)("p", {
                            children: [t.text2, (0, a.jsx)("strong", {
                                children: t.text3
                            }), t.text4]
                        }), (0, a.jsx)("p", {
                            children: t.text5
                        }), (0, a.jsxs)("p", {
                            children: [t.text6, (0, a.jsx)("strong", {
                                children: t.text7
                            }), t.text8, (0, a.jsx)("a", {
                                href: t.link,
                                target: "_blank",
                                rel: "noreferrer",
                                title: "Go to our blog",
                                children: t.text9
                            }), "."]
                        })]
                    })
                },
                L = {
                    src: "/_next/static/media/mag-token.09e88c29.svg",
                    height: 75,
                    width: 75
                },
                P = {
                    src: "/_next/static/media/avax-token.219ee70b.svg",
                    height: 75,
                    width: 75
                };
            var S = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    var t = (0, o.$G)("token").t,
                        s = t("text1"),
                        n = t("text2"),
                        i = t("items", {
                            returnObjects: !0
                        });
                    return (0, a.jsx)("section", {
                        onLoad: function () {
                            var e = document.querySelectorAll(".token-icons > span"),
                                t = document.querySelectorAll(".token-icons > span > img");
                            e.forEach((function (e) {
                                return e.style.overflow = ""
                            })), t.forEach((function (e) {
                                return e.style.inset = ""
                            }))
                        },
                        id: "token",
                        children: (0, a.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, a.jsx)("div", {
                                className: "tokeninfo",
                                children: (0, a.jsxs)("div", {
                                    className: "items-background",
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex-row",
                                        children: [(0, a.jsx)(W, {
                                            label: i.name.label,
                                            value: i.name.text
                                        }), (0, a.jsx)(W, {
                                            label: i.symbol.label,
                                            value: i.symbol.text
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "flex-row",
                                        children: [(0, a.jsx)(W, {
                                            label: i.totalSupply.label,
                                            value: i.totalSupply.text
                                        }), (0, a.jsx)(W, {
                                            label: i.chain.label,
                                            value: i.chain.text
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "flex-row",
                                        children: (0, a.jsx)(W, {
                                            label: i.contract.label,
                                            value: i.contract.text
                                        })
                                    })]
                                })
                            }), (0, a.jsx)(Q, {
                                text1: s,
                                text2: n
                            })]
                        })
                    })
                },
                Q = function (e) {
                    var t = e.text1,
                        s = e.text2;
                    return (0, a.jsxs)("div", {
                        className: "contents",
                        children: [(0, a.jsx)("p", {
                            className: "big",
                            children: t
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                className: "tokens",
                                children: [(0, a.jsxs)("div", {
                                    className: "token-icons",
                                    children: [(0, a.jsx)(r.default, {
                                        src: L,
                                        alt: "MAG token icon",
                                        className: "mag",
                                        layout: "intrinsic",
                                        height: 75,
                                        width: 75
                                    }), (0, a.jsx)(r.default, {
                                        src: P,
                                        alt: "AVAX token icon",
                                        className: "avax",
                                        layout: "intrinsic",
                                        height: 75,
                                        width: 75
                                    })]
                                }), (0, a.jsx)("p", {
                                    children: s
                                })]
                            })
                        })]
                    })
                },
                W = function (e) {
                    var t = e.label,
                        s = e.value;
                    return (0, a.jsxs)("div", {
                        className: "tokeninfo-item",
                        children: [(0, a.jsx)("div", {
                            className: "label",
                            children: t
                        }), (0, a.jsx)("div", {
                            className: "value",
                            children: s
                        })]
                    })
                },
                F = {
                    src: "/_next/static/media/tokenomics-pie-chart.2118073a.svg",
                    height: 579,
                    width: 516
                };

            function R(e) {
                throw e
            }
            var Z = function (e) {
                    e = null !== e ? e : R(new TypeError("Cannot destructure undefined"));
                    var t = (0, o.$G)("tokenomics").t,
                        s = t("title"),
                        n = t("totalSupply", {
                            returnObjects: !0
                        }),
                        i = t("distribution", {
                            returnObjects: !0
                        });
                    return (0, a.jsxs)("section", {
                        id: "tokenomics",
                        children: [(0, a.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, a.jsx)(Y, {
                                title: s
                            }), (0, a.jsx)(X, {
                                totalSupply: n,
                                distribution: i
                            }), (0, a.jsx)(V, {})]
                        }), (0, a.jsx)("div", {
                            className: "crosshair"
                        })]
                    })
                },
                Y = function (e) {
                    var t = e.title;
                    return (0, a.jsxs)("div", {
                        className: "outline-title left",
                        children: [(0, a.jsx)("span", {
                            className: "outline",
                            children: t
                        }), (0, a.jsx)("h2", {
                            children: t
                        })]
                    })
                },
                V = function (e) {
                    e = null !== e ? e : R(new TypeError("Cannot destructure undefined"));
                    return (0, a.jsx)("div", {
                        className: "col-right",
                        children: (0, a.jsx)(r.default, {
                            src: F,
                            alt: "Pie chart of the tokenomics"
                        })
                    })
                },
                X = function (e) {
                    var t = e.totalSupply,
                        s = e.distribution;
                    return (0, a.jsxs)("div", {
                        className: "col-left",
                        children: [(0, a.jsx)("h3", {
                            children: t.title
                        }), (0, a.jsx)("p", {
                            children: t.text1
                        }), (0, a.jsx)("h3", {
                            children: s.title
                        }), (0, a.jsx)("p", {
                            children: s.text1
                        }), (0, a.jsxs)("p", {
                            children: [s.text2, (0, a.jsx)("a", {
                                href: s.link,
                                children: s.text3
                            }), s.text4]
                        })]
                    })
                };
            var J = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    var t = (0, o.$G)("roadmap").t;
                    t("timeline", {
                        returnObjects: !0
                    }), t("title");
                    return (0, a.jsxs)("section", {
                        id: "roadmap",
                        children: [(0, a.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, a.jsxs)("div", {
                                className: "outline-title left",
                                children: [(0, a.jsx)("span", {
                                    className: "outline",
                                    children: "Roadmap"
                                }), (0, a.jsx)("h2", {
                                    children: "Roadmap"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "timeline",
                                children: [(0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q4 2021"
                                            }), (0, a.jsx)("p", {
                                                children: " Discord, Twitter, and Telegram Launch"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q4 2021"
                                            }), (0, a.jsx)("p", {
                                                children: " Team build out"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q4 2021"
                                            }), (0, a.jsx)("p", {
                                                children: " Form partnerships in the Avalanche ecosystem"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q4 2021"
                                            }), (0, a.jsxs)("p", {
                                                children: [" ", "Complete AMAs with prospective projects for incubation fund"]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q4 2021"
                                            }), (0, a.jsx)("p", {
                                                children: "$MAG Community Offering"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q4 2021"
                                            }), (0, a.jsx)("p", {
                                                children: "$MAG Public Sale"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q4 2021"
                                            }), (0, a.jsx)("p", {
                                                children: "Engage Paladin to audit all protocol smart contracts"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step checked",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q1 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Launch MAG protocol and liquidity"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q1 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "CoinGecko and CoinMarketCap Listings"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q1 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "DAO proposals for Magnet DAO begin - tokenomics, treasury management, innovation fund deployment, etc."
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q1 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Receive preliminary audit results from Paladin"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q1 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Propose various upgrades for the protocol - such as variable-rate ROI for bonding based on length of vesting, adding bonus rewards for diamond hands stakers, \u201czapping\u201d liquidity for easier bonding"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q1 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Investment Thesis Call with DAO for Development and Incubation Strategy Outline"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q2 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Begin developing, incubating, and funding new protocols using the Innovation Fund"
                                            }), (0, a.jsx)("p", {
                                                children: "Direction of where to deploy funds will be governed by the DAO"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q2 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Begin development of native DAO tooling platform"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q2 2022"
                                            }), (0, a.jsxs)("p", {
                                                children: [" ", "Begin development or incubate a novel, liquid-staking solution for stablecoins, native to AVAX"]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q2 2022"
                                            }), (0, a.jsxs)("p", {
                                                children: [" ", "Magnet DAO begins to incubate and invest in projects, helping early-stage crypto projects with building their protocols and providing funding from the innovation fund in return for tokens, which Magnet DAO treasury will receive and hold"]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q3 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Integrate native DAO tooling to make management seamless and integrated"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q3 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "Promote key contributors to leadership positions in the DAO"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q3 2022"
                                            }), (0, a.jsx)("p", {
                                                children: "License our DAO tooling to other DAO\u2019s looking for a management system"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "step",
                                    children: (0, a.jsxs)("div", {
                                        className: "wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "pointer",
                                            children: [(0, a.jsx)("div", {
                                                className: "bubble"
                                            }), (0, a.jsx)("div", {
                                                className: "line"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "content",
                                            children: [(0, a.jsx)("span", {
                                                children: "Q3 2022 and Beyond"
                                            }), (0, a.jsx)("p", {
                                                children: "Continue to develop, incubate, and fund new protocols and get the DAO involved as much as possible in new initiatives"
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "angle"
                        })]
                    })
                },
                U = {
                    src: "/_next/static/media/magnet-logo-community.347608cb.svg",
                    height: 72,
                    width: 326
                };
            var z = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    return (0, a.jsx)("section", {
                        id: "community",
                        children: (0, a.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, a.jsx)("div", {
                                className: "col-left",
                                children: (0, a.jsxs)("div", {
                                    className: "join",
                                    children: [(0, a.jsx)("div", {
                                        className: "line1",
                                        children: "Join the"
                                    }), (0, a.jsx)(r.default, {
                                        src: U,
                                        alt: "magnet",
                                        title: "Magnet logo",
                                        className: "line2"
                                    }), (0, a.jsx)("div", {
                                        className: "line3",
                                        children: "community"
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "col-right",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex-row",
                                    children: [(0, a.jsxs)("a", {
                                        href: "https://discord.gg/magnetdao",
                                        className: "community-item",
                                        children: [(0, a.jsx)("div", {
                                            className: "network",
                                            children: (0, a.jsx)("svg", {
                                                width: "50",
                                                height: "50",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0, a.jsx)("path", {
                                                    d: "M42.3272 9.10357C39.1404 7.64136 35.723 6.56401 32.1499 5.94693C32.0848 5.93501 32.0198 5.9648 31.9863 6.02427C31.5468 6.80601 31.0599 7.82573 30.719 8.6273C26.876 8.05191 23.0525 8.05191 19.2883 8.6273C18.9472 7.80796 18.4428 6.80601 18.0012 6.02427C17.9678 5.96675 17.9027 5.93696 17.8377 5.94693C14.2666 6.56196 10.8492 7.63931 7.66033 9.10357C7.63269 9.11548 7.60906 9.1353 7.59334 9.16108C1.1113 18.8452 -0.664477 28.2913 0.206617 37.6202C0.210523 37.6658 0.236206 37.7094 0.271656 37.7372C4.54832 40.8779 8.69109 42.7845 12.7568 44.0484C12.8219 44.0682 12.8908 44.0445 12.9322 43.9909C13.8939 42.6775 14.7512 41.2926 15.4863 39.8363C15.5297 39.751 15.4883 39.6499 15.3996 39.6161C14.0397 39.1002 12.7449 38.4712 11.4993 37.7571C11.4008 37.6996 11.3928 37.5586 11.4836 37.4912C11.7457 37.2948 12.0079 37.0904 12.2582 36.884C12.3035 36.8463 12.3666 36.8384 12.4198 36.8622C20.6026 40.5982 29.4615 40.5982 37.5477 36.8622C37.601 36.8364 37.664 36.8444 37.7113 36.882C37.9617 37.0883 38.2238 37.2947 38.4879 37.4911C38.5785 37.5585 38.5725 37.6995 38.4741 37.757C37.2285 38.4851 35.9337 39.1001 34.5719 39.614C34.4832 39.6477 34.4437 39.7509 34.4872 39.8362C35.2381 41.2905 36.0954 42.6753 37.0393 43.9888C37.0788 44.0444 37.1497 44.0682 37.2147 44.0483C41.3002 42.7845 45.4429 40.8778 49.7196 37.7371C49.7571 37.7093 49.7807 37.6676 49.7846 37.622C50.8272 26.8368 48.0385 17.4681 42.3921 9.16294C42.3784 9.1353 42.3548 9.11548 42.3272 9.10357ZM16.7085 31.9398C14.2449 31.9398 12.2149 29.6781 12.2149 26.9003C12.2149 24.1226 14.2054 21.8609 16.7085 21.8609C19.231 21.8609 21.2414 24.1425 21.2019 26.9003C21.2019 29.6781 19.2113 31.9398 16.7085 31.9398ZM33.3224 31.9398C30.859 31.9398 28.829 29.6781 28.829 26.9003C28.829 24.1226 30.8195 21.8609 33.3224 21.8609C35.8451 21.8609 37.8553 24.1425 37.816 26.9003C37.816 29.6781 35.8452 31.9398 33.3224 31.9398Z"
                                                })
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "label",
                                            children: "Discord"
                                        }), (0, a.jsx)("div", {
                                            className: "description",
                                            children: (0, a.jsx)("p", {
                                                children: "Meet the Magnet DAO community and get answers to any questions you have."
                                            })
                                        })]
                                    }), (0, a.jsxs)("a", {
                                        href: "https://t.me/MagnetDAO",
                                        className: "community-item",
                                        children: [(0, a.jsx)("div", {
                                            className: "network",
                                            children: (0, a.jsx)("svg", {
                                                width: "50",
                                                height: "50",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0, a.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M25 0C11.1934 0 0 11.1934 0 25C0 38.8066 11.1934 50 25 50C38.8066 50 50 38.8066 50 25C50 11.1934 38.8066 0 25 0ZM36.5879 17.002C36.2119 20.9551 34.584 30.5479 33.7559 34.9756C33.4053 36.8496 32.7148 37.4775 32.0469 37.5391C30.5957 37.6729 29.4932 36.5791 28.0869 35.6572C25.8867 34.2148 24.6436 33.3174 22.5078 31.9102C20.0391 30.2832 21.6396 29.3896 23.0459 27.9287C23.4141 27.5459 29.8105 21.7275 29.9346 21.2002C29.9502 21.1338 29.9648 20.8877 29.8184 20.7578C29.6719 20.6279 29.4561 20.6729 29.3008 20.708C29.0801 20.7578 25.5645 23.0811 18.7559 27.6777C17.7578 28.3633 16.8545 28.6963 16.0439 28.6797C15.1514 28.6602 13.4346 28.1748 12.1582 27.7598C10.5928 27.251 9.34863 26.9814 9.45703 26.1172C9.51269 25.667 10.1328 25.207 11.3164 24.7363C18.6045 21.5605 23.4639 19.4678 25.8955 18.4561C32.8388 15.5685 34.2813 15.0664 35.2216 15.0498C36.3995 15.029 36.6838 16.0013 36.5879 17.002Z"
                                                })
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "label",
                                            children: "Telegram"
                                        }), (0, a.jsx)("div", {
                                            className: "description",
                                            children: (0, a.jsx)("p", {
                                                children: "Join the discussion and receive official announcements and updates."
                                            })
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex-row",
                                    children: [(0, a.jsxs)("a", {
                                        href: "https://twitter.com/magnet_dao",
                                        className: "community-item",
                                        children: [(0, a.jsx)("div", {
                                            className: "network",
                                            children: (0, a.jsx)("svg", {
                                                width: "50",
                                                height: "50",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0, a.jsx)("path", {
                                                    d: "M44.882 14.7996C44.912 15.2396 44.912 15.6816 44.912 16.1256C44.912 29.6815 34.592 45.3135 15.724 45.3135V45.3055C10.1498 45.3131 4.69131 43.7161 0 40.7056C0.810449 40.8026 1.62578 40.852 2.44199 40.8537C7.06211 40.8584 11.5494 39.3086 15.182 36.4537C10.7932 36.3713 6.94189 33.5086 5.59805 29.3297C7.13525 29.6258 8.71982 29.5655 10.2301 29.1537C5.44355 28.1868 2.00137 23.9808 2.0001 19.0977C2.0001 19.0537 2.0001 19.0097 2.0001 18.9677C3.42666 19.763 5.02353 20.2034 6.65615 20.2517C2.14795 17.2413 0.757226 11.2449 3.47998 6.55759C8.68896 12.9663 16.3738 16.8621 24.622 17.2757C23.7951 13.7132 24.9255 9.97966 27.5896 7.47419C31.7207 3.58913 38.2189 3.78864 42.1039 7.9197C44.4012 7.46667 46.6042 6.62458 48.6179 5.42966C47.8521 7.80515 46.2493 9.82165 44.1079 11.1037C46.1416 10.8633 48.1276 10.3193 49.9999 9.48972C48.6228 11.5494 46.8896 13.3474 44.882 14.7996Z"
                                                })
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "label",
                                            children: "Twitter"
                                        }), (0, a.jsx)("div", {
                                            className: "description",
                                            children: (0, a.jsx)("p", {
                                                children: "Engage with us on Twitter and stay up to date with our latest announcements and media."
                                            })
                                        })]
                                    }), (0, a.jsxs)("a", {
                                        href: "https://magnetdao.medium.com",
                                        className: "community-item",
                                        children: [(0, a.jsx)("div", {
                                            className: "network",
                                            children: (0, a.jsxs)("svg", {
                                                width: "50",
                                                height: "50",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, a.jsx)("path", {
                                                    d: "M28.2027 24.9999C28.2027 32.8413 21.8894 39.1981 14.1014 39.1981C6.31338 39.1981 0 32.8413 0 24.9999C0 17.1585 6.31338 10.8018 14.1014 10.8018C21.8893 10.8018 28.2027 17.1585 28.2027 24.9999Z"
                                                }), (0, a.jsx)("path", {
                                                    d: "M43.6722 25.0003C43.6722 32.3816 40.5154 38.3653 36.6215 38.3653C32.7275 38.3653 29.5708 32.3816 29.5708 25.0003C29.5708 17.6189 32.7275 11.6353 36.6215 11.6353C40.5155 11.6353 43.6722 17.6189 43.6722 25.0003Z"
                                                }), (0, a.jsx)("path", {
                                                    d: "M50 24.9999C50 31.6133 48.8897 36.9744 47.5202 36.9744C46.1506 36.9744 45.0405 31.6133 45.0405 24.9999C45.0405 18.3865 46.1506 13.0254 47.5202 13.0254C48.8897 13.0254 50 18.3865 50 24.9999Z"
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "label",
                                            children: "Medium"
                                        }), (0, a.jsx)("div", {
                                            className: "description",
                                            children: (0, a.jsx)("p", {
                                                children: "In-depth articles where you can learn more about our vision and what the community is building."
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                H = s(7893),
                K = s.n(H),
                ee = s(9723),
                te = (s(4274), JSON.parse('{"eL":{"T":"Magnet DAO - Specific FAQ","X":{"q1":{"q":"Are you forking OHM?","a":{"text1":"Yes, we are forking OHM; however; we are implementing a unique strategy for the treasury. We want our protocol controlled value \u201cPCV\u201d to have more depth than simply representing a floor price / treasury for our token. OHM created something incredible with PCV, and we want to take it to the next level."}},"q2":{"q":"What is the Innovation Fund and how will it work?","a":{"text1":"10% of bonded assets will be directed to an Innovation Fund which will be used to incubate and invest in new, disruptive projects. Magnet DAO will be highly involved, helping ideate projects and helping founders build their projects from the earliest stages. The Innovation Fund will also be used to invest projects that are further along but have yet to launch their token, giving token holders early exposure to projects they otherwise wouldn\u2019t be able to invest in.","text2":"Our network effect, community engagement, and synergies will allow us to build and scale projects quickly and efficiently; while providing investors with an unparalleled opportunity to invest in early-stage crypto projects."}},"q3":{"q":"What do you think the vetting process of these start up projects will look like?","a":{"text1":"The core team & DAO leadership will actively perform due diligence on the projects. We have a robust team, including those with early-stage investing experience, marketing, product management, design and engineering. This will all go into vetting the projects that we consider investing in. Additionally, any use of funds we make from the treasury will be voted on by the DAO (token holders). DAO leadership will present their findings to the rest of the DAO and then hold a vote."}},"q4":{"q":"What measures are you considering to use for mitigating risk when choosing projects to use the Innovation Fund?","a":{"text1":"The projects we invest in will likely be later stage, closer to their launch, so those inherently are less risky and we will be able to see community, traction, and product.","text2":"For earlier projects that are less proven, we plan on having a very active relationship with those teams, helping them incubate and grow. We even envision ourselves having developers reach out to us telling us that they want to build something, and us providing them with an idea and infrastructure to start. Our team comes from a variety of backgrounds, including crypto venture capital investing, blockchain development, product management, and marketing. Additionally, the DAO will vote and ultimately be the arbiter of any decision made by the Innovation Fund."}},"q5":{"q":"What can you do to assure the community that this is not a rugpull?","a":{"text1":"The code will be open source and we have a number of community members who will be peer auditing it. We will also get multiple, tier 1 third-party audits for our token contract and our smart contracts prior to launching the protocol. All of our contracts and wallets will be multi-sig, with signatories consisting of core team members, third-party advisors (advisors TBD), and DAO leadership. Liquidity providing will also be locked, and team tokens locked and vested - we will post both contracts so the community can view these easily."}},"q7":{"q":"What chain are you launching on?","a":{"text1":"Avalanche."}},"q8":{"q":"What are the networks you first had in mind when branching out?","a":{"text1":"At first, the focus will likely be around AVAX projects. We are extremely bullish on AVAX and its ecosystem and have gotten some incredible support / partnerships, so naturally we will be very active there. Mid/long-term, we definitely plan on getting involved with other chains."}},"q9":{"q":"What are you doing to innovate?","a":{"text1":"We have a lot of ideas for how we can add value to the protocol. A few protocol design ideas we have discussed:","text2":"- Implement vesting schedules for bonds, where the user can receive a higher ROI if they opt to vest their tokens over a longer period of time (rather than 5 day standard)","text3":"- Implement a diamond hands bonus for staking, to incentivize (\ud83e\uddf2,\ud83e\uddf2)","text4":"- Add \u201czapping\u201d liquidity to our protocol for ease of bonding LP pairs","text5":"- Generate yield on our stablecoins. Given the amount of stablecoins we will have in our treasury, we will certainly be exploring how we can best generate return on these assets","text6":"- Develop protocols under the Magnet DAO name. We already have various ideas for projects we want to develop, all of which are synergistic to our primary protocol"}}}},"JF":{"Xl":{"q1":{"q":"Why do we need MagnetDAO in the first place?","a":{"text1":"Being less volatile than tokens like Bitcoin and Ether, dollar-pegged stablecoins have become an important aspect of the crypto world. Users are comfortable transacting with stablecoins because they know they will have the same purchasing power today as they will tomorrow. This, however, is a fallacy. The US government and the Federal Reserve are in charge of the currency. This means that if the dollar falls in value, so will these stablecoins. MagnetDAO intends to address this by developing $MAG, a free-floating reserve money backed by a portfolio of assets. MagnetDAO expects that by focusing on supply expansion rather than price appreciation, $MAG may serve as a stable currency."}},"q2":{"q":"Is MAG a stable coin?","a":{"text1":"No, $MAG isn\'t a stablecoin. Rather, $MAG seeks to be a decentralized algorithmic reserve currency. $MAG, like the gold standard, offers its users with free floating value that they can always rely on, thanks to the fractional treasury reserves from which $MAG derives its intrinsic worth."}},"q3":{"q":"$MAG is backed, not pegged.","a":{"text1":"MagnetDAO\'s protocol managed treasury, protocol owned liquidity (POL), bond mechanism, and staking rewards are all meant to keep supply expansion under control. The protocol makes money from bond sales, and the treasury uses the money to mint $MAG and distribute them to stakers. The protocol can accumulate its own liquidity by using liquidity bonds. Take a look at the entry below for further information on the importance of POL."}},"q4":{"q":"What is the deal with (\ud83e\uddf2,\ud83e\uddf2) and (\u2757, \u2757)?","a":{"text1":"(\ud83e\uddf2,\ud83e\uddf2) is the belief that if everyone in Magnet worked together, everyone would benefit the most (from a game theory standpoint). A user can currently take one of three actions:","text2":"Staking (+2)\\nBonding (+1)\\nSelling (-2)","text3":"Staking and bonding are thought to be advantageous to the procedure, whereas selling is thought to be harmful. Bonding does not produce a price change, whereas staking and selling do (we consider buying $MAG from the market as a prerequisite of staking, thus causing a price move). If both acts are advantageous, the actor who moves the price receives half of the profit (+1). If both acts are incompatible, the bad actor who moves the price receives half of the benefit (+1), while the good actor who moves the price receives half of the disadvantage (-1). (-1). If both activities are harmful, which suggests that both actors are selling, they will each receive half of the negative consequences (-1).","text4":"As a result, given two actors, all possible scenarios for what they could do and their impact on the protocol are displayed here:","text5":"It is beneficial for both of us and the protocol (3 + 3 = 6) if we both stake (3, 3).","text6":"It\'s also ideal if one of us stakes and the other bonds, because staking removes $MAG from the market and places it in the protocol, while bonding offers liquidity and DAI for the Treasury (3 + 1 = 4).","text7":"When one of us sells, the other who stakes or bonds puts in less effort (1 - 1 = 0).","text8":"When both of us sell, it results in the worst possible outcome for both of us and for the protocol (-3 - 3 = -6)."}},"q5":{"q":"Why is PCV important?","a":{"text1":"$MAG can only be minted or burned by the protocol because it is in charge of the assets in its treasury. This ensures that the protocol can always back 1 $MAG with a single DAI. Because you can be confident that the protocol will buy $MAG below 1 DAI indefinitely with treasury assets until no one is left to sell, you can easily quantify the risk of your investment. The FED is untrustworthy, but the code is reliable.","text2":"More runway for the stakers is ensured as the procedure accumulates more PCV. Because more funds are available in the Treasury, stakers can be confident that the current staking APY will be sustained for a longer time."}},"q6":{"q":"Why is POL important?","a":{"text1":"Because of its bond mechanism, Magnet owns the majority of its liquidity. This has a number of advantages:","text2":"Magnet does not need to pay out large farming rewards to entice liquidity providers, often known as renting of liquidity. Magnet assures the market that liquidity will always be available to allow the sale or purchase of goods. Because it is the largest LP (liquidity provider), it receives the majority of the LP fees, which is an additional source of revenue for the Treasury. $MAG can be backed up with any POL. For this aim, the LP tokens are discounted to their risk-free value."}},"q7":{"q":"What is the point of buying $MAG when it is trading at a premium?","a":{"text1":"When you buy and stake $MAG, you are capturing a percentage of the supply (market cap) that is expected to remain stable. This is due to the fact that your staked $MAG balance rises in tandem with the circulating supply. The consequence is that if you acquire $MAG when the market capitalization is low, you will be able to capture a higher portion of the market capitalization. Additionally, $MAG is adding value much further than just its treasury. We are building, incubating, and investing in projects. When you invest in $MAG, you are not just investing in a value-creation mechanism, you are also getting exposure to ground-level development of a multitude of innovative protocols."}},"q8":{"q":"What is a rebase?","a":{"text1":"Rebase is a method that automatically enhances your staked $MAG balance. When the protocol creates fresh $MAG, a big chunk of it goes to the stakers. Because stakers can only see their staked $MAG balance and not their $MAG balance, the protocol uses the rebase technique to boost the staked $MAG balance so that 1 staked $MAG is always redeemable for 1 $MAG."}},"q9":{"q":"What is reward yield?","a":{"text1":"The percentage by which your staked $MAG balance increases on the next epoch is known as reward yield. It\'s sometimes referred to as the rebase rate. This number can be found on the Magnet staking page."}},"q10":{"q":"What is APY?","a":{"text1":"Annual percentage yield is abbreviated as APY. It considers the effect of compounding interest to calculate the real rate of return on your principal. In the case of MagnetDAO, your staked $MAG symbolizes your principal, while the rebase process adds compound interest every epoch (~8 hours).","text2":"One unique feature of APY is that your balance will grow exponentially rather than linearly over time! If you start with a balance of 1 $MAG on day 1, and assume a daily compound interest rate of 2%, your balance will rise to around 1377 after a year. Not too bad!"}},"q11":{"q":"How is the APY calculated?","a":{"text1":"The following calculation is used to determine the APY from the reward yield (also known as the rebase rate):","text2":"APY = (1 + reward yield)^1095","text3":"Because a rebase occurs three times per day, it rises to the power of 1095. Given that there are 365 days in a year, the rebase frequency would be 365 * 3 = 1095.","text4":"The following equation determines the reward yield:","text5":"Reward Yield = $MAG distributed / $MAG total staked","text6":"Using the following calculation, the number of $MAG delivered to the staking contract is determined from the entire supply of $MAG:","text7":"$MAG distributed = $MAG total supply x Reward rate","text8":"**Please keep in mind that the protocol\'s reward rate is subject to change."}},"q12":{"q":"Why does the price of $MAG become irrelevant in the long-term?","a":{"text1":"Because of the strength of compounding, your $MAG balance will grow dramatically over time, as seen above. Let\'s imagine you buy a $MAG for $400 today and the market determines that the intrinsic worth of the $MAG will be $2 in a year. If you assume a daily compound interest rate of 2%, your balance by the end of the year will be roughly 1377 $MAGs, which is worth around $2754. That\'s a profit of $2354! You should now realize that you are paying a higher price for $MAG now in exchange for a long-term advantage. As a result, you\'ll need a long time horizon to allow your $MAG balance to increase rapidly and make this an investment worth it."}},"q13":{"q":"What will be $MAG\'s intrinsic value in the future","a":{"text1":"There is no clear answer, however treasury performance can be used to determine intrinsic value. For instance, if the Treasury can guarantee that every $MAG will be backed by 100 DAI, the intrinsic value of the $MAG will be 100 DAI. The DAO can also make a decision. If the DAO decides to raise the price floor of $MAG, for example, its intrinsic value will rise as well. $MAG will also benefit from the projects it launches, incubates, and invests in - which will all contribute to building its treasury, and fee streams should drive valuation."}},"q14":{"q":"How does the protocol manage to maintain the high staking APY?","a":{"text1":"Assume the protocol aims for a 100,000 percent APY. This would imply a rebase rate of around 0.6328 percent, or a daily growth rate of around 2%. Please see the calculation above to see how the rebase rate is used to determine APY.","text2":"To achieve this daily increase, the protocol would need to mint an additional 2000 $MAG if there are 100,000 $MAG staked right now. This can be accomplished if the protocol can generate at least 2000 DAI every day via bond sales. The APY of 100,000 percent cannot be guaranteed if the protocol fails to reach this."}},"q15":{"q":"Do I have to unstake and stake $MAG on every epoch to get my rebase rewards?","a":{"text1":"No. Your staked $MAG balance will auto-compound every epoch once you\'ve staked $MAG with MagnetDAO. Your rebase benefits are represented by that gain in balance."}},"q16":{"q":"How do I track my rebase rewards?","a":{"text1":"You can track your rebase rewards by calculating the increase in your staked $MAG balance.","text2":"Record down the Current Index value on the staking page when you first stake your $MAG. Let\'s call this the Start Index.","text3":"After staking for some time, if you want to determine by how much your balance has increased, check the Current Index value again. Let\'s call this the End Index.","text4":"By dividing the End Index by Start Index, you would get the ratio by which your staked $MAG balance has increased."}}}}}'));
            te.eL.T;
            var se = te.eL.X,
                ae = te.JF.Xl,
                ne = "magnetDao.questions.",
                ie = "ohmDao.questions.",
                re = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    var t = (0, o.$G)("faq").t;
                    return (0, a.jsxs)("section", {
                        id: "faq",
                        children: [(0, a.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, a.jsxs)("div", {
                                className: "outline-title left",
                                children: [(0, a.jsx)("span", {
                                    className: "outline",
                                    children: "FAQ"
                                }), (0, a.jsx)("h2", {
                                    children: "FAQ"
                                })]
                            }), (0, a.jsx)("div", {
                                className: "crosshair"
                            })]
                        }), (0, a.jsx)(le, {
                            t: t,
                            magFaqTitle: t("magnetDao.title"),
                            ohmFaqTitle: t("ohmDao.title")
                        })]
                    })
                },
                le = function (e) {
                    var t = e.t,
                        s = e.magFaqTitle,
                        n = e.ohmFaqTitle;
                    return (0, a.jsxs)(ee.mQ, {
                        children: [(0, a.jsx)(ee.td, {
                            className: "react-tabs__tab-list faq-tab-title-container ",
                            children: (0, a.jsxs)("div", {
                                className: "wrapper",
                                children: [(0, a.jsx)(ee.OK, {
                                    className: "react-tabs__tab faq-tab-title",
                                    children: s
                                }), (0, a.jsx)(ee.OK, {
                                    className: "react-tabs__tab faq-tab-title",
                                    children: n
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "tabscont",
                            children: (0, a.jsxs)("div", {
                                className: "wrapper",
                                children: [(0, a.jsx)(ee.x4, {
                                    className: "faq-tab-panel",
                                    children: Object.keys(se).map((function (e) {
                                        return (0, a.jsx)(oe, {
                                            prompt: t("".concat(ne + e, ".q")),
                                            answers: t("".concat(ne + e, ".a"), {
                                                returnObjects: !0
                                            })
                                        }, e)
                                    }))
                                }), (0, a.jsx)(ee.x4, {
                                    className: "faq-tab-panel",
                                    children: Object.keys(ae).map((function (e) {
                                        return (0, a.jsx)(oe, {
                                            prompt: t("".concat(ie + e, ".q")),
                                            answers: t("".concat(ie + e, ".a"), {
                                                returnObjects: !0
                                            })
                                        }, e)
                                    }))
                                })]
                            })
                        })]
                    })
                },
                oe = function (e) {
                    var t = e.prompt,
                        s = e.answers;
                    return (0, a.jsx)("div", {
                        className: "faq-question",
                        children: (0, a.jsx)(K(), {
                            trigger: t,
                            children: Object.entries(s).map((function (e) {
                                return (0, a.jsx)("p", {
                                    className: "faq-answer",
                                    children: e[1]
                                }, e[0])
                            }))
                        })
                    })
                },
                ce = {
                    src: "/_next/static/media/powered-by-avalanche.10559d26.svg",
                    height: 52,
                    width: 150
                };
            var de = function () {
                    return (0, a.jsx)("footer", {
                        children: (0, a.jsxs)("div", {
                            className: "wrapper",
                            children: [(0, a.jsx)(he, {}), (0, a.jsx)(ue, {})]
                        })
                    })
                },
                he = function (e) {
                    e = null !== e ? e : function (e) {
                        throw e
                    }(new TypeError("Cannot destructure undefined"));
                    return (0, a.jsxs)("div", {
                        className: "cta",
                        children: [(0, a.jsx)("div", {
                            className: "col-left",
                            children: (0, a.jsx)("div", {
                                className: "title",
                                children: "Liftoff in 3.. 2.. 1.."
                            })
                        }), (0, a.jsx)("div", {
                            className: "col-right",
                            children: (0, a.jsxs)("div", {
                                className: "btn-group",
                                children: [(0, a.jsx)("a", {
                                    href: "https://discord.gg/magnetdao",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "btn btn-secondary",
                                    children: (0, a.jsx)("span", {
                                        children: "Join Discord"
                                    })
                                }), " ", (0, a.jsx)("a", {
                                    href: "https://app.magnetdao.finance",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "btn btn-primary",
                                    children: (0, a.jsx)("span", {
                                        children: "Launch app"
                                    })
                                })]
                            })
                        })]
                    })
                },
                ue = function () {
                    return (0, a.jsxs)("div", {
                        className: "content",
                        children: [(0, a.jsxs)("div", {
                            className: "col-left",
                            children: [(0, a.jsx)("a", {
                                href: "#hero",
                                id: "logo-footer",
                                children: (0, a.jsx)(r.default, {
                                    src: l,
                                    alt: "Magnet DAO Logo"
                                })
                            }), (0, a.jsx)(b, {})]
                        }), (0, a.jsx)("div", {
                            className: "col-right",
                            children: (0, a.jsx)("a", {
                                href: "https://www.avax.network/",
                                target: "_blank",
                                rel: "noreferrer",
                                id: "powered-by-avalanche",
                                title: "Visit avax.network",
                                children: (0, a.jsx)(r.default, {
                                    src: ce,
                                    alt: "Powered by Avalanche"
                                })
                            })
                        })]
                    })
                },
                me = !0,
                xe = function () {
                    var e = function () {
                        var e = new IntersectionObserver((function (e) {
                                e.forEach((function (e) {
                                    e.isIntersecting ? e.target.classList.add("outline-title-anim") : e.target.classList.remove("outline-title-anim")
                                }))
                            })),
                            t = new IntersectionObserver((function (e) {
                                e.forEach((function (e) {
                                    e.isIntersecting ? e.target.classList.add("inview") : e.target.classList.remove("inview")
                                }))
                            }));
                        document.querySelectorAll(".outline-title").forEach((function (t) {
                            e.observe(t)
                        })), document.querySelectorAll(".crosshair").forEach((function (e) {
                            t.observe(e)
                        })), window.onscroll = function (e) {
                            document.querySelectorAll(".crosshair.inview").forEach((function (e) {
                                e.setAttribute("style", "--rotate: " + window.pageYOffset / 2 + "deg")
                            }))
                        }
                    };
                    return (0, a.jsxs)("div", {
                        id: "bodyDiv",
                        children: [(0, a.jsxs)(n.default, {
                            children: [(0, a.jsx)("meta", {
                                charSet: "utf-8"
                            }), (0, a.jsx)("meta", {
                                httpEquiv: "X-UA-Compatible",
                                content: "IE=edge"
                            }), (0, a.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5, user-scalable=1, viewport-fit=cover"
                            }), (0, a.jsx)("meta", {
                                name: "description",
                                content: "Magnet DAO is a crypto incubator that uses its treasury to cultivate, incubate, and invest in early-stage crypto projects."
                            }), (0, a.jsx)("link", {
                                rel: "preload",
                                href: "/lufga-bold.woff2",
                                as: "font",
                                crossOrigin: "anonymous"
                            }), (0, a.jsx)("title", {
                                children: "Magnet DAO | Revolutionizing early-stage investing"
                            }), (0, a.jsx)("link", {
                                rel: "icon",
                                type: "image/svg+xml",
                                href: "/favicon.svg"
                            }), (0, a.jsx)("link", {
                                rel: "alternate icon",
                                href: "/favicon.ico"
                            }), (0, a.jsx)("meta", {
                                property: "og:title",
                                content: "Magnet DAO | Revolutionizing early-stage investing"
                            }), (0, a.jsx)("meta", {
                                property: "og:image",
                                content: "/og_img.png"
                            }), (0, a.jsx)("meta", {
                                property: "og:description",
                                content: "Magnet DAO is a crypto incubator that uses its treasury to cultivate, incubate, and invest in early-stage crypto projects."
                            }), (0, a.jsx)("meta", {
                                property: "og:url",
                                content: "https://beta.magnetdao.finance/"
                            }), (0, a.jsx)("meta", {
                                property: "og:image:width",
                                content: "1200"
                            }), (0, a.jsx)("meta", {
                                property: "og:image:height",
                                content: "627"
                            }), (0, a.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }), (0, a.jsx)("meta", {
                                name: "twitter:site",
                                content: "@magnet_dao"
                            }), (0, a.jsx)("meta", {
                                name: "twitter:title",
                                content: "Magnet DAO | Revolutionizing early-stage investing"
                            }), (0, a.jsx)("meta", {
                                name: "twitter:description",
                                content: "Magnet DAO is a crypto incubator that uses its treasury to cultivate, incubate, and invest in early-stage crypto projects."
                            }), (0, a.jsx)("meta", {
                                name: "twitter:image",
                                content: "https://www.magnetdao.finance/og_img.png"
                            })]
                        }), (0, a.jsxs)("main", {
                            onLoad: function () {
                                e()
                            },
                            children: [(0, a.jsx)(O, {}), (0, a.jsx)(E, {}), (0, a.jsx)(S, {}), (0, a.jsx)(Z, {}), (0, a.jsx)(J, {}), (0, a.jsx)(z, {}), (0, a.jsx)(re, {}), (0, a.jsx)(de, {})]
                        }), (0, a.jsx)(m, {})]
                    })
                }
        }
    },
    function (e) {
        e.O(0, [774, 445, 888, 179], (function () {
            return t = 5301, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);