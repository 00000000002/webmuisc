(this["webpackJsonphzfe-music"] = this["webpackJsonphzfe-music"] || []).push([
    [0], {
        215: function(e, t, a) {
            e.exports = a(404)
        },
        220: function(e, t, a) {},
        221: function(e, t, a) {},
        222: function(e, t, a) {},
        223: function(e, t, a) {},
        225: function(e, t, a) {},
        226: function(e, t, a) {},
        309: function(e, t) {},
        311: function(e, t) {},
        389: function(e, t, a) {},
        390: function(e, t, a) {},
        391: function(e, t, a) {},
        395: function(e, t, a) {},
        396: function(e, t, a) {},
        397: function(e, t, a) {},
        398: function(e, t, a) {},
        404: function(e, t, a) {
            "use strict";
            a.r(t);
            var n, r = a(0),
                c = a.n(r),
                i = a(32),
                l = a.n(i),
                s = a(100),
                u = a(37),
                o = a(7),
                m = a.n(o),
                p = a(23),
                f = a(40),
                d = (a(220), a(48)),
                b = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        var a, n = arguments;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = !(n.length > 1 && void 0 !== n[1]) || n[1], t) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", "");
                                case 3:
                                    return e.abrupt("return", new Promise((function(e, n) {
                                        var r = new FileReader;
                                        r.onload = function(t) {
                                            var n = t.target;
                                            e(a ? n.result ? new Blob([n.result]) : null : n.result)
                                        }, r.onerror = n, a ? r.readAsArrayBuffer(t) : r.readAsText(t)
                                    })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function(e) {
                    for (var t, a = 0, n = e.length, r = ""; a < n;) t = e.subarray(a, Math.min(a + 32768, n)), r += String.fromCharCode.apply(null, t), a += 32768;
                    return btoa(r)
                },
                h = function(e) {
                    var t = Math.floor(e / 60) || 0,
                        a = ~~(e - 60 * t) || 0;
                    return (t < 10 ? "0" : "") + t + ":" + (a < 10 ? "0" : "") + a
                },
                g = function(e) {
                    var t, a = 3,
                        n = (null === (t = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(e)) || void 0 === t ? void 0 : t.map((function(e, t) {
                            var n;
                            4 === t && (a = null !== (n = null === e || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : a);
                            return e ? Number(e) : 0
                        }))) || [];
                    return 60 * n[1] + n[2] + (n[4] ? n[4] / (2 === a ? 100 : 1e3) : 0)
                },
                v = function(e) {
                    var t = e.split(","),
                        a = "";
                    if (t.length) {
                        var n = t[0].match(/:(.*?);/);
                        (null === n || void 0 === n ? void 0 : n.length) && (a = n[1])
                    }
                    for (var r = atob(t[1]), c = r.length, i = new Uint8Array(c); c--;) i[c] = r.charCodeAt(c);
                    return new Blob([i], {
                        type: a
                    })
                },
                E = (a(221), function(e) {
                    var t = Object(r.useState)([]),
                        a = Object(f.a)(t, 2),
                        n = a[0],
                        i = a[1],
                        l = Object(r.useState)(-1),
                        s = Object(f.a)(l, 2),
                        u = s[0],
                        o = s[1],
                        m = Object(r.useRef)(null),
                        p = Object(r.useState)(!0),
                        d = Object(f.a)(p, 2),
                        b = d[0],
                        y = d[1],
                        h = Object(r.useState)(2.5 * document.body.offsetHeight / 100),
                        v = Object(f.a)(h, 2),
                        E = v[0],
                        j = v[1];
                    Object(r.useEffect)((function() {
                        i(function(e) {
                            var t = e;
                            if (t) {
                                for (var a = (t = t.replace(/([^\]^\n])\[/g, (function(e, t) {
                                        return t + "\n["
                                    }))).split("\n"), n = [], r = a.length, c = 0; c < r; c++) {
                                    var i = a[c].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),
                                        l = a[c].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
                                    if (i)
                                        for (var s = i.length, u = 0; u < s; u++) {
                                            var o = g(i[u]);
                                            n.push({
                                                time: o,
                                                text: l
                                            })
                                        }
                                }
                                return (n = n.filter((function(e) {
                                    return e.text
                                }))).sort((function(e, t) {
                                    return e.time - t.time
                                })), n
                            }
                            return []
                        }(e.lrc))
                    }), [e.lrc]), Object(r.useEffect)((function() {
                        o(function(e, t) {
                            if (e.length <= 0) return -1;
                            for (var a = 0; a < e.length && !(e[a].time > t);) a++;
                            return a - 1
                        }(n, e.currentTime)), n.length && n[u] && e.setCurrentLrc(n[u].text)
                    }), [u, n, e]), Object(r.useEffect)((function() {
                        if (m && b && e.isPlaying) {
                            var t = m.current,
                                a = -80;
                            document.querySelectorAll(".lrc-list p").forEach((function(e, t) {
                                t < u && (a += e.offsetHeight + E)
                            })), t && t.scrollTo({
                                top: a,
                                behavior: "smooth"
                            })
                        }
                    }), [b, E, u, e.isPlaying]);
                    var O = function(e) {
                            return u === e ? "choose-lrc" : ""
                        },
                        k = function() {
                            j(2.5 * document.body.offsetHeight / 100)
                        };
                    return Object(r.useEffect)((function() {
                        return window.addEventListener("resize", k), k(),
                            function() {
                                window.removeEventListener("resize", k)
                            }
                    }), []), c.a.createElement("section", {
                        className: "music-lrc",
                        ref: m,
                        onMouseEnter: function() {
                            y(!1)
                        },
                        onMouseLeave: function() {
                            if (e.isPlaying) {
                                var t = m.current,
                                    a = -80;
                                document.querySelectorAll(".lrc-list p").forEach((function(e, t) {
                                    t < u && (a += e.offsetHeight + E)
                                })), t && t.scrollTo({
                                    top: a,
                                    behavior: "auto"
                                }), y(!0)
                            } else y(!0)
                        }
                    }, c.a.createElement("section", {
                        className: "lrc-list"
                    }, n.map((function(t, a) {
                        return c.a.createElement("p", {
                            key: "".concat(t.time).concat(t.text),
                            style: {
                                color: u === a ? e.color : ""
                            },
                            className: O(a),
                            dangerouslySetInnerHTML: {
                                __html: t.text
                            }
                        })
                    }))))
                }),
                j = (a(222), a(223), a(409)),
                O = function(e) {
                    var t = Object(r.useState)(0),
                        a = Object(f.a)(t, 2),
                        n = a[0],
                        i = a[1],
                        l = Object(r.useState)(!1),
                        s = Object(f.a)(l, 2),
                        u = s[0],
                        o = s[1];
                    Object(r.useEffect)((function() {
                        u || i(e.range)
                    }), [u, e.range]);
                    return c.a.createElement("section", {
                        className: "progress"
                    }, c.a.createElement(j.a, {
                        defaultValue: 0,
                        value: n,
                        onChange: function(t) {
                            o(!0), e.setChange(!0), i(t), e.handleChanging(t)
                        },
                        onAfterChange: function(t) {
                            e.setChange(!1), o(!1)
                        },
                        tooltipVisible: !1
                    }))
                },
                k = a(412),
                w = a(413),
                x = a(414),
                P = a(415),
                L = a(138),
                N = a(164),
                M = a(35),
                I = a(97),
                T = a(134),
                C = a(27),
                U = (a(167), a(13)),
                S = a(200),
                z = a(36),
                D = a.n(z);
            ! function(e) {
                e.loop = "loop", e.single = "single", e.random = "random"
            }(n || (n = {}));
            var A, H, R, K, F, q, B, _, J, V, Z, $, G, Q, W, X, Y, ee, te, ae, ne, re, ce, ie, le, se = [{
                    name: "\u987a\u5e8f\u64ad\u653e",
                    key: n.loop,
                    icon: "#icon-shunxubofang"
                }, {
                    name: "\u5355\u66f2\u5faa\u73af",
                    key: n.single,
                    icon: "#icon-danquxunhuan"
                }, {
                    name: "\u968f\u673a\u64ad\u653e",
                    key: n.random,
                    icon: "#icon-suiji"
                }],
                ue = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        var a;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "music-lrc-list", e.next = 3, D.a.getItem("music-lrc-list");
                                case 3:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    e.t0 = [];
                                case 6:
                                    return a = e.t0, a.every((function(e) {
                                        return e.fileName !== t.fileName
                                    })) && a.push(t), e.abrupt("return", D.a.setItem("music-lrc-list", a));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                oe = function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        var t;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "music-lrc-list", e.next = 3, D.a.getItem("music-lrc-list");
                                case 3:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    e.t0 = [];
                                case 6:
                                    return t = e.t0, e.abrupt("return", t);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                me = function() {
                    var e = Object(p.a)(m.a.mark((function e(t, a) {
                        var n, r;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "music-list", e.next = 3, D.a.getItem("music-list");
                                case 3:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    e.t0 = [];
                                case 6:
                                    if (n = e.t0, !n.every((function(e) {
                                            return e.fileName !== t.fileName
                                        }))) {
                                        e.next = 14;
                                        break
                                    }
                                    return r = "".concat(t.fileName, "-").concat(100 * Math.random(), "-").concat(Date.now()), t.id = r, e.next = 13, D.a.setItem(r, a);
                                case 13:
                                    n.push(t);
                                case 14:
                                    return e.abrupt("return", D.a.setItem("music-list", n));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                pe = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = Object(p.a)(m.a.mark((function e(a, n) {
                                            var r;
                                            return m.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, "music-list", e.next = 4, D.a.getItem("music-list");
                                                    case 4:
                                                        if (e.t0 = e.sent, e.t0) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        e.t0 = [];
                                                    case 7:
                                                        return r = (r = e.t0).filter((function(e) {
                                                            return e.id !== t
                                                        })), e.next = 11, D.a.setItem("music-list", r);
                                                    case 11:
                                                        return e.next = 13, D.a.removeItem(t);
                                                    case 13:
                                                        a(!0), e.next = 19;
                                                        break;
                                                    case 16:
                                                        e.prev = 16, e.t1 = e.catch(0), n(e.t1);
                                                    case 19:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 16]
                                            ])
                                        })));
                                        return function(t, a) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                fe = function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        var t;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "music-list", e.next = 3, D.a.getItem("music-list");
                                case 3:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    e.t0 = [];
                                case 6:
                                    return t = e.t0, e.abrupt("return", t);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                de = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = Object(p.a)(m.a.mark((function e(a, n) {
                                            var r, c;
                                            return m.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, D.a.getItem("music-list");
                                                    case 2:
                                                        if (e.t0 = e.sent, e.t0) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        e.t0 = [];
                                                    case 5:
                                                        if (r = e.t0, c = r.filter((function(e) {
                                                                return e.id === t
                                                            }))[0]) {
                                                            e.next = 11;
                                                            break
                                                        }
                                                        n("\u83b7\u53d6\u6b4c\u66f2\u4fe1\u606f\u5931\u8d25"), e.next = 21;
                                                        break;
                                                    case 11:
                                                        return e.next = 13, D.a.getItem(t);
                                                    case 13:
                                                        if (c.music = e.sent, !c.lrcKey) {
                                                            e.next = 19;
                                                            break
                                                        }
                                                        return e.next = 17, oe();
                                                    case 17:
                                                        e.sent.forEach((function(e) {
                                                            e.fileName === c.lrcKey && (c.lrc = e.content)
                                                        }));
                                                    case 19:
                                                        c.picture.length > 0 && (c.pictureUrl = URL.createObjectURL(v(c.picture[0]))), a(c);
                                                    case 21:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, a) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                be = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", new Promise(function() {
                                        var e = Object(p.a)(m.a.mark((function e(a, n) {
                                            var r;
                                            return m.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, "music-lrc-list", e.next = 4, D.a.getItem("music-lrc-list");
                                                    case 4:
                                                        if (e.t0 = e.sent, e.t0) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        e.t0 = [];
                                                    case 7:
                                                        return r = (r = e.t0).filter((function(e) {
                                                            return e.fileName !== t
                                                        })), e.next = 11, D.a.setItem("music-lrc-list", r);
                                                    case 11:
                                                        a(!0), e.next = 17;
                                                        break;
                                                    case 14:
                                                        e.prev = 14, e.t1 = e.catch(0), n(e.t1);
                                                    case 17:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 14]
                                            ])
                                        })));
                                        return function(t, a) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ye = function() {
                    var e = Object(p.a)(m.a.mark((function e() {
                        var t, a;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "last-play-type", e.next = 3, D.a.getItem("last-play-type");
                                case 3:
                                    if (e.t1 = t = e.sent, e.t0 = null !== e.t1, !e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = void 0 !== t;
                                case 7:
                                    if (!e.t0) {
                                        e.next = 11;
                                        break
                                    }
                                    e.t2 = t, e.next = 12;
                                    break;
                                case 11:
                                    e.t2 = n.random;
                                case 12:
                                    return a = e.t2, e.abrupt("return", a);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                he = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "last-play-type", e.next = 3, D.a.setItem("last-play-type", t);
                                case 3:
                                    return e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ge = a(213),
                ve = new(A = function() {
                    function e() {
                        var t = this;
                        Object(I.a)(this, e), Object(M.a)(this, "playingType", H, this), Object(M.a)(this, "preUrl", R, this), Object(M.a)(this, "preImgUrl", K, this), Object(M.a)(this, "musicPlayer", F, this), this.handlePlay = function() {
                            var e, a, n, r;
                            (console.log("\u6b4c\u66f2\u64ad\u653e\u4e86", null === (e = t.musicInfo) || void 0 === e ? void 0 : e.name), t.updatedMusicData({
                                currentTime: null === (a = t.musicPlayer) || void 0 === a ? void 0 : a.seek(),
                                duration: null === (n = t.musicPlayer) || void 0 === n ? void 0 : n.duration(),
                                playing: !0,
                                change: !1
                            }), t.musicInfo && !t.musicInfo.duration) && (t.musicInfo.duration = Number(null === (r = t.musicPlayer) || void 0 === r ? void 0 : r.duration()));
                            var c = window.navigator,
                                i = window.MediaMetadata;
                            c.mediaSession && t.musicInfo && (c.mediaSession.metadata = new i({
                                title: t.musicInfo.name,
                                artist: t.musicInfo.artist,
                                album: t.musicInfo.album,
                                artwork: [{
                                    src: t.musicInfo.pictureUrl || "",
                                    type: "image/jpeg",
                                    sizes: "512x512"
                                }]
                            }))
                        }, this.handlePause = function() {
                            var e;
                            console.log("\u6b4c\u66f2\u6682\u505c\u4e86"), t.updatedMusicData({
                                currentTime: null === (e = t.musicPlayer) || void 0 === e ? void 0 : e.seek(),
                                playing: !1
                            })
                        }, this.handleEnd = function() {
                            var e;
                            t.updatedMusicData({
                                currentTime: null === (e = t.musicPlayer) || void 0 === e ? void 0 : e.seek(),
                                playing: !1
                            }), requestAnimationFrame(t.handlePlaying), console.log("\u6b4c\u66f2\u64ad\u653e\u5b8c\u4e86"), t.handleNextMusic(!1)
                        }, this.handleStop = function() {
                            var e;
                            console.log("\u6b4c\u66f2\u505c\u6b62"), t.updatedMusicData({
                                currentTime: null === (e = t.musicPlayer) || void 0 === e ? void 0 : e.seek(),
                                playing: !1
                            })
                        }, this.handlePlaying = function() {
                            var e;
                            if (!t.musicData.change && (null === (e = t.musicPlayer) || void 0 === e ? void 0 : e.playing())) {
                                t.updatedMusicData({
                                    type: "update",
                                    currentTime: t.musicPlayer.seek()
                                });
                                var a = window.navigator;
                                a.mediaSession && t.musicPlayer && a.mediaSession.setPositionState({
                                    duration: Number(t.musicPlayer.duration()),
                                    playbackRate: 1,
                                    position: t.musicPlayer.seek()
                                }), requestAnimationFrame(t.handlePlaying)
                            }
                        }, Object(M.a)(this, "musicInfo", q, this), Object(M.a)(this, "musicData", B, this), Object(M.a)(this, "musicPlayerStats", _, this), Object(M.a)(this, "musicPlayList", J, this), Object(M.a)(this, "updateMusicPlayList", V, this), this.handleNextMusic = function() {
                            var e, a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            if (t.musicPlayer && t.musicPlayer.stop(), t.playingType !== n.single || a)
                                if (t.playingType === n.random && t.musicPlayList.length > 2) {
                                    var r = Math.floor(Math.random() * t.musicPlayList.length);
                                    ve.updatedMusicData({
                                        id: t.musicPlayList[r].id
                                    })
                                } else {
                                    for (var c = 0, i = t.musicPlayList.length - 1; c < t.musicPlayList.length && t.musicPlayList[c].id !== t.musicData.id;) c++;
                                    var l, s = c + 1;
                                    if (s = s > i ? s - i - 1 : s, t.musicPlayList[s].id === t.musicData.id) null === (l = t.musicPlayer) || void 0 === l || l.play();
                                    else ve.updatedMusicData({
                                        id: t.musicPlayList[s].id
                                    })
                                }
                            else null === (e = t.musicPlayer) || void 0 === e || e.play()
                        }, this.handlePreMusic = function() {
                            var e, a = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            if (t.musicPlayer && t.musicPlayer.stop(), t.playingType !== n.single || a)
                                if (t.playingType === n.random && t.musicPlayList.length > 2) {
                                    var r = Math.floor(Math.random() * t.musicPlayList.length);
                                    ve.updatedMusicData({
                                        id: t.musicPlayList[r].id
                                    })
                                } else {
                                    for (var c = 0, i = t.musicPlayList.length - 1; c < t.musicPlayList.length && t.musicPlayList[c].id !== t.musicData.id;) c++;
                                    var l, s = c - 1;
                                    if (s = s < 0 ? i : s, t.musicPlayList[s].id === t.musicData.id) null === (l = t.musicPlayer) || void 0 === l || l.play();
                                    else ve.updatedMusicData({
                                        id: t.musicPlayList[s].id
                                    })
                                }
                            else null === (e = t.musicPlayer) || void 0 === e || e.play()
                        }, Object(M.a)(this, "localMusicList", Z, this), Object(M.a)(this, "localMusicLoading", $, this), Object(M.a)(this, "localAlbumMap", G, this), Object(M.a)(this, "updateLocalAlbumList", Q, this), Object(M.a)(this, "updateLocalMusicList", W, this), Object(M.a)(this, "deleteMusic", X, this), this.localMusicLrcList = [], Object(M.a)(this, "localMusicLrcLoading", Y, this), Object(M.a)(this, "updateLocalMusicLrcList", ee, this), Object(M.a)(this, "deleteLrc", te, this), Object(M.a)(this, "musicColor", ae, this), Object(M.a)(this, "updateMusicColor", ne, this)
                    }
                    return Object(T.a)(e, [{
                        key: "updatePlayingType",
                        value: function(e) {
                            var t = e === n.loop ? n.single : e === n.single ? n.random : n.loop;
                            he(t), this.playingType = t
                        }
                    }, {
                        key: "updatePreUrl",
                        value: function(e) {
                            this.preUrl = e
                        }
                    }, {
                        key: "updatePreImgUrl",
                        value: function(e) {
                            this.preImgUrl.push(e), this.preImgUrl.length >= 5 && URL.revokeObjectURL(this.preImgUrl.shift())
                        }
                    }, {
                        key: "createdPlayer",
                        value: function() {
                            var e, t = this;
                            if (this.musicInfo && this.musicInfo.music) {
                                this.updatedMusicData({
                                    playing: !1
                                });
                                var a = URL.createObjectURL(this.musicInfo.music);
                                this.preUrl && URL.revokeObjectURL(this.preUrl), this.updatePreUrl(a), this.updatePreImgUrl(this.musicInfo.pictureUrl || ""), this.musicPlayer = new S.Howl({
                                    autoplay: !0,
                                    src: a,
                                    html5: !0,
                                    format: [(e = this.musicInfo.codec.toLowerCase() || String(this.musicInfo.fileType).toLowerCase(), "mpeg 1 layer 3" === e ? "mp3" : e)],
                                    volume: 1,
                                    onplay: this.handlePlay,
                                    onpause: this.handlePause,
                                    onend: this.handleEnd,
                                    onstop: this.handleStop
                                });
                                var n = window.navigator;
                                n.mediaSession && (n.mediaSession.setActionHandler("play", (function() {
                                    var e;
                                    null === (e = t.musicPlayer) || void 0 === e || e.play()
                                })), n.mediaSession.setActionHandler("pause", (function() {
                                    var e;
                                    null === (e = t.musicPlayer) || void 0 === e || e.pause()
                                })), n.mediaSession.setActionHandler("stop", (function() {
                                    var e;
                                    null === (e = t.musicPlayer) || void 0 === e || e.stop()
                                })), n.mediaSession.setActionHandler("seekto", (function(e) {
                                    var a, n = Number(e.seekTime);
                                    null === (a = t.musicPlayer) || void 0 === a || a.seek(n)
                                })), n.mediaSession.setActionHandler("seekbackward", (function(e) {
                                    var a, n;
                                    t.updatedMusicData({
                                        change: !0
                                    });
                                    var r = Number(null === (a = t.musicPlayer) || void 0 === a ? void 0 : a.seek()) - 10;
                                    null === (n = t.musicPlayer) || void 0 === n || n.seek(r), t.updatedMusicData({
                                        change: !1
                                    })
                                })), n.mediaSession.setActionHandler("seekforward", (function(e) {
                                    var a, n;
                                    t.updatedMusicData({
                                        change: !0
                                    });
                                    var r = Number(null === (a = t.musicPlayer) || void 0 === a ? void 0 : a.seek()) + 10;
                                    null === (n = t.musicPlayer) || void 0 === n || n.seek(r), t.updatedMusicData({
                                        change: !1
                                    })
                                })), n.mediaSession.setActionHandler("previoustrack", this.handlePreMusic), n.mediaSession.setActionHandler("nexttrack", this.handleNextMusic))
                            }
                        }
                    }, {
                        key: "destroyPlayer",
                        value: function() {
                            this.musicPlayer = null
                        }
                    }, {
                        key: "updatedMusicInfo",
                        value: function(e) {
                            0 === e.picture.length && (e.picture = ["".concat(".", "/images/music-no.jpeg")]), this.musicInfo = e
                        }
                    }, {
                        key: "updatedMusicData",
                        value: function(e) {
                            var t = this;
                            "update" !== e.type ? (e.hasOwnProperty("min") && (e.min ? document.body.classList.remove("dialog-screen") : document.body.classList.add("dialog-screen")), e.change || setTimeout((function() {
                                t.handlePlaying()
                            }), 100), this.musicData = Object(N.a)(Object(N.a)({}, this.musicData), e)) : this.musicData.currentTime = e.currentTime
                        }
                    }]), e
                }(), H = Object(C.a)(A.prototype, "playingType", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return n.loop
                    }
                }), Object(C.a)(A.prototype, "updatePlayingType", [U.f], Object.getOwnPropertyDescriptor(A.prototype, "updatePlayingType"), A.prototype), R = Object(C.a)(A.prototype, "preUrl", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return ""
                    }
                }), Object(C.a)(A.prototype, "updatePreUrl", [U.f], Object.getOwnPropertyDescriptor(A.prototype, "updatePreUrl"), A.prototype), K = Object(C.a)(A.prototype, "preImgUrl", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), Object(C.a)(A.prototype, "updatePreImgUrl", [U.f], Object.getOwnPropertyDescriptor(A.prototype, "updatePreImgUrl"), A.prototype), F = Object(C.a)(A.prototype, "musicPlayer", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }), Object(C.a)(A.prototype, "createdPlayer", [U.f], Object.getOwnPropertyDescriptor(A.prototype, "createdPlayer"), A.prototype), Object(C.a)(A.prototype, "destroyPlayer", [U.f], Object.getOwnPropertyDescriptor(A.prototype, "destroyPlayer"), A.prototype), q = Object(C.a)(A.prototype, "musicInfo", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }), Object(C.a)(A.prototype, "updatedMusicInfo", [U.f], Object.getOwnPropertyDescriptor(A.prototype, "updatedMusicInfo"), A.prototype), B = Object(C.a)(A.prototype, "musicData", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return {
                            id: "",
                            playing: !1,
                            duration: 0,
                            currentTime: 0,
                            change: !1,
                            min: !0
                        }
                    }
                }), Object(C.a)(A.prototype, "updatedMusicData", [U.f], Object.getOwnPropertyDescriptor(A.prototype, "updatedMusicData"), A.prototype), _ = Object(C.a)(A.prototype, "musicPlayerStats", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return {
                            loop: "random"
                        }
                    }
                }), J = Object(C.a)(A.prototype, "musicPlayList", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), V = Object(C.a)(A.prototype, "updateMusicPlayList", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return function(t) {
                            e.musicPlayList = t
                        }
                    }
                }), Z = Object(C.a)(A.prototype, "localMusicList", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), $ = Object(C.a)(A.prototype, "localMusicLoading", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), G = Object(C.a)(A.prototype, "localAlbumMap", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return new Map
                    }
                }), Q = Object(C.a)(A.prototype, "updateLocalAlbumList", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return function() {
                            var t = new Map;
                            e.localMusicList.forEach((function(e) {
                                var a;
                                if ("" !== e.album) {
                                    var n = null !== (a = t.get(e.album)) && void 0 !== a ? a : [];
                                    t.set(e.album, [].concat(Object(L.a)(n), [e]))
                                }
                            })), e.localAlbumMap = t
                        }
                    }
                }), W = Object(C.a)(A.prototype, "updateLocalMusicList", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return Object(p.a)(m.a.mark((function t() {
                            return m.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.localMusicLoading = !0, t.next = 3, fe();
                                    case 3:
                                        e.localMusicList = t.sent, e.updateMusicPlayList(Object(d.cloneDeep)(e.localMusicList)), e.updateLocalAlbumList(), e.localMusicLoading = !1;
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    }
                }), X = Object(C.a)(A.prototype, "deleteMusic", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return function() {
                            var t = Object(p.a)(m.a.mark((function t(a) {
                                return m.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, pe(a);
                                        case 3:
                                            ge.b.success("\u5220\u9664\u6210\u529f"), e.updateLocalMusicList(), t.next = 11;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t.catch(0), console.log(t.t0), ge.b.error("\u5220\u9664\u5931\u8d25");
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7]
                                ])
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }
                }), Y = Object(C.a)(A.prototype, "localMusicLrcLoading", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), ee = Object(C.a)(A.prototype, "updateLocalMusicLrcList", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return Object(p.a)(m.a.mark((function t() {
                            return m.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return e.localMusicLrcLoading = !0, t.next = 3, oe();
                                    case 3:
                                        e.localMusicLrcList = t.sent, e.localMusicLrcLoading = !1;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    }
                }), te = Object(C.a)(A.prototype, "deleteLrc", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return function() {
                            var t = Object(p.a)(m.a.mark((function t(a) {
                                return m.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, be(a);
                                        case 3:
                                            ge.b.success("\u5220\u9664\u6210\u529f"), e.updateLocalMusicLrcList(), t.next = 11;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t.catch(0), console.log(t.t0), ge.b.error("\u5220\u9664\u5931\u8d25");
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7]
                                ])
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }
                }), ae = Object(C.a)(A.prototype, "musicColor", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return "#1890ff"
                    }
                }), ne = Object(C.a)(A.prototype, "updateMusicColor", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return function(t) {
                            e.musicColor = t, document.documentElement.style.setProperty("--primary-color", t)
                        }
                    }
                }), A),
                Ee = ve,
                je = a(64),
                Oe = a(65),
                ke = Object(je.a)((function() {
                    var e = function() {
                            var e = Object(p.a)(m.a.mark((function e() {
                                var t;
                                return m.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, ye();
                                        case 2:
                                            t = e.sent, Ee.playingType = t;
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        t = Ee.playingType,
                        a = se.find((function(e) {
                            return e.key === t
                        }));
                    return Object(r.useEffect)((function() {
                        e()
                    }), []), c.a.createElement("section", {
                        className: "playing-type"
                    }, c.a.createElement(Oe.a, {
                        placement: "topLeft",
                        title: null === a || void 0 === a ? void 0 : a.name,
                        color: "#999"
                    }, c.a.createElement("svg", {
                        className: "icon",
                        "aria-hidden": "true",
                        onClick: function() {
                            Ee.updatePlayingType(t)
                        }
                    }, c.a.createElement("use", {
                        xlinkHref: null === a || void 0 === a ? void 0 : a.icon
                    }))))
                })),
                we = function(e) {
                    var t, a, n = Object(r.useState)(0),
                        i = Object(f.a)(n, 2),
                        l = i[0],
                        s = i[1];
                    return Object(r.useEffect)((function() {
                        var t, a = (null === (t = e.currentInfo) || void 0 === t ? void 0 : t.duration) || e.musicPlayingInfo.duration || 0;
                        s(e.currentTime / a * 100)
                    }), [e.currentInfo, e.currentTime, e.musicPlayingInfo.duration]), c.a.createElement("section", {
                        className: "player-control"
                    }, e.min ? c.a.createElement("section", {
                        className: "control-min"
                    }, c.a.createElement("section", {
                        className: "control-icon-list"
                    }, c.a.createElement("p", {
                        onClick: function() {
                            return Ee.handlePreMusic()
                        }
                    }, c.a.createElement(k.a, null)), c.a.createElement("p", {
                        className: "icon-play-bg",
                        onClick: function() {
                            e.isPlaying ? e.handlePause() : e.handlePlay()
                        }
                    }, e.isPlaying ? c.a.createElement(w.a, null) : c.a.createElement(x.a, null)), c.a.createElement("p", {
                        onClick: function() {
                            return Ee.handleNextMusic()
                        }
                    }, c.a.createElement(P.a, null)), c.a.createElement(ke, null)), c.a.createElement("section", {
                        className: "control-progress"
                    }, c.a.createElement(O, {
                        range: Number(l.toFixed(2)),
                        handleChanging: e.handleChanging,
                        setChange: e.setChange
                    })), c.a.createElement("section", {
                        className: "line-left"
                    }, c.a.createElement("span", null, " ", h(e.currentTime || 0), " "), c.a.createElement("span", null, "/"), c.a.createElement("span", null, " ", h((null === (t = e.currentInfo) || void 0 === t ? void 0 : t.duration) || e.musicPlayingInfo.duration || 0), " "))) : c.a.createElement("section", {
                        className: "control"
                    }, c.a.createElement("section", {
                        className: "control-progress"
                    }, c.a.createElement(O, {
                        range: Number(l.toFixed(2)),
                        handleChanging: e.handleChanging,
                        setChange: e.setChange
                    })), c.a.createElement("section", {
                        className: "control-line"
                    }, c.a.createElement("section", {
                        className: "line-left"
                    }, c.a.createElement("span", null, " ", h(e.currentTime || 0), " "), c.a.createElement("span", null, " ", h((null === (a = e.currentInfo) || void 0 === a ? void 0 : a.duration) || e.musicPlayingInfo.duration || 0), " ")), c.a.createElement("section", {
                        className: "line-center"
                    }, c.a.createElement("section", {
                        className: "control-icon-list"
                    }, c.a.createElement("p", {
                        onClick: function() {
                            return Ee.handlePreMusic()
                        }
                    }, c.a.createElement(k.a, null)), c.a.createElement("p", {
                        className: "icon-play-bg",
                        onClick: function() {
                            e.isPlaying ? e.handlePause() : e.handlePlay()
                        }
                    }, e.isPlaying ? c.a.createElement(w.a, null) : c.a.createElement(x.a, null)), c.a.createElement("p", {
                        onClick: function() {
                            return Ee.handleNextMusic()
                        }
                    }, c.a.createElement(P.a, null)), c.a.createElement(ke, null))))))
                },
                xe = (a(225), function(e) {
                    var t = Object(r.useState)([]),
                        a = Object(f.a)(t, 2),
                        n = a[0],
                        i = a[1],
                        l = Object(r.useState)(-1),
                        s = Object(f.a)(l, 2),
                        u = s[0],
                        o = s[1],
                        m = Object(r.useRef)(null),
                        p = Object(r.useState)(!0),
                        d = Object(f.a)(p, 2),
                        b = d[0],
                        y = d[1],
                        h = Object(r.useState)({
                            backgroundImage: ""
                        }),
                        v = Object(f.a)(h, 2),
                        E = v[0],
                        j = v[1],
                        O = Object(r.useState)(0),
                        k = Object(f.a)(O, 2),
                        w = k[0],
                        x = k[1];
                    Object(r.useEffect)((function() {
                        i(function(e) {
                            var t = [];
                            console.log("\u8fdb\u5165\u9010\u5b57\u89e3\u6790\u7684\u6b4c\u8bcd\u54e6");
                            for (var a = e.split("\n"), n = 0; n < a.length;) {
                                var r = a[n].replace(/\s/g, ""),
                                    c = r.match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),
                                    i = r.match(/(?<=\])\S\s?(?=\[)/g);
                                if (c && i) {
                                    for (var l = [], s = 0; s < i.length; s++) l.push({
                                        text: i[s],
                                        start: g(c[s]),
                                        end: g(c[s + 1])
                                    });
                                    t.push(l)
                                }
                                n++
                            }
                            return t
                        }(e.lrc))
                    }), [e.lrc]), Object(r.useEffect)((function() {
                        if (o(function(e, t) {
                                if (e.length <= 0) return -1;
                                for (var a = 0; a < e.length && !(e[a][0].start > t);) a++;
                                return a - 1
                            }(n, e.currentTime)), n[u] && n[u].length) {
                            var t = n[u].map((function(e) {
                                return e.text
                            }));
                            e.setCurrentLrc(t.join(""))
                        }
                        var a = function(e, t) {
                            if (!e) return 0;
                            for (var a = 0, n = 0; n < e.length && !(t < e[n].start);) n++;
                            var r = e[n -= 1];
                            return r ? t >= r.end ? 100 : (a = n / e.length * 100, a += (t - e[n].start) / (e[n].end - e[n].start) * (1 / e.length) * 100) : 0
                        }(n[u], e.currentTime);
                        j({
                            backgroundImage: "-webkit-linear-gradient(left,".concat(e.color, " ").concat(a, "%,#ffffff ").concat(a, "%)")
                        })
                    }), [u, n, e]), Object(r.useEffect)((function() {
                        if (m && b && e.isPlaying) {
                            var t = m.current,
                                a = w * (u - 1) || 0;
                            t && t.scrollTo({
                                top: a,
                                behavior: "smooth"
                            })
                        }
                    }), [b, w, u, e.isPlaying]);
                    var P = function(e) {
                            return u === e ? "choose-lrc-line" : ""
                        },
                        L = function() {
                            x(7.5 * document.body.offsetHeight / 100)
                        };
                    return Object(r.useEffect)((function() {
                        return window.addEventListener("resize", L), L(),
                            function() {
                                window.removeEventListener("resize", L)
                            }
                    }), []), c.a.createElement("section", {
                        className: "music-lrc-word",
                        ref: m,
                        onMouseEnter: function() {
                            y(!1)
                        },
                        onMouseLeave: function() {
                            if (y(!0), e.isPlaying) {
                                var t = m.current,
                                    a = w * (u - 1) || 0;
                                t && t.scrollTo({
                                    top: a,
                                    behavior: "auto"
                                })
                            }
                        }
                    }, c.a.createElement("section", {
                        className: "lrc-list"
                    }, n.map((function(e, t) {
                        return c.a.createElement("section", {
                            key: t,
                            className: "lrc-line"
                        }, c.a.createElement("p", {
                            className: P(t),
                            style: u === t ? E : {}
                        }, e.map((function(e, t) {
                            return c.a.createElement("span", {
                                key: t
                            }, e.text)
                        }))))
                    }))))
                }),
                Pe = a(202),
                Le = a(163),
                Ne = a(144),
                Me = new Pe.a,
                Ie = Object(je.a)((function() {
                    var e, t = Ee.musicPlayer,
                        a = Ee.musicInfo,
                        n = Ee.musicData,
                        i = Object(r.useState)(""),
                        l = Object(f.a)(i, 2),
                        s = l[0],
                        u = l[1],
                        o = Object(r.useRef)(!1),
                        d = Ee.musicColor,
                        b = function(e) {
                            var t = ((null === a || void 0 === a ? void 0 : a.duration) || 0) * e / 100;
                            Ee.updatedMusicData({
                                currentTime: t
                            })
                        },
                        y = function(e) {
                            e || (null === t || void 0 === t || t.seek(n.currentTime), n.playing || null === t || void 0 === t || t.play()), Ee.updatedMusicData({
                                change: e
                            })
                        },
                        h = Object(r.useCallback)(Object(p.a)(m.a.mark((function e() {
                            return m.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise(function() {
                                            var e = Object(p.a)(m.a.mark((function e(t, a) {
                                                var r;
                                                return m.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, de(n.id);
                                                        case 2:
                                                            (r = e.sent) ? t(r): a("\u6b4c\u66f2\u4fe1\u606f\u83b7\u53d6\u5931\u8d25");
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, a) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [n.id]),
                        g = Object(r.useCallback)((function() {
                            t && (t.playing() ? t.pause() : t.play())
                        }), [t]),
                        v = Object(r.useCallback)(Object(p.a)(m.a.mark((function e() {
                            var t;
                            return m.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n.id) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, h();
                                    case 4:
                                        if (t = e.sent) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 7:
                                        Ee.updatedMusicInfo(t), Me.getColorAsync(t.pictureUrl || "").then((function(e) {
                                            Ee.updateMusicColor(Object(Le.b)(.8, Object(Le.a)(.5, e.rgba)))
                                        })).catch((function(e) {
                                            Ee.updateMusicColor("#1890ff")
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [h, n.id]),
                        j = Object(r.useCallback)((function(e) {
                            32 === e.keyCode && (e.preventDefault(), g())
                        }), [g]),
                        O = function() {
                            Ee.updatedMusicData({
                                min: !n.min
                            })
                        };
                    return Object(r.useEffect)((function() {
                        v()
                    }), [v]), Object(r.useEffect)((function() {
                        return a && !t && (u(""), Ee.createdPlayer()),
                            function() {
                                t && (Ee.updatedMusicData({
                                    playing: !1
                                }), Ee.destroyPlayer())
                            }
                    }), [a, t]), Object(r.useEffect)((function() {
                        o.current = n.change
                    }), [n.change]), Object(r.useEffect)((function() {
                        return window.addEventListener("keydown", j),
                            function() {
                                window.removeEventListener("keydown", j)
                            }
                    }), [j]), c.a.createElement("section", {
                        className: "player"
                    }, n.min ? c.a.createElement("section", {
                        className: "player-min"
                    }, a ? c.a.createElement("section", {
                        className: "player-layout"
                    }, c.a.createElement("section", {
                        className: "layout-left"
                    }, c.a.createElement("section", {
                        className: "music-img",
                        onClick: O
                    }, c.a.createElement("img", {
                        src: a.pictureUrl ? a.pictureUrl : "./images/music-no.jpeg",
                        alt: ""
                    })), c.a.createElement("section", {
                        className: "player-info"
                    }, c.a.createElement("p", {
                        className: "music-name"
                    }, a.name), c.a.createElement("p", {
                        className: "music-artist"
                    }, a.artist, " - ", a.album))), c.a.createElement("section", {
                        className: "music-progress"
                    }, c.a.createElement(we, {
                        handlePlay: g,
                        handlePause: g,
                        currentInfo: a || null,
                        musicPlayingInfo: n,
                        currentTime: n.currentTime,
                        handleChanging: b,
                        setChange: y,
                        min: n.min,
                        isPlaying: n.playing
                    }))) : c.a.createElement("section", {
                        className: "player-layout"
                    }, "\u8bf7\u9009\u62e9\u6b4c\u66f2\u8fdb\u884c\u64ad\u653e")) : "", c.a.createElement("section", {
                        className: "player-max ".concat(n.min ? "player-max-min" : "")
                    }, c.a.createElement("section", {
                        className: "status-control",
                        onClick: O
                    }, c.a.createElement(Ne.a, null)), c.a.createElement("section", {
                        className: "player-bg",
                        style: {
                            backgroundImage: "url(".concat((null === a || void 0 === a ? void 0 : a.pictureUrl) || "./images/music-no.jpeg", ")")
                        }
                    }), c.a.createElement("section", {
                        className: "player-fade"
                    }), c.a.createElement("section", {
                        className: "player-layout"
                    }, a ? c.a.createElement("section", {
                        className: "player-box"
                    }, c.a.createElement("section", {
                        className: "player-left"
                    }, c.a.createElement("section", {
                        className: "player-line"
                    }, c.a.createElement("img", {
                        src: a.pictureUrl ? a.pictureUrl : "./images/music-no.jpeg",
                        alt: ""
                    })), c.a.createElement("section", {
                        className: "player-line"
                    }, c.a.createElement("section", {
                        className: "player-info"
                    }, c.a.createElement("p", {
                        className: "music-name"
                    }, a.name), c.a.createElement("p", {
                        className: "music-artist"
                    }, a.artist, " - ", a.album), c.a.createElement("p", {
                        className: "music-current-lrc",
                        dangerouslySetInnerHTML: {
                            __html: s
                        }
                    }))), c.a.createElement(we, {
                        handlePlay: g,
                        handlePause: g,
                        currentInfo: a || null,
                        musicPlayingInfo: n,
                        currentTime: n.currentTime,
                        handleChanging: b,
                        setChange: y,
                        isPlaying: n.playing
                    })), c.a.createElement("section", {
                        className: "player-right"
                    }, (null === (e = a.lrc) || void 0 === e ? void 0 : e.match(/\](\S)\[/g)) ? c.a.createElement(xe, {
                        setCurrentLrc: u,
                        color: d,
                        lrc: a.lrc || "",
                        currentInfo: a || null,
                        currentTime: n.currentTime,
                        isPlaying: n.playing
                    }) : c.a.createElement(E, {
                        setCurrentLrc: u,
                        color: d,
                        lrc: a.lrc || "",
                        currentInfo: a || null,
                        currentTime: n.currentTime,
                        isPlaying: n.playing
                    }))) : "")))
                })),
                Te = a(407),
                Ce = a(52),
                Ue = a(416),
                Se = (a(226), ["mp3", "ogg", "wav", "aac", "flac", "dolby", "opus", "webm", "alac"]),
                ze = ["lrc", "txt"],
                De = a(159),
                Ae = a.n(De),
                He = a(203),
                Re = new(re = function e() {
                    var t = this;
                    Object(I.a)(this, e), Object(M.a)(this, "isUploading", ce, this), Object(M.a)(this, "uploadList", ie, this), Object(M.a)(this, "addUploadTask", le, this), this.checkUpload = Object(p.a)(m.a.mark((function e() {
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    !t.isUploading && t.uploadList.length && t.handleUpload();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), this.handleUpload = Object(p.a)(m.a.mark((function e() {
                        var a;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t.isUploading = !0, a = t.uploadList.shift(), e.next = 5, Fe(a);
                                case 5:
                                    t.isUploading = !1, t.checkUpload(), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })))
                }, ce = Object(C.a)(re.prototype, "isUploading", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return !1
                    }
                }), ie = Object(C.a)(re.prototype, "uploadList", [U.m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }), le = Object(C.a)(re.prototype, "addUploadTask", [U.f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        var e = this;
                        return function(t) {
                            e.uploadList.push(t), e.checkUpload()
                        }
                    }
                }), re),
                Ke = function(e) {
                    return Re.addUploadTask(e), !1
                },
                Fe = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        var a, n, r;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.name.split("."), n = a[a.length - 1].toLowerCase(), r = t.name.replace(".".concat(n), ""), !Se.includes(n)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 6, qe(t);
                                case 6:
                                    return e.abrupt("return", !1);
                                case 7:
                                    if (!ze.includes(n)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 10, Be(t);
                                case 10:
                                    return e.abrupt("return", !1);
                                case 11:
                                    return ge.b.warning("\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u5904\u7406".concat(n, "\u8fd9\u79cd\u7c7b\u578b\u6587\u4ef6\uff0c").concat(r)), e.abrupt("return", !1);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                qe = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        var a, n, r, c, i, l;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.name.split("."), n = a[a.length - 1], r = t.name.replace(".".concat(n), ""), e.prev = 3, e.next = 6, b(t, !0);
                                case 6:
                                    return c = e.sent, e.next = 9, He.parseBlob(c);
                                case 9:
                                    i = e.sent, e.next = 16;
                                    break;
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(3), ge.b.warning("\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u5904\u7406".concat(n, "\u8fd9\u79cd\u7c7b\u578b\u6587\u4ef6\uff0c").concat(r)), e.abrupt("return");
                                case 16:
                                    return e.prev = 16, s = i, (l = {
                                        name: Object(d.get)(s, "common.title", ""),
                                        album: Object(d.get)(s, "common.album", ""),
                                        albumartist: Object(d.get)(s, "common.albumartist", ""),
                                        artist: Object(d.get)(s, "common.artist", ""),
                                        artists: Object(d.get)(s, "common.artists", []),
                                        comment: Object(d.get)(s, "common.comment", []),
                                        date: Object(d.get)(s, "common.date", 0),
                                        picture: Object(d.get)(s, "common.picture", []).map((function(e) {
                                            return "data:".concat(e.format, ";base64,").concat(y(e.data))
                                        })),
                                        codec: Object(d.get)(s, "format.codec", ""),
                                        duration: Object(d.get)(s, "format.duration", 0),
                                        sampleRate: Object(d.get)(s, "format.sampleRate", ""),
                                        lrc: ""
                                    }).fileName = r, l.fileType = n, l.fileSize = Ae()(t.size), l.size = t.size, l.name = l.name || l.fileName || "\u672a\u77e5\u6b4c\u66f2", e.next = 25, me(l, c);
                                case 25:
                                    ge.b.success("".concat(t.name, "  \u4e0a\u4f20\u6210\u529f")), console.log("".concat(t.name, "  \u4e0a\u4f20\u6210\u529f")), Ee.updateLocalMusicList(), e.next = 33;
                                    break;
                                case 30:
                                    e.prev = 30, e.t1 = e.catch(16), ge.b.warning(e.t1);
                                case 33:
                                case "end":
                                    return e.stop()
                            }
                            var s
                        }), e, null, [
                            [3, 12],
                            [16, 30]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Be = function() {
                    var e = Object(p.a)(m.a.mark((function e(t) {
                        var a, n, r, c;
                        return m.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = t.name.split("."), n = a[a.length - 1], r = t.name.replace(".".concat(n), ""), c = "", e.prev = 4, e.next = 7, b(t, !1);
                                case 7:
                                    c = e.sent, e.next = 14;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(4), ge.b.warning("\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u5904\u7406".concat(n, "\u8fd9\u79cd\u7c7b\u578b\u6587\u4ef6\uff0c").concat(r)), e.abrupt("return");
                                case 14:
                                    return e.prev = 14, e.next = 17, ue({
                                        content: c,
                                        fileName: r,
                                        fileType: n,
                                        size: t.size,
                                        fileSize: Ae()(t.size)
                                    });
                                case 17:
                                    Ee.updateLocalMusicLrcList(), ge.b.success("".concat(t.name, "  \u4e0a\u4f20\u6210\u529f")), console.log("".concat(t.name, "  \u4e0a\u4f20\u6210\u529f")), e.next = 25;
                                    break;
                                case 22:
                                    e.prev = 22, e.t1 = e.catch(14), ge.b.warning(e.t1);
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 10],
                            [14, 22]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                _e = function() {
                    return c.a.createElement("section", {
                        className: "page-upload"
                    }, c.a.createElement("section", {
                        className: "upload-line"
                    }, c.a.createElement(Te.a, {
                        beforeUpload: Ke,
                        showUploadList: !1,
                        accept: function() {
                            var e = Se.concat(ze);
                            return (e = e.map((function(e) {
                                return e = ".".concat(e)
                            }))).join(",")
                        }(),
                        multiple: !0
                    }, c.a.createElement(Ce.a, {
                        icon: c.a.createElement(Ue.a, null)
                    }, "\u70b9\u51fb\u4e0a\u4f20\u672c\u5730\u6b4c\u66f2\u6216\u8005\u6b4c\u8bcd")), c.a.createElement("p", {
                        className: "tips"
                    }, c.a.createElement("span", null, "\u652f\u6301\u6b4c\u66f2\u683c\u5f0f ", Se.join("\uff0c")), c.a.createElement("span", null, "\u652f\u6301\u6b4c\u8bcd\u683c\u5f0f ", ze.join("\uff0c")))))
                },
                Je = a(408),
                Ve = a(410),
                Ze = a(406),
                $e = Object(je.a)((function() {
                    var e = [{
                            title: "\u6b4c\u8bcd\u540d",
                            dataIndex: "fileName",
                            key: "fileName"
                        }, {
                            title: "\u5927\u5c0f",
                            dataIndex: "fileSize",
                            key: "fileSize",
                            sorter: function(e, t) {
                                return e.size - t.size
                            }
                        }, {
                            title: "\u64cd\u4f5c",
                            dataIndex: "name",
                            key: "control",
                            render: function(e, t) {
                                return c.a.createElement("p", null, c.a.createElement(Ve.a, {
                                    placement: "topRight",
                                    title: "\u786e\u5b9a\u5220\u9664-".concat(t.fileName, "-\u6b4c\u8bcd\u561b"),
                                    onConfirm: function() {
                                        return n(t.fileName || "")
                                    },
                                    okText: "\u786e\u5b9a",
                                    cancelText: "\u53d6\u6d88"
                                }, c.a.createElement("span", {
                                    className: "link"
                                }, "\u5220\u9664")))
                            }
                        }],
                        t = Ee.localMusicLrcList,
                        a = Ee.localMusicLrcLoading,
                        n = function(e) {
                            Ee.deleteLrc(e)
                        };
                    return Object(r.useEffect)((function() {
                        console.log("\u83b7\u53d6\u6b4c\u8bcd\u5217\u8868"), Ee.updateLocalMusicLrcList()
                    }), []), c.a.createElement("section", {
                        className: "lrc-list"
                    }, c.a.createElement(Ze.a, {
                        dataSource: t,
                        columns: e,
                        pagination: !1,
                        rowKey: "fileName",
                        loading: a
                    }))
                })),
                Ge = a(411),
                Qe = (a(389), a(390), function() {
                    return c.a.createElement("p", {
                        className: "playing-icon"
                    }, c.a.createElement("span", {
                        className: "rect1"
                    }), c.a.createElement("span", {
                        className: "rect2"
                    }), c.a.createElement("span", {
                        className: "rect3"
                    }), c.a.createElement("span", {
                        className: "rect4"
                    }), c.a.createElement("span", {
                        className: "rect5"
                    }))
                }),
                We = Object(je.a)((function() {
                    var e = Ee.musicData,
                        t = Ee.localMusicList,
                        a = Ee.localMusicLoading,
                        n = [{
                            title: "\u6b4c\u66f2",
                            dataIndex: "name",
                            key: "name",
                            width: 300,
                            render: function(t, a) {
                                return c.a.createElement("section", {
                                    className: "list-play"
                                }, (null === e || void 0 === e ? void 0 : e.id) === a.id && e.playing ? c.a.createElement("span", null, c.a.createElement(w.a, {
                                    className: "icon",
                                    onClick: function() {
                                        return l()
                                    }
                                })) : c.a.createElement("span", null, c.a.createElement(x.a, {
                                    className: "icon",
                                    onClick: function() {
                                        return i(a)
                                    }
                                })), c.a.createElement("span", {
                                    className: "song-name"
                                }, t), (null === e || void 0 === e ? void 0 : e.id) === a.id && e.playing ? c.a.createElement(Qe, null) : "")
                            }
                        }, {
                            title: "\u6b4c\u624b",
                            dataIndex: "artist",
                            key: "artist"
                        }, {
                            title: "\u4e13\u8f91",
                            dataIndex: "album",
                            key: "album"
                        }, {
                            title: "\u65f6\u957f",
                            dataIndex: "duration",
                            key: "duration",
                            render: function(e) {
                                return h(e) || "\u672a\u77e5"
                            },
                            sorter: function(e, t) {
                                return Number(e.duration) - Number(t.duration)
                            }
                        }, {
                            title: "\u683c\u5f0f",
                            dataIndex: "codec",
                            key: "codec",
                            render: function(e, t) {
                                return e || t.fileType
                            }
                        }, {
                            title: "\u5927\u5c0f",
                            dataIndex: "fileSize",
                            key: "fileSize",
                            sorter: function(e, t) {
                                return Number(e.size) - Number(t.size)
                            }
                        }, {
                            title: "\u5173\u8054\u6b4c\u8bcd\u540d",
                            dataIndex: "lrcKey",
                            key: "lrcKey",
                            render: function(e, t) {
                                return e || c.a.createElement(Ge.b, {
                                    size: "middle"
                                }, c.a.createElement("span", {
                                    className: "action"
                                }, "\u5173\u8054\u6b4c\u8bcd"))
                            }
                        }, {
                            title: "\u64cd\u4f5c",
                            dataIndex: "name",
                            key: "control",
                            render: function(e, t) {
                                return c.a.createElement("p", null, c.a.createElement(Ve.a, {
                                    placement: "topRight",
                                    title: "\u786e\u5b9a\u5220\u9664-".concat(t.name, "-\u8fd9\u9996\u6b4c\u561b"),
                                    onConfirm: function() {
                                        return s(t.id || "")
                                    },
                                    okText: "\u786e\u5b9a",
                                    cancelText: "\u53d6\u6d88"
                                }, c.a.createElement("span", {
                                    className: "link"
                                }, "\u5220\u9664")))
                            }
                        }],
                        i = function(t) {
                            var a;
                            t.id !== e.id ? (null === (a = Ee.musicPlayer) || void 0 === a || a.stop(), setTimeout((function() {
                                Ee.updatedMusicData({
                                    id: t.id
                                })
                            }), 100)) : Ee.musicPlayer && Ee.musicPlayer.play()
                        },
                        l = function() {
                            var e;
                            null === (e = Ee.musicPlayer) || void 0 === e || e.pause()
                        },
                        s = function(e) {
                            Ee.deleteMusic(e)
                        };
                    return Object(r.useEffect)((function() {
                        console.log("\u83b7\u53d6\u97f3\u4e50\u5217\u8868"), Ee.updateLocalMusicList()
                    }), []), c.a.createElement("section", {
                        className: "lrc-list-table"
                    }, c.a.createElement(Ze.a, {
                        dataSource: t,
                        columns: n,
                        pagination: !1,
                        rowKey: "fileName",
                        loading: a
                    }))
                })),
                Xe = (a(391), Object(je.a)((function() {
                    var e = Ee.localAlbumMap,
                        t = Object(L.a)(e.keys()),
                        a = Ee.musicData;
                    return Object(r.useEffect)((function() {
                        console.log("\u83b7\u53d6\u97f3\u4e50\u5217\u8868"), Ee.updateLocalMusicList()
                    }), []), c.a.createElement("section", {
                        className: "album-list"
                    }, t.map((function(t) {
                        var n = e.get(t),
                            r = n[0];
                        return c.a.createElement("section", {
                            key: t,
                            className: "album-item",
                            style: {
                                backgroundImage: "url(".concat(r.picture || "./images/music-no.jpeg", ")")
                            }
                        }, c.a.createElement("section", {
                            className: "mask"
                        }), c.a.createElement("section", {
                            className: "album-show"
                        }, c.a.createElement("p", {
                            className: "album-title"
                        }, t), c.a.createElement("section", {
                            className: "music-list"
                        }, n.map((function(e) {
                            return c.a.createElement("p", {
                                key: e.name,
                                className: "music-item ".concat(e.id === a.id ? "active" : ""),
                                onClick: function() {
                                    return function(e) {
                                        var t, n;
                                        e.id !== a.id ? (null === (t = Ee.musicPlayer) || void 0 === t || t.stop(), setTimeout((function() {
                                            Ee.updatedMusicData({
                                                id: e.id
                                            })
                                        }), 100)) : Ee.musicPlayer && (null === (n = Ee.musicPlayer) || void 0 === n || n.stop(), Ee.musicPlayer.play())
                                    }(e)
                                }
                            }, c.a.createElement("span", null, e.name))
                        })))))
                    })))
                }))),
                Ye = Je.a.TabPane,
                et = function() {
                    var e = Object(u.f)(),
                        t = new URLSearchParams(Object(u.g)().search),
                        a = Object(u.g)(),
                        n = Object(r.useState)(""),
                        i = Object(f.a)(n, 2),
                        l = i[0],
                        s = i[1],
                        o = function() {
                            var e = Object(p.a)(m.a.mark((function e() {
                                return m.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, new Promise(function() {
                                                var e = Object(p.a)(m.a.mark((function e(t, a) {
                                                    var n, r;
                                                    return m.a.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.prev = 0, e.next = 3, fe();
                                                            case 3:
                                                                return n = e.sent, e.next = 6, oe();
                                                            case 6:
                                                                return r = e.sent, n = n.map((function(e) {
                                                                    return r.forEach((function(t) {
                                                                        t.fileName.includes(e.name) && (e.lrcKey = t.fileName)
                                                                    })), e
                                                                })), e.next = 10, D.a.setItem("music-list", n);
                                                            case 10:
                                                                t("success"), e.next = 16;
                                                                break;
                                                            case 13:
                                                                e.prev = 13, e.t0 = e.catch(0), a(e.t0);
                                                            case 16:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [0, 13]
                                                    ])
                                                })));
                                                return function(t, a) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 2:
                                            ge.b.success("\u5173\u8054\u6210\u529f"), Ee.updateLocalMusicList(), Ee.updateLocalMusicLrcList();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(r.useEffect)((function() {
                        if (t) {
                            var e = t.get("type") || "";
                            ["music", "lrc", "album"].includes(e) ? s(e) : s("album")
                        }
                    }), [t]);
                    return c.a.createElement("section", {
                        className: "page-local"
                    }, c.a.createElement("section", {
                        className: "local-upload"
                    }, c.a.createElement(_e, null), c.a.createElement("section", null, c.a.createElement(Ce.a, {
                        onClick: o
                    }, "\u81ea\u52a8\u5173\u8054\u6b4c\u8bcd"), c.a.createElement(Ve.a, {
                        placement: "topLeft",
                        title: "\u6e05\u7a7a\u6570\u636e\u5e93\u5c31\u65e0\u6cd5\u6062\u590d\u54e6\uff0c\u8c28\u614e\u64cd\u4f5c",
                        onConfirm: function() {
                            D.a.clear(), Ee.updateLocalMusicList(), Ee.updateLocalMusicLrcList()
                        },
                        okText: "\u786e\u5b9a",
                        cancelText: "\u53d6\u6d88"
                    }, c.a.createElement(Ce.a, {
                        style: {
                            marginLeft: "30px"
                        }
                    }, "\u6e05\u7a7a\u6570\u636e\u5e93")), c.a.createElement("p", {
                        className: "tips"
                    }, "\u5173\u8054\u89c4\u5219: \u5f53\u524d\u6b4c\u66f2\u6ca1\u6709\u6b4c\u8bcd\uff0c\u540c\u65f6\u53ef\u4ee5\u627e\u5230\u6b4c\u8bcd\u540d\uff0c\u5305\u542b\u5b8c\u6574\u6b4c\u66f2\u540d"))), c.a.createElement("section", {
                        className: "local-content"
                    }, c.a.createElement(Je.a, {
                        activeKey: l,
                        onChange: function(t) {
                            e.push("".concat(a.pathname, "?type=").concat(t))
                        }
                    }, c.a.createElement(Ye, {
                        tab: "\u4e13\u8f91\u5217\u8868",
                        key: "album"
                    }, c.a.createElement(Xe, null)), c.a.createElement(Ye, {
                        tab: "\u97f3\u4e50\u5217\u8868",
                        key: "music"
                    }, c.a.createElement(We, null)), c.a.createElement(Ye, {
                        tab: "\u6b4c\u8bcd\u5217\u8868",
                        key: "lrc"
                    }, c.a.createElement($e, null)))))
                },
                tt = function() {
                    return c.a.createElement("p", null, "\u6d4b\u8bd5\u5728\u7ebf\u97f3\u4e50\u64ad\u653e")
                },
                at = (a(395), function() {
                    return c.a.createElement("section", {
                        className: "page-home"
                    }, c.a.createElement("section", {
                        className: "wrapper-box"
                    }, c.a.createElement("section", {
                        className: "nav"
                    }, c.a.createElement("p", {
                        className: "nav-item"
                    }, c.a.createElement(s.b, {
                        to: "/"
                    }, "\u672c\u5730\u97f3\u4e50")), c.a.createElement("p", {
                        className: "nav-item"
                    }, c.a.createElement(s.b, {
                        to: "/like",
                        exact: !0
                    }, "\u5728\u7ebf\u97f3\u4e50"))), c.a.createElement("section", {
                        className: "music-box"
                    }, c.a.createElement(u.c, null, c.a.createElement(u.a, {
                        path: "/like",
                        exact: !0
                    }, c.a.createElement(tt, null)), c.a.createElement(u.a, {
                        path: "/",
                        exact: !0
                    }, c.a.createElement(et, null))))), c.a.createElement(Ie, null))
                });
            a(396);
            var nt = function() {
                    return c.a.createElement("section", {
                        className: "hzfe-music"
                    }, c.a.createElement(s.a, null, c.a.createElement(u.c, null, c.a.createElement(u.a, {
                        path: "/",
                        exact: !0
                    }, c.a.createElement(at, null)), c.a.createElement(u.a, {
                        path: "*",
                        exact: !0
                    }, c.a.createElement(at, null)))))
                },
                rt = a(29),
                ct = a(210),
                it = a.n(ct);
            a(397), a(398);
            D.a.config({
                name: "HZFE-MUSIC"
            }), l.a.render(c.a.createElement(rt.a, {
                locale: it.a
            }, c.a.createElement(nt, null)), document.getElementById("root"))
        }
    },
    [
        [215, 1, 2]
    ]
]);
//# sourceMappingURL=main.f501a119.chunk.js.map