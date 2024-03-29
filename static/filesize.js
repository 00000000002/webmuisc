/*
 2020 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 6.1.0
*/
"use strict";
! function(e) {
    var x = /^(b|B)$/,
        M = {
            iec: {
                bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
                bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
            },
            jedec: {
                bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
                bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
            }
        },
        w = {
            iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
            jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
        };

    function t(e) {
        var i, t, o, n, b, r, a, l, s, d, u, c, f, p, B, y = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            g = [],
            v = 0,
            m = void 0,
            h = void 0;
        if (isNaN(e)) throw new TypeError("Invalid number");
        return t = !0 === y.bits, u = !0 === y.unix, i = y.base || 2, d = void 0 !== y.round ? y.round : u ? 1 : 2, r = void 0 !== y.locale ? y.locale : "", a = y.localeOptions || {}, c = void 0 !== y.separator ? y.separator : "", f = void 0 !== y.spacer ? y.spacer : u ? "" : " ", B = y.symbols || {}, p = 2 === i && y.standard || "jedec", s = y.output || "string", n = !0 === y.fullform, b = y.fullforms instanceof Array ? y.fullforms : [], m = void 0 !== y.exponent ? y.exponent : -1, o = 2 < i ? 1e3 : 1024, (l = (h = Number(e)) < 0) && (h = -h), (-1 === m || isNaN(m)) && (m = Math.floor(Math.log(h) / Math.log(o))) < 0 && (m = 0), 8 < m && (m = 8), "exponent" === s ? m : (0 === h ? (g[0] = 0, g[1] = u ? "" : M[p][t ? "bits" : "bytes"][m]) : (v = h / (2 === i ? Math.pow(2, 10 * m) : Math.pow(1e3, m)), t && o <= (v *= 8) && m < 8 && (v /= o, m++), g[0] = Number(v.toFixed(0 < m ? d : 0)), g[0] === o && m < 8 && void 0 === y.exponent && (g[0] = 1, m++), g[1] = 10 === i && 1 === m ? t ? "kb" : "kB" : M[p][t ? "bits" : "bytes"][m], u && (g[1] = "jedec" === p ? g[1].charAt(0) : 0 < m ? g[1].replace(/B$/, "") : g[1], x.test(g[1]) && (g[0] = Math.floor(g[0]), g[1] = ""))), l && (g[0] = -g[0]), g[1] = B[g[1]] || g[1], !0 === r ? g[0] = g[0].toLocaleString() : 0 < r.length ? g[0] = g[0].toLocaleString(r, a) : 0 < c.length && (g[0] = g[0].toString().replace(".", c)), "array" === s ? g : (n && (g[1] = b[m] ? b[m] : w[p][m] + (t ? "bit" : "byte") + (1 === g[0] ? "" : "s")), "object" === s ? {
            value: g[0],
            symbol: g[1],
            exponent: m
        } : g.join(f)))
    }
    t.partial = function(i) {
        return function(e) {
            return t(e, i)
        }
    }, "undefined" != typeof exports ? module.exports = t : "function" == typeof define && void 0 !== define.amd ? define(function() {
        return t
    }) : e.filesize = t
}("undefined" != typeof window ? window : global);
//# sourceMappingURL=filesize.min.js.map