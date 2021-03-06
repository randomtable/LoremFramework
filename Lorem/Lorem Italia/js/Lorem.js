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
  , Dropdown = function(u) {
    var t = "dropdown"
      , f = "bs.dropdown"
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
      , h = "dropdown-menu-right"
      , m = "position-static"
      , g = '[data-toggle="dropdown"]'
      , c = ".dropdown form"
      , v = ".dropdown-menu"
      , y = ".navbar-nav"
      , _ = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
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
                                throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
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
      , c = "dropdown-item"
      , u = "active"
      , f = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
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
            this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS,
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
            n.hasClass(c) ? (n.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),
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
      , s = "dropdown-menu"
      , f = "active"
      , d = "disabled"
      , l = "fade"
      , a = "show"
      , p = ".dropdown"
      , h = ".nav, .list-group"
      , m = ".active"
      , g = "> li > .active"
      , n = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , v = ".dropdown-toggle"
      , y = "> .dropdown-menu .active"
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
    var e = "custom-select"
      , r = "bs.custom-select"
      , t = "." + r
      , n = p.fn[e]
      , o = {}
      , i = {
        LOAD_DATA_API: "load" + t + ".data-api"
    }
      , s = ".custom-select"
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
            this._customElement = p('\n        <ul id="select-options-' + e + '" class="dropdown-menu ' + (this._isMultiple ? "multiple-select-dropdown" : "") + '"></ul>\n      ');
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
              , d = p('\n        <input type="text" class="dropdown select-dropdown" aria-labelledby="label-' + e + '" data-toggle="dropdown" readonly="true" ' + (s.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + e + '" value="' + u + '" />\n      ');
            s.before(d),
            d.before(c).addClass(s.attr("class").replace("custom-select", "")),
            d.before(f),
            d.after(this._customElement),
            s.is(":disabled") || d.dropdown({
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
                    if (p("ul.select-dropdown").not(o._customElement[0]).is(":visible") && p("input.select-dropdown").trigger("close"),
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
              , n = p('\n        <span class="search-wrap">\n          <label class="sr-only" id="label-search-' + e + '">Cerca</label>\n          <input type="text" aria-labelledby="label-search-' + e + '" class="search select-dropdown-search" placeholder="' + t.attr("searchable") + '">\n        </span>\n      ');
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
            n.siblings("ul.dropdown-menu").find("li:not(.optgroup)").eq(t).toggleClass("active"),
            n.find("option").eq(t).prop("selected", r);
            for (var o = "", s = 0, a = e.length; s < a; s++) {
                var l = n.find("option").eq(e[s]).text();
                o += 0 === s ? l : ", " + l
            }
            return "" === o && (o = n.find("option:disabled").eq(0).text()),
            n.siblings(".dropdown").val(o),
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
$(".navbar .dropdown").on("show.bs.dropdown", function() {
    window.matchMedia("(max-width: 768px)").matches && $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown(300)
}),
$(".navbar .dropdown").on("hide.bs.dropdown", function() {
    window.matchMedia("(max-width: 768px)").matches && $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp(300)
}),
$(window).resize(function() {
    window.matchMedia("(min-width: 769px)").matches && $(".navbar .dropdown-menu.show").removeAttr("style")
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
