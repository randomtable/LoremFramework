/*! jQuery v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , u = n.push
      , s = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , d = f.toString
      , p = d.call(Object)
      , h = {}
      , g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , v = function e(t) {
        return null != t && t === t.window
    }
      , y = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e,
        n)
            for (i in y)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var x = "3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: x,
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, u = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[u] || {},
        u++),
        "object" == typeof a || g(a) || (a = {}),
        u === s && (a = this,
        u--); u < s; u++)
            if (null != (e = arguments[u]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                    a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && d.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, u = !n; o < a; o++)
                (r = !t(e[o], o)) !== u && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0, u = [];
            if (T(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && u.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && u.push(i);
            return a.apply([], u)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = b(e);
        return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, u, s, l, c, f, d, p, h, g, v, y, m, b, x = "sizzle" + 1 * new Date, w = e.document, C = 0, T = 0, E = ae(), N = ae(), k = ae(), A = function(e, t) {
            return e === t && (f = !0),
            0
        }, D = {}.hasOwnProperty, S = [], L = S.pop, j = S.push, q = S.push, O = S.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", B = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]", M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", W = new RegExp(I + "+","g"), $ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$","g"), F = new RegExp("^" + I + "*," + I + "*"), z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), _ = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]","g"), U = new RegExp(M), V = new RegExp("^" + R + "$"), X = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + M),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)","i"),
            bool: new RegExp("^(?:" + H + ")$","i"),
            needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)","i")
        }, Q = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            d()
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            q.apply(S = O.call(w.childNodes), w.childNodes),
            S[w.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: S.length ? function(e, t) {
                    j.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, u, l, c, f, h, y, m = t && t.ownerDocument, C = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t),
            t = t || p,
            g)) {
                if (11 !== C && (f = K.exec(e)))
                    if (o = f[1]) {
                        if (9 === C) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && b(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return q.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return q.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !k[e + " "] && (!v || !v.test(e))) {
                    if (1 !== C)
                        m = t,
                        y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = x),
                        u = (h = a(e)).length;
                        while (u--)
                            h[u] = "#" + c + " " + ye(h[u]);
                        y = h.join(","),
                        m = J.test(e) && ge(t.parentNode) || t
                    }
                    if (y)
                        try {
                            return q.apply(r, m.querySelectorAll(y)),
                            r
                        } catch (e) {} finally {
                            c === x && t.removeAttribute("id")
                        }
                }
            }
            return s(e.replace($, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            return t
        }
        function ue(e) {
            return e[x] = !0,
            e
        }
        function se(e) {
            var t = p.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function le(e, t) {
            var n = e.split("|")
              , i = n.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return ue(function(t) {
                return t = +t,
                ue(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        d = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== p && 9 === a.nodeType && a.documentElement ? (p = a,
            h = p.documentElement,
            g = !o(p),
            w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            n.attributes = se(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = se(function(e) {
                return e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = G.test(p.getElementsByClassName),
            n.getById = se(function(e) {
                return h.appendChild(e).id = x,
                !p.getElementsByName || !p.getElementsByName(x).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            y = [],
            v = [],
            (n.qsa = G.test(p.querySelectorAll)) && (se(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + H + ")"),
                e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
            }),
            se(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (n.matchesSelector = G.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                y.push("!=", M)
            }),
            v = v.length && new RegExp(v.join("|")),
            y = y.length && new RegExp(y.join("|")),
            t = G.test(h.compareDocumentPosition),
            b = t || G.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], u = [t];
                if (!i || !o)
                    return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    u.unshift(n);
                while (a[r] === u[r])
                    r++;
                return r ? ce(a[r], u[r]) : a[r] === w ? -1 : u[r] === w ? 1 : 0
            }
            ,
            p) : p
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && d(e),
            t = t.replace(_, "='$1']"),
            n.matchesSelector && g && !k[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return oe(t, p, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && d(e),
            b(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(A),
            f) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        }
        ,
        (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, s) {
                        var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, y = u && t.nodeName.toLowerCase(), m = !s && !u, b = !1;
                        if (v) {
                            if (o) {
                                while (g) {
                                    d = t;
                                    while (d = d[g])
                                        if (u ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && m) {
                                b = (p = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2],
                                d = p && v.childNodes[p];
                                while (d = ++p && d && d[g] || (b = p = 0) || h.pop())
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [C, p, b];
                                        break
                                    }
                            } else if (m && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]),
                            !1 === b)
                                while (d = ++p && d && d[g] || (b = p = 0) || h.pop())
                                    if ((u ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) && ++b && (m && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]),
                                    d === t))
                                        break;
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)
                            e[r = P(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: ue(function(e) {
                    var t = []
                      , n = []
                      , r = u(e.replace($, "$1"));
                    return r[x] ? ue(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), u = e.length;
                        while (u--)
                            (o = a[u]) && (e[u] = !(t[u] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: ue(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: ue(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: ue(function(e) {
                    return V.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = de(t);
        function ve() {}
        ve.prototype = r.filters = r.pseudos,
        r.setFilters = new ve,
        a = oe.tokenize = function(e, t) {
            var n, i, o, a, u, s, l, c = N[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            u = e,
            s = [],
            l = r.preFilter;
            while (u) {
                n && !(i = F.exec(u)) || (i && (u = u.slice(i[0].length) || u),
                s.push(o = [])),
                n = !1,
                (i = z.exec(u)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace($, " ")
                }),
                u = u.slice(n.length));
                for (a in r.filter)
                    !(i = X[a].exec(u)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    u = u.slice(n.length));
                if (!n)
                    break
            }
            return t ? u.length : u ? oe.error(e) : N(e, s).slice(0)
        }
        ;
        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , u = T++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, s) {
                var l, c, f, d = [C, u];
                if (s) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, s))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[x] || (t[x] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === C && l[1] === u)
                                    return d[2] = l[2];
                                if (c[o] = d,
                                d[2] = e(t, n, s))
                                    return !0
                            }
                return !1
            }
        }
        function be(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function xe(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++)
                (o = e[u]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(u)));
            return a
        }
        function Ce(e, t, n, r, i, o) {
            return r && !r[x] && (r = Ce(r)),
            i && !i[x] && (i = Ce(i, o)),
            ue(function(o, a, u, s) {
                var l, c, f, d = [], p = [], h = a.length, g = o || xe(t || "*", u.nodeType ? [u] : u, []), v = !e || !o && t ? g : we(g, d, e, u, s), y = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, y, u, s),
                r) {
                    l = we(y, p),
                    r(l, [], u, s),
                    c = l.length;
                    while (c--)
                        (f = l[c]) && (y[p[c]] = !(v[p[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = y.length;
                            while (c--)
                                (f = y[c]) && l.push(v[c] = f);
                            i(null, y = [], l, s)
                        }
                        c = y.length;
                        while (c--)
                            (f = y[c]) && (l = i ? P(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    y = we(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, s) : q.apply(a, y)
            })
        }
        function Te(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], u = a || r.relative[" "], s = a ? 1 : 0, c = me(function(e) {
                return e === t
            }, u, !0), f = me(function(e) {
                return P(t, e) > -1
            }, u, !0), d = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; s < o; s++)
                if (n = r.relative[e[s].type])
                    d = [me(be(d), n)];
                else {
                    if ((n = r.filter[e[s].type].apply(null, e[s].matches))[x]) {
                        for (i = ++s; i < o; i++)
                            if (r.relative[e[i].type])
                                break;
                        return Ce(s > 1 && be(d), s > 1 && ye(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), n, s < i && Te(e.slice(s, i)), i < o && Te(e = e.slice(i)), i < o && ye(e))
                    }
                    d.push(n)
                }
            return be(d)
        }
        function Ee(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , o = function(o, a, u, s, c) {
                var f, h, v, y = 0, m = "0", b = o && [], x = [], w = l, T = o || i && r.find.TAG("*", c), E = C += null == w ? 1 : Math.random() || .1, N = T.length;
                for (c && (l = a === p || a || c); m !== N && null != (f = T[m]); m++) {
                    if (i && f) {
                        h = 0,
                        a || f.ownerDocument === p || (d(f),
                        u = !g);
                        while (v = e[h++])
                            if (v(f, a || p, u)) {
                                s.push(f);
                                break
                            }
                        c && (C = E)
                    }
                    n && ((f = !v && f) && y--,
                    o && b.push(f))
                }
                if (y += m,
                n && m !== y) {
                    h = 0;
                    while (v = t[h++])
                        v(b, x, a, u);
                    if (o) {
                        if (y > 0)
                            while (m--)
                                b[m] || x[m] || (x[m] = L.call(s));
                        x = we(x)
                    }
                    q.apply(s, x),
                    c && !o && x.length > 0 && y + t.length > 1 && oe.uniqueSort(s)
                }
                return c && (C = E,
                l = w),
                b
            };
            return n ? ue(o) : o
        }
        return u = oe.compile = function(e, t) {
            var n, r = [], i = [], o = k[e + " "];
            if (!o) {
                t || (t = a(e)),
                n = t.length;
                while (n--)
                    (o = Te(t[n]))[x] ? r.push(o) : i.push(o);
                (o = k(e, Ee(i, r))).selector = e
            }
            return o
        }
        ,
        s = oe.select = function(e, t, n, i) {
            var o, s, l, c, f, d = "function" == typeof e && e, p = !i && a(e = d.selector || e);
            if (n = n || [],
            1 === p.length) {
                if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && g && r.relative[s[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    d && (t = t.parentNode),
                    e = e.slice(s.shift().value.length)
                }
                o = X.needsContext.test(e) ? 0 : s.length;
                while (o--) {
                    if (l = s[o],
                    r.relative[c = l.type])
                        break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), J.test(s[0].type) && ge(t.parentNode) || t))) {
                        if (s.splice(o, 1),
                        !(e = i.length && ye(s)))
                            return q.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return (d || u(e, p))(i, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = x.split("").sort(A).join("") === x,
        n.detectDuplicates = !!f,
        d(),
        n.sortDetached = se(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
        }),
        se(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && se(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        se(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(H, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(e);
    w.find = E,
    w.expr = E.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = E.uniqueSort,
    w.text = E.getText,
    w.isXMLDoc = E.isXML,
    w.contains = E.contains,
    w.escapeSelector = E.escape;
    var N = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , k = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , A = w.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function L(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return s.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(L(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(L(this, e || [], !0))
        },
        is: function(e) {
            return !!L(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                S.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    j = w(r);
    var O = /^(?:parents|prev(?:Until|All))/
      , P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!A.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function H(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return N(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return N(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return N(e, "nextSibling")
        },
        prevAll: function(e) {
            return N(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return N(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return N(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 && (P[e] || w.uniqueSort(i),
            O.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var I = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(I) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], u = -1, s = function() {
            for (i = i || e.once,
            r = t = !0; a.length; u = -1) {
                n = a.shift();
                while (++u < o.length)
                    !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length,
                    n = !1)
            }
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (u = o.length - 1,
                a.push(n)),
                function t(n) {
                    w.each(n, function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                    })
                }(arguments),
                n && !t && s()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1)
                        o.splice(n, 1),
                        n <= u && u--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || s()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ;
    function B(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var u = this
                              , s = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(u, s)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(l) ? i ? l.call(e, a(o, n, B, i), a(o, n, M, i)) : (o++,
                                    l.call(e, a(o, n, B, i), a(o, n, M, i), a(o, n, B, n.notifyWith))) : (r !== B && (u = void 0,
                                    s = [e]),
                                    (i || n.resolveWith)(u, s))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== M && (u = void 0,
                                    s = [e]),
                                    n.rejectWith(u, s))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : B, e.notifyWith)),
                        n[1][3].add(a(0, e, g(t) ? t : B)),
                        n[2][3].add(a(0, e, g(r) ? r : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i
                }
            }
              , o = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , u = t[5];
                i[t[1]] = a.add,
                u && a.add(function() {
                    r = u
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = w.Deferred()
              , u = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && (W(e, a.done(u(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then)))
                return a.then();
            while (n--)
                W(i[n], u(n), a.reject);
            return a.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && $.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }),
    w.ready.then = F.then;
    function z() {
        r.removeEventListener("DOMContentLoaded", z),
        e.removeEventListener("load", z),
        w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", z),
    e.addEventListener("load", z));
    var _ = function(e, t, n, r, i, o, a) {
        var u = 0
          , s = e.length
          , l = null == n;
        if ("object" === b(n)) {
            i = !0;
            for (u in n)
                _(e, t, u, n[u], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(w(e), n)
        }
        )),
        t))
            for (; u < s; u++)
                t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
        return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
    }
      , U = /^-ms-/
      , V = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function Q(e) {
        return e.replace(U, "ms-").replace(V, X)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = w.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[Q(t)] = n;
            else
                for (r in t)
                    i[Q(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t))in r ? [t] : t.match(I) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var K = new G
      , J = new G
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return J.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = J.get(o),
                1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--)
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Q(r.slice(5)),
                        ne(o, r, i[r]));
                    K.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                J.set(this, e)
            }) : _(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = J.get(o, e)))
                        return n;
                    if (void 0 !== (n = ne(o, e)))
                        return n
                } else
                    this.each(function() {
                        J.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = K.get(e, t),
                n && (!r || Array.isArray(n) ? r = K.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = w._queueHooks(e, t)
              , a = function() {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, u = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = K.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(u));
            return u(),
            i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
      , oe = ["Top", "Right", "Bottom", "Left"]
      , ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    function se(e, t, n, r) {
        var i, o, a = 20, u = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , s = u(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +s) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            s /= 2,
            l = l || c[3],
            c = +s || 1;
            while (a--)
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = u() / s || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            w.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +s || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        le[r] = i,
        i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = K.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
            K.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i
      , pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && D(e, t) ? w.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function be(e, t, n, r, i) {
        for (var o, a, u, s, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === b(o))
                    w.merge(d, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    u = (pe.exec(o) || ["", ""])[1].toLowerCase(),
                    s = ge[u] || ge._default,
                    a.innerHTML = s[1] + w.htmlPrefilter(o) + s[2],
                    c = s[0];
                    while (c--)
                        a = a.lastChild;
                    w.merge(d, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        f.textContent = "",
        p = 0;
        while (o = d[p++])
            if (r && w.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var xe = r.documentElement
      , we = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function Ne() {
        return !1
    }
    function ke() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function Ae(e, t, n, r, i, o) {
        var a, u;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (u in t)
                Ae(e, u, n, r, t[u], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ne;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = K.get(e);
            if (v) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && w.find.matchesSelector(xe, i),
                n.guid || (n.guid = w.guid++),
                (s = v.events) || (s = v.events = {}),
                (a = v.handle) || (a = v.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(I) || [""]).length;
                while (l--)
                    p = g = (u = Te.exec(t[l]) || [])[1],
                    h = (u[2] || "").split(".").sort(),
                    p && (f = w.event.special[p] || {},
                    p = (i ? f.delegateType : f.bindType) || p,
                    f = w.event.special[p] || {},
                    c = w.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (d = s[p]) || ((d = s[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    w.event.global[p] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = K.hasData(e) && K.get(e);
            if (v && (s = v.events)) {
                l = (t = (t || "").match(I) || [""]).length;
                while (l--)
                    if (u = Te.exec(t[l]) || [],
                    p = g = u[1],
                    h = (u[2] || "").split(".").sort(),
                    p) {
                        f = w.event.special[p] || {},
                        d = s[p = (r ? f.delegateType : f.bindType) || p] || [],
                        u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length;
                        while (o--)
                            c = d[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, p, v.handle),
                        delete s[p])
                    } else
                        for (p in s)
                            w.event.remove(e, p + t[l], n, r, !0);
                w.isEmptyObject(s) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e), n, r, i, o, a, u, s = new Array(arguments.length), l = (K.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (s[0] = t,
            n = 1; n < arguments.length; n++)
                s[n] = arguments[n];
            if (t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                u = w.event.handlers.call(this, t, l),
                n = 0;
                while ((o = u[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem,
                    r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, s)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, u = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < s; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && u.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            s < t.length && u.push({
                elem: l,
                handlers: t.slice(s)
            }),
            u
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ke() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ke() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && D(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ne,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ne),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Se = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Pe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function He(e, t) {
        var n, r, i, o, a, u, s, l;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (o = K.access(e),
            a = K.set(t, o),
            l = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n])
            }
            J.hasData(e) && (u = J.access(e),
            s = w.extend({}, u),
            J.set(t, s))
        }
    }
    function Ie(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, u, s, l, c, f = 0, d = e.length, p = d - 1, v = t[0], y = g(v);
        if (y || d > 1 && "string" == typeof v && !h.checkClone && Le.test(v))
            return e.each(function(i) {
                var o = e.eq(i);
                y && (t[0] = v.call(this, i, o.html())),
                Re(o, t, n, r)
            });
        if (d && (i = be(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (s = (u = w.map(ve(i, "script"), Oe)).length; f < d; f++)
                l = i,
                f !== p && (l = w.clone(l, !0, !0),
                s && w.merge(u, ve(l, "script"))),
                n.call(e[f], l, f);
            if (s)
                for (c = u[u.length - 1].ownerDocument,
                w.map(u, Pe),
                f = 0; f < s; f++)
                    l = u[f],
                    he.test(l.type || "") && !K.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(je, ""), c, l))
        }
        return e
    }
    function Be(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ve(r)),
            r.parentNode && (n && w.contains(r.ownerDocument, r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(De, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, u = e.cloneNode(!0), s = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ve(u),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    Ie(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(u),
                    r = 0,
                    i = o.length; r < i; r++)
                        He(o[r], a[r]);
                else
                    He(e, u);
            return (a = ve(u, "script")).length > 0 && ye(a, !s && ve(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[K.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ve(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                w(i[a])[t](n),
                u.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
      , We = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , $e = new RegExp(oe.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                xe.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                s = 12 === n(t.marginLeft),
                c.style.right = "60%",
                u = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                a = 36 === c.offsetWidth || "absolute",
                xe.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, u, s, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                u
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                s
            },
            scrollboxSize: function() {
                return t(),
                a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, u = e.style;
        return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() && Me.test(a) && $e.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = a,
        a = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var _e = /^(none|table(?!-c[ea]).+)/
      , Ue = /^--/
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Xe = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Qe = ["Webkit", "Moz", "ms"]
      , Ye = r.createElement("div").style;
    function Ge(e) {
        if (e in Ye)
            return e;
        var t = e[0].toUpperCase() + e.slice(1)
          , n = Qe.length;
        while (n--)
            if ((e = Qe[n] + t)in Ye)
                return e
    }
    function Ke(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Ge(e) || e),
        t
    }
    function Je(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , u = 0
          , s = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (s += w.css(e, n + oe[a], !0, i)),
            r ? ("content" === n && (s -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n && (s -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (s += w.css(e, "padding" + oe[a], !0, i),
            "padding" !== n ? s += w.css(e, "border" + oe[a] + "Width", !0, i) : u += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - u - .5))),
        s
    }
    function et(e, t, n) {
        var r = We(e)
          , i = Fe(e, t, r)
          , o = "border-box" === w.css(e, "boxSizing", !1, r)
          , a = o;
        if (Me.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, u = Q(t), s = Ue.test(t), l = e.style;
                if (s || (t = Ke(u)),
                a = w.cssHooks[t] || w.cssHooks[u],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[u] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, u = Q(t);
            return Ue.test(t) || (t = Ke(u)),
            (a = w.cssHooks[t] || w.cssHooks[u]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Xe && (i = Xe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !_e.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ue(e, Ve, function() {
                        return et(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = We(e), a = "border-box" === w.css(e, "boxSizing", !1, o), u = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Je(e, n, u)
            }
        }
    }),
    w.cssHooks.marginLeft = ze(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Je)
    }),
    w.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = We(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var tt, nt = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return _(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? tt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(I);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    tt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = nt[t] || w.find.attr;
        nt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = nt[a],
            nt[a] = i,
            i = null != n(e, t, r) ? a : null,
            nt[a] = o),
            i
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i
      , it = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return _(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                i = w.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    function ot(e) {
        return (e.match(I) || []).join(" ")
    }
    function at(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function ut(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(I) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, u, s = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, at(this)))
                });
            if ((t = ut(e)).length)
                while (n = this[s++])
                    if (i = at(n),
                    r = 1 === n.nodeType && " " + ot(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (u = ot(r)) && n.setAttribute("class", u)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, u, s = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, at(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = ut(e)).length)
                while (n = this[s++])
                    if (i = at(n),
                    r = 1 === n.nodeType && " " + ot(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (u = ot(r)) && n.setAttribute("class", u)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, at(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0,
                    o = w(this),
                    a = ut(e);
                    while (t = a[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    void 0 !== e && "boolean" !== n || ((t = at(this)) && K.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + ot(at(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var st = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = g(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(st, "") : null == n ? "" : n
            }
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : ot(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, u = a ? null : [], s = a ? o + 1 : i.length;
                    for (r = o < 0 ? s : a ? o : 0; r < s; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            u.push(t)
                        }
                    return u
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var lt = /^(?:focusinfocus|focusoutblur)$/
      , ct = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, u, s, l, c, d, p, h, y = [i || r], m = f.call(t, "type") ? t.type : t, b = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = h = s = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !lt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (b = m.split(".")).shift(),
            b.sort()),
            c = m.indexOf(":") < 0 && "on" + m,
            t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : w.makeArray(n, [t]),
            p = w.event.special[m] || {},
            o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!o && !p.noBubble && !v(i)) {
                    for (l = p.delegateType || m,
                    lt.test(l + m) || (u = u.parentNode); u; u = u.parentNode)
                        y.push(u),
                        s = u;
                    s === (i.ownerDocument || r) && y.push(s.defaultView || s.parentWindow || e)
                }
                a = 0;
                while ((u = y[a++]) && !t.isPropagationStopped())
                    h = u,
                    t.type = a > 1 ? l : p.bindType || m,
                    (d = (K.get(u, "events") || {})[t.type] && K.get(u, "handle")) && d.apply(u, n),
                    (d = c && u[c]) && d.apply && Y(u) && (t.result = d.apply(u, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !Y(i) || c && g(i[m]) && !v(i) && ((s = i[c]) && (i[c] = null),
                w.event.triggered = m,
                t.isPropagationStopped() && h.addEventListener(m, ct),
                i[m](),
                t.isPropagationStopped() && h.removeEventListener(m, ct),
                w.event.triggered = void 0,
                s && (i[c] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = K.access(r, t);
                i || r.addEventListener(e, n, !0),
                K.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = K.access(r, t) - 1;
                i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0),
                K.remove(r, t))
            }
        }
    });
    var ft = /\[\]$/
      , dt = /\r?\n/g
      , pt = /^(?:submit|button|image|reset|file)$/i
      , ht = /^(?:input|select|textarea|keygen)/i;
    function gt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function(t, i) {
                n || ft.test(e) ? r(e, i) : gt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== b(t))
            r(e, t);
        else
            for (i in t)
                gt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                gt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && ht.test(this.nodeName) && !pt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(dt, "\r\n")
                }
            }).get()
        }
    }),
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        o = S.exec(e),
        a = !n && [],
        o ? [t.createElement(o[1])] : (o = be([e], t, a),
        a && a.length && w(a).remove(),
        w.merge([], o.childNodes))
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, u, s, l, c = w.css(e, "position"), f = w(e), d = {};
            "static" === c && (e.style.position = "relative"),
            u = f.offset(),
            o = w.css(e, "top"),
            s = w.css(e, "left"),
            (l = ("absolute" === c || "fixed" === c) && (o + s).indexOf("auto") > -1) ? (a = (r = f.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(s) || 0),
            g(t) && (t = t.call(e, n, w.extend({}, u))),
            null != t.top && (d.top = t.top - u.top + a),
            null != t.left && (d.left = t.left - u.left + i),
            "using"in t ? t.using.call(e, d) : f.css(d)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            if (r)
                return r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position"))
                    e = e.offsetParent;
                return e || xe
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return _(this, function(e, r, i) {
                var o;
                if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = ze(h.pixelPosition, function(e, n) {
            if (n)
                return n = Fe(e, t),
                Me.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , u = n || (!0 === i || !0 === o ? "margin" : "border");
                return _(this, function(t, n, i) {
                    var o;
                    return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, u) : w.style(t, n, i, u)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = o.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || w.guid++,
            i
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = D,
    w.isFunction = g,
    w.isWindow = v,
    w.camelCase = Q,
    w.type = b,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var vt = e.jQuery
      , yt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = yt),
        t && e.jQuery === w && (e.jQuery = vt),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }
    function p(e) {
        if (!e)
            return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = o ? e : t
          , i = o ? t : e
          , r = document.createRange();
        r.setStart(n, 0),
        r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))
            return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = l(t, 'top')
          , i = l(t, 'left')
          , r = o ? -1 : 1;
        return e.top += n * r,
        e.bottom += n * r,
        e.left += i * r,
        e.right += i * r,
        e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }
    function h(e, t, o, n) {
        return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }
    function c() {
        var e = document.body
          , t = document.documentElement
          , o = r(10) && getComputedStyle(t);
        return {
            height: h('Height', e, t, o),
            width: h('Width', e, t, o)
        }
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top')
                  , i = l(e, 'left');
                o.top += n,
                o.left += i,
                o.bottom += n,
                o.right += i
            } else
                o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , s = 'HTML' === e.nodeName ? c() : {}
          , d = s.width || e.clientWidth || p.right - p.left
          , a = s.height || e.clientHeight || p.bottom - p.top
          , f = e.offsetWidth - d
          , h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'),
            h -= m(u, 'y'),
            p.width -= f,
            p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , p = r(10)
          , s = 'HTML' === o.nodeName
          , d = u(e)
          , a = u(o)
          , l = n(e)
          , m = t(o)
          , h = parseFloat(m.borderTopWidth, 10)
          , c = parseFloat(m.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (a.top = $(a.top, 0),
        a.left = $(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0,
        b.marginLeft = 0,
        !p && s) {
            var y = parseFloat(m.marginTop, 10)
              , w = parseFloat(m.marginLeft, 10);
            b.top -= h - y,
            b.bottom -= h - y,
            b.left -= c - w,
            b.right -= c - w,
            b.marginTop = y,
            b.marginLeft = w
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
        b
    }
    function y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = e.ownerDocument.documentElement
          , n = b(e, o)
          , i = $(o.clientWidth, window.innerWidth || 0)
          , r = $(o.clientHeight, window.innerHeight || 0)
          , p = t ? 0 : l(o)
          , s = t ? 0 : l(o, 'left')
          , d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }
    function w(e) {
        var n = e.nodeName;
        return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
    }
    function E(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
            o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , s = {
            top: 0,
            left: 0
        }
          , d = p ? E(e) : a(e, t);
        if ('viewport' === r)
            s = y(d, p);
        else {
            var l;
            'scrollParent' === r ? (l = n(o(t)),
            'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ('HTML' === l.nodeName && !w(d)) {
                var m = c()
                  , h = m.height
                  , g = m.width;
                s.top += f.top - f.marginTop,
                s.bottom = h + f.top,
                s.left += f.left - f.marginLeft,
                s.right = g + f.left
            } else
                s = f
        }
        return s.left += i,
        s.top += i,
        s.right -= i,
        s.bottom -= i,
        s
    }
    function x(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = v(o, n, r, i)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        })
          , l = 0 < a.length ? a[0].key : d[0].key
          , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , i = n ? E(t) : a(t, o);
        return b(o, i, n)
    }
    function S(e) {
        var t = getComputedStyle(e)
          , o = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , n = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
          , i = {
            width: e.offsetWidth + n,
            height: e.offsetHeight + o
        };
        return i
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e)
          , i = {
            width: n.width,
            height: n.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2,
        i[s] = o === s ? t[s] - n[a] : t[T(s)],
        i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
            o.offsets.reference = g(o.offsets.reference),
            o = n(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
            e = P(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , n = e.enabled;
            return n && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])
                return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style.left = '',
        this.popper.style.right = '',
        this.popper.style.bottom = '',
        this.popper.style.willChange = '',
        this.popper.style[B('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function I(e, t, o, i) {
        o.updateBound = i,
        A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function F() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
            e.style[o] = t[o] + n
        })
    }
    function K(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t
        })
          , i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function G(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function z(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = me.indexOf(e)
          , n = me.slice(o + 1).concat(me.slice(0, o));
        return t ? n.reverse() : n
    }
    function V(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +i[1]
          , p = i[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function _(e, t, o, n) {
        var i = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(n)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return V(e, i, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }),
        i
    }
    function X(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : _(n, p, s, d),
        'left' === d ? (p.top += o[0],
        p.left -= o[1]) : 'right' === d ? (p.top += o[0],
        p.left += o[1]) : 'top' === d ? (p.left += o[0],
        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
        p.top += o[1]),
        e.popper = p,
        e
    }
    for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
        if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
            oe = 1;
            break
        }
    var i = ee && window.Promise
      , ie = i ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, oe))
        }
    }
      , re = ee && !!(window.MSInputMethodContext && document.documentMode)
      , pe = ee && /MSIE 10/.test(navigator.userAgent)
      , se = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
      , de = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }
      , le = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var n in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
      , fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
      , me = fe.slice(3)
      , he = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }
      , ce = function() {
        function t(o, n) {
            var i = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = ie(this.update.bind(this)),
            this.options = le({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o && o.jquery ? o[0] : o,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return de(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return H.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return F.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return U.call(this)
            }
        }]),
        t
    }();
    return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    ce.placements = fe,
    ce.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets
                          , r = i.reference
                          , p = i.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: X,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform')
                      , i = e.instance.popper.style
                      , r = i.top
                      , s = i.left
                      , d = i[n];
                    i.top = '',
                    i.left = '',
                    i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r,
                    i.left = s,
                    i[n] = d,
                    t.boundaries = a;
                    var l = t.priority
                      , f = e.offsets.popper
                      , m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])),
                            ae({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))),
                            ae({}, o, n)
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }),
                    e.offsets.popper = f,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , n = t.reference
                      , i = e.placement.split('-')[0]
                      , r = Z
                      , p = -1 !== ['top', 'bottom'].indexOf(i)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!q(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i),
                        !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var r = e.placement.split('-')[0]
                      , p = e.offsets
                      , s = p.popper
                      , d = p.reference
                      , a = -1 !== ['left', 'right'].indexOf(r)
                      , l = a ? 'height' : 'width'
                      , f = a ? 'Top' : 'Left'
                      , m = f.toLowerCase()
                      , h = a ? 'left' : 'top'
                      , c = a ? 'bottom' : 'right'
                      , u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2
                      , y = t(e.instance.popper)
                      , w = parseFloat(y['margin' + f], 10)
                      , E = parseFloat(y['border' + f + 'Width'], 10)
                      , v = b - e.offsets.popper[m] - w - E;
                    return v = $(J(s[l] - u, v), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (n = {},
                    ae(n, m, Q(v)),
                    ae(n, h, ''),
                    n),
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split('-')[0]
                      , i = T(n)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case he.FLIP:
                        p = [n, i];
                        break;
                    case he.CLOCKWISE:
                        p = z(n);
                        break;
                    case he.COUNTERCLOCKWISE:
                        p = z(n, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1)
                            return e;
                        n = e.placement.split('-')[0],
                        i = T(n);
                        var a = e.offsets.popper
                          , l = e.offsets.reference
                          , f = Z
                          , m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
                          , h = f(a.left) < f(o.left)
                          , c = f(a.right) > f(o.right)
                          , g = f(a.top) < f(o.top)
                          , u = f(a.bottom) > f(o.bottom)
                          , b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
                          , y = -1 !== ['top', 'bottom'].indexOf(n)
                          , w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0,
                        (m || b) && (n = p[d + 1]),
                        w && (r = G(r)),
                        e.placement = n + (r ? '-' + r : ''),
                        e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
                        e = P(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = e.offsets
                      , i = n.popper
                      , r = n.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
                    e.placement = T(t),
                    e.offsets.popper = g(i),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!q(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = D(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , n = t.y
                      , i = e.offsets.popper
                      , r = D(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = {
                        left: Z(i.left),
                        top: Q(i.top),
                        bottom: Q(i.bottom),
                        right: Z(i.right)
                    }, c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? -f.height + h.bottom : h.top,
                    s = 'right' == g ? -f.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[g] = 0,
                        m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1
                          , w = 'right' == g ? -1 : 1;
                        m[c] = d * y,
                        m[g] = s * w,
                        m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes),
                    e.styles = le({}, m, e.styles),
                    e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return j(e.instance.popper, e.styles),
                    K(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed)
                      , p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    j(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ce
});
//# sourceMappingURL=popper.min.js.map
/*!
  * Bootstrap v4.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, h) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function l(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {}
              , e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                return Object.getOwnPropertyDescriptor(o, t).enumerable
            }))),
            e.forEach(function(t) {
                var e, n, i;
                e = r,
                i = o[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return r
    }
    e = e && e.hasOwnProperty("default") ? e.default : e,
    h = h && h.hasOwnProperty("default") ? h.default : h;
    var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function(i) {
        var e = "transitionend";
        function t(t) {
            var e = this
              , n = !1;
            return i(this).one(l.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || l.triggerTransitionEnd(e)
            }, t),
            this
        }
        var l = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                for (; t += ~~(1e6 * Math.random()),
                document.getElementById(t); )
                    ;
                return t
            },
            getSelectorFromElement: function(t) {
                var e = t.getAttribute("data-target")
                  , n = "querySelector";
                e && "#" !== e || (e = (t.getAttribute("href") || "").trim());
                var i = e;
                "#" === e.charAt(0) && -1 === e.indexOf(",") && (e = e.substr(1),
                n = "getElementById");
                try {
                    return document[n](e) ? i : null
                } catch (t) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t)
                    return 0;
                var e = i(t).css("transition-duration");
                return parseFloat(e) ? (e = e.split(",")[0],
                1e3 * parseFloat(e)) : 0
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(t) {
                i(t).trigger(e)
            },
            supportsTransitionEnd: function() {
                return Boolean(e)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i]
                          , o = e[i]
                          , s = o && l.isElement(o) ? "element" : (a = o,
                        {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                        if (!new RegExp(r).test(s))
                            throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
                var a
            }
        };
        return i.fn.emulateTransitionEnd = t,
        i.event.special[l.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function(t) {
                if (i(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        },
        l
    }(e), Kn = (n = "alert",
    a = "." + (o = "bs.alert"),
    c = (r = e).fn[n],
    u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    },
    f = "alert",
    d = "fade",
    g = "show",
    _ = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        t.dispose = function() {
            r.removeData(this._element, o),
            this._element = null
        }
        ,
        t._getRootElement = function(t) {
            var e = Fn.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = r(t).closest("." + f)[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e),
            e
        }
        ,
        t._removeElement = function(e) {
            var n = this;
            if (r(e).removeClass(g),
            r(e).hasClass(d)) {
                var t = Fn.getTransitionDurationFromElement(e);
                r(e).one(Fn.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(t) {
            r(t).detach().trigger(u.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = r(this)
                  , e = t.data(o);
                e || (e = new i(this),
                t.data(o, e)),
                "close" === n && e[n](this)
            })
        }
        ,
        i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        i
    }(),
    r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)),
    r.fn[n] = _._jQueryInterface,
    r.fn[n].Constructor = _,
    r.fn[n].noConflict = function() {
        return r.fn[n] = c,
        _._jQueryInterface
    }
    ,
    _), Mn = (p = "button",
    y = "." + (v = "bs.button"),
    E = ".data-api",
    C = (m = e).fn[p],
    T = "active",
    b = "btn",
    I = '[data-toggle^="button"]',
    A = '[data-toggle="buttons"]',
    D = "input",
    w = ".active",
    N = ".btn",
    O = {
        CLICK_DATA_API: "click" + y + E,
        FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E
    },
    k = function() {
        function n(t) {
            this._element = t
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0
              , e = !0
              , n = m(this._element).closest(A)[0];
            if (n) {
                var i = this._element.querySelector(D);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(T))
                            t = !1;
                        else {
                            var r = n.querySelector(w);
                            r && m(r).removeClass(T)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(T),
                        m(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)),
            t && m(this._element).toggleClass(T)
        }
        ,
        t.dispose = function() {
            m.removeData(this._element, v),
            this._element = null
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = m(this).data(v);
                t || (t = new n(this),
                m(this).data(v, t)),
                "toggle" === e && t[e]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        n
    }(),
    m(document).on(O.CLICK_DATA_API, I, function(t) {
        t.preventDefault();
        var e = t.target;
        m(e).hasClass(b) || (e = m(e).closest(N)),
        k._jQueryInterface.call(m(e), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, I, function(t) {
        var e = m(t.target).closest(N)[0];
        m(e).toggleClass(S, /^focus(in)?$/.test(t.type))
    }),
    m.fn[p] = k._jQueryInterface,
    m.fn[p].Constructor = k,
    m.fn[p].noConflict = function() {
        return m.fn[p] = C,
        k._jQueryInterface
    }
    ,
    k), Qn = (j = "carousel",
    L = "." + (H = "bs.carousel"),
    R = ".data-api",
    x = (P = e).fn[j],
    W = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    },
    U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    },
    q = "next",
    F = "prev",
    K = "left",
    M = "right",
    Q = {
        SLIDE: "slide" + L,
        SLID: "slid" + L,
        KEYDOWN: "keydown" + L,
        MOUSEENTER: "mouseenter" + L,
        MOUSELEAVE: "mouseleave" + L,
        TOUCHEND: "touchend" + L,
        LOAD_DATA_API: "load" + L + R,
        CLICK_DATA_API: "click" + L + R
    },
    B = "carousel",
    V = "active",
    Y = "slide",
    z = "carousel-item-right",
    J = "carousel-item-left",
    Z = "carousel-item-next",
    G = "carousel-item-prev",
    $ = ".active",
    X = ".active.carousel-item",
    tt = ".carousel-item",
    et = ".carousel-item-next, .carousel-item-prev",
    nt = ".carousel-indicators",
    it = "[data-slide], [data-slide-to]",
    rt = '[data-ride="carousel"]',
    ot = function() {
        function o(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._config = this._getConfig(e),
            this._element = P(t)[0],
            this._indicatorsElement = this._element.querySelector(nt),
            this._addEventListeners()
        }
        var t = o.prototype;
        return t.next = function() {
            this._isSliding || this._slide(q)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(F)
        }
        ,
        t.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(X);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    P(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = n < t ? q : F;
                    this._slide(i, this._items[t])
                }
        }
        ,
        t.dispose = function() {
            P(this._element).off(L),
            P.removeData(this._element, H),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, W, t),
            Fn.typeCheckConfig(j, t, U),
            t
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(Q.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            "ontouchstart"in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
                e.pause(),
                e.touchTimeout && clearTimeout(e.touchTimeout),
                e.touchTimeout = setTimeout(function(t) {
                    return e.cycle(t)
                }, 500 + e._config.interval)
            }))
        }
        ,
        t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [],
            this._items.indexOf(t)
        }
        ,
        t._getItemByDirection = function(t, e) {
            var n = t === q
              , i = t === F
              , r = this._getItemIndex(e)
              , o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap)
                return e;
            var s = (r + (t === F ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector(X))
              , r = P.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return P(this._element).trigger(r),
            r
        }
        ,
        t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                P(e).removeClass(V);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && P(n).addClass(V)
            }
        }
        ,
        t._slide = function(t, e) {
            var n, i, r, o = this, s = this._element.querySelector(X), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (t === q ? (n = J,
            i = Z,
            r = K) : (n = z,
            i = G,
            r = M),
            l && P(l).hasClass(V))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(l);
                var u = P.Event(Q.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: c
                });
                if (P(this._element).hasClass(Y)) {
                    P(l).addClass(i),
                    Fn.reflow(l),
                    P(s).addClass(n),
                    P(l).addClass(n);
                    var f = Fn.getTransitionDurationFromElement(s);
                    P(s).one(Fn.TRANSITION_END, function() {
                        P(l).removeClass(n + " " + i).addClass(V),
                        P(s).removeClass(V + " " + i + " " + n),
                        o._isSliding = !1,
                        setTimeout(function() {
                            return P(o._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(f)
                } else
                    P(s).removeClass(V),
                    P(l).addClass(V),
                    this._isSliding = !1,
                    P(this._element).trigger(u);
                h && this.cycle()
            }
        }
        ,
        o._jQueryInterface = function(i) {
            return this.each(function() {
                var t = P(this).data(H)
                  , e = l({}, W, P(this).data());
                "object" == typeof i && (e = l({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new o(this,e),
                P(this).data(H, t)),
                "number" == typeof i)
                    t.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else
                    e.interval && (t.pause(),
                    t.cycle())
            })
        }
        ,
        o._dataApiClickHandler = function(t) {
            var e = Fn.getSelectorFromElement(this);
            if (e) {
                var n = P(e)[0];
                if (n && P(n).hasClass(B)) {
                    var i = l({}, P(n).data(), P(this).data())
                      , r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1),
                    o._jQueryInterface.call(P(n), i),
                    r && P(n).data(H).to(r),
                    t.preventDefault()
                }
            }
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return W
            }
        }]),
        o
    }(),
    P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler),
    P(window).on(Q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
            var i = P(t[e]);
            ot._jQueryInterface.call(i, i.data())
        }
    }),
    P.fn[j] = ot._jQueryInterface,
    P.fn[j].Constructor = ot,
    P.fn[j].noConflict = function() {
        return P.fn[j] = x,
        ot._jQueryInterface
    }
    ,
    ot), Bn = (at = "collapse",
    ct = "." + (lt = "bs.collapse"),
    ht = (st = e).fn[at],
    ut = {
        toggle: !0,
        parent: ""
    },
    ft = {
        toggle: "boolean",
        parent: "(string|element)"
    },
    dt = {
        SHOW: "show" + ct,
        SHOWN: "shown" + ct,
        HIDE: "hide" + ct,
        HIDDEN: "hidden" + ct,
        CLICK_DATA_API: "click" + ct + ".data-api"
    },
    gt = "show",
    _t = "collapse",
    mt = "collapsing",
    pt = "collapsed",
    vt = "width",
    yt = "height",
    Et = ".show, .collapsing",
    Ct = '[data-toggle="collapse"]',
    Tt = function() {
        function a(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
                var o = n[i]
                  , s = Fn.getSelectorFromElement(o)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = a.prototype;
        return t.toggle = function() {
            st(this._element).hasClass(gt) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function(t) {
                return t.getAttribute("data-parent") === n._config.parent
            })).length && (t = null),
            !(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) {
                var i = st.Event(dt.SHOW);
                if (st(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"),
                    e || st(t).data(lt, null));
                    var r = this._getDimension();
                    st(this._element).removeClass(_t).addClass(mt),
                    this._element.style[r] = 0,
                    this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var o = "scroll" + (r[0].toUpperCase() + r.slice(1))
                      , s = Fn.getTransitionDurationFromElement(this._element);
                    st(this._element).one(Fn.TRANSITION_END, function() {
                        st(n._element).removeClass(mt).addClass(_t).addClass(gt),
                        n._element.style[r] = "",
                        n.setTransitioning(!1),
                        st(n._element).trigger(dt.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[r] = this._element[o] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var t = this;
            if (!this._isTransitioning && st(this._element).hasClass(gt)) {
                var e = st.Event(dt.HIDE);
                if (st(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    Fn.reflow(this._element),
                    st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var r = 0; r < i; r++) {
                            var o = this._triggerArray[r]
                              , s = Fn.getSelectorFromElement(o);
                            if (null !== s)
                                st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = Fn.getTransitionDurationFromElement(this._element);
                    st(this._element).one(Fn.TRANSITION_END, function() {
                        t.setTransitioning(!1),
                        st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        t.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        t.dispose = function() {
            st.removeData(this._element, lt),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(t) {
            return (t = l({}, ut, t)).toggle = Boolean(t.toggle),
            Fn.typeCheckConfig(at, t, ft),
            t
        }
        ,
        t._getDimension = function() {
            return st(this._element).hasClass(vt) ? vt : yt
        }
        ,
        t._getParent = function() {
            var n = this
              , t = null;
            Fn.isElement(this._config.parent) ? (t = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(t.querySelectorAll(e));
            return st(i).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(t, e) {
            if (t) {
                var n = st(t).hasClass(gt);
                e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n)
            }
        }
        ,
        a._getTargetFromElement = function(t) {
            var e = Fn.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = st(this)
                  , e = t.data(lt)
                  , n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || (e = new a(this,n),
                t.data(lt, e)),
                "string" == typeof i) {
                    if ("undefined" == typeof e[i])
                        throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return ut
            }
        }]),
        a
    }(),
    st(document).on(dt.CLICK_DATA_API, Ct, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = st(this)
          , e = Fn.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(e));
        st(i).each(function() {
            var t = st(this)
              , e = t.data(lt) ? "toggle" : n.data();
            Tt._jQueryInterface.call(t, e)
        })
    }),
    st.fn[at] = Tt._jQueryInterface,
    st.fn[at].Constructor = Tt,
    st.fn[at].noConflict = function() {
        return st.fn[at] = ht,
        Tt._jQueryInterface
    }
    ,
    Tt), Vn = (St = "dropdown",
    At = "." + (It = "bs.dropdown"),
    Dt = ".data-api",
    wt = (bt = e).fn[St],
    Nt = new RegExp("38|40|27"),
    Ot = {
        HIDE: "hide" + At,
        HIDDEN: "hidden" + At,
        SHOW: "show" + At,
        SHOWN: "shown" + At,
        CLICK: "click" + At,
        CLICK_DATA_API: "click" + At + Dt,
        KEYDOWN_DATA_API: "keydown" + At + Dt,
        KEYUP_DATA_API: "keyup" + At + Dt
    },
    kt = "disabled",
    Pt = "show",
    jt = "dropup",
    Ht = "dropright",
    Lt = "dropleft",
    Rt = "dropdown-menu-right",
    xt = "position-static",
    Wt = '[data-toggle="dropdown"]',
    Ut = ".dropdown form",
    qt = ".dropdown-menu",
    Ft = ".navbar-nav",
    Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Mt = "top-start",
    Qt = "top-end",
    Bt = "bottom-start",
    Vt = "bottom-end",
    Yt = "right-start",
    zt = "left-start",
    Jt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    },
    Zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    },
    Gt = function() {
        function c(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = c.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
                var t = c._getParentFromElement(this._element)
                  , e = bt(this._menu).hasClass(Pt);
                if (c._clearMenus(),
                !e) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = bt.Event(Ot.SHOW, n);
                    if (bt(t).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof h)
                                throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = t : Fn.isElement(this._config.reference) && (r = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && bt(t).addClass(xt),
                            this._popper = new h(r,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        bt(this._menu).toggleClass(Pt),
                        bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n))
                    }
                }
            }
        }
        ,
        t.dispose = function() {
            bt.removeData(this._element, It),
            bt(this._element).off(At),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            bt(this._element).on(Ot.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, this.constructor.Default, bt(this._element).data(), t),
            Fn.typeCheckConfig(St, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(qt))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = bt(this._element.parentNode)
              , e = Bt;
            return t.hasClass(jt) ? (e = Mt,
            bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? e = Yt : t.hasClass(Lt) ? e = zt : bt(this._menu).hasClass(Rt) && (e = Vt),
            e
        }
        ,
        t._detectNavbar = function() {
            return 0 < bt(this._element).closest(".navbar").length
        }
        ,
        t._getPopperConfig = function() {
            var e = this
              , t = {};
            "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}),
                t
            }
            : t.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: t,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            n
        }
        ,
        c._jQueryInterface = function(e) {
            return this.each(function() {
                var t = bt(this).data(It);
                if (t || (t = new c(this,"object" == typeof e ? e : null),
                bt(this).data(It, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        c._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
                    var r = c._getParentFromElement(e[n])
                      , o = bt(e[n]).data(It)
                      , s = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (s.clickEvent = t),
                    o) {
                        var a = o._menu;
                        if (bt(r).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) {
                            var l = bt.Event(Ot.HIDE, s);
                            bt(r).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop),
                            e[n].setAttribute("aria-expanded", "false"),
                            bt(a).removeClass(Pt),
                            bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(t) {
            var e, n = Fn.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)) : Nt.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !bt(this).hasClass(kt))) {
                var e = c._getParentFromElement(this)
                  , n = bt(e).hasClass(Pt);
                if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(Kt));
                    if (0 !== i.length) {
                        var r = i.indexOf(t.target);
                        38 === t.which && 0 < r && r--,
                        40 === t.which && r < i.length - 1 && r++,
                        r < 0 && (r = 0),
                        i[r].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var o = e.querySelector(Wt);
                        bt(o).trigger("focus")
                    }
                    bt(this).trigger("click")
                }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Jt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Zt
            }
        }]),
        c
    }(),
    bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Gt._jQueryInterface.call(bt(this), "toggle")
    }).on(Ot.CLICK_DATA_API, Ut, function(t) {
        t.stopPropagation()
    }),
    bt.fn[St] = Gt._jQueryInterface,
    bt.fn[St].Constructor = Gt,
    bt.fn[St].noConflict = function() {
        return bt.fn[St] = wt,
        Gt._jQueryInterface
    }
    ,
    Gt), Yn = (Xt = "modal",
    ee = "." + (te = "bs.modal"),
    ne = ($t = e).fn[Xt],
    ie = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    re = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    oe = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api"
    },
    se = "modal-scrollbar-measure",
    ae = "modal-backdrop",
    le = "modal-open",
    ce = "fade",
    he = "show",
    ue = ".modal-dialog",
    fe = '[data-toggle="modal"]',
    de = '[data-dismiss="modal"]',
    ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    _e = ".sticky-top",
    me = function() {
        function r(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(ue),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._scrollbarWidth = 0
        }
        var t = r.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        t.show = function(t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
                $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
                var n = $t.Event(oe.SHOW, {
                    relatedTarget: t
                });
                $t(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                $t(document.body).addClass(le),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                $t(this._element).on(oe.CLICK_DISMISS, de, function(t) {
                    return e.hide(t)
                }),
                $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
                    $t(e._element).one(oe.MOUSEUP_DISMISS, function(t) {
                        $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }
        ,
        t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            !this._isTransitioning && this._isShown) {
                var n = $t.Event(oe.HIDE);
                if ($t(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = $t(this._element).hasClass(ce);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    $t(document).off(oe.FOCUSIN),
                    $t(this._element).removeClass(he),
                    $t(this._element).off(oe.CLICK_DISMISS),
                    $t(this._dialog).off(oe.MOUSEDOWN_DISMISS),
                    i) {
                        var r = Fn.getTransitionDurationFromElement(this._element);
                        $t(this._element).one(Fn.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            $t.removeData(this._element, te),
            $t(window, document, this._element, this._backdrop).off(ee),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, ie, t),
            Fn.typeCheckConfig(Xt, t, re),
            t
        }
        ,
        t._showElement = function(t) {
            var e = this
              , n = $t(this._element).hasClass(ce);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.scrollTop = 0,
            n && Fn.reflow(this._element),
            $t(this._element).addClass(he),
            this._config.focus && this._enforceFocus();
            var i = $t.Event(oe.SHOWN, {
                relatedTarget: t
            })
              , r = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                $t(e._element).trigger(i)
            };
            if (n) {
                var o = Fn.getTransitionDurationFromElement(this._element);
                $t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
            } else
                r()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                e.hide())
            }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? $t(window).on(oe.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : $t(window).off(oe.RESIZE)
        }
        ,
        t._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                $t(document.body).removeClass(le),
                t._resetAdjustments(),
                t._resetScrollbar(),
                $t(t._element).trigger(oe.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && ($t(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(t) {
            var e = this
              , n = $t(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = ae,
                n && this._backdrop.classList.add(n),
                $t(this._backdrop).appendTo(document.body),
                $t(this._element).on(oe.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                }),
                n && Fn.reflow(this._backdrop),
                $t(this._backdrop).addClass(he),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = Fn.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                $t(this._backdrop).removeClass(he);
                var r = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if ($t(this._element).hasClass(ce)) {
                    var o = Fn.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                } else
                    r()
            } else
                t && t()
        }
        ,
        t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(ge))
                  , e = [].slice.call(document.querySelectorAll(_e));
                $t(t).each(function(t, e) {
                    var n = e.style.paddingRight
                      , i = $t(e).css("padding-right");
                    $t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }),
                $t(e).each(function(t, e) {
                    var n = e.style.marginRight
                      , i = $t(e).css("margin-right");
                    $t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = $t(document.body).css("padding-right");
                $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
        }
        ,
        t._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(ge));
            $t(t).each(function(t, e) {
                var n = $t(e).data("padding-right");
                $t(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll("" + _e));
            $t(e).each(function(t, e) {
                var n = $t(e).data("margin-right");
                "undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right")
            });
            var n = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = se,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        r._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = $t(this).data(te)
                  , e = l({}, ie, $t(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new r(this,e),
                $t(this).data(te, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else
                    e.show && t.show(i)
            })
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return ie
            }
        }]),
        r
    }(),
    $t(document).on(oe.CLICK_DATA_API, fe, function(t) {
        var e, n = this, i = Fn.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var o = $t(e).one(oe.SHOW, function(t) {
            t.isDefaultPrevented() || o.one(oe.HIDDEN, function() {
                $t(n).is(":visible") && n.focus()
            })
        });
        me._jQueryInterface.call($t(e), r, this)
    }),
    $t.fn[Xt] = me._jQueryInterface,
    $t.fn[Xt].Constructor = me,
    $t.fn[Xt].noConflict = function() {
        return $t.fn[Xt] = ne,
        me._jQueryInterface
    }
    ,
    me), zn = (ve = "tooltip",
    Ee = "." + (ye = "bs.tooltip"),
    Ce = (pe = e).fn[ve],
    Te = "bs-tooltip",
    be = new RegExp("(^|\\s)" + Te + "\\S+","g"),
    Ae = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(Ie = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }),
        selector: !(Se = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    },
    we = "out",
    Ne = {
        HIDE: "hide" + Ee,
        HIDDEN: "hidden" + Ee,
        SHOW: (De = "show") + Ee,
        SHOWN: "shown" + Ee,
        INSERTED: "inserted" + Ee,
        CLICK: "click" + Ee,
        FOCUSIN: "focusin" + Ee,
        FOCUSOUT: "focusout" + Ee,
        MOUSEENTER: "mouseenter" + Ee,
        MOUSELEAVE: "mouseleave" + Ee
    },
    Oe = "fade",
    ke = "show",
    Pe = ".tooltip-inner",
    je = ".arrow",
    He = "hover",
    Le = "focus",
    Re = "click",
    xe = "manual",
    We = function() {
        function i(t, e) {
            if ("undefined" == typeof h)
                throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = pe(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    pe(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (pe(this.getTipElement()).hasClass(ke))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            pe.removeData(this.element, this.constructor.DATA_KEY),
            pe(this.element).off(this.constructor.EVENT_KEY),
            pe(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && pe(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === pe(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = pe.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                pe(this.element).trigger(t);
                var n = pe.contains(this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !n)
                    return;
                var i = this.getTipElement()
                  , r = Fn.getUID(this.constructor.NAME);
                i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && pe(i).addClass(Oe);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement
                  , s = this._getAttachment(o);
                this.addAttachmentClass(s);
                var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container);
                pe(i).data(this.constructor.DATA_KEY, this),
                pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a),
                pe(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new h(this.element,i,{
                    placement: s,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: je
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        e._handlePopperPlacementChange(t)
                    }
                }),
                pe(i).addClass(ke),
                "ontouchstart"in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
                var l = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    pe(e.element).trigger(e.constructor.Event.SHOWN),
                    t === we && e._leave(null, e)
                };
                if (pe(this.tip).hasClass(Oe)) {
                    var c = Fn.getTransitionDurationFromElement(this.tip);
                    pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c)
                } else
                    l()
            }
        }
        ,
        t.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , i = pe.Event(this.constructor.Event.HIDE)
              , r = function() {
                e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                pe(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (pe(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (pe(n).removeClass(ke),
                "ontouchstart"in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop),
                this._activeTrigger[Re] = !1,
                this._activeTrigger[Le] = !1,
                this._activeTrigger[He] = !1,
                pe(this.tip).hasClass(Oe)) {
                    var o = Fn.getTransitionDurationFromElement(n);
                    pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(t) {
            pe(this.getTipElement()).addClass(Te + "-" + t)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || pe(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()),
            pe(t).removeClass(Oe + " " + ke)
        }
        ,
        t.setElementContent = function(t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text()) : t[n ? "html" : "text"](e)
        }
        ,
        t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        t._getAttachment = function(t) {
            return Ie[t.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                else if (t !== xe) {
                    var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    pe(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t)
                    })
                }
                pe(i.element).closest(".modal").on("hide.bs.modal", function() {
                    return i.hide()
                })
            }),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            pe(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0),
            pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout),
            e._hoverState = De,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === De && e.show()
            }, e.config.delay.show) : e.show())
        }
        ,
        t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            pe(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = we,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === we && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(t) {
            return "number" == typeof (t = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            Fn.typeCheckConfig(ve, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        t._cleanTipClass = function() {
            var t = pe(this.getTipElement())
              , e = t.attr("class").match(be);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        t._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = pe(this).data(ye)
                  , e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                pe(this).data(ye, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Ae
            }
        }, {
            key: "NAME",
            get: function() {
                return ve
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ye
            }
        }, {
            key: "Event",
            get: function() {
                return Ne
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Ee
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Se
            }
        }]),
        i
    }(),
    pe.fn[ve] = We._jQueryInterface,
    pe.fn[ve].Constructor = We,
    pe.fn[ve].noConflict = function() {
        return pe.fn[ve] = Ce,
        We._jQueryInterface
    }
    ,
    We), Jn = (qe = "popover",
    Ke = "." + (Fe = "bs.popover"),
    Me = (Ue = e).fn[qe],
    Qe = "bs-popover",
    Be = new RegExp("(^|\\s)" + Qe + "\\S+","g"),
    Ve = l({}, zn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    Ye = l({}, zn.DefaultType, {
        content: "(string|element|function)"
    }),
    ze = "fade",
    Ze = ".popover-header",
    Ge = ".popover-body",
    $e = {
        HIDE: "hide" + Ke,
        HIDDEN: "hidden" + Ke,
        SHOW: (Je = "show") + Ke,
        SHOWN: "shown" + Ke,
        INSERTED: "inserted" + Ke,
        CLICK: "click" + Ke,
        FOCUSIN: "focusin" + Ke,
        FOCUSOUT: "focusout" + Ke,
        MOUSEENTER: "mouseenter" + Ke,
        MOUSELEAVE: "mouseleave" + Ke
    },
    Xe = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        (e.prototype.constructor = e).__proto__ = n;
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(t) {
            Ue(this.getTipElement()).addClass(Qe + "-" + t)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || Ue(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var t = Ue(this.getTipElement());
            this.setElementContent(t.find(Ze), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(Ge), e),
            t.removeClass(ze + " " + Je)
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var t = Ue(this.getTipElement())
              , e = t.attr("class").match(Be);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = Ue(this).data(Fe)
                  , e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                Ue(this).data(Fe, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return Ve
            }
        }, {
            key: "NAME",
            get: function() {
                return qe
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Fe
            }
        }, {
            key: "Event",
            get: function() {
                return $e
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Ke
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ye
            }
        }]),
        i
    }(zn),
    Ue.fn[qe] = Xe._jQueryInterface,
    Ue.fn[qe].Constructor = Xe,
    Ue.fn[qe].noConflict = function() {
        return Ue.fn[qe] = Me,
        Xe._jQueryInterface
    }
    ,
    Xe), Zn = (en = "scrollspy",
    rn = "." + (nn = "bs.scrollspy"),
    on = (tn = e).fn[en],
    sn = {
        offset: 10,
        method: "auto",
        target: ""
    },
    an = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    },
    ln = {
        ACTIVATE: "activate" + rn,
        SCROLL: "scroll" + rn,
        LOAD_DATA_API: "load" + rn + ".data-api"
    },
    cn = "dropdown-item",
    hn = "active",
    un = '[data-spy="scroll"]',
    fn = ".active",
    dn = ".nav, .list-group",
    gn = ".nav-link",
    _n = ".nav-item",
    mn = ".list-group-item",
    pn = ".dropdown",
    vn = ".dropdown-item",
    yn = ".dropdown-toggle",
    En = "offset",
    Cn = "position",
    Tn = function() {
        function n(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            tn(this._scrollElement).on(ln.SCROLL, function(t) {
                return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? En : Cn
              , r = "auto" === this._config.method ? t : this._config.method
              , o = r === Cn ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = Fn.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)),
                e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height)
                        return [tn(e)[r]().top + o, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            tn.removeData(this._element, nn),
            tn(this._scrollElement).off(rn),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(t) {
            if ("string" != typeof (t = l({}, sn, "object" == typeof t && t ? t : {})).target) {
                var e = tn(t.target).attr("id");
                e || (e = Fn.getUID(en),
                tn(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return Fn.typeCheckConfig(en, t, an),
            t
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var r = this._offsets.length; r--; ) {
                    this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",");
            t = t.map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            });
            var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(cn) ? (n.closest(pn).find(yn).addClass(hn),
            n.addClass(hn)) : (n.addClass(hn),
            n.parents(dn).prev(gn + ", " + mn).addClass(hn),
            n.parents(dn).prev(_n).children(gn).addClass(hn)),
            tn(this._scrollElement).trigger(ln.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            var t = [].slice.call(document.querySelectorAll(this._selector));
            tn(t).filter(fn).removeClass(hn)
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = tn(this).data(nn);
                if (t || (t = new n(this,"object" == typeof e && e),
                tn(this).data(nn, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return sn
            }
        }]),
        n
    }(),
    tn(window).on(ln.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--; ) {
            var n = tn(t[e]);
            Tn._jQueryInterface.call(n, n.data())
        }
    }),
    tn.fn[en] = Tn._jQueryInterface,
    tn.fn[en].Constructor = Tn,
    tn.fn[en].noConflict = function() {
        return tn.fn[en] = on,
        Tn._jQueryInterface
    }
    ,
    Tn), Gn = (In = "." + (Sn = "bs.tab"),
    An = (bn = e).fn.tab,
    Dn = {
        HIDE: "hide" + In,
        HIDDEN: "hidden" + In,
        SHOW: "show" + In,
        SHOWN: "shown" + In,
        CLICK_DATA_API: "click" + In + ".data-api"
    },
    wn = "dropdown-menu",
    Nn = "active",
    On = "disabled",
    kn = "fade",
    Pn = "show",
    jn = ".dropdown",
    Hn = ".nav, .list-group",
    Ln = ".active",
    Rn = "> li > .active",
    xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    Wn = ".dropdown-toggle",
    Un = "> .dropdown-menu .active",
    qn = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
                var t, i, e = bn(this._element).closest(Hn)[0], r = Fn.getSelectorFromElement(this._element);
                if (e) {
                    var o = "UL" === e.nodeName ? Rn : Ln;
                    i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1]
                }
                var s = bn.Event(Dn.HIDE, {
                    relatedTarget: this._element
                })
                  , a = bn.Event(Dn.SHOW, {
                    relatedTarget: i
                });
                if (i && bn(i).trigger(s),
                bn(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (t = document.querySelector(r)),
                    this._activate(this._element, e);
                    var l = function() {
                        var t = bn.Event(Dn.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , e = bn.Event(Dn.SHOWN, {
                            relatedTarget: i
                        });
                        bn(i).trigger(t),
                        bn(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }
        ,
        t.dispose = function() {
            bn.removeData(this._element, Sn),
            this._element = null
        }
        ,
        t._activate = function(t, e, n) {
            var i = this
              , r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0]
              , o = n && r && bn(r).hasClass(kn)
              , s = function() {
                return i._transitionComplete(t, r, n)
            };
            if (r && o) {
                var a = Fn.getTransitionDurationFromElement(r);
                bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        t._transitionComplete = function(t, e, n) {
            if (e) {
                bn(e).removeClass(Pn + " " + Nn);
                var i = bn(e.parentNode).find(Un)[0];
                i && bn(i).removeClass(Nn),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (bn(t).addClass(Nn),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            Fn.reflow(t),
            bn(t).addClass(Pn),
            t.parentNode && bn(t.parentNode).hasClass(wn)) {
                var r = bn(t).closest(jn)[0];
                if (r) {
                    var o = [].slice.call(r.querySelectorAll(Wn));
                    bn(o).addClass(Nn)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = bn(this)
                  , e = t.data(Sn);
                if (e || (e = new i(this),
                t.data(Sn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        i
    }(),
    bn(document).on(Dn.CLICK_DATA_API, xn, function(t) {
        t.preventDefault(),
        qn._jQueryInterface.call(bn(this), "show")
    }),
    bn.fn.tab = qn._jQueryInterface,
    bn.fn.tab.Constructor = qn,
    bn.fn.tab.noConflict = function() {
        return bn.fn.tab = An,
        qn._jQueryInterface
    }
    ,
    qn);
    !function(t) {
        if ("undefined" == typeof t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
    t.Util = Fn,
    t.Alert = Kn,
    t.Button = Mn,
    t.Carousel = Qn,
    t.Collapse = Bn,
    t.Dropdown = Vn,
    t.Modal = Yn,
    t.Popover = Jn,
    t.Scrollspy = Zn,
    t.Tab = Gn,
    t.Tooltip = zn,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * Bootstrap Italia v0.10.2
 * Copyright 2018
 * Licensed under the BSD 3-Clause "New" or "Revised" License (https://github.com/italia/bootstrap-italia/blob/master/LICENSE)
 */

var _extends2 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
}
  , _createClass = function() {
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
}()
  , _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
}
: function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
;
function _possibleConstructorReturn(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
!function(e, t) {
    "use strict";
    "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , T = C.document
      , i = Object.getPrototypeOf
      , a = t.slice
      , m = t.concat
      , l = t.push
      , r = t.indexOf
      , n = {}
      , o = n.toString
      , g = n.hasOwnProperty
      , s = g.toString
      , c = s.call(Object)
      , v = {}
      , y = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , _ = function(e) {
        return null != e && e === e.window
    }
      , u = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var i, r = (t = t || T).createElement("script");
        if (r.text = e,
        n)
            for (i in u)
                n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }
    function w(e) {
        return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? n[o.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
    }
    var f = "3.3.1"
      , x = function e(t, n) {
        return new e.fn.init(t,n)
    }
      , d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !y(e) && !_(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return x.each(this, e)
        },
        map: function(n) {
            return this.pushStack(x.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    x.extend = x.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" === (void 0 === s ? "undefined" : _typeof(s)) || y(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (i = e[t]) && (c && i && (x.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {},
                    s[t] = x.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = i(e)) || "function" == typeof (n = g.call(t, "constructor") && t.constructor) && s.call(n) === c)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            b(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (p(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, o = 0, s = [];
            if (p(e))
                for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, n)) && s.push(r);
            return m.apply([], s)
        },
        guid: 1,
        support: v
    }),
    "function" == typeof Symbol && (x.fn[Symbol.iterator] = t[Symbol.iterator]),
    x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, p, b, o, r, h, f, m, w, l, c, E, C, s, T, g, a, u, v, x = "sizzle" + 1 * new Date, y = n.document, S = 0, i = 0, d = se(), _ = se(), A = se(), D = function(e, t) {
            return e === t && (c = !0),
            0
        }, k = {}.hasOwnProperty, t = [], I = t.pop, N = t.push, O = t.push, L = t.slice, j = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", $ = "\\[" + H + "*(" + M + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + H + "*\\]", q = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", R = new RegExp(H + "+","g"), U = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$","g"), W = new RegExp("^" + H + "*," + H + "*"), F = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), B = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]","g"), K = new RegExp(q), V = new RegExp("^" + M + "$"), Q = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + $),
            PSEUDO: new RegExp("^" + q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)","i")
        }, z = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Z = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)","ig"), ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ie = function() {
            E()
        }, re = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            O.apply(t = L.call(y.childNodes), y.childNodes),
            t[y.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    N.apply(e, L.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, n, i) {
            var r, o, s, a, l, c, u, f = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== C && E(t),
            t = t || C,
            T)) {
                if (11 !== d && (l = X.exec(e)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(r)) && v(t, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return O.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = l[3]) && p.getElementsByClassName && t.getElementsByClassName)
                            return O.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (p.qsa && !A[e + " "] && (!g || !g.test(e))) {
                    if (1 !== d)
                        f = t,
                        u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = x),
                        o = (c = h(e)).length; o--; )
                            c[o] = "#" + a + " " + ve(c[o]);
                        u = c.join(","),
                        f = Z.test(e) && me(t.parentNode) || t
                    }
                    if (u)
                        try {
                            return O.apply(n, f.querySelectorAll(u)),
                            n
                        } catch (e) {} finally {
                            a === x && t.removeAttribute("id")
                        }
                }
            }
            return m(e.replace(U, "$1"), t, n, i)
        }
        function se() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > b.cacheLength && delete e[i.shift()],
                e[t + " "] = n
            }
        }
        function ae(e) {
            return e[x] = !0,
            e
        }
        function le(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                b.attrHandle[n[i]] = t
        }
        function ue(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function de(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function pe(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function he(s) {
            return ae(function(o) {
                return o = +o,
                ae(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; )
                        e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = oe.support = {},
        r = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        E = oe.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : y;
            return i !== C && 9 === i.nodeType && i.documentElement && (s = (C = i).documentElement,
            T = !r(C),
            y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)),
            p.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = le(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = G.test(C.getElementsByClassName),
            p.getById = le(function(e) {
                return s.appendChild(e).id = x,
                !C.getElementsByName || !C.getElementsByName(x).length
            }),
            p.getById ? (b.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(J, ee);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (r = t.getElementsByName(e),
                        i = 0; o = r[i++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            b.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && T)
                    return t.getElementsByClassName(e)
            }
            ,
            a = [],
            g = [],
            (p.qsa = G.test(C.querySelectorAll)) && (le(function(e) {
                s.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                s.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (p.matchesSelector = G.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                p.disconnectedMatch = u.call(e, "*"),
                u.call(e, "[s!='']:x"),
                a.push("!=", q)
            }),
            g = g.length && new RegExp(g.join("|")),
            a = a.length && new RegExp(a.join("|")),
            t = G.test(s.compareDocumentPosition),
            v = t || G.test(s.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && v(y, e) ? -1 : t === C || t.ownerDocument === y && v(y, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!r || !o)
                    return e === C ? -1 : t === C ? 1 : r ? -1 : o ? 1 : l ? j(l, e) - j(l, t) : 0;
                if (r === o)
                    return ue(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[i] === a[i]; )
                    i++;
                return i ? ue(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
            }
            ),
            C
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && E(e),
            t = t.replace(B, "='$1']"),
            p.matchesSelector && T && !A[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t)))
                try {
                    var n = u.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < oe(t, C, null, [e]).length
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && E(e),
            v(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== C && E(e);
            var n = b.attrHandle[t.toLowerCase()]
              , i = n && k.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
            return void 0 !== i ? i : p.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (c = !p.detectDuplicates,
            l = !p.sortStable && e.slice(0),
            e.sort(D),
            c) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return l = null,
            e
        }
        ,
        o = oe.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += o(t);
            return n
        }
        ,
        (b = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(J, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && d(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = oe.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var v = "nth" !== h.slice(0, 3)
                      , y = "last" !== h.slice(-4)
                      , _ = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, r, o, s, a, l, c = v !== y ? "nextSibling" : "previousSibling", u = e.parentNode, f = _ && e.nodeName.toLowerCase(), d = !n && !_, p = !1;
                        if (u) {
                            if (v) {
                                for (; c; ) {
                                    for (s = e; s = s[c]; )
                                        if (_ ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                            return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? u.firstChild : u.lastChild],
                            y && d) {
                                for (p = (a = (i = (r = (o = (s = u)[x] || (s[x] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === S && i[1]) && i[2],
                                s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++p && s === e) {
                                        r[h] = [S, a, p];
                                        break
                                    }
                            } else if (d && (p = a = (i = (r = (o = (s = e)[x] || (s[x] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === S && i[1]),
                            !1 === p)
                                for (; (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++p || (d && ((r = (o = s[x] || (s[x] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [S, p]),
                                s !== e)); )
                                    ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return s[x] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; )
                            e[n = j(e, i[r])] = !(t[n] = i[r])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: ae(function(e) {
                    var i = []
                      , r = []
                      , a = f(e.replace(U, "$1"));
                    return a[x] ? ae(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; )
                            (r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        a(i, null, n, r),
                        i[0] = null,
                        !r.pop()
                    }
                }),
                has: ae(function(t) {
                    return function(e) {
                        return 0 < oe(t, e).length
                    }
                }),
                contains: ae(function(t) {
                    return t = t.replace(J, ee),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),
                lang: ae(function(n) {
                    return V.test(n || "") || oe.error("unsupported lang: " + n),
                    n = n.replace(J, ee).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === s
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return z.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = fe(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = de(e);
        function ge() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function ye(a, e, t) {
            var l = e.dir
              , c = e.next
              , u = c || l
              , f = t && "parentNode" === u
              , d = i++;
            return e.first ? function(e, t, n) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || f)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var i, r, o, s = [S, d];
                if (n) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || f) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || f)
                            if (r = (o = e[x] || (e[x] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            c && c === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((i = r[u]) && i[0] === S && i[1] === d)
                                    return s[2] = i[2];
                                if ((r[u] = s)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function _e(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; )
                    if (!r[i](e, t, n))
                        return !1;
                return !0
            }
            : r[0]
        }
        function be(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function we(p, h, m, g, v, e) {
            return g && !g[x] && (g = we(g)),
            v && !v[x] && (v = we(v, e)),
            ae(function(e, t, n, i) {
                var r, o, s, a = [], l = [], c = t.length, u = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++)
                        oe(e, t[i], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !p || !e && h ? u : be(u, a, p, n, i), d = m ? v || (e ? p : c || g) ? [] : t : f;
                if (m && m(f, d, n, i),
                g)
                    for (r = be(d, l),
                    g(r, [], n, i),
                    o = r.length; o--; )
                        (s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (r = [],
                            o = d.length; o--; )
                                (s = d[o]) && r.push(f[o] = s);
                            v(null, d = [], r, i)
                        }
                        for (o = d.length; o--; )
                            (s = d[o]) && -1 < (r = v ? j(e, s) : a[o]) && (e[r] = !(t[r] = s))
                    }
                } else
                    d = be(d === t ? d.splice(c, d.length) : d),
                    v ? v(null, t, d, i) : O.apply(t, d)
            })
        }
        function Ee(e) {
            for (var r, t, n, i = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                return e === r
            }, s, !0), c = ye(function(e) {
                return -1 < j(r, e)
            }, s, !0), u = [function(e, t, n) {
                var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
                return r = null,
                i
            }
            ]; a < i; a++)
                if (t = b.relative[e[a].type])
                    u = [ye(_e(u), t)];
                else {
                    if ((t = b.filter[e[a].type].apply(null, e[a].matches))[x]) {
                        for (n = ++a; n < i && !b.relative[e[n].type]; n++)
                            ;
                        return we(1 < a && _e(u), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(U, "$1"), t, a < n && Ee(e.slice(a, n)), n < i && Ee(e = e.slice(n)), n < i && ve(e))
                    }
                    u.push(t)
                }
            return _e(u)
        }
        return ge.prototype = b.filters = b.pseudos,
        b.setFilters = new ge,
        h = oe.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, c = _[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            a = [],
            l = b.preFilter; s; ) {
                for (o in n && !(i = W.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                a.push(r = [])),
                n = !1,
                (i = F.exec(s)) && (n = i.shift(),
                r.push({
                    value: n,
                    type: i[0].replace(U, " ")
                }),
                s = s.slice(n.length)),
                b.filter)
                    !(i = Q[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(),
                    r.push({
                        value: n,
                        type: o,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : _(e, a).slice(0)
        }
        ,
        f = oe.compile = function(e, t) {
            var n, g, v, y, _, i, r = [], o = [], s = A[e + " "];
            if (!s) {
                for (t || (t = h(e)),
                n = t.length; n--; )
                    (s = Ee(t[n]))[x] ? r.push(s) : o.push(s);
                (s = A(e, (g = o,
                y = 0 < (v = r).length,
                _ = 0 < g.length,
                i = function(e, t, n, i, r) {
                    var o, s, a, l = 0, c = "0", u = e && [], f = [], d = w, p = e || _ && b.find.TAG("*", r), h = S += null == d ? 1 : Math.random() || .1, m = p.length;
                    for (r && (w = t === C || t || r); c !== m && null != (o = p[c]); c++) {
                        if (_ && o) {
                            for (s = 0,
                            t || o.ownerDocument === C || (E(o),
                            n = !T); a = g[s++]; )
                                if (a(o, t || C, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (S = h)
                        }
                        y && ((o = !a && o) && l--,
                        e && u.push(o))
                    }
                    if (l += c,
                    y && c !== l) {
                        for (s = 0; a = v[s++]; )
                            a(u, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    u[c] || f[c] || (f[c] = I.call(i));
                            f = be(f)
                        }
                        O.apply(i, f),
                        r && !e && 0 < f.length && 1 < l + v.length && oe.uniqueSort(i)
                    }
                    return r && (S = h,
                    w = d),
                    u
                }
                ,
                y ? ae(i) : i))).selector = e
            }
            return s
        }
        ,
        m = oe.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e, u = !i && h(e = c.selector || e);
            if (n = n || [],
            1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && T && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(J, ee), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = Q.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !b.relative[a = s.type]); )
                    if ((l = b.find[a]) && (i = l(s.matches[0].replace(J, ee), Z.test(o[0].type) && me(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = i.length && ve(o)))
                            return O.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || f(e, u))(i, t, !T, n, !t || Z.test(e) && me(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = x.split("").sort(D).join("") === x,
        p.detectDuplicates = !!c,
        E(),
        p.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(P, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        oe
    }(C);
    x.find = h,
    x.expr = h.selectors,
    x.expr[":"] = x.expr.pseudos,
    x.uniqueSort = x.unique = h.uniqueSort,
    x.text = h.getText,
    x.isXMLDoc = h.isXML,
    x.contains = h.contains,
    x.escapeSelector = h.escape;
    var E = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && x(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , A = x.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function I(e, n, i) {
        return y(n) ? x.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? x.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? x.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : x.filter(n, e, i)
    }
    x.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    x.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (x.contains(r[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < i; t++)
                x.find(e, r[t], n);
            return 1 < i ? x.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && A.test(e) ? x(e) : e || [], !1).length
        }
    });
    var N, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || N,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof x ? t[0] : t,
                x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)),
                k.test(i[1]) && x.isPlainObject(t))
                    for (i in t)
                        y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = T.getElementById(i[2])) && (this[0] = r,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
    }
    ).prototype = x.fn,
    N = x(T);
    var L = /^(?:parents|prev(?:Until|All))/
      , j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    x.fn.extend({
        has: function(e) {
            var t = x(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (x.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && x(e);
            if (!A.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? x.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(x(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e),
            x.merge([], e.childNodes))
        }
    }, function(i, r) {
        x.fn[i] = function(e, t) {
            var n = x.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = x.filter(t, n)),
            1 < this.length && (j[i] || x.uniqueSort(n),
            L.test(i) && n.reverse()),
            this.pushStack(n)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function $(e) {
        throw e
    }
    function q(e, t, n, i) {
        var r;
        try {
            e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    x.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i,
        n = {},
        x.each(e.match(H) || [], function(e, t) {
            n[t] = !0
        }),
        n) : x.extend({}, i);
        var r, t, o, s, a = [], l = [], c = -1, u = function() {
            for (s = s || i.once,
            o = r = !0; l.length; c = -1)
                for (t = l.shift(); ++c < a.length; )
                    !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && (c = a.length,
                    t = !1);
            i.memory || (t = !1),
            r = !1,
            s && (a = t ? [] : "")
        }, f = {
            add: function() {
                return a && (t && !r && (c = a.length - 1,
                l.push(t)),
                function n(e) {
                    x.each(e, function(e, t) {
                        y(t) ? i.unique && f.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !r && u()),
                this
            },
            remove: function() {
                return x.each(arguments, function(e, t) {
                    for (var n; -1 < (n = x.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < x.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = l = [],
                a = t = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = l = [],
                t || r || (a = t = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                r || u()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    x.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , s = {
                state: function() {
                    return r
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var r = arguments;
                    return x.Deferred(function(i) {
                        x.each(o, function(e, t) {
                            var n = y(r[t[4]]) && r[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        r = null
                    }).promise()
                },
                then: function(t, n, i) {
                    var l = 0;
                    function c(r, o, s, a) {
                        return function() {
                            var n = this
                              , i = arguments
                              , e = function() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = s.apply(n, i)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then,
                                    y(t) ? a ? t.call(e, c(l, o, M, a), c(l, o, $, a)) : (l++,
                                    t.call(e, c(l, o, M, a), c(l, o, $, a), c(l, o, M, o.notifyWith))) : (s !== M && (n = void 0,
                                    i = [e]),
                                    (a || o.resolveWith)(n, i))
                                }
                            }
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= r + 1 && (s !== $ && (n = void 0,
                                    i = [e]),
                                    o.rejectWith(n, i))
                                }
                            }
                            ;
                            r ? t() : (x.Deferred.getStackHook && (t.stackTrace = x.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return x.Deferred(function(e) {
                        o[0][3].add(c(0, e, y(i) ? i : M, e.notifyWith)),
                        o[1][3].add(c(0, e, y(t) ? t : M)),
                        o[2][3].add(c(0, e, y(n) ? n : $))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, s) : s
                }
            }
              , a = {};
            return x.each(o, function(e, t) {
                var n = t[2]
                  , i = t[5];
                s[t[1]] = n.add,
                i && n.add(function() {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , i = Array(t)
              , r = a.call(arguments)
              , o = x.Deferred()
              , s = function(t) {
                return function(e) {
                    i[t] = this,
                    r[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || o.resolveWith(i, r)
                }
            };
            if (n <= 1 && (q(e, o.done(s(t)).resolve, o.reject, !n),
            "pending" === o.state() || y(r[t] && r[t].then)))
                return o.then();
            for (; t--; )
                q(r[t], s(t), o.reject);
            return o.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && R.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    x.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var U = x.Deferred();
    function W() {
        T.removeEventListener("DOMContentLoaded", W),
        C.removeEventListener("load", W),
        x.ready()
    }
    x.fn.ready = function(e) {
        return U.then(e).catch(function(e) {
            x.readyException(e)
        }),
        this
    }
    ,
    x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || U.resolveWith(T, [x])
        }
    }),
    x.ready.then = U.then,
    "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? C.setTimeout(x.ready) : (T.addEventListener("DOMContentLoaded", W),
    C.addEventListener("load", W));
    var F = function e(t, n, i, r, o, s, a) {
        var l = 0
          , c = t.length
          , u = null == i;
        if ("object" === w(i))
            for (l in o = !0,
            i)
                e(t, n, l, i[l], !0, s, a);
        else if (void 0 !== r && (o = !0,
        y(r) || (a = !0),
        u && (a ? (n.call(t, r),
        n = null) : (u = n,
        n = function(e, t, n) {
            return u.call(x(e), n)
        }
        )),
        n))
            for (; l < c; l++)
                n(t[l], i, a ? r : r.call(t[l], l, n(t[l], i)));
        return o ? t : u ? n.call(t) : c ? n(t[0], i) : s
    }
      , B = /^-ms-/
      , K = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function Q(e) {
        return e.replace(B, "ms-").replace(K, V)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = x.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[Q(t)] = n;
            else
                for (i in t)
                    r[Q(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t))in i ? [t] : t.match(H) || []).length;
                    for (; n--; )
                        delete i[t[n]]
                }
                (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var G = new Y
      , X = new Y
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function ee(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                X.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    x.extend({
        hasData: function(e) {
            return X.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return X.access(e, t, n)
        },
        removeData: function(e, t) {
            X.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }),
    x.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (r = X.get(o),
                1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--; )
                        s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = Q(i.slice(5)),
                        ee(o, i, r[i]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" === (void 0 === n ? "undefined" : _typeof(n)) ? this.each(function() {
                X.set(this, n)
            }) : F(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = X.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    X.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                X.remove(this, e)
            })
        }
    }),
    x.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = G.get(e, t),
                n && (!i || Array.isArray(n) ? i = G.access(e, t, x.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = x._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, function() {
                x.dequeue(e, t)
            }, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    G.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? x.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = x.queue(this, t, n);
                x._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = x.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = G.get(o[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , ie = ["Top", "Right", "Bottom", "Left"]
      , re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
    }
      , oe = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.apply(e, i || []),
        t)
            e.style[o] = s[o];
        return r
    };
    function se(e, t, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return x.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (x.cssNumber[t] ? "" : "px"), u = (x.cssNumber[t] || "px" !== c && +l) && ne.exec(x.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; s--; )
                x.style(e, t, u + c),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                u /= o;
            u *= 2,
            x.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = r)),
        r
    }
    var ae = {};
    function le(e, t) {
        for (var n, i, r, o, s, a, l, c = [], u = 0, f = e.length; u < f; u++)
            (i = e[u]).style && (n = i.style.display,
            t ? ("none" === n && (c[u] = G.get(i, "display") || null,
            c[u] || (i.style.display = "")),
            "" === i.style.display && re(i) && (c[u] = (l = s = o = void 0,
            s = (r = i).ownerDocument,
            a = r.nodeName,
            (l = ae[a]) || (o = s.body.appendChild(s.createElement(a)),
            l = x.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === l && (l = "block"),
            ae[a] = l)))) : "none" !== n && (c[u] = "none",
            G.set(i, "display", n)));
        for (u = 0; u < f; u++)
            null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    x.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i
      , ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , fe = /^$|^module$|\/(?:java|ecma)script/i
      , de = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function pe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && D(e, t) ? x.merge([e], n) : n
    }
    function he(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    de.optgroup = de.option,
    de.tbody = de.tfoot = de.colgroup = de.caption = de.thead,
    de.th = de.td;
    var me, ge, ve = /<|&#?\w+;/;
    function ye(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === w(o))
                    x.merge(d, o.nodeType ? [o] : o);
                else if (ve.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    a = (ue.exec(o) || ["", ""])[1].toLowerCase(),
                    l = de[a] || de._default,
                    s.innerHTML = l[1] + x.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        s = s.lastChild;
                    x.merge(d, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        for (f.textContent = "",
        p = 0; o = d[p++]; )
            if (i && -1 < x.inArray(o, i))
                r && r.push(o);
            else if (c = x.contains(o.ownerDocument, o),
            s = pe(f.appendChild(o), "script"),
            c && he(s),
            n)
                for (u = 0; o = s[u++]; )
                    fe.test(o.type || "") && n.push(o);
        return f
    }
    me = T.createDocumentFragment().appendChild(T.createElement("div")),
    (ge = T.createElement("input")).setAttribute("type", "radio"),
    ge.setAttribute("checked", "checked"),
    ge.setAttribute("name", "t"),
    me.appendChild(ge),
    v.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    v.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var _e = T.documentElement
      , be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Te() {
        return !1
    }
    function xe() {
        try {
            return T.activeElement
        } catch (e) {}
    }
    function Se(e, t, n, i, r, o) {
        var s, a;
        if ("object" === (void 0 === t ? "undefined" : _typeof(t))) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                Se(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = Te;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        (r = function(e) {
            return x().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = x.guid++)),
        e.each(function() {
            x.event.add(this, t, r, i, n)
        })
    }
    x.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, f, d, p, h, m, g = G.get(t);
            if (g)
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                r && x.find.matchesSelector(_e, r),
                n.guid || (n.guid = x.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(e) {
                    return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(H) || [""]).length; c--; )
                    p = m = (a = Ee.exec(e[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p && (f = x.event.special[p] || {},
                    p = (r ? f.delegateType : f.bindType) || p,
                    f = x.event.special[p] || {},
                    u = x.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && x.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o),
                    (d = l[p]) || ((d = l[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s)),
                    f.add && (f.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    x.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, p, h, m, g = G.hasData(e) && G.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(H) || [""]).length; c--; )
                    if (p = m = (a = Ee.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p) {
                        for (f = x.event.special[p] || {},
                        d = l[p = (i ? f.delegateType : f.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = d.length; o--; )
                            u = d[o],
                            !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1),
                            u.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || x.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            x.event.remove(e, p + t[c], n, i, !0);
                x.isEmptyObject(l) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = x.event.fix(e), l = new Array(arguments.length), c = (G.get(this, "events") || {})[a.type] || [], u = x.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = x.event.handlers.call(this, a, c),
                t = 0; (r = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        void 0 !== (i = ((x.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < x(r, this).index(c) : x.find(r, this, null, [c]).length),
                            s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(x.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xe() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xe() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && D(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return D(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    x.Event = function(e, t) {
        if (!(this instanceof x.Event))
            return new x.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && x.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[x.expando] = !0
    }
    ,
    x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp),
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        x.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || x.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = r),
                t
            }
        }
    }),
    x.fn.extend({
        on: function(e, t, n, i) {
            return Se(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Se(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                x.event.remove(this, e, n, t)
            })
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , De = /<script|<style|<link/i
      , ke = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ne(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }
    function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function je(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (o = G.access(e),
            s = G.set(t, o),
            c = o.events))
                for (r in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    i = c[r].length; n < i; n++)
                        x.event.add(t, r, c[r][n]);
            X.hasData(e) && (a = X.access(e),
            l = x.extend({}, a),
            X.set(t, l))
        }
    }
    function Pe(n, i, r, o) {
        i = m.apply([], i);
        var e, t, s, a, l, c, u = 0, f = n.length, d = f - 1, p = i[0], h = y(p);
        if (h || 1 < f && "string" == typeof p && !v.checkClone && ke.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = p.call(this, e, t.html())),
                Pe(t, i, r, o)
            });
        if (f && (t = (e = ye(i, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (a = (s = x.map(pe(e, "script"), Oe)).length; u < f; u++)
                l = e,
                u !== d && (l = x.clone(l, !0, !0),
                a && x.merge(s, pe(l, "script"))),
                r.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                x.map(s, Le),
                u = 0; u < a; u++)
                    l = s[u],
                    fe.test(l.type || "") && !G.access(l, "globalEval") && x.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(l.src) : b(l.textContent.replace(Ie, ""), c, l))
        }
        return n
    }
    function He(e, t, n) {
        for (var i, r = t ? x.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || x.cleanData(pe(i)),
            i.parentNode && (n && x.contains(i.ownerDocument, i) && he(pe(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    x.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ae, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0), f = x.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = pe(u),
                i = 0,
                r = (o = pe(e)).length; i < r; i++)
                    a = o[i],
                    l = s[i],
                    void 0,
                    "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || pe(e),
                    s = s || pe(u),
                    i = 0,
                    r = o.length; i < r; i++)
                        je(o[i], s[i]);
                else
                    je(e, u);
            return 0 < (s = pe(u, "script")).length && he(s, !f && pe(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, i, r = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                        n[G.expando] = void 0
                    }
                    n[X.expando] && (n[X.expando] = void 0)
                }
        }
    }),
    x.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? x.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (x.cleanData(pe(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !de[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (x.cleanData(pe(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                x.inArray(this, n) < 0 && (x.cleanData(pe(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        x.fn[e] = function(e) {
            for (var t, n = [], i = x(e), r = i.length - 1, o = 0; o <= r; o++)
                t = o === r ? this : this.clone(!0),
                x(i[o])[s](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , $e = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , qe = new RegExp(ie.join("|"),"i");
    function Re(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || $e(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (s = x.style(e, t)),
        !v.pixelBoxStyles() && Me.test(s) && qe.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function Ue(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                _e.appendChild(a).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                i = 36 === t(e.width),
                l.style.position = "absolute",
                r = 36 === l.offsetWidth || "absolute",
                _e.removeChild(a),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, r, o, s, a = T.createElement("div"), l = T.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        v.clearCloneStyle = "content-box" === l.style.backgroundClip,
        x.extend(v, {
            boxSizingReliable: function() {
                return e(),
                i
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                r
            }
        }))
    }();
    var We = /^(none|table(?!-c[ea]).+)/
      , Fe = /^--/
      , Be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ve = ["Webkit", "Moz", "ms"]
      , Qe = T.createElement("div").style;
    function ze(e) {
        var t = x.cssProps[e];
        return t || (t = x.cssProps[e] = function(e) {
            if (e in Qe)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--; )
                if ((e = Ve[n] + t)in Qe)
                    return e
        }(e) || e),
        t
    }
    function Ye(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Ge(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (i ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += x.css(e, n + ie[s], !0, r)),
            i ? ("content" === n && (l -= x.css(e, "padding" + ie[s], !0, r)),
            "margin" !== n && (l -= x.css(e, "border" + ie[s] + "Width", !0, r))) : (l += x.css(e, "padding" + ie[s], !0, r),
            "padding" !== n ? l += x.css(e, "border" + ie[s] + "Width", !0, r) : a += x.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5))),
        l
    }
    function Xe(e, t, n) {
        var i = $e(e)
          , r = Re(e, t, i)
          , o = "border-box" === x.css(e, "boxSizing", !1, i)
          , s = o;
        if (Me.test(r)) {
            if (!n)
                return r;
            r = "auto"
        }
        return s = s && (v.boxSizingReliable() || r === e.style[t]),
        ("auto" === r || !parseFloat(r) && "inline" === x.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)],
        s = !0),
        (r = parseFloat(r) || 0) + Ge(e, t, n || (o ? "border" : "content"), s, i, r) + "px"
    }
    function Ze(e, t, n, i, r) {
        return new Ze.prototype.init(e,t,n,i,r)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = Q(t), l = Fe.test(t), c = e.style;
                if (l || (t = ze(a)),
                s = x.cssHooks[t] || x.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" === (o = void 0 === n ? "undefined" : _typeof(n)) && (r = ne.exec(n)) && r[1] && (n = se(e, t, r),
                o = "number"),
                null != n && n == n && ("number" === o && (n += r && r[3] || (x.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = Q(t);
            return Fe.test(t) || (t = ze(a)),
            (s = x.cssHooks[t] || x.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = Re(e, t, i)),
            "normal" === r && t in Ke && (r = Ke[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    x.each(["height", "width"], function(e, a) {
        x.cssHooks[a] = {
            get: function(e, t, n) {
                if (t)
                    return !We.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Xe(e, a, n) : oe(e, Be, function() {
                        return Xe(e, a, n)
                    })
            },
            set: function(e, t, n) {
                var i, r = $e(e), o = "border-box" === x.css(e, "boxSizing", !1, r), s = n && Ge(e, a, n, o, r);
                return o && v.scrollboxSize() === r.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - Ge(e, a, "border", !1, r) - .5)),
                s && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t,
                t = x.css(e, a)),
                Ye(0, t, s)
            }
        }
    }),
    x.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        x.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        "margin" !== r && (x.cssHooks[r + o].set = Ye)
    }),
    x.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = $e(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = x.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((x.Tween = Ze).prototype = {
        constructor: Ze,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || x.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ze.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ze.prototype,
    (Ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    x.fx = Ze.prototype.init,
    x.fx.step = {};
    var Je, et, tt, nt, it = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
    function ot() {
        et && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, x.fx.interval),
        x.fx.tick())
    }
    function st() {
        return C.setTimeout(function() {
            Je = void 0
        }),
        Je = Date.now()
    }
    function at(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function lt(e, t, n) {
        for (var i, r = (ct.tweeners[t] || []).concat(ct.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function ct(o, e, t) {
        var n, s, i = 0, r = ct.prefilters.length, a = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var e = Je || st(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++)
                c.tweens[i].run(n);
            return a.notifyWith(o, [c, n, t]),
            n < 1 && r ? t : (r || a.notifyWith(o, [c, 1, 0]),
            a.resolveWith(o, [c]),
            !1)
        }, c = a.promise({
            elem: o,
            props: x.extend({}, e),
            opts: x.extend(!0, {
                specialEasing: {},
                easing: x.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Je || st(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = x.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? c.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; t < n; t++)
                    c.tweens[t].run(1);
                return e ? (a.notifyWith(o, [c, 1, 0]),
                a.resolveWith(o, [c, e])) : a.rejectWith(o, [c, e]),
                this
            }
        }), u = c.props;
        for (!function(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (r = t[i = Q(n)],
                o = e[n],
                Array.isArray(o) && (r = o[1],
                o = e[n] = o[0]),
                n !== i && (e[i] = o,
                delete e[n]),
                (s = x.cssHooks[i]) && "expand"in s)
                    for (n in o = s.expand(o),
                    delete e[i],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = r);
                else
                    t[i] = r
        }(u, c.opts.specialEasing); i < r; i++)
            if (n = ct.prefilters[i].call(c, o, u, c.opts))
                return y(n.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n;
        return x.map(u, lt, c),
        y(c.opts.start) && c.opts.start.call(o, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        x.fx.timer(x.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    x.Animation = x.extend(ct, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            y(e) ? (t = e,
            e = ["*"]) : e = e.match(H);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                ct.tweeners[n] = ct.tweeners[n] || [],
                ct.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, m = e.nodeType && re(e), g = G.get(e, "fxshow");
            for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    x.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (r = t[i],
                it.test(r)) {
                    if (delete t[i],
                    o = o || "toggle" === r,
                    r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[i])
                            continue;
                        m = !0
                    }
                    p[i] = g && g[i] || x.style(e, i)
                }
            if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                for (i in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (c = g && g.display) && (c = G.get(e, "display")),
                "none" === (u = x.css(e, "display")) && (c ? u = c : (le([e], !0),
                c = e.style.display || c,
                u = x.css(e, "display"),
                le([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (d.done(function() {
                    h.display = c
                }),
                null == c && (u = h.display,
                c = "none" === u ? "" : u)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                d.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = G.access(e, "fxshow", {
                        display: c
                    }),
                    o && (g.hidden = !m),
                    m && le([e], !0),
                    d.done(function() {
                        for (i in m || le([e]),
                        G.remove(e, "fxshow"),
                        p)
                            x.style(e, i, p[i])
                    })),
                    l = lt(m ? g[i] : 0, i, d),
                    i in g || (g[i] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ct.prefilters.unshift(e) : ct.prefilters.push(e)
        }
    }),
    x.speed = function(e, t, n) {
        var i = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) ? x.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            y(i.old) && i.old.call(this),
            i.queue && x.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    x.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = x.isEmptyObject(t)
              , o = x.speed(e, n, i)
              , s = function() {
                var e = ct(this, x.extend({}, t), o);
                (r || G.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(r, e, o) {
            var s = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof r && (o = e,
            e = r,
            r = void 0),
            e && !1 !== r && this.queue(r || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != r && r + "queueHooks"
                  , n = x.timers
                  , i = G.get(this);
                if (t)
                    i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && rt.test(t) && s(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || x.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = G.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = x.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                x.queue(this, s, []),
                i && i.stop && i.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    x.each(["toggle", "show", "hide"], function(e, i) {
        var r = x.fn[i];
        x.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(at(i, !0), e, t, n)
        }
    }),
    x.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        x.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    x.timers = [],
    x.fx.tick = function() {
        var e, t = 0, n = x.timers;
        for (Je = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(),
        Je = void 0
    }
    ,
    x.fx.timer = function(e) {
        x.timers.push(e),
        x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        et || (et = !0,
        ot())
    }
    ,
    x.fx.stop = function() {
        et = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fn.delay = function(i, e) {
        return i = x.fx && x.fx.speeds[i] || i,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, i);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    tt = T.createElement("input"),
    nt = T.createElement("select").appendChild(T.createElement("option")),
    tt.type = "checkbox",
    v.checkOn = "" !== tt.value,
    v.optSelected = nt.selected,
    (tt = T.createElement("input")).value = "t",
    tt.type = "radio",
    v.radioValue = "t" === tt.value;
    var ut, ft = x.expr.attrHandle;
    x.fn.extend({
        attr: function(e, t) {
            return F(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        }
    }),
    x.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === o && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ut : void 0)),
                void 0 !== n ? null === n ? void x.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(H);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    e.removeAttribute(n)
        }
    }),
    ut = {
        set: function(e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = ft[t] || x.find.attr;
        ft[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = ft[o],
            ft[o] = i,
            i = null != s(e, t, n) ? o : null,
            ft[o] = r),
            i
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i
      , pt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(H) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
    }
    x.fn.extend({
        prop: function(e, t) {
            return F(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e]
            })
        }
    }),
    x.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && x.isXMLDoc(e) || (t = x.propFix[t] || t,
                r = x.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    v.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (y(t))
                return this.each(function(e) {
                    x(this).addClass(t.call(this, e, mt(this)))
                });
            if ((e = gt(t)).length)
                for (; n = this[l++]; )
                    if (r = mt(n),
                    i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (s = 0; o = e[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (y(t))
                return this.each(function(e) {
                    x(this).removeClass(t.call(this, e, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = gt(t)).length)
                for (; n = this[l++]; )
                    if (r = mt(n),
                    i = 1 === n.nodeType && " " + ht(r) + " ") {
                        for (s = 0; o = e[s++]; )
                            for (; -1 < i.indexOf(" " + o + " "); )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = ht(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var o = void 0 === r ? "undefined" : _typeof(r)
              , s = "string" === o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                x(this).toggleClass(r.call(this, e, mt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0,
                    n = x(this),
                    i = gt(r); e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== r && "boolean" !== o || ((e = mt(this)) && G.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && -1 < (" " + ht(mt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var vt = /\r/g;
    x.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = y(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, x(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = x.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = x.valHooks[t.type] || x.valHooks[t.nodeName.toLowerCase()]) && "get"in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt, "") : null == e ? "" : e : void 0
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ht(x.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = x.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = -1 < x.inArray(x.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        },
        v.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    v.focusin = "onfocusin"in C;
    var yt = /^(?:focusinfocus|focusoutblur)$/
      , _t = function(e) {
        e.stopPropagation()
    };
    x.extend(x.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, c, u, f, d = [n || T], p = g.call(e, "type") ? e.type : e, h = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || T,
            3 !== n.nodeType && 8 !== n.nodeType && !yt.test(p + x.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(),
            h.sort()),
            l = p.indexOf(":") < 0 && "on" + p,
            (e = e[x.expando] ? e : new x.Event(p,"object" === (void 0 === e ? "undefined" : _typeof(e)) && e)).isTrigger = i ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : x.makeArray(t, [e]),
            u = x.event.special[p] || {},
            i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !_(n)) {
                    for (a = u.delegateType || p,
                    yt.test(a + p) || (o = o.parentNode); o; o = o.parentNode)
                        d.push(o),
                        s = o;
                    s === (n.ownerDocument || T) && d.push(s.defaultView || s.parentWindow || C)
                }
                for (r = 0; (o = d[r++]) && !e.isPropagationStopped(); )
                    f = o,
                    e.type = 1 < r ? a : u.bindType || p,
                    (c = (G.get(o, "events") || {})[e.type] && G.get(o, "handle")) && c.apply(o, t),
                    (c = l && o[l]) && c.apply && z(o) && (e.result = c.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !z(n) || l && y(n[p]) && !_(n) && ((s = n[l]) && (n[l] = null),
                x.event.triggered = p,
                e.isPropagationStopped() && f.addEventListener(p, _t),
                n[p](),
                e.isPropagationStopped() && f.removeEventListener(p, _t),
                x.event.triggered = void 0,
                s && (n[l] = s)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(i, null, t)
        }
    }),
    x.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return x.event.trigger(e, t, n, !0)
        }
    }),
    v.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var r = function(e) {
            x.event.simulate(i, e.target, x.event.fix(e))
        };
        x.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = G.access(e, i);
                t || e.addEventListener(n, r, !0),
                G.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = G.access(e, i) - 1;
                t ? G.access(e, i, t) : (e.removeEventListener(n, r, !0),
                G.remove(e, i))
            }
        }
    });
    var bt = C.location
      , wt = Date.now()
      , Et = /\?/;
    x.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e),
        t
    }
    ;
    var Ct = /\[\]$/
      , Tt = /\r?\n/g
      , xt = /^(?:submit|button|image|reset|file)$/i
      , St = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, i, r) {
        var t;
        if (Array.isArray(e))
            x.each(e, function(e, t) {
                i || Ct.test(n) ? r(n, t) : At(n + "[" + ("object" === (void 0 === t ? "undefined" : _typeof(t)) && null != t ? e : "") + "]", t, i, r)
            });
        else if (i || "object" !== w(e))
            r(n, e);
        else
            for (t in e)
                At(n + "[" + t + "]", e[t], i, r)
    }
    x.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            var n = y(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e))
            x.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, r);
        return i.join("&")
    }
    ,
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !xt.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Tt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Tt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g
      , kt = /#.*$/
      , It = /([?&])_=[^&]*/
      , Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ot = /^(?:GET|HEAD)$/
      , Lt = /^\/\//
      , jt = {}
      , Pt = {}
      , Ht = "*/".concat("*")
      , Mt = T.createElement("a");
    function $t(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, r = e.toLowerCase().match(H) || [];
            if (y(t))
                for (; n = r[i++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function qt(t, r, o, s) {
        var a = {}
          , l = t === Pt;
        function c(e) {
            var i;
            return a[e] = !0,
            x.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n),
                c(n),
                !1)
            }),
            i
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*")
    }
    function Rt(e, t) {
        var n, i, r = x.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && x.extend(!0, e, i),
        e
    }
    Mt.href = bt.href,
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rt(Rt(e, x.ajaxSettings), t) : Rt(x.ajaxSettings, e)
        },
        ajaxPrefilter: $t(jt),
        ajaxTransport: $t(Pt),
        ajax: function(e, t) {
            "object" === (void 0 === e ? "undefined" : _typeof(e)) && (t = e,
            e = void 0),
            t = t || {};
            var u, f, d, n, p, i, h, m, r, o, g = x.ajaxSetup({}, t), v = g.context || g, y = g.context && (v.nodeType || v.jquery) ? x(v) : x.event, _ = x.Deferred(), b = x.Callbacks("once memory"), w = g.statusCode || {}, s = {}, a = {}, l = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n)
                            for (n = {}; t = Nt.exec(d); )
                                n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return h ? d : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (g.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return u && u.abort(t),
                    c(0, t),
                    this
                }
            };
            if (_.promise(E),
            g.url = ((e || g.url || bt.href) + "").replace(Lt, bt.protocol + "//"),
            g.type = t.method || t.type || g.method || g.type,
            g.dataTypes = (g.dataType || "*").toLowerCase().match(H) || [""],
            null == g.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = g.url,
                    i.href = i.href,
                    g.crossDomain = Mt.protocol + "//" + Mt.host != i.protocol + "//" + i.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = x.param(g.data, g.traditional)),
            qt(jt, g, t, E),
            h)
                return E;
            for (r in (m = x.event && g.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
            g.type = g.type.toUpperCase(),
            g.hasContent = !Ot.test(g.type),
            f = g.url.replace(kt, ""),
            g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Dt, "+")) : (o = g.url.slice(f.length),
            g.data && (g.processData || "string" == typeof g.data) && (f += (Et.test(f) ? "&" : "?") + g.data,
            delete g.data),
            !1 === g.cache && (f = f.replace(It, "$1"),
            o = (Et.test(f) ? "&" : "?") + "_=" + wt++ + o),
            g.url = f + o),
            g.ifModified && (x.lastModified[f] && E.setRequestHeader("If-Modified-Since", x.lastModified[f]),
            x.etag[f] && E.setRequestHeader("If-None-Match", x.etag[f])),
            (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && E.setRequestHeader("Content-Type", g.contentType),
            E.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : g.accepts["*"]),
            g.headers)
                E.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, E, g) || h))
                return E.abort();
            if (l = "abort",
            b.add(g.complete),
            E.done(g.success),
            E.fail(g.error),
            u = qt(Pt, g, t, E)) {
                if (E.readyState = 1,
                m && y.trigger("ajaxSend", [E, g]),
                h)
                    return E;
                g.async && 0 < g.timeout && (p = C.setTimeout(function() {
                    E.abort("timeout")
                }, g.timeout));
                try {
                    h = !1,
                    u.send(s, c)
                } catch (e) {
                    if (h)
                        throw e;
                    c(-1, e)
                }
            } else
                c(-1, "No Transport");
            function c(e, t, n, i) {
                var r, o, s, a, l, c = t;
                h || (h = !0,
                p && C.clearTimeout(p),
                u = void 0,
                d = i || "",
                E.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(g, E, n)),
                a = function(e, t, n, i) {
                    var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, a, E, r),
                r ? (g.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (x.lastModified[f] = l),
                (l = E.getResponseHeader("etag")) && (x.etag[f] = l)),
                204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state,
                o = a.data,
                r = !(s = a.error))) : (s = c,
                !e && c || (c = "error",
                e < 0 && (e = 0))),
                E.status = e,
                E.statusText = (t || c) + "",
                r ? _.resolveWith(v, [o, c, E]) : _.rejectWith(v, [E, c, s]),
                E.statusCode(w),
                w = void 0,
                m && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, g, r ? o : s]),
                b.fireWith(v, [E, c]),
                m && (y.trigger("ajaxComplete", [E, g]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return x.get(e, void 0, t, "script")
        }
    }),
    x.each(["get", "post"], function(e, r) {
        x[r] = function(e, t, n, i) {
            return y(t) && (i = i || n,
            n = t,
            t = void 0),
            x.ajax(x.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, x.isPlainObject(e) && e))
        }
    }),
    x._evalUrl = function(e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    x.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (y(e) && (e = e.call(this[0])),
            t = x(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                x(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = x(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                x(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                x(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    x.expr.pseudos.hidden = function(e) {
        return !x.expr.pseudos.visible(e)
    }
    ,
    x.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    x.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Wt = x.ajaxSettings.xhr();
    v.cors = !!Wt && "withCredentials"in Wt,
    v.ajax = Wt = !!Wt,
    x.ajaxTransport(function(r) {
        var o, s;
        if (v.cors || Wt && !r.crossDomain)
            return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password),
                    r.xhrFields)
                        for (n in r.xhrFields)
                            i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                    r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        i.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                            "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ut[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }
                    ,
                    i.onload = o(),
                    s = i.onerror = i.ontimeout = o("error"),
                    void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && C.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    x.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    x.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain)
            return {
                send: function(e, t) {
                    i = x("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(),
                        r = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    T.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
    });
    var Ft, Bt = [], Kt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || x.expando + "_" + wt++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
            e.converters["script json"] = function() {
                return o || x.error(i + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            r = C[i],
            C[i] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? x(C).removeProp(i) : C[i] = r,
                e[i] && (e.jsonpCallback = t.jsonpCallback,
                Bt.push(i)),
                o && y(r) && r(o[0]),
                o = r = void 0
            }),
            "script"
    }),
    v.createHTMLDocument = ((Ft = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ft.childNodes.length),
    x.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (v.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href,
        t.head.appendChild(i)) : t = T),
        o = !n && [],
        (r = k.exec(e)) ? [t.createElement(r[1])] : (r = ye([e], t, o),
        o && o.length && x(o).remove(),
        x.merge([], r.childNodes)));
        var i, r, o
    }
    ,
    x.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return -1 < a && (i = ht(e.slice(a)),
        e = e.slice(0, a)),
        y(t) ? (n = t,
        t = void 0) : t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && (r = "POST"),
        0 < s.length && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.expr.pseudos.animated = function(t) {
        return x.grep(x.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = x.css(e, "position"), u = x(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            o = x.css(e, "top"),
            l = x.css(e, "left"),
            ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            y(t) && (t = t.call(e, n, x.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, f) : u.css(f)
        }
    },
    x.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    x.offset.setOffset(this, t, e)
                });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
            n = i.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === x.css(i, "position"))
                    t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0),
                    r.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - x.css(i, "marginTop", !0),
                    left: t.left - r.left - x.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                    e = e.offsetParent;
                return e || _e
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        x.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var i;
                if (_(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === n)
                    return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    x.each(["top", "left"], function(e, n) {
        x.cssHooks[n] = Ue(v.pixelPosition, function(e, t) {
            if (t)
                return t = Re(e, n),
                Me.test(t) ? x(e).position()[n] + "px" : t
        })
    }),
    x.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        x.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            x.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , r = i || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var i;
                    return _(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? x.css(e, t, r) : x.style(e, t, n, r)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        x.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    x.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    x.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        y(e))
            return i = a.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, i.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || x.guid++,
            r
    }
    ,
    x.holdReady = function(e) {
        e ? x.readyWait++ : x.ready(!0)
    }
    ,
    x.isArray = Array.isArray,
    x.parseJSON = JSON.parse,
    x.nodeName = D,
    x.isFunction = y,
    x.isWindow = _,
    x.camelCase = Q,
    x.type = w,
    x.now = Date.now,
    x.isNumeric = function(e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    });
    var Vt = C.jQuery
      , Qt = C.$;
    return x.noConflict = function(e) {
        return C.$ === x && (C.$ = Qt),
        e && C.jQuery === x && (C.jQuery = Vt),
        x
    }
    ,
    e || (C.jQuery = C.$ = x),
    x
}),
function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";
    for (var e = "undefined" != typeof window && "undefined" != typeof document, t = ["Edge", "Trident", "Firefox"], n = 0, i = 0; i < t.length; i += 1)
        if (e && 0 <= navigator.userAgent.indexOf(t[i])) {
            n = 1;
            break
        }
    var s = e && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, n))
        }
    }
    ;
    function a(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function b(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function d(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function h(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = b(e)
          , n = t.overflow
          , i = t.overflowX
          , r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : h(d(e))
    }
    var r = e && !(!window.MSInputMethodContext || !document.documentMode)
      , o = e && /MSIE 10/.test(navigator.userAgent);
    function m(e) {
        return 11 === e ? r : 10 === e ? o : r || o
    }
    function y(e) {
        if (!e)
            return document.documentElement;
        for (var t = m(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === b(n, "position") ? y(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e
    }
    function p(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , r = n ? t : e
          , o = document.createRange();
        o.setStart(i, 0),
        o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r))
            return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && y(s.firstElementChild) !== s ? y(l) : l;
        var c = u(e);
        return c.host ? p(c.host, t) : p(e, u(t).host)
    }
    function g(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
          , n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }
    function f(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function l(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }
    function v() {
        var e = document.body
          , t = document.documentElement
          , n = m(10) && getComputedStyle(t);
        return {
            height: l("Height", e, t, n),
            width: l("Width", e, t, n)
        }
    }
    var c = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , _ = function() {
        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(e, t, n) {
            return t && i(e.prototype, t),
            n && i(e, n),
            e
        }
    }()
      , w = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , E = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function C(e) {
        return E({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function T(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = g(e, "top")
                  , i = g(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , o = "HTML" === e.nodeName ? v() : {}
          , s = o.width || e.clientWidth || r.right - r.left
          , a = o.height || e.clientHeight || r.bottom - r.top
          , l = e.offsetWidth - s
          , c = e.offsetHeight - a;
        if (l || c) {
            var u = b(e);
            l -= f(u, "x"),
            c -= f(u, "y"),
            r.width -= l,
            r.height -= c
        }
        return C(r)
    }
    function x(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , i = m(10)
          , r = "HTML" === t.nodeName
          , o = T(e)
          , s = T(t)
          , a = h(e)
          , l = b(t)
          , c = parseFloat(l.borderTopWidth, 10)
          , u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0),
        s.left = Math.max(s.left, 0));
        var f = C({
            top: o.top - s.top - c,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0,
        f.marginLeft = 0,
        !i && r) {
            var d = parseFloat(l.marginTop, 10)
              , p = parseFloat(l.marginLeft, 10);
            f.top -= c - d,
            f.bottom -= c - d,
            f.left -= u - p,
            f.right -= u - p,
            f.marginTop = d,
            f.marginLeft = p
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
              , i = g(t, "top")
              , r = g(t, "left")
              , o = n ? -1 : 1;
            return e.top += i * o,
            e.bottom += i * o,
            e.left += r * o,
            e.right += r * o,
            e
        }(f, t)),
        f
    }
    function S(e) {
        if (!e || !e.parentElement || m())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === b(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function A(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , o = {
            top: 0,
            left: 0
        }
          , s = r ? S(e) : p(e, t);
        if ("viewport" === i)
            o = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                  , n = e.ownerDocument.documentElement
                  , i = x(e, n)
                  , r = Math.max(n.clientWidth, window.innerWidth || 0)
                  , o = Math.max(n.clientHeight, window.innerHeight || 0)
                  , s = t ? 0 : g(n)
                  , a = t ? 0 : g(n, "left");
                return C({
                    top: s - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: r,
                    height: o
                })
            }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = h(d(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = x(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                var n = t.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === b(t, "position") || e(d(t)))
            }(s))
                o = l;
            else {
                var c = v()
                  , u = c.height
                  , f = c.width;
                o.top += l.top - l.marginTop,
                o.bottom = u + l.top,
                o.left += l.left - l.marginLeft,
                o.right = f + l.left
            }
        }
        return o.left += n,
        o.top += n,
        o.right -= n,
        o.bottom -= n,
        o
    }
    function D(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var s = A(i, n, o, r)
          , a = {
            top: {
                width: s.width,
                height: t.top - s.top
            },
            right: {
                width: s.right - t.right,
                height: s.height
            },
            bottom: {
                width: s.width,
                height: s.bottom - t.bottom
            },
            left: {
                width: t.left - s.left,
                height: s.height
            }
        }
          , l = Object.keys(a).map(function(e) {
            return E({
                key: e
            }, a[e], {
                area: (t = a[e],
                t.width * t.height)
            });
            var t
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , c = l.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        })
          , u = 0 < c.length ? c[0].key : l[0].key
          , f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }
    function k(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return x(n, i ? S(t) : p(t, n), i)
    }
    function I(e) {
        var t = getComputedStyle(e)
          , n = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function N(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function O(e, t, n) {
        n = n.split("-")[0];
        var i = I(e)
          , r = {
            width: i.width,
            height: i.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , l = o ? "height" : "width"
          , c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2,
        r[a] = n === a ? t[a] - i[c] : t[N(a)],
        r
    }
    function L(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function j(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = L(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && a(t) && (n.offsets.popper = C(n.offsets.popper),
            n.offsets.reference = C(n.offsets.reference),
            n = t(n, e))
        }),
        n
    }
    function P(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function H(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i]
              , o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o])
                return o
        }
        return null
    }
    function M(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function $(e, t, n, i) {
        n.updateBound = i,
        M(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = h(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName
              , s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }),
            o || e(h(s.parentNode), n, i, r),
            r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = r,
        n.eventsEnabled = !0,
        n
    }
    function q() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = (e = this.reference,
        t = this.state,
        M(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t))
    }
    function R(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function U(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && R(i[e]) && (t = "px"),
            n.style[e] = i[e] + t
        })
    }
    function W(e, t, n) {
        var i = L(e, function(e) {
            return e.name === t
        })
          , r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!r) {
            var o = "`" + t + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var F = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , B = F.slice(3);
    function K(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , n = B.indexOf(e)
          , i = B.slice(n + 1).concat(B.slice(0, n));
        return t ? i.reverse() : i
    }
    var V = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };
    function Q(e, r, o, t) {
        var s = [0, 0]
          , a = -1 !== ["right", "left"].indexOf(t)
          , n = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , i = n.indexOf(L(n, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width"
              , i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                i = !0,
                e) : i ? (e[e.length - 1] += t,
                i = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , o = +r[1]
                      , s = r[2];
                    if (!o)
                        return e;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                        }
                        return C(a)[t] / 100 * o
                    }
                    if ("vh" === s || "vw" === s)
                        return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, n, r, o)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                R(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }),
        s
    }
    var z = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets
                          , o = r.reference
                          , s = r.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , u = {
                            start: w({}, l, o[l]),
                            end: w({}, l, o[l] + o[c] - s[c])
                        };
                        e.offsets.popper = E({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset
                      , i = e.placement
                      , r = e.offsets
                      , o = r.popper
                      , s = r.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = R(+n) ? [+n, 0] : Q(n, o, s, a),
                    "left" === a ? (o.top += l[0],
                    o.left -= l[1]) : "right" === a ? (o.top += l[0],
                    o.left += l[1]) : "top" === a ? (o.left += l[0],
                    o.top -= l[1]) : "bottom" === a && (o.left += l[0],
                    o.top += l[1]),
                    e.popper = o,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || y(e.instance.popper);
                    e.instance.reference === t && (t = y(t));
                    var n = H("transform")
                      , r = e.instance.popper.style
                      , o = r.top
                      , s = r.left
                      , a = r[n];
                    r.top = "",
                    r.left = "",
                    r[n] = "";
                    var l = A(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = o,
                    r.left = s,
                    r[n] = a,
                    i.boundaries = l;
                    var c = i.priority
                      , u = e.offsets.popper
                      , f = {
                        primary: function(e) {
                            var t = u[e];
                            return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])),
                            w({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , n = u[t];
                            return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))),
                            w({}, t, n)
                        }
                    };
                    return c.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        u = E({}, u, f[t](e))
                    }),
                    e.offsets.popper = u,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , r = e.placement.split("-")[0]
                      , o = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(r)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!W(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var r = e.placement.split("-")[0]
                      , o = e.offsets
                      , s = o.popper
                      , a = o.reference
                      , l = -1 !== ["left", "right"].indexOf(r)
                      , c = l ? "height" : "width"
                      , u = l ? "Top" : "Left"
                      , f = u.toLowerCase()
                      , d = l ? "left" : "top"
                      , p = l ? "bottom" : "right"
                      , h = I(i)[c];
                    a[p] - h < s[f] && (e.offsets.popper[f] -= s[f] - (a[p] - h)),
                    a[f] + h > s[p] && (e.offsets.popper[f] += a[f] + h - s[p]),
                    e.offsets.popper = C(e.offsets.popper);
                    var m = a[f] + a[c] / 2 - h / 2
                      , g = b(e.instance.popper)
                      , v = parseFloat(g["margin" + u], 10)
                      , y = parseFloat(g["border" + u + "Width"], 10)
                      , _ = m - e.offsets.popper[f] - v - y;
                    return _ = Math.max(Math.min(s[c] - h, _), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (w(n = {}, f, Math.round(_)),
                    w(n, d, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(h, m) {
                    if (P(h.instance.modifiers, "inner"))
                        return h;
                    if (h.flipped && h.placement === h.originalPlacement)
                        return h;
                    var g = A(h.instance.popper, h.instance.reference, m.padding, m.boundariesElement, h.positionFixed)
                      , v = h.placement.split("-")[0]
                      , y = N(v)
                      , _ = h.placement.split("-")[1] || ""
                      , b = [];
                    switch (m.behavior) {
                    case V.FLIP:
                        b = [v, y];
                        break;
                    case V.CLOCKWISE:
                        b = K(v);
                        break;
                    case V.COUNTERCLOCKWISE:
                        b = K(v, !0);
                        break;
                    default:
                        b = m.behavior
                    }
                    return b.forEach(function(e, t) {
                        if (v !== e || b.length === t + 1)
                            return h;
                        v = h.placement.split("-")[0],
                        y = N(v);
                        var n, i = h.offsets.popper, r = h.offsets.reference, o = Math.floor, s = "left" === v && o(i.right) > o(r.left) || "right" === v && o(i.left) < o(r.right) || "top" === v && o(i.bottom) > o(r.top) || "bottom" === v && o(i.top) < o(r.bottom), a = o(i.left) < o(g.left), l = o(i.right) > o(g.right), c = o(i.top) < o(g.top), u = o(i.bottom) > o(g.bottom), f = "left" === v && a || "right" === v && l || "top" === v && c || "bottom" === v && u, d = -1 !== ["top", "bottom"].indexOf(v), p = !!m.flipVariations && (d && "start" === _ && a || d && "end" === _ && l || !d && "start" === _ && c || !d && "end" === _ && u);
                        (s || f || p) && (h.flipped = !0,
                        (s || f) && (v = b[t + 1]),
                        p && (_ = "end" === (n = _) ? "start" : "start" === n ? "end" : n),
                        h.placement = v + (_ ? "-" + _ : ""),
                        h.offsets.popper = E({}, h.offsets.popper, O(h.instance.popper, h.offsets.reference, h.placement)),
                        h = j(h.instance.modifiers, h, "flip"))
                    }),
                    h
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , r = i.popper
                      , o = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0),
                    e.placement = N(t),
                    e.offsets.popper = C(r),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!W(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = L(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , r = e.offsets.popper
                      , o = L(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== o ? o : t.gpuAcceleration
                      , a = T(y(e.instance.popper))
                      , l = {
                        position: r.position
                    }
                      , c = {
                        left: Math.floor(r.left),
                        top: Math.round(r.top),
                        bottom: Math.round(r.bottom),
                        right: Math.floor(r.right)
                    }
                      , u = "bottom" === n ? "top" : "bottom"
                      , f = "right" === i ? "left" : "right"
                      , d = H("transform")
                      , p = void 0
                      , h = void 0;
                    if (h = "bottom" === u ? -a.height + c.bottom : c.top,
                    p = "right" === f ? -a.width + c.right : c.left,
                    s && d)
                        l[d] = "translate3d(" + p + "px, " + h + "px, 0)",
                        l[u] = 0,
                        l[f] = 0,
                        l.willChange = "transform";
                    else {
                        var m = "bottom" === u ? -1 : 1
                          , g = "right" === f ? -1 : 1;
                        l[u] = h * m,
                        l[f] = p * g,
                        l.willChange = u + ", " + f
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = E({}, v, e.attributes),
                    e.styles = E({}, l, e.styles),
                    e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    var t, n;
                    return U(e.instance.popper, e.styles),
                    t = e.instance.popper,
                    n = e.attributes,
                    Object.keys(n).forEach(function(e) {
                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                    }),
                    e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, r) {
                    var o = k(r, t, e, n.positionFixed)
                      , s = D(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    U(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , Y = function() {
        function o(e, t) {
            var n = this
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            c(this, o),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }
            ,
            this.update = s(this.update.bind(this)),
            this.options = E({}, o.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = t && t.jquery ? t[0] : t,
            this.options.modifiers = {},
            Object.keys(E({}, o.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = E({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return E({
                    name: e
                }, n.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
            }),
            this.update();
            var r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        return _(o, [{
            key: "update",
            value: function() {
                return function() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = k(this.state, this.popper, this.reference, this.options.positionFixed),
                        e.placement = D(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                        e.originalPlacement = e.placement,
                        e.positionFixed = this.options.positionFixed,
                        e.offsets.popper = O(this.popper, e.offsets.reference, e.placement),
                        e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                        e = j(this.modifiers, e),
                        this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                        this.options.onCreate(e))
                    }
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[H("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = $(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return q.call(this)
            }
        }]),
        o
    }();
    return Y.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    Y.placements = F,
    Y.Defaults = z,
    Y
});
var Util = function(i) {
    var t = "transitionend";
    function e(e) {
        var t = this
          , n = !1;
        return i(this).one(l.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || l.triggerTransitionEnd(t)
        }, e),
        this
    }
    var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            t && "#" !== t || (t = e.getAttribute("href") || "");
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = i(e).css("transition-duration");
            return parseFloat(t) ? (t = t.split(",")[0],
            1e3 * parseFloat(t)) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            i(e).trigger(t)
        },
        supportsTransitionEnd: function() {
            return Boolean(t)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i]
                      , o = t[i]
                      , s = o && l.isElement(o) ? "element" : (a = o,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var a
        }
    };
    return i.fn.emulateTransitionEnd = e,
    i.event.special[l.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (i(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    },
    l
}($)
  , Alert = function(r) {
    var e = "alert"
      , o = "bs.alert"
      , t = "." + o
      , n = r.fn[e]
      , s = {
        CLOSE: "close" + t,
        CLOSED: "closed" + t,
        CLICK_DATA_API: "click" + t + ".data-api"
    }
      , a = "alert"
      , l = "fade"
      , c = "show"
      , i = function() {
        function i(e) {
            _classCallCheck(this, i),
            this._element = e
        }
        return i.prototype.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        i.prototype.dispose = function() {
            r.removeData(this._element, o),
            this._element = null
        }
        ,
        i.prototype._getRootElement = function(e) {
            var t = Util.getSelectorFromElement(e)
              , n = !1;
            return t && (n = document.querySelector(t)),
            n || (n = r(e).closest("." + a)[0]),
            n
        }
        ,
        i.prototype._triggerCloseEvent = function(e) {
            var t = r.Event(s.CLOSE);
            return r(e).trigger(t),
            t
        }
        ,
        i.prototype._removeElement = function(t) {
            var n = this;
            if (r(t).removeClass(c),
            r(t).hasClass(l)) {
                var e = Util.getTransitionDurationFromElement(t);
                r(t).one(Util.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else
                this._destroyElement(t)
        }
        ,
        i.prototype._destroyElement = function(e) {
            r(e).detach().trigger(s.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = r(this)
                  , t = e.data(o);
                t || (t = new i(this),
                e.data(o, t)),
                "close" === n && t[n](this)
            })
        }
        ,
        i._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        _createClass(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        i
    }();
    return r(document).on(s.CLICK_DATA_API, '[data-dismiss="alert"]', i._handleDismiss(new i)),
    r.fn[e] = i._jQueryInterface,
    r.fn[e].Constructor = i,
    r.fn[e].noConflict = function() {
        return r.fn[e] = n,
        i._jQueryInterface
    }
    ,
    i
}($)
  , Button = function(o) {
    var e = "button"
      , i = "bs.button"
      , t = "." + i
      , n = ".data-api"
      , r = o.fn[e]
      , s = "active"
      , a = "btn"
      , l = "focus"
      , c = '[data-toggle^="button"]'
      , u = '[data-toggle="buttons"]'
      , f = "input"
      , d = ".active"
      , p = ".btn"
      , h = {
        CLICK_DATA_API: "click" + t + n,
        FOCUS_BLUR_DATA_API: "focus" + t + n + " blur" + t + n
    }
      , m = function() {
        function n(e) {
            _classCallCheck(this, n),
            this._element = e
        }
        return n.prototype.toggle = function() {
            var e = !0
              , t = !0
              , n = o(this._element).closest(u)[0];
            if (n) {
                var i = this._element.querySelector(f);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(s))
                            e = !1;
                        else {
                            var r = n.querySelector(d);
                            r && o(r).removeClass(s)
                        }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(s),
                        o(i).trigger("change")
                    }
                    i.focus(),
                    t = !1
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(s)),
            e && o(this._element).toggleClass(s)
        }
        ,
        n.prototype.dispose = function() {
            o.removeData(this._element, i),
            this._element = null
        }
        ,
        n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = o(this).data(i);
                e || (e = new n(this),
                o(this).data(i, e)),
                "toggle" === t && e[t]()
            })
        }
        ,
        _createClass(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        n
    }();
    return o(document).on(h.CLICK_DATA_API, c, function(e) {
        e.preventDefault();
        var t = e.target;
        o(t).hasClass(a) || (t = o(t).closest(p)),
        m._jQueryInterface.call(o(t), "toggle")
    }).on(h.FOCUS_BLUR_DATA_API, c, function(e) {
        var t = o(e.target).closest(p)[0];
        o(t).toggleClass(l, /^focus(in)?$/.test(e.type))
    }),
    o.fn[e] = m._jQueryInterface,
    o.fn[e].Constructor = m,
    o.fn[e].noConflict = function() {
        return o.fn[e] = r,
        m._jQueryInterface
    }
    ,
    m
}($)
  , Carousel = function(p) {
    var t = "carousel"
      , s = "bs.carousel"
      , e = "." + s
      , n = ".data-api"
      , i = p.fn[t]
      , r = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0
    }
      , a = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    }
      , h = "next"
      , l = "prev"
      , m = "left"
      , g = "right"
      , v = {
        SLIDE: "slide" + e,
        SLID: "slid" + e,
        KEYDOWN: "keydown" + e,
        MOUSEENTER: "mouseenter" + e,
        MOUSELEAVE: "mouseleave" + e,
        TOUCHEND: "touchend" + e,
        LOAD_DATA_API: "load" + e + n,
        CLICK_DATA_API: "click" + e + n
    }
      , c = "carousel"
      , y = "active"
      , _ = "slide"
      , b = "carousel-item-right"
      , w = "carousel-item-left"
      , E = "carousel-item-next"
      , C = "carousel-item-prev"
      , T = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
    }
      , o = function() {
        function o(e, t) {
            _classCallCheck(this, o),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._config = this._getConfig(t),
            this._element = p(e)[0],
            this._indicatorsElement = this._element.querySelector(T.INDICATORS),
            this._addEventListeners()
        }
        return o.prototype.next = function() {
            this._isSliding || this._slide(h)
        }
        ,
        o.prototype.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
        }
        ,
        o.prototype.prev = function() {
            this._isSliding || this._slide(l)
        }
        ,
        o.prototype.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(T.NEXT_PREV) && (Util.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        o.prototype.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        o.prototype.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(T.ACTIVE_ITEM);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    p(this._element).one(v.SLID, function() {
                        return t.to(e)
                    });
                else {
                    if (n === e)
                        return this.pause(),
                        void this.cycle();
                    var i = n < e ? h : l;
                    this._slide(i, this._items[e])
                }
        }
        ,
        o.prototype.dispose = function() {
            p(this._element).off(e),
            p.removeData(this._element, s),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        o.prototype._getConfig = function(e) {
            return e = _extends2({}, r, e),
            Util.typeCheckConfig(t, e, a),
            e
        }
        ,
        o.prototype._addEventListeners = function() {
            var t = this;
            this._config.keyboard && p(this._element).on(v.KEYDOWN, function(e) {
                return t._keydown(e)
            }),
            "hover" === this._config.pause && (p(this._element).on(v.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(v.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }),
            "ontouchstart"in document.documentElement && p(this._element).on(v.TOUCHEND, function() {
                t.pause(),
                t.touchTimeout && clearTimeout(t.touchTimeout),
                t.touchTimeout = setTimeout(function(e) {
                    return t.cycle(e)
                }, 500 + t._config.interval)
            }))
        }
        ,
        o.prototype._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        o.prototype._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(T.ITEM)) : [],
            this._items.indexOf(e)
        }
        ,
        o.prototype._getItemByDirection = function(e, t) {
            var n = e === h
              , i = e === l
              , r = this._getItemIndex(t)
              , o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap)
                return t;
            var s = (r + (e === l ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        o.prototype._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e)
              , i = this._getItemIndex(this._element.querySelector(T.ACTIVE_ITEM))
              , r = p.Event(v.SLIDE, {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            });
            return p(this._element).trigger(r),
            r
        }
        ,
        o.prototype._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(T.ACTIVE));
                p(t).removeClass(y);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && p(n).addClass(y)
            }
        }
        ,
        o.prototype._slide = function(e, t) {
            var n = this
              , i = this._element.querySelector(T.ACTIVE_ITEM)
              , r = this._getItemIndex(i)
              , o = t || i && this._getItemByDirection(e, i)
              , s = this._getItemIndex(o)
              , a = Boolean(this._interval)
              , l = void 0
              , c = void 0
              , u = void 0;
            if (e === h ? (l = w,
            c = E,
            u = m) : (l = b,
            c = C,
            u = g),
            o && p(o).hasClass(y))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(o, u).isDefaultPrevented() && i && o) {
                this._isSliding = !0,
                a && this.pause(),
                this._setActiveIndicatorElement(o);
                var f = p.Event(v.SLID, {
                    relatedTarget: o,
                    direction: u,
                    from: r,
                    to: s
                });
                if (p(this._element).hasClass(_)) {
                    p(o).addClass(c),
                    Util.reflow(o),
                    p(i).addClass(l),
                    p(o).addClass(l);
                    var d = Util.getTransitionDurationFromElement(i);
                    p(i).one(Util.TRANSITION_END, function() {
                        p(o).removeClass(l + " " + c).addClass(y),
                        p(i).removeClass(y + " " + c + " " + l),
                        n._isSliding = !1,
                        setTimeout(function() {
                            return p(n._element).trigger(f)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else
                    p(i).removeClass(y),
                    p(o).addClass(y),
                    this._isSliding = !1,
                    p(this._element).trigger(f);
                a && this.cycle()
            }
        }
        ,
        o._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this).data(s)
                  , t = _extends2({}, r, p(this).data());
                "object" === (void 0 === i ? "undefined" : _typeof(i)) && (t = _extends2({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new o(this,t),
                p(this).data(s, e)),
                "number" == typeof i)
                    e.to(i);
                else if ("string" == typeof n) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else
                    t.interval && (e.pause(),
                    e.cycle())
            })
        }
        ,
        o._dataApiClickHandler = function(e) {
            var t = Util.getSelectorFromElement(this);
            if (t) {
                var n = p(t)[0];
                if (n && p(n).hasClass(c)) {
                    var i = _extends2({}, p(n).data(), p(this).data())
                      , r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1),
                    o._jQueryInterface.call(p(n), i),
                    r && p(n).data(s).to(r),
                    e.preventDefault()
                }
            }
        }
        ,
        _createClass(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return r
            }
        }]),
        o
    }();
    return p(document).on(v.CLICK_DATA_API, T.DATA_SLIDE, o._dataApiClickHandler),
    p(window).on(v.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(T.DATA_RIDE)), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            o._jQueryInterface.call(i, i.data())
        }
    }),
    p.fn[t] = o._jQueryInterface,
    p.fn[t].Constructor = o,
    p.fn[t].noConflict = function() {
        return p.fn[t] = i,
        o._jQueryInterface
    }
    ,
    o
}($)
  , Collapse = function(c) {
    var t = "collapse"
      , a = "bs.collapse"
      , e = "." + a
      , n = c.fn[t]
      , r = {
        toggle: !0,
        parent: ""
    }
      , i = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , u = {
        SHOW: "show" + e,
        SHOWN: "shown" + e,
        HIDE: "hide" + e,
        HIDDEN: "hidden" + e,
        CLICK_DATA_API: "click" + e + ".data-api"
    }
      , f = "show"
      , d = "collapse"
      , p = "collapsing"
      , h = "collapsed"
      , o = "width"
      , s = "height"
      , m = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
    }
      , l = function() {
        function l(t, e) {
            _classCallCheck(this, l),
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = c.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(m.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
                var o = n[i]
                  , s = Util.getSelectorFromElement(o)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        return l.prototype.toggle = function() {
            c(this._element).hasClass(f) ? this.hide() : this.show()
        }
        ,
        l.prototype.show = function() {
            var t = this;
            if (!this._isTransitioning && !c(this._element).hasClass(f)) {
                var e = void 0
                  , n = void 0;
                if (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(m.ACTIVES)).filter(function(e) {
                    return e.getAttribute("data-parent") === t._config.parent
                })).length && (e = null),
                !(e && (n = c(e).not(this._selector).data(a)) && n._isTransitioning)) {
                    var i = c.Event(u.SHOW);
                    if (c(this._element).trigger(i),
                    !i.isDefaultPrevented()) {
                        e && (l._jQueryInterface.call(c(e).not(this._selector), "hide"),
                        n || c(e).data(a, null));
                        var r = this._getDimension();
                        c(this._element).removeClass(d).addClass(p),
                        this._element.style[r] = 0,
                        this._triggerArray.length && c(this._triggerArray).removeClass(h).attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1))
                          , s = Util.getTransitionDurationFromElement(this._element);
                        c(this._element).one(Util.TRANSITION_END, function() {
                            c(t._element).removeClass(p).addClass(d).addClass(f),
                            t._element.style[r] = "",
                            t.setTransitioning(!1),
                            c(t._element).trigger(u.SHOWN)
                        }).emulateTransitionEnd(s),
                        this._element.style[r] = this._element[o] + "px"
                    }
                }
            }
        }
        ,
        l.prototype.hide = function() {
            var e = this;
            if (!this._isTransitioning && c(this._element).hasClass(f)) {
                var t = c.Event(u.HIDE);
                if (c(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    Util.reflow(this._element),
                    c(this._element).addClass(p).removeClass(d).removeClass(f);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var r = 0; r < i; r++) {
                            var o = this._triggerArray[r]
                              , s = Util.getSelectorFromElement(o);
                            if (null !== s)
                                c([].slice.call(document.querySelectorAll(s))).hasClass(f) || c(o).addClass(h).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = Util.getTransitionDurationFromElement(this._element);
                    c(this._element).one(Util.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        c(e._element).removeClass(p).addClass(d).trigger(u.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        l.prototype.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        l.prototype.dispose = function() {
            c.removeData(this._element, a),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        l.prototype._getConfig = function(e) {
            return (e = _extends2({}, r, e)).toggle = Boolean(e.toggle),
            Util.typeCheckConfig(t, e, i),
            e
        }
        ,
        l.prototype._getDimension = function() {
            return c(this._element).hasClass(o) ? o : s
        }
        ,
        l.prototype._getParent = function() {
            var n = this
              , e = null;
            Util.isElement(this._config.parent) ? (e = this._config.parent,
            void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(e.querySelectorAll(t));
            return c(i).each(function(e, t) {
                n._addAriaAndCollapsedClass(l._getTargetFromElement(t), [t])
            }),
            e
        }
        ,
        l.prototype._addAriaAndCollapsedClass = function(e, t) {
            if (e) {
                var n = c(e).hasClass(f);
                t.length && c(t).toggleClass(h, !n).attr("aria-expanded", n)
            }
        }
        ,
        l._getTargetFromElement = function(e) {
            var t = Util.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        l._jQueryInterface = function(i) {
            return this.each(function() {
                var e = c(this)
                  , t = e.data(a)
                  , n = _extends2({}, r, e.data(), "object" === (void 0 === i ? "undefined" : _typeof(i)) && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                t || (t = new l(this,n),
                e.data(a, t)),
                "string" == typeof i) {
                    if (void 0 === t[i])
                        throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }
        ,
        _createClass(l, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return r
            }
        }]),
        l
    }();
    return c(document).on(u.CLICK_DATA_API, m.DATA_TOGGLE, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = c(this)
          , t = Util.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(t));
        c(i).each(function() {
            var e = c(this)
              , t = e.data(a) ? "toggle" : n.data();
            l._jQueryInterface.call(e, t)
        })
    }),
    c.fn[t] = l._jQueryInterface,
    c.fn[t].Constructor = l,
    c.fn[t].noConflict = function() {
        return c.fn[t] = n,
        l._jQueryInterface
    }
    ,
    l
}($)
  , dropdownI = function(u) {
    var t = "dropdownI"
      , f = "bs.dropdownI"
      , e = "." + f
      , n = ".data-api"
      , i = u.fn[t]
      , s = new RegExp("38|40|27")
      , d = {
        HIDE: "hide" + e,
        HIDDEN: "hidden" + e,
        SHOW: "show" + e,
        SHOWN: "shown" + e,
        CLICK: "click" + e,
        CLICK_DATA_API: "click" + e + n,
        KEYDOWN_DATA_API: "keydown" + e + n,
        KEYUP_DATA_API: "keyup" + e + n
    }
      , a = "disabled"
      , p = "show"
      , r = "dropup"
      , o = "dropright"
      , l = "dropleft"
      , h = "dropdownI-menu-right"
      , m = "position-static"
      , g = '[data-toggle="dropdownI"]'
      , c = ".dropdownI form"
      , v = ".dropdownI-menu"
      , y = ".navbar-nav"
      , _ = ".dropdownI-menu .dropdownI-item:not(.disabled):not(:disabled)"
      , b = "top-start"
      , w = "top-end"
      , E = "bottom-start"
      , C = "bottom-end"
      , T = "right-start"
      , x = "left-start"
      , S = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , A = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , D = function() {
        function c(e, t) {
            _classCallCheck(this, c),
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        return c.prototype.toggle = function() {
            if (!this._element.disabled && !u(this._element).hasClass(a)) {
                var e = c._getParentFromElement(this._element)
                  , t = u(this._menu).hasClass(p);
                if (c._clearMenus(),
                !t) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = u.Event(d.SHOW, n);
                    if (u(e).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof Popper)
                                throw new TypeError("Bootstrap dropdownI require Popper.js (https://popper.js.org)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : Util.isElement(this._config.reference) && (r = this._config.reference,
                            void 0 !== this._config.reference.jquery && (r = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && u(e).addClass(m),
                            this._popper = new Popper(r,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === u(e).closest(y).length && u(document.body).children().on("mouseover", null, u.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        u(this._menu).toggleClass(p),
                        u(e).toggleClass(p).trigger(u.Event(d.SHOWN, n))
                    }
                }
            }
        }
        ,
        c.prototype.dispose = function() {
            u.removeData(this._element, f),
            u(this._element).off(e),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        c.prototype.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        c.prototype._addEventListeners = function() {
            var t = this;
            u(this._element).on(d.CLICK, function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            })
        }
        ,
        c.prototype._getConfig = function(e) {
            return e = _extends2({}, this.constructor.Default, u(this._element).data(), e),
            Util.typeCheckConfig(t, e, this.constructor.DefaultType),
            e
        }
        ,
        c.prototype._getMenuElement = function() {
            if (!this._menu) {
                var e = c._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(v))
            }
            return this._menu
        }
        ,
        c.prototype._getPlacement = function() {
            var e = u(this._element.parentNode)
              , t = E;
            return e.hasClass(r) ? (t = b,
            u(this._menu).hasClass(h) && (t = w)) : e.hasClass(o) ? t = T : e.hasClass(l) ? t = x : u(this._menu).hasClass(h) && (t = C),
            t
        }
        ,
        c.prototype._detectNavbar = function() {
            return 0 < u(this._element).closest(".navbar").length
        }
        ,
        c.prototype._getPopperConfig = function() {
            var t = this
              , e = {};
            "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = _extends2({}, e.offsets, t._config.offset(e.offsets) || {}),
                e
            }
            : e.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: e,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            n
        }
        ,
        c._jQueryInterface = function(n) {
            return this.each(function() {
                var e = u(this).data(f)
                  , t = "object" === (void 0 === n ? "undefined" : _typeof(n)) ? n : null;
                if (e || (e = new c(this,t),
                u(this).data(f, e)),
                "string" == typeof n) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        c._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(g)), n = 0, i = t.length; n < i; n++) {
                    var r = c._getParentFromElement(t[n])
                      , o = u(t[n]).data(f)
                      , s = {
                        relatedTarget: t[n]
                    };
                    if (e && "click" === e.type && (s.clickEvent = e),
                    o) {
                        var a = o._menu;
                        if (u(r).hasClass(p) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && u.contains(r, e.target))) {
                            var l = u.Event(d.HIDE, s);
                            u(r).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && u(document.body).children().off("mouseover", null, u.noop),
                            t[n].setAttribute("aria-expanded", "false"),
                            u(a).removeClass(p),
                            u(r).removeClass(p).trigger(u.Event(d.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(e) {
            var t = void 0
              , n = Util.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || u(e.target).closest(v).length)) : s.test(e.which)) && (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !u(this).hasClass(a))) {
                var t = c._getParentFromElement(this)
                  , n = u(t).hasClass(p);
                if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = [].slice.call(t.querySelectorAll(_));
                    if (0 !== i.length) {
                        var r = i.indexOf(e.target);
                        38 === e.which && 0 < r && r--,
                        40 === e.which && r < i.length - 1 && r++,
                        r < 0 && (r = 0),
                        i[r].focus()
                    }
                } else {
                    if (27 === e.which) {
                        var o = t.querySelector(g);
                        u(o).trigger("focus")
                    }
                    u(this).trigger("click")
                }
            }
        }
        ,
        _createClass(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return S
            }
        }, {
            key: "DefaultType",
            get: function() {
                return A
            }
        }]),
        c
    }();
    return u(document).on(d.KEYDOWN_DATA_API, g, D._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API, v, D._dataApiKeydownHandler).on(d.CLICK_DATA_API + " " + d.KEYUP_DATA_API, D._clearMenus).on(d.CLICK_DATA_API, g, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        D._jQueryInterface.call(u(this), "toggle")
    }).on(d.CLICK_DATA_API, c, function(e) {
        e.stopPropagation()
    }),
    u.fn[t] = D._jQueryInterface,
    u.fn[t].Constructor = D,
    u.fn[t].noConflict = function() {
        return u.fn[t] = i,
        D._jQueryInterface
    }
    ,
    D
}($, Popper)
  , Modal = function(s) {
    var t = "modal"
      , a = "bs.modal"
      , e = "." + a
      , n = s.fn[t]
      , o = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , i = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , l = {
        HIDE: "hide" + e,
        HIDDEN: "hidden" + e,
        SHOW: "show" + e,
        SHOWN: "shown" + e,
        FOCUSIN: "focusin" + e,
        RESIZE: "resize" + e,
        CLICK_DISMISS: "click.dismiss" + e,
        KEYDOWN_DISMISS: "keydown.dismiss" + e,
        MOUSEUP_DISMISS: "mouseup.dismiss" + e,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + e,
        CLICK_DATA_API: "click" + e + ".data-api"
    }
      , c = "modal-scrollbar-measure"
      , u = "modal-backdrop"
      , f = "modal-open"
      , d = "fade"
      , p = "show"
      , h = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top"
    }
      , m = function() {
        function r(e, t) {
            _classCallCheck(this, r),
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(h.DIALOG),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._scrollbarWidth = 0
        }
        return r.prototype.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        r.prototype.show = function(e) {
            var t = this;
            if (!this._isTransitioning && !this._isShown) {
                s(this._element).hasClass(d) && (this._isTransitioning = !0);
                var n = s.Event(l.SHOW, {
                    relatedTarget: e
                });
                s(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                s(document.body).addClass(f),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                s(this._element).on(l.CLICK_DISMISS, h.DATA_DISMISS, function(e) {
                    return t.hide(e)
                }),
                s(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                    s(t._element).one(l.MOUSEUP_DISMISS, function(e) {
                        s(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        r.prototype.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            !this._isTransitioning && this._isShown) {
                var n = s.Event(l.HIDE);
                if (s(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = s(this._element).hasClass(d);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    s(document).off(l.FOCUSIN),
                    s(this._element).removeClass(p),
                    s(this._element).off(l.CLICK_DISMISS),
                    s(this._dialog).off(l.MOUSEDOWN_DISMISS),
                    i) {
                        var r = Util.getTransitionDurationFromElement(this._element);
                        s(this._element).one(Util.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(r)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        r.prototype.dispose = function() {
            s.removeData(this._element, a),
            s(window, document, this._element, this._backdrop).off(e),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._scrollbarWidth = null
        }
        ,
        r.prototype.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        r.prototype._getConfig = function(e) {
            return e = _extends2({}, o, e),
            Util.typeCheckConfig(t, e, i),
            e
        }
        ,
        r.prototype._showElement = function(e) {
            var t = this
              , n = s(this._element).hasClass(d);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.scrollTop = 0,
            n && Util.reflow(this._element),
            s(this._element).addClass(p),
            this._config.focus && this._enforceFocus();
            var i = s.Event(l.SHOWN, {
                relatedTarget: e
            })
              , r = function() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                s(t._element).trigger(i)
            };
            if (n) {
                var o = Util.getTransitionDurationFromElement(this._element);
                s(this._dialog).one(Util.TRANSITION_END, r).emulateTransitionEnd(o)
            } else
                r()
        }
        ,
        r.prototype._enforceFocus = function() {
            var t = this;
            s(document).off(l.FOCUSIN).on(l.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === s(t._element).has(e.target).length && t._element.focus()
            })
        }
        ,
        r.prototype._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? s(this._element).on(l.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(),
                t.hide())
            }) : this._isShown || s(this._element).off(l.KEYDOWN_DISMISS)
        }
        ,
        r.prototype._setResizeEvent = function() {
            var t = this;
            this._isShown ? s(window).on(l.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : s(window).off(l.RESIZE)
        }
        ,
        r.prototype._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                s(document.body).removeClass(f),
                e._resetAdjustments(),
                e._resetScrollbar(),
                s(e._element).trigger(l.HIDDEN)
            })
        }
        ,
        r.prototype._removeBackdrop = function() {
            this._backdrop && (s(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        r.prototype._showBackdrop = function(e) {
            var t = this
              , n = s(this._element).hasClass(d) ? d : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = u,
                n && this._backdrop.classList.add(n),
                s(this._backdrop).appendTo(document.body),
                s(this._element).on(l.CLICK_DISMISS, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                }),
                n && Util.reflow(this._backdrop),
                s(this._backdrop).addClass(p),
                !e)
                    return;
                if (!n)
                    return void e();
                var i = Util.getTransitionDurationFromElement(this._backdrop);
                s(this._backdrop).one(Util.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                s(this._backdrop).removeClass(p);
                var r = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if (s(this._element).hasClass(d)) {
                    var o = Util.getTransitionDurationFromElement(this._backdrop);
                    s(this._backdrop).one(Util.TRANSITION_END, r).emulateTransitionEnd(o)
                } else
                    r()
            } else
                e && e()
        }
        ,
        r.prototype._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        r.prototype._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        r.prototype._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        r.prototype._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(h.FIXED_CONTENT))
                  , t = [].slice.call(document.querySelectorAll(h.STICKY_CONTENT));
                s(e).each(function(e, t) {
                    var n = t.style.paddingRight
                      , i = s(t).css("padding-right");
                    s(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }),
                s(t).each(function(e, t) {
                    var n = t.style.marginRight
                      , i = s(t).css("margin-right");
                    s(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = s(document.body).css("padding-right");
                s(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
        }
        ,
        r.prototype._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(h.FIXED_CONTENT));
            s(e).each(function(e, t) {
                var n = s(t).data("padding-right");
                s(t).removeData("padding-right"),
                t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll("" + h.STICKY_CONTENT));
            s(t).each(function(e, t) {
                var n = s(t).data("margin-right");
                void 0 !== n && s(t).css("margin-right", n).removeData("margin-right")
            });
            var n = s(document.body).data("padding-right");
            s(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        r.prototype._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = c,
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        r._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = s(this).data(a)
                  , t = _extends2({}, o, s(this).data(), "object" === (void 0 === n ? "undefined" : _typeof(n)) && n ? n : {});
                if (e || (e = new r(this,t),
                s(this).data(a, e)),
                "string" == typeof n) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else
                    t.show && e.show(i)
            })
        }
        ,
        _createClass(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return o
            }
        }]),
        r
    }();
    return s(document).on(l.CLICK_DATA_API, h.DATA_TOGGLE, function(e) {
        var t = this
          , n = void 0
          , i = Util.getSelectorFromElement(this);
        i && (n = document.querySelector(i));
        var r = s(n).data(a) ? "toggle" : _extends2({}, s(n).data(), s(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = s(n).one(l.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(l.HIDDEN, function() {
                s(t).is(":visible") && t.focus()
            })
        });
        m._jQueryInterface.call(s(n), r, this)
    }),
    s.fn[t] = m._jQueryInterface,
    s.fn[t].Constructor = m,
    s.fn[t].noConflict = function() {
        return s.fn[t] = n,
        m._jQueryInterface
    }
    ,
    m
}($)
  , Tooltip = function(u) {
    var t = "tooltip"
      , r = "bs.tooltip"
      , e = "." + r
      , n = u.fn[t]
      , o = "bs-tooltip"
      , s = new RegExp("(^|\\s)" + o + "\\S+","g")
      , a = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
    }
      , l = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , c = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    }
      , f = "show"
      , d = "out"
      , p = {
        HIDE: "hide" + e,
        HIDDEN: "hidden" + e,
        SHOW: "show" + e,
        SHOWN: "shown" + e,
        INSERTED: "inserted" + e,
        CLICK: "click" + e,
        FOCUSIN: "focusin" + e,
        FOCUSOUT: "focusout" + e,
        MOUSEENTER: "mouseenter" + e,
        MOUSELEAVE: "mouseleave" + e
    }
      , h = "fade"
      , m = "show"
      , g = ".tooltip-inner"
      , v = ".arrow"
      , y = "hover"
      , _ = "focus"
      , b = "click"
      , w = "manual"
      , i = function() {
        function i(e, t) {
            if (_classCallCheck(this, i),
            "undefined" == typeof Popper)
                throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        return i.prototype.enable = function() {
            this._isEnabled = !0
        }
        ,
        i.prototype.disable = function() {
            this._isEnabled = !1
        }
        ,
        i.prototype.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        i.prototype.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = u(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    u(e.currentTarget).data(t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (u(this.getTipElement()).hasClass(m))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        i.prototype.dispose = function() {
            clearTimeout(this._timeout),
            u.removeData(this.element, this.constructor.DATA_KEY),
            u(this.element).off(this.constructor.EVENT_KEY),
            u(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && u(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        i.prototype.show = function() {
            var t = this;
            if ("none" === u(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = u.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                u(this.element).trigger(e);
                var n = u.contains(this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !n)
                    return;
                var i = this.getTipElement()
                  , r = Util.getUID(this.constructor.NAME);
                i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && u(i).addClass(h);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement
                  , s = this._getAttachment(o);
                this.addAttachmentClass(s);
                var a = !1 === this.config.container ? document.body : u(document).find(this.config.container);
                u(i).data(this.constructor.DATA_KEY, this),
                u.contains(this.element.ownerDocument.documentElement, this.tip) || u(i).appendTo(a),
                u(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new Popper(this.element,i,{
                    placement: s,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: v
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        t._handlePopperPlacementChange(e)
                    }
                }),
                u(i).addClass(m),
                "ontouchstart"in document.documentElement && u(document.body).children().on("mouseover", null, u.noop);
                var l = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    u(t.element).trigger(t.constructor.Event.SHOWN),
                    e === d && t._leave(null, t)
                };
                if (u(this.tip).hasClass(h)) {
                    var c = Util.getTransitionDurationFromElement(this.tip);
                    u(this.tip).one(Util.TRANSITION_END, l).emulateTransitionEnd(c)
                } else
                    l()
            }
        }
        ,
        i.prototype.hide = function(e) {
            var t = this
              , n = this.getTipElement()
              , i = u.Event(this.constructor.Event.HIDE)
              , r = function() {
                t._hoverState !== f && n.parentNode && n.parentNode.removeChild(n),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                u(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                e && e()
            };
            if (u(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (u(n).removeClass(m),
                "ontouchstart"in document.documentElement && u(document.body).children().off("mouseover", null, u.noop),
                this._activeTrigger[b] = !1,
                this._activeTrigger[_] = !1,
                this._activeTrigger[y] = !1,
                u(this.tip).hasClass(h)) {
                    var o = Util.getTransitionDurationFromElement(n);
                    u(n).one(Util.TRANSITION_END, r).emulateTransitionEnd(o)
                } else
                    r();
                this._hoverState = ""
            }
        }
        ,
        i.prototype.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        i.prototype.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        i.prototype.addAttachmentClass = function(e) {
            u(this.getTipElement()).addClass(o + "-" + e)
        }
        ,
        i.prototype.getTipElement = function() {
            return this.tip = this.tip || u(this.config.template)[0],
            this.tip
        }
        ,
        i.prototype.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(u(e.querySelectorAll(g)), this.getTitle()),
            u(e).removeClass(h + " " + m)
        }
        ,
        i.prototype.setElementContent = function(e, t) {
            var n = this.config.html;
            "object" === (void 0 === t ? "undefined" : _typeof(t)) && (t.nodeType || t.jquery) ? n ? u(t).parent().is(e) || e.empty().append(t) : e.text(u(t).text()) : e[n ? "html" : "text"](t)
        }
        ,
        i.prototype.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            e
        }
        ,
        i.prototype._getAttachment = function(e) {
            return l[e.toUpperCase()]
        }
        ,
        i.prototype._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e)
                    u(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                else if (e !== w) {
                    var t = e === y ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = e === y ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    u(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e)
                    })
                }
                u(i.element).closest(".modal").on("hide.bs.modal", function() {
                    return i.hide()
                })
            }),
            this.config.selector ? this.config = _extends2({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        i.prototype._fixTitle = function() {
            var e = _typeof(this.element.getAttribute("data-original-title"));
            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        i.prototype._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || u(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            u(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? _ : y] = !0),
            u(t.getTipElement()).hasClass(m) || t._hoverState === f ? t._hoverState = f : (clearTimeout(t._timeout),
            t._hoverState = f,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === f && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        i.prototype._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || u(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            u(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? _ : y] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = d,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === d && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        i.prototype._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        i.prototype._getConfig = function(e) {
            return "number" == typeof (e = _extends2({}, this.constructor.Default, u(this.element).data(), "object" === (void 0 === e ? "undefined" : _typeof(e)) && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            Util.typeCheckConfig(t, e, this.constructor.DefaultType),
            e
        }
        ,
        i.prototype._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        i.prototype._cleanTipClass = function() {
            var e = u(this.getTipElement())
              , t = e.attr("class").match(s);
            null !== t && t.length && e.removeClass(t.join(""))
        }
        ,
        i.prototype._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        i.prototype._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (u(e).removeClass(h),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = u(this).data(r)
                  , t = "object" === (void 0 === n ? "undefined" : _typeof(n)) && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                u(this).data(r, e)),
                "string" == typeof n)) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        _createClass(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return c
            }
        }, {
            key: "NAME",
            get: function() {
                return t
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return r
            }
        }, {
            key: "Event",
            get: function() {
                return p
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return e
            }
        }, {
            key: "DefaultType",
            get: function() {
                return a
            }
        }]),
        i
    }();
    return u.fn[t] = i._jQueryInterface,
    u.fn[t].Constructor = i,
    u.fn[t].noConflict = function() {
        return u.fn[t] = n,
        i._jQueryInterface
    }
    ,
    i
}($, Popper)
  , Popover = function(r) {
    var t = "popover"
      , o = "bs.popover"
      , n = "." + o
      , e = r.fn[t]
      , s = "bs-popover"
      , a = new RegExp("(^|\\s)" + s + "\\S+","g")
      , l = _extends2({}, Tooltip.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , c = _extends2({}, Tooltip.DefaultType, {
        content: "(string|element|function)"
    })
      , u = "fade"
      , f = "show"
      , d = ".popover-header"
      , p = ".popover-body"
      , h = {
        HIDE: "hide" + n,
        HIDDEN: "hidden" + n,
        SHOW: "show" + n,
        SHOWN: "shown" + n,
        INSERTED: "inserted" + n,
        CLICK: "click" + n,
        FOCUSIN: "focusin" + n,
        FOCUSOUT: "focusout" + n,
        MOUSEENTER: "mouseenter" + n,
        MOUSELEAVE: "mouseleave" + n
    }
      , i = function(e) {
        function i() {
            return _classCallCheck(this, i),
            _possibleConstructorReturn(this, e.apply(this, arguments))
        }
        return _inherits(i, e),
        i.prototype.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        i.prototype.addAttachmentClass = function(e) {
            r(this.getTipElement()).addClass(s + "-" + e)
        }
        ,
        i.prototype.getTipElement = function() {
            return this.tip = this.tip || r(this.config.template)[0],
            this.tip
        }
        ,
        i.prototype.setContent = function() {
            var e = r(this.getTipElement());
            this.setElementContent(e.find(d), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(p), t),
            e.removeClass(u + " " + f)
        }
        ,
        i.prototype._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        i.prototype._cleanTipClass = function() {
            var e = r(this.getTipElement())
              , t = e.attr("class").match(a);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = r(this).data(o)
                  , t = "object" === (void 0 === n ? "undefined" : _typeof(n)) ? n : null;
                if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this,t),
                r(this).data(o, e)),
                "string" == typeof n)) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        _createClass(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return l
            }
        }, {
            key: "NAME",
            get: function() {
                return t
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return o
            }
        }, {
            key: "Event",
            get: function() {
                return h
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return n
            }
        }, {
            key: "DefaultType",
            get: function() {
                return c
            }
        }]),
        i
    }(Tooltip);
    return r.fn[t] = i._jQueryInterface,
    r.fn[t].Constructor = i,
    r.fn[t].noConflict = function() {
        return r.fn[t] = e,
        i._jQueryInterface
    }
    ,
    i
}($)
  , ScrollSpy = function(s) {
    var n = "scrollspy"
      , r = "bs.scrollspy"
      , e = "." + r
      , t = s.fn[n]
      , o = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , a = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , l = {
        ACTIVATE: "activate" + e,
        SCROLL: "scroll" + e,
        LOAD_DATA_API: "load" + e + ".data-api"
    }
      , c = "dropdownI-item"
      , u = "active"
      , f = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        dropdownI: ".dropdownI",
        dropdownI_ITEMS: ".dropdownI-item",
        dropdownI_TOGGLE: ".dropdownI-toggle"
    }
      , d = "offset"
      , p = "position"
      , i = function() {
        function i(e, t) {
            var n = this;
            _classCallCheck(this, i),
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.dropdownI_ITEMS,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            s(this._scrollElement).on(l.SCROLL, function(e) {
                return n._process(e)
            }),
            this.refresh(),
            this._process()
        }
        return i.prototype.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? d : p
              , r = "auto" === this._config.method ? e : this._config.method
              , o = r === p ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t = void 0
                  , n = Util.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)),
                t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height)
                        return [s(t)[r]().top + o, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            })
        }
        ,
        i.prototype.dispose = function() {
            s.removeData(this._element, r),
            s(this._scrollElement).off(e),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        i.prototype._getConfig = function(e) {
            if ("string" != typeof (e = _extends2({}, o, "object" === (void 0 === e ? "undefined" : _typeof(e)) && e ? e : {})).target) {
                var t = s(e.target).attr("id");
                t || (t = Util.getUID(n),
                s(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return Util.typeCheckConfig(n, e, a),
            e
        }
        ,
        i.prototype._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        i.prototype._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        i.prototype._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        i.prototype._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var r = this._offsets.length; r--; ) {
                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }
        }
        ,
        i.prototype._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",");
            e = e.map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            });
            var n = s([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass(c) ? (n.closest(f.dropdownI).find(f.dropdownI_TOGGLE).addClass(u),
            n.addClass(u)) : (n.addClass(u),
            n.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u),
            n.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),
            s(this._scrollElement).trigger(l.ACTIVATE, {
                relatedTarget: t
            })
        }
        ,
        i.prototype._clear = function() {
            var e = [].slice.call(document.querySelectorAll(this._selector));
            s(e).filter(f.ACTIVE).removeClass(u)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = s(this).data(r)
                  , t = "object" === (void 0 === n ? "undefined" : _typeof(n)) && n;
                if (e || (e = new i(this,t),
                s(this).data(r, e)),
                "string" == typeof n) {
                    if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        _createClass(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }, {
            key: "Default",
            get: function() {
                return o
            }
        }]),
        i
    }();
    return s(window).on(l.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(f.DATA_SPY)), t = e.length; t--; ) {
            var n = s(e[t]);
            i._jQueryInterface.call(n, n.data())
        }
    }),
    s.fn[n] = i._jQueryInterface,
    s.fn[n].Constructor = i,
    s.fn[n].noConflict = function() {
        return s.fn[n] = t,
        i._jQueryInterface
    }
    ,
    i
}($)
  , Tab = function(c) {
    var r = "bs.tab"
      , e = "." + r
      , t = c.fn.tab
      , u = {
        HIDE: "hide" + e,
        HIDDEN: "hidden" + e,
        SHOW: "show" + e,
        SHOWN: "shown" + e,
        CLICK_DATA_API: "click" + e + ".data-api"
    }
      , s = "dropdownI-menu"
      , f = "active"
      , d = "disabled"
      , l = "fade"
      , a = "show"
      , p = ".dropdownI"
      , h = ".nav, .list-group"
      , m = ".active"
      , g = "> li > .active"
      , n = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , v = ".dropdownI-toggle"
      , y = "> .dropdownI-menu .active"
      , i = function() {
        function i(e) {
            _classCallCheck(this, i),
            this._element = e
        }
        return i.prototype.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && c(this._element).hasClass(f) || c(this._element).hasClass(d))) {
                var e = void 0
                  , i = void 0
                  , t = c(this._element).closest(h)[0]
                  , r = Util.getSelectorFromElement(this._element);
                if (t) {
                    var o = "UL" === t.nodeName ? g : m;
                    i = (i = c.makeArray(c(t).find(o)))[i.length - 1]
                }
                var s = c.Event(u.HIDE, {
                    relatedTarget: this._element
                })
                  , a = c.Event(u.SHOW, {
                    relatedTarget: i
                });
                if (i && c(i).trigger(s),
                c(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)),
                    this._activate(this._element, t);
                    var l = function() {
                        var e = c.Event(u.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , t = c.Event(u.SHOWN, {
                            relatedTarget: i
                        });
                        c(i).trigger(e),
                        c(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }
        ,
        i.prototype.dispose = function() {
            c.removeData(this._element, r),
            this._element = null
        }
        ,
        i.prototype._activate = function(e, t, n) {
            var i = this
              , r = ("UL" === t.nodeName ? c(t).find(g) : c(t).children(m))[0]
              , o = n && r && c(r).hasClass(l)
              , s = function() {
                return i._transitionComplete(e, r, n)
            };
            if (r && o) {
                var a = Util.getTransitionDurationFromElement(r);
                c(r).one(Util.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        i.prototype._transitionComplete = function(e, t, n) {
            if (t) {
                c(t).removeClass(a + " " + f);
                var i = c(t.parentNode).find(y)[0];
                i && c(i).removeClass(f),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (c(e).addClass(f),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            Util.reflow(e),
            c(e).addClass(a),
            e.parentNode && c(e.parentNode).hasClass(s)) {
                var r = c(e).closest(p)[0];
                if (r) {
                    var o = [].slice.call(r.querySelectorAll(v));
                    c(o).addClass(f)
                }
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = c(this)
                  , t = e.data(r);
                if (t || (t = new i(this),
                e.data(r, t)),
                "string" == typeof n) {
                    if (void 0 === t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        _createClass(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.1.3"
            }
        }]),
        i
    }();
    return c(document).on(u.CLICK_DATA_API, n, function(e) {
        e.preventDefault(),
        i._jQueryInterface.call(c(this), "show")
    }),
    c.fn.tab = i._jQueryInterface,
    c.fn.tab.Constructor = i,
    c.fn.tab.noConflict = function() {
        return c.fn.tab = t,
        i._jQueryInterface
    }
    ,
    i
}($);
$.fn.autocomplete = function(options) {
    var defaults = {
        data: {}
    }
      , ENTER_CHAR_CODE = 13;
    return options = $.extend(defaults, options),
    this.each(function() {
        var $input = $(this)
          , $autocomplete = void 0
          , data = eval($(this).attr("data-db"));
        Object.keys(data).length && ($autocomplete = $('<ul class="autocomplete-wrap"></ul>'),
        $autocomplete.insertAfter($(this))),
        $input.after('<button class="autocomplete-clear" aria-label="Clear"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="https://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg></button>'),
        $input.on("keyup", function(e) {
            var t = $input.val();
            if ($autocomplete.empty(),
            t.length)
                for (var n in data)
                    if (-1 !== data[n].toLowerCase().indexOf(t.toLowerCase())) {
                        var i = $("<li>" + data[n] + "</li>");
                        $autocomplete.append(i)
                    }
            e.which === ENTER_CHAR_CODE && ($autocomplete.children(":first").trigger("click"),
            $autocomplete.empty()),
            $(".autocomplete-clear").toggle(0 !== t.length)
        }),
        $autocomplete.on("click", "li", function() {
            $input.val($(this).text()),
            $autocomplete.empty()
        }),
        $(".autocomplete-clear").on("click", function(e) {
            e.preventDefault(),
            $input.val(""),
            $(this).css("visibility", "hidden"),
            $autocomplete.empty(),
            $(this).parent().find("label").removeClass("active")
        })
    })
}
,
$(window).on("scroll", function() {
    $('a[data-attribute*="return-to-top"]').length && 50 <= $(this).scrollTop() ? $('a[data-attribute*="return-to-top"]').fadeIn(200) : $('a[data-attribute*="return-to-top"]').fadeOut(200)
}),
$('a[data-attribute*="return-to-top"]').on("click", function() {
    $("body,html").animate({
        scrollTop: 0
    }, 500)
});
var ComponenteBase = function(r) {
    var e = "componenteBase"
      , o = "bs.componente-base"
      , t = r.fn[e]
      , n = {
        CLICK_DATA_API: "click.bs.componente-base.data-api"
    }
      , i = function() {
        function i(e) {
            _classCallCheck(this, i),
            this._element = e
        }
        return i.prototype.publicFunction = function(e) {
            console.log(r(e).data("value"), i.VERSION)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = r(this)
                  , t = e.data(o);
                if (t || (t = new i(this),
                e.data(o, t)),
                "string" == typeof n) {
                    if (void 0 === t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](this)
                }
            })
        }
        ,
        i._handleConsole = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.publicFunction(this)
            }
        }
        ,
        _createClass(i, null, [{
            key: "VERSION",
            get: function() {
                return "1.0.0"
            }
        }]),
        i
    }();
    return r(document).on(n.CLICK_DATA_API, ".componente-base", i._handleConsole(new i)),
    r.fn[e] = i._jQueryInterface,
    r.fn[e].Constructor = i,
    r.fn[e].noConflict = function() {
        return r.fn[e] = t,
        i._jQueryInterface
    }
    ,
    i
}($)
  , Cookiebar = function(r) {
    var e = "cookiebar"
      , o = "bs.cookiebar"
      , t = "." + o
      , n = ".data-api"
      , i = r.fn[e]
      , s = "cookies_consent"
      , a = ".cookiebar"
      , l = '[data-accept="cookiebar"]'
      , c = {
        CLOSE: "close" + t,
        CLOSED: "closed" + t,
        LOAD_DATA_API: "load" + t + n,
        CLICK_DATA_API: "click" + t + n
    }
      , u = "cookiebar"
      , f = "show"
      , d = function() {
        function i(e) {
            _classCallCheck(this, i),
            this._element = e
        }
        return i.prototype.show = function(e) {
            r(e).addClass(f).attr("aria-hidden", "false").attr("aria-live", "polite")
        }
        ,
        i.prototype.close = function(e) {
            e = e || this._element;
            var t = this._getRootElement(e);
            this._triggerCloseEvent(t).isDefaultPrevented() || (this._setCookieEU(),
            this._removeElement(t))
        }
        ,
        i.prototype.dispose = function() {
            r.removeData(this._element, o),
            this._element = null
        }
        ,
        i.prototype._setCookieEU = function() {
            var e = new Date;
            e.setDate(e.getDate() + 30);
            var t = escape("true") + "; expires=" + e.toUTCString();
            document.cookie = s + "=" + t + "; path=/"
        }
        ,
        i.prototype._getRootElement = function(e) {
            var t = Util.getSelectorFromElement(e)
              , n = !1;
            return t && (n = r(t)[0]),
            n || (n = r(e).closest("." + u)[0]),
            n
        }
        ,
        i.prototype._triggerCloseEvent = function(e) {
            var t = r.Event(c.CLOSE);
            return r(e).trigger(t),
            t
        }
        ,
        i.prototype._removeElement = function(e) {
            r(e).removeClass(f).attr("aria-hidden", "true").attr("aria-live", "off"),
            this._destroyElement(e)
        }
        ,
        i.prototype._destroyElement = function(e) {
            r(e).detach().trigger(c.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = r(this)
                  , t = e.data(o);
                if (t || (t = new i(this),
                e.data(o, t)),
                "string" == typeof n) {
                    if (void 0 === t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](this)
                }
            })
        }
        ,
        i._handleAccept = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        i._handleConsent = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        i._getCookieEU = function() {
            var e, t, n, i = document.cookie.split(";");
            for (e = 0; e < i.length; e++)
                if (t = i[e].substr(0, i[e].indexOf("=")),
                n = i[e].substr(i[e].indexOf("=") + 1),
                (t = t.replace(/^\s+|\s+$/g, "")) == s)
                    return unescape(n)
        }
        ,
        _createClass(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }]),
        i
    }();
    return r(document).on(c.CLICK_DATA_API, l, d._handleAccept(new d)),
    r(window).on(c.LOAD_DATA_API, function() {
        var e = r.makeArray(r(a));
        if (!d._getCookieEU())
            for (var t = e.length; t--; ) {
                var n = r(e[t]);
                d._jQueryInterface.call(n, "show")
            }
    }),
    r.fn[e] = d._jQueryInterface,
    r.fn[e].Constructor = d,
    r.fn[e].noConflict = function() {
        return r.fn[e] = i,
        d._jQueryInterface
    }
    ,
    d
}($)
  , Select = function(p) {
    var e = "custom-selectI"
      , r = "bs.custom-selectI"
      , t = "." + r
      , n = p.fn[e]
      , o = {}
      , i = {
        LOAD_DATA_API: "load" + t + ".data-api"
    }
      , s = ".custom-selectI"
      , a = function() {
        function i(e) {
            _classCallCheck(this, i),
            this._elements = [],
            this._element = e,
            this._customElement = null,
            this._isMultiple = !1,
            this._isSearchable = !1,
            this._optionsHover = !1,
            this._processImages()
        }
        return i.prototype.dispose = function() {
            p(window).off(t),
            p.removeData(this._element, r),
            this._elements = null,
            this._element = null,
            this._customElement = null,
            this._isMultiple = !1,
            this._isSearchable = !1,
            this._optionsHover = !1
        }
        ,
        i.prototype._handleResize = function() {}
        ,
        i.prototype._processImages = function() {
            var o = this
              , s = p(this._element)
              , e = this._guid()
              , a = []
              , t = p('<div class="select-wrapper"></div>')
              , n = s.children("option, optgroup")
              , l = [];
            this._isMultiple = Boolean(s.attr("multiple")),
            this._isSearchable = Boolean(s.attr("searchable")),
            this._customElement = p('\n        <ul id="select-options-' + e + '" class="dropdownI-menu ' + (this._isMultiple ? "multiple-select-dropdownI" : "") + '"></ul>\n      ');
            var i = s.find("option:selected").html() || s.find("option:first").html() || "";
            if (s.data("select-id")) {
                var r = "ul#select-options-" + s.data("select-id");
                s.parent().find("span.caret, input").remove().unwrap(),
                p(r).remove()
            }
            s.data("select-id", e),
            this._isSearchable && this._setSearchableOption(e),
            n && n.length && n.each(function() {
                var e = p(this);
                e.is("option") ? o._isMultiple ? o._appendOptionWithIcon(s, e, "multiple") : o._appendOptionWithIcon(s, e) : e.is("optgroup") && (o._customElement.append(p('\n              <li class="optgroup">\n                <span>' + e.attr("label") + "</span>\n              </li>\n            ")),
                e.children("option").each(function() {
                    o._appendOptionWithIcon(s, p(this), "optgroup-option")
                }))
            }),
            this._customElement.find("li:not(.optgroup)").each(function(i) {
                var r = p(this);
                r.click(function(e) {
                    if (!r.hasClass("disabled") && !r.hasClass("optgroup")) {
                        var t = !0;
                        if (o._isMultiple) {
                            p('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                return !t
                            });
                            var n = s.find("optgroup").length;
                            t = o._isSearchable ? n ? o._toggleEntryFromArray(l, r.index() - r.prevAll(".optgroup").length - 1, s) : o._toggleEntryFromArray(l, r.index() - 1, s) : n ? o._toggleEntryFromArray(l, r.index() - r.prevAll(".optgroup").length, s) : o._toggleEntryFromArray(l, r.index(), s),
                            d.trigger("focus")
                        } else
                            o._customElement.find("li").removeClass("active"),
                            r.toggleClass("active"),
                            d.val(r.text().trim());
                        o._activateOption(o._customElement, r),
                        s.find("option").eq(i).prop("selected", t),
                        s.trigger("change")
                    }
                    e.stopPropagation()
                })
            }),
            s.wrap(t);
            var c = p('<span class="caret it-expand"></span>');
            s.is(":disabled") && c.addClass("disabled");
            var u = i.replace(/"/g, "&quot;")
              , f = p('\n        <label class="sr-only" id="label-' + e + '">' + u + "</label>\n      ")
              , d = p('\n        <input type="text" class="dropdownI select-dropdownI" aria-labelledby="label-' + e + '" data-toggle="dropdownI" readonly="true" ' + (s.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + e + '" value="' + u + '" />\n      ');
            s.before(d),
            d.before(c).addClass(s.attr("class").replace("custom-selectI", "")),
            d.before(f),
            d.after(this._customElement),
            s.is(":disabled") || d.dropdownI({
                hover: !1,
                closeOnClick: !1
            }),
            s.attr("tabindex") && p(d[0]).attr("tabindex", s.attr("tabindex")),
            s.addClass("initialized"),
            !this._isMultiple && this._isSearchable && this._customElement.find("li").on("click", function() {
                d.trigger("close")
            }),
            this._customElement.hover(function() {
                o._optionsHover = !0
            }, function() {
                o._optionsHover = !1
            }),
            this._isMultiple && s.find("option:selected:not(:disabled)").each(function() {
                var e = p(this).index();
                o._toggleEntryFromArray(l, e, s),
                o._customElement.find("li").eq(e).find(":checkbox").prop("checked", !0)
            }),
            d.on({
                focus: function() {
                    if (p("ul.select-dropdownI").not(o._customElement[0]).is(":visible") && p("input.select-dropdownI").trigger("close"),
                    !o._customElement.is(":visible")) {
                        p(this).trigger("open", ["focus"]);
                        var e = p(this).val()
                          , t = o._customElement.find("li").filter(function() {
                            return p(this).text().toLowerCase() === e.toLowerCase()
                        })[0];
                        o._activateOption(o._customElement, t)
                    }
                },
                click: function(e) {
                    e.stopPropagation()
                },
                blur: function() {
                    o._isMultiple || o._isSearchable || p(this).trigger("close"),
                    o._customElement.find("li.selected").removeClass("selected")
                },
                keydown: function(e) {
                    if (9 !== e.which)
                        if (40 !== e.which || o._customElement.is(":visible")) {
                            if (13 !== e.which || o._customElement.is(":visible")) {
                                e.preventDefault();
                                var t = String.fromCharCode(e.which).toLowerCase();
                                if (t && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                                    a.push(t);
                                    var n = a.join("")
                                      , i = o._customElement.find("li").filter(function() {
                                        return 0 === p(this).text().toLowerCase().indexOf(n)
                                    })[0];
                                    i && o._activateOption(o._customElement, i)
                                }
                                if (13 === e.which) {
                                    var r = o._customElement.find("li.selected:not(.disabled)")[0];
                                    r && (p(r).trigger("click"),
                                    o._isMultiple || d.trigger("close"))
                                }
                                40 === e.which && (i = o._customElement.find("li.selected").length ? o._customElement.find("li.selected").next("li:not(.disabled)")[0] : o._customElement.find("li:not(.disabled)")[0],
                                o._activateOption(o._customElement, i)),
                                27 === e.which && d.trigger("close"),
                                38 === e.which && (i = o._customElement.find("li.selected").prev("li:not(.disabled)")[0]) && o._activateOption(o._customElement, i),
                                setTimeout(function() {
                                    a = []
                                }, 1e3)
                            }
                        } else
                            d.trigger("open");
                    else
                        d.trigger("close")
                }
            }),
            p(window).on("click", function() {
                (o._isMultiple || o._isSearchable) && (o._optionsHover || d.trigger("close"))
            })
        }
        ,
        i.prototype._activateOption = function(e, t) {
            t && (e.find("li.selected").removeClass("selected"),
            p(t).addClass("selected"))
        }
        ,
        i.prototype._setSearchableOption = function(e) {
            var t = p(this._element)
              , n = p('\n        <span class="search-wrap">\n          <label class="sr-only" id="label-search-' + e + '">Cerca</label>\n          <input type="text" aria-labelledby="label-search-' + e + '" class="search select-dropdownI-search" placeholder="' + t.attr("searchable") + '">\n        </span>\n      ');
            this._customElement.append(n),
            n.find(".search").on("keyup", function() {
                var e = p(this)
                  , t = e.closest("ul")
                  , n = e.val();
                t.find("li").find("span.filtrable").each(function() {
                    var e = p(this);
                    "string" == typeof this.outerText && (-1 === this.outerText.toLowerCase().indexOf(n.toLowerCase()) ? (e.hide(),
                    e.parent().hide()) : (e.show(),
                    e.parent().show()))
                })
            })
        }
        ,
        i.prototype._appendOptionWithIcon = function(e, t, n) {
            var i = t.is(":disabled") ? "disabled " : ""
              , r = "optgroup-option" === n ? "optgroup-option " : ""
              , o = t.data("icon")
              , s = t.attr("class");
            if (o) {
                var a = "";
                s && (a = ' class="' + s + '"');
                var l = this._isMultiple ? '<li class="' + i + '">\n                      <img alt="" src="' + o + '" ' + a + '>\n                      <span class="filtrable">\n                        <input type="checkbox" ' + i + ' aria-label="' + t.html() + '"/>\n                      </span>\n                    </li>' : '<li class="' + i + " " + r + '">\n                      <img alt="" src="' + o + '" ' + a + '>\n                      <span class="filtrable">\n                        ' + t.html() + "\n                      </span>\n                    </li>";
                return this._customElement.append(p(l)),
                !0
            }
            this._isMultiple ? this._customElement.append(p('\n          <li class="' + i + '">\n            <span class="filtrable"><input type="checkbox"' + i + ' aria-label="' + t.html() + '"/>' + t.html() + "</span>\n          </li>\n        ")) : this._customElement.append(p('\n          <li class="' + i + r + '">\n            <span class="filtrable">' + t.html() + "</span>\n          </li>\n        "))
        }
        ,
        i.prototype._toggleEntryFromArray = function(e, t, n) {
            var i = e.indexOf(t)
              , r = -1 === i;
            r ? e.push(t) : e.splice(i, 1),
            n.siblings("ul.dropdownI-menu").find("li:not(.optgroup)").eq(t).toggleClass("active"),
            n.find("option").eq(t).prop("selected", r);
            for (var o = "", s = 0, a = e.length; s < a; s++) {
                var l = n.find("option").eq(e[s]).text();
                o += 0 === s ? l : ", " + l
            }
            return "" === o && (o = n.find("option:disabled").eq(0).text()),
            n.siblings(".dropdownI").val(o),
            r
        }
        ,
        i.prototype._guid = function() {
            function e() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            return ("" + e() + e() + "-" + e() + "-4" + e().substr(0, 3) + "-" + e() + "-" + e() + e() + e()).toLowerCase()
        }
        ,
        i._jQueryInterface = function() {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(r)
                  , n = p.extend({}, o, e.data(), "object" === (void 0 === n ? "undefined" : _typeof(n)) && n);
                t || e.data(r, t = new i(this,n)),
                "string" == typeof n && t[n].call(e)
            })
        }
        ,
        i
    }();
    return p(window).on(i.LOAD_DATA_API, function() {
        for (var e = p.makeArray(p(s)), t = e.length; t--; ) {
            var n = p(e[t]);
            a._jQueryInterface.call(n, n.data())
        }
    }),
    p.fn[e] = a._jQueryInterface,
    p.fn[e].Constructor = a,
    p.fn[e].noConflict = function() {
        return p.fn[e] = n,
        a._jQueryInterface
    }
    ,
    a
}($);
function msgCapsLock(e) {
    $("small#capslock").remove(),
    $(e).after('<small id="capslock" class="form-text text-warning position-absolute bg-white w-100">CAPS LOCK inserito</small>')
}
$(".navbar .dropdownI").on("show.bs.dropdownI", function() {
    window.matchMedia("(max-width: 768px)").matches && $(this).find(".dropdownI-menu").first().stop(!0, !0).slideDown(300)
}),
$(".navbar .dropdownI").on("hide.bs.dropdownI", function() {
    window.matchMedia("(max-width: 768px)").matches && $(this).find(".dropdownI-menu").first().stop(!0, !0).slideUp(300)
}),
$(window).resize(function() {
    window.matchMedia("(min-width: 769px)").matches && $(".navbar .dropdownI-menu.show").removeAttr("style")
}),
$(function() {
    var e = ["text", "password", "email", "url", "tel", "number", "search"].map(function(e) {
        return "input[type=" + e + "]:enabled:not([readonly])"
    }).join(", ") + ", textarea"
      , t = 'input[type="file"]';
    $(document).on("focus", e, function(e) {
        $(e.target).siblings("label, i").addClass("active")
    }),
    $(document).on("blur", e, function(e) {
        var t = $(e.target)
          , n = !t.val()
          , i = void 0 === t.attr("placeholder");
        n && i && t.siblings("label, i").removeClass("active")
    }),
    $(document).on("change", e, function(e) {
        var t = $(e.target);
        n(t),
        r(t)
    }),
    $(document).on("blur", t, function(e) {
        $(e.target).siblings("label").addClass("active")
    }),
    $(document).on("change", t, function(e) {
        var t = $(e.target)
          , n = e.currentTarget.files.length
          , r = ""
          , o = "";
        for (i = 0; i < n; i++)
            fileSize = parseInt(e.currentTarget.files[i].size, 10) / 1024,
            filesize = Math.round(fileSize),
            r = r + e.currentTarget.files[i].name + " (" + filesize + "kb); ";
        1 < n && (o = n + " file da caricare: "),
        t.siblings(".form-file-name").text(o + r)
    });
    var n = function(e) {
        var t = e.siblings("label, i")
          , n = e.val().length
          , i = e.attr("placeholder");
        t[(n || i ? "add" : "remove") + "Class"]("active")
    }
      , r = function(e) {
        if (e.hasClass("validate")) {
            var t = e.val()
              , n = !t.length
              , i = !e[0].validity.badInput;
            if (n && i)
                e.removeClass("valid").removeClass("invalid");
            else {
                var r = e.is(":valid")
                  , o = Number(e.attr("length")) || 0;
                r && (!o || o > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
            }
        }
    };
    $("body").find(e).removeClass("valid").removeClass("invalid").each(function(e, t) {
        var n = $(t)
          , i = !n.val()
          , r = !n.attr("placeholder");
        n.siblings("label, i").toggleClass("active", !(i && r))
    }),
    $(".autocomplete").autocomplete()
}),
function(e) {
    var t, n = function(e) {
        t = "mousedown" === e.type
    }, i = function(e) {
        t && e.target.classList.add("focus--mouse")
    }, r = function(e) {
        e.target.classList.remove("focus--mouse")
    };
    e.addEventListener("keydown", n),
    e.addEventListener("mousedown", n),
    e.addEventListener("focusin", i),
    e.addEventListener("focusout", r)
}(document.body),
$('a[data-attribute*="forward"]').on("click", function(e) {
    var t = $(this.hash);
    t.length && (e.preventDefault(),
    $("html, body").animate({
        scrollTop: t.offset().top
    }, 500))
}),
$(function() {
    "use strict";
    $('[data-toggle="offcanvas"]').on("click", function() {
        $(".offcanvas-collapse").toggleClass("open")
    })
}),
function(u) {
    "use strict";
    var t = function(s, a) {
        function l(e) {
            return -1 === e ? "danger" : -2 === e ? "muted" : (e = e < 0 ? 0 : e) < 26 ? "danger" : e < 51 ? "warning" : "success"
        }
        function c(e, t) {
            for (var n = "", i = !1, r = 0; r < t.length; r++) {
                i = !0;
                for (var o = 0; o < e && o + r + e < t.length; o++)
                    i = i && t.charAt(o + r) === t.charAt(o + r + e);
                o < e && (i = !1),
                i ? (r += e - 1,
                i = !1) : n += t.charAt(r)
            }
            return n
        }
        return a = u.extend({}, {
            shortPass: "password troppo debole",
            badPass: "password debole",
            goodPass: "password sicura",
            strongPass: "password molto sicura",
            enterPass: "inserisci almeno 8 caratteri e una lettera maiuscola",
            showText: !0,
            minimumLength: 4
        }, a),
        function() {
            var r = a.showText
              , e = u("<div>").addClass("progress rounded-0 position-relative psw-meter");
            e.append('<div class="row position-absolute w-100 m-0">\n        <div class="col-3 border-left border-right border-white"></div>\n        <div class="col-3 border-left border-right border-white"></div>\n        <div class="col-3 border-left border-right border-white"></div>\n        <div class="col-3 border-left border-right border-white"></div>\n      </div>');
            var o = u("<div>").attr({
                class: "progress-bar",
                role: "progressbar",
                "aria-valuenow": "0",
                "aria-valuemin": "0",
                "aria-valuemax": "100"
            })
              , t = u("<div>").addClass("psw-wrapper").append(e.append(o));
            return a.showText && (r = u("<span>").addClass("psw-text").html(a.enterPass),
            t.prepend(r)),
            s.after(t),
            s.keyup(function() {
                var e = function(e) {
                    var t = 0;
                    if (e.length < a.minimumLength)
                        return -1;
                    t += 4 * e.length,
                    t += c(1, e).length - e.length,
                    t += c(2, e).length - e.length,
                    t += c(3, e).length - e.length,
                    t += c(4, e).length - e.length,
                    e.match(/(.*[0-9].*[0-9].*[0-9])/) && (t += 5);
                    var n = ".*[!,@,#,$,%,^,&,*,?,_,~]";
                    return n = new RegExp("(" + n + n + ")"),
                    e.match(n) && (t += 5),
                    e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && (t += 10),
                    e.match(/([a-zA-Z])/) && e.match(/([0-9])/) && (t += 15),
                    e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([0-9])/) && (t += 15),
                    e.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && e.match(/([a-zA-Z])/) && (t += 15),
                    (e.match(/^\w+$/) || e.match(/^\d+$/)) && (t -= 10),
                    100 < t && (t = 100),
                    t < 0 && (t = 0),
                    t
                }(s.val());
                s.trigger("password.score", [e]);
                var t, n = e < 0 ? 0 : e;
                if (o.removeClass(function(e, t) {
                    return (t.match(/(^|\s)bg-\S+/g) || []).join(" ")
                }),
                o.addClass("bg-" + l(e)),
                o.css({
                    width: n + "%"
                }),
                o.attr("aria-valuenow", n),
                a.showText) {
                    var i = -1 === (t = e) ? a.shortPass : (t = t < 0 ? 0 : t) < 26 ? a.shortPass : t < 51 ? a.badPass : t < 76 ? a.goodPass : a.strongPass;
                    !s.val().length && e <= 0 && (i = a.enterPass),
                    r.html() !== u("<div>").html(i).html() && (r.html(i),
                    r.removeClass(function(e, t) {
                        return (t.match(/(^|\s)text-\S+/g) || []).join(" ")
                    }),
                    r.addClass("text-" + l(e)),
                    s.trigger("password.text", [i, e]))
                }
            }),
            this
        }
        .call(this)
    };
    u.fn.password = function(e) {
        return this.each(function() {
            new t(u(this),e)
        })
    }
}(jQuery),
$(function() {
    var n = !1
      , i = null;
    $("input[type=password]").bind("keydown", function(e) {
        16 == (e.keyCode ? e.keyCode : e.which) && (n = !0)
    }),
    $("input[type=password]").bind("keyup", function(e) {
        var t = e.keyCode ? e.keyCode : e.which;
        16 == t && (n = !1),
        20 == t && (1 == i ? (i = !1,
        $("small#capslock").remove()) : 0 == i && (i = !0,
        $("input:focus").each(function(e) {
            msgCapsLock($(this))
        })))
    }),
    $("input[type=password]").bind("keypress", function(e) {
        var t = e.keyCode ? e.keyCode : e.which;
        65 <= t && t <= 90 && !n && (i = !0,
        msgCapsLock($(this)))
    })
}),
$(function() {
    $(".form-password").password()
}),
$(function() {
    $("input:password").each(function(e) {
        $(this).after('<span class="btn-eye eye-on" toggle="' + $(this).attr("id") + '"></span>')
    }),
    $(".btn-eye").on("click", function() {
        $(this).toggleClass("eye-off");
        var e = $("#" + $(this).attr("toggle"));
        e.focus(),
        "password" == e.attr("type") ? e.attr("type", "text") : e.attr("type", "password")
    })
});
var openbutton = $(".custom-navbar-toggler")
  , closebutton = $(".close-menu");
$(openbutton).click(function(e) {
    var t = $(this).attr("data-target");
    $(this).attr("aria-expanded", "true"),
    $(t).fadeIn(150, function() {
        $(this).addClass("expanded")
    })
}),
$(closebutton).click(function(e) {
    var t = $(this).closest(".navbar-collapsable")
      , n = $(this).closest(".navbar").find(".custom-navbar-toggler");
    $(n).attr("aria-expanded", "false"),
    $(t).removeClass("expanded"),
    setTimeout(function() {
        $(t).fadeOut()
    }, 300)
});
var navlink = $(".navbar-collapsable a");
$(navlink).blur(function(e) {
    closemenu = $(this).closest(".navbar-collapsable").find(".close-div .btn"),
    $(this).closest(".navbar-collapsable").hasClass("expanded") && setTimeout(function() {
        var e = document.activeElement;
        0 == $(e).closest(".navbar-collapsable").length && $(closemenu).trigger("click")
    }, 50)
}),
$(closebutton).blur(function(e) {
    closemenu = $(this),
    $(this).closest(".navbar-collapsable").hasClass("expanded") && setTimeout(function() {
        var e = document.activeElement;
        0 == $(e).closest(".navbar-collapsable").length && $(closemenu).trigger("click")
    }, 50)
});
//# sourceMappingURL=bootstrap-italia.bundle.min.js.map
/*!
 * Materialize v1.0.0-rc.2 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function t(e, i, n) {
    null === e && (e = Function.prototype);
    var s = Object.getOwnPropertyDescriptor(e, i);
    if (void 0 === s) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : t(o, i, n)
    }
    if ("value"in s)
        return s.value;
    var a = s.get;
    return void 0 !== a ? a.call(n) : void 0
}
  , _createClass = function() {
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    return function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    }
}();
function _possibleConstructorReturn(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
window.cash = function() {
    var i, o = document, a = window, t = Array.prototype, r = t.slice, n = t.filter, s = t.push, e = function() {}, h = function(t) {
        return typeof t == typeof e && t.call
    }, d = function(t) {
        return "string" == typeof t
    }, l = /^#[\w-]*$/, u = /^\.[\w-]*$/, c = /<.+>/, p = /^\w+$/;
    function v(t, e) {
        e = e || o;
        var i = u.test(t) ? e.getElementsByClassName(t.slice(1)) : p.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
        return i
    }
    function f(t) {
        if (!i) {
            var e = (i = o.implementation.createHTMLDocument(null)).createElement("base");
            e.href = o.location.href,
            i.head.appendChild(e)
        }
        return i.body.innerHTML = t,
        i.body.childNodes
    }
    function m(t) {
        "loading" !== o.readyState ? t() : o.addEventListener("DOMContentLoaded", t)
    }
    function g(t, e) {
        if (!t)
            return this;
        if (t.cash && t !== a)
            return t;
        var i, n = t, s = 0;
        if (d(t))
            n = l.test(t) ? o.getElementById(t.slice(1)) : c.test(t) ? f(t) : v(t, e);
        else if (h(t))
            return m(t),
            this;
        if (!n)
            return this;
        if (n.nodeType || n === a)
            this[0] = n,
            this.length = 1;
        else
            for (i = this.length = n.length; s < i; s++)
                this[s] = n[s];
        return this
    }
    function _(t, e) {
        return new g(t,e)
    }
    var y = _.fn = _.prototype = g.prototype = {
        cash: !0,
        length: 0,
        push: s,
        splice: t.splice,
        map: t.map,
        init: g
    };
    function k(t, e) {
        for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++)
            ;
    }
    function b(t, e) {
        var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
        return !!i && i.call(t, e)
    }
    function w(e) {
        return d(e) ? b : e.cash ? function(t) {
            return e.is(t)
        }
        : function(t, e) {
            return t === e
        }
    }
    function C(t) {
        return _(r.call(t).filter(function(t, e, i) {
            return i.indexOf(t) === e
        }))
    }
    Object.defineProperty(y, "constructor", {
        value: _
    }),
    _.parseHTML = f,
    _.noop = e,
    _.isFunction = h,
    _.isString = d,
    _.extend = y.extend = function(t) {
        t = t || {};
        var e = r.call(arguments)
          , i = e.length
          , n = 1;
        for (1 === e.length && (t = this,
        n = 0); n < i; n++)
            if (e[n])
                for (var s in e[n])
                    e[n].hasOwnProperty(s) && (t[s] = e[n][s]);
        return t
    }
    ,
    _.extend({
        merge: function(t, e) {
            for (var i = +e.length, n = t.length, s = 0; s < i; n++,
            s++)
                t[n] = e[s];
            return t.length = n,
            t
        },
        each: k,
        matches: b,
        unique: C,
        isArray: Array.isArray,
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
    });
    var E = _.uid = "_cash" + Date.now();
    function M(t) {
        return t[E] = t[E] || {}
    }
    function O(t, e, i) {
        return M(t)[e] = i
    }
    function x(t, e) {
        var i = M(t);
        return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : _(t).attr("data-" + e)),
        i[e]
    }
    y.extend({
        data: function(e, i) {
            if (d(e))
                return void 0 === i ? x(this[0], e) : this.each(function(t) {
                    return O(t, e, i)
                });
            for (var t in e)
                this.data(t, e[t]);
            return this
        },
        removeData: function(s) {
            return this.each(function(t) {
                return i = s,
                void ((n = M(e = t)) ? delete n[i] : e.dataset ? delete e.dataset[i] : _(e).removeAttr("data-" + name));
                var e, i, n
            })
        }
    });
    var L = /\S+/g;
    function T(t) {
        return d(t) && t.match(L)
    }
    function $(t, e) {
        return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)","gi").test(t.className)
    }
    function B(t, e, i) {
        t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e)
    }
    function D(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "")
    }
    y.extend({
        addClass: function(t) {
            var n = T(t);
            return n ? this.each(function(e) {
                var i = " " + e.className + " ";
                k(n, function(t) {
                    B(e, t, i)
                })
            }) : this
        },
        attr: function(e, i) {
            if (e) {
                if (d(e))
                    return void 0 === i ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : void 0 : this.each(function(t) {
                        t.setAttribute ? t.setAttribute(e, i) : t[e] = i
                    });
                for (var t in e)
                    this.attr(t, e[t]);
                return this
            }
        },
        hasClass: function(t) {
            var e = !1
              , i = T(t);
            return i && i.length && this.each(function(t) {
                return !(e = $(t, i[0]))
            }),
            e
        },
        prop: function(e, i) {
            if (d(e))
                return void 0 === i ? this[0][e] : this.each(function(t) {
                    t[e] = i
                });
            for (var t in e)
                this.prop(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            return this.each(function(t) {
                t.removeAttribute ? t.removeAttribute(e) : delete t[e]
            })
        },
        removeClass: function(t) {
            if (!arguments.length)
                return this.attr("class", "");
            var i = T(t);
            return i ? this.each(function(e) {
                k(i, function(t) {
                    D(e, t)
                })
            }) : this
        },
        removeProp: function(e) {
            return this.each(function(t) {
                delete t[e]
            })
        },
        toggleClass: function(t, e) {
            if (void 0 !== e)
                return this[e ? "addClass" : "removeClass"](t);
            var n = T(t);
            return n ? this.each(function(e) {
                var i = " " + e.className + " ";
                k(n, function(t) {
                    $(e, t) ? D(e, t) : B(e, t, i)
                })
            }) : this
        }
    }),
    y.extend({
        add: function(t, e) {
            return C(_.merge(this, _(t, e)))
        },
        each: function(t) {
            return k(this, t),
            this
        },
        eq: function(t) {
            return _(this.get(t))
        },
        filter: function(e) {
            if (!e)
                return this;
            var i = h(e) ? e : w(e);
            return _(n.call(this, function(t) {
                return i(t, e)
            }))
        },
        first: function() {
            return this.eq(0)
        },
        get: function(t) {
            return void 0 === t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        index: function(t) {
            var e = t ? _(t)[0] : this[0]
              , i = t ? this : _(e).parent().children();
            return r.call(i).indexOf(e)
        },
        last: function() {
            return this.eq(-1)
        }
    });
    var S, I, A, R, H, P, W = (H = /(?:^\w|[A-Z]|\b\w)/g,
    P = /[\s-_]+/g,
    function(t) {
        return t.replace(H, function(t, e) {
            return t[0 === e ? "toLowerCase" : "toUpperCase"]()
        }).replace(P, "")
    }
    ), j = (S = {},
    I = document,
    A = I.createElement("div"),
    R = A.style,
    function(e) {
        if (e = W(e),
        S[e])
            return S[e];
        var t = e.charAt(0).toUpperCase() + e.slice(1)
          , i = (e + " " + ["webkit", "moz", "ms", "o"].join(t + " ") + t).split(" ");
        return k(i, function(t) {
            if (t in R)
                return S[t] = e = S[e] = t,
                !1
        }),
        S[e]
    }
    );
    function F(t, e) {
        return parseInt(a.getComputedStyle(t[0], null)[e], 10) || 0
    }
    function q(e, i, t) {
        var n, s = x(e, "_cashEvents"), o = s && s[i];
        o && (t ? (e.removeEventListener(i, t),
        0 <= (n = o.indexOf(t)) && o.splice(n, 1)) : (k(o, function(t) {
            e.removeEventListener(i, t)
        }),
        o = []))
    }
    function N(t, e) {
        return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+")
    }
    function z(t) {
        var e, i, n, s = t.type;
        if (!s)
            return null;
        switch (s.toLowerCase()) {
        case "select-one":
            return 0 <= (n = (i = t).selectedIndex) ? i.options[n].value : null;
        case "select-multiple":
            return e = [],
            k(t.options, function(t) {
                t.selected && e.push(t.value)
            }),
            e.length ? e : null;
        case "radio":
        case "checkbox":
            return t.checked ? t.value : null;
        default:
            return t.value ? t.value : null
        }
    }
    function V(e, i, n) {
        var t = d(i);
        t || !i.length ? k(e, t ? function(t) {
            return t.insertAdjacentHTML(n ? "afterbegin" : "beforeend", i)
        }
        : function(t, e) {
            return function(t, e, i) {
                if (i) {
                    var n = t.childNodes[0];
                    t.insertBefore(e, n)
                } else
                    t.appendChild(e)
            }(t, 0 === e ? i : i.cloneNode(!0), n)
        }
        ) : k(i, function(t) {
            return V(e, t, n)
        })
    }
    _.prefixedProp = j,
    _.camelCase = W,
    y.extend({
        css: function(e, i) {
            if (d(e))
                return e = j(e),
                1 < arguments.length ? this.each(function(t) {
                    return t.style[e] = i
                }) : a.getComputedStyle(this[0])[e];
            for (var t in e)
                this.css(t, e[t]);
            return this
        }
    }),
    k(["Width", "Height"], function(e) {
        var t = e.toLowerCase();
        y[t] = function() {
            return this[0].getBoundingClientRect()[t]
        }
        ,
        y["inner" + e] = function() {
            return this[0]["client" + e]
        }
        ,
        y["outer" + e] = function(t) {
            return this[0]["offset" + e] + (t ? F(this, "margin" + ("Width" === e ? "Left" : "Top")) + F(this, "margin" + ("Width" === e ? "Right" : "Bottom")) : 0)
        }
    }),
    y.extend({
        off: function(e, i) {
            return this.each(function(t) {
                return q(t, e, i)
            })
        },
        on: function(a, i, r, l) {
            var n;
            if (!d(a)) {
                for (var t in a)
                    this.on(t, i, a[t]);
                return this
            }
            return h(i) && (r = i,
            i = null),
            "ready" === a ? (m(r),
            this) : (i && (n = r,
            r = function(t) {
                for (var e = t.target; !b(e, i); ) {
                    if (e === this || null === e)
                        return e = !1;
                    e = e.parentNode
                }
                e && n.call(e, t)
            }
            ),
            this.each(function(t) {
                var e, i, n, s, o = r;
                l && (o = function() {
                    r.apply(this, arguments),
                    q(t, a, o)
                }
                ),
                i = a,
                n = o,
                (s = x(e = t, "_cashEvents") || O(e, "_cashEvents", {}))[i] = s[i] || [],
                s[i].push(n),
                e.addEventListener(i, n)
            }))
        },
        one: function(t, e, i) {
            return this.on(t, e, i, !0)
        },
        ready: m,
        trigger: function(t, e) {
            if (document.createEvent) {
                var i = document.createEvent("HTMLEvents");
                return i.initEvent(t, !0, !1),
                i = this.extend(i, e),
                this.each(function(t) {
                    return t.dispatchEvent(i)
                })
            }
        }
    }),
    y.extend({
        serialize: function() {
            var s = "";
            return k(this[0].elements || this, function(t) {
                if (!t.disabled && "FIELDSET" !== t.tagName) {
                    var e = t.name;
                    switch (t.type.toLowerCase()) {
                    case "file":
                    case "reset":
                    case "submit":
                    case "button":
                        break;
                    case "select-multiple":
                        var i = z(t);
                        null !== i && k(i, function(t) {
                            s += N(e, t)
                        });
                        break;
                    default:
                        var n = z(t);
                        null !== n && (s += N(e, n))
                    }
                }
            }),
            s.substr(1)
        },
        val: function(e) {
            return void 0 === e ? z(this[0]) : this.each(function(t) {
                return t.value = e
            })
        }
    }),
    y.extend({
        after: function(t) {
            return _(t).insertAfter(this),
            this
        },
        append: function(t) {
            return V(this, t),
            this
        },
        appendTo: function(t) {
            return V(_(t), this),
            this
        },
        before: function(t) {
            return _(t).insertBefore(this),
            this
        },
        clone: function() {
            return _(this.map(function(t) {
                return t.cloneNode(!0)
            }))
        },
        empty: function() {
            return this.html(""),
            this
        },
        html: function(t) {
            if (void 0 === t)
                return this[0].innerHTML;
            var e = t.nodeType ? t[0].outerHTML : t;
            return this.each(function(t) {
                return t.innerHTML = e
            })
        },
        insertAfter: function(t) {
            var s = this;
            return _(t).each(function(t, e) {
                var i = t.parentNode
                  , n = t.nextSibling;
                s.each(function(t) {
                    i.insertBefore(0 === e ? t : t.cloneNode(!0), n)
                })
            }),
            this
        },
        insertBefore: function(t) {
            var s = this;
            return _(t).each(function(e, i) {
                var n = e.parentNode;
                s.each(function(t) {
                    n.insertBefore(0 === i ? t : t.cloneNode(!0), e)
                })
            }),
            this
        },
        prepend: function(t) {
            return V(this, t, !0),
            this
        },
        prependTo: function(t) {
            return V(_(t), this, !0),
            this
        },
        remove: function() {
            return this.each(function(t) {
                if (t.parentNode)
                    return t.parentNode.removeChild(t)
            })
        },
        text: function(e) {
            return void 0 === e ? this[0].textContent : this.each(function(t) {
                return t.textContent = e
            })
        }
    });
    var X = o.documentElement;
    return y.extend({
        position: function() {
            var t = this[0];
            return {
                left: t.offsetLeft,
                top: t.offsetTop
            }
        },
        offset: function() {
            var t = this[0].getBoundingClientRect();
            return {
                top: t.top + a.pageYOffset - X.clientTop,
                left: t.left + a.pageXOffset - X.clientLeft
            }
        },
        offsetParent: function() {
            return _(this[0].offsetParent)
        }
    }),
    y.extend({
        children: function(e) {
            var i = [];
            return this.each(function(t) {
                s.apply(i, t.children)
            }),
            i = C(i),
            e ? i.filter(function(t) {
                return b(t, e)
            }) : i
        },
        closest: function(t) {
            return !t || this.length < 1 ? _() : this.is(t) ? this.filter(t) : this.parent().closest(t)
        },
        is: function(e) {
            if (!e)
                return !1;
            var i = !1
              , n = w(e);
            return this.each(function(t) {
                return !(i = n(t, e))
            }),
            i
        },
        find: function(e) {
            if (!e || e.nodeType)
                return _(e && this.has(e).length ? e : null);
            var i = [];
            return this.each(function(t) {
                s.apply(i, v(e, t))
            }),
            C(i)
        },
        has: function(e) {
            var t = d(e) ? function(t) {
                return 0 !== v(e, t).length
            }
            : function(t) {
                return t.contains(e)
            }
            ;
            return this.filter(t)
        },
        next: function() {
            return _(this[0].nextElementSibling)
        },
        not: function(e) {
            if (!e)
                return this;
            var i = w(e);
            return this.filter(function(t) {
                return !i(t, e)
            })
        },
        parent: function() {
            var e = [];
            return this.each(function(t) {
                t && t.parentNode && e.push(t.parentNode)
            }),
            C(e)
        },
        parents: function(e) {
            var i, n = [];
            return this.each(function(t) {
                for (i = t; i && i.parentNode && i !== o.body.parentNode; )
                    i = i.parentNode,
                    (!e || e && b(i, e)) && n.push(i)
            }),
            C(n)
        },
        prev: function() {
            return _(this[0].previousElementSibling)
        },
        siblings: function(t) {
            var e = this.parent().children(t)
              , i = this[0];
            return e.filter(function(t) {
                return t !== i
            })
        }
    }),
    _
}();
var Component = function() {
    function s(t, e, i) {
        _classCallCheck(this, s),
        e instanceof Element || console.error(Error(e + " is not an HTML Element"));
        var n = t.getInstance(e);
        n && n.destroy(),
        this.el = e,
        this.$el = cash(e)
    }
    return _createClass(s, null, [{
        key: "init",
        value: function(t, e, i) {
            var n = null;
            if (e instanceof Element)
                n = new t(e,i);
            else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
                for (var s = [], o = 0; o < e.length; o++)
                    s.push(new t(e[o],i));
                n = s
            }
            return n
        }
    }]),
    s
}();
!function(t) {
    t.Package ? M = {} : t.M = {},
    M.jQueryLoaded = !!t.jQuery
}(window),
"function" == typeof define && define.amd ? define("M", [], function() {
    return M
}) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M),
exports.default = M),
M.keys = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40
},
M.tabPressed = !1,
M.keyDown = !1;
var docHandleKeydown = function(t) {
    M.keyDown = !0,
    t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !0)
}
  , docHandleKeyup = function(t) {
    M.keyDown = !1,
    t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !1)
}
  , docHandleFocus = function(t) {
    M.keyDown && document.body.classList.add("keyboard-focused")
}
  , docHandleBlur = function(t) {
    document.body.classList.remove("keyboard-focused")
};
document.addEventListener("keydown", docHandleKeydown, !0),
document.addEventListener("keyup", docHandleKeyup, !0),
document.addEventListener("focus", docHandleFocus, !0),
document.addEventListener("blur", docHandleBlur, !0),
M.initializeJqueryWrapper = function(n, s, o) {
    jQuery.fn[s] = function(e) {
        if (n.prototype[e]) {
            var i = Array.prototype.slice.call(arguments, 1);
            if ("get" === e.slice(0, 3)) {
                var t = this.first()[0][o];
                return t[e].apply(t, i)
            }
            return this.each(function() {
                var t = this[o];
                t[e].apply(t, i)
            })
        }
        if ("object" == typeof e || !e)
            return n.init(this, e),
            this;
        jQuery.error("Method " + e + " does not exist on jQuery." + s)
    }
}
,
M.AutoInit = function(t) {
    var e = t || document.body
      , i = {
        Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"),
        carouselM: e.querySelectorAll(".carouselM:not(.no-autoinit)"),
        Chips: e.querySelectorAll(".chips:not(.no-autoinit)"),
        Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"),
        Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"),
        Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
        Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"),
        Modal: e.querySelectorAll(".modal:not(.no-autoinit)"),
        Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"),
        Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"),
        ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"),
        FormSelect: e.querySelectorAll("select:not(.no-autoinit)"),
        Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"),
        Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"),
        TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"),
        Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"),
        Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"),
        FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
    };
    for (var n in i) {
        M[n].init(i[n])
    }
}
,
M.objectSelectorString = function(t) {
    return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "")
}
,
M.guid = function() {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(),
M.escapeHash = function(t) {
    return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1")
}
,
M.elementOrParentIsFixed = function(t) {
    var e = $(t)
      , i = e.add(e.parents())
      , n = !1;
    return i.each(function() {
        if ("fixed" === $(this).css("position"))
            return !(n = !0)
    }),
    n
}
,
M.checkWithinContainer = function(t, e, i) {
    var n = {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
    }
      , s = t.getBoundingClientRect()
      , o = t === document.body ? Math.max(s.bottom, window.innerHeight) : s.bottom
      , a = t.scrollLeft
      , r = t.scrollTop
      , l = e.left - a
      , h = e.top - r;
    return (l < s.left + i || l < i) && (n.left = !0),
    (l + e.width > s.right - i || l + e.width > window.innerWidth - i) && (n.right = !0),
    (h < s.top + i || h < i) && (n.top = !0),
    (h + e.height > o - i || h + e.height > window.innerHeight - i) && (n.bottom = !0),
    n
}
,
M.checkPossibleAlignments = function(t, e, i, n) {
    var s = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        spaceOnTop: null,
        spaceOnRight: null,
        spaceOnBottom: null,
        spaceOnLeft: null
    }
      , o = "visible" === getComputedStyle(e).overflow
      , a = e.getBoundingClientRect()
      , r = Math.min(a.height, window.innerHeight)
      , l = Math.min(a.width, window.innerWidth)
      , h = t.getBoundingClientRect()
      , d = e.scrollLeft
      , u = e.scrollTop
      , c = i.left - d
      , p = i.top - u
      , v = i.top + h.height - u;
    return s.spaceOnRight = o ? window.innerWidth - (h.left + i.width) : l - (c + i.width),
    s.spaceOnRight < 0 && (s.left = !1),
    s.spaceOnLeft = o ? h.right - i.width : c - i.width + h.width,
    s.spaceOnLeft < 0 && (s.right = !1),
    s.spaceOnBottom = o ? window.innerHeight - (h.top + i.height + n) : r - (p + i.height + n),
    s.spaceOnBottom < 0 && (s.top = !1),
    s.spaceOnTop = o ? h.bottom - (i.height + n) : v - (i.height - n),
    s.spaceOnTop < 0 && (s.bottom = !1),
    s
}
,
M.getOverflowParent = function(t) {
    return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement)
}
,
M.getIdFromTrigger = function(t) {
    var e = t.getAttribute("data-target");
    return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""),
    e
}
,
M.getDocumentScrollTop = function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
,
M.getDocumentScrollLeft = function() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
}
;
var getTime = Date.now || function() {
    return (new Date).getTime()
}
;
M.throttle = function(i, n, s) {
    var o = void 0
      , a = void 0
      , r = void 0
      , l = null
      , h = 0;
    s || (s = {});
    var d = function() {
        h = !1 === s.leading ? 0 : getTime(),
        l = null,
        r = i.apply(o, a),
        o = a = null
    };
    return function() {
        var t = getTime();
        h || !1 !== s.leading || (h = t);
        var e = n - (t - h);
        return o = this,
        a = arguments,
        e <= 0 ? (clearTimeout(l),
        l = null,
        h = t,
        r = i.apply(o, a),
        o = a = null) : l || !1 === s.trailing || (l = setTimeout(d, e)),
        r
    }
}
;
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
    if (i.get || i.set)
        throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = i.value)
}
,
$jscomp.getGlobal = function(t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}
,
$jscomp.global = $jscomp.getGlobal(this),
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_",
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}
    ,
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
,
$jscomp.symbolCounter_ = 0,
$jscomp.Symbol = function(t) {
    return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++
}
,
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.iterator;
    t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")),
    "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    }),
    $jscomp.initSymbolIterator = function() {}
}
,
$jscomp.arrayIterator = function(t) {
    var e = 0;
    return $jscomp.iteratorPrototype(function() {
        return e < t.length ? {
            done: !1,
            value: t[e++]
        } : {
            done: !0
        }
    })
}
,
$jscomp.iteratorPrototype = function(t) {
    return $jscomp.initSymbolIterator(),
    (t = {
        next: t
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    }
    ,
    t
}
,
$jscomp.array = $jscomp.array || {},
$jscomp.iteratorFromArray = function(e, i) {
    $jscomp.initSymbolIterator(),
    e instanceof String && (e += "");
    var n = 0
      , s = {
        next: function() {
            if (n < e.length) {
                var t = n++;
                return {
                    value: i(t, e[t]),
                    done: !1
                }
            }
            return s.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ,
            s.next()
        }
    };
    return s[Symbol.iterator] = function() {
        return s
    }
    ,
    s
}
,
$jscomp.polyfill = function(t, e, i, n) {
    if (e) {
        for (i = $jscomp.global,
        t = t.split("."),
        n = 0; n < t.length - 1; n++) {
            var s = t[n];
            s in i || (i[s] = {}),
            i = i[s]
        }
        (e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
}
,
$jscomp.polyfill("Array.prototype.keys", function(t) {
    return t || function() {
        return $jscomp.iteratorFromArray(this, function(t) {
            return t
        })
    }
}, "es6-impl", "es3");
var $jscomp$this = this;
M.anime = function() {
    function s(t) {
        if (!B.col(t))
            try {
                return document.querySelectorAll(t)
            } catch (t) {}
    }
    function b(t, e) {
        for (var i = t.length, n = 2 <= arguments.length ? e : void 0, s = [], o = 0; o < i; o++)
            if (o in t) {
                var a = t[o];
                e.call(n, a, o, t) && s.push(a)
            }
        return s
    }
    function d(t) {
        return t.reduce(function(t, e) {
            return t.concat(B.arr(e) ? d(e) : e)
        }, [])
    }
    function o(t) {
        return B.arr(t) ? t : (B.str(t) && (t = s(t) || t),
        t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }
    function a(t, e) {
        return t.some(function(t) {
            return t === e
        })
    }
    function r(t) {
        var e, i = {};
        for (e in t)
            i[e] = t[e];
        return i
    }
    function u(t, e) {
        var i, n = r(t);
        for (i in t)
            n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
        return n
    }
    function c(t, e) {
        var i, n = r(t);
        for (i in e)
            n[i] = B.und(t[i]) ? e[i] : t[i];
        return n
    }
    function l(t) {
        if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))
            return t[2]
    }
    function h(t, e) {
        return B.fnc(t) ? t(e.target, e.id, e.total) : t
    }
    function w(t, e) {
        if (e in t.style)
            return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }
    function p(t, e) {
        return B.dom(t) && a($, e) ? "transform" : B.dom(t) && (t.getAttribute(e) || B.svg(t) && t[e]) ? "attribute" : B.dom(t) && "transform" !== e && w(t, e) ? "css" : null != t[e] ? "object" : void 0
    }
    function v(t, e) {
        switch (p(t, e)) {
        case "transform":
            return function(t, i) {
                var e, n = -1 < (e = i).indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0, n = -1 < i.indexOf("scale") ? 1 : 0 + n;
                if (!(t = t.style.transform))
                    return n;
                for (var s = [], o = [], a = [], r = /(\w+)\((.+?)\)/g; s = r.exec(t); )
                    o.push(s[1]),
                    a.push(s[2]);
                return (t = b(a, function(t, e) {
                    return o[e] === i
                })).length ? t[0] : n
            }(t, e);
        case "css":
            return w(t, e);
        case "attribute":
            return t.getAttribute(e)
        }
        return t[e] || 0
    }
    function f(t, e) {
        var i = /^(\*=|\+=|-=)/.exec(t);
        if (!i)
            return t;
        var n = l(t) || 0;
        switch (e = parseFloat(e),
        t = parseFloat(t.replace(i[0], "")),
        i[0][0]) {
        case "+":
            return e + t + n;
        case "-":
            return e - t + n;
        case "*":
            return e * t + n
        }
    }
    function m(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }
    function i(t) {
        t = t.points;
        for (var e, i = 0, n = 0; n < t.numberOfItems; n++) {
            var s = t.getItem(n);
            0 < n && (i += m(e, s)),
            e = s
        }
        return i
    }
    function g(t) {
        if (t.getTotalLength)
            return t.getTotalLength();
        switch (t.tagName.toLowerCase()) {
        case "circle":
            return 2 * Math.PI * t.getAttribute("r");
        case "rect":
            return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
        case "line":
            return m({
                x: t.getAttribute("x1"),
                y: t.getAttribute("y1")
            }, {
                x: t.getAttribute("x2"),
                y: t.getAttribute("y2")
            });
        case "polyline":
            return i(t);
        case "polygon":
            var e = t.points;
            return i(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0))
        }
    }
    function C(e, i) {
        function t(t) {
            return t = void 0 === t ? 0 : t,
            e.el.getPointAtLength(1 <= i + t ? i + t : 0)
        }
        var n = t()
          , s = t(-1)
          , o = t(1);
        switch (e.property) {
        case "x":
            return n.x;
        case "y":
            return n.y;
        case "angle":
            return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI
        }
    }
    function _(t, e) {
        var i, n = /-?\d*\.?\d+/g;
        if (i = B.pth(t) ? t.totalLength : t,
        B.col(i))
            if (B.rgb(i)) {
                var s = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
                i = s ? "rgba(" + s[1] + ",1)" : i
            } else
                i = B.hex(i) ? function(t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                        return e + e + i + i + n + n
                    });
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    t = parseInt(e[1], 16);
                    var i = parseInt(e[2], 16)
                      , e = parseInt(e[3], 16);
                    return "rgba(" + t + "," + i + "," + e + ",1)"
                }(i) : B.hsl(i) ? function(t) {
                    function e(t, e, i) {
                        return i < 0 && (i += 1),
                        1 < i && --i,
                        i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                    }
                    var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                    t = parseInt(i[1]) / 360;
                    var n = parseInt(i[2]) / 100
                      , s = parseInt(i[3]) / 100
                      , i = i[4] || 1;
                    if (0 == n)
                        s = n = t = s;
                    else {
                        var o = s < .5 ? s * (1 + n) : s + n - s * n
                          , a = 2 * s - o
                          , s = e(a, o, t + 1 / 3)
                          , n = e(a, o, t);
                        t = e(a, o, t - 1 / 3)
                    }
                    return "rgba(" + 255 * s + "," + 255 * n + "," + 255 * t + "," + i + ")"
                }(i) : void 0;
        else
            s = (s = l(i)) ? i.substr(0, i.length - s.length) : i,
            i = e && !/\s/g.test(i) ? s + e : s;
        return {
            original: i += "",
            numbers: i.match(n) ? i.match(n).map(Number) : [0],
            strings: B.str(t) || e ? i.split(n) : []
        }
    }
    function y(t) {
        return b(t = t ? d(B.arr(t) ? t.map(o) : o(t)) : [], function(t, e, i) {
            return i.indexOf(t) === e
        })
    }
    function k(t, i) {
        var e = r(i);
        if (B.arr(t)) {
            var n = t.length;
            2 !== n || B.obj(t[0]) ? B.fnc(i.duration) || (e.duration = i.duration / n) : t = {
                value: t
            }
        }
        return o(t).map(function(t, e) {
            return e = e ? 0 : i.delay,
            t = B.obj(t) && !B.pth(t) ? t : {
                value: t
            },
            B.und(t.delay) && (t.delay = e),
            t
        }).map(function(t) {
            return c(t, e)
        })
    }
    function E(o, a) {
        var r;
        return o.tweens.map(function(t) {
            var e = (t = function(t, e) {
                var i, n = {};
                for (i in t) {
                    var s = h(t[i], e);
                    B.arr(s) && 1 === (s = s.map(function(t) {
                        return h(t, e)
                    })).length && (s = s[0]),
                    n[i] = s
                }
                return n.duration = parseFloat(n.duration),
                n.delay = parseFloat(n.delay),
                n
            }(t, a)).value
              , i = v(a.target, o.name)
              , n = r ? r.to.original : i
              , n = B.arr(e) ? e[0] : n
              , s = f(B.arr(e) ? e[1] : e, n)
              , i = l(s) || l(n) || l(i);
            return t.from = _(n, i),
            t.to = _(s, i),
            t.start = r ? r.end : o.offset,
            t.end = t.start + t.delay + t.duration,
            t.easing = function(t) {
                return B.arr(t) ? D.apply(this, t) : S[t]
            }(t.easing),
            t.elasticity = (1e3 - Math.min(Math.max(t.elasticity, 1), 999)) / 1e3,
            t.isPath = B.pth(e),
            t.isColor = B.col(t.from.original),
            t.isColor && (t.round = 1),
            r = t
        })
    }
    function M(e, t, i, n) {
        var s = "delay" === e;
        return t.length ? (s ? Math.min : Math.max).apply(Math, t.map(function(t) {
            return t[e]
        })) : s ? n.delay : i.offset + n.delay + n.duration
    }
    function n(t) {
        var e, i, n, s, o = u(L, t), a = u(T, t), r = (i = t.targets,
        (n = y(i)).map(function(t, e) {
            return {
                target: t,
                id: e,
                total: n.length
            }
        })), l = [], h = c(o, a);
        for (e in t)
            h.hasOwnProperty(e) || "targets" === e || l.push({
                name: e,
                offset: h.offset,
                tweens: k(t[e], a)
            });
        return s = l,
        t = b(d(r.map(function(n) {
            return s.map(function(t) {
                var e = p(n.target, t.name);
                if (e) {
                    var i = E(t, n);
                    t = {
                        type: e,
                        property: t.name,
                        animatable: n,
                        tweens: i,
                        duration: i[i.length - 1].end,
                        delay: i[0].delay
                    }
                } else
                    t = void 0;
                return t
            })
        })), function(t) {
            return !B.und(t)
        }),
        c(o, {
            children: [],
            animatables: r,
            animations: t,
            duration: M("duration", t, o, a),
            delay: M("delay", t, o, a)
        })
    }
    function O(t) {
        function d() {
            return window.Promise && new Promise(function(t) {
                return _ = t
            }
            )
        }
        function u(t) {
            return k.reversed ? k.duration - t : t
        }
        function c(e) {
            for (var t = 0, i = {}, n = k.animations, s = n.length; t < s; ) {
                var o = n[t]
                  , a = o.animatable
                  , r = o.tweens
                  , l = r.length - 1
                  , h = r[l];
                l && (h = b(r, function(t) {
                    return e < t.end
                })[0] || h);
                for (var r = Math.min(Math.max(e - h.start - h.delay, 0), h.duration) / h.duration, d = isNaN(r) ? 1 : h.easing(r, h.elasticity), r = h.to.strings, u = h.round, l = [], c = void 0, c = h.to.numbers.length, p = 0; p < c; p++) {
                    var v = void 0
                      , v = h.to.numbers[p]
                      , f = h.from.numbers[p]
                      , v = h.isPath ? C(h.value, d * v) : f + d * (v - f);
                    u && (h.isColor && 2 < p || (v = Math.round(v * u) / u)),
                    l.push(v)
                }
                if (h = r.length)
                    for (c = r[0],
                    d = 0; d < h; d++)
                        u = r[d + 1],
                        p = l[d],
                        isNaN(p) || (c = u ? c + (p + u) : c + (p + " "));
                else
                    c = l[0];
                I[o.type](a.target, o.property, c, i, a.id),
                o.currentValue = c,
                t++
            }
            if (t = Object.keys(i).length)
                for (n = 0; n < t; n++)
                    x || (x = w(document.body, "transform") ? "transform" : "-webkit-transform"),
                    k.animatables[n].target.style[x] = i[n].join(" ");
            k.currentTime = e,
            k.progress = e / k.duration * 100
        }
        function p(t) {
            k[t] && k[t](k)
        }
        function v() {
            k.remaining && !0 !== k.remaining && k.remaining--
        }
        function e(t) {
            var e = k.duration
              , i = k.offset
              , n = i + k.delay
              , s = k.currentTime
              , o = k.reversed
              , a = u(t);
            if (k.children.length) {
                var r = k.children
                  , l = r.length;
                if (a >= k.currentTime)
                    for (var h = 0; h < l; h++)
                        r[h].seek(a);
                else
                    for (; l--; )
                        r[l].seek(a)
            }
            (n <= a || !e) && (k.began || (k.began = !0,
            p("begin")),
            p("run")),
            i < a && a < e ? c(a) : (a <= i && 0 !== s && (c(0),
            o && v()),
            (e <= a && s !== e || !e) && (c(e),
            o || v())),
            p("update"),
            e <= t && (k.remaining ? (m = f,
            "alternate" === k.direction && (k.reversed = !k.reversed)) : (k.pause(),
            k.completed || (k.completed = !0,
            p("complete"),
            "Promise"in window && (_(),
            y = d()))),
            g = 0)
        }
        t = void 0 === t ? {} : t;
        var f, m, g = 0, _ = null, y = d(), k = n(t);
        return k.reset = function() {
            var t = k.direction
              , e = k.loop;
            for (k.currentTime = 0,
            k.progress = 0,
            k.paused = !0,
            k.began = !1,
            k.completed = !1,
            k.reversed = "reverse" === t,
            k.remaining = "alternate" === t && 1 === e ? 2 : e,
            c(0),
            t = k.children.length; t--; )
                k.children[t].reset()
        }
        ,
        k.tick = function(t) {
            f = t,
            m || (m = f),
            e((g + f - m) * O.speed)
        }
        ,
        k.seek = function(t) {
            e(u(t))
        }
        ,
        k.pause = function() {
            var t = A.indexOf(k);
            -1 < t && A.splice(t, 1),
            k.paused = !0
        }
        ,
        k.play = function() {
            k.paused && (k.paused = !1,
            m = 0,
            g = u(k.currentTime),
            A.push(k),
            R || H())
        }
        ,
        k.reverse = function() {
            k.reversed = !k.reversed,
            m = 0,
            g = u(k.currentTime)
        }
        ,
        k.restart = function() {
            k.pause(),
            k.reset(),
            k.play()
        }
        ,
        k.finished = y,
        k.reset(),
        k.autoplay && k.play(),
        k
    }
    var x, L = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
    }, T = {
        duration: 1e3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
    }, $ = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), B = {
        arr: function(t) {
            return Array.isArray(t)
        },
        obj: function(t) {
            return -1 < Object.prototype.toString.call(t).indexOf("Object")
        },
        pth: function(t) {
            return B.obj(t) && t.hasOwnProperty("totalLength")
        },
        svg: function(t) {
            return t instanceof SVGElement
        },
        dom: function(t) {
            return t.nodeType || B.svg(t)
        },
        str: function(t) {
            return "string" == typeof t
        },
        fnc: function(t) {
            return "function" == typeof t
        },
        und: function(t) {
            return void 0 === t
        },
        hex: function(t) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
        },
        rgb: function(t) {
            return /^rgb/.test(t)
        },
        hsl: function(t) {
            return /^hsl/.test(t)
        },
        col: function(t) {
            return B.hex(t) || B.rgb(t) || B.hsl(t)
        }
    }, D = function() {
        function u(t, e, i) {
            return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t
        }
        return function(a, r, l, h) {
            if (0 <= a && a <= 1 && 0 <= l && l <= 1) {
                var d = new Float32Array(11);
                if (a !== r || l !== h)
                    for (var t = 0; t < 11; ++t)
                        d[t] = u(.1 * t, a, l);
                return function(t) {
                    if (a === r && l === h)
                        return t;
                    if (0 === t)
                        return 0;
                    if (1 === t)
                        return 1;
                    for (var e = 0, i = 1; 10 !== i && d[i] <= t; ++i)
                        e += .1;
                    var i = e + (t - d[--i]) / (d[i + 1] - d[i]) * .1
                      , n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a;
                    if (.001 <= n) {
                        for (e = 0; e < 4 && 0 != (n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a); ++e)
                            var s = u(i, a, l) - t
                              , i = i - s / n;
                        t = i
                    } else if (0 === n)
                        t = i;
                    else {
                        for (var i = e, e = e + .1, o = 0; 0 < (n = u(s = i + (e - i) / 2, a, l) - t) ? e = s : i = s,
                        1e-7 < Math.abs(n) && ++o < 10; )
                            ;
                        t = s
                    }
                    return u(t, r, h)
                }
            }
        }
    }(), S = function() {
        function i(t, e) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
        }
        var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), e = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], i],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(t, e) {
                return 1 - i(1 - t, e)
            }
            ],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(t, e) {
                return t < .5 ? i(2 * t, e) / 2 : 1 - i(-2 * t + 2, e) / 2
            }
            ]
        }, s = {
            linear: D(.25, .25, .75, .75)
        }, o = {};
        for (t in e)
            o.type = t,
            e[o.type].forEach(function(i) {
                return function(t, e) {
                    s["ease" + i.type + n[e]] = B.fnc(t) ? t : D.apply($jscomp$this, t)
                }
            }(o)),
            o = {
                type: o.type
            };
        return s
    }(), I = {
        css: function(t, e, i) {
            return t.style[e] = i
        },
        attribute: function(t, e, i) {
            return t.setAttribute(e, i)
        },
        object: function(t, e, i) {
            return t[e] = i
        },
        transform: function(t, e, i, n, s) {
            n[s] || (n[s] = []),
            n[s].push(e + "(" + i + ")")
        }
    }, A = [], R = 0, H = function() {
        function n() {
            R = requestAnimationFrame(t)
        }
        function t(t) {
            var e = A.length;
            if (e) {
                for (var i = 0; i < e; )
                    A[i] && A[i].tick(t),
                    i++;
                n()
            } else
                cancelAnimationFrame(R),
                R = 0
        }
        return n
    }();
    return O.version = "2.2.0",
    O.speed = 1,
    O.running = A,
    O.remove = function(t) {
        t = y(t);
        for (var e = A.length; e--; )
            for (var i = A[e], n = i.animations, s = n.length; s--; )
                a(t, n[s].animatable.target) && (n.splice(s, 1),
                n.length || i.pause())
    }
    ,
    O.getValue = v,
    O.path = function(t, e) {
        var i = B.str(t) ? s(t)[0] : t
          , n = e || 100;
        return function(t) {
            return {
                el: i,
                property: t,
                totalLength: g(i) * (n / 100)
            }
        }
    }
    ,
    O.setDashoffset = function(t) {
        var e = g(t);
        return t.setAttribute("stroke-dasharray", e),
        e
    }
    ,
    O.bezier = D,
    O.easings = S,
    O.timeline = function(n) {
        var s = O(n);
        return s.pause(),
        s.duration = 0,
        s.add = function(t) {
            return s.children.forEach(function(t) {
                t.began = !0,
                t.completed = !0
            }),
            o(t).forEach(function(t) {
                var e = c(t, u(T, n || {}));
                e.targets = e.targets || n.targets,
                t = s.duration;
                var i = e.offset;
                e.autoplay = !1,
                e.direction = s.direction,
                e.offset = B.und(i) ? t : f(i, t),
                s.began = !0,
                s.completed = !0,
                s.seek(e.offset),
                (e = O(e)).began = !0,
                e.completed = !0,
                e.duration > t && (s.duration = e.duration),
                s.children.push(e)
            }),
            s.seek(0),
            s.reset(),
            s.autoplay && s.restart(),
            s
        }
        ,
        s
    }
    ,
    O.random = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    }
    ,
    O
}(),
function(r, l) {
    "use strict";
    var e = {
        accordion: !0,
        onOpenStart: void 0,
        onOpenEnd: void 0,
        onCloseStart: void 0,
        onCloseEnd: void 0,
        inDuration: 300,
        outDuration: 300
    }
      , t = function(t) {
        function s(t, e) {
            _classCallCheck(this, s);
            var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));
            (i.el.M_Collapsible = i).options = r.extend({}, s.defaults, e),
            i.$headers = i.$el.children("li").children(".collapsible-header"),
            i.$headers.attr("tabindex", 0),
            i._setupEventHandlers();
            var n = i.$el.children("li.active").children(".collapsible-body");
            return i.options.accordion ? n.first().css("display", "block") : n.css("display", "block"),
            i
        }
        return _inherits(s, Component),
        _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Collapsible = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this),
                this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this),
                this.el.addEventListener("click", this._handleCollapsibleClickBound),
                this.$headers.each(function(t) {
                    t.addEventListener("keydown", e._handleCollapsibleKeydownBound)
                })
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                this.el.removeEventListener("click", this._handleCollapsibleClickBound),
                this.$headers.each(function(t) {
                    t.removeEventListener("keydown", e._handleCollapsibleKeydownBound)
                })
            }
        }, {
            key: "_handleCollapsibleClick",
            value: function(t) {
                var e = r(t.target).closest(".collapsible-header");
                if (t.target && e.length) {
                    var i = e.closest(".collapsible");
                    if (i[0] === this.el) {
                        var n = e.closest("li")
                          , s = i.children("li")
                          , o = n[0].classList.contains("active")
                          , a = s.index(n);
                        o ? this.close(a) : this.open(a)
                    }
                }
            }
        }, {
            key: "_handleCollapsibleKeydown",
            value: function(t) {
                13 === t.keyCode && this._handleCollapsibleClickBound(t)
            }
        }, {
            key: "_animateIn",
            value: function(t) {
                var e = this
                  , i = this.$el.children("li").eq(t);
                if (i.length) {
                    var n = i.children(".collapsible-body");
                    l.remove(n[0]),
                    n.css({
                        display: "block",
                        overflow: "hidden",
                        height: 0,
                        paddingTop: "",
                        paddingBottom: ""
                    });
                    var s = n.css("padding-top")
                      , o = n.css("padding-bottom")
                      , a = n[0].scrollHeight;
                    n.css({
                        paddingTop: 0,
                        paddingBottom: 0
                    }),
                    l({
                        targets: n[0],
                        height: a,
                        paddingTop: s,
                        paddingBottom: o,
                        duration: this.options.inDuration,
                        easing: "easeInOutCubic",
                        complete: function(t) {
                            n.css({
                                overflow: "",
                                paddingTop: "",
                                paddingBottom: "",
                                height: ""
                            }),
                            "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, i[0])
                        }
                    })
                }
            }
        }, {
            key: "_animateOut",
            value: function(t) {
                var e = this
                  , i = this.$el.children("li").eq(t);
                if (i.length) {
                    var n = i.children(".collapsible-body");
                    l.remove(n[0]),
                    n.css("overflow", "hidden"),
                    l({
                        targets: n[0],
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        duration: this.options.outDuration,
                        easing: "easeInOutCubic",
                        complete: function() {
                            n.css({
                                height: "",
                                overflow: "",
                                padding: "",
                                display: ""
                            }),
                            "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, i[0])
                        }
                    })
                }
            }
        }, {
            key: "open",
            value: function(t) {
                var i = this
                  , e = this.$el.children("li").eq(t);
                if (e.length && !e[0].classList.contains("active")) {
                    if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, e[0]),
                    this.options.accordion) {
                        var n = this.$el.children("li");
                        this.$el.children("li.active").each(function(t) {
                            var e = n.index(r(t));
                            i.close(e)
                        })
                    }
                    e[0].classList.add("active"),
                    this._animateIn(t)
                }
            }
        }, {
            key: "close",
            value: function(t) {
                var e = this.$el.children("li").eq(t);
                e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]),
                e[0].classList.remove("active"),
                this._animateOut(t))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Collapsible
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        s
    }();
    M.Collapsible = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "collapsible", "M_Collapsible")
}(cash, M.anime),
function(h, s) {
    "use strict";
    var e = {
        alignment: "left",
        autoFocus: !0,
        constrainWidth: !0,
        container: null,
        coverTrigger: !0,
        closeOnClick: !0,
        hover: !1,
        inDuration: 150,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onItemClick: null
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return i.el.M_Dropdown = i,
            n._dropdowns.push(i),
            i.id = M.getIdFromTrigger(t),
            i.dropdownEl = document.getElementById(i.id),
            i.$dropdownEl = h(i.dropdownEl),
            i.options = h.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.isScrollable = !1,
            i.isTouchMoving = !1,
            i.focusedIndex = -1,
            i.filterQuery = [],
            i.options.container ? h(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl),
            i._makeDropdownFocusable(),
            i._resetFilterQueryBound = i._resetFilterQuery.bind(i),
            i._handleDocumentClickBound = i._handleDocumentClick.bind(i),
            i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i),
            i._handleDropdownClickBound = i._handleDropdownClick.bind(i),
            i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i),
            i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._resetDropdownStyles(),
                this._removeEventHandlers(),
                n._dropdowns.splice(n._dropdowns.indexOf(this), 1),
                this.el.M_Dropdown = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this.el.addEventListener("keydown", this._handleTriggerKeydownBound),
                this.dropdownEl.addEventListener("click", this._handleDropdownClickBound),
                this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this),
                this.el.addEventListener("click", this._handleClickBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("keydown", this._handleTriggerKeydownBound),
                this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound),
                this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound)
            }
        }, {
            key: "_setupTemporaryEventHandlers",
            value: function() {
                document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                document.body.addEventListener("touchend", this._handleDocumentClickBound),
                document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound),
                this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound)
            }
        }, {
            key: "_removeTemporaryEventHandlers",
            value: function() {
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                document.body.removeEventListener("touchend", this._handleDocumentClickBound),
                document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound),
                this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound)
            }
        }, {
            key: "_handleClick",
            value: function(t) {
                t.preventDefault(),
                this.open()
            }
        }, {
            key: "_handleMouseEnter",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleMouseLeave",
            value: function(t) {
                var e = t.toElement || t.relatedTarget
                  , i = !!h(e).closest(".dropdown-content").length
                  , n = !1
                  , s = h(e).closest(".dropdown-trigger");
                s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n = !0),
                n || i || this.close()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(t) {
                var e = this
                  , i = h(t.target);
                this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
                    e.close()
                }, 0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function() {
                    e.close()
                }, 0),
                this.isTouchMoving = !1
            }
        }, {
            key: "_handleTriggerKeydown",
            value: function(t) {
                t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleDocumentTouchmove",
            value: function(t) {
                h(t.target).closest(".dropdown-content").length && (this.isTouchMoving = !0)
            }
        }, {
            key: "_handleDropdownClick",
            value: function(t) {
                if ("function" == typeof this.options.onItemClick) {
                    var e = h(t.target).closest("li")[0];
                    this.options.onItemClick.call(this, e)
                }
            }
        }, {
            key: "_handleDropdownKeydown",
            value: function(t) {
                if (t.which === M.keys.TAB)
                    t.preventDefault(),
                    this.close();
                else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen)
                    if (t.which === M.keys.ENTER && this.isOpen) {
                        var e = this.dropdownEl.children[this.focusedIndex]
                          , i = h(e).find("a, button").first();
                        i.length ? i[0].click() : e.click()
                    } else
                        t.which === M.keys.ESC && this.isOpen && (t.preventDefault(),
                        this.close());
                else {
                    t.preventDefault();
                    var n = t.which === M.keys.ARROW_DOWN ? 1 : -1
                      , s = this.focusedIndex
                      , o = !1;
                    do {
                        if (s += n,
                        this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
                            o = !0;
                            break
                        }
                    } while (s < this.dropdownEl.children.length && 0 <= s);o && (this.focusedIndex = s,
                    this._focusFocusedItem())
                }
                var a = String.fromCharCode(t.which).toLowerCase();
                if (a && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                    this.filterQuery.push(a);
                    var r = this.filterQuery.join("")
                      , l = h(this.dropdownEl).find("li").filter(function(t) {
                        return 0 === h(t).text().toLowerCase().indexOf(r)
                    })[0];
                    l && (this.focusedIndex = h(l).index(),
                    this._focusFocusedItem())
                }
                this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
            }
        }, {
            key: "_resetFilterQuery",
            value: function() {
                this.filterQuery = []
            }
        }, {
            key: "_resetDropdownStyles",
            value: function() {
                this.$dropdownEl.css({
                    display: "",
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    "transform-origin": "",
                    transform: "",
                    opacity: ""
                })
            }
        }, {
            key: "_makeDropdownFocusable",
            value: function() {
                this.dropdownEl.tabIndex = 0,
                h(this.dropdownEl).children().each(function(t) {
                    t.getAttribute("tabindex") || t.setAttribute("tabindex", 0)
                })
            }
        }, {
            key: "_focusFocusedItem",
            value: function() {
                0 <= this.focusedIndex && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus()
            }
        }, {
            key: "_getDropdownPosition",
            value: function() {
                this.el.offsetParent.getBoundingClientRect();
                var t = this.el.getBoundingClientRect()
                  , e = this.dropdownEl.getBoundingClientRect()
                  , i = e.height
                  , n = e.width
                  , s = t.left - e.left
                  , o = t.top - e.top
                  , a = {
                    left: s,
                    top: o,
                    height: i,
                    width: n
                }
                  , r = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode
                  , l = M.checkPossibleAlignments(this.el, r, a, this.options.coverTrigger ? 0 : t.height)
                  , h = "top"
                  , d = this.options.alignment;
                if (o += this.options.coverTrigger ? 0 : t.height,
                this.isScrollable = !1,
                l.top || (l.bottom ? h = "bottom" : (this.isScrollable = !0,
                l.spaceOnTop > l.spaceOnBottom ? (h = "bottom",
                i += l.spaceOnTop,
                o -= l.spaceOnTop) : i += l.spaceOnBottom)),
                !l[d]) {
                    var u = "left" === d ? "right" : "left";
                    l[u] ? d = u : l.spaceOnLeft > l.spaceOnRight ? (d = "right",
                    n += l.spaceOnLeft,
                    s -= l.spaceOnLeft) : (d = "left",
                    n += l.spaceOnRight)
                }
                return "bottom" === h && (o = o - e.height + (this.options.coverTrigger ? t.height : 0)),
                "right" === d && (s = s - e.width + t.width),
                {
                    x: s,
                    y: o,
                    verticalAlignment: h,
                    horizontalAlignment: d,
                    height: i,
                    width: n
                }
            }
        }, {
            key: "_animateIn",
            value: function() {
                var i = this;
                s.remove(this.dropdownEl),
                s({
                    targets: this.dropdownEl,
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutQuad"
                    },
                    scaleX: [.3, 1],
                    scaleY: [.3, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuint",
                    complete: function(t) {
                        if (i.options.autoFocus && i.dropdownEl.focus(),
                        "function" == typeof i.options.onOpenEnd) {
                            var e = t.animatables[0].target;
                            i.options.onOpenEnd.call(e, i.el)
                        }
                    }
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                var e = this;
                s.remove(this.dropdownEl),
                s({
                    targets: this.dropdownEl,
                    opacity: {
                        value: 0,
                        easing: "easeOutQuint"
                    },
                    scaleX: .3,
                    scaleY: .3,
                    duration: this.options.outDuration,
                    easing: "easeOutQuint",
                    complete: function(t) {
                        if (e._resetDropdownStyles(),
                        "function" == typeof e.options.onCloseEnd) {
                            t.animatables[0].target;
                            e.options.onCloseEnd.call(e, e.el)
                        }
                    }
                })
            }
        }, {
            key: "_placeDropdown",
            value: function() {
                var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
                this.dropdownEl.style.width = t + "px";
                var e = this._getDropdownPosition();
                this.dropdownEl.style.left = e.x + "px",
                this.dropdownEl.style.top = e.y + "px",
                this.dropdownEl.style.height = e.height + "px",
                this.dropdownEl.style.width = e.width + "px",
                this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%")
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this._resetDropdownStyles(),
                this.dropdownEl.style.display = "block",
                this._placeDropdown(),
                this._animateIn(),
                this._setupTemporaryEventHandlers())
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1,
                this.focusedIndex = -1,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                this._animateOut(),
                this._removeTemporaryEventHandlers(),
                this.options.autoFocus && this.el.focus())
            }
        }, {
            key: "recalculateDimensions",
            value: function() {
                this.isOpen && (this.$dropdownEl.css({
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    "transform-origin": ""
                }),
                this._placeDropdown())
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Dropdown
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._dropdowns = [],
    window.M.Dropdown = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "dropdown", "M_Dropdown")
}(cash, M.anime),
function(s, i) {
    "use strict";
    var e = {
        opacity: .5,
        inDuration: 250,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0,
        dismissible: !0,
        startingTop: "4%",
        endingTop: "10%"
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Modal = i).options = s.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.id = i.$el.attr("id"),
            i._openingTrigger = void 0,
            i.$overlay = s('<div class="modal-overlay"></div>'),
            i.el.tabIndex = 0,
            i._nthModalOpened = 0,
            n._count++,
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                n._count--,
                this._removeEventHandlers(),
                this.el.removeAttribute("style"),
                this.$overlay.remove(),
                this.el.M_Modal = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleOverlayClickBound = this._handleOverlayClick.bind(this),
                this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this),
                1 === n._count && document.body.addEventListener("click", this._handleTriggerClick),
                this.$overlay[0].addEventListener("click", this._handleOverlayClickBound),
                this.el.addEventListener("click", this._handleModalCloseClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                0 === n._count && document.body.removeEventListener("click", this._handleTriggerClick),
                this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound),
                this.el.removeEventListener("click", this._handleModalCloseClickBound)
            }
        }, {
            key: "_handleTriggerClick",
            value: function(t) {
                var e = s(t.target).closest(".modal-trigger");
                if (e.length) {
                    var i = M.getIdFromTrigger(e[0])
                      , n = document.getElementById(i).M_Modal;
                    n && n.open(e),
                    t.preventDefault()
                }
            }
        }, {
            key: "_handleOverlayClick",
            value: function() {
                this.options.dismissible && this.close()
            }
        }, {
            key: "_handleModalCloseClick",
            value: function(t) {
                s(t.target).closest(".modal-close").length && this.close()
            }
        }, {
            key: "_handleKeydown",
            value: function(t) {
                27 === t.keyCode && this.options.dismissible && this.close()
            }
        }, {
            key: "_handleFocus",
            value: function(t) {
                this.el.contains(t.target) || this._nthModalOpened !== n._modalsOpen || this.el.focus()
            }
        }, {
            key: "_animateIn",
            value: function() {
                var t = this;
                s.extend(this.el.style, {
                    display: "block",
                    opacity: 0
                }),
                s.extend(this.$overlay[0].style, {
                    display: "block",
                    opacity: 0
                }),
                i({
                    targets: this.$overlay[0],
                    opacity: this.options.opacity,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                });
                var e = {
                    targets: this.el,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el, t._openingTrigger)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? s.extend(e, {
                    bottom: 0,
                    opacity: 1
                }) : s.extend(e, {
                    top: [this.options.startingTop, this.options.endingTop],
                    opacity: 1,
                    scaleX: [.8, 1],
                    scaleY: [.8, 1]
                }),
                i(e)
            }
        }, {
            key: "_animateOut",
            value: function() {
                var t = this;
                i({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuart"
                });
                var e = {
                    targets: this.el,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        t.el.style.display = "none",
                        t.$overlay.remove(),
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? s.extend(e, {
                    bottom: "-100%",
                    opacity: 0
                }) : s.extend(e, {
                    top: [this.options.endingTop, this.options.startingTop],
                    opacity: 0,
                    scaleX: .8,
                    scaleY: .8
                }),
                i(e)
            }
        }, {
            key: "open",
            value: function(t) {
                if (!this.isOpen)
                    return this.isOpen = !0,
                    n._modalsOpen++,
                    this._nthModalOpened = n._modalsOpen,
                    this.$overlay[0].style.zIndex = 1e3 + 2 * n._modalsOpen,
                    this.el.style.zIndex = 1e3 + 2 * n._modalsOpen + 1,
                    this._openingTrigger = t ? t[0] : void 0,
                    "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger),
                    this.options.preventScrolling && (document.body.style.overflow = "hidden"),
                    this.el.classList.add("open"),
                    this.el.insertAdjacentElement("afterend", this.$overlay[0]),
                    this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this),
                    this._handleFocusBound = this._handleFocus.bind(this),
                    document.addEventListener("keydown", this._handleKeydownBound),
                    document.addEventListener("focus", this._handleFocusBound, !0)),
                    i.remove(this.el),
                    i.remove(this.$overlay[0]),
                    this._animateIn(),
                    this.el.focus(),
                    this
            }
        }, {
            key: "close",
            value: function() {
                if (this.isOpen)
                    return this.isOpen = !1,
                    n._modalsOpen--,
                    this._nthModalOpened = 0,
                    "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                    this.el.classList.remove("open"),
                    0 === n._modalsOpen && (document.body.style.overflow = ""),
                    this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound),
                    document.removeEventListener("focus", this._handleFocusBound, !0)),
                    i.remove(this.el),
                    i.remove(this.$overlay[0]),
                    this._animateOut(),
                    this
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Modal
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._modalsOpen = 0,
    t._count = 0,
    M.Modal = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "modal", "M_Modal")
}(cash, M.anime),
function(o, a) {
    "use strict";
    var e = {
        inDuration: 275,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Materialbox = i).options = o.extend({}, n.defaults, e),
            i.overlayActive = !1,
            i.doneAnimating = !0,
            i.placeholder = o("<div></div>").addClass("material-placeholder"),
            i.originalWidth = 0,
            i.originalHeight = 0,
            i.originInlineStyles = i.$el.attr("style"),
            i.caption = i.el.getAttribute("data-caption") || "",
            i.$el.before(i.placeholder),
            i.placeholder.append(i.$el),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Materialbox = void 0,
                o(this.placeholder).after(this.el).remove(),
                this.$el.removeAttr("style")
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this),
                this.el.addEventListener("click", this._handleMaterialboxClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleMaterialboxClickBound)
            }
        }, {
            key: "_handleMaterialboxClick",
            value: function(t) {
                !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open()
            }
        }, {
            key: "_handleWindowScroll",
            value: function() {
                this.overlayActive && this.close()
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this.overlayActive && this.close()
            }
        }, {
            key: "_handleWindowEscape",
            value: function(t) {
                27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close()
            }
        }, {
            key: "_makeAncestorsOverflowVisible",
            value: function() {
                this.ancestorsChanged = o();
                for (var t = this.placeholder[0].parentNode; null !== t && !o(t).is(document); ) {
                    var e = o(t);
                    "visible" !== e.css("overflow") && (e.css("overflow", "visible"),
                    void 0 === this.ancestorsChanged ? this.ancestorsChanged = e : this.ancestorsChanged = this.ancestorsChanged.add(e)),
                    t = t.parentNode
                }
            }
        }, {
            key: "_animateImageIn",
            value: function() {
                var t = this
                  , e = {
                    targets: this.el,
                    height: [this.originalHeight, this.newHeight],
                    width: [this.originalWidth, this.newWidth],
                    left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                    top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.doneAnimating = !0,
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                    }
                };
                this.maxWidth = this.$el.css("max-width"),
                this.maxHeight = this.$el.css("max-height"),
                "none" !== this.maxWidth && (e.maxWidth = this.newWidth),
                "none" !== this.maxHeight && (e.maxHeight = this.newHeight),
                a(e)
            }
        }, {
            key: "_animateImageOut",
            value: function() {
                var t = this
                  , e = {
                    targets: this.el,
                    width: this.originalWidth,
                    height: this.originalHeight,
                    left: 0,
                    top: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.placeholder.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }),
                        t.attrWidth && t.$el.attr("width", t.attrWidth),
                        t.attrHeight && t.$el.attr("height", t.attrHeight),
                        t.$el.removeAttr("style"),
                        t.originInlineStyles && t.$el.attr("style", t.originInlineStyles),
                        t.$el.removeClass("active"),
                        t.doneAnimating = !0,
                        t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""),
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                };
                a(e)
            }
        }, {
            key: "_updateVars",
            value: function() {
                this.windowWidth = window.innerWidth,
                this.windowHeight = window.innerHeight,
                this.caption = this.el.getAttribute("data-caption") || ""
            }
        }, {
            key: "open",
            value: function() {
                var t = this;
                this._updateVars(),
                this.originalWidth = this.el.getBoundingClientRect().width,
                this.originalHeight = this.el.getBoundingClientRect().height,
                this.doneAnimating = !1,
                this.$el.addClass("active"),
                this.overlayActive = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this.placeholder.css({
                    width: this.placeholder[0].getBoundingClientRect().width + "px",
                    height: this.placeholder[0].getBoundingClientRect().height + "px",
                    position: "relative",
                    top: 0,
                    left: 0
                }),
                this._makeAncestorsOverflowVisible(),
                this.$el.css({
                    position: "absolute",
                    "z-index": 1e3,
                    "will-change": "left, top, width, height"
                }),
                this.attrWidth = this.$el.attr("width"),
                this.attrHeight = this.$el.attr("height"),
                this.attrWidth && (this.$el.css("width", this.attrWidth + "px"),
                this.$el.removeAttr("width")),
                this.attrHeight && (this.$el.css("width", this.attrHeight + "px"),
                this.$el.removeAttr("height")),
                this.$overlay = o('<div id="materialbox-overlay"></div>').css({
                    opacity: 0
                }).one("click", function() {
                    t.doneAnimating && t.close()
                }),
                this.$el.before(this.$overlay);
                var e = this.$overlay[0].getBoundingClientRect();
                this.$overlay.css({
                    width: this.windowWidth + "px",
                    height: this.windowHeight + "px",
                    left: -1 * e.left + "px",
                    top: -1 * e.top + "px"
                }),
                a.remove(this.el),
                a.remove(this.$overlay[0]),
                a({
                    targets: this.$overlay[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }),
                "" !== this.caption && (this.$photocaption && a.remove(this.$photoCaption[0]),
                this.$photoCaption = o('<div class="materialbox-caption"></div>'),
                this.$photoCaption.text(this.caption),
                o("body").append(this.$photoCaption),
                this.$photoCaption.css({
                    display: "inline"
                }),
                a({
                    targets: this.$photoCaption[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }));
                var i = 0
                  , n = this.originalWidth / this.windowWidth
                  , s = this.originalHeight / this.windowHeight;
                this.newWidth = 0,
                this.newHeight = 0,
                s < n ? (i = this.originalHeight / this.originalWidth,
                this.newWidth = .9 * this.windowWidth,
                this.newHeight = .9 * this.windowWidth * i) : (i = this.originalWidth / this.originalHeight,
                this.newWidth = .9 * this.windowHeight * i,
                this.newHeight = .9 * this.windowHeight),
                this._animateImageIn(),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                this._handleWindowEscapeBound = this._handleWindowEscape.bind(this),
                window.addEventListener("scroll", this._handleWindowScrollBound),
                window.addEventListener("resize", this._handleWindowResizeBound),
                window.addEventListener("keyup", this._handleWindowEscapeBound)
            }
        }, {
            key: "close",
            value: function() {
                var t = this;
                this._updateVars(),
                this.doneAnimating = !1,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                a.remove(this.el),
                a.remove(this.$overlay[0]),
                "" !== this.caption && a.remove(this.$photoCaption[0]),
                window.removeEventListener("scroll", this._handleWindowScrollBound),
                window.removeEventListener("resize", this._handleWindowResizeBound),
                window.removeEventListener("keyup", this._handleWindowEscapeBound),
                a({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.overlayActive = !1,
                        t.$overlay.remove()
                    }
                }),
                this._animateImageOut(),
                "" !== this.caption && a({
                    targets: this.$photoCaption[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.$photoCaption.remove()
                    }
                })
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Materialbox
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.Materialbox = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "materialbox", "M_Materialbox")
}(cash, M.anime),
function(s) {
    "use strict";
    var e = {
        responsiveThreshold: 0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Parallax = i).options = s.extend({}, n.defaults, e),
            i._enabled = window.innerWidth > i.options.responsiveThreshold,
            i.$img = i.$el.find("img").first(),
            i.$img.each(function() {
                this.complete && s(this).trigger("load")
            }),
            i._updateParallax(),
            i._setupEventHandlers(),
            i._setupStyles(),
            n._parallaxes.push(i),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                n._parallaxes.splice(n._parallaxes.indexOf(this), 1),
                this.$img[0].style.transform = "",
                this._removeEventHandlers(),
                this.$el[0].M_Parallax = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleImageLoadBound = this._handleImageLoad.bind(this),
                this.$img[0].addEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5),
                window.addEventListener("scroll", n._handleScrollThrottled),
                n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5),
                window.addEventListener("resize", n._handleWindowResizeThrottled))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.$img[0].removeEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled),
                window.removeEventListener("resize", n._handleWindowResizeThrottled))
            }
        }, {
            key: "_setupStyles",
            value: function() {
                this.$img[0].style.opacity = 1
            }
        }, {
            key: "_handleImageLoad",
            value: function() {
                this._updateParallax()
            }
        }, {
            key: "_updateParallax",
            value: function() {
                var t = 0 < this.$el.height() ? this.el.parentNode.offsetHeight : 500
                  , e = this.$img[0].offsetHeight - t
                  , i = this.$el.offset().top + t
                  , n = this.$el.offset().top
                  , s = M.getDocumentScrollTop()
                  , o = window.innerHeight
                  , a = e * ((s + o - n) / (t + o));
                this._enabled ? s < i && n < s + o && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = ""
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Parallax
            }
        }, {
            key: "_handleScroll",
            value: function() {
                for (var t = 0; t < n._parallaxes.length; t++) {
                    var e = n._parallaxes[t];
                    e._updateParallax.call(e)
                }
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                for (var t = 0; t < n._parallaxes.length; t++) {
                    var e = n._parallaxes[t];
                    e._enabled = window.innerWidth > e.options.responsiveThreshold
                }
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._parallaxes = [],
    M.Parallax = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "parallax", "M_Parallax")
}(cash),
function(a, s) {
    "use strict";
    var e = {
        duration: 300,
        onShow: null,
        swipeable: !1,
        responsiveThreshold: 1 / 0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Tabs = i).options = a.extend({}, n.defaults, e),
            i.$tabLinks = i.$el.children("li.tab").children("a"),
            i.index = 0,
            i._setupActiveTabLink(),
            i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(),
            i._setTabsAndTabWidth(),
            i._createIndicator(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._indicator.parentNode.removeChild(this._indicator),
                this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(),
                this.$el[0].M_Tabs = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                window.addEventListener("resize", this._handleWindowResizeBound),
                this._handleTabClickBound = this._handleTabClick.bind(this),
                this.el.addEventListener("click", this._handleTabClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                window.removeEventListener("resize", this._handleWindowResizeBound),
                this.el.removeEventListener("click", this._handleTabClickBound)
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this._setTabsAndTabWidth(),
                0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px",
                this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px")
            }
        }, {
            key: "_handleTabClick",
            value: function(t) {
                var e = this
                  , i = a(t.target).closest("li.tab")
                  , n = a(t.target).closest("a");
                if (n.length && n.parent().hasClass("tab"))
                    if (i.hasClass("disabled"))
                        t.preventDefault();
                    else if (!n.attr("target")) {
                        this.$activeTabLink.removeClass("active");
                        var s = this.$content;
                        this.$activeTabLink = n,
                        this.$content = a(M.escapeHash(n[0].hash)),
                        this.$tabLinks = this.$el.children("li.tab").children("a"),
                        this.$activeTabLink.addClass("active");
                        var o = this.index;
                        this.index = Math.max(this.$tabLinks.index(n), 0),
                        this.options.swipeable ? this._tabscarouselM && this._tabscarouselM.set(this.index, function() {
                            "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0])
                        }) : this.$content.length && (this.$content[0].style.display = "block",
                        this.$content.addClass("active"),
                        "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]),
                        s.length && !s.is(this.$content) && (s[0].style.display = "none",
                        s.removeClass("active"))),
                        this._setTabsAndTabWidth(),
                        this._animateIndicator(o),
                        t.preventDefault()
                    }
            }
        }, {
            key: "_createIndicator",
            value: function() {
                var t = this
                  , e = document.createElement("li");
                e.classList.add("indicator"),
                this.el.appendChild(e),
                this._indicator = e,
                setTimeout(function() {
                    t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px",
                    t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px"
                }, 0)
            }
        }, {
            key: "_setupActiveTabLink",
            value: function() {
                this.$activeTabLink = a(this.$tabLinks.filter('[href="' + location.hash + '"]')),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()),
                this.$tabLinks.removeClass("active"),
                this.$activeTabLink[0].classList.add("active"),
                this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0),
                this.$activeTabLink.length && (this.$content = a(M.escapeHash(this.$activeTabLink[0].hash)),
                this.$content.addClass("active"))
            }
        }, {
            key: "_setupSwipeableTabs",
            value: function() {
                var i = this;
                window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                var n = a();
                this.$tabLinks.each(function(t) {
                    var e = a(M.escapeHash(t.hash));
                    e.addClass("carouselM-item"),
                    n = n.add(e)
                });
                var t = a('<div class="tabs-content carouselM carouselM-slider"></div>');
                n.first().before(t),
                t.append(n),
                n[0].style.display = "";
                var e = this.$activeTabLink.closest(".tab").index();
                this._tabscarouselM = M.carouselM.init(t[0], {
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(t) {
                        var e = i.index;
                        i.index = a(t).index(),
                        i.$activeTabLink.removeClass("active"),
                        i.$activeTabLink = i.$tabLinks.eq(i.index),
                        i.$activeTabLink.addClass("active"),
                        i._animateIndicator(e),
                        "function" == typeof i.options.onShow && i.options.onShow.call(i, i.$content[0])
                    }
                }),
                this._tabscarouselM.set(e)
            }
        }, {
            key: "_teardownSwipeableTabs",
            value: function() {
                var t = this._tabscarouselM.$el;
                this._tabscarouselM.destroy(),
                t.after(t.children()),
                t.remove()
            }
        }, {
            key: "_setupNormalTabs",
            value: function() {
                this.$tabLinks.not(this.$activeTabLink).each(function(t) {
                    if (t.hash) {
                        var e = a(M.escapeHash(t.hash));
                        e.length && (e[0].style.display = "none")
                    }
                })
            }
        }, {
            key: "_teardownNormalTabs",
            value: function() {
                this.$tabLinks.each(function(t) {
                    if (t.hash) {
                        var e = a(M.escapeHash(t.hash));
                        e.length && (e[0].style.display = "")
                    }
                })
            }
        }, {
            key: "_setTabsAndTabWidth",
            value: function() {
                this.tabsWidth = this.$el.width(),
                this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length
            }
        }, {
            key: "_calcRightPos",
            value: function(t) {
                return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width)
            }
        }, {
            key: "_calcLeftPos",
            value: function(t) {
                return Math.floor(t.position().left)
            }
        }, {
            key: "updateTabIndicator",
            value: function() {
                this._setTabsAndTabWidth(),
                this._animateIndicator(this.index)
            }
        }, {
            key: "_animateIndicator",
            value: function(t) {
                var e = 0
                  , i = 0;
                0 <= this.index - t ? e = 90 : i = 90;
                var n = {
                    targets: this._indicator,
                    left: {
                        value: this._calcLeftPos(this.$activeTabLink),
                        delay: e
                    },
                    right: {
                        value: this._calcRightPos(this.$activeTabLink),
                        delay: i
                    },
                    duration: this.options.duration,
                    easing: "easeOutQuad"
                };
                s.remove(this._indicator),
                s(n)
            }
        }, {
            key: "select",
            value: function(t) {
                var e = this.$tabLinks.filter('[href="#' + t + '"]');
                e.length && e.trigger("click")
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Tabs
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    window.M.Tabs = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "tabs", "M_Tabs")
}(cash, M.anime),
function(d, e) {
    "use strict";
    var i = {
        exitDelay: 200,
        enterDelay: 0,
        html: null,
        margin: 5,
        inDuration: 250,
        outDuration: 200,
        position: "bottom",
        transitionMovement: 10
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Tooltip = i).options = d.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.isHovered = !1,
            i.isFocused = !1,
            i._appendTooltipEl(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                d(this.tooltipEl).remove(),
                this._removeEventHandlers(),
                this.el.M_Tooltip = void 0
            }
        }, {
            key: "_appendTooltipEl",
            value: function() {
                var t = document.createElement("div");
                t.classList.add("material-tooltip"),
                this.tooltipEl = t;
                var e = document.createElement("div");
                e.classList.add("tooltip-content"),
                e.innerHTML = this.options.html,
                t.appendChild(e),
                document.body.appendChild(t)
            }
        }, {
            key: "_updateTooltipContent",
            value: function() {
                this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                this._handleFocusBound = this._handleFocus.bind(this),
                this._handleBlurBound = this._handleBlur.bind(this),
                this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                this.el.addEventListener("focus", this._handleFocusBound, !0),
                this.el.addEventListener("blur", this._handleBlurBound, !0)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                this.el.removeEventListener("focus", this._handleFocusBound, !0),
                this.el.removeEventListener("blur", this._handleBlurBound, !0)
            }
        }, {
            key: "open",
            value: function(t) {
                this.isOpen || (t = void 0 === t || void 0,
                this.isOpen = !0,
                this.options = d.extend({}, this.options, this._getAttributeOptions()),
                this._updateTooltipContent(),
                this._setEnterDelayTimeout(t))
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isHovered = !1,
                this.isFocused = !1,
                this.isOpen = !1,
                this._setExitDelayTimeout())
            }
        }, {
            key: "_setExitDelayTimeout",
            value: function() {
                var t = this;
                clearTimeout(this._exitDelayTimeout),
                this._exitDelayTimeout = setTimeout(function() {
                    t.isHovered || t.isFocused || t._animateOut()
                }, this.options.exitDelay)
            }
        }, {
            key: "_setEnterDelayTimeout",
            value: function(t) {
                var e = this;
                clearTimeout(this._enterDelayTimeout),
                this._enterDelayTimeout = setTimeout(function() {
                    (e.isHovered || e.isFocused || t) && e._animateIn()
                }, this.options.enterDelay)
            }
        }, {
            key: "_positionTooltip",
            value: function() {
                var t, e = this.el, i = this.tooltipEl, n = e.offsetHeight, s = e.offsetWidth, o = i.offsetHeight, a = i.offsetWidth, r = this.options.margin, l = void 0, h = void 0;
                this.xMovement = 0,
                this.yMovement = 0,
                l = e.getBoundingClientRect().top + M.getDocumentScrollTop(),
                h = e.getBoundingClientRect().left + M.getDocumentScrollLeft(),
                "top" === this.options.position ? (l += -o - r,
                h += s / 2 - a / 2,
                this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (l += n / 2 - o / 2,
                h += s + r,
                this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (l += n / 2 - o / 2,
                h += -a - r,
                this.xMovement = -this.options.transitionMovement) : (l += n + r,
                h += s / 2 - a / 2,
                this.yMovement = this.options.transitionMovement),
                t = this._repositionWithinScreen(h, l, a, o),
                d(i).css({
                    top: t.y + "px",
                    left: t.x + "px"
                })
            }
        }, {
            key: "_repositionWithinScreen",
            value: function(t, e, i, n) {
                var s = M.getDocumentScrollLeft()
                  , o = M.getDocumentScrollTop()
                  , a = t - s
                  , r = e - o
                  , l = {
                    left: a,
                    top: r,
                    width: i,
                    height: n
                }
                  , h = this.options.margin + this.options.transitionMovement
                  , d = M.checkWithinContainer(document.body, l, h);
                return d.left ? a = h : d.right && (a -= a + i - window.innerWidth),
                d.top ? r = h : d.bottom && (r -= r + n - window.innerHeight),
                {
                    x: a + s,
                    y: r + o
                }
            }
        }, {
            key: "_animateIn",
            value: function() {
                this._positionTooltip(),
                this.tooltipEl.style.visibility = "visible",
                e.remove(this.tooltipEl),
                e({
                    targets: this.tooltipEl,
                    opacity: 1,
                    translateX: this.xMovement,
                    translateY: this.yMovement,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                e.remove(this.tooltipEl),
                e({
                    targets: this.tooltipEl,
                    opacity: 0,
                    translateX: 0,
                    translateY: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_handleMouseEnter",
            value: function() {
                this.isHovered = !0,
                this.isFocused = !1,
                this.open(!1)
            }
        }, {
            key: "_handleMouseLeave",
            value: function() {
                this.isHovered = !1,
                this.isFocused = !1,
                this.close()
            }
        }, {
            key: "_handleFocus",
            value: function() {
                M.tabPressed && (this.isFocused = !0,
                this.open(!1))
            }
        }, {
            key: "_handleBlur",
            value: function() {
                this.isFocused = !1,
                this.close()
            }
        }, {
            key: "_getAttributeOptions",
            value: function() {
                var t = {}
                  , e = this.el.getAttribute("data-tooltip")
                  , i = this.el.getAttribute("data-position");
                return e && (t.html = e),
                i && (t.position = i),
                t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Tooltip
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        n
    }();
    M.Tooltip = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "tooltip", "M_Tooltip")
}(cash, M.anime),
function(i) {
    "use strict";
    var t = t || {}
      , e = document.querySelectorAll.bind(document);
    function m(t) {
        var e = "";
        for (var i in t)
            t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
        return e
    }
    var g = {
        duration: 750,
        show: function(t, e) {
            if (2 === t.button)
                return !1;
            var i = e || this
              , n = document.createElement("div");
            n.className = "waves-ripple",
            i.appendChild(n);
            var s, o, a, r, l, h, d, u = (h = {
                top: 0,
                left: 0
            },
            d = (s = i) && s.ownerDocument,
            o = d.documentElement,
            void 0 !== s.getBoundingClientRect && (h = s.getBoundingClientRect()),
            a = null !== (l = r = d) && l === l.window ? r : 9 === r.nodeType && r.defaultView,
            {
                top: h.top + a.pageYOffset - o.clientTop,
                left: h.left + a.pageXOffset - o.clientLeft
            }), c = t.pageY - u.top, p = t.pageX - u.left, v = "scale(" + i.clientWidth / 100 * 10 + ")";
            "touches"in t && (c = t.touches[0].pageY - u.top,
            p = t.touches[0].pageX - u.left),
            n.setAttribute("data-hold", Date.now()),
            n.setAttribute("data-scale", v),
            n.setAttribute("data-x", p),
            n.setAttribute("data-y", c);
            var f = {
                top: c + "px",
                left: p + "px"
            };
            n.className = n.className + " waves-notransition",
            n.setAttribute("style", m(f)),
            n.className = n.className.replace("waves-notransition", ""),
            f["-webkit-transform"] = v,
            f["-moz-transform"] = v,
            f["-ms-transform"] = v,
            f["-o-transform"] = v,
            f.transform = v,
            f.opacity = "1",
            f["-webkit-transition-duration"] = g.duration + "ms",
            f["-moz-transition-duration"] = g.duration + "ms",
            f["-o-transition-duration"] = g.duration + "ms",
            f["transition-duration"] = g.duration + "ms",
            f["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            f["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            f["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            f["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            n.setAttribute("style", m(f))
        },
        hide: function(t) {
            l.touchup(t);
            var e = this
              , i = (e.clientWidth,
            null)
              , n = e.getElementsByClassName("waves-ripple");
            if (!(0 < n.length))
                return !1;
            var s = (i = n[n.length - 1]).getAttribute("data-x")
              , o = i.getAttribute("data-y")
              , a = i.getAttribute("data-scale")
              , r = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
            r < 0 && (r = 0),
            setTimeout(function() {
                var t = {
                    top: o + "px",
                    left: s + "px",
                    opacity: "0",
                    "-webkit-transition-duration": g.duration + "ms",
                    "-moz-transition-duration": g.duration + "ms",
                    "-o-transition-duration": g.duration + "ms",
                    "transition-duration": g.duration + "ms",
                    "-webkit-transform": a,
                    "-moz-transform": a,
                    "-ms-transform": a,
                    "-o-transform": a,
                    transform: a
                };
                i.setAttribute("style", m(t)),
                setTimeout(function() {
                    try {
                        e.removeChild(i)
                    } catch (t) {
                        return !1
                    }
                }, g.duration)
            }, r)
        },
        wrapInput: function(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];
                if ("input" === i.tagName.toLowerCase()) {
                    var n = i.parentNode;
                    if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect"))
                        continue;
                    var s = document.createElement("i");
                    s.className = i.className + " waves-input-wrapper";
                    var o = i.getAttribute("style");
                    o || (o = ""),
                    s.setAttribute("style", o),
                    i.className = "waves-button-input",
                    i.removeAttribute("style"),
                    n.replaceChild(s, i),
                    s.appendChild(i)
                }
            }
        }
    }
      , l = {
        touches: 0,
        allowEvent: function(t) {
            var e = !0;
            return "touchstart" === t.type ? l.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                0 < l.touches && (l.touches -= 1)
            }, 500) : "mousedown" === t.type && 0 < l.touches && (e = !1),
            e
        },
        touchup: function(t) {
            l.allowEvent(t)
        }
    };
    function n(t) {
        var e = function(t) {
            if (!1 === l.allowEvent(t))
                return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentNode; ) {
                if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
                    e = i;
                    break
                }
                i = i.parentNode
            }
            return e
        }(t);
        null !== e && (g.show(t, e),
        "ontouchstart"in i && (e.addEventListener("touchend", g.hide, !1),
        e.addEventListener("touchcancel", g.hide, !1)),
        e.addEventListener("mouseup", g.hide, !1),
        e.addEventListener("mouseleave", g.hide, !1),
        e.addEventListener("dragend", g.hide, !1))
    }
    t.displayEffect = function(t) {
        "duration"in (t = t || {}) && (g.duration = t.duration),
        g.wrapInput(e(".waves-effect")),
        "ontouchstart"in i && document.body.addEventListener("touchstart", n, !1),
        document.body.addEventListener("mousedown", n, !1)
    }
    ,
    t.attach = function(t) {
        "input" === t.tagName.toLowerCase() && (g.wrapInput([t]),
        t = t.parentNode),
        "ontouchstart"in i && t.addEventListener("touchstart", n, !1),
        t.addEventListener("mousedown", n, !1)
    }
    ,
    i.Waves = t,
    document.addEventListener("DOMContentLoaded", function() {
        t.displayEffect()
    }, !1)
}(window),
function(i, n) {
    "use strict";
    var t = {
        html: "",
        displayLength: 4e3,
        inDuration: 300,
        outDuration: 375,
        classes: "",
        completeCallback: null,
        activationPercent: .8
    }
      , e = function() {
        function s(t) {
            _classCallCheck(this, s),
            this.options = i.extend({}, s.defaults, t),
            this.message = this.options.html,
            this.panning = !1,
            this.timeRemaining = this.options.displayLength,
            0 === s._toasts.length && s._createContainer(),
            s._toasts.push(this);
            var e = this._createToast();
            (e.M_Toast = this).el = e,
            this.$el = i(e),
            this._animateIn(),
            this._setTimer()
        }
        return _createClass(s, [{
            key: "_createToast",
            value: function() {
                var t = document.createElement("div");
                return t.classList.add("toast"),
                this.options.classes.length && i(t).addClass(this.options.classes),
                ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? i(t).append(this.message[0]) : t.innerHTML = this.message,
                s._container.appendChild(t),
                t
            }
        }, {
            key: "_animateIn",
            value: function() {
                n({
                    targets: this.el,
                    top: 0,
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic"
                })
            }
        }, {
            key: "_setTimer",
            value: function() {
                var t = this;
                this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
                    t.panning || (t.timeRemaining -= 20),
                    t.timeRemaining <= 0 && t.dismiss()
                }, 20))
            }
        }, {
            key: "dismiss",
            value: function() {
                var t = this;
                window.clearInterval(this.counterInterval);
                var e = this.el.offsetWidth * this.options.activationPercent;
                this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s",
                this.el.style.transform = "translateX(" + e + "px)",
                this.el.style.opacity = 0),
                n({
                    targets: this.el,
                    opacity: 0,
                    marginTop: -40,
                    duration: this.options.outDuration,
                    easing: "easeOutExpo",
                    complete: function() {
                        "function" == typeof t.options.completeCallback && t.options.completeCallback(),
                        t.$el.remove(),
                        s._toasts.splice(s._toasts.indexOf(t), 1),
                        0 === s._toasts.length && s._removeContainer()
                    }
                })
            }
        }], [{
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Toast
            }
        }, {
            key: "_createContainer",
            value: function() {
                var t = document.createElement("div");
                t.setAttribute("id", "toast-container"),
                t.addEventListener("touchstart", s._onDragStart),
                t.addEventListener("touchmove", s._onDragMove),
                t.addEventListener("touchend", s._onDragEnd),
                t.addEventListener("mousedown", s._onDragStart),
                document.addEventListener("mousemove", s._onDragMove),
                document.addEventListener("mouseup", s._onDragEnd),
                document.body.appendChild(t),
                s._container = t
            }
        }, {
            key: "_removeContainer",
            value: function() {
                document.removeEventListener("mousemove", s._onDragMove),
                document.removeEventListener("mouseup", s._onDragEnd),
                i(s._container).remove(),
                s._container = null
            }
        }, {
            key: "_onDragStart",
            value: function(t) {
                if (t.target && i(t.target).closest(".toast").length) {
                    var e = i(t.target).closest(".toast")[0].M_Toast;
                    e.panning = !0,
                    (s._draggedToast = e).el.classList.add("panning"),
                    e.el.style.transition = "",
                    e.startingXPos = s._xPos(t),
                    e.time = Date.now(),
                    e.xPos = s._xPos(t)
                }
            }
        }, {
            key: "_onDragMove",
            value: function(t) {
                if (s._draggedToast) {
                    t.preventDefault();
                    var e = s._draggedToast;
                    e.deltaX = Math.abs(e.xPos - s._xPos(t)),
                    e.xPos = s._xPos(t),
                    e.velocityX = e.deltaX / (Date.now() - e.time),
                    e.time = Date.now();
                    var i = e.xPos - e.startingXPos
                      , n = e.el.offsetWidth * e.options.activationPercent;
                    e.el.style.transform = "translateX(" + i + "px)",
                    e.el.style.opacity = 1 - Math.abs(i / n)
                }
            }
        }, {
            key: "_onDragEnd",
            value: function() {
                if (s._draggedToast) {
                    var t = s._draggedToast;
                    t.panning = !1,
                    t.el.classList.remove("panning");
                    var e = t.xPos - t.startingXPos
                      , i = t.el.offsetWidth * t.options.activationPercent;
                    Math.abs(e) > i || 1 < t.velocityX ? (t.wasSwiped = !0,
                    t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s",
                    t.el.style.transform = "",
                    t.el.style.opacity = ""),
                    s._draggedToast = null
                }
            }
        }, {
            key: "_xPos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX
            }
        }, {
            key: "dismissAll",
            value: function() {
                for (var t in s._toasts)
                    s._toasts[t].dismiss()
            }
        }, {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        s
    }();
    e._toasts = [],
    e._container = null,
    e._draggedToast = null,
    M.Toast = e,
    M.toast = function(t) {
        return new e(t)
    }
}(cash, M.anime),
function(s, o) {
    "use strict";
    var e = {
        edge: "left",
        draggable: !0,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Sidenav = i).id = i.$el.attr("id"),
            i.options = s.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.isFixed = i.el.classList.contains("sidenav-fixed"),
            i.isDragged = !1,
            i.lastWindowWidth = window.innerWidth,
            i.lastWindowHeight = window.innerHeight,
            i._createOverlay(),
            i._createDragTarget(),
            i._setupEventHandlers(),
            i._setupClasses(),
            i._setupFixed(),
            n._sidenavs.push(i),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._enableBodyScrolling(),
                this._overlay.parentNode.removeChild(this._overlay),
                this.dragTarget.parentNode.removeChild(this.dragTarget),
                this.el.M_Sidenav = void 0,
                this.el.style.transform = "";
                var t = n._sidenavs.indexOf(this);
                0 <= t && n._sidenavs.splice(t, 1)
            }
        }, {
            key: "_createOverlay",
            value: function() {
                var t = document.createElement("div");
                this._closeBound = this.close.bind(this),
                t.classList.add("sidenav-overlay"),
                t.addEventListener("click", this._closeBound),
                document.body.appendChild(t),
                this._overlay = t
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                0 === n._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick),
                this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this),
                this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this),
                this._handleCloseDragBound = this._handleCloseDrag.bind(this),
                this._handleCloseReleaseBound = this._handleCloseRelease.bind(this),
                this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this),
                this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.addEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("touchmove", this._handleCloseDragBound),
                this.el.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                window.addEventListener("resize", this._handleWindowResizeBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                1 === n._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick),
                this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.removeEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("touchmove", this._handleCloseDragBound),
                this.el.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
            }
        }, {
            key: "_handleTriggerClick",
            value: function(t) {
                var e = s(t.target).closest(".sidenav-trigger");
                if (t.target && e.length) {
                    var i = M.getIdFromTrigger(e[0])
                      , n = document.getElementById(i).M_Sidenav;
                    n && n.open(e),
                    t.preventDefault()
                }
            }
        }, {
            key: "_startDrag",
            value: function(t) {
                var e = t.targetTouches[0].clientX;
                this.isDragged = !0,
                this._startingXpos = e,
                this._xPos = this._startingXpos,
                this._time = Date.now(),
                this._width = this.el.getBoundingClientRect().width,
                this._overlay.style.display = "block",
                this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(),
                this._verticallyScrolling = !1,
                o.remove(this.el),
                o.remove(this._overlay)
            }
        }, {
            key: "_dragMoveUpdate",
            value: function(t) {
                var e = t.targetTouches[0].clientX
                  , i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
                this.deltaX = Math.abs(this._xPos - e),
                this._xPos = e,
                this.velocityX = this.deltaX / (Date.now() - this._time),
                this._time = Date.now(),
                this._initialScrollTop !== i && (this._verticallyScrolling = !0)
            }
        }, {
            key: "_handleDragTargetDrag",
            value: function(t) {
                if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
                    this.isDragged || this._startDrag(t),
                    this._dragMoveUpdate(t);
                    var e = this._xPos - this._startingXpos
                      , i = 0 < e ? "right" : "left";
                    e = Math.min(this._width, Math.abs(e)),
                    this.options.edge === i && (e = 0);
                    var n = e
                      , s = "translateX(-100%)";
                    "right" === this.options.edge && (s = "translateX(100%)",
                    n = -n),
                    this.percentOpen = Math.min(1, e / this._width),
                    this.el.style.transform = s + " translateX(" + n + "px)",
                    this._overlay.style.opacity = this.percentOpen
                }
            }
        }, {
            key: "_handleDragTargetRelease",
            value: function() {
                this.isDragged && (.2 < this.percentOpen ? this.open() : this._animateOut(),
                this.isDragged = !1,
                this._verticallyScrolling = !1)
            }
        }, {
            key: "_handleCloseDrag",
            value: function(t) {
                if (this.isOpen) {
                    if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling)
                        return;
                    this.isDragged || this._startDrag(t),
                    this._dragMoveUpdate(t);
                    var e = this._xPos - this._startingXpos
                      , i = 0 < e ? "right" : "left";
                    e = Math.min(this._width, Math.abs(e)),
                    this.options.edge !== i && (e = 0);
                    var n = -e;
                    "right" === this.options.edge && (n = -n),
                    this.percentOpen = Math.min(1, 1 - e / this._width),
                    this.el.style.transform = "translateX(" + n + "px)",
                    this._overlay.style.opacity = this.percentOpen
                }
            }
        }, {
            key: "_handleCloseRelease",
            value: function() {
                this.isOpen && this.isDragged && (.8 < this.percentOpen ? this._animateIn() : this.close(),
                this.isDragged = !1,
                this._verticallyScrolling = !1)
            }
        }, {
            key: "_handleCloseTriggerClick",
            value: function(t) {
                s(t.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close()
            }
        }, {
            key: "_handleWindowResize",
            value: function() {
                this.lastWindowWidth !== window.innerWidth && (992 < window.innerWidth ? this.open() : this.close()),
                this.lastWindowWidth = window.innerWidth,
                this.lastWindowHeight = window.innerHeight
            }
        }, {
            key: "_setupClasses",
            value: function() {
                "right" === this.options.edge && (this.el.classList.add("right-aligned"),
                this.dragTarget.classList.add("right-aligned"))
            }
        }, {
            key: "_removeClasses",
            value: function() {
                this.el.classList.remove("right-aligned"),
                this.dragTarget.classList.remove("right-aligned")
            }
        }, {
            key: "_setupFixed",
            value: function() {
                this._isCurrentlyFixed() && this.open()
            }
        }, {
            key: "_isCurrentlyFixed",
            value: function() {
                return this.isFixed && 992 < window.innerWidth
            }
        }, {
            key: "_createDragTarget",
            value: function() {
                var t = document.createElement("div");
                t.classList.add("drag-target"),
                document.body.appendChild(t),
                this.dragTarget = t
            }
        }, {
            key: "_preventBodyScrolling",
            value: function() {
                document.body.style.overflow = "hidden"
            }
        }, {
            key: "_enableBodyScrolling",
            value: function() {
                document.body.style.overflow = ""
            }
        }, {
            key: "open",
            value: function() {
                !0 !== this.isOpen && (this.isOpen = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this._isCurrentlyFixed() ? (o.remove(this.el),
                o({
                    targets: this.el,
                    translateX: 0,
                    duration: 0,
                    easing: "easeOutQuad"
                }),
                this._enableBodyScrolling(),
                this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(),
                this.isDragged && 1 == this.percentOpen || this._animateIn()))
            }
        }, {
            key: "close",
            value: function() {
                if (!1 !== this.isOpen)
                    if (this.isOpen = !1,
                    "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                    this._isCurrentlyFixed()) {
                        var t = "left" === this.options.edge ? "-105%" : "105%";
                        this.el.style.transform = "translateX(" + t + ")"
                    } else
                        this._enableBodyScrolling(),
                        this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
            }
        }, {
            key: "_animateIn",
            value: function() {
                this._animateSidenavIn(),
                this._animateOverlayIn()
            }
        }, {
            key: "_animateSidenavIn",
            value: function() {
                var t = this
                  , e = "left" === this.options.edge ? -1 : 1;
                this.isDragged && (e = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen),
                o.remove(this.el),
                o({
                    targets: this.el,
                    translateX: [100 * e + "%", 0],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                    }
                })
            }
        }, {
            key: "_animateOverlayIn",
            value: function() {
                var t = 0;
                this.isDragged ? t = this.percentOpen : s(this._overlay).css({
                    display: "block"
                }),
                o.remove(this._overlay),
                o({
                    targets: this._overlay,
                    opacity: [t, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                })
            }
        }, {
            key: "_animateOut",
            value: function() {
                this._animateSidenavOut(),
                this._animateOverlayOut()
            }
        }, {
            key: "_animateSidenavOut",
            value: function() {
                var t = this
                  , e = "left" === this.options.edge ? -1 : 1
                  , i = 0;
                this.isDragged && (i = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen),
                o.remove(this.el),
                o({
                    targets: this.el,
                    translateX: [100 * i + "%", 105 * e + "%"],
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                    }
                })
            }
        }, {
            key: "_animateOverlayOut",
            value: function() {
                var t = this;
                o.remove(this._overlay),
                o({
                    targets: this._overlay,
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        s(t._overlay).css("display", "none")
                    }
                })
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Sidenav
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._sidenavs = [],
    window.M.Sidenav = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "sidenav", "M_Sidenav")
}(cash, M.anime),
function(o, a) {
    "use strict";
    var e = {
        throttle: 100,
        scrollOffset: 200,
        activeClass: "active",
        getActiveElement: function(t) {
            return 'a[href="#' + t + '"]'
        }
    }
      , t = function(t) {
        function c(t, e) {
            _classCallCheck(this, c);
            var i = _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, t, e));
            return (i.el.M_ScrollSpy = i).options = o.extend({}, c.defaults, e),
            c._elements.push(i),
            c._count++,
            c._increment++,
            i.tickId = -1,
            i.id = c._increment,
            i._setupEventHandlers(),
            i._handleWindowScroll(),
            i
        }
        return _inherits(c, Component),
        _createClass(c, [{
            key: "destroy",
            value: function() {
                c._elements.splice(c._elements.indexOf(this), 1),
                c._elementsInView.splice(c._elementsInView.indexOf(this), 1),
                c._visibleElements.splice(c._visibleElements.indexOf(this.$el), 1),
                c._count--,
                this._removeEventHandlers(),
                o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),
                this.el.M_ScrollSpy = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var t = M.throttle(this._handleWindowScroll, 200);
                this._handleThrottledResizeBound = t.bind(this),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                1 === c._count && (window.addEventListener("scroll", this._handleWindowScrollBound),
                window.addEventListener("resize", this._handleThrottledResizeBound),
                document.body.addEventListener("click", this._handleTriggerClick))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                0 === c._count && (window.removeEventListener("scroll", this._handleWindowScrollBound),
                window.removeEventListener("resize", this._handleThrottledResizeBound),
                document.body.removeEventListener("click", this._handleTriggerClick))
            }
        }, {
            key: "_handleTriggerClick",
            value: function(t) {
                for (var e = o(t.target), i = c._elements.length - 1; 0 <= i; i--) {
                    var n = c._elements[i];
                    if (e.is('a[href="#' + n.$el.attr("id") + '"]')) {
                        t.preventDefault();
                        var s = n.$el.offset().top + 1;
                        a({
                            targets: [document.documentElement, document.body],
                            scrollTop: s - n.options.scrollOffset,
                            duration: 400,
                            easing: "easeOutCubic"
                        });
                        break
                    }
                }
            }
        }, {
            key: "_handleWindowScroll",
            value: function() {
                c._ticks++;
                for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, n = t + window.innerHeight, s = c._findElements(t, i, n, e), o = 0; o < s.length; o++) {
                    var a = s[o];
                    a.tickId < 0 && a._enter(),
                    a.tickId = c._ticks
                }
                for (var r = 0; r < c._elementsInView.length; r++) {
                    var l = c._elementsInView[r]
                      , h = l.tickId;
                    0 <= h && h !== c._ticks && (l._exit(),
                    l.tickId = -1)
                }
                c._elementsInView = s
            }
        }, {
            key: "_enter",
            value: function() {
                (c._visibleElements = c._visibleElements.filter(function(t) {
                    return 0 != t.height()
                }))[0] ? (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                c._visibleElements[0][0].M_ScrollSpy && this.id < c._visibleElements[0][0].M_ScrollSpy.id ? c._visibleElements.unshift(this.$el) : c._visibleElements.push(this.$el)) : c._visibleElements.push(this.$el),
                o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
            }
        }, {
            key: "_exit",
            value: function() {
                var e = this;
                (c._visibleElements = c._visibleElements.filter(function(t) {
                    return 0 != t.height()
                }))[0] && (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                (c._visibleElements = c._visibleElements.filter(function(t) {
                    return t.attr("id") != e.$el.attr("id")
                }))[0] && o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_ScrollSpy
            }
        }, {
            key: "_findElements",
            value: function(t, e, i, n) {
                for (var s = [], o = 0; o < c._elements.length; o++) {
                    var a = c._elements[o]
                      , r = t + a.options.scrollOffset || 200;
                    if (0 < a.$el.height()) {
                        var l = a.$el.offset().top
                          , h = a.$el.offset().left
                          , d = h + a.$el.width()
                          , u = l + a.$el.height();
                        !(e < h || d < n || i < l || u < r) && s.push(a)
                    }
                }
                return s
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        c
    }();
    t._elements = [],
    t._elementsInView = [],
    t._visibleElements = [],
    t._count = 0,
    t._increment = 0,
    t._ticks = 0,
    M.ScrollSpy = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "scrollSpy", "M_ScrollSpy")
}(cash, M.anime),
function(h) {
    "use strict";
    var e = {
        data: {},
        limit: 1 / 0,
        onAutocomplete: null,
        minLength: 1,
        sortFunction: function(t, e, i) {
            return t.indexOf(i) - e.indexOf(i)
        }
    }
      , t = function(t) {
        function s(t, e) {
            _classCallCheck(this, s);
            var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));
            return (i.el.M_Autocomplete = i).options = h.extend({}, s.defaults, e),
            i.isOpen = !1,
            i.count = 0,
            i.activeIndex = -1,
            i.oldVal,
            i.$inputField = i.$el.closest(".input-field"),
            i.$active = h(),
            i._mousedown = !1,
            i._setupDropdown(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(s, Component),
        _createClass(s, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_Autocomplete = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this),
                this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this),
                this.el.addEventListener("blur", this._handleInputBlurBound),
                this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                void 0 !== window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("blur", this._handleInputBlurBound),
                this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                void 0 !== window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
            }
        }, {
            key: "_setupDropdown",
            value: function() {
                var e = this;
                this.container = document.createElement("ul"),
                this.container.id = "autocomplete-options-" + M.guid(),
                h(this.container).addClass("autocomplete-content dropdown-content"),
                this.$inputField.append(this.container),
                this.el.setAttribute("data-target", this.container.id),
                this.dropdown = M.Dropdown.init(this.el, {
                    autoFocus: !1,
                    closeOnClick: !1,
                    coverTrigger: !1,
                    onItemClick: function(t) {
                        e.selectOption(h(t))
                    }
                }),
                this.el.removeEventListener("click", this.dropdown._handleClickBound)
            }
        }, {
            key: "_removeDropdown",
            value: function() {
                this.container.parentNode.removeChild(this.container)
            }
        }, {
            key: "_handleInputBlur",
            value: function() {
                this._mousedown || (this.close(),
                this._resetAutocomplete())
            }
        }, {
            key: "_handleInputKeyupAndFocus",
            value: function(t) {
                "keyup" === t.type && (s._keydown = !1),
                this.count = 0;
                var e = this.el.value.toLowerCase();
                13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(),
                this.oldVal = e)
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                s._keydown = !0;
                var e = t.keyCode
                  , i = void 0
                  , n = h(this.container).children("li").length;
                e === M.keys.ENTER && 0 <= this.activeIndex ? (i = h(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(i),
                t.preventDefault()) : e !== M.keys.ARROW_UP && e !== M.keys.ARROW_DOWN || (t.preventDefault(),
                e === M.keys.ARROW_UP && 0 < this.activeIndex && this.activeIndex--,
                e === M.keys.ARROW_DOWN && this.activeIndex < n - 1 && this.activeIndex++,
                this.$active.removeClass("active"),
                0 <= this.activeIndex && (this.$active = h(this.container).children("li").eq(this.activeIndex),
                this.$active.addClass("active")))
            }
        }, {
            key: "_handleInputClick",
            value: function(t) {
                this.open()
            }
        }, {
            key: "_handleContainerMousedownAndTouchstart",
            value: function(t) {
                this._mousedown = !0
            }
        }, {
            key: "_handleContainerMouseupAndTouchend",
            value: function(t) {
                this._mousedown = !1
            }
        }, {
            key: "_highlight",
            value: function(t, e) {
                var i = e.find("img")
                  , n = e.text().toLowerCase().indexOf("" + t.toLowerCase())
                  , s = n + t.length - 1
                  , o = e.text().slice(0, n)
                  , a = e.text().slice(n, s + 1)
                  , r = e.text().slice(s + 1);
                e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"),
                i.length && e.prepend(i)
            }
        }, {
            key: "_resetCurrentElement",
            value: function() {
                this.activeIndex = -1,
                this.$active.removeClass("active")
            }
        }, {
            key: "_resetAutocomplete",
            value: function() {
                h(this.container).empty(),
                this._resetCurrentElement(),
                this.oldVal = null,
                this.isOpen = !1,
                this._mousedown = !1
            }
        }, {
            key: "selectOption",
            value: function(t) {
                var e = t.text().trim();
                this.el.value = e,
                this.$el.trigger("change"),
                this._resetAutocomplete(),
                this.close(),
                "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e)
            }
        }, {
            key: "_renderDropdown",
            value: function(t, i) {
                var n = this;
                this._resetAutocomplete();
                var e = [];
                for (var s in t)
                    if (t.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(i)) {
                        if (this.count >= this.options.limit)
                            break;
                        var o = {
                            data: t[s],
                            key: s
                        };
                        e.push(o),
                        this.count++
                    }
                if (this.options.sortFunction) {
                    e.sort(function(t, e) {
                        return n.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), i.toLowerCase())
                    })
                }
                for (var a = 0; a < e.length; a++) {
                    var r = e[a]
                      , l = h("<li></li>");
                    r.data ? l.append('<img src="' + r.data + '" class="right circle"><span>' + r.key + "</span>") : l.append("<span>" + r.key + "</span>"),
                    h(this.container).append(l),
                    this._highlight(i, l)
                }
            }
        }, {
            key: "open",
            value: function() {
                var t = this.el.value.toLowerCase();
                this._resetAutocomplete(),
                t.length >= this.options.minLength && (this.isOpen = !0,
                this._renderDropdown(this.options.data, t)),
                this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
            }
        }, {
            key: "close",
            value: function() {
                this.dropdown.close()
            }
        }, {
            key: "updateData",
            value: function(t) {
                var e = this.el.value.toLowerCase();
                this.options.data = t,
                this.isOpen && this._renderDropdown(t, e)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Autocomplete
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        s
    }();
    t._keydown = !1,
    M.Autocomplete = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "autocomplete", "M_Autocomplete")
}(cash),
function(d) {
    M.updateTextFields = function() {
        d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t, e) {
            var i = d(this);
            0 < t.value.length || d(t).is(":focus") || t.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", !0 === t.validity.badInput) : i.siblings("label").removeClass("active")
        })
    }
    ,
    M.validate_field = function(t) {
        var e = null !== t.attr("data-length")
          , i = parseInt(t.attr("data-length"))
          , n = t[0].value.length;
        0 !== n || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"),
        t.addClass("valid")) : (t.removeClass("valid"),
        t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"),
        t.removeClass("invalid"))
    }
    ,
    M.textareaAutoResize = function(t) {
        if (t instanceof Element && (t = d(t)),
        t.length) {
            var e = d(".hiddendiv").first();
            e.length || (e = d('<div class="hiddendiv common"></div>'),
            d("body").append(e));
            var i = t.css("font-family")
              , n = t.css("font-size")
              , s = t.css("line-height")
              , o = t.css("padding-top")
              , a = t.css("padding-right")
              , r = t.css("padding-bottom")
              , l = t.css("padding-left");
            n && e.css("font-size", n),
            i && e.css("font-family", i),
            s && e.css("line-height", s),
            o && e.css("padding-top", o),
            a && e.css("padding-right", a),
            r && e.css("padding-bottom", r),
            l && e.css("padding-left", l),
            t.data("original-height") || t.data("original-height", t.height()),
            "off" === t.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"),
            e.text(t[0].value + "\n");
            var h = e.html().replace(/\n/g, "<br>");
            e.html(h),
            0 < t[0].offsetWidth && 0 < t[0].offsetHeight ? e.css("width", t.width() + "px") : e.css("width", window.innerWidth / 2 + "px"),
            t.data("original-height") <= e.innerHeight() ? t.css("height", e.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"),
            t.data("previous-length", t[0].value.length)
        } else
            console.error("No textarea element found")
    }
    ,
    d(document).ready(function() {
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
        d(document).on("change", n, function() {
            0 === this.value.length && null === d(this).attr("placeholder") || d(this).siblings("label").addClass("active"),
            M.validate_field(d(this))
        }),
        d(document).ready(function() {
            M.updateTextFields()
        }),
        d(document).on("reset", function(t) {
            var e = d(t.target);
            e.is("form") && (e.find(n).removeClass("valid").removeClass("invalid"),
            e.find(n).each(function(t) {
                this.value.length && d(this).siblings("label").removeClass("active")
            }),
            setTimeout(function() {
                e.find("select").each(function() {
                    this.M_FormSelect && d(this).trigger("change")
                })
            }, 0))
        }),
        document.addEventListener("focus", function(t) {
            d(t.target).is(n) && d(t.target).siblings("label, .prefix").addClass("active")
        }, !0),
        document.addEventListener("blur", function(t) {
            var e = d(t.target);
            if (e.is(n)) {
                var i = ".prefix";
                0 === e[0].value.length && !0 !== e[0].validity.badInput && null === e.attr("placeholder") && (i += ", label"),
                e.siblings(i).removeClass("active"),
                M.validate_field(e)
            }
        }, !0);
        d(document).on("keyup", "input[type=radio], input[type=checkbox]", function(t) {
            if (t.which === M.keys.TAB)
                return d(this).addClass("tabbed"),
                void d(this).one("blur", function(t) {
                    d(this).removeClass("tabbed")
                })
        });
        var t = ".materialize-textarea";
        d(t).each(function() {
            var t = d(this);
            t.data("original-height", t.height()),
            t.data("previous-length", this.value.length),
            M.textareaAutoResize(t)
        }),
        d(document).on("keyup", t, function() {
            M.textareaAutoResize(d(this))
        }),
        d(document).on("keydown", t, function() {
            M.textareaAutoResize(d(this))
        }),
        d(document).on("change", '.file-field input[type="file"]', function() {
            for (var t = d(this).closest(".file-field").find("input.file-path"), e = d(this)[0].files, i = [], n = 0; n < e.length; n++)
                i.push(e[n].name);
            t[0].value = i.join(", "),
            t.trigger("change")
        })
    })
}(cash),
function(s, o) {
    "use strict";
    var e = {
        indicators: !0,
        height: 400,
        duration: 500,
        interval: 6e3
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Slider = i).options = s.extend({}, n.defaults, e),
            i.$slider = i.$el.find(".slides"),
            i.$slides = i.$slider.children("li"),
            i.activeIndex = i.$slides.filter(function(t) {
                return s(t).hasClass("active")
            }).first().index(),
            -1 != i.activeIndex && (i.$active = i.$slides.eq(i.activeIndex)),
            i._setSliderHeight(),
            i.$slides.find(".caption").each(function(t) {
                i._animateCaptionIn(t, 0)
            }),
            i.$slides.find("img").each(function(t) {
                var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                s(t).attr("src") !== e && (s(t).css("background-image", 'url("' + s(t).attr("src") + '")'),
                s(t).attr("src", e))
            }),
            i._setupIndicators(),
            i.$active ? i.$active.css("display", "block") : (i.$slides.first().addClass("active"),
            o({
                targets: i.$slides.first()[0],
                opacity: 1,
                duration: i.options.duration,
                easing: "easeOutQuad"
            }),
            i.activeIndex = 0,
            i.$active = i.$slides.eq(i.activeIndex),
            i.options.indicators && i.$indicators.eq(i.activeIndex).addClass("active")),
            i.$active.find("img").each(function(t) {
                o({
                    targets: i.$active.find(".caption")[0],
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    duration: i.options.duration,
                    easing: "easeOutQuad"
                })
            }),
            i._setupEventHandlers(),
            i.start(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this.pause(),
                this._removeIndicators(),
                this._removeEventHandlers(),
                this.el.M_Slider = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleIntervalBound = this._handleInterval.bind(this),
                this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                this.options.indicators && this.$indicators.each(function(t) {
                    t.addEventListener("click", e._handleIndicatorClickBound)
                })
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                this.options.indicators && this.$indicators.each(function(t) {
                    t.removeEventListener("click", e._handleIndicatorClickBound)
                })
            }
        }, {
            key: "_handleIndicatorClick",
            value: function(t) {
                var e = s(t.target).index();
                this.set(e)
            }
        }, {
            key: "_handleInterval",
            value: function() {
                var t = this.$slider.find(".active").index();
                this.$slides.length === t + 1 ? t = 0 : t += 1,
                this.set(t)
            }
        }, {
            key: "_animateCaptionIn",
            value: function(t, e) {
                var i = {
                    targets: t,
                    opacity: 0,
                    duration: e,
                    easing: "easeOutQuad"
                };
                s(t).hasClass("center-align") ? i.translateY = -100 : s(t).hasClass("right-align") ? i.translateX = 100 : s(t).hasClass("left-align") && (i.translateX = -100),
                o(i)
            }
        }, {
            key: "_setSliderHeight",
            value: function() {
                this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"),
                this.$slider.css("height", this.options.height + "px"))
            }
        }, {
            key: "_setupIndicators",
            value: function() {
                var n = this;
                this.options.indicators && (this.$indicators = s('<ul class="indicators"></ul>'),
                this.$slides.each(function(t, e) {
                    var i = s('<li class="indicator-item"></li>');
                    n.$indicators.append(i[0])
                }),
                this.$el.append(this.$indicators[0]),
                this.$indicators = this.$indicators.children("li.indicator-item"))
            }
        }, {
            key: "_removeIndicators",
            value: function() {
                this.$el.find("ul.indicators").remove()
            }
        }, {
            key: "set",
            value: function(t) {
                var e = this;
                if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.activeIndex != t) {
                    this.$active = this.$slides.eq(this.activeIndex);
                    var i = this.$active.find(".caption");
                    this.$active.removeClass("active"),
                    o({
                        targets: this.$active[0],
                        opacity: 0,
                        duration: this.options.duration,
                        easing: "easeOutQuad",
                        complete: function() {
                            e.$slides.not(".active").each(function(t) {
                                o({
                                    targets: t,
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0,
                                    duration: 0,
                                    easing: "easeOutQuad"
                                })
                            })
                        }
                    }),
                    this._animateCaptionIn(i[0], this.options.duration),
                    this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"),
                    this.$indicators.eq(t).addClass("active")),
                    o({
                        targets: this.$slides.eq(t)[0],
                        opacity: 1,
                        duration: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    o({
                        targets: this.$slides.eq(t).find(".caption")[0],
                        opacity: 1,
                        translateX: 0,
                        translateY: 0,
                        duration: this.options.duration,
                        delay: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    this.$slides.eq(t).addClass("active"),
                    this.activeIndex = t,
                    this.start()
                }
            }
        }, {
            key: "pause",
            value: function() {
                clearInterval(this.interval)
            }
        }, {
            key: "start",
            value: function() {
                clearInterval(this.interval),
                this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval)
            }
        }, {
            key: "next",
            value: function() {
                var t = this.activeIndex + 1;
                t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.set(t)
            }
        }, {
            key: "prev",
            value: function() {
                var t = this.activeIndex - 1;
                t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                this.set(t)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Slider
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.Slider = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "slider", "M_Slider")
}(cash, M.anime),
function(n, s) {
    n(document).on("click", ".card", function(t) {
        if (n(this).children(".card-reveal").length) {
            var i = n(t.target).closest(".card");
            void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
            var e = n(this).find(".card-reveal");
            n(t.target).is(n(".card-reveal .card-title")) || n(t.target).is(n(".card-reveal .card-title i")) ? s({
                targets: e[0],
                translateY: 0,
                duration: 225,
                easing: "easeInOutQuad",
                complete: function(t) {
                    var e = t.animatables[0].target;
                    n(e).css({
                        display: "none"
                    }),
                    i.css("overflow", i.data("initialOverflow"))
                }
            }) : (n(t.target).is(n(".card .activator")) || n(t.target).is(n(".card .activator i"))) && (i.css("overflow", "hidden"),
            e.css({
                display: "block"
            }),
            s({
                targets: e[0],
                translateY: "-100%",
                duration: 300,
                easing: "easeInOutQuad"
            }))
        }
    })
}(cash, M.anime),
function(h) {
    "use strict";
    var e = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteOptions: {},
        limit: 1 / 0,
        onChipAdd: null,
        onChipSelect: null,
        onChipDelete: null
    }
      , t = function(t) {
        function l(t, e) {
            _classCallCheck(this, l);
            var i = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, l, t, e));
            return (i.el.M_Chips = i).options = h.extend({}, l.defaults, e),
            i.$el.addClass("chips input-field"),
            i.chipsData = [],
            i.$chips = h(),
            i._setupInput(),
            i.hasAutocomplete = 0 < Object.keys(i.options.autocompleteOptions).length,
            i.$input.attr("id") || i.$input.attr("id", M.guid()),
            i.options.data.length && (i.chipsData = i.options.data,
            i._renderChips(i.chipsData)),
            i.hasAutocomplete && i._setupAutocomplete(),
            i._setPlaceholder(),
            i._setupLabel(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(l, Component),
        _createClass(l, [{
            key: "getData",
            value: function() {
                return this.chipsData
            }
        }, {
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.$chips.remove(),
                this.el.M_Chips = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleChipClickBound = this._handleChipClick.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputFocusBound = this._handleInputFocus.bind(this),
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this.el.addEventListener("click", this._handleChipClickBound),
                document.addEventListener("keydown", l._handleChipsKeydown),
                document.addEventListener("keyup", l._handleChipsKeyup),
                this.el.addEventListener("blur", l._handleChipsBlur, !0),
                this.$input[0].addEventListener("focus", this._handleInputFocusBound),
                this.$input[0].addEventListener("blur", this._handleInputBlurBound),
                this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleChipClickBound),
                document.removeEventListener("keydown", l._handleChipsKeydown),
                document.removeEventListener("keyup", l._handleChipsKeyup),
                this.el.removeEventListener("blur", l._handleChipsBlur, !0),
                this.$input[0].removeEventListener("focus", this._handleInputFocusBound),
                this.$input[0].removeEventListener("blur", this._handleInputBlurBound),
                this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_handleChipClick",
            value: function(t) {
                var e = h(t.target).closest(".chip")
                  , i = h(t.target).is(".close");
                if (e.length) {
                    var n = e.index();
                    i ? (this.deleteChip(n),
                    this.$input[0].focus()) : this.selectChip(n)
                } else
                    this.$input[0].focus()
            }
        }, {
            key: "_handleInputFocus",
            value: function() {
                this.$el.addClass("focus")
            }
        }, {
            key: "_handleInputBlur",
            value: function() {
                this.$el.removeClass("focus")
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                if (l._keydown = !0,
                13 === t.keyCode) {
                    if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen)
                        return;
                    t.preventDefault(),
                    this.addChip({
                        tag: this.$input[0].value
                    }),
                    this.$input[0].value = ""
                } else
                    8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(),
                    this.selectChip(this.chipsData.length - 1))
            }
        }, {
            key: "_renderChip",
            value: function(t) {
                if (t.tag) {
                    var e = document.createElement("div")
                      , i = document.createElement("i");
                    if (e.classList.add("chip"),
                    e.textContent = t.tag,
                    e.setAttribute("tabindex", 0),
                    h(i).addClass("material-icons close"),
                    i.textContent = "close",
                    t.image) {
                        var n = document.createElement("img");
                        n.setAttribute("src", t.image),
                        e.insertBefore(n, e.firstChild)
                    }
                    return e.appendChild(i),
                    e
                }
            }
        }, {
            key: "_renderChips",
            value: function() {
                this.$chips.remove();
                for (var t = 0; t < this.chipsData.length; t++) {
                    var e = this._renderChip(this.chipsData[t]);
                    this.$el.append(e),
                    this.$chips.add(e)
                }
                this.$el.append(this.$input[0])
            }
        }, {
            key: "_setupAutocomplete",
            value: function() {
                var e = this;
                this.options.autocompleteOptions.onAutocomplete = function(t) {
                    e.addChip({
                        tag: t
                    }),
                    e.$input[0].value = "",
                    e.$input[0].focus()
                }
                ,
                this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
            }
        }, {
            key: "_setupInput",
            value: function() {
                this.$input = this.$el.find("input"),
                this.$input.length || (this.$input = h("<input></input>"),
                this.$el.append(this.$input)),
                this.$input.addClass("input")
            }
        }, {
            key: "_setupLabel",
            value: function() {
                this.$label = this.$el.find("label"),
                this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"))
            }
        }, {
            key: "_setPlaceholder",
            value: function() {
                void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? h(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && h(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
            }
        }, {
            key: "_isValid",
            value: function(t) {
                if (t.hasOwnProperty("tag") && "" !== t.tag) {
                    for (var e = !1, i = 0; i < this.chipsData.length; i++)
                        if (this.chipsData[i].tag === t.tag) {
                            e = !0;
                            break
                        }
                    return !e
                }
                return !1
            }
        }, {
            key: "addChip",
            value: function(t) {
                if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
                    var e = this._renderChip(t);
                    this.$chips.add(e),
                    this.chipsData.push(t),
                    h(this.$input).before(e),
                    this._setPlaceholder(),
                    "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, e)
                }
            }
        }, {
            key: "deleteChip",
            value: function(t) {
                var e = this.$chips.eq(t);
                this.$chips.eq(t).remove(),
                this.$chips = this.$chips.filter(function(t) {
                    return 0 <= h(t).index()
                }),
                this.chipsData.splice(t, 1),
                this._setPlaceholder(),
                "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, e[0])
            }
        }, {
            key: "selectChip",
            value: function(t) {
                var e = this.$chips.eq(t);
                (this._selectedChip = e)[0].focus(),
                "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0])
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(l.__proto__ || Object.getPrototypeOf(l), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Chips
            }
        }, {
            key: "_handleChipsKeydown",
            value: function(t) {
                l._keydown = !0;
                var e = h(t.target).closest(".chips")
                  , i = t.target && e.length;
                if (!h(t.target).is("input, textarea") && i) {
                    var n = e[0].M_Chips;
                    if (8 === t.keyCode || 46 === t.keyCode) {
                        t.preventDefault();
                        var s = n.chipsData.length;
                        if (n._selectedChip) {
                            var o = n._selectedChip.index();
                            n.deleteChip(o),
                            n._selectedChip = null,
                            s = Math.max(o - 1, 0)
                        }
                        n.chipsData.length && n.selectChip(s)
                    } else if (37 === t.keyCode) {
                        if (n._selectedChip) {
                            var a = n._selectedChip.index() - 1;
                            if (a < 0)
                                return;
                            n.selectChip(a)
                        }
                    } else if (39 === t.keyCode && n._selectedChip) {
                        var r = n._selectedChip.index() + 1;
                        r >= n.chipsData.length ? n.$input[0].focus() : n.selectChip(r)
                    }
                }
            }
        }, {
            key: "_handleChipsKeyup",
            value: function(t) {
                l._keydown = !1
            }
        }, {
            key: "_handleChipsBlur",
            value: function(t) {
                l._keydown || (h(t.target).closest(".chips")[0].M_Chips._selectedChip = null)
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        l
    }();
    t._keydown = !1,
    M.Chips = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "chips", "M_Chips"),
    h(document).ready(function() {
        h(document.body).on("click", ".chip .close", function() {
            var t = h(this).closest(".chips");
            t.length && t[0].M_Chips || h(this).closest(".chip").remove()
        })
    })
}(cash),
function(s) {
    "use strict";
    var e = {
        top: 0,
        bottom: 1 / 0,
        offset: 0,
        onPositionChange: null
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Pushpin = i).options = s.extend({}, n.defaults, e),
            i.originalOffset = i.el.offsetTop,
            n._pushpins.push(i),
            i._setupEventHandlers(),
            i._updatePosition(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this.el.style.top = null,
                this._removePinClasses(),
                this._removeEventHandlers();
                var t = n._pushpins.indexOf(this);
                n._pushpins.splice(t, 1)
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                document.addEventListener("scroll", n._updateElements)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                document.removeEventListener("scroll", n._updateElements)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var t = M.getDocumentScrollTop() + this.options.offset;
                this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(),
                this.el.style.top = this.options.offset + "px",
                this.el.classList.add("pinned"),
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")),
                t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(),
                this.el.style.top = 0,
                this.el.classList.add("pin-top"),
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")),
                t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(),
                this.el.classList.add("pin-bottom"),
                this.el.style.top = this.options.bottom - this.originalOffset + "px",
                "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
            }
        }, {
            key: "_removePinClasses",
            value: function() {
                this.el.classList.remove("pin-top"),
                this.el.classList.remove("pinned"),
                this.el.classList.remove("pin-bottom")
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Pushpin
            }
        }, {
            key: "_updateElements",
            value: function() {
                for (var t in n._pushpins) {
                    n._pushpins[t]._updatePosition()
                }
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    t._pushpins = [],
    M.Pushpin = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "pushpin", "M_Pushpin")
}(cash),
function(r, s) {
    "use strict";
    var e = {
        direction: "top",
        hoverEnabled: !0,
        toolbarEnabled: !1
    };
    r.fn.reverse = [].reverse;
    var t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_FloatingActionButton = i).options = r.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.$anchor = i.$el.children("a").first(),
            i.$menu = i.$el.children("ul").first(),
            i.$floatingBtns = i.$el.find("ul .btn-floating"),
            i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(),
            i.offsetY = 0,
            i.offsetX = 0,
            i.$el.addClass("direction-" + i.options.direction),
            "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40,
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_FloatingActionButton = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleFABClickBound = this._handleFABClick.bind(this),
                this._handleOpenBound = this.open.bind(this),
                this._handleCloseBound = this.close.bind(this),
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound),
                this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound),
                this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound)
            }
        }, {
            key: "_handleFABClick",
            value: function() {
                this.isOpen ? this.close() : this.open()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(t) {
                r(t.target).closest(this.$menu).length || this.close()
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(),
                this.isOpen = !0)
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0),
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                this._animateOutToolbar()) : this._animateOutFAB(),
                this.isOpen = !1)
            }
        }, {
            key: "_animateInFAB",
            value: function() {
                var e = this;
                this.$el.addClass("active");
                var i = 0;
                this.$floatingBtnsReverse.each(function(t) {
                    s({
                        targets: t,
                        opacity: 1,
                        scale: [.4, 1],
                        translateY: [e.offsetY, 0],
                        translateX: [e.offsetX, 0],
                        duration: 275,
                        delay: i,
                        easing: "easeInOutQuad"
                    }),
                    i += 40
                })
            }
        }, {
            key: "_animateOutFAB",
            value: function() {
                var e = this;
                this.$floatingBtnsReverse.each(function(t) {
                    s.remove(t),
                    s({
                        targets: t,
                        opacity: 0,
                        scale: .4,
                        translateY: e.offsetY,
                        translateX: e.offsetX,
                        duration: 175,
                        easing: "easeOutQuad",
                        complete: function() {
                            e.$el.removeClass("active")
                        }
                    })
                })
            }
        }, {
            key: "_animateInToolbar",
            value: function() {
                var t, e = this, i = window.innerWidth, n = window.innerHeight, s = this.el.getBoundingClientRect(), o = r('<div class="fab-backdrop"></div>'), a = this.$anchor.css("background-color");
                this.$anchor.append(o),
                this.offsetX = s.left - i / 2 + s.width / 2,
                this.offsetY = n - s.bottom,
                t = i / o[0].clientWidth,
                this.btnBottom = s.bottom,
                this.btnLeft = s.left,
                this.btnWidth = s.width,
                this.$el.addClass("active"),
                this.$el.css({
                    "text-align": "center",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                    transform: "translateX(" + this.offsetX + "px)",
                    transition: "none"
                }),
                this.$anchor.css({
                    transform: "translateY(" + -this.offsetY + "px)",
                    transition: "none"
                }),
                o.css({
                    "background-color": a
                }),
                setTimeout(function() {
                    e.$el.css({
                        transform: "",
                        transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                    }),
                    e.$anchor.css({
                        overflow: "visible",
                        transform: "",
                        transition: "transform .2s"
                    }),
                    setTimeout(function() {
                        e.$el.css({
                            overflow: "hidden",
                            "background-color": a
                        }),
                        o.css({
                            transform: "scale(" + t + ")",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        }),
                        e.$menu.children("li").children("a").css({
                            opacity: 1
                        }),
                        e._handleDocumentClickBound = e._handleDocumentClick.bind(e),
                        window.addEventListener("scroll", e._handleCloseBound, !0),
                        document.body.addEventListener("click", e._handleDocumentClickBound, !0)
                    }, 100)
                }, 0)
            }
        }, {
            key: "_animateOutToolbar",
            value: function() {
                var t = this
                  , e = window.innerWidth
                  , i = window.innerHeight
                  , n = this.$el.find(".fab-backdrop")
                  , s = this.$anchor.css("background-color");
                this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2,
                this.offsetY = i - this.btnBottom,
                this.$el.removeClass("active"),
                this.$el.css({
                    "background-color": "transparent",
                    transition: "none"
                }),
                this.$anchor.css({
                    transition: "none"
                }),
                n.css({
                    transform: "scale(0)",
                    "background-color": s
                }),
                this.$menu.children("li").children("a").css({
                    opacity: ""
                }),
                setTimeout(function() {
                    n.remove(),
                    t.$el.css({
                        "text-align": "",
                        width: "",
                        bottom: "",
                        left: "",
                        overflow: "",
                        "background-color": "",
                        transform: "translate3d(" + -t.offsetX + "px,0,0)"
                    }),
                    t.$anchor.css({
                        overflow: "",
                        transform: "translate3d(0," + t.offsetY + "px,0)"
                    }),
                    setTimeout(function() {
                        t.$el.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s"
                        }),
                        t.$anchor.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        })
                    }, 20)
                }, 200)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_FloatingActionButton
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.FloatingActionButton = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "floatingActionButton", "M_FloatingActionButton")
}(cash, M.anime),
function(g) {
    "use strict";
    var e = {
        autoClose: !1,
        format: "mmm dd, yyyy",
        parse: null,
        defaultDate: null,
        setDefaultDate: !1,
        disableWeekends: !1,
        disableDayFn: null,
        firstDay: 0,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        minYear: 0,
        maxYear: 9999,
        minMonth: void 0,
        maxMonth: void 0,
        startRange: null,
        endRange: null,
        isRTL: !1,
        showMonthAfterYear: !1,
        showDaysInNextAndPreviousMonths: !1,
        container: null,
        showClearBtn: !1,
        i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok",
            previousMonth: "‹",
            nextMonth: "›",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
        },
        events: [],
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    }
      , t = function(t) {
        function B(t, e) {
            _classCallCheck(this, B);
            var i = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, B, t, e));
            (i.el.M_Datepicker = i).options = g.extend({}, B.defaults, e),
            e && e.hasOwnProperty("i18n") && "object" == typeof e.i18n && (i.options.i18n = g.extend({}, B.defaults.i18n, e.i18n)),
            i.options.minDate && i.options.minDate.setHours(0, 0, 0, 0),
            i.options.maxDate && i.options.maxDate.setHours(0, 0, 0, 0),
            i.id = M.guid(),
            i._setupVariables(),
            i._insertHTMLIntoDOM(),
            i._setupModal(),
            i._setupEventHandlers(),
            i.options.defaultDate || (i.options.defaultDate = new Date(Date.parse(i.el.value)));
            var n = i.options.defaultDate;
            return B._isDate(n) ? i.options.setDefaultDate ? (i.setDate(n, !0),
            i.setInputValue()) : i.gotoDate(n) : i.gotoDate(new Date),
            i.isOpen = !1,
            i
        }
        return _inherits(B, Component),
        _createClass(B, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                g(this.modalEl).remove(),
                this.destroySelects(),
                this.el.M_Datepicker = void 0
            }
        }, {
            key: "destroySelects",
            value: function() {
                var t = this.calendarEl.querySelector(".orig-select-year");
                t && M.FormSelect.getInstance(t).destroy();
                var e = this.calendarEl.querySelector(".orig-select-month");
                e && M.FormSelect.getInstance(e).destroy()
            }
        }, {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.options.showClearBtn && (g(this.clearBtn).css({
                    visibility: ""
                }),
                this.clearBtn.innerHTML = this.options.i18n.clear),
                this.doneBtn.innerHTML = this.options.i18n.done,
                this.cancelBtn.innerHTML = this.options.i18n.cancel,
                this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el)
            }
        }, {
            key: "_setupModal",
            value: function() {
                var t = this;
                this.modalEl.id = "modal-" + this.id,
                this.modal = M.Modal.init(this.modalEl, {
                    onCloseEnd: function() {
                        t.isOpen = !1
                    }
                })
            }
        }, {
            key: "toString",
            value: function(t) {
                var e = this;
                return t = t || this.options.format,
                B._isDate(this.date) ? t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t) {
                    return e.formats[t] ? e.formats[t]() : t
                }).join("") : ""
            }
        }, {
            key: "setDate",
            value: function(t, e) {
                if (!t)
                    return this.date = null,
                    this._renderDateDisplay(),
                    this.draw();
                if ("string" == typeof t && (t = new Date(Date.parse(t))),
                B._isDate(t)) {
                    var i = this.options.minDate
                      , n = this.options.maxDate;
                    B._isDate(i) && t < i ? t = i : B._isDate(n) && n < t && (t = n),
                    this.date = new Date(t.getTime()),
                    this._renderDateDisplay(),
                    B._setToStartOfDay(this.date),
                    this.gotoDate(this.date),
                    e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
                }
            }
        }, {
            key: "setInputValue",
            value: function() {
                this.el.value = this.toString(),
                this.$el.trigger("change", {
                    firedBy: this
                })
            }
        }, {
            key: "_renderDateDisplay",
            value: function() {
                var t = B._isDate(this.date) ? this.date : new Date
                  , e = this.options.i18n
                  , i = e.weekdaysShort[t.getDay()]
                  , n = e.monthsShort[t.getMonth()]
                  , s = t.getDate();
                this.yearTextEl.innerHTML = t.getFullYear(),
                this.dateTextEl.innerHTML = i + ", " + n + " " + s
            }
        }, {
            key: "gotoDate",
            value: function(t) {
                var e = !0;
                if (B._isDate(t)) {
                    if (this.calendars) {
                        var i = new Date(this.calendars[0].year,this.calendars[0].month,1)
                          , n = new Date(this.calendars[this.calendars.length - 1].year,this.calendars[this.calendars.length - 1].month,1)
                          , s = t.getTime();
                        n.setMonth(n.getMonth() + 1),
                        n.setDate(n.getDate() - 1),
                        e = s < i.getTime() || n.getTime() < s
                    }
                    e && (this.calendars = [{
                        month: t.getMonth(),
                        year: t.getFullYear()
                    }]),
                    this.adjustCalendars()
                }
            }
        }, {
            key: "adjustCalendars",
            value: function() {
                this.calendars[0] = this.adjustCalendar(this.calendars[0]),
                this.draw()
            }
        }, {
            key: "adjustCalendar",
            value: function(t) {
                return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12),
                t.month += 12),
                11 < t.month && (t.year += Math.floor(Math.abs(t.month) / 12),
                t.month -= 12),
                t
            }
        }, {
            key: "nextMonth",
            value: function() {
                this.calendars[0].month++,
                this.adjustCalendars()
            }
        }, {
            key: "prevMonth",
            value: function() {
                this.calendars[0].month--,
                this.adjustCalendars()
            }
        }, {
            key: "render",
            value: function(t, e, i) {
                var n = this.options
                  , s = new Date
                  , o = B._getDaysInMonth(t, e)
                  , a = new Date(t,e,1).getDay()
                  , r = []
                  , l = [];
                B._setToStartOfDay(s),
                0 < n.firstDay && (a -= n.firstDay) < 0 && (a += 7);
                for (var h = 0 === e ? 11 : e - 1, d = 11 === e ? 0 : e + 1, u = 0 === e ? t - 1 : t, c = 11 === e ? t + 1 : t, p = B._getDaysInMonth(u, h), v = o + a, f = v; 7 < f; )
                    f -= 7;
                v += 7 - f;
                for (var m = !1, g = 0, _ = 0; g < v; g++) {
                    var y = new Date(t,e,g - a + 1)
                      , k = !!B._isDate(this.date) && B._compareDates(y, this.date)
                      , b = B._compareDates(y, s)
                      , w = -1 !== n.events.indexOf(y.toDateString())
                      , C = g < a || o + a <= g
                      , E = g - a + 1
                      , M = e
                      , O = t
                      , x = n.startRange && B._compareDates(n.startRange, y)
                      , L = n.endRange && B._compareDates(n.endRange, y)
                      , T = n.startRange && n.endRange && n.startRange < y && y < n.endRange;
                    C && (g < a ? (E = p + E,
                    M = h,
                    O = u) : (E -= o,
                    M = d,
                    O = c));
                    var $ = {
                        day: E,
                        month: M,
                        year: O,
                        hasEvent: w,
                        isSelected: k,
                        isToday: b,
                        isDisabled: n.minDate && y < n.minDate || n.maxDate && y > n.maxDate || n.disableWeekends && B._isWeekend(y) || n.disableDayFn && n.disableDayFn(y),
                        isEmpty: C,
                        isStartRange: x,
                        isEndRange: L,
                        isInRange: T,
                        showDaysInNextAndPreviousMonths: n.showDaysInNextAndPreviousMonths
                    };
                    l.push(this.renderDay($)),
                    7 == ++_ && (r.push(this.renderRow(l, n.isRTL, m)),
                    _ = 0,
                    m = !(l = []))
                }
                return this.renderTable(n, r, i)
            }
        }, {
            key: "renderDay",
            value: function(t) {
                var e = []
                  , i = "false";
                if (t.isEmpty) {
                    if (!t.showDaysInNextAndPreviousMonths)
                        return '<td class="is-empty"></td>';
                    e.push("is-outside-current-month"),
                    e.push("is-selection-disabled")
                }
                return t.isDisabled && e.push("is-disabled"),
                t.isToday && e.push("is-today"),
                t.isSelected && (e.push("is-selected"),
                i = "true"),
                t.hasEvent && e.push("has-event"),
                t.isInRange && e.push("is-inrange"),
                t.isStartRange && e.push("is-startrange"),
                t.isEndRange && e.push("is-endrange"),
                '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button></td>"
            }
        }, {
            key: "renderRow",
            value: function(t, e, i) {
                return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>"
            }
        }, {
            key: "renderTable",
            value: function(t, e, i) {
                return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>"
            }
        }, {
            key: "renderHead",
            value: function(t) {
                var e = void 0
                  , i = [];
                for (e = 0; e < 7; e++)
                    i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
                return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>"
            }
        }, {
            key: "renderBody",
            value: function(t) {
                return "<tbody>" + t.join("") + "</tbody>"
            }
        }, {
            key: "renderTitle",
            value: function(t, e, i, n, s, o) {
                var a, r, l = void 0, h = void 0, d = void 0, u = this.options, c = i === u.minYear, p = i === u.maxYear, v = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">', f = !0, m = !0;
                for (d = [],
                l = 0; l < 12; l++)
                    d.push('<option value="' + (i === s ? l - e : 12 + l - e) + '"' + (l === n ? ' selected="selected"' : "") + (c && l < u.minMonth || p && l > u.maxMonth ? 'disabled="disabled"' : "") + ">" + u.i18n.months[l] + "</option>");
                for (a = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join("") + "</select>",
                g.isArray(u.yearRange) ? (l = u.yearRange[0],
                h = u.yearRange[1] + 1) : (l = i - u.yearRange,
                h = 1 + i + u.yearRange),
                d = []; l < h && l <= u.maxYear; l++)
                    l >= u.minYear && d.push('<option value="' + l + '" ' + (l === i ? 'selected="selected"' : "") + ">" + l + "</option>");
                r = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join("") + "</select>";
                v += '<button class="month-prev' + (f ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',
                v += '<div class="selects-container">',
                u.showMonthAfterYear ? v += r + a : v += a + r,
                v += "</div>",
                c && (0 === n || u.minMonth >= n) && (f = !1),
                p && (11 === n || u.maxMonth <= n) && (m = !1);
                return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
            }
        }, {
            key: "draw",
            value: function(t) {
                if (this.isOpen || t) {
                    var e, i = this.options, n = i.minYear, s = i.maxYear, o = i.minMonth, a = i.maxMonth, r = "";
                    this._y <= n && (this._y = n,
                    !isNaN(o) && this._m < o && (this._m = o)),
                    this._y >= s && (this._y = s,
                    !isNaN(a) && this._m > a && (this._m = a)),
                    e = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                    for (var l = 0; l < 1; l++)
                        this._renderDateDisplay(),
                        r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e) + this.render(this.calendars[l].year, this.calendars[l].month, e);
                    this.destroySelects(),
                    this.calendarEl.innerHTML = r;
                    var h = this.calendarEl.querySelector(".orig-select-year")
                      , d = this.calendarEl.querySelector(".orig-select-month");
                    M.FormSelect.init(h, {
                        classes: "select-year",
                        dropdownOptions: {
                            container: document.body,
                            constrainWidth: !1
                        }
                    }),
                    M.FormSelect.init(d, {
                        classes: "select-month",
                        dropdownOptions: {
                            container: document.body,
                            constrainWidth: !1
                        }
                    }),
                    h.addEventListener("change", this._handleYearChange.bind(this)),
                    d.addEventListener("change", this._handleMonthChange.bind(this)),
                    "function" == typeof this.options.onDraw && this.options.onDraw(this)
                }
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleInputChangeBound = this._handleInputChange.bind(this),
                this._handleCalendarClickBound = this._handleCalendarClick.bind(this),
                this._finishSelectionBound = this._finishSelection.bind(this),
                this._handleMonthChange = this._handleMonthChange.bind(this),
                this._closeBound = this.close.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.el.addEventListener("change", this._handleInputChangeBound),
                this.calendarEl.addEventListener("click", this._handleCalendarClickBound),
                this.doneBtn.addEventListener("click", this._finishSelectionBound),
                this.cancelBtn.addEventListener("click", this._closeBound),
                this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this),
                this.clearBtn.addEventListener("click", this._handleClearClickBound))
            }
        }, {
            key: "_setupVariables",
            value: function() {
                var e = this;
                this.$modalEl = g(B._template),
                this.modalEl = this.$modalEl[0],
                this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"),
                this.yearTextEl = this.modalEl.querySelector(".year-text"),
                this.dateTextEl = this.modalEl.querySelector(".date-text"),
                this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")),
                this.doneBtn = this.modalEl.querySelector(".datepicker-done"),
                this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"),
                this.formats = {
                    d: function() {
                        return e.date.getDate()
                    },
                    dd: function() {
                        var t = e.date.getDate();
                        return (t < 10 ? "0" : "") + t
                    },
                    ddd: function() {
                        return e.options.i18n.weekdaysShort[e.date.getDay()]
                    },
                    dddd: function() {
                        return e.options.i18n.weekdays[e.date.getDay()]
                    },
                    m: function() {
                        return e.date.getMonth() + 1
                    },
                    mm: function() {
                        var t = e.date.getMonth() + 1;
                        return (t < 10 ? "0" : "") + t
                    },
                    mmm: function() {
                        return e.options.i18n.monthsShort[e.date.getMonth()]
                    },
                    mmmm: function() {
                        return e.options.i18n.months[e.date.getMonth()]
                    },
                    yy: function() {
                        return ("" + e.date.getFullYear()).slice(2)
                    },
                    yyyy: function() {
                        return e.date.getFullYear()
                    }
                }
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.el.removeEventListener("change", this._handleInputChangeBound),
                this.calendarEl.removeEventListener("click", this._handleCalendarClickBound)
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                t.which === M.keys.ENTER && (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleCalendarClick",
            value: function(t) {
                if (this.isOpen) {
                    var e = g(t.target);
                    e.hasClass("is-disabled") || (!e.hasClass("datepicker-day-button") || e.hasClass("is-empty") || e.parent().hasClass("is-disabled") ? e.closest(".month-prev").length ? this.prevMonth() : e.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"),t.target.getAttribute("data-month"),t.target.getAttribute("data-day"))),
                    this.options.autoClose && this._finishSelection()))
                }
            }
        }, {
            key: "_handleClearClick",
            value: function() {
                this.date = null,
                this.setInputValue(),
                this.close()
            }
        }, {
            key: "_handleMonthChange",
            value: function(t) {
                this.gotoMonth(t.target.value)
            }
        }, {
            key: "_handleYearChange",
            value: function(t) {
                this.gotoYear(t.target.value)
            }
        }, {
            key: "gotoMonth",
            value: function(t) {
                isNaN(t) || (this.calendars[0].month = parseInt(t, 10),
                this.adjustCalendars())
            }
        }, {
            key: "gotoYear",
            value: function(t) {
                isNaN(t) || (this.calendars[0].year = parseInt(t, 10),
                this.adjustCalendars())
            }
        }, {
            key: "_handleInputChange",
            value: function(t) {
                var e = void 0;
                t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)),
                B._isDate(e) && this.setDate(e))
            }
        }, {
            key: "renderDayName",
            value: function(t, e, i) {
                for (e += t.firstDay; 7 <= e; )
                    e -= 7;
                return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e]
            }
        }, {
            key: "_finishSelection",
            value: function() {
                this.setInputValue(),
                this.close()
            }
        }, {
            key: "open",
            value: function() {
                if (!this.isOpen)
                    return this.isOpen = !0,
                    "function" == typeof this.options.onOpen && this.options.onOpen.call(this),
                    this.draw(),
                    this.modal.open(),
                    this
            }
        }, {
            key: "close",
            value: function() {
                if (this.isOpen)
                    return this.isOpen = !1,
                    "function" == typeof this.options.onClose && this.options.onClose.call(this),
                    this.modal.close(),
                    this
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(B.__proto__ || Object.getPrototypeOf(B), "init", this).call(this, this, t, e)
            }
        }, {
            key: "_isDate",
            value: function(t) {
                return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
            }
        }, {
            key: "_isWeekend",
            value: function(t) {
                var e = t.getDay();
                return 0 === e || 6 === e
            }
        }, {
            key: "_setToStartOfDay",
            value: function(t) {
                B._isDate(t) && t.setHours(0, 0, 0, 0)
            }
        }, {
            key: "_getDaysInMonth",
            value: function(t, e) {
                return [31, B._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            }
        }, {
            key: "_isLeapYear",
            value: function(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            }
        }, {
            key: "_compareDates",
            value: function(t, e) {
                return t.getTime() === e.getTime()
            }
        }, {
            key: "_setToStartOfDay",
            value: function(t) {
                B._isDate(t) && t.setHours(0, 0, 0, 0)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Datepicker
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        B
    }();
    t._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""),
    M.Datepicker = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "datepicker", "M_Datepicker")
}(cash),
function(h) {
    "use strict";
    var e = {
        dialRadius: 135,
        outerRadius: 105,
        innerRadius: 70,
        tickRadius: 20,
        duration: 350,
        container: null,
        defaultTime: "now",
        fromNow: 0,
        showClearBtn: !1,
        i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok"
        },
        autoClose: !1,
        twelveHour: !0,
        vibrate: !0,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onSelect: null
    }
      , t = function(t) {
        function f(t, e) {
            _classCallCheck(this, f);
            var i = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, f, t, e));
            return (i.el.M_Timepicker = i).options = h.extend({}, f.defaults, e),
            i.id = M.guid(),
            i._insertHTMLIntoDOM(),
            i._setupModal(),
            i._setupVariables(),
            i._setupEventHandlers(),
            i._clockSetup(),
            i._pickerSetup(),
            i
        }
        return _inherits(f, Component),
        _createClass(f, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                h(this.modalEl).remove(),
                this.el.M_Timepicker = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleClockClickStartBound = this._handleClockClickStart.bind(this),
                this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this),
                this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.plate.addEventListener("mousedown", this._handleClockClickStartBound),
                this.plate.addEventListener("touchstart", this._handleClockClickStartBound),
                h(this.spanHours).on("click", this.showView.bind(this, "hours")),
                h(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound)
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        }, {
            key: "_handleInputKeydown",
            value: function(t) {
                t.which === M.keys.ENTER && (t.preventDefault(),
                this.open())
            }
        }, {
            key: "_handleClockClickStart",
            value: function(t) {
                t.preventDefault();
                var e = this.plate.getBoundingClientRect()
                  , i = e.left
                  , n = e.top;
                this.x0 = i + this.options.dialRadius,
                this.y0 = n + this.options.dialRadius,
                this.moved = !1;
                var s = f._Pos(t);
                this.dx = s.x - this.x0,
                this.dy = s.y - this.y0,
                this.setHand(this.dx, this.dy, !1),
                document.addEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.addEventListener("touchmove", this._handleDocumentClickMoveBound),
                document.addEventListener("mouseup", this._handleDocumentClickEndBound),
                document.addEventListener("touchend", this._handleDocumentClickEndBound)
            }
        }, {
            key: "_handleDocumentClickMove",
            value: function(t) {
                t.preventDefault();
                var e = f._Pos(t)
                  , i = e.x - this.x0
                  , n = e.y - this.y0;
                this.moved = !0,
                this.setHand(i, n, !1, !0)
            }
        }, {
            key: "_handleDocumentClickEnd",
            value: function(t) {
                var e = this;
                t.preventDefault(),
                document.removeEventListener("mouseup", this._handleDocumentClickEndBound),
                document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                var i = f._Pos(t)
                  , n = i.x - this.x0
                  , s = i.y - this.y0;
                this.moved && n === this.dx && s === this.dy && this.setHand(n, s),
                "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (h(this.minutesView).addClass("timepicker-dial-out"),
                setTimeout(function() {
                    e.done()
                }, this.options.duration / 2)),
                "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes),
                document.removeEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
            }
        }, {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.$modalEl = h(f._template),
                this.modalEl = this.$modalEl[0],
                this.modalEl.id = "modal-" + this.id;
                var t = document.querySelector(this.options.container);
                this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el)
            }
        }, {
            key: "_setupModal",
            value: function() {
                var t = this;
                this.modal = M.Modal.init(this.modalEl, {
                    onOpenStart: this.options.onOpenStart,
                    onOpenEnd: this.options.onOpenEnd,
                    onCloseStart: this.options.onCloseStart,
                    onCloseEnd: function() {
                        "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t),
                        t.isOpen = !1
                    }
                })
            }
        }, {
            key: "_setupVariables",
            value: function() {
                this.currentView = "hours",
                this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
                this._canvas = this.modalEl.querySelector(".timepicker-canvas"),
                this.plate = this.modalEl.querySelector(".timepicker-plate"),
                this.hoursView = this.modalEl.querySelector(".timepicker-hours"),
                this.minutesView = this.modalEl.querySelector(".timepicker-minutes"),
                this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"),
                this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"),
                this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"),
                this.footer = this.modalEl.querySelector(".timepicker-footer"),
                this.amOrPm = "PM"
            }
        }, {
            key: "_pickerSetup",
            value: function() {
                var t = h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                this.options.showClearBtn && t.css({
                    visibility: ""
                });
                var e = h('<div class="confirmation-btns"></div>');
                h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(e).on("click", this.close.bind(this)),
                h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(e).on("click", this.done.bind(this)),
                e.appendTo(this.footer)
            }
        }, {
            key: "_clockSetup",
            value: function() {
                this.options.twelveHour && (this.$amBtn = h('<div class="am-btn">AM</div>'),
                this.$pmBtn = h('<div class="pm-btn">PM</div>'),
                this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),
                this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),
                this._buildHoursView(),
                this._buildMinutesView(),
                this._buildSVGClock()
            }
        }, {
            key: "_buildSVGClock",
            value: function() {
                var t = this.options.dialRadius
                  , e = this.options.tickRadius
                  , i = 2 * t
                  , n = f._createSVGEl("svg");
                n.setAttribute("class", "timepicker-svg"),
                n.setAttribute("width", i),
                n.setAttribute("height", i);
                var s = f._createSVGEl("g");
                s.setAttribute("transform", "translate(" + t + "," + t + ")");
                var o = f._createSVGEl("circle");
                o.setAttribute("class", "timepicker-canvas-bearing"),
                o.setAttribute("cx", 0),
                o.setAttribute("cy", 0),
                o.setAttribute("r", 4);
                var a = f._createSVGEl("line");
                a.setAttribute("x1", 0),
                a.setAttribute("y1", 0);
                var r = f._createSVGEl("circle");
                r.setAttribute("class", "timepicker-canvas-bg"),
                r.setAttribute("r", e),
                s.appendChild(a),
                s.appendChild(r),
                s.appendChild(o),
                n.appendChild(s),
                this._canvas.appendChild(n),
                this.hand = a,
                this.bg = r,
                this.bearing = o,
                this.g = s
            }
        }, {
            key: "_buildHoursView",
            value: function() {
                var t = h('<div class="timepicker-tick"></div>');
                if (this.options.twelveHour)
                    for (var e = 1; e < 13; e += 1) {
                        var i = t.clone()
                          , n = e / 6 * Math.PI
                          , s = this.options.outerRadius;
                        i.css({
                            left: this.options.dialRadius + Math.sin(n) * s - this.options.tickRadius + "px",
                            top: this.options.dialRadius - Math.cos(n) * s - this.options.tickRadius + "px"
                        }),
                        i.html(0 === e ? "00" : e),
                        this.hoursView.appendChild(i[0])
                    }
                else
                    for (var o = 0; o < 24; o += 1) {
                        var a = t.clone()
                          , r = o / 6 * Math.PI
                          , l = 0 < o && o < 13 ? this.options.innerRadius : this.options.outerRadius;
                        a.css({
                            left: this.options.dialRadius + Math.sin(r) * l - this.options.tickRadius + "px",
                            top: this.options.dialRadius - Math.cos(r) * l - this.options.tickRadius + "px"
                        }),
                        a.html(0 === o ? "00" : o),
                        this.hoursView.appendChild(a[0])
                    }
            }
        }, {
            key: "_buildMinutesView",
            value: function() {
                for (var t = h('<div class="timepicker-tick"></div>'), e = 0; e < 60; e += 5) {
                    var i = t.clone()
                      , n = e / 30 * Math.PI;
                    i.css({
                        left: this.options.dialRadius + Math.sin(n) * this.options.outerRadius - this.options.tickRadius + "px",
                        top: this.options.dialRadius - Math.cos(n) * this.options.outerRadius - this.options.tickRadius + "px"
                    }),
                    i.html(f._addLeadingZero(e)),
                    this.minutesView.appendChild(i[0])
                }
            }
        }, {
            key: "_handleAmPmClick",
            value: function(t) {
                var e = h(t.target);
                this.amOrPm = e.hasClass("am-btn") ? "AM" : "PM",
                this._updateAmPmView()
            }
        }, {
            key: "_updateAmPmView",
            value: function() {
                this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm),
                this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm))
            }
        }, {
            key: "_updateTimeFromInput",
            value: function() {
                var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                if (this.options.twelveHour && void 0 !== t[1] && (0 < t[1].toUpperCase().indexOf("AM") ? this.amOrPm = "AM" : this.amOrPm = "PM",
                t[1] = t[1].replace("AM", "").replace("PM", "")),
                "now" === t[0]) {
                    var e = new Date(+new Date + this.options.fromNow);
                    t = [e.getHours(), e.getMinutes()],
                    this.options.twelveHour && (this.amOrPm = 12 <= t[0] && t[0] < 24 ? "PM" : "AM")
                }
                this.hours = +t[0] || 0,
                this.minutes = +t[1] || 0,
                this.spanHours.innerHTML = this.hours,
                this.spanMinutes.innerHTML = f._addLeadingZero(this.minutes),
                this._updateAmPmView()
            }
        }, {
            key: "showView",
            value: function(t, e) {
                "minutes" === t && h(this.hoursView).css("visibility");
                var i = "hours" === t
                  , n = i ? this.hoursView : this.minutesView
                  , s = i ? this.minutesView : this.hoursView;
                this.currentView = t,
                h(this.spanHours).toggleClass("text-primary", i),
                h(this.spanMinutes).toggleClass("text-primary", !i),
                s.classList.add("timepicker-dial-out"),
                h(n).css("visibility", "visible").removeClass("timepicker-dial-out"),
                this.resetClock(e),
                clearTimeout(this.toggleViewTimer),
                this.toggleViewTimer = setTimeout(function() {
                    h(s).css("visibility", "hidden")
                }, this.options.duration)
            }
        }, {
            key: "resetClock",
            value: function(t) {
                var e = this.currentView
                  , i = this[e]
                  , n = "hours" === e
                  , s = i * (Math.PI / (n ? 6 : 30))
                  , o = n && 0 < i && i < 13 ? this.options.innerRadius : this.options.outerRadius
                  , a = Math.sin(s) * o
                  , r = -Math.cos(s) * o
                  , l = this;
                t ? (h(this.canvas).addClass("timepicker-canvas-out"),
                setTimeout(function() {
                    h(l.canvas).removeClass("timepicker-canvas-out"),
                    l.setHand(a, r)
                }, t)) : this.setHand(a, r)
            }
        }, {
            key: "setHand",
            value: function(t, e, i) {
                var n = this
                  , s = Math.atan2(t, -e)
                  , o = "hours" === this.currentView
                  , a = Math.PI / (o || i ? 6 : 30)
                  , r = Math.sqrt(t * t + e * e)
                  , l = o && r < (this.options.outerRadius + this.options.innerRadius) / 2
                  , h = l ? this.options.innerRadius : this.options.outerRadius;
                this.options.twelveHour && (h = this.options.outerRadius),
                s < 0 && (s = 2 * Math.PI + s);
                var d = Math.round(s / a);
                s = d * a,
                this.options.twelveHour ? o ? 0 === d && (d = 12) : (i && (d *= 5),
                60 === d && (d = 0)) : o ? (12 === d && (d = 0),
                d = l ? 0 === d ? 12 : d : 0 === d ? 0 : d + 12) : (i && (d *= 5),
                60 === d && (d = 0)),
                this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10),
                this.vibrateTimer = setTimeout(function() {
                    n.vibrateTimer = null
                }, 100))),
                this[this.currentView] = d,
                o ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = f._addLeadingZero(d);
                var u = Math.sin(s) * (h - this.options.tickRadius)
                  , c = -Math.cos(s) * (h - this.options.tickRadius)
                  , p = Math.sin(s) * h
                  , v = -Math.cos(s) * h;
                this.hand.setAttribute("x2", u),
                this.hand.setAttribute("y2", c),
                this.bg.setAttribute("cx", p),
                this.bg.setAttribute("cy", v)
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0,
                this._updateTimeFromInput(),
                this.showView("hours"),
                this.modal.open())
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1,
                this.modal.close())
            }
        }, {
            key: "done",
            value: function(t, e) {
                var i = this.el.value
                  , n = e ? "" : f._addLeadingZero(this.hours) + ":" + f._addLeadingZero(this.minutes);
                this.time = n,
                !e && this.options.twelveHour && (n = n + " " + this.amOrPm),
                (this.el.value = n) !== i && this.$el.trigger("change"),
                this.close(),
                this.el.focus()
            }
        }, {
            key: "clear",
            value: function() {
                this.done(null, !0)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(f.__proto__ || Object.getPrototypeOf(f), "init", this).call(this, this, t, e)
            }
        }, {
            key: "_addLeadingZero",
            value: function(t) {
                return (t < 10 ? "0" : "") + t
            }
        }, {
            key: "_createSVGEl",
            value: function(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t)
            }
        }, {
            key: "_Pos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? {
                    x: t.targetTouches[0].clientX,
                    y: t.targetTouches[0].clientY
                } : {
                    x: t.clientX,
                    y: t.clientY
                }
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Timepicker
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        f
    }();
    t._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""),
    M.Timepicker = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "timepicker", "M_Timepicker")
}(cash),
function(s) {
    "use strict";
    var e = {}
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_CharacterCounter = i).options = s.extend({}, n.defaults, e),
            i.isInvalid = !1,
            i.isValidLength = !1,
            i._setupCounter(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.CharacterCounter = void 0,
                this._removeCounter()
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleUpdateCounterBound = this.updateCounter.bind(this),
                this.el.addEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.addEventListener("input", this._handleUpdateCounterBound, !0)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.removeEventListener("input", this._handleUpdateCounterBound, !0)
            }
        }, {
            key: "_setupCounter",
            value: function() {
                this.counterEl = document.createElement("span"),
                s(this.counterEl).addClass("character-counter").css({
                    float: "right",
                    "font-size": "12px",
                    height: 1
                }),
                this.$el.parent().append(this.counterEl)
            }
        }, {
            key: "_removeCounter",
            value: function() {
                s(this.counterEl).remove()
            }
        }, {
            key: "updateCounter",
            value: function() {
                var t = +this.$el.attr("data-length")
                  , e = this.el.value.length;
                this.isValidLength = e <= t;
                var i = e;
                t && (i += "/" + t,
                this._validateInput()),
                s(this.counterEl).html(i)
            }
        }, {
            key: "_validateInput",
            value: function() {
                this.isValidLength && this.isInvalid ? (this.isInvalid = !1,
                this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0,
                this.$el.removeClass("valid"),
                this.$el.addClass("invalid"))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_CharacterCounter
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.CharacterCounter = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "characterCounter", "M_CharacterCounter")
}(cash),
function(b) {
    "use strict";
    var e = {
        duration: 200,
        dist: -100,
        shift: 0,
        padding: 0,
        numVisible: 5,
        fullWidth: !1,
        indicators: !1,
        noWrap: !1,
        onCycleTo: null
    }
      , t = function(t) {
        function i(t, e) {
            _classCallCheck(this, i);
            var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
            return (n.el.M_carouselM = n).options = b.extend({}, i.defaults, e),
            n.hasMultipleSlides = 1 < n.$el.find(".carouselM-item").length,
            n.showIndicators = n.options.indicators && n.hasMultipleSlides,
            n.noWrap = n.options.noWrap || !n.hasMultipleSlides,
            n.pressed = !1,
            n.dragged = !1,
            n.offset = n.target = 0,
            n.images = [],
            n.itemWidth = n.$el.find(".carouselM-item").first().innerWidth(),
            n.itemHeight = n.$el.find(".carouselM-item").first().innerHeight(),
            n.dim = 2 * n.itemWidth + n.options.padding || 1,
            n._autoScrollBound = n._autoScroll.bind(n),
            n._trackBound = n._track.bind(n),
            n.options.fullWidth && (n.options.dist = 0,
            n._setcarouselMHeight(),
            n.showIndicators && n.$el.find(".carouselM-fixed-item").addClass("with-indicators")),
            n.$indicators = b('<ul class="indicators"></ul>'),
            n.$el.find(".carouselM-item").each(function(t, e) {
                if (n.images.push(t),
                n.showIndicators) {
                    var i = b('<li class="indicator-item"></li>');
                    0 === e && i[0].classList.add("active"),
                    n.$indicators.append(i)
                }
            }),
            n.showIndicators && n.$el.append(n.$indicators),
            n.count = n.images.length,
            n.options.numVisible = Math.min(n.count, n.options.numVisible),
            n.xform = "transform",
            ["webkit", "Moz", "O", "ms"].every(function(t) {
                var e = t + "Transform";
                return void 0 === document.body.style[e] || (n.xform = e,
                !1)
            }),
            n._setupEventHandlers(),
            n._scroll(n.offset),
            n
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_carouselM = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var i = this;
                this._handlecarouselMTapBound = this._handlecarouselMTap.bind(this),
                this._handlecarouselMDragBound = this._handlecarouselMDrag.bind(this),
                this._handlecarouselMReleaseBound = this._handlecarouselMRelease.bind(this),
                this._handlecarouselMClickBound = this._handlecarouselMClick.bind(this),
                void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handlecarouselMTapBound),
                this.el.addEventListener("touchmove", this._handlecarouselMDragBound),
                this.el.addEventListener("touchend", this._handlecarouselMReleaseBound)),
                this.el.addEventListener("mousedown", this._handlecarouselMTapBound),
                this.el.addEventListener("mousemove", this._handlecarouselMDragBound),
                this.el.addEventListener("mouseup", this._handlecarouselMReleaseBound),
                this.el.addEventListener("mouseleave", this._handlecarouselMReleaseBound),
                this.el.addEventListener("click", this._handlecarouselMClickBound),
                this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                this.$indicators.find(".indicator-item").each(function(t, e) {
                    t.addEventListener("click", i._handleIndicatorClickBound)
                }));
                var t = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = t.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var i = this;
                void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handlecarouselMTapBound),
                this.el.removeEventListener("touchmove", this._handlecarouselMDragBound),
                this.el.removeEventListener("touchend", this._handlecarouselMReleaseBound)),
                this.el.removeEventListener("mousedown", this._handlecarouselMTapBound),
                this.el.removeEventListener("mousemove", this._handlecarouselMDragBound),
                this.el.removeEventListener("mouseup", this._handlecarouselMReleaseBound),
                this.el.removeEventListener("mouseleave", this._handlecarouselMReleaseBound),
                this.el.removeEventListener("click", this._handlecarouselMClickBound),
                this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(t, e) {
                    t.removeEventListener("click", i._handleIndicatorClickBound)
                }),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_handlecarouselMTap",
            value: function(t) {
                "mousedown" === t.type && b(t.target).is("img") && t.preventDefault(),
                this.pressed = !0,
                this.dragged = !1,
                this.verticalDragged = !1,
                this.reference = this._xpos(t),
                this.referenceY = this._ypos(t),
                this.velocity = this.amplitude = 0,
                this.frame = this.offset,
                this.timestamp = Date.now(),
                clearInterval(this.ticker),
                this.ticker = setInterval(this._trackBound, 100)
            }
        }, {
            key: "_handlecarouselMDrag",
            value: function(t) {
                var e = void 0
                  , i = void 0
                  , n = void 0;
                if (this.pressed)
                    if (e = this._xpos(t),
                    i = this._ypos(t),
                    n = this.reference - e,
                    Math.abs(this.referenceY - i) < 30 && !this.verticalDragged)
                        (2 < n || n < -2) && (this.dragged = !0,
                        this.reference = e,
                        this._scroll(this.offset + n));
                    else {
                        if (this.dragged)
                            return t.preventDefault(),
                            t.stopPropagation(),
                            !1;
                        this.verticalDragged = !0
                    }
                if (this.dragged)
                    return t.preventDefault(),
                    t.stopPropagation(),
                    !1
            }
        }, {
            key: "_handlecarouselMRelease",
            value: function(t) {
                if (this.pressed)
                    return this.pressed = !1,
                    clearInterval(this.ticker),
                    this.target = this.offset,
                    (10 < this.velocity || this.velocity < -10) && (this.amplitude = .9 * this.velocity,
                    this.target = this.offset + this.amplitude),
                    this.target = Math.round(this.target / this.dim) * this.dim,
                    this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)),
                    this.amplitude = this.target - this.offset,
                    this.timestamp = Date.now(),
                    requestAnimationFrame(this._autoScrollBound),
                    this.dragged && (t.preventDefault(),
                    t.stopPropagation()),
                    !1
            }
        }, {
            key: "_handlecarouselMClick",
            value: function(t) {
                if (this.dragged)
                    return t.preventDefault(),
                    t.stopPropagation(),
                    !1;
                if (!this.options.fullWidth) {
                    var e = b(t.target).closest(".carouselM-item").index();
                    0 !== this._wrap(this.center) - e && (t.preventDefault(),
                    t.stopPropagation()),
                    this._cycleTo(e)
                }
            }
        }, {
            key: "_handleIndicatorClick",
            value: function(t) {
                t.stopPropagation();
                var e = b(t.target).closest(".indicator-item");
                e.length && this._cycleTo(e.index())
            }
        }, {
            key: "_handleResize",
            value: function(t) {
                this.options.fullWidth ? (this.itemWidth = this.$el.find(".carouselM-item").first().innerWidth(),
                this.imageHeight = this.$el.find(".carouselM-item.active").height(),
                this.dim = 2 * this.itemWidth + this.options.padding,
                this.offset = 2 * this.center * this.itemWidth,
                this.target = this.offset,
                this._setcarouselMHeight(!0)) : this._scroll()
            }
        }, {
            key: "_setcarouselMHeight",
            value: function(t) {
                var i = this
                  , e = this.$el.find(".carouselM-item.active").length ? this.$el.find(".carouselM-item.active").first() : this.$el.find(".carouselM-item").first()
                  , n = e.find("img").first();
                if (n.length)
                    if (n[0].complete) {
                        var s = n.height();
                        if (0 < s)
                            this.$el.css("height", s + "px");
                        else {
                            var o = n[0].naturalWidth
                              , a = n[0].naturalHeight
                              , r = this.$el.width() / o * a;
                            this.$el.css("height", r + "px")
                        }
                    } else
                        n.one("load", function(t, e) {
                            i.$el.css("height", t.offsetHeight + "px")
                        });
                else if (!t) {
                    var l = e.height();
                    this.$el.css("height", l + "px")
                }
            }
        }, {
            key: "_xpos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX
            }
        }, {
            key: "_ypos",
            value: function(t) {
                return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientY : t.clientY
            }
        }, {
            key: "_wrap",
            value: function(t) {
                return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t
            }
        }, {
            key: "_track",
            value: function() {
                var t, e, i, n;
                e = (t = Date.now()) - this.timestamp,
                this.timestamp = t,
                i = this.offset - this.frame,
                this.frame = this.offset,
                n = 1e3 * i / (1 + e),
                this.velocity = .8 * n + .2 * this.velocity
            }
        }, {
            key: "_autoScroll",
            value: function() {
                var t = void 0
                  , e = void 0;
                this.amplitude && (t = Date.now() - this.timestamp,
                2 < (e = this.amplitude * Math.exp(-t / this.options.duration)) || e < -2 ? (this._scroll(this.target - e),
                requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
            }
        }, {
            key: "_scroll",
            value: function(t) {
                var e = this;
                this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"),
                null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout),
                this.scrollingTimeout = window.setTimeout(function() {
                    e.$el.removeClass("scrolling")
                }, this.options.duration);
                var i, n, s, o, a = void 0, r = void 0, l = void 0, h = void 0, d = void 0, u = void 0, c = this.center, p = 1 / this.options.numVisible;
                if (this.offset = "number" == typeof t ? t : this.offset,
                this.center = Math.floor((this.offset + this.dim / 2) / this.dim),
                o = -(s = (n = this.offset - this.center * this.dim) < 0 ? 1 : -1) * n * 2 / this.dim,
                i = this.count >> 1,
                this.options.fullWidth ? (l = "translateX(0)",
                u = 1) : (l = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ",
                l += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)",
                u = 1 - p * o),
                this.showIndicators) {
                    var v = this.center % this.count
                      , f = this.$indicators.find(".indicator-item.active");
                    f.index() !== v && (f.removeClass("active"),
                    this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))
                }
                if (!this.noWrap || 0 <= this.center && this.center < this.count) {
                    r = this.images[this._wrap(this.center)],
                    b(r).hasClass("active") || (this.$el.find(".carouselM-item").removeClass("active"),
                    r.classList.add("active"));
                    var m = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o * a + "px) translateZ(" + this.options.dist * o + "px)";
                    this._updateItemStyle(r, u, 0, m)
                }
                for (a = 1; a <= i; ++a) {
                    if (this.options.fullWidth ? (h = this.options.dist,
                    d = a === i && n < 0 ? 1 - o : 1) : (h = this.options.dist * (2 * a + o * s),
                    d = 1 - p * (2 * a + o * s)),
                    !this.noWrap || this.center + a < this.count) {
                        r = this.images[this._wrap(this.center + a)];
                        var g = l + " translateX(" + (this.options.shift + (this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
                        this._updateItemStyle(r, d, -a, g)
                    }
                    if (this.options.fullWidth ? (h = this.options.dist,
                    d = a === i && 0 < n ? 1 - o : 1) : (h = this.options.dist * (2 * a - o * s),
                    d = 1 - p * (2 * a - o * s)),
                    !this.noWrap || 0 <= this.center - a) {
                        r = this.images[this._wrap(this.center - a)];
                        var _ = l + " translateX(" + (-this.options.shift + (-this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
                        this._updateItemStyle(r, d, -a, _)
                    }
                }
                if (!this.noWrap || 0 <= this.center && this.center < this.count) {
                    r = this.images[this._wrap(this.center)];
                    var y = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o + "px) translateZ(" + this.options.dist * o + "px)";
                    this._updateItemStyle(r, u, 0, y)
                }
                var k = this.$el.find(".carouselM-item").eq(this._wrap(this.center));
                c !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, k[0], this.dragged),
                "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, k[0], this.dragged),
                this.oneTimeCallback = null)
            }
        }, {
            key: "_updateItemStyle",
            value: function(t, e, i, n) {
                t.style[this.xform] = n,
                t.style.zIndex = i,
                t.style.opacity = e,
                t.style.visibility = "visible"
            }
        }, {
            key: "_cycleTo",
            value: function(t, e) {
                var i = this.center % this.count - t;
                this.noWrap || (i < 0 ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : 0 < i && Math.abs(i - this.count) < i && (i -= this.count)),
                this.target = this.dim * Math.round(this.offset / this.dim),
                i < 0 ? this.target += this.dim * Math.abs(i) : 0 < i && (this.target -= this.dim * i),
                "function" == typeof e && (this.oneTimeCallback = e),
                this.offset !== this.target && (this.amplitude = this.target - this.offset,
                this.timestamp = Date.now(),
                requestAnimationFrame(this._autoScrollBound))
            }
        }, {
            key: "next",
            value: function(t) {
                (void 0 === t || isNaN(t)) && (t = 1);
                var e = this.center + t;
                if (e >= this.count || e < 0) {
                    if (this.noWrap)
                        return;
                    e = this._wrap(e)
                }
                this._cycleTo(e)
            }
        }, {
            key: "prev",
            value: function(t) {
                (void 0 === t || isNaN(t)) && (t = 1);
                var e = this.center - t;
                if (e >= this.count || e < 0) {
                    if (this.noWrap)
                        return;
                    e = this._wrap(e)
                }
                this._cycleTo(e)
            }
        }, {
            key: "set",
            value: function(t, e) {
                if ((void 0 === t || isNaN(t)) && (t = 0),
                t > this.count || t < 0) {
                    if (this.noWrap)
                        return;
                    t = this._wrap(t)
                }
                this._cycleTo(t, e)
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_carouselM
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        i
    }();
    M.carouselM = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "carouselM", "M_carouselM")
}(cash),
function(S) {
    "use strict";
    var e = {
        onOpen: void 0,
        onClose: void 0
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_TapTarget = i).options = S.extend({}, n.defaults, e),
            i.isOpen = !1,
            i.$origin = S("#" + i.$el.attr("data-target")),
            i._setup(),
            i._calculatePositioning(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.TapTarget = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleDocumentClickBound = this._handleDocumentClick.bind(this),
                this._handleTargetClickBound = this._handleTargetClick.bind(this),
                this._handleOriginClickBound = this._handleOriginClick.bind(this),
                this.el.addEventListener("click", this._handleTargetClickBound),
                this.originEl.addEventListener("click", this._handleOriginClickBound);
                var t = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = t.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleTargetClickBound),
                this.originEl.removeEventListener("click", this._handleOriginClickBound),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        }, {
            key: "_handleTargetClick",
            value: function(t) {
                this.open()
            }
        }, {
            key: "_handleOriginClick",
            value: function(t) {
                this.close()
            }
        }, {
            key: "_handleResize",
            value: function(t) {
                this._calculatePositioning()
            }
        }, {
            key: "_handleDocumentClick",
            value: function(t) {
                S(t.target).closest(".tap-target-wrapper").length || (this.close(),
                t.preventDefault(),
                t.stopPropagation())
            }
        }, {
            key: "_setup",
            value: function() {
                this.wrapper = this.$el.parent()[0],
                this.waveEl = S(this.wrapper).find(".tap-target-wave")[0],
                this.originEl = S(this.wrapper).find(".tap-target-origin")[0],
                this.contentEl = this.$el.find(".tap-target-content")[0],
                S(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"),
                this.wrapper.classList.add("tap-target-wrapper"),
                this.$el.before(S(this.wrapper)),
                this.wrapper.append(this.el)),
                this.contentEl || (this.contentEl = document.createElement("div"),
                this.contentEl.classList.add("tap-target-content"),
                this.$el.append(this.contentEl)),
                this.waveEl || (this.waveEl = document.createElement("div"),
                this.waveEl.classList.add("tap-target-wave"),
                this.originEl || (this.originEl = this.$origin.clone(!0, !0),
                this.originEl.addClass("tap-target-origin"),
                this.originEl.removeAttr("id"),
                this.originEl.removeAttr("style"),
                this.originEl = this.originEl[0],
                this.waveEl.append(this.originEl)),
                this.wrapper.append(this.waveEl))
            }
        }, {
            key: "_calculatePositioning",
            value: function() {
                var t = "fixed" === this.$origin.css("position");
                if (!t)
                    for (var e = this.$origin.parents(), i = 0; i < e.length && !(t = "fixed" == S(e[i]).css("position")); i++)
                        ;
                var n = this.$origin.outerWidth()
                  , s = this.$origin.outerHeight()
                  , o = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top
                  , a = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left
                  , r = window.innerWidth
                  , l = window.innerHeight
                  , h = r / 2
                  , d = l / 2
                  , u = a <= h
                  , c = h < a
                  , p = o <= d
                  , v = d < o
                  , f = .25 * r <= a && a <= .75 * r
                  , m = this.$el.outerWidth()
                  , g = this.$el.outerHeight()
                  , _ = o + s / 2 - g / 2
                  , y = a + n / 2 - m / 2
                  , k = t ? "fixed" : "absolute"
                  , b = f ? m : m / 2 + n
                  , w = g / 2
                  , C = p ? g / 2 : 0
                  , E = u && !f ? m / 2 - n : 0
                  , O = n
                  , x = v ? "bottom" : "top"
                  , L = 2 * n
                  , T = L
                  , $ = g / 2 - T / 2
                  , B = m / 2 - L / 2
                  , D = {};
                D.top = p ? _ + "px" : "",
                D.right = c ? r - y - m + "px" : "",
                D.bottom = v ? l - _ - g + "px" : "",
                D.left = u ? y + "px" : "",
                D.position = k,
                S(this.wrapper).css(D),
                S(this.contentEl).css({
                    width: b + "px",
                    height: w + "px",
                    top: C + "px",
                    right: "0px",
                    bottom: "0px",
                    left: E + "px",
                    padding: O + "px",
                    verticalAlign: x
                }),
                S(this.waveEl).css({
                    top: $ + "px",
                    left: B + "px",
                    width: L + "px",
                    height: T + "px"
                })
            }
        }, {
            key: "open",
            value: function() {
                this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]),
                this.isOpen = !0,
                this.wrapper.classList.add("open"),
                document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                document.body.addEventListener("touchend", this._handleDocumentClickBound))
            }
        }, {
            key: "close",
            value: function() {
                this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]),
                this.isOpen = !1,
                this.wrapper.classList.remove("open"),
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                document.body.removeEventListener("touchend", this._handleDocumentClickBound))
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_TapTarget
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.TapTarget = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "tapTarget", "M_TapTarget")
}(cash),
function(d) {
    "use strict";
    var e = {
        classes: "",
        dropdownOptions: {}
    }
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return i.$el.hasClass("browser-default") ? _possibleConstructorReturn(i) : ((i.el.M_FormSelect = i).options = d.extend({}, n.defaults, e),
            i.isMultiple = i.$el.prop("multiple"),
            i.el.tabIndex = -1,
            i._keysSelected = {},
            i._valueDict = {},
            i._setupDropdown(),
            i._setupEventHandlers(),
            i)
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_FormSelect = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleSelectChangeBound = this._handleSelectChange.bind(this),
                this._handleOptionClickBound = this._handleOptionClick.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                    t.addEventListener("click", e._handleOptionClickBound)
                }),
                this.el.addEventListener("change", this._handleSelectChangeBound),
                this.input.addEventListener("click", this._handleInputClickBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                    t.removeEventListener("click", e._handleOptionClickBound)
                }),
                this.el.removeEventListener("change", this._handleSelectChangeBound),
                this.input.removeEventListener("click", this._handleInputClickBound)
            }
        }, {
            key: "_handleSelectChange",
            value: function(t) {
                this._setValueToInput()
            }
        }, {
            key: "_handleOptionClick",
            value: function(t) {
                t.preventDefault();
                var e = d(t.target).closest("li")[0]
                  , i = e.id;
                if (!d(e).hasClass("disabled") && !d(e).hasClass("optgroup") && i.length) {
                    var n = !0;
                    if (this.isMultiple) {
                        var s = d(this.dropdownOptions).find("li.disabled.selected");
                        s.length && (s.removeClass("selected"),
                        s.find('input[type="checkbox"]').prop("checked", !1),
                        this._toggleEntryFromArray(s[0].id)),
                        n = this._toggleEntryFromArray(i)
                    } else
                        d(this.dropdownOptions).find("li").removeClass("selected"),
                        d(e).toggleClass("selected", n);
                    d(this._valueDict[i].el).prop("selected") !== n && (d(this._valueDict[i].el).prop("selected", n),
                    this.$el.trigger("change"))
                }
                t.stopPropagation()
            }
        }, {
            key: "_handleInputClick",
            value: function() {
                this.dropdown && this.dropdown.isOpen && (this._setValueToInput(),
                this._setSelectedStates())
            }
        }, {
            key: "_setupDropdown",
            value: function() {
                var n = this;
                this.wrapper = document.createElement("div"),
                d(this.wrapper).addClass("select-wrapper " + this.options.classes),
                this.$el.before(d(this.wrapper)),
                this.wrapper.appendChild(this.el),
                this.el.disabled && this.wrapper.classList.add("disabled"),
                this.$selectOptions = this.$el.children("option, optgroup"),
                this.dropdownOptions = document.createElement("ul"),
                this.dropdownOptions.id = "select-options-" + M.guid(),
                d(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")),
                this.$selectOptions.length && this.$selectOptions.each(function(t) {
                    if (d(t).is("option")) {
                        var e = void 0;
                        e = n.isMultiple ? n._appendOptionWithIcon(n.$el, t, "multiple") : n._appendOptionWithIcon(n.$el, t),
                        n._addOptionToValueDict(t, e)
                    } else if (d(t).is("optgroup")) {
                        var i = d(t).children("option");
                        d(n.dropdownOptions).append(d('<li class="optgroup"><span>' + t.getAttribute("label") + "</span></li>")[0]),
                        i.each(function(t) {
                            var e = n._appendOptionWithIcon(n.$el, t, "optgroup-option");
                            n._addOptionToValueDict(t, e)
                        })
                    }
                }),
                this.$el.after(this.dropdownOptions),
                this.input = document.createElement("input"),
                d(this.input).addClass("select-dropdown dropdown-trigger"),
                this.input.setAttribute("type", "text"),
                this.input.setAttribute("readonly", "true"),
                this.input.setAttribute("data-target", this.dropdownOptions.id),
                this.el.disabled && d(this.input).prop("disabled", "true"),
                this.$el.before(this.input),
                this._setValueToInput();
                var t = d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                if (this.$el.before(t[0]),
                !this.el.disabled) {
                    var e = d.extend({}, this.options.dropdownOptions);
                    e.onOpenEnd = function(t) {
                        var e = d(n.dropdownOptions).find(".selected").first();
                        if (n.dropdown.isScrollable && e.length) {
                            var i = e[0].getBoundingClientRect().top - n.dropdownOptions.getBoundingClientRect().top;
                            i -= n.dropdownOptions.clientHeight / 2,
                            n.dropdownOptions.scrollTop = i
                        }
                    }
                    ,
                    this.isMultiple && (e.closeOnClick = !1),
                    this.dropdown = M.Dropdown.init(this.input, e)
                }
                this._setSelectedStates()
            }
        }, {
            key: "_addOptionToValueDict",
            value: function(t, e) {
                var i = Object.keys(this._valueDict).length
                  , n = this.dropdownOptions.id + i
                  , s = {};
                e.id = n,
                s.el = t,
                s.optionEl = e,
                this._valueDict[n] = s
            }
        }, {
            key: "_removeDropdown",
            value: function() {
                d(this.wrapper).find(".caret").remove(),
                d(this.input).remove(),
                d(this.dropdownOptions).remove(),
                d(this.wrapper).before(this.$el),
                d(this.wrapper).remove()
            }
        }, {
            key: "_appendOptionWithIcon",
            value: function(t, e, i) {
                var n = e.disabled ? "disabled " : ""
                  , s = "optgroup-option" === i ? "optgroup-option " : ""
                  , o = this.isMultiple ? '<label><input type="checkbox"' + n + '"/><span>' + e.innerHTML + "</span></label>" : e.innerHTML
                  , a = d("<li></li>")
                  , r = d("<span></span>");
                r.html(o),
                a.addClass(n + " " + s),
                a.append(r);
                var l = e.getAttribute("data-icon");
                if (l) {
                    var h = d('<img alt="" src="' + l + '">');
                    a.prepend(h)
                }
                return d(this.dropdownOptions).append(a[0]),
                a[0]
            }
        }, {
            key: "_toggleEntryFromArray",
            value: function(t) {
                var e = !this._keysSelected.hasOwnProperty(t)
                  , i = d(this._valueDict[t].optionEl);
                return e ? this._keysSelected[t] = !0 : delete this._keysSelected[t],
                i.toggleClass("selected", e),
                i.find('input[type="checkbox"]').prop("checked", e),
                i.prop("selected", e),
                e
            }
        }, {
            key: "_setValueToInput",
            value: function() {
                var i = [];
                if (this.$el.find("option").each(function(t) {
                    if (d(t).prop("selected")) {
                        var e = d(t).text();
                        i.push(e)
                    }
                }),
                !i.length) {
                    var t = this.$el.find("option:disabled").eq(0);
                    t.length && "" === t[0].value && i.push(t.text())
                }
                this.input.value = i.join(", ")
            }
        }, {
            key: "_setSelectedStates",
            value: function() {
                for (var t in this._keysSelected = {},
                this._valueDict) {
                    var e = this._valueDict[t]
                      , i = d(e.el).prop("selected");
                    d(e.optionEl).find('input[type="checkbox"]').prop("checked", i),
                    i ? (this._activateOption(d(this.dropdownOptions), d(e.optionEl)),
                    this._keysSelected[t] = !0) : d(e.optionEl).removeClass("selected")
                }
            }
        }, {
            key: "_activateOption",
            value: function(t, e) {
                e && (this.isMultiple || t.find("li.selected").removeClass("selected"),
                d(e).addClass("selected"))
            }
        }, {
            key: "getSelectedValues",
            value: function() {
                var t = [];
                for (var e in this._keysSelected)
                    t.push(this._valueDict[e].el.value);
                return t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_FormSelect
            }
        }, {
            key: "defaults",
            get: function() {
                return e
            }
        }]),
        n
    }();
    M.FormSelect = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "formSelect", "M_FormSelect")
}(cash),
function(s, e) {
    "use strict";
    var i = {}
      , t = function(t) {
        function n(t, e) {
            _classCallCheck(this, n);
            var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
            return (i.el.M_Range = i).options = s.extend({}, n.defaults, e),
            i._mousedown = !1,
            i._setupThumb(),
            i._setupEventHandlers(),
            i
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeThumb(),
                this.el.M_Range = void 0
            }
        }, {
            key: "_setupEventHandlers",
            value: function() {
                this._handleRangeChangeBound = this._handleRangeChange.bind(this),
                this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this),
                this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this),
                this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this),
                this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this),
                this.el.addEventListener("change", this._handleRangeChangeBound),
                this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        }, {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("change", this._handleRangeChangeBound),
                this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        }, {
            key: "_handleRangeChange",
            value: function() {
                s(this.value).html(this.$el.val()),
                s(this.thumb).hasClass("active") || this._showRangeBubble();
                var t = this._calcRangeOffset();
                s(this.thumb).addClass("active").css("left", t + "px")
            }
        }, {
            key: "_handleRangeMousedownTouchstart",
            value: function(t) {
                if (s(this.value).html(this.$el.val()),
                this._mousedown = !0,
                this.$el.addClass("active"),
                s(this.thumb).hasClass("active") || this._showRangeBubble(),
                "input" !== t.type) {
                    var e = this._calcRangeOffset();
                    s(this.thumb).addClass("active").css("left", e + "px")
                }
            }
        }, {
            key: "_handleRangeInputMousemoveTouchmove",
            value: function() {
                if (this._mousedown) {
                    s(this.thumb).hasClass("active") || this._showRangeBubble();
                    var t = this._calcRangeOffset();
                    s(this.thumb).addClass("active").css("left", t + "px"),
                    s(this.value).html(this.$el.val())
                }
            }
        }, {
            key: "_handleRangeMouseupTouchend",
            value: function() {
                this._mousedown = !1,
                this.$el.removeClass("active")
            }
        }, {
            key: "_handleRangeBlurMouseoutTouchleave",
            value: function() {
                if (!this._mousedown) {
                    var t = 7 + parseInt(this.$el.css("padding-left")) + "px";
                    s(this.thumb).hasClass("active") && (e.remove(this.thumb),
                    e({
                        targets: this.thumb,
                        height: 0,
                        width: 0,
                        top: 10,
                        easing: "easeOutQuad",
                        marginLeft: t,
                        duration: 100
                    })),
                    s(this.thumb).removeClass("active")
                }
            }
        }, {
            key: "_setupThumb",
            value: function() {
                this.thumb = document.createElement("span"),
                this.value = document.createElement("span"),
                s(this.thumb).addClass("thumb"),
                s(this.value).addClass("value"),
                s(this.thumb).append(this.value),
                this.$el.after(this.thumb)
            }
        }, {
            key: "_removeThumb",
            value: function() {
                s(this.thumb).remove()
            }
        }, {
            key: "_showRangeBubble",
            value: function() {
                var t = -7 + parseInt(s(this.thumb).parent().css("padding-left")) + "px";
                e.remove(this.thumb),
                e({
                    targets: this.thumb,
                    height: 30,
                    width: 30,
                    top: -30,
                    marginLeft: t,
                    duration: 300,
                    easing: "easeOutQuint"
                })
            }
        }, {
            key: "_calcRangeOffset",
            value: function() {
                var t = this.$el.width() - 15
                  , e = parseFloat(this.$el.attr("max")) || 100
                  , i = parseFloat(this.$el.attr("min")) || 0;
                return (parseFloat(this.$el.val()) - i) / (e - i) * t
            }
        }], [{
            key: "init",
            value: function(t, e) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
            }
        }, {
            key: "getInstance",
            value: function(t) {
                return (t.jquery ? t[0] : t).M_Range
            }
        }, {
            key: "defaults",
            get: function() {
                return i
            }
        }]),
        n
    }();
    M.Range = t,
    M.jQueryLoaded && M.initializeJqueryWrapper(t, "range", "M_Range"),
    t.init(s("input[type=range]"))
}(cash, M.anime);
