/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ 
! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            m(e)
        },
        each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                p()
            },
            ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
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
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function (e) {
                    return e = e.replace(Z, ee),
                        function (t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !r.pseudos.empty(e)
                },
                header: function (e) {
                    return Y.test(e.nodeName)
                },
                input: function (e) {
                    return G.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function () {
                    return [0]
                }),
                last: he(function (e, t) {
                    return [t - 1]
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
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
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                    return e === t
                }, s, !0), f = me(function (e) {
                    return O(t, e) > -1
                }, s, !0), p = [function (e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                } return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                } c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return k(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function (e) {
            return P(e, "nextSibling")
        },
        prev: function (e) {
            return P(e, "previousSibling")
        },
        nextAll: function (e) {
            return k(e, "nextSibling")
        },
        prevAll: function (e) {
            return k(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function (n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function (e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function () {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0)
        },
        hide: function () {
            return fe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
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
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), u
            },
            scrollboxSize: function () {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
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
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [ct],
            prefilter: function (e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.timers = [], w.fx.tick = function () {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function () {
            rt || (rt = !0, at())
        }, w.fx.stop = function () {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function (t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
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
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});

/*
 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
/*jslint browser:true */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        // If any child element receives focus within the slider we need to pause the autoplay
        _.$slider
            .off('focus.slick blur.slick')
            .on(
                'focus.slick',
                '*',
                function(event) {
                    var $sf = $(this);

                    setTimeout(function() {
                        if( _.options.pauseOnFocus ) {
                            if ($sf.is(':focus')) {
                                _.focussed = true;
                                _.autoPlay();
                            }
                        }
                    }, 0);
                }
            ).on(
                'blur.slick',
                '*',
                function(event) {
                    var $sf = $(this);

                    // When a blur occurs on any elements within the slider we become unfocused
                    if( _.options.pauseOnFocus ) {
                        _.focussed = false;
                        _.autoPlay();
                    }
                }
            );
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, swipeTarget, centerOffset;

        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = (_.swipeLeft * -1) + centerOffset;

        if (_.options.swipeToSlide === true) {

            _.$slideTrack.find('.slick-slide').each(function(index, slide) {

                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== true) {
                    slideOffset += (slideOuterWidth / 2);
                }

                slideRightBoundary = slideOffset + (slideOuterWidth);

                if (swipeTarget < slideRightBoundary) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*jslint browser:true */
jQuery(function ($) {
    'use strict';
    /*=== Navigation menu ===*/
    $('.navigation-menu').each(function () {
        // Create Mobile Menu
        var menuId = $(this).attr('data-id'),
            logoAttr = $(this).attr('data-logo');
        $('body').append('<div class="mobile-menu" id="' + menuId + '"><a href="javascript:void(0)" class="overlay-close"></a><div class="menu-content"></div></div>');
        // Copying The Menu To Mobile Container
        $(this).children("ul").clone().appendTo('#' + menuId + ' .menu-content');
        // Hacking Submenu's
        $('.navigation-menu ul,.navigation-menu .megamenu').parent('li').children('a').addClass('submenu ti-arrow-down-chevron');
        $('.mobile-menu ul,.mobile-menu .megamenu').parent('li').children('a').addClass('submenu').after('<span class="toggle-display ti-arrow-down-chevron"></span>');
        $('.navigation-menu .megamenu').parent('li').css({
            'position': 'static'
        });
        // Adding Logo To Mobile Menu
        if (typeof logoAttr !== typeof undefined && logoAttr !== false) {
            $('#' + menuId).addClass('has-logo').children('.menu-content').prepend('<div class="logo"> <img src="' + logoAttr + '" alt="logo"></div> ');
        };
    });

    /*=== Mobile Menu Button ===*/
    $('body').on('click', '.menu-btn[data-id]', function (e) {
        e.preventDefault();
        var menuId = $(this).attr('data-id');
        $('#' + menuId).toggleClass('active');
    });

    /*=== Mobile Menu Overlay Close ===*/
    $('body').on('click', '.mobile-menu .overlay-close', function () {
        $(this).parent('.mobile-menu').toggleClass('active');
    });

    /*=== Mobile Menu Submenus ===*/
    $('body').on('click', '.mobile-menu .toggle-display', function (e) {
        e.preventDefault();
        $(this).toggleClass('ti-close ti-arrow-down-chevron');
        $(this).parent('li').toggleClass('active').siblings('li').removeClass('active');
    });

    //=== Nested Multi Level Menu ===//
    $('.nested-menu ul').parent('li').children('a').addClass('submenu ti-arrow-down-chevron');
    $('body').on('click', '.nested-menu ul .submenu', function (e) {
        e.preventDefault();
        $(this).siblings('ul').slideToggle(700);
        $(this).parent('li').toggleClass('active').siblings('li').removeClass('active').children('ul').slideUp(700);
    });

    //=== Dropdowns ===//
    $('body').on('click', '.dropdown-btn', function(e){
        e.preventDefault();
        $(this).siblings('.dropdown-list').slideToggle(500);
    });

    /* Anything that gets to the document will hide the dropdown */
    $(document).click(function(){
        $(".dropdown-list").slideToggle();
    });

    /* Clicks within the dropdown won't make it past the dropdown itself */
    $(".dropdown-list").click(function(e){
        e.stopPropagation();
    });
});
/*jslint browser:true */
jQuery(function ($) {
    'use strict';
    /*===== Tabs System =====*/
    $('.tabs-menu [data-tab]:first-of-type,.tab-content:first-of-type').addClass('active'); // Activate First tab and its Content Box
    $('body').on('click', '.tabs-menu [data-tab]', function () {
        var tabId = $(this).attr('data-tab');
        $(this).addClass('active').siblings('[data-tab]').removeClass('active'); // Activate Clicked Tab
        $('#' + tabId).addClass('active').siblings('.tab-content').removeClass('active'); // Activate Tab Content
    });

    /*===== Accordion =====*/
    $('body').on('click','.accordion-title', function () {
        $(this).next('.accordion-content').slideToggle().parent('.accordion-item').siblings().children('.accordion-content').slideUp();
        $(this).parent('.accordion-item').toggleClass('active').siblings('.accordion-item').removeClass('active');
    });
});
/*jslint browser:true */
jQuery(function ($) {
    'use strict';
    //====== Forms ======//
    $('*[placeholder]').each(function () {
        var placeHold = $(this).attr('placeholder');
        $(this).on({
            focusin: function () {
                $(this).attr('placeholder', ' ');
            },

            focusout: function () {
                $(this).attr('placeholder', placeHold);
            }
        })
    });

    $('.color-checkbox').each(function(){
       var color = $(this).attr('data-color');
       $(this).css('background','#' + color);
    });

    //====== Lined Form Effect ======//
    $('body').on('change','.form-ui.lined input:not(.btn),.form-ui.lined textarea', function(e){
        var control_val = $(this).val();
        if (control_val !== '') {
            $(this).addClass('has-value');
        } else {
            $(this).removeClass('has-value');
        };
    });

    $('.progress-bar').each(function(){
        var progressValue = $(this).attr('data-value');
        if ( pageDirection == 'ltr' ) {
            $(this).css({
                'background-size':progressValue,
            }).append('<span class="progress-num" style="left:' + progressValue + '">' + progressValue + '</span>');
        } else {
            $(this).css({
                'background-size':progressValue,
            }).append('<span class="progress-num" style="right:' + progressValue + '">' + progressValue + '</span>');
        };
    });

    /*===== File Uploader ====*/
    $("body").on("change",".file-input input[type='file']", function (){
        var filePath = [];
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            filePath.push($(this).get(0).files[i].name);
        }
        $(this).parent().attr('data-text',filePath);
    });

    $('body').on('click','.edit-btn', function(e){
        e.preventDefault();
        $(this).siblings('input,select,textarea').attr('readonly',false).focus();
    });

    /*====== Quantity Input =======*/
    $('body').on('click','.quantity-input .increase',function(){
        var input = $(this).siblings('input');
        input.val( (parseInt(input.val()) + 1) );
    });

    $('body').on('click','.quantity-input .dicrease',function(){
        var input = $(this).siblings('input');
        input.val( (parseInt(input.val()) - 1) );
    });
});
/*jslint browser:true */
jQuery(function ($) {
    'use strict';
    /*========= Modals =========*/
    $('.modal-box').each(function () {
        $(this).prepend('<a href="javascript:void(0);" class="modal-overlay"></a>');
    });

    $('body').on('click', '[data-modal]', function (e) {
        e.preventDefault();
        var modalName = $(this).attr('data-modal');
        $('#' + modalName).toggleClass('active');
    });

    $('body').on('click', '.modal-box .modal-overlay', function (e) {
        e.preventDefault();
        $(this).parent('.modal-box').removeClass('active');
    });

    $('body').on('click', '.modal-box .close-modal', function (e) {
        e.preventDefault();
        $(this).parents('.modal-box').removeClass('active');
    });
});
/*jslint browser:true */
jQuery(function ($) {
    'use strict';

    /*======= Backgrounds ======*/
    $('[data-src]').each(function () {
        var backgroundImage = $(this).attr('data-src');
        $(this).css('background-image', 'url(' + backgroundImage + ')');
    });

    /*=== Sticky Elements ===*/
    if ($('[data-sticky]').length) { // Check if Element Exist
        //=== Offset Varriables ===//
        var top = $('[data-sticky]').offset().top,
            offsetv = top + 50;
        //=== On Scroll Event ===//
        $(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= offsetv) {
                $('[data-sticky]').addClass('is-sticky');
            } else {
                $('[data-sticky]').removeClass('is-sticky');
            }
        });
    };

    //=== Collapsed Box's ===//
    $('body').on('click', '.widget-block .title,.content-block .title', function(e){
        e.preventDefault();
        $(this).toggleClass('closed').siblings('.collapsed-content').slideToggle(500).toggleClass('closed');
    });

    //=== Animated Numbers ===//
    $('[data-numbers]').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-numbers');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        }, {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });

    /*===== Responsive X Tooltip =====*/
    $('.tooltip-start.tooltip-responsive,.tooltip-end.tooltip-responsive').each(function() {
        var startTip = $(this).offset().left,
            endTip = $(this).offset().left + $(this).outerWidth(true);
        if(startTip < 100 && endTip < 100) {
            $(this).addClass('tooltip-bottom').removeClass('tooltip-end').removeClass('tooltip-start');
        }
    });

    /*===== Responsive Y Tooltip =====*/
    $('.tooltip.tooltip-responsive').each(function() {
        var topTip = $(this).offset().top;
        if(topTip < 50) {
            $(this).addClass('tooltip-bottom').removeClass('tooltip');
        }
    });

    $('.tooltip-bottom.tooltip-responsive').each(function() {
        var bottomTip = $(this).offset().top + $(this).outerHeight(true);
        if(bottomTip < 50) {
            $(this).addClass('tooltip').removeClass('tooltip-bottom');
        }
    });

    /*===== Remove Parent Button ======*/
    $('body').on('click','.remove-item', function(e){
        e.preventDefault();
        // Grap Options
        var target = $(this).attr('data-target'),
            parentTag = $(this).attr('data-tag');
        // Remove Specific Target
        if (typeof target !== typeof undefined && target !== false){
            $('#' + target).remove();
        } else if (typeof parentTag !== typeof undefined && parentTag !== false) {
            // Remove Targeted HTML Tag
            $(this).parents(parentTag).remove();
        } else {
            // Remove Direct Parent
            $(this).parent().remove();
        }
    });
});
/*=== Global jQuery ===*/
jQuery(function ($) {
    'use strict';

    /*=== Direction Detector ====*/
    var pageDirection = $('body').css('direction');

    //==== Multi Langages ====//
    if ( pageDirection == 'rtl' ) {
        //===== RTL Code ====//
        $('.home-slider').slick({
            rtl: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: true,
            arrows:true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
        });

        $('.tours-slider').slick({
            rtl: true,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
            responsive: [
                {breakpoint: 805,settings: {slidesToShow: 2}},
                {breakpoint: 640,settings: {slidesToShow: 1,centerMode:true}}
            ]
        });

    } else {
        //===== LTR Code ====//
        $('.home-slider').slick({
            rtl: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: true,
            arrows:true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
        });

        $('.tours-slider').slick({
            rtl: false,
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<a href="javascript:void(0)" class="slick-prev ti-arrow-left-chevron"></a>',
            nextArrow: '<a href="javascript:void(0)" class="slick-next ti-arrow-right-chevron"></a>',
            responsive: [
                {breakpoint: 805,settings: {slidesToShow: 2}},
                {breakpoint: 640,settings: {slidesToShow: 1,centerMode:true}}
            ]
        });
    };

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAwX0pxdWVyeS4zLjMuMS5qcyIsIjAxX1NsaWNrLVNsaWRlci5qcyIsIjAyX01lbnVzLmpzIiwiMDNfVGFic19BY2NvcmRpb24uanMiLCIwNF9Gb3Jtcy5qcyIsIjA1X01vZGFscy5qcyIsIjEwX1V0aWxpdGllcy5qcyIsIjk5X3RoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0OUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidG9ybmFkby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjMuMy4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqLyBcclxuISBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGUuZG9jdW1lbnQgPyB0KGUsICEwKSA6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCFlLmRvY3VtZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO1xyXG4gICAgICAgIHJldHVybiB0KGUpXHJcbiAgICB9IDogdChlKVxyXG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBuID0gW10sXHJcbiAgICAgICAgciA9IGUuZG9jdW1lbnQsXHJcbiAgICAgICAgaSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcclxuICAgICAgICBvID0gbi5zbGljZSxcclxuICAgICAgICBhID0gbi5jb25jYXQsXHJcbiAgICAgICAgcyA9IG4ucHVzaCxcclxuICAgICAgICB1ID0gbi5pbmRleE9mLFxyXG4gICAgICAgIGwgPSB7fSxcclxuICAgICAgICBjID0gbC50b1N0cmluZyxcclxuICAgICAgICBmID0gbC5oYXNPd25Qcm9wZXJ0eSxcclxuICAgICAgICBwID0gZi50b1N0cmluZyxcclxuICAgICAgICBkID0gcC5jYWxsKE9iamVjdCksXHJcbiAgICAgICAgaCA9IHt9LFxyXG4gICAgICAgIGcgPSBmdW5jdGlvbiBlKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiBcIm51bWJlclwiICE9IHR5cGVvZiB0Lm5vZGVUeXBlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5ID0gZnVuY3Rpb24gZSh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsICE9IHQgJiYgdCA9PT0gdC53aW5kb3dcclxuICAgICAgICB9LFxyXG4gICAgICAgIHYgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICEwLFxyXG4gICAgICAgICAgICBzcmM6ICEwLFxyXG4gICAgICAgICAgICBub01vZHVsZTogITBcclxuICAgICAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG0oZSwgdCwgbikge1xyXG4gICAgICAgIHZhciBpLCBvID0gKHQgPSB0IHx8IHIpLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgaWYgKG8udGV4dCA9IGUsIG4pXHJcbiAgICAgICAgICAgIGZvciAoaSBpbiB2KSBuW2ldICYmIChvW2ldID0gbltpXSk7XHJcbiAgICAgICAgdC5oZWFkLmFwcGVuZENoaWxkKG8pLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB4KGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbCA9PSBlID8gZSArIFwiXCIgOiBcIm9iamVjdFwiID09IHR5cGVvZiBlIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSA/IGxbYy5jYWxsKGUpXSB8fCBcIm9iamVjdFwiIDogdHlwZW9mIGVcclxuICAgIH1cclxuICAgIHZhciBiID0gXCIzLjMuMVwiLFxyXG4gICAgICAgIHcgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHcuZm4uaW5pdChlLCB0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgVCA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztcclxuICAgIHcuZm4gPSB3LnByb3RvdHlwZSA9IHtcclxuICAgICAgICBqcXVlcnk6IFwiMy4zLjFcIixcclxuICAgICAgICBjb25zdHJ1Y3RvcjogdyxcclxuICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgdG9BcnJheTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gby5jYWxsKHRoaXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IGUgPyBvLmNhbGwodGhpcykgOiBlIDwgMCA/IHRoaXNbZSArIHRoaXMubGVuZ3RoXSA6IHRoaXNbZV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHB1c2hTdGFjazogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB3Lm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSwgZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0LnByZXZPYmplY3QgPSB0aGlzLCB0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYWNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdy5lYWNoKHRoaXMsIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXA6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayh3Lm1hcCh0aGlzLCBmdW5jdGlvbiAodCwgbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuY2FsbCh0LCBuLCB0KVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhvLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcSgwKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcSgtMSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVxOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbiA9ICtlICsgKGUgPCAwID8gdCA6IDApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2sobiA+PSAwICYmIG4gPCB0ID8gW3RoaXNbbl1dIDogW10pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJldk9iamVjdCB8fCB0aGlzLmNvbnN0cnVjdG9yKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHB1c2g6IHMsXHJcbiAgICAgICAgc29ydDogbi5zb3J0LFxyXG4gICAgICAgIHNwbGljZTogbi5zcGxpY2VcclxuICAgIH0sIHcuZXh0ZW5kID0gdy5mbi5leHRlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUsIHQsIG4sIHIsIGksIG8sIGEgPSBhcmd1bWVudHNbMF0gfHwge30sXHJcbiAgICAgICAgICAgIHMgPSAxLFxyXG4gICAgICAgICAgICB1ID0gYXJndW1lbnRzLmxlbmd0aCxcclxuICAgICAgICAgICAgbCA9ICExO1xyXG4gICAgICAgIGZvciAoXCJib29sZWFuXCIgPT0gdHlwZW9mIGEgJiYgKGwgPSBhLCBhID0gYXJndW1lbnRzW3NdIHx8IHt9LCBzKyspLCBcIm9iamVjdFwiID09IHR5cGVvZiBhIHx8IGcoYSkgfHwgKGEgPSB7fSksIHMgPT09IHUgJiYgKGEgPSB0aGlzLCBzLS0pOyBzIDwgdTsgcysrKVxyXG4gICAgICAgICAgICBpZiAobnVsbCAhPSAoZSA9IGFyZ3VtZW50c1tzXSkpXHJcbiAgICAgICAgICAgICAgICBmb3IgKHQgaW4gZSkgbiA9IGFbdF0sIGEgIT09IChyID0gZVt0XSkgJiYgKGwgJiYgciAmJiAody5pc1BsYWluT2JqZWN0KHIpIHx8IChpID0gQXJyYXkuaXNBcnJheShyKSkpID8gKGkgPyAoaSA9ICExLCBvID0gbiAmJiBBcnJheS5pc0FycmF5KG4pID8gbiA6IFtdKSA6IG8gPSBuICYmIHcuaXNQbGFpbk9iamVjdChuKSA/IG4gOiB7fSwgYVt0XSA9IHcuZXh0ZW5kKGwsIG8sIHIpKSA6IHZvaWQgMCAhPT0gciAmJiAoYVt0XSA9IHIpKTtcclxuICAgICAgICByZXR1cm4gYVxyXG4gICAgfSwgdy5leHRlbmQoe1xyXG4gICAgICAgIGV4cGFuZG86IFwialF1ZXJ5XCIgKyAoXCIzLjMuMVwiICsgTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csIFwiXCIpLFxyXG4gICAgICAgIGlzUmVhZHk6ICEwLFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuO1xyXG4gICAgICAgICAgICByZXR1cm4gISghZSB8fCBcIltvYmplY3QgT2JqZWN0XVwiICE9PSBjLmNhbGwoZSkpICYmICghKHQgPSBpKGUpKSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIChuID0gZi5jYWxsKHQsIFwiY29uc3RydWN0b3JcIikgJiYgdC5jb25zdHJ1Y3RvcikgJiYgcC5jYWxsKG4pID09PSBkKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNFbXB0eU9iamVjdDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQ7XHJcbiAgICAgICAgICAgIGZvciAodCBpbiBlKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgIHJldHVybiAhMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2xvYmFsRXZhbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbShlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWFjaDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4sIHIgPSAwO1xyXG4gICAgICAgICAgICBpZiAoQyhlKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChuID0gZS5sZW5ndGg7IHIgPCBuOyByKyspXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSB0LmNhbGwoZVtyXSwgciwgZVtyXSkpIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgZm9yIChyIGluIGUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSB0LmNhbGwoZVtyXSwgciwgZVtyXSkpIGJyZWFrO1xyXG4gICAgICAgICAgICByZXR1cm4gZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGwgPT0gZSA/IFwiXCIgOiAoZSArIFwiXCIpLnJlcGxhY2UoVCwgXCJcIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ha2VBcnJheTogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4gPSB0IHx8IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbCAhPSBlICYmIChDKE9iamVjdChlKSkgPyB3Lm1lcmdlKG4sIFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBbZV0gOiBlKSA6IHMuY2FsbChuLCBlKSksIG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGluQXJyYXk6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IHQgPyAtMSA6IHUuY2FsbCh0LCBlLCBuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSArdC5sZW5ndGgsIHIgPSAwLCBpID0gZS5sZW5ndGg7IHIgPCBuOyByKyspIGVbaSsrXSA9IHRbcl07XHJcbiAgICAgICAgICAgIHJldHVybiBlLmxlbmd0aCA9IGksIGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyZXA6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHIsIGkgPSBbXSwgbyA9IDAsIGEgPSBlLmxlbmd0aCwgcyA9ICFuOyBvIDwgYTsgbysrKShyID0gIXQoZVtvXSwgbykpICE9PSBzICYmIGkucHVzaChlW29dKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgdmFyIHIsIGksIG8gPSAwLFxyXG4gICAgICAgICAgICAgICAgcyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoQyhlKSlcclxuICAgICAgICAgICAgICAgIGZvciAociA9IGUubGVuZ3RoOyBvIDwgcjsgbysrKSBudWxsICE9IChpID0gdChlW29dLCBvLCBuKSkgJiYgcy5wdXNoKGkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBmb3IgKG8gaW4gZSkgbnVsbCAhPSAoaSA9IHQoZVtvXSwgbywgbikpICYmIHMucHVzaChpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGEuYXBwbHkoW10sIHMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBndWlkOiAxLFxyXG4gICAgICAgIHN1cHBvcnQ6IGhcclxuICAgIH0pLCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiAody5mbltTeW1ib2wuaXRlcmF0b3JdID0gbltTeW1ib2wuaXRlcmF0b3JdKSwgdy5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgbFtcIltvYmplY3QgXCIgKyB0ICsgXCJdXCJdID0gdC50b0xvd2VyQ2FzZSgpXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBDKGUpIHtcclxuICAgICAgICB2YXIgdCA9ICEhZSAmJiBcImxlbmd0aFwiIGluIGUgJiYgZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIG4gPSB4KGUpO1xyXG4gICAgICAgIHJldHVybiAhZyhlKSAmJiAheShlKSAmJiAoXCJhcnJheVwiID09PSBuIHx8IDAgPT09IHQgfHwgXCJudW1iZXJcIiA9PSB0eXBlb2YgdCAmJiB0ID4gMCAmJiB0IC0gMSBpbiBlKVxyXG4gICAgfVxyXG4gICAgdmFyIEUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0LCBuLCByLCBpLCBvLCBhLCBzLCB1LCBsLCBjLCBmLCBwLCBkLCBoLCBnLCB5LCB2LCBtLCB4LCBiID0gXCJzaXp6bGVcIiArIDEgKiBuZXcgRGF0ZSxcclxuICAgICAgICAgICAgdyA9IGUuZG9jdW1lbnQsXHJcbiAgICAgICAgICAgIFQgPSAwLFxyXG4gICAgICAgICAgICBDID0gMCxcclxuICAgICAgICAgICAgRSA9IGFlKCksXHJcbiAgICAgICAgICAgIGsgPSBhZSgpLFxyXG4gICAgICAgICAgICBTID0gYWUoKSxcclxuICAgICAgICAgICAgRCA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZSA9PT0gdCAmJiAoZiA9ICEwKSwgMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBOID0ge30uaGFzT3duUHJvcGVydHksXHJcbiAgICAgICAgICAgIEEgPSBbXSxcclxuICAgICAgICAgICAgaiA9IEEucG9wLFxyXG4gICAgICAgICAgICBxID0gQS5wdXNoLFxyXG4gICAgICAgICAgICBMID0gQS5wdXNoLFxyXG4gICAgICAgICAgICBIID0gQS5zbGljZSxcclxuICAgICAgICAgICAgTyA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMCwgciA9IGUubGVuZ3RoOyBuIDwgcjsgbisrKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlW25dID09PSB0KSByZXR1cm4gbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQID0gXCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLFxyXG4gICAgICAgICAgICBNID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxyXG4gICAgICAgICAgICBSID0gXCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXDAtXFxcXHhhMF0pK1wiLFxyXG4gICAgICAgICAgICBJID0gXCJcXFxcW1wiICsgTSArIFwiKihcIiArIFIgKyBcIikoPzpcIiArIE0gKyBcIiooWypeJHwhfl0/PSlcIiArIE0gKyBcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgUiArIFwiKSl8KVwiICsgTSArIFwiKlxcXFxdXCIsXHJcbiAgICAgICAgICAgIFcgPSBcIjooXCIgKyBSICsgXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgSSArIFwiKSopfC4qKVxcXFwpfClcIixcclxuICAgICAgICAgICAgJCA9IG5ldyBSZWdFeHAoTSArIFwiK1wiLCBcImdcIiksXHJcbiAgICAgICAgICAgIEIgPSBuZXcgUmVnRXhwKFwiXlwiICsgTSArIFwiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIiArIE0gKyBcIiskXCIsIFwiZ1wiKSxcclxuICAgICAgICAgICAgRiA9IG5ldyBSZWdFeHAoXCJeXCIgKyBNICsgXCIqLFwiICsgTSArIFwiKlwiKSxcclxuICAgICAgICAgICAgXyA9IG5ldyBSZWdFeHAoXCJeXCIgKyBNICsgXCIqKFs+K35dfFwiICsgTSArIFwiKVwiICsgTSArIFwiKlwiKSxcclxuICAgICAgICAgICAgeiA9IG5ldyBSZWdFeHAoXCI9XCIgKyBNICsgXCIqKFteXFxcXF0nXFxcIl0qPylcIiArIE0gKyBcIipcXFxcXVwiLCBcImdcIiksXHJcbiAgICAgICAgICAgIFggPSBuZXcgUmVnRXhwKFcpLFxyXG4gICAgICAgICAgICBVID0gbmV3IFJlZ0V4cChcIl5cIiArIFIgKyBcIiRcIiksXHJcbiAgICAgICAgICAgIFYgPSB7XHJcbiAgICAgICAgICAgICAgICBJRDogbmV3IFJlZ0V4cChcIl4jKFwiICsgUiArIFwiKVwiKSxcclxuICAgICAgICAgICAgICAgIENMQVNTOiBuZXcgUmVnRXhwKFwiXlxcXFwuKFwiICsgUiArIFwiKVwiKSxcclxuICAgICAgICAgICAgICAgIFRBRzogbmV3IFJlZ0V4cChcIl4oXCIgKyBSICsgXCJ8WypdKVwiKSxcclxuICAgICAgICAgICAgICAgIEFUVFI6IG5ldyBSZWdFeHAoXCJeXCIgKyBJKSxcclxuICAgICAgICAgICAgICAgIFBTRVVETzogbmV3IFJlZ0V4cChcIl5cIiArIFcpLFxyXG4gICAgICAgICAgICAgICAgQ0hJTEQ6IG5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiICsgTSArIFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyBNICsgXCIqKD86KFsrLV18KVwiICsgTSArIFwiKihcXFxcZCspfCkpXCIgKyBNICsgXCIqXFxcXCl8KVwiLCBcImlcIiksXHJcbiAgICAgICAgICAgICAgICBib29sOiBuZXcgUmVnRXhwKFwiXig/OlwiICsgUCArIFwiKSRcIiwgXCJpXCIpLFxyXG4gICAgICAgICAgICAgICAgbmVlZHNDb250ZXh0OiBuZXcgUmVnRXhwKFwiXlwiICsgTSArIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArIE0gKyBcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyBNICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEcgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxyXG4gICAgICAgICAgICBZID0gL15oXFxkJC9pLFxyXG4gICAgICAgICAgICBRID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcclxuICAgICAgICAgICAgSiA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxyXG4gICAgICAgICAgICBLID0gL1srfl0vLFxyXG4gICAgICAgICAgICBaID0gbmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiICsgTSArIFwiP3woXCIgKyBNICsgXCIpfC4pXCIsIFwiaWdcIiksXHJcbiAgICAgICAgICAgIGVlID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gXCIweFwiICsgdCAtIDY1NTM2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHIgIT09IHIgfHwgbiA/IHQgOiByIDwgMCA/IFN0cmluZy5mcm9tQ2hhckNvZGUociArIDY1NTM2KSA6IFN0cmluZy5mcm9tQ2hhckNvZGUociA+PiAxMCB8IDU1Mjk2LCAxMDIzICYgciB8IDU2MzIwKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZSA9IC8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLFxyXG4gICAgICAgICAgICBuZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA/IFwiXFwwXCIgPT09IGUgPyBcIlxcdWZmZmRcIiA6IGUuc2xpY2UoMCwgLTEpICsgXCJcXFxcXCIgKyBlLmNoYXJDb2RlQXQoZS5sZW5ndGggLSAxKS50b1N0cmluZygxNikgKyBcIiBcIiA6IFwiXFxcXFwiICsgZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHAoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpZSA9IG1lKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gITAgPT09IGUuZGlzYWJsZWQgJiYgKFwiZm9ybVwiIGluIGUgfHwgXCJsYWJlbFwiIGluIGUpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGRpcjogXCJwYXJlbnROb2RlXCIsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiBcImxlZ2VuZFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIEwuYXBwbHkoQSA9IEguY2FsbCh3LmNoaWxkTm9kZXMpLCB3LmNoaWxkTm9kZXMpLCBBW3cuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBMID0ge1xyXG4gICAgICAgICAgICAgICAgYXBwbHk6IEEubGVuZ3RoID8gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBxLmFwcGx5KGUsIEguY2FsbCh0KSlcclxuICAgICAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuID0gZS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlW24rK10gPSB0W3IrK10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGUubGVuZ3RoID0gbiAtIDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb2UoZSwgdCwgciwgaSkge1xyXG4gICAgICAgICAgICB2YXIgbywgcywgbCwgYywgZiwgaCwgdiwgbSA9IHQgJiYgdC5vd25lckRvY3VtZW50LFxyXG4gICAgICAgICAgICAgICAgVCA9IHQgPyB0Lm5vZGVUeXBlIDogOTtcclxuICAgICAgICAgICAgaWYgKHIgPSByIHx8IFtdLCBcInN0cmluZ1wiICE9IHR5cGVvZiBlIHx8ICFlIHx8IDEgIT09IFQgJiYgOSAhPT0gVCAmJiAxMSAhPT0gVCkgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgIGlmICghaSAmJiAoKHQgPyB0Lm93bmVyRG9jdW1lbnQgfHwgdCA6IHcpICE9PSBkICYmIHAodCksIHQgPSB0IHx8IGQsIGcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoMTEgIT09IFQgJiYgKGYgPSBKLmV4ZWMoZSkpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvID0gZlsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoOSA9PT0gVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobCA9IHQuZ2V0RWxlbWVudEJ5SWQobykpKSByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsLmlkID09PSBvKSByZXR1cm4gci5wdXNoKGwpLCByXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobSAmJiAobCA9IG0uZ2V0RWxlbWVudEJ5SWQobykpICYmIHgodCwgbCkgJiYgbC5pZCA9PT0gbykgcmV0dXJuIHIucHVzaChsKSwgclxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmWzJdKSByZXR1cm4gTC5hcHBseShyLCB0LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpKSwgcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChvID0gZlszXSkgJiYgbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkgcmV0dXJuIEwuYXBwbHkociwgdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG8pKSwgclxyXG4gICAgICAgICAgICAgICAgICAgIH0gaWYgKG4ucXNhICYmICFTW2UgKyBcIiBcIl0gJiYgKCF5IHx8ICF5LnRlc3QoZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKDEgIT09IFQpIG0gPSB0LCB2ID0gZTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChcIm9iamVjdFwiICE9PSB0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGMgPSB0LmdldEF0dHJpYnV0ZShcImlkXCIpKSA/IGMgPSBjLnJlcGxhY2UodGUsIG5lKTogdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBjID0gYiksIHMgPSAoaCA9IGEoZSkpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHMtLSkgaFtzXSA9IFwiI1wiICsgYyArIFwiIFwiICsgdmUoaFtzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBoLmpvaW4oXCIsXCIpLCBtID0gSy50ZXN0KGUpICYmIGdlKHQucGFyZW50Tm9kZSkgfHwgdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodikgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEwuYXBwbHkociwgbS5xdWVyeVNlbGVjdG9yQWxsKHYpKSwgclxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID09PSBiICYmIHQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHUoZS5yZXBsYWNlKEIsIFwiJDFcIiksIHQsIHIsIGkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZSgpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHQobiwgaSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUucHVzaChuICsgXCIgXCIpID4gci5jYWNoZUxlbmd0aCAmJiBkZWxldGUgdFtlLnNoaWZ0KCldLCB0W24gKyBcIiBcIl0gPSBpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVbYl0gPSAhMCwgZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdWUoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhZSh0KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gITFcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHQucGFyZW50Tm9kZSAmJiB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksIHQgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxlKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4gPSBlLnNwbGl0KFwifFwiKSxcclxuICAgICAgICAgICAgICAgIGkgPSBuLmxlbmd0aDtcclxuICAgICAgICAgICAgd2hpbGUgKGktLSkgci5hdHRySGFuZGxlW25baV1dID0gdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2UoZSwgdCkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IHQgJiYgZSxcclxuICAgICAgICAgICAgICAgIHIgPSBuICYmIDEgPT09IGUubm9kZVR5cGUgJiYgMSA9PT0gdC5ub2RlVHlwZSAmJiBlLnNvdXJjZUluZGV4IC0gdC5zb3VyY2VJbmRleDtcclxuICAgICAgICAgICAgaWYgKHIpIHJldHVybiByO1xyXG4gICAgICAgICAgICBpZiAobilcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuID0gbi5uZXh0U2libGluZylcclxuICAgICAgICAgICAgICAgICAgICBpZiAobiA9PT0gdCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICByZXR1cm4gZSA/IDEgOiAtMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmUoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImlucHV0XCIgPT09IHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiB0LnR5cGUgPT09IGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGUoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcImlucHV0XCIgPT09IG4gfHwgXCJidXR0b25cIiA9PT0gbikgJiYgdC50eXBlID09PSBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRlKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJmb3JtXCIgaW4gdCA/IHQucGFyZW50Tm9kZSAmJiAhMSA9PT0gdC5kaXNhYmxlZCA/IFwibGFiZWxcIiBpbiB0ID8gXCJsYWJlbFwiIGluIHQucGFyZW50Tm9kZSA/IHQucGFyZW50Tm9kZS5kaXNhYmxlZCA9PT0gZSA6IHQuZGlzYWJsZWQgPT09IGUgOiB0LmlzRGlzYWJsZWQgPT09IGUgfHwgdC5pc0Rpc2FibGVkICE9PSAhZSAmJiBpZSh0KSA9PT0gZSA6IHQuZGlzYWJsZWQgPT09IGUgOiBcImxhYmVsXCIgaW4gdCAmJiB0LmRpc2FibGVkID09PSBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhlKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA9ICt0LCBzZShmdW5jdGlvbiAobiwgcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBvID0gZShbXSwgbi5sZW5ndGgsIHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gby5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGEtLSkgbltpID0gb1thXV0gJiYgKG5baV0gPSAhKHJbaV0gPSBuW2ldKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZShlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlICYmIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgJiYgZVxyXG4gICAgICAgIH1cclxuICAgICAgICBuID0gb2Uuc3VwcG9ydCA9IHt9LCBvID0gb2UuaXNYTUwgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGUgJiYgKGUub3duZXJEb2N1bWVudCB8fCBlKS5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiAhIXQgJiYgXCJIVE1MXCIgIT09IHQubm9kZU5hbWVcclxuICAgICAgICB9LCBwID0gb2Uuc2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCwgaSwgYSA9IGUgPyBlLm93bmVyRG9jdW1lbnQgfHwgZSA6IHc7XHJcbiAgICAgICAgICAgIHJldHVybiBhICE9PSBkICYmIDkgPT09IGEubm9kZVR5cGUgJiYgYS5kb2N1bWVudEVsZW1lbnQgPyAoZCA9IGEsIGggPSBkLmRvY3VtZW50RWxlbWVudCwgZyA9ICFvKGQpLCB3ICE9PSBkICYmIChpID0gZC5kZWZhdWx0VmlldykgJiYgaS50b3AgIT09IGkgJiYgKGkuYWRkRXZlbnRMaXN0ZW5lciA/IGkuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCByZSwgITEpIDogaS5hdHRhY2hFdmVudCAmJiBpLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgcmUpKSwgbi5hdHRyaWJ1dGVzID0gdWUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLmNsYXNzTmFtZSA9IFwiaVwiLCAhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIilcclxuICAgICAgICAgICAgfSksIG4uZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSB1ZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuYXBwZW5kQ2hpbGQoZC5jcmVhdGVDb21tZW50KFwiXCIpKSwgIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aFxyXG4gICAgICAgICAgICB9KSwgbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gUS50ZXN0KGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksIG4uZ2V0QnlJZCA9IHVlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaC5hcHBlbmRDaGlsZChlKS5pZCA9IGIsICFkLmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkLmdldEVsZW1lbnRzQnlOYW1lKGIpLmxlbmd0aFxyXG4gICAgICAgICAgICB9KSwgbi5nZXRCeUlkID8gKHIuZmlsdGVyLklEID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gZS5yZXBsYWNlKFosIGVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSB0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHIuZmluZC5JRCA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdC5nZXRFbGVtZW50QnlJZCAmJiBnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0LmdldEVsZW1lbnRCeUlkKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuID8gW25dIDogW11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgOiAoci5maWx0ZXIuSUQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBlLnJlcGxhY2UoWiwgZWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUgJiYgZS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gJiYgbi52YWx1ZSA9PT0gdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCByLmZpbmQuSUQgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHQuZ2V0RWxlbWVudEJ5SWQgJiYgZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuLCByLCBpLCBvID0gdC5nZXRFbGVtZW50QnlJZChlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG4gPSBvLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkgJiYgbi52YWx1ZSA9PT0gZSkgcmV0dXJuIFtvXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHQuZ2V0RWxlbWVudHNCeU5hbWUoZSksIHIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAobyA9IGlbcisrXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobiA9IG8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSAmJiBuLnZhbHVlID09PSBlKSByZXR1cm4gW29dXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSwgci5maW5kLlRBRyA9IG4uZ2V0RWxlbWVudHNCeVRhZ05hbWUgPyBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPyB0LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpIDogbi5xc2EgPyB0LnF1ZXJ5U2VsZWN0b3JBbGwoZSkgOiB2b2lkIDBcclxuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiwgciA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG8gPSB0LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiKlwiID09PSBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG4gPSBvW2krK10pIDEgPT09IG4ubm9kZVR5cGUgJiYgci5wdXNoKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb1xyXG4gICAgICAgICAgICB9LCByLmZpbmQuQ0xBU1MgPSBuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZykgcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKVxyXG4gICAgICAgICAgICB9LCB2ID0gW10sIHkgPSBbXSwgKG4ucXNhID0gUS50ZXN0KGQucXVlcnlTZWxlY3RvckFsbCkpICYmICh1ZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaC5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGIgKyBcIic+PC9hPjxzZWxlY3QgaWQ9J1wiICsgYiArIFwiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsIGUucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCAmJiB5LnB1c2goXCJbKl4kXT1cIiArIE0gKyBcIiooPzonJ3xcXFwiXFxcIilcIiksIGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoIHx8IHkucHVzaChcIlxcXFxbXCIgKyBNICsgXCIqKD86dmFsdWV8XCIgKyBQICsgXCIpXCIpLCBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiICsgYiArIFwiLV1cIikubGVuZ3RoIHx8IHkucHVzaChcIn49XCIpLCBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGggfHwgeS5wdXNoKFwiOmNoZWNrZWRcIiksIGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIgKyBiICsgXCIrKlwiKS5sZW5ndGggfHwgeS5wdXNoKFwiLiMuK1srfl1cIilcclxuICAgICAgICAgICAgfSksIHVlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpLCBlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJEXCIpLCBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGggJiYgeS5wdXNoKFwibmFtZVwiICsgTSArIFwiKlsqXiR8IX5dPz1cIiksIDIgIT09IGUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCAmJiB5LnB1c2goXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiKSwgaC5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZCA9ICEwLCAyICE9PSBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoICYmIHkucHVzaChcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIpLCBlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLCB5LnB1c2goXCIsLio6XCIpXHJcbiAgICAgICAgICAgIH0pKSwgKG4ubWF0Y2hlc1NlbGVjdG9yID0gUS50ZXN0KG0gPSBoLm1hdGNoZXMgfHwgaC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgaC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgaC5vTWF0Y2hlc1NlbGVjdG9yIHx8IGgubXNNYXRjaGVzU2VsZWN0b3IpKSAmJiB1ZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbi5kaXNjb25uZWN0ZWRNYXRjaCA9IG0uY2FsbChlLCBcIipcIiksIG0uY2FsbChlLCBcIltzIT0nJ106eFwiKSwgdi5wdXNoKFwiIT1cIiwgVylcclxuICAgICAgICAgICAgfSksIHkgPSB5Lmxlbmd0aCAmJiBuZXcgUmVnRXhwKHkuam9pbihcInxcIikpLCB2ID0gdi5sZW5ndGggJiYgbmV3IFJlZ0V4cCh2LmpvaW4oXCJ8XCIpKSwgdCA9IFEudGVzdChoLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSwgeCA9IHQgfHwgUS50ZXN0KGguY29udGFpbnMpID8gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gOSA9PT0gZS5ub2RlVHlwZSA/IGUuZG9jdW1lbnRFbGVtZW50IDogZSxcclxuICAgICAgICAgICAgICAgICAgICByID0gdCAmJiB0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZSA9PT0gciB8fCAhKCFyIHx8IDEgIT09IHIubm9kZVR5cGUgfHwgIShuLmNvbnRhaW5zID8gbi5jb250YWlucyhyKSA6IGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgMTYgJiBlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSlcclxuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodClcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodCA9IHQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPT09IGUpIHJldHVybiAhMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhMVxyXG4gICAgICAgICAgICB9LCBEID0gdCA/IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSA9PT0gdCkgcmV0dXJuIGYgPSAhMCwgMDtcclxuICAgICAgICAgICAgICAgIHZhciByID0gIWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24gLSAhdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiByIHx8ICgxICYgKHIgPSAoZS5vd25lckRvY3VtZW50IHx8IGUpID09PSAodC5vd25lckRvY3VtZW50IHx8IHQpID8gZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KSA6IDEpIHx8ICFuLnNvcnREZXRhY2hlZCAmJiB0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpID09PSByID8gZSA9PT0gZCB8fCBlLm93bmVyRG9jdW1lbnQgPT09IHcgJiYgeCh3LCBlKSA/IC0xIDogdCA9PT0gZCB8fCB0Lm93bmVyRG9jdW1lbnQgPT09IHcgJiYgeCh3LCB0KSA/IDEgOiBjID8gTyhjLCBlKSAtIE8oYywgdCkgOiAwIDogNCAmIHIgPyAtMSA6IDEpXHJcbiAgICAgICAgICAgIH0gOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgPT09IHQpIHJldHVybiBmID0gITAsIDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiwgciA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IGUucGFyZW50Tm9kZSxcclxuICAgICAgICAgICAgICAgICAgICBvID0gdC5wYXJlbnROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGEgPSBbZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IFt0XTtcclxuICAgICAgICAgICAgICAgIGlmICghaSB8fCAhbykgcmV0dXJuIGUgPT09IGQgPyAtMSA6IHQgPT09IGQgPyAxIDogaSA/IC0xIDogbyA/IDEgOiBjID8gTyhjLCBlKSAtIE8oYywgdCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IG8pIHJldHVybiBjZShlLCB0KTtcclxuICAgICAgICAgICAgICAgIG4gPSBlO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPSBuLnBhcmVudE5vZGUpIGEudW5zaGlmdChuKTtcclxuICAgICAgICAgICAgICAgIG4gPSB0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPSBuLnBhcmVudE5vZGUpIHMudW5zaGlmdChuKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChhW3JdID09PSBzW3JdKSByKys7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gciA/IGNlKGFbcl0sIHNbcl0pIDogYVtyXSA9PT0gdyA/IC0xIDogc1tyXSA9PT0gdyA/IDEgOiAwXHJcbiAgICAgICAgICAgIH0sIGQpIDogZFxyXG4gICAgICAgIH0sIG9lLm1hdGNoZXMgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb2UoZSwgbnVsbCwgbnVsbCwgdClcclxuICAgICAgICB9LCBvZS5tYXRjaGVzU2VsZWN0b3IgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICBpZiAoKGUub3duZXJEb2N1bWVudCB8fCBlKSAhPT0gZCAmJiBwKGUpLCB0ID0gdC5yZXBsYWNlKHosIFwiPSckMSddXCIpLCBuLm1hdGNoZXNTZWxlY3RvciAmJiBnICYmICFTW3QgKyBcIiBcIl0gJiYgKCF2IHx8ICF2LnRlc3QodCkpICYmICgheSB8fCAheS50ZXN0KHQpKSkgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gbS5jYWxsKGUsIHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgfHwgbi5kaXNjb25uZWN0ZWRNYXRjaCB8fCBlLmRvY3VtZW50ICYmIDExICE9PSBlLmRvY3VtZW50Lm5vZGVUeXBlKSByZXR1cm4gclxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgICByZXR1cm4gb2UodCwgZCwgbnVsbCwgW2VdKS5sZW5ndGggPiAwXHJcbiAgICAgICAgfSwgb2UuY29udGFpbnMgPSBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGUub3duZXJEb2N1bWVudCB8fCBlKSAhPT0gZCAmJiBwKGUpLCB4KGUsIHQpXHJcbiAgICAgICAgfSwgb2UuYXR0ciA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIChlLm93bmVyRG9jdW1lbnQgfHwgZSkgIT09IGQgJiYgcChlKTtcclxuICAgICAgICAgICAgdmFyIGkgPSByLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxcclxuICAgICAgICAgICAgICAgIG8gPSBpICYmIE4uY2FsbChyLmF0dHJIYW5kbGUsIHQudG9Mb3dlckNhc2UoKSkgPyBpKGUsIHQsICFnKSA6IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gbyA/IG8gOiBuLmF0dHJpYnV0ZXMgfHwgIWcgPyBlLmdldEF0dHJpYnV0ZSh0KSA6IChvID0gZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSAmJiBvLnNwZWNpZmllZCA/IG8udmFsdWUgOiBudWxsXHJcbiAgICAgICAgfSwgb2UuZXNjYXBlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChlICsgXCJcIikucmVwbGFjZSh0ZSwgbmUpXHJcbiAgICAgICAgfSwgb2UuZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIGUpXHJcbiAgICAgICAgfSwgb2UudW5pcXVlU29ydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCByID0gW10sXHJcbiAgICAgICAgICAgICAgICBpID0gMCxcclxuICAgICAgICAgICAgICAgIG8gPSAwO1xyXG4gICAgICAgICAgICBpZiAoZiA9ICFuLmRldGVjdER1cGxpY2F0ZXMsIGMgPSAhbi5zb3J0U3RhYmxlICYmIGUuc2xpY2UoMCksIGUuc29ydChEKSwgZikge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHQgPSBlW28rK10pIHQgPT09IGVbb10gJiYgKGkgPSByLnB1c2gobykpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGktLSkgZS5zcGxpY2UocltpXSwgMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYyA9IG51bGwsIGVcclxuICAgICAgICB9LCBpID0gb2UuZ2V0VGV4dCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuID0gXCJcIixcclxuICAgICAgICAgICAgICAgIHIgPSAwLFxyXG4gICAgICAgICAgICAgICAgbyA9IGUubm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGlmIChvKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoMSA9PT0gbyB8fCA5ID09PSBvIHx8IDExID09PSBvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGUudGV4dENvbnRlbnQpIHJldHVybiBlLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoZSA9IGUuZmlyc3RDaGlsZDsgZTsgZSA9IGUubmV4dFNpYmxpbmcpIG4gKz0gaShlKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgzID09PSBvIHx8IDQgPT09IG8pIHJldHVybiBlLm5vZGVWYWx1ZVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0ID0gZVtyKytdKSBuICs9IGkodCk7XHJcbiAgICAgICAgICAgIHJldHVybiBuXHJcbiAgICAgICAgfSwgKHIgPSBvZS5zZWxlY3RvcnMgPSB7XHJcbiAgICAgICAgICAgIGNhY2hlTGVuZ3RoOiA1MCxcclxuICAgICAgICAgICAgY3JlYXRlUHNldWRvOiBzZSxcclxuICAgICAgICAgICAgbWF0Y2g6IFYsXHJcbiAgICAgICAgICAgIGF0dHJIYW5kbGU6IHt9LFxyXG4gICAgICAgICAgICBmaW5kOiB7fSxcclxuICAgICAgICAgICAgcmVsYXRpdmU6IHtcclxuICAgICAgICAgICAgICAgIFwiPlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyOiBcInBhcmVudE5vZGVcIixcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdDogITBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIiBcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcjogXCJwYXJlbnROb2RlXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIitcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdDogITBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcIn5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmVGaWx0ZXI6IHtcclxuICAgICAgICAgICAgICAgIEFUVFI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVbMV0gPSBlWzFdLnJlcGxhY2UoWiwgZWUpLCBlWzNdID0gKGVbM10gfHwgZVs0XSB8fCBlWzVdIHx8IFwiXCIpLnJlcGxhY2UoWiwgZWUpLCBcIn49XCIgPT09IGVbMl0gJiYgKGVbM10gPSBcIiBcIiArIGVbM10gKyBcIiBcIiksIGUuc2xpY2UoMCwgNClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBDSElMRDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZVsxXSA9IGVbMV0udG9Mb3dlckNhc2UoKSwgXCJudGhcIiA9PT0gZVsxXS5zbGljZSgwLCAzKSA/IChlWzNdIHx8IG9lLmVycm9yKGVbMF0pLCBlWzRdID0gKyhlWzRdID8gZVs1XSArIChlWzZdIHx8IDEpIDogMiAqIChcImV2ZW5cIiA9PT0gZVszXSB8fCBcIm9kZFwiID09PSBlWzNdKSksIGVbNV0gPSArKGVbN10gKyBlWzhdIHx8IFwib2RkXCIgPT09IGVbM10pKSA6IGVbM10gJiYgb2UuZXJyb3IoZVswXSksIGVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBQU0VVRE86IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQsIG4gPSAhZVs2XSAmJiBlWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWLkNISUxELnRlc3QoZVswXSkgPyBudWxsIDogKGVbM10gPyBlWzJdID0gZVs0XSB8fCBlWzVdIHx8IFwiXCIgOiBuICYmIFgudGVzdChuKSAmJiAodCA9IGEobiwgITApKSAmJiAodCA9IG4uaW5kZXhPZihcIilcIiwgbi5sZW5ndGggLSB0KSAtIG4ubGVuZ3RoKSAmJiAoZVswXSA9IGVbMF0uc2xpY2UoMCwgdCksIGVbMl0gPSBuLnNsaWNlKDAsIHQpKSwgZS5zbGljZSgwLCAzKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBUQUc6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLnJlcGxhY2UoWiwgZWUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKlwiID09PSBlID8gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITBcclxuICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUubm9kZU5hbWUgJiYgZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIENMQVNTOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gRVtlICsgXCIgXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0IHx8ICh0ID0gbmV3IFJlZ0V4cChcIihefFwiICsgTSArIFwiKVwiICsgZSArIFwiKFwiICsgTSArIFwifCQpXCIpKSAmJiBFKGUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0LnRlc3QoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZS5jbGFzc05hbWUgJiYgZS5jbGFzc05hbWUgfHwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZS5nZXRBdHRyaWJ1dGUgJiYgZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgQVRUUjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBvZS5hdHRyKHIsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBpID8gXCIhPVwiID09PSB0IDogIXQgfHwgKGkgKz0gXCJcIiwgXCI9XCIgPT09IHQgPyBpID09PSBuIDogXCIhPVwiID09PSB0ID8gaSAhPT0gbiA6IFwiXj1cIiA9PT0gdCA/IG4gJiYgMCA9PT0gaS5pbmRleE9mKG4pIDogXCIqPVwiID09PSB0ID8gbiAmJiBpLmluZGV4T2YobikgPiAtMSA6IFwiJD1cIiA9PT0gdCA/IG4gJiYgaS5zbGljZSgtbi5sZW5ndGgpID09PSBuIDogXCJ+PVwiID09PSB0ID8gKFwiIFwiICsgaS5yZXBsYWNlKCQsIFwiIFwiKSArIFwiIFwiKS5pbmRleE9mKG4pID4gLTEgOiBcInw9XCIgPT09IHQgJiYgKGkgPT09IG4gfHwgaS5zbGljZSgwLCBuLmxlbmd0aCArIDEpID09PSBuICsgXCItXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBDSElMRDogZnVuY3Rpb24gKGUsIHQsIG4sIHIsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IFwibnRoXCIgIT09IGUuc2xpY2UoMCwgMyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcImxhc3RcIiAhPT0gZS5zbGljZSgtNCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBcIm9mLXR5cGVcIiA9PT0gdDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMSA9PT0gciAmJiAwID09PSBpID8gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZS5wYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfSA6IGZ1bmN0aW9uICh0LCBuLCB1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsLCBjLCBmLCBwLCBkLCBoLCBnID0gbyAhPT0gYSA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gdC5wYXJlbnROb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHMgJiYgdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9ICF1ICYmICFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwID0gdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHAgPSBwW2ddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMgPyBwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHYgOiAxID09PSBwLm5vZGVUeXBlKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSBnID0gXCJvbmx5XCIgPT09IGUgJiYgIWggJiYgXCJuZXh0U2libGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGggPSBbYSA/IHkuZmlyc3RDaGlsZCA6IHkubGFzdENoaWxkXSwgYSAmJiBtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeCA9IChkID0gKGwgPSAoYyA9IChmID0gKHAgPSB5KVtiXSB8fCAocFtiXSA9IHt9KSlbcC51bmlxdWVJRF0gfHwgKGZbcC51bmlxdWVJRF0gPSB7fSkpW2VdIHx8IFtdKVswXSA9PT0gVCAmJiBsWzFdKSAmJiBsWzJdLCBwID0gZCAmJiB5LmNoaWxkTm9kZXNbZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHAgPSArK2QgJiYgcCAmJiBwW2ddIHx8ICh4ID0gZCA9IDApIHx8IGgucG9wKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgxID09PSBwLm5vZGVUeXBlICYmICsreCAmJiBwID09PSB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjW2VdID0gW1QsIGQsIHhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtICYmICh4ID0gZCA9IChsID0gKGMgPSAoZiA9IChwID0gdClbYl0gfHwgKHBbYl0gPSB7fSkpW3AudW5pcXVlSURdIHx8IChmW3AudW5pcXVlSURdID0ge30pKVtlXSB8fCBbXSlbMF0gPT09IFQgJiYgbFsxXSksICExID09PSB4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChwID0gKytkICYmIHAgJiYgcFtnXSB8fCAoeCA9IGQgPSAwKSB8fCBoLnBvcCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHMgPyBwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHYgOiAxID09PSBwLm5vZGVUeXBlKSAmJiArK3ggJiYgKG0gJiYgKChjID0gKGYgPSBwW2JdIHx8IChwW2JdID0ge30pKVtwLnVuaXF1ZUlEXSB8fCAoZltwLnVuaXF1ZUlEXSA9IHt9KSlbZV0gPSBbVCwgeF0pLCBwID09PSB0KSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHggLT0gaSkgPT09IHIgfHwgeCAlIHIgPT0gMCAmJiB4IC8gciA+PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgUFNFVURPOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuLCBpID0gci5wc2V1ZG9zW2VdIHx8IHIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldIHx8IG9lLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIiArIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpW2JdID8gaSh0KSA6IGkubGVuZ3RoID4gMSA/IChuID0gW2UsIGUsIFwiXCIsIHRdLCByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKSA/IHNlKGZ1bmN0aW9uIChlLCBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByLCBvID0gaShlLCB0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBvLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGEtLSkgZVtyID0gTyhlLCBvW2FdKV0gPSAhKG5bcl0gPSBvW2FdKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkoZSwgMCwgbilcclxuICAgICAgICAgICAgICAgICAgICB9KSA6IGlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHNldWRvczoge1xyXG4gICAgICAgICAgICAgICAgbm90OiBzZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4gPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9IHMoZS5yZXBsYWNlKEIsIFwiJDFcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByW2JdID8gc2UoZnVuY3Rpb24gKGUsIHQsIG4sIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8sIGEgPSByKGUsIG51bGwsIGksIFtdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHMtLSkobyA9IGFbc10pICYmIChlW3NdID0gISh0W3NdID0gbykpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBmdW5jdGlvbiAoZSwgaSwgbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdFswXSA9IGUsIHIodCwgbnVsbCwgbywgbiksIHRbMF0gPSBudWxsLCAhbi5wb3AoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgaGFzOiBzZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2UoZSwgdCkubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IHNlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPSBlLnJlcGxhY2UoWiwgZWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0LnRleHRDb250ZW50IHx8IHQuaW5uZXJUZXh0IHx8IGkodCkpLmluZGV4T2YoZSkgPiAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGxhbmc6IHNlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFUudGVzdChlIHx8IFwiXCIpIHx8IG9lLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBlKSwgZSA9IGUucmVwbGFjZShaLCBlZSkudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuID0gZyA/IHQubGFuZyA6IHQuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIikgfHwgdC5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSByZXR1cm4gKG4gPSBuLnRvTG93ZXJDYXNlKCkpID09PSBlIHx8IDAgPT09IG4uaW5kZXhPZihlICsgXCItXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgodCA9IHQucGFyZW50Tm9kZSkgJiYgMSA9PT0gdC5ub2RlVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLmxvY2F0aW9uICYmIGUubG9jYXRpb24uaGFzaDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiAmJiBuLnNsaWNlKDEpID09PSB0LmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcm9vdDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA9PT0gaFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlID09PSBkLmFjdGl2ZUVsZW1lbnQgJiYgKCFkLmhhc0ZvY3VzIHx8IGQuaGFzRm9jdXMoKSkgJiYgISEoZS50eXBlIHx8IGUuaHJlZiB8fCB+ZS50YWJJbmRleClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBkZSghMSksXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGUoITApLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJpbnB1dFwiID09PSB0ICYmICEhZS5jaGVja2VkIHx8IFwib3B0aW9uXCIgPT09IHQgJiYgISFlLnNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUucGFyZW50Tm9kZSAmJiBlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwgITAgPT09IGUuc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGUgPSBlLmZpcnN0Q2hpbGQ7IGU7IGUgPSBlLm5leHRTaWJsaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5ub2RlVHlwZSA8IDYpIHJldHVybiAhMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFyLnBzZXVkb3MuZW1wdHkoZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFkudGVzdChlLm5vZGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBHLnRlc3QoZS5ub2RlTmFtZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBidXR0b246IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5wdXRcIiA9PT0gdCAmJiBcImJ1dHRvblwiID09PSBlLnR5cGUgfHwgXCJidXR0b25cIiA9PT0gdFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiaW5wdXRcIiA9PT0gZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIFwidGV4dFwiID09PSBlLnR5cGUgJiYgKG51bGwgPT0gKHQgPSBlLmdldEF0dHJpYnV0ZShcInR5cGVcIikpIHx8IFwidGV4dFwiID09PSB0LnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGhlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzBdXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IGhlKGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0IC0gMV1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZXE6IGhlKGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtuIDwgMCA/IG4gKyB0IDogbl1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZXZlbjogaGUoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHQ7IG4gKz0gMikgZS5wdXNoKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIG9kZDogaGUoZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMTsgbiA8IHQ7IG4gKz0gMikgZS5wdXNoKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGx0OiBoZShmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSBuIDwgMCA/IG4gKyB0IDogbjsgLS1yID49IDA7KSBlLnB1c2gocik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgZ3Q6IGhlKGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgciA9IG4gPCAwID8gbiArIHQgOiBuOyArK3IgPCB0OykgZS5wdXNoKHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkucHNldWRvcy5udGggPSByLnBzZXVkb3MuZXE7XHJcbiAgICAgICAgZm9yICh0IGluIHtcclxuICAgICAgICAgICAgICAgIHJhZGlvOiAhMCxcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94OiAhMCxcclxuICAgICAgICAgICAgICAgIGZpbGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICEwLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICEwXHJcbiAgICAgICAgICAgIH0pIHIucHNldWRvc1t0XSA9IGZlKHQpO1xyXG4gICAgICAgIGZvciAodCBpbiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6ICEwLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6ICEwXHJcbiAgICAgICAgICAgIH0pIHIucHNldWRvc1t0XSA9IHBlKHQpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB5ZSgpIHt9XHJcbiAgICAgICAgeWUucHJvdG90eXBlID0gci5maWx0ZXJzID0gci5wc2V1ZG9zLCByLnNldEZpbHRlcnMgPSBuZXcgeWUsIGEgPSBvZS50b2tlbml6ZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuLCBpLCBvLCBhLCBzLCB1LCBsLCBjID0ga1tlICsgXCIgXCJdO1xyXG4gICAgICAgICAgICBpZiAoYykgcmV0dXJuIHQgPyAwIDogYy5zbGljZSgwKTtcclxuICAgICAgICAgICAgcyA9IGUsIHUgPSBbXSwgbCA9IHIucHJlRmlsdGVyO1xyXG4gICAgICAgICAgICB3aGlsZSAocykge1xyXG4gICAgICAgICAgICAgICAgbiAmJiAhKGkgPSBGLmV4ZWMocykpIHx8IChpICYmIChzID0gcy5zbGljZShpWzBdLmxlbmd0aCkgfHwgcyksIHUucHVzaChvID0gW10pKSwgbiA9ICExLCAoaSA9IF8uZXhlYyhzKSkgJiYgKG4gPSBpLnNoaWZ0KCksIG8ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG4sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogaVswXS5yZXBsYWNlKEIsIFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgfSksIHMgPSBzLnNsaWNlKG4ubGVuZ3RoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGEgaW4gci5maWx0ZXIpICEoaSA9IFZbYV0uZXhlYyhzKSkgfHwgbFthXSAmJiAhKGkgPSBsW2FdKGkpKSB8fCAobiA9IGkuc2hpZnQoKSwgby5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBhLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXM6IGlcclxuICAgICAgICAgICAgICAgIH0pLCBzID0gcy5zbGljZShuLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFuKSBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0ID8gcy5sZW5ndGggOiBzID8gb2UuZXJyb3IoZSkgOiBrKGUsIHUpLnNsaWNlKDApXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmUoZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gMCwgbiA9IGUubGVuZ3RoLCByID0gXCJcIjsgdCA8IG47IHQrKykgciArPSBlW3RdLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWUoZSwgdCwgbikge1xyXG4gICAgICAgICAgICB2YXIgciA9IHQuZGlyLFxyXG4gICAgICAgICAgICAgICAgaSA9IHQubmV4dCxcclxuICAgICAgICAgICAgICAgIG8gPSBpIHx8IHIsXHJcbiAgICAgICAgICAgICAgICBhID0gbiAmJiBcInBhcmVudE5vZGVcIiA9PT0gbyxcclxuICAgICAgICAgICAgICAgIHMgPSBDKys7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmZpcnN0ID8gZnVuY3Rpb24gKHQsIG4sIGkpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0ID0gdFtyXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PT0gdC5ub2RlVHlwZSB8fCBhKSByZXR1cm4gZSh0LCBuLCBpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhMVxyXG4gICAgICAgICAgICB9IDogZnVuY3Rpb24gKHQsIG4sIHUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBsLCBjLCBmLCBwID0gW1QsIHNdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodCA9IHRbcl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMSA9PT0gdC5ub2RlVHlwZSB8fCBhKSAmJiBlKHQsIG4sIHUpKSByZXR1cm4gITBcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ID0gdFtyXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT09IHQubm9kZVR5cGUgfHwgYSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmID0gdFtiXSB8fCAodFtiXSA9IHt9KSwgYyA9IGZbdC51bmlxdWVJRF0gfHwgKGZbdC51bmlxdWVJRF0gPSB7fSksIGkgJiYgaSA9PT0gdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB0ID0gdFtyXSB8fCB0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChsID0gY1tvXSkgJiYgbFswXSA9PT0gVCAmJiBsWzFdID09PSBzKSByZXR1cm4gcFsyXSA9IGxbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNbb10gPSBwLCBwWzJdID0gZSh0LCBuLCB1KSkgcmV0dXJuICEwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHJldHVybiAhMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB4ZShlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmxlbmd0aCA+IDEgPyBmdW5jdGlvbiAodCwgbiwgcikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSBlLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlW2ldKHQsIG4sIHIpKSByZXR1cm4gITE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gITBcclxuICAgICAgICAgICAgfSA6IGVbMF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJlKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgciA9IDAsIGkgPSB0Lmxlbmd0aDsgciA8IGk7IHIrKykgb2UoZSwgdFtyXSwgbik7XHJcbiAgICAgICAgICAgIHJldHVybiBuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB3ZShlLCB0LCBuLCByLCBpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG8sIGEgPSBbXSwgcyA9IDAsIHUgPSBlLmxlbmd0aCwgbCA9IG51bGwgIT0gdDsgcyA8IHU7IHMrKykobyA9IGVbc10pICYmIChuICYmICFuKG8sIHIsIGkpIHx8IChhLnB1c2gobyksIGwgJiYgdC5wdXNoKHMpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBUZShlLCB0LCBuLCByLCBpLCBvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByICYmICFyW2JdICYmIChyID0gVGUocikpLCBpICYmICFpW2JdICYmIChpID0gVGUoaSwgbykpLCBzZShmdW5jdGlvbiAobywgYSwgcywgdSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGwsIGMsIGYsIHAgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICBkID0gW10sXHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBvIHx8IGJlKHQgfHwgXCIqXCIsIHMubm9kZVR5cGUgPyBbc10gOiBzLCBbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgeSA9ICFlIHx8ICFvICYmIHQgPyBnIDogd2UoZywgcCwgZSwgcywgdSksXHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG4gPyBpIHx8IChvID8gZSA6IGggfHwgcikgPyBbXSA6IGEgOiB5O1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gJiYgbih5LCB2LCBzLCB1KSwgcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGwgPSB3ZSh2LCBkKSwgcihsLCBbXSwgcywgdSksIGMgPSBsLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYy0tKShmID0gbFtjXSkgJiYgKHZbZFtjXV0gPSAhKHlbZFtjXV0gPSBmKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgfHwgZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IFtdLCBjID0gdi5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYy0tKShmID0gdltjXSkgJiYgbC5wdXNoKHlbY10gPSBmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkobnVsbCwgdiA9IFtdLCBsLCB1KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB2Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGMtLSkoZiA9IHZbY10pICYmIChsID0gaSA/IE8obywgZikgOiBwW2NdKSA+IC0xICYmIChvW2xdID0gIShhW2xdID0gZikpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHYgPSB3ZSh2ID09PSBhID8gdi5zcGxpY2UoaCwgdi5sZW5ndGgpIDogdiksIGkgPyBpKG51bGwsIGEsIHYsIHUpIDogTC5hcHBseShhLCB2KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gQ2UoZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0LCBuLCBpLCBvID0gZS5sZW5ndGgsIGEgPSByLnJlbGF0aXZlW2VbMF0udHlwZV0sIHMgPSBhIHx8IHIucmVsYXRpdmVbXCIgXCJdLCB1ID0gYSA/IDEgOiAwLCBjID0gbWUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA9PT0gdFxyXG4gICAgICAgICAgICAgICAgfSwgcywgITApLCBmID0gbWUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTyh0LCBlKSA+IC0xXHJcbiAgICAgICAgICAgICAgICB9LCBzLCAhMCksIHAgPSBbZnVuY3Rpb24gKGUsIG4sIHIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9ICFhICYmIChyIHx8IG4gIT09IGwpIHx8ICgodCA9IG4pLm5vZGVUeXBlID8gYyhlLCBuLCByKSA6IGYoZSwgbiwgcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ID0gbnVsbCwgaVxyXG4gICAgICAgICAgICAgICAgfV07IHUgPCBvOyB1KyspXHJcbiAgICAgICAgICAgICAgICBpZiAobiA9IHIucmVsYXRpdmVbZVt1XS50eXBlXSkgcCA9IFttZSh4ZShwKSwgbildO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChuID0gci5maWx0ZXJbZVt1XS50eXBlXS5hcHBseShudWxsLCBlW3VdLm1hdGNoZXMpKVtiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSArK3U7IGkgPCBvOyBpKyspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5yZWxhdGl2ZVtlW2ldLnR5cGVdKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRlKHUgPiAxICYmIHhlKHApLCB1ID4gMSAmJiB2ZShlLnNsaWNlKDAsIHUgLSAxKS5jb25jYXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiIFwiID09PSBlW3UgLSAyXS50eXBlID8gXCIqXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKS5yZXBsYWNlKEIsIFwiJDFcIiksIG4sIHUgPCBpICYmIENlKGUuc2xpY2UodSwgaSkpLCBpIDwgbyAmJiBDZShlID0gZS5zbGljZShpKSksIGkgPCBvICYmIHZlKGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwLnB1c2gobilcclxuICAgICAgICAgICAgICAgIH0gcmV0dXJuIHhlKHApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBFZShlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gdC5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICAgICAgaSA9IGUubGVuZ3RoID4gMCxcclxuICAgICAgICAgICAgICAgIG8gPSBmdW5jdGlvbiAobywgYSwgcywgdSwgYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmLCBoLCB5LCB2ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbSA9IFwiMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gbyAmJiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYiA9IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQyA9IG8gfHwgaSAmJiByLmZpbmQuVEFHKFwiKlwiLCBjKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRSA9IFQgKz0gbnVsbCA9PSB3ID8gMSA6IE1hdGgucmFuZG9tKCkgfHwgLjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSBDLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGMgJiYgKGwgPSBhID09PSBkIHx8IGEgfHwgYyk7IG0gIT09IGsgJiYgbnVsbCAhPSAoZiA9IENbbV0pOyBtKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJiYgZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaCA9IDAsIGEgfHwgZi5vd25lckRvY3VtZW50ID09PSBkIHx8IChwKGYpLCBzID0gIWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHkgPSBlW2grK10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHkoZiwgYSB8fCBkLCBzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1LnB1c2goZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjICYmIChUID0gRSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuICYmICgoZiA9ICF5ICYmIGYpICYmIHYtLSwgbyAmJiB4LnB1c2goZikpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ICs9IG0sIG4gJiYgbSAhPT0gdikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHkgPSB0W2grK10pIHkoeCwgYiwgYSwgcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG0tLSkgeFttXSB8fCBiW21dIHx8IChiW21dID0gai5jYWxsKHUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIgPSB3ZShiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEwuYXBwbHkodSwgYiksIGMgJiYgIW8gJiYgYi5sZW5ndGggPiAwICYmIHYgKyB0Lmxlbmd0aCA+IDEgJiYgb2UudW5pcXVlU29ydCh1KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYyAmJiAoVCA9IEUsIGwgPSB3KSwgeFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG4gPyBzZShvKSA6IG9cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHMgPSBvZS5jb21waWxlID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4sIHIgPSBbXSxcclxuICAgICAgICAgICAgICAgIGkgPSBbXSxcclxuICAgICAgICAgICAgICAgIG8gPSBTW2UgKyBcIiBcIl07XHJcbiAgICAgICAgICAgIGlmICghbykge1xyXG4gICAgICAgICAgICAgICAgdCB8fCAodCA9IGEoZSkpLCBuID0gdC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobi0tKShvID0gQ2UodFtuXSkpW2JdID8gci5wdXNoKG8pIDogaS5wdXNoKG8pO1xyXG4gICAgICAgICAgICAgICAgKG8gPSBTKGUsIEVlKGksIHIpKSkuc2VsZWN0b3IgPSBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9cclxuICAgICAgICB9LCB1ID0gb2Uuc2VsZWN0ID0gZnVuY3Rpb24gKGUsIHQsIG4sIGkpIHtcclxuICAgICAgICAgICAgdmFyIG8sIHUsIGwsIGMsIGYsIHAgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUgJiYgZSxcclxuICAgICAgICAgICAgICAgIGQgPSAhaSAmJiBhKGUgPSBwLnNlbGVjdG9yIHx8IGUpO1xyXG4gICAgICAgICAgICBpZiAobiA9IG4gfHwgW10sIDEgPT09IGQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHUgPSBkWzBdID0gZFswXS5zbGljZSgwKSkubGVuZ3RoID4gMiAmJiBcIklEXCIgPT09IChsID0gdVswXSkudHlwZSAmJiA5ID09PSB0Lm5vZGVUeXBlICYmIGcgJiYgci5yZWxhdGl2ZVt1WzFdLnR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IChyLmZpbmQuSUQobC5tYXRjaGVzWzBdLnJlcGxhY2UoWiwgZWUpLCB0KSB8fCBbXSlbMF0pKSByZXR1cm4gbjtcclxuICAgICAgICAgICAgICAgICAgICBwICYmICh0ID0gdC5wYXJlbnROb2RlKSwgZSA9IGUuc2xpY2UodS5zaGlmdCgpLnZhbHVlLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG8gPSBWLm5lZWRzQ29udGV4dC50ZXN0KGUpID8gMCA6IHUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG8tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsID0gdVtvXSwgci5yZWxhdGl2ZVtjID0gbC50eXBlXSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChmID0gci5maW5kW2NdKSAmJiAoaSA9IGYobC5tYXRjaGVzWzBdLnJlcGxhY2UoWiwgZWUpLCBLLnRlc3QodVswXS50eXBlKSAmJiBnZSh0LnBhcmVudE5vZGUpIHx8IHQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodS5zcGxpY2UobywgMSksICEoZSA9IGkubGVuZ3RoICYmIHZlKHUpKSkgcmV0dXJuIEwuYXBwbHkobiwgaSksIG47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAocCB8fCBzKGUsIGQpKShpLCB0LCAhZywgbiwgIXQgfHwgSy50ZXN0KGUpICYmIGdlKHQucGFyZW50Tm9kZSkgfHwgdCksIG5cclxuICAgICAgICB9LCBuLnNvcnRTdGFibGUgPSBiLnNwbGl0KFwiXCIpLnNvcnQoRCkuam9pbihcIlwiKSA9PT0gYiwgbi5kZXRlY3REdXBsaWNhdGVzID0gISFmLCBwKCksIG4uc29ydERldGFjaGVkID0gdWUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgJiBlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKVxyXG4gICAgICAgIH0pLCB1ZShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPjwvYT5cIiwgXCIjXCIgPT09IGUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpXHJcbiAgICAgICAgfSkgfHwgbGUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsIGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIGlmICghbikgcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsIFwidHlwZVwiID09PSB0LnRvTG93ZXJDYXNlKCkgPyAxIDogMilcclxuICAgICAgICB9KSwgbi5hdHRyaWJ1dGVzICYmIHVlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIiwgZS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpLCBcIlwiID09PSBlLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcclxuICAgICAgICB9KSB8fCBsZShcInZhbHVlXCIsIGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIGlmICghbiAmJiBcImlucHV0XCIgPT09IGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkgcmV0dXJuIGUuZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgfSksIHVlKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IGUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIilcclxuICAgICAgICB9KSB8fCBsZShQLCBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICB2YXIgcjtcclxuICAgICAgICAgICAgaWYgKCFuKSByZXR1cm4gITAgPT09IGVbdF0gPyB0LnRvTG93ZXJDYXNlKCkgOiAociA9IGUuZ2V0QXR0cmlidXRlTm9kZSh0KSkgJiYgci5zcGVjaWZpZWQgPyByLnZhbHVlIDogbnVsbFxyXG4gICAgICAgIH0pLCBvZVxyXG4gICAgfShlKTtcclxuICAgIHcuZmluZCA9IEUsIHcuZXhwciA9IEUuc2VsZWN0b3JzLCB3LmV4cHJbXCI6XCJdID0gdy5leHByLnBzZXVkb3MsIHcudW5pcXVlU29ydCA9IHcudW5pcXVlID0gRS51bmlxdWVTb3J0LCB3LnRleHQgPSBFLmdldFRleHQsIHcuaXNYTUxEb2MgPSBFLmlzWE1MLCB3LmNvbnRhaW5zID0gRS5jb250YWlucywgdy5lc2NhcGVTZWxlY3RvciA9IEUuZXNjYXBlO1xyXG4gICAgdmFyIGsgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICB2YXIgciA9IFtdLFxyXG4gICAgICAgICAgICAgICAgaSA9IHZvaWQgMCAhPT0gbjtcclxuICAgICAgICAgICAgd2hpbGUgKChlID0gZVt0XSkgJiYgOSAhPT0gZS5ub2RlVHlwZSlcclxuICAgICAgICAgICAgICAgIGlmICgxID09PSBlLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgJiYgdyhlKS5pcyhuKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgci5wdXNoKGUpXHJcbiAgICAgICAgICAgICAgICB9IHJldHVybiByXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IFtdOyBlOyBlID0gZS5uZXh0U2libGluZykgMSA9PT0gZS5ub2RlVHlwZSAmJiBlICE9PSB0ICYmIG4ucHVzaChlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIEQgPSB3LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O1xyXG5cclxuICAgIGZ1bmN0aW9uIE4oZSwgdCkge1xyXG4gICAgICAgIHJldHVybiBlLm5vZGVOYW1lICYmIGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdC50b0xvd2VyQ2FzZSgpXHJcbiAgICB9XHJcbiAgICB2YXIgQSA9IC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGooZSwgdCwgbikge1xyXG4gICAgICAgIHJldHVybiBnKHQpID8gdy5ncmVwKGUsIGZ1bmN0aW9uIChlLCByKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIXQuY2FsbChlLCByLCBlKSAhPT0gblxyXG4gICAgICAgIH0pIDogdC5ub2RlVHlwZSA/IHcuZ3JlcChlLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gdCAhPT0gblxyXG4gICAgICAgIH0pIDogXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCA/IHcuZ3JlcChlLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdS5jYWxsKHQsIGUpID4gLTEgIT09IG5cclxuICAgICAgICB9KSA6IHcuZmlsdGVyKHQsIGUsIG4pXHJcbiAgICB9XHJcbiAgICB3LmZpbHRlciA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgdmFyIHIgPSB0WzBdO1xyXG4gICAgICAgIHJldHVybiBuICYmIChlID0gXCI6bm90KFwiICsgZSArIFwiKVwiKSwgMSA9PT0gdC5sZW5ndGggJiYgMSA9PT0gci5ub2RlVHlwZSA/IHcuZmluZC5tYXRjaGVzU2VsZWN0b3IociwgZSkgPyBbcl0gOiBbXSA6IHcuZmluZC5tYXRjaGVzKGUsIHcuZ3JlcCh0LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSA9PT0gZS5ub2RlVHlwZVxyXG4gICAgICAgIH0pKVxyXG4gICAgfSwgdy5mbi5leHRlbmQoe1xyXG4gICAgICAgIGZpbmQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuLCByID0gdGhpcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBpID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIHJldHVybiB0aGlzLnB1c2hTdGFjayh3KGUpLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHQgPSAwOyB0IDwgcjsgdCsrKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3LmNvbnRhaW5zKGlbdF0sIHRoaXMpKSByZXR1cm4gITBcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBmb3IgKG4gPSB0aGlzLnB1c2hTdGFjayhbXSksIHQgPSAwOyB0IDwgcjsgdCsrKSB3LmZpbmQoZSwgaVt0XSwgbik7XHJcbiAgICAgICAgICAgIHJldHVybiByID4gMSA/IHcudW5pcXVlU29ydChuKSA6IG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKGoodGhpcywgZSB8fCBbXSwgITEpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLCBlIHx8IFtdLCAhMCkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhaih0aGlzLCBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIEQudGVzdChlKSA/IHcoZSkgOiBlIHx8IFtdLCAhMSkubGVuZ3RoXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2YXIgcSwgTCA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvO1xyXG4gICAgKHcuZm4uaW5pdCA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgdmFyIGksIG87XHJcbiAgICAgICAgaWYgKCFlKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAobiA9IG4gfHwgcSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSkge1xyXG4gICAgICAgICAgICBpZiAoIShpID0gXCI8XCIgPT09IGVbMF0gJiYgXCI+XCIgPT09IGVbZS5sZW5ndGggLSAxXSAmJiBlLmxlbmd0aCA+PSAzID8gW251bGwsIGUsIG51bGxdIDogTC5leGVjKGUpKSB8fCAhaVsxXSAmJiB0KSByZXR1cm4gIXQgfHwgdC5qcXVlcnkgPyAodCB8fCBuKS5maW5kKGUpIDogdGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO1xyXG4gICAgICAgICAgICBpZiAoaVsxXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPSB0IGluc3RhbmNlb2YgdyA/IHRbMF0gOiB0LCB3Lm1lcmdlKHRoaXMsIHcucGFyc2VIVE1MKGlbMV0sIHQgJiYgdC5ub2RlVHlwZSA/IHQub3duZXJEb2N1bWVudCB8fCB0IDogciwgITApKSwgQS50ZXN0KGlbMV0pICYmIHcuaXNQbGFpbk9iamVjdCh0KSlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgaW4gdCkgZyh0aGlzW2ldKSA/IHRoaXNbaV0odFtpXSkgOiB0aGlzLmF0dHIoaSwgdFtpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAobyA9IHIuZ2V0RWxlbWVudEJ5SWQoaVsyXSkpICYmICh0aGlzWzBdID0gbywgdGhpcy5sZW5ndGggPSAxKSwgdGhpc1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZS5ub2RlVHlwZSA/ICh0aGlzWzBdID0gZSwgdGhpcy5sZW5ndGggPSAxLCB0aGlzKSA6IGcoZSkgPyB2b2lkIDAgIT09IG4ucmVhZHkgPyBuLnJlYWR5KGUpIDogZSh3KSA6IHcubWFrZUFycmF5KGUsIHRoaXMpXHJcbiAgICB9KS5wcm90b3R5cGUgPSB3LmZuLCBxID0gdyhyKTtcclxuICAgIHZhciBIID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXHJcbiAgICAgICAgTyA9IHtcclxuICAgICAgICAgICAgY2hpbGRyZW46ICEwLFxyXG4gICAgICAgICAgICBjb250ZW50czogITAsXHJcbiAgICAgICAgICAgIG5leHQ6ICEwLFxyXG4gICAgICAgICAgICBwcmV2OiAhMFxyXG4gICAgICAgIH07XHJcbiAgICB3LmZuLmV4dGVuZCh7XHJcbiAgICAgICAgaGFzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHcoZSwgdGhpcyksXHJcbiAgICAgICAgICAgICAgICBuID0gdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IG47IGUrKylcclxuICAgICAgICAgICAgICAgICAgICBpZiAody5jb250YWlucyh0aGlzLCB0W2VdKSkgcmV0dXJuICEwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZXN0OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB2YXIgbiwgciA9IDAsXHJcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBvID0gW10sXHJcbiAgICAgICAgICAgICAgICBhID0gXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSAmJiB3KGUpO1xyXG4gICAgICAgICAgICBpZiAoIUQudGVzdChlKSlcclxuICAgICAgICAgICAgICAgIGZvciAoOyByIDwgaTsgcisrKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobiA9IHRoaXNbcl07IG4gJiYgbiAhPT0gdDsgbiA9IG4ucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG4ubm9kZVR5cGUgPCAxMSAmJiAoYSA/IGEuaW5kZXgobikgPiAtMSA6IDEgPT09IG4ubm9kZVR5cGUgJiYgdy5maW5kLm1hdGNoZXNTZWxlY3RvcihuLCBlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ucHVzaChuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gcmV0dXJuIHRoaXMucHVzaFN0YWNrKG8ubGVuZ3RoID4gMSA/IHcudW5pcXVlU29ydChvKSA6IG8pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmRleDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUgPyBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gdS5jYWxsKHcoZSksIHRoaXNbMF0pIDogdS5jYWxsKHRoaXMsIGUuanF1ZXJ5ID8gZVswXSA6IGUpIDogdGhpc1swXSAmJiB0aGlzWzBdLnBhcmVudE5vZGUgPyB0aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aCA6IC0xXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayh3LnVuaXF1ZVNvcnQody5tZXJnZSh0aGlzLmdldCgpLCB3KGUsIHQpKSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRCYWNrOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQobnVsbCA9PSBlID8gdGhpcy5wcmV2T2JqZWN0IDogdGhpcy5wcmV2T2JqZWN0LmZpbHRlcihlKSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBQKGUsIHQpIHtcclxuICAgICAgICB3aGlsZSAoKGUgPSBlW3RdKSAmJiAxICE9PSBlLm5vZGVUeXBlKTtcclxuICAgICAgICByZXR1cm4gZVxyXG4gICAgfVxyXG4gICAgdy5lYWNoKHtcclxuICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICByZXR1cm4gdCAmJiAxMSAhPT0gdC5ub2RlVHlwZSA/IHQgOiBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJlbnRzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gayhlLCBcInBhcmVudE5vZGVcIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmVudHNVbnRpbDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsoZSwgXCJwYXJlbnROb2RlXCIsIG4pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUChlLCBcIm5leHRTaWJsaW5nXCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmV2OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUChlLCBcInByZXZpb3VzU2libGluZ1wiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dEFsbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsoZSwgXCJuZXh0U2libGluZ1wiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldkFsbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsoZSwgXCJwcmV2aW91c1NpYmxpbmdcIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHRVbnRpbDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGsoZSwgXCJuZXh0U2libGluZ1wiLCBuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldlVudGlsOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gayhlLCBcInByZXZpb3VzU2libGluZ1wiLCBuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2libGluZ3M6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTKChlLnBhcmVudE5vZGUgfHwge30pLmZpcnN0Q2hpbGQsIGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGlsZHJlbjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFMoZS5maXJzdENoaWxkKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudHM6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOKGUsIFwiaWZyYW1lXCIpID8gZS5jb250ZW50RG9jdW1lbnQgOiAoTihlLCBcInRlbXBsYXRlXCIpICYmIChlID0gZS5jb250ZW50IHx8IGUpLCB3Lm1lcmdlKFtdLCBlLmNoaWxkTm9kZXMpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdy5mbltlXSA9IGZ1bmN0aW9uIChuLCByKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gdy5tYXAodGhpcywgdCwgbik7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlVudGlsXCIgIT09IGUuc2xpY2UoLTUpICYmIChyID0gbiksIHIgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgciAmJiAoaSA9IHcuZmlsdGVyKHIsIGkpKSwgdGhpcy5sZW5ndGggPiAxICYmIChPW2VdIHx8IHcudW5pcXVlU29ydChpKSwgSC50ZXN0KGUpICYmIGkucmV2ZXJzZSgpKSwgdGhpcy5wdXNoU3RhY2soaSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBNID0gL1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nO1xyXG5cclxuICAgIGZ1bmN0aW9uIFIoZSkge1xyXG4gICAgICAgIHZhciB0ID0ge307XHJcbiAgICAgICAgcmV0dXJuIHcuZWFjaChlLm1hdGNoKE0pIHx8IFtdLCBmdW5jdGlvbiAoZSwgbikge1xyXG4gICAgICAgICAgICB0W25dID0gITBcclxuICAgICAgICB9KSwgdFxyXG4gICAgfVxyXG4gICAgdy5DYWxsYmFja3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBcInN0cmluZ1wiID09IHR5cGVvZiBlID8gUihlKSA6IHcuZXh0ZW5kKHt9LCBlKTtcclxuICAgICAgICB2YXIgdCwgbiwgciwgaSwgbyA9IFtdLFxyXG4gICAgICAgICAgICBhID0gW10sXHJcbiAgICAgICAgICAgIHMgPSAtMSxcclxuICAgICAgICAgICAgdSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IGkgfHwgZS5vbmNlLCByID0gdCA9ICEwOyBhLmxlbmd0aDsgcyA9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9IGEuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKytzIDwgby5sZW5ndGgpICExID09PSBvW3NdLmFwcGx5KG5bMF0sIG5bMV0pICYmIGUuc3RvcE9uRmFsc2UgJiYgKHMgPSBvLmxlbmd0aCwgbiA9ICExKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5tZW1vcnkgfHwgKG4gPSAhMSksIHQgPSAhMSwgaSAmJiAobyA9IG4gPyBbXSA6IFwiXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGwgPSB7XHJcbiAgICAgICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbyAmJiAobiAmJiAhdCAmJiAocyA9IG8ubGVuZ3RoIC0gMSwgYS5wdXNoKG4pKSwgZnVuY3Rpb24gdChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHcuZWFjaChuLCBmdW5jdGlvbiAobiwgcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZyhyKSA/IGUudW5pcXVlICYmIGwuaGFzKHIpIHx8IG8ucHVzaChyKSA6IHIgJiYgci5sZW5ndGggJiYgXCJzdHJpbmdcIiAhPT0geChyKSAmJiB0KHIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfShhcmd1bWVudHMpLCBuICYmICF0ICYmIHUoKSksIHRoaXNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdy5lYWNoKGFyZ3VtZW50cywgZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgobiA9IHcuaW5BcnJheSh0LCBvLCBuKSkgPiAtMSkgby5zcGxpY2UobiwgMSksIG4gPD0gcyAmJiBzLS1cclxuICAgICAgICAgICAgICAgICAgICB9KSwgdGhpc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhhczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZSA/IHcuaW5BcnJheShlLCBvKSA+IC0xIDogby5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbyAmJiAobyA9IFtdKSwgdGhpc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA9IGEgPSBbXSwgbyA9IG4gPSBcIlwiLCB0aGlzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIW9cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsb2NrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPSBhID0gW10sIG4gfHwgdCB8fCAobyA9IG4gPSBcIlwiKSwgdGhpc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxvY2tlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaXJlV2l0aDogZnVuY3Rpb24gKGUsIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSB8fCAobiA9IFtlLCAobiA9IG4gfHwgW10pLnNsaWNlID8gbi5zbGljZSgpIDogbl0sIGEucHVzaChuKSwgdCB8fCB1KCkpLCB0aGlzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmlyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsLmZpcmVXaXRoKHRoaXMsIGFyZ3VtZW50cyksIHRoaXNcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmaXJlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBJKGUpIHtcclxuICAgICAgICByZXR1cm4gZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFcoZSkge1xyXG4gICAgICAgIHRocm93IGVcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkKGUsIHQsIG4sIHIpIHtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBlICYmIGcoaSA9IGUucHJvbWlzZSkgPyBpLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pIDogZSAmJiBnKGkgPSBlLnRoZW4pID8gaS5jYWxsKGUsIHQsIG4pIDogdC5hcHBseSh2b2lkIDAsIFtlXS5zbGljZShyKSlcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIG4uYXBwbHkodm9pZCAwLCBbZV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdy5leHRlbmQoe1xyXG4gICAgICAgIERlZmVycmVkOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IFtcclxuICAgICAgICAgICAgICAgICAgICBbXCJub3RpZnlcIiwgXCJwcm9ncmVzc1wiLCB3LkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwgdy5DYWxsYmFja3MoXCJtZW1vcnlcIiksIDJdLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInJlc29sdmVcIiwgXCJkb25lXCIsIHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIHcuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIDAsIFwicmVzb2x2ZWRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgW1wicmVqZWN0XCIsIFwiZmFpbFwiLCB3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCB3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCAxLCBcInJlamVjdGVkXCJdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgciA9IFwicGVuZGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgaSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gclxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWx3YXlzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkudGhlbihudWxsLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGlwZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcuRGVmZXJyZWQoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHcuZWFjaChuLCBmdW5jdGlvbiAobiwgcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gZyhlW3JbNF1dKSAmJiBlW3JbNF1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bclsxXV0oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGkgJiYgaS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlICYmIGcoZS5wcm9taXNlKSA/IGUucHJvbWlzZSgpLnByb2dyZXNzKHQubm90aWZ5KS5kb25lKHQucmVzb2x2ZSkuZmFpbCh0LnJlamVjdCkgOiB0W3JbMF0gKyBcIldpdGhcIl0odGhpcywgaSA/IFtlXSA6IGFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnByb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHQsIHIsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gYSh0LCBuLCByLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGFyZ3VtZW50cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlLCBsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA8IG8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlID0gci5hcHBseShzLCB1KSkgPT09IG4ucHJvbWlzZSgpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBlICYmIChcIm9iamVjdFwiID09IHR5cGVvZiBlIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSkgJiYgZS50aGVuLCBnKGwpID8gaSA/IGwuY2FsbChlLCBhKG8sIG4sIEksIGkpLCBhKG8sIG4sIFcsIGkpKSA6IChvKyssIGwuY2FsbChlLCBhKG8sIG4sIEksIGkpLCBhKG8sIG4sIFcsIGkpLCBhKG8sIG4sIEksIG4ubm90aWZ5V2l0aCkpKSA6IChyICE9PSBJICYmIChzID0gdm9pZCAwLCB1ID0gW2VdKSwgKGkgfHwgbi5yZXNvbHZlV2l0aCkocywgdSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBpID8gbCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdy5EZWZlcnJlZC5leGNlcHRpb25Ib29rICYmIHcuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLCBjLnN0YWNrVHJhY2UpLCB0ICsgMSA+PSBvICYmIChyICE9PSBXICYmIChzID0gdm9pZCAwLCB1ID0gW2VdKSwgbi5yZWplY3RXaXRoKHMsIHUpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPyBjKCkgOiAody5EZWZlcnJlZC5nZXRTdGFja0hvb2sgJiYgKGMuc3RhY2tUcmFjZSA9IHcuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLCBlLnNldFRpbWVvdXQoYykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHcuRGVmZXJyZWQoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5bMF1bM10uYWRkKGEoMCwgZSwgZyhpKSA/IGkgOiBJLCBlLm5vdGlmeVdpdGgpKSwgblsxXVszXS5hZGQoYSgwLCBlLCBnKHQpID8gdCA6IEkpKSwgblsyXVszXS5hZGQoYSgwLCBlLCBnKHIpID8gciA6IFcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5wcm9taXNlKClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9IGUgPyB3LmV4dGVuZChlLCBpKSA6IGlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbyA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gdy5lYWNoKG4sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHRbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHRbNV07XHJcbiAgICAgICAgICAgICAgICBpW3RbMV1dID0gYS5hZGQsIHMgJiYgYS5hZGQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHIgPSBzXHJcbiAgICAgICAgICAgICAgICB9LCBuWzMgLSBlXVsyXS5kaXNhYmxlLCBuWzMgLSBlXVszXS5kaXNhYmxlLCBuWzBdWzJdLmxvY2ssIG5bMF1bM10ubG9jayksIGEuYWRkKHRbM10uZmlyZSksIG9bdFswXV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9bdFswXSArIFwiV2l0aFwiXSh0aGlzID09PSBvID8gdm9pZCAwIDogdGhpcywgYXJndW1lbnRzKSwgdGhpc1xyXG4gICAgICAgICAgICAgICAgfSwgb1t0WzBdICsgXCJXaXRoXCJdID0gYS5maXJlV2l0aFxyXG4gICAgICAgICAgICB9KSwgaS5wcm9taXNlKG8pLCB0ICYmIHQuY2FsbChvLCBvKSwgb1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2hlbjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBhcmd1bWVudHMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgbiA9IHQsXHJcbiAgICAgICAgICAgICAgICByID0gQXJyYXkobiksXHJcbiAgICAgICAgICAgICAgICBpID0gby5jYWxsKGFyZ3VtZW50cyksXHJcbiAgICAgICAgICAgICAgICBhID0gdy5EZWZlcnJlZCgpLFxyXG4gICAgICAgICAgICAgICAgcyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJbZV0gPSB0aGlzLCBpW2VdID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBvLmNhbGwoYXJndW1lbnRzKSA6IG4sIC0tdCB8fCBhLnJlc29sdmVXaXRoKHIsIGkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHQgPD0gMSAmJiAoJChlLCBhLmRvbmUocyhuKSkucmVzb2x2ZSwgYS5yZWplY3QsICF0KSwgXCJwZW5kaW5nXCIgPT09IGEuc3RhdGUoKSB8fCBnKGlbbl0gJiYgaVtuXS50aGVuKSkpIHJldHVybiBhLnRoZW4oKTtcclxuICAgICAgICAgICAgd2hpbGUgKG4tLSkgJChpW25dLCBzKG4pLCBhLnJlamVjdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhLnByb21pc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIEIgPSAvXihFdmFsfEludGVybmFsfFJhbmdlfFJlZmVyZW5jZXxTeW50YXh8VHlwZXxVUkkpRXJyb3IkLztcclxuICAgIHcuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayA9IGZ1bmN0aW9uICh0LCBuKSB7XHJcbiAgICAgICAgZS5jb25zb2xlICYmIGUuY29uc29sZS53YXJuICYmIHQgJiYgQi50ZXN0KHQubmFtZSkgJiYgZS5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIHQubWVzc2FnZSwgdC5zdGFjaywgbilcclxuICAgIH0sIHcucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGUuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIHZhciBGID0gdy5EZWZlcnJlZCgpO1xyXG4gICAgdy5mbi5yZWFkeSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIEYudGhlbihlKVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHcucmVhZHlFeGNlcHRpb24oZSlcclxuICAgICAgICB9KSwgdGhpc1xyXG4gICAgfSwgdy5leHRlbmQoe1xyXG4gICAgICAgIGlzUmVhZHk6ICExLFxyXG4gICAgICAgIHJlYWR5V2FpdDogMSxcclxuICAgICAgICByZWFkeTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgKCEwID09PSBlID8gLS13LnJlYWR5V2FpdCA6IHcuaXNSZWFkeSkgfHwgKHcuaXNSZWFkeSA9ICEwLCAhMCAhPT0gZSAmJiAtLXcucmVhZHlXYWl0ID4gMCB8fCBGLnJlc29sdmVXaXRoKHIsIFt3XSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcucmVhZHkudGhlbiA9IEYudGhlbjtcclxuXHJcbiAgICBmdW5jdGlvbiBfKCkge1xyXG4gICAgICAgIHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgXyksIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgXyksIHcucmVhZHkoKVxyXG4gICAgfVxyXG4gICAgXCJjb21wbGV0ZVwiID09PSByLnJlYWR5U3RhdGUgfHwgXCJsb2FkaW5nXCIgIT09IHIucmVhZHlTdGF0ZSAmJiAhci5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgPyBlLnNldFRpbWVvdXQody5yZWFkeSkgOiAoci5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBfKSwgZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBfKSk7XHJcbiAgICB2YXIgeiA9IGZ1bmN0aW9uIChlLCB0LCBuLCByLCBpLCBvLCBhKSB7XHJcbiAgICAgICAgICAgIHZhciBzID0gMCxcclxuICAgICAgICAgICAgICAgIHUgPSBlLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGwgPSBudWxsID09IG47XHJcbiAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09PSB4KG4pKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gITA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHMgaW4gbikgeihlLCB0LCBzLCBuW3NdLCAhMCwgbywgYSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IHIgJiYgKGkgPSAhMCwgZyhyKSB8fCAoYSA9ICEwKSwgbCAmJiAoYSA/ICh0LmNhbGwoZSwgciksIHQgPSBudWxsKSA6IChsID0gdCwgdCA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuY2FsbCh3KGUpLCBuKVxyXG4gICAgICAgICAgICAgICAgfSkpLCB0KSlcclxuICAgICAgICAgICAgICAgIGZvciAoOyBzIDwgdTsgcysrKSB0KGVbc10sIG4sIGEgPyByIDogci5jYWxsKGVbc10sIHMsIHQoZVtzXSwgbikpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGkgPyBlIDogbCA/IHQuY2FsbChlKSA6IHUgPyB0KGVbMF0sIG4pIDogb1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgWCA9IC9eLW1zLS8sXHJcbiAgICAgICAgVSA9IC8tKFthLXpdKS9nO1xyXG5cclxuICAgIGZ1bmN0aW9uIFYoZSwgdCkge1xyXG4gICAgICAgIHJldHVybiB0LnRvVXBwZXJDYXNlKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBHKGUpIHtcclxuICAgICAgICByZXR1cm4gZS5yZXBsYWNlKFgsIFwibXMtXCIpLnJlcGxhY2UoVSwgVilcclxuICAgIH1cclxuICAgIHZhciBZID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gMSA9PT0gZS5ub2RlVHlwZSB8fCA5ID09PSBlLm5vZGVUeXBlIHx8ICErZS5ub2RlVHlwZVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBRKCkge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kbyA9IHcuZXhwYW5kbyArIFEudWlkKytcclxuICAgIH1cclxuICAgIFEudWlkID0gMSwgUS5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgY2FjaGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZVt0aGlzLmV4cGFuZG9dO1xyXG4gICAgICAgICAgICByZXR1cm4gdCB8fCAodCA9IHt9LCBZKGUpICYmIChlLm5vZGVUeXBlID8gZVt0aGlzLmV4cGFuZG9dID0gdCA6IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0aGlzLmV4cGFuZG8sIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0LFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxyXG4gICAgICAgICAgICB9KSkpLCB0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHZhciByLCBpID0gdGhpcy5jYWNoZShlKTtcclxuICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQpIGlbRyh0KV0gPSBuO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBmb3IgKHIgaW4gdCkgaVtHKHIpXSA9IHRbcl07XHJcbiAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IHQgPyB0aGlzLmNhY2hlKGUpIDogZVt0aGlzLmV4cGFuZG9dICYmIGVbdGhpcy5leHBhbmRvXVtHKHQpXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWNjZXNzOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSB0IHx8IHQgJiYgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdCAmJiB2b2lkIDAgPT09IG4gPyB0aGlzLmdldChlLCB0KSA6ICh0aGlzLnNldChlLCB0LCBuKSwgdm9pZCAwICE9PSBuID8gbiA6IHQpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuLCByID0gZVt0aGlzLmV4cGFuZG9dO1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSByKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9ICh0ID0gQXJyYXkuaXNBcnJheSh0KSA/IHQubWFwKEcpIDogKHQgPSBHKHQpKSBpbiByID8gW3RdIDogdC5tYXRjaChNKSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChuLS0pIGRlbGV0ZSByW3Rbbl1dXHJcbiAgICAgICAgICAgICAgICB9KHZvaWQgMCA9PT0gdCB8fCB3LmlzRW1wdHlPYmplY3QocikpICYmIChlLm5vZGVUeXBlID8gZVt0aGlzLmV4cGFuZG9dID0gdm9pZCAwIDogZGVsZXRlIGVbdGhpcy5leHBhbmRvXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFzRGF0YTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBlW3RoaXMuZXhwYW5kb107XHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IHQgJiYgIXcuaXNFbXB0eU9iamVjdCh0KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgSiA9IG5ldyBRLFxyXG4gICAgICAgIEsgPSBuZXcgUSxcclxuICAgICAgICBaID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxyXG4gICAgICAgIGVlID0gL1tBLVpdL2c7XHJcblxyXG4gICAgZnVuY3Rpb24gdGUoZSkge1xyXG4gICAgICAgIHJldHVybiBcInRydWVcIiA9PT0gZSB8fCBcImZhbHNlXCIgIT09IGUgJiYgKFwibnVsbFwiID09PSBlID8gbnVsbCA6IGUgPT09ICtlICsgXCJcIiA/ICtlIDogWi50ZXN0KGUpID8gSlNPTi5wYXJzZShlKSA6IGUpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmUoZSwgdCwgbikge1xyXG4gICAgICAgIHZhciByO1xyXG4gICAgICAgIGlmICh2b2lkIDAgPT09IG4gJiYgMSA9PT0gZS5ub2RlVHlwZSlcclxuICAgICAgICAgICAgaWYgKHIgPSBcImRhdGEtXCIgKyB0LnJlcGxhY2UoZWUsIFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksIFwic3RyaW5nXCIgPT0gdHlwZW9mIChuID0gZS5nZXRBdHRyaWJ1dGUocikpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4gPSB0ZShuKVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgICAgICAgICAgIEsuc2V0KGUsIHQsIG4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBuID0gdm9pZCAwO1xyXG4gICAgICAgIHJldHVybiBuXHJcbiAgICB9XHJcbiAgICB3LmV4dGVuZCh7XHJcbiAgICAgICAgaGFzRGF0YTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEsuaGFzRGF0YShlKSB8fCBKLmhhc0RhdGEoZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBLLmFjY2VzcyhlLCB0LCBuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlRGF0YTogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgSy5yZW1vdmUoZSwgdClcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9kYXRhOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gSi5hY2Nlc3MoZSwgdCwgbilcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9yZW1vdmVEYXRhOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICBKLnJlbW92ZShlLCB0KVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB3LmZuLmV4dGVuZCh7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4sIHIsIGksIG8gPSB0aGlzWzBdLFxyXG4gICAgICAgICAgICAgICAgYSA9IG8gJiYgby5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggJiYgKGkgPSBLLmdldChvKSwgMSA9PT0gby5ub2RlVHlwZSAmJiAhSi5nZXQobywgXCJoYXNEYXRhQXR0cnNcIikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9IGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChuLS0pIGFbbl0gJiYgMCA9PT0gKHIgPSBhW25dLm5hbWUpLmluZGV4T2YoXCJkYXRhLVwiKSAmJiAociA9IEcoci5zbGljZSg1KSksIG5lKG8sIHIsIGlbcl0pKTtcclxuICAgICAgICAgICAgICAgICAgICBKLnNldChvLCBcImhhc0RhdGFBdHRyc1wiLCAhMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgPyB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgSy5zZXQodGhpcywgZSlcclxuICAgICAgICAgICAgfSkgOiB6KHRoaXMsIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbjtcclxuICAgICAgICAgICAgICAgIGlmIChvICYmIHZvaWQgMCA9PT0gdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IChuID0gSy5nZXQobywgZSkpKSByZXR1cm4gbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSAobiA9IG5lKG8sIGUpKSkgcmV0dXJuIG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEsuc2V0KHRoaXMsIGUsIHQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LCBudWxsLCB0LCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgITApXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVEYXRhOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIEsucmVtb3ZlKHRoaXMsIGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZXh0ZW5kKHtcclxuICAgICAgICBxdWV1ZTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgdmFyIHI7XHJcbiAgICAgICAgICAgIGlmIChlKSByZXR1cm4gdCA9ICh0IHx8IFwiZnhcIikgKyBcInF1ZXVlXCIsIHIgPSBKLmdldChlLCB0KSwgbiAmJiAoIXIgfHwgQXJyYXkuaXNBcnJheShuKSA/IHIgPSBKLmFjY2VzcyhlLCB0LCB3Lm1ha2VBcnJheShuKSkgOiByLnB1c2gobikpLCByIHx8IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXF1ZXVlOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB0ID0gdCB8fCBcImZ4XCI7XHJcbiAgICAgICAgICAgIHZhciBuID0gdy5xdWV1ZShlLCB0KSxcclxuICAgICAgICAgICAgICAgIHIgPSBuLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIGkgPSBuLnNoaWZ0KCksXHJcbiAgICAgICAgICAgICAgICBvID0gdy5fcXVldWVIb29rcyhlLCB0KSxcclxuICAgICAgICAgICAgICAgIGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdy5kZXF1ZXVlKGUsIHQpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcImlucHJvZ3Jlc3NcIiA9PT0gaSAmJiAoaSA9IG4uc2hpZnQoKSwgci0tKSwgaSAmJiAoXCJmeFwiID09PSB0ICYmIG4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksIGRlbGV0ZSBvLnN0b3AsIGkuY2FsbChlLCBhLCBvKSksICFyICYmIG8gJiYgby5lbXB0eS5maXJlKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9xdWV1ZUhvb2tzOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IHQgKyBcInF1ZXVlSG9va3NcIjtcclxuICAgICAgICAgICAgcmV0dXJuIEouZ2V0KGUsIG4pIHx8IEouYWNjZXNzKGUsIG4sIHtcclxuICAgICAgICAgICAgICAgIGVtcHR5OiB3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSi5yZW1vdmUoZSwgW3QgKyBcInF1ZXVlXCIsIG5dKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5mbi5leHRlbmQoe1xyXG4gICAgICAgIHF1ZXVlOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB2YXIgbiA9IDI7XHJcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiICE9IHR5cGVvZiBlICYmICh0ID0gZSwgZSA9IFwiZnhcIiwgbi0tKSwgYXJndW1lbnRzLmxlbmd0aCA8IG4gPyB3LnF1ZXVlKHRoaXNbMF0sIGUpIDogdm9pZCAwID09PSB0ID8gdGhpcyA6IHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHcucXVldWUodGhpcywgZSwgdCk7XHJcbiAgICAgICAgICAgICAgICB3Ll9xdWV1ZUhvb2tzKHRoaXMsIGUpLCBcImZ4XCIgPT09IGUgJiYgXCJpbnByb2dyZXNzXCIgIT09IG5bMF0gJiYgdy5kZXF1ZXVlKHRoaXMsIGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZXF1ZXVlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHcuZGVxdWV1ZSh0aGlzLCBlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJRdWV1ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWUoZSB8fCBcImZ4XCIsIFtdKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvbWlzZTogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4sIHIgPSAxLFxyXG4gICAgICAgICAgICAgICAgaSA9IHcuRGVmZXJyZWQoKSxcclxuICAgICAgICAgICAgICAgIG8gPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgYSA9IHRoaXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXIgfHwgaS5yZXNvbHZlV2l0aChvLCBbb10pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcInN0cmluZ1wiICE9IHR5cGVvZiBlICYmICh0ID0gZSwgZSA9IHZvaWQgMCksIGUgPSBlIHx8IFwiZnhcIjtcclxuICAgICAgICAgICAgd2hpbGUgKGEtLSkobiA9IEouZ2V0KG9bYV0sIGUgKyBcInF1ZXVlSG9va3NcIikpICYmIG4uZW1wdHkgJiYgKHIrKywgbi5lbXB0eS5hZGQocykpO1xyXG4gICAgICAgICAgICByZXR1cm4gcygpLCBpLnByb21pc2UodClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciByZSA9IC9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxcclxuICAgICAgICBpZSA9IG5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiICsgcmUgKyBcIikoW2EteiVdKikkXCIsIFwiaVwiKSxcclxuICAgICAgICBvZSA9IFtcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiXSxcclxuICAgICAgICBhZSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIiA9PT0gKGUgPSB0IHx8IGUpLnN0eWxlLmRpc3BsYXkgfHwgXCJcIiA9PT0gZS5zdHlsZS5kaXNwbGF5ICYmIHcuY29udGFpbnMoZS5vd25lckRvY3VtZW50LCBlKSAmJiBcIm5vbmVcIiA9PT0gdy5jc3MoZSwgXCJkaXNwbGF5XCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZSA9IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XHJcbiAgICAgICAgICAgIHZhciBpLCBvLCBhID0ge307XHJcbiAgICAgICAgICAgIGZvciAobyBpbiB0KSBhW29dID0gZS5zdHlsZVtvXSwgZS5zdHlsZVtvXSA9IHRbb107XHJcbiAgICAgICAgICAgIGkgPSBuLmFwcGx5KGUsIHIgfHwgW10pO1xyXG4gICAgICAgICAgICBmb3IgKG8gaW4gdCkgZS5zdHlsZVtvXSA9IGFbb107XHJcbiAgICAgICAgICAgIHJldHVybiBpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB1ZShlLCB0LCBuLCByKSB7XHJcbiAgICAgICAgdmFyIGksIG8sIGEgPSAyMCxcclxuICAgICAgICAgICAgcyA9IHIgPyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gci5jdXIoKVxyXG4gICAgICAgICAgICB9IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHcuY3NzKGUsIHQsIFwiXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHUgPSBzKCksXHJcbiAgICAgICAgICAgIGwgPSBuICYmIG5bM10gfHwgKHcuY3NzTnVtYmVyW3RdID8gXCJcIiA6IFwicHhcIiksXHJcbiAgICAgICAgICAgIGMgPSAody5jc3NOdW1iZXJbdF0gfHwgXCJweFwiICE9PSBsICYmICt1KSAmJiBpZS5leGVjKHcuY3NzKGUsIHQpKTtcclxuICAgICAgICBpZiAoYyAmJiBjWzNdICE9PSBsKSB7XHJcbiAgICAgICAgICAgIHUgLz0gMiwgbCA9IGwgfHwgY1szXSwgYyA9ICt1IHx8IDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChhLS0pIHcuc3R5bGUoZSwgdCwgYyArIGwpLCAoMSAtIG8pICogKDEgLSAobyA9IHMoKSAvIHUgfHwgLjUpKSA8PSAwICYmIChhID0gMCksIGMgLz0gbztcclxuICAgICAgICAgICAgYyAqPSAyLCB3LnN0eWxlKGUsIHQsIGMgKyBsKSwgbiA9IG4gfHwgW11cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG4gJiYgKGMgPSArYyB8fCArdSB8fCAwLCBpID0gblsxXSA/IGMgKyAoblsxXSArIDEpICogblsyXSA6ICtuWzJdLCByICYmIChyLnVuaXQgPSBsLCByLnN0YXJ0ID0gYywgci5lbmQgPSBpKSksIGlcclxuICAgIH1cclxuICAgIHZhciBsZSA9IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNlKGUpIHtcclxuICAgICAgICB2YXIgdCwgbiA9IGUub3duZXJEb2N1bWVudCxcclxuICAgICAgICAgICAgciA9IGUubm9kZU5hbWUsXHJcbiAgICAgICAgICAgIGkgPSBsZVtyXTtcclxuICAgICAgICByZXR1cm4gaSB8fCAodCA9IG4uYm9keS5hcHBlbmRDaGlsZChuLmNyZWF0ZUVsZW1lbnQocikpLCBpID0gdy5jc3ModCwgXCJkaXNwbGF5XCIpLCB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksIFwibm9uZVwiID09PSBpICYmIChpID0gXCJibG9ja1wiKSwgbGVbcl0gPSBpLCBpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZlKGUsIHQpIHtcclxuICAgICAgICBmb3IgKHZhciBuLCByLCBpID0gW10sIG8gPSAwLCBhID0gZS5sZW5ndGg7IG8gPCBhOyBvKyspKHIgPSBlW29dKS5zdHlsZSAmJiAobiA9IHIuc3R5bGUuZGlzcGxheSwgdCA/IChcIm5vbmVcIiA9PT0gbiAmJiAoaVtvXSA9IEouZ2V0KHIsIFwiZGlzcGxheVwiKSB8fCBudWxsLCBpW29dIHx8IChyLnN0eWxlLmRpc3BsYXkgPSBcIlwiKSksIFwiXCIgPT09IHIuc3R5bGUuZGlzcGxheSAmJiBhZShyKSAmJiAoaVtvXSA9IGNlKHIpKSkgOiBcIm5vbmVcIiAhPT0gbiAmJiAoaVtvXSA9IFwibm9uZVwiLCBKLnNldChyLCBcImRpc3BsYXlcIiwgbikpKTtcclxuICAgICAgICBmb3IgKG8gPSAwOyBvIDwgYTsgbysrKSBudWxsICE9IGlbb10gJiYgKGVbb10uc3R5bGUuZGlzcGxheSA9IGlbb10pO1xyXG4gICAgICAgIHJldHVybiBlXHJcbiAgICB9XHJcbiAgICB3LmZuLmV4dGVuZCh7XHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmUodGhpcywgITApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmZSh0aGlzKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJib29sZWFuXCIgPT0gdHlwZW9mIGUgPyBlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKSA6IHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhZSh0aGlzKSA/IHcodGhpcykuc2hvdygpIDogdyh0aGlzKS5oaWRlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBwZSA9IC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLFxyXG4gICAgICAgIGRlID0gLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pLFxyXG4gICAgICAgIGhlID0gL14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxcclxuICAgICAgICBnZSA9IHtcclxuICAgICAgICAgICAgb3B0aW9uOiBbMSwgXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsIFwiPC9zZWxlY3Q+XCJdLFxyXG4gICAgICAgICAgICB0aGVhZDogWzEsIFwiPHRhYmxlPlwiLCBcIjwvdGFibGU+XCJdLFxyXG4gICAgICAgICAgICBjb2w6IFsyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSxcclxuICAgICAgICAgICAgdHI6IFsyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiXSxcclxuICAgICAgICAgICAgdGQ6IFszLCBcIjx0YWJsZT48dGJvZHk+PHRyPlwiLCBcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxcclxuICAgICAgICAgICAgX2RlZmF1bHQ6IFswLCBcIlwiLCBcIlwiXVxyXG4gICAgICAgIH07XHJcbiAgICBnZS5vcHRncm91cCA9IGdlLm9wdGlvbiwgZ2UudGJvZHkgPSBnZS50Zm9vdCA9IGdlLmNvbGdyb3VwID0gZ2UuY2FwdGlvbiA9IGdlLnRoZWFkLCBnZS50aCA9IGdlLnRkO1xyXG5cclxuICAgIGZ1bmN0aW9uIHllKGUsIHQpIHtcclxuICAgICAgICB2YXIgbjtcclxuICAgICAgICByZXR1cm4gbiA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPyBlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQgfHwgXCIqXCIpIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgZS5xdWVyeVNlbGVjdG9yQWxsID8gZS5xdWVyeVNlbGVjdG9yQWxsKHQgfHwgXCIqXCIpIDogW10sIHZvaWQgMCA9PT0gdCB8fCB0ICYmIE4oZSwgdCkgPyB3Lm1lcmdlKFtlXSwgbikgOiBuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdmUoZSwgdCkge1xyXG4gICAgICAgIGZvciAodmFyIG4gPSAwLCByID0gZS5sZW5ndGg7IG4gPCByOyBuKyspIEouc2V0KGVbbl0sIFwiZ2xvYmFsRXZhbFwiLCAhdCB8fCBKLmdldCh0W25dLCBcImdsb2JhbEV2YWxcIikpXHJcbiAgICB9XHJcbiAgICB2YXIgbWUgPSAvPHwmIz9cXHcrOy87XHJcblxyXG4gICAgZnVuY3Rpb24geGUoZSwgdCwgbiwgciwgaSkge1xyXG4gICAgICAgIGZvciAodmFyIG8sIGEsIHMsIHUsIGwsIGMsIGYgPSB0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgcCA9IFtdLCBkID0gMCwgaCA9IGUubGVuZ3RoOyBkIDwgaDsgZCsrKVxyXG4gICAgICAgICAgICBpZiAoKG8gPSBlW2RdKSB8fCAwID09PSBvKVxyXG4gICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHgobykpIHcubWVyZ2UocCwgby5ub2RlVHlwZSA/IFtvXSA6IG8pO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWUudGVzdChvKSkge1xyXG4gICAgICAgICAgICBhID0gYSB8fCBmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksIHMgPSAoZGUuZXhlYyhvKSB8fCBbXCJcIiwgXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksIHUgPSBnZVtzXSB8fCBnZS5fZGVmYXVsdCwgYS5pbm5lckhUTUwgPSB1WzFdICsgdy5odG1sUHJlZmlsdGVyKG8pICsgdVsyXSwgYyA9IHVbMF07XHJcbiAgICAgICAgICAgIHdoaWxlIChjLS0pIGEgPSBhLmxhc3RDaGlsZDtcclxuICAgICAgICAgICAgdy5tZXJnZShwLCBhLmNoaWxkTm9kZXMpLCAoYSA9IGYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQgPSBcIlwiXHJcbiAgICAgICAgfSBlbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtcclxuICAgICAgICBmLnRleHRDb250ZW50ID0gXCJcIiwgZCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKG8gPSBwW2QrK10pXHJcbiAgICAgICAgICAgIGlmIChyICYmIHcuaW5BcnJheShvLCByKSA+IC0xKSBpICYmIGkucHVzaChvKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAobCA9IHcuY29udGFpbnMoby5vd25lckRvY3VtZW50LCBvKSwgYSA9IHllKGYuYXBwZW5kQ2hpbGQobyksIFwic2NyaXB0XCIpLCBsICYmIHZlKGEpLCBuKSB7XHJcbiAgICAgICAgICAgIGMgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAobyA9IGFbYysrXSkgaGUudGVzdChvLnR5cGUgfHwgXCJcIikgJiYgbi5wdXNoKG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmXHJcbiAgICB9ISBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSByLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLFxyXG4gICAgICAgICAgICB0ID0gci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIiksIHQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIiksIHQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRcIiksIGUuYXBwZW5kQ2hpbGQodCksIGguY2hlY2tDbG9uZSA9IGUuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLCBlLmlubmVySFRNTCA9IFwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLCBoLm5vQ2xvbmVDaGVja2VkID0gISFlLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZVxyXG4gICAgfSgpO1xyXG4gICAgdmFyIGJlID0gci5kb2N1bWVudEVsZW1lbnQsXHJcbiAgICAgICAgd2UgPSAvXmtleS8sXHJcbiAgICAgICAgVGUgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sXHJcbiAgICAgICAgQ2UgPSAvXihbXi5dKikoPzpcXC4oLispfCkvO1xyXG5cclxuICAgIGZ1bmN0aW9uIEVlKCkge1xyXG4gICAgICAgIHJldHVybiAhMFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGtlKCkge1xyXG4gICAgICAgIHJldHVybiAhMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNlKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiByLmFjdGl2ZUVsZW1lbnRcclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERlKGUsIHQsIG4sIHIsIGksIG8pIHtcclxuICAgICAgICB2YXIgYSwgcztcclxuICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2YgdCkge1xyXG4gICAgICAgICAgICBcInN0cmluZ1wiICE9IHR5cGVvZiBuICYmIChyID0gciB8fCBuLCBuID0gdm9pZCAwKTtcclxuICAgICAgICAgICAgZm9yIChzIGluIHQpIERlKGUsIHMsIG4sIHIsIHRbc10sIG8pO1xyXG4gICAgICAgICAgICByZXR1cm4gZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobnVsbCA9PSByICYmIG51bGwgPT0gaSA/IChpID0gbiwgciA9IG4gPSB2b2lkIDApIDogbnVsbCA9PSBpICYmIChcInN0cmluZ1wiID09IHR5cGVvZiBuID8gKGkgPSByLCByID0gdm9pZCAwKSA6IChpID0gciwgciA9IG4sIG4gPSB2b2lkIDApKSwgITEgPT09IGkpIGkgPSBrZTtcclxuICAgICAgICBlbHNlIGlmICghaSkgcmV0dXJuIGU7XHJcbiAgICAgICAgcmV0dXJuIDEgPT09IG8gJiYgKGEgPSBpLCAoaSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3KCkub2ZmKGUpLCBhLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcclxuICAgICAgICB9KS5ndWlkID0gYS5ndWlkIHx8IChhLmd1aWQgPSB3Lmd1aWQrKykpLCBlLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3LmV2ZW50LmFkZCh0aGlzLCB0LCBpLCByLCBuKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3LmV2ZW50ID0ge1xyXG4gICAgICAgIGdsb2JhbDoge30sXHJcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAoZSwgdCwgbiwgciwgaSkge1xyXG4gICAgICAgICAgICB2YXIgbywgYSwgcywgdSwgbCwgYywgZiwgcCwgZCwgaCwgZywgeSA9IEouZ2V0KGUpO1xyXG4gICAgICAgICAgICBpZiAoeSkge1xyXG4gICAgICAgICAgICAgICAgbi5oYW5kbGVyICYmIChuID0gKG8gPSBuKS5oYW5kbGVyLCBpID0gby5zZWxlY3RvciksIGkgJiYgdy5maW5kLm1hdGNoZXNTZWxlY3RvcihiZSwgaSksIG4uZ3VpZCB8fCAobi5ndWlkID0gdy5ndWlkKyspLCAodSA9IHkuZXZlbnRzKSB8fCAodSA9IHkuZXZlbnRzID0ge30pLCAoYSA9IHkuaGFuZGxlKSB8fCAoYSA9IHkuaGFuZGxlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdyAmJiB3LmV2ZW50LnRyaWdnZXJlZCAhPT0gdC50eXBlID8gdy5ldmVudC5kaXNwYXRjaC5hcHBseShlLCBhcmd1bWVudHMpIDogdm9pZCAwXHJcbiAgICAgICAgICAgICAgICB9KSwgbCA9ICh0ID0gKHQgfHwgXCJcIikubWF0Y2goTSkgfHwgW1wiXCJdKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobC0tKSBkID0gZyA9IChzID0gQ2UuZXhlYyh0W2xdKSB8fCBbXSlbMV0sIGggPSAoc1syXSB8fCBcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLCBkICYmIChmID0gdy5ldmVudC5zcGVjaWFsW2RdIHx8IHt9LCBkID0gKGkgPyBmLmRlbGVnYXRlVHlwZSA6IGYuYmluZFR5cGUpIHx8IGQsIGYgPSB3LmV2ZW50LnNwZWNpYWxbZF0gfHwge30sIGMgPSB3LmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogZCxcclxuICAgICAgICAgICAgICAgICAgICBvcmlnVHlwZTogZyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IG4sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpZDogbi5ndWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRzQ29udGV4dDogaSAmJiB3LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBoLmpvaW4oXCIuXCIpXHJcbiAgICAgICAgICAgICAgICB9LCBvKSwgKHAgPSB1W2RdKSB8fCAoKHAgPSB1W2RdID0gW10pLmRlbGVnYXRlQ291bnQgPSAwLCBmLnNldHVwICYmICExICE9PSBmLnNldHVwLmNhbGwoZSwgciwgaCwgYSkgfHwgZS5hZGRFdmVudExpc3RlbmVyICYmIGUuYWRkRXZlbnRMaXN0ZW5lcihkLCBhKSksIGYuYWRkICYmIChmLmFkZC5jYWxsKGUsIGMpLCBjLmhhbmRsZXIuZ3VpZCB8fCAoYy5oYW5kbGVyLmd1aWQgPSBuLmd1aWQpKSwgaSA/IHAuc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLCAwLCBjKSA6IHAucHVzaChjKSwgdy5ldmVudC5nbG9iYWxbZF0gPSAhMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoZSwgdCwgbiwgciwgaSkge1xyXG4gICAgICAgICAgICB2YXIgbywgYSwgcywgdSwgbCwgYywgZiwgcCwgZCwgaCwgZywgeSA9IEouaGFzRGF0YShlKSAmJiBKLmdldChlKTtcclxuICAgICAgICAgICAgaWYgKHkgJiYgKHUgPSB5LmV2ZW50cykpIHtcclxuICAgICAgICAgICAgICAgIGwgPSAodCA9ICh0IHx8IFwiXCIpLm1hdGNoKE0pIHx8IFtcIlwiXSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGwtLSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAocyA9IENlLmV4ZWModFtsXSkgfHwgW10sIGQgPSBnID0gc1sxXSwgaCA9IChzWzJdIHx8IFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksIGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHcuZXZlbnQuc3BlY2lhbFtkXSB8fCB7fSwgcCA9IHVbZCA9IChyID8gZi5kZWxlZ2F0ZVR5cGUgOiBmLmJpbmRUeXBlKSB8fCBkXSB8fCBbXSwgcyA9IHNbMl0gJiYgbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiICsgaC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikgKyBcIihcXFxcLnwkKVwiKSwgYSA9IG8gPSBwLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG8tLSkgYyA9IHBbb10sICFpICYmIGcgIT09IGMub3JpZ1R5cGUgfHwgbiAmJiBuLmd1aWQgIT09IGMuZ3VpZCB8fCBzICYmICFzLnRlc3QoYy5uYW1lc3BhY2UpIHx8IHIgJiYgciAhPT0gYy5zZWxlY3RvciAmJiAoXCIqKlwiICE9PSByIHx8ICFjLnNlbGVjdG9yKSB8fCAocC5zcGxpY2UobywgMSksIGMuc2VsZWN0b3IgJiYgcC5kZWxlZ2F0ZUNvdW50LS0sIGYucmVtb3ZlICYmIGYucmVtb3ZlLmNhbGwoZSwgYykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhICYmICFwLmxlbmd0aCAmJiAoZi50ZWFyZG93biAmJiAhMSAhPT0gZi50ZWFyZG93bi5jYWxsKGUsIGgsIHkuaGFuZGxlKSB8fCB3LnJlbW92ZUV2ZW50KGUsIGQsIHkuaGFuZGxlKSwgZGVsZXRlIHVbZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZCBpbiB1KSB3LmV2ZW50LnJlbW92ZShlLCBkICsgdFtsXSwgbiwgciwgITApO1xyXG4gICAgICAgICAgICAgICAgdy5pc0VtcHR5T2JqZWN0KHUpICYmIEoucmVtb3ZlKGUsIFwiaGFuZGxlIGV2ZW50c1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB3LmV2ZW50LmZpeChlKSxcclxuICAgICAgICAgICAgICAgIG4sIHIsIGksIG8sIGEsIHMsIHUgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBsID0gKEouZ2V0KHRoaXMsIFwiZXZlbnRzXCIpIHx8IHt9KVt0LnR5cGVdIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYyA9IHcuZXZlbnQuc3BlY2lhbFt0LnR5cGVdIHx8IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHVbMF0gPSB0LCBuID0gMTsgbiA8IGFyZ3VtZW50cy5sZW5ndGg7IG4rKykgdVtuXSA9IGFyZ3VtZW50c1tuXTtcclxuICAgICAgICAgICAgaWYgKHQuZGVsZWdhdGVUYXJnZXQgPSB0aGlzLCAhYy5wcmVEaXNwYXRjaCB8fCAhMSAhPT0gYy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsIHQpKSB7XHJcbiAgICAgICAgICAgICAgICBzID0gdy5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsIHQsIGwpLCBuID0gMDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgobyA9IHNbbisrXSkgJiYgIXQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuY3VycmVudFRhcmdldCA9IG8uZWxlbSwgciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChhID0gby5oYW5kbGVyc1tyKytdKSAmJiAhdC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSB0LnJuYW1lc3BhY2UgJiYgIXQucm5hbWVzcGFjZS50ZXN0KGEubmFtZXNwYWNlKSB8fCAodC5oYW5kbGVPYmogPSBhLCB0LmRhdGEgPSBhLmRhdGEsIHZvaWQgMCAhPT0gKGkgPSAoKHcuZXZlbnQuc3BlY2lhbFthLm9yaWdUeXBlXSB8fCB7fSkuaGFuZGxlIHx8IGEuaGFuZGxlcikuYXBwbHkoby5lbGVtLCB1KSkgJiYgITEgPT09ICh0LnJlc3VsdCA9IGkpICYmICh0LnByZXZlbnREZWZhdWx0KCksIHQuc3RvcFByb3BhZ2F0aW9uKCkpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMucG9zdERpc3BhdGNoICYmIGMucG9zdERpc3BhdGNoLmNhbGwodGhpcywgdCksIHQucmVzdWx0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZXJzOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB2YXIgbiwgciwgaSwgbywgYSwgcyA9IFtdLFxyXG4gICAgICAgICAgICAgICAgdSA9IHQuZGVsZWdhdGVDb3VudCxcclxuICAgICAgICAgICAgICAgIGwgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKHUgJiYgbC5ub2RlVHlwZSAmJiAhKFwiY2xpY2tcIiA9PT0gZS50eXBlICYmIGUuYnV0dG9uID49IDEpKVxyXG4gICAgICAgICAgICAgICAgZm9yICg7IGwgIT09IHRoaXM7IGwgPSBsLnBhcmVudE5vZGUgfHwgdGhpcylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoMSA9PT0gbC5ub2RlVHlwZSAmJiAoXCJjbGlja1wiICE9PSBlLnR5cGUgfHwgITAgIT09IGwuZGlzYWJsZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobyA9IFtdLCBhID0ge30sIG4gPSAwOyBuIDwgdTsgbisrKSB2b2lkIDAgPT09IGFbaSA9IChyID0gdFtuXSkuc2VsZWN0b3IgKyBcIiBcIl0gJiYgKGFbaV0gPSByLm5lZWRzQ29udGV4dCA/IHcoaSwgdGhpcykuaW5kZXgobCkgPiAtMSA6IHcuZmluZChpLCB0aGlzLCBudWxsLCBbbF0pLmxlbmd0aCksIGFbaV0gJiYgby5wdXNoKHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLmxlbmd0aCAmJiBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbTogbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzOiBvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSByZXR1cm4gbCA9IHRoaXMsIHUgPCB0Lmxlbmd0aCAmJiBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZWxlbTogbCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXJzOiB0LnNsaWNlKHUpXHJcbiAgICAgICAgICAgIH0pLCBzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRQcm9wOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkody5FdmVudC5wcm90b3R5cGUsIGUsIHtcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcclxuICAgICAgICAgICAgICAgIGdldDogZyh0KSA/IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50KSByZXR1cm4gdCh0aGlzLm9yaWdpbmFsRXZlbnQpXHJcbiAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQpIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbZV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZml4OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZVt3LmV4cGFuZG9dID8gZSA6IG5ldyB3LkV2ZW50KGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcGVjaWFsOiB7XHJcbiAgICAgICAgICAgIGxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIG5vQnViYmxlOiAhMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb2N1czoge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzICE9PSBTZSgpICYmIHRoaXMuZm9jdXMpIHJldHVybiB0aGlzLmZvY3VzKCksICExXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGVUeXBlOiBcImZvY3VzaW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBibHVyOiB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMgPT09IFNlKCkgJiYgdGhpcy5ibHVyKSByZXR1cm4gdGhpcy5ibHVyKCksICExXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGVUeXBlOiBcImZvY3Vzb3V0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpY2s6IHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXCJjaGVja2JveFwiID09PSB0aGlzLnR5cGUgJiYgdGhpcy5jbGljayAmJiBOKHRoaXMsIFwiaW5wdXRcIikpIHJldHVybiB0aGlzLmNsaWNrKCksICExXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgX2RlZmF1bHQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE4oZS50YXJnZXQsIFwiYVwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiZWZvcmV1bmxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIHBvc3REaXNwYXRjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2b2lkIDAgIT09IGUucmVzdWx0ICYmIGUub3JpZ2luYWxFdmVudCAmJiAoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZS5yZXN1bHQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB3LnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgJiYgZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsIG4pXHJcbiAgICB9LCB3LkV2ZW50ID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2Ygdy5FdmVudCkpIHJldHVybiBuZXcgdy5FdmVudChlLCB0KTtcclxuICAgICAgICBlICYmIGUudHlwZSA/ICh0aGlzLm9yaWdpbmFsRXZlbnQgPSBlLCB0aGlzLnR5cGUgPSBlLnR5cGUsIHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gZS5kZWZhdWx0UHJldmVudGVkIHx8IHZvaWQgMCA9PT0gZS5kZWZhdWx0UHJldmVudGVkICYmICExID09PSBlLnJldHVyblZhbHVlID8gRWUgOiBrZSwgdGhpcy50YXJnZXQgPSBlLnRhcmdldCAmJiAzID09PSBlLnRhcmdldC5ub2RlVHlwZSA/IGUudGFyZ2V0LnBhcmVudE5vZGUgOiBlLnRhcmdldCwgdGhpcy5jdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LCB0aGlzLnJlbGF0ZWRUYXJnZXQgPSBlLnJlbGF0ZWRUYXJnZXQpIDogdGhpcy50eXBlID0gZSwgdCAmJiB3LmV4dGVuZCh0aGlzLCB0KSwgdGhpcy50aW1lU3RhbXAgPSBlICYmIGUudGltZVN0YW1wIHx8IERhdGUubm93KCksIHRoaXNbdy5leHBhbmRvXSA9ICEwXHJcbiAgICB9LCB3LkV2ZW50LnByb3RvdHlwZSA9IHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcjogdy5FdmVudCxcclxuICAgICAgICBpc0RlZmF1bHRQcmV2ZW50ZWQ6IGtlLFxyXG4gICAgICAgIGlzUHJvcGFnYXRpb25TdG9wcGVkOiBrZSxcclxuICAgICAgICBpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDoga2UsXHJcbiAgICAgICAgaXNTaW11bGF0ZWQ6ICExLFxyXG4gICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IEVlLCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICYmIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xyXG4gICAgICAgICAgICB0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gRWUsIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgJiYgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xyXG4gICAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gRWUsIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgJiYgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSwgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH1cclxuICAgIH0sIHcuZWFjaCh7XHJcbiAgICAgICAgYWx0S2V5OiAhMCxcclxuICAgICAgICBidWJibGVzOiAhMCxcclxuICAgICAgICBjYW5jZWxhYmxlOiAhMCxcclxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogITAsXHJcbiAgICAgICAgY3RybEtleTogITAsXHJcbiAgICAgICAgZGV0YWlsOiAhMCxcclxuICAgICAgICBldmVudFBoYXNlOiAhMCxcclxuICAgICAgICBtZXRhS2V5OiAhMCxcclxuICAgICAgICBwYWdlWDogITAsXHJcbiAgICAgICAgcGFnZVk6ICEwLFxyXG4gICAgICAgIHNoaWZ0S2V5OiAhMCxcclxuICAgICAgICB2aWV3OiAhMCxcclxuICAgICAgICBcImNoYXJcIjogITAsXHJcbiAgICAgICAgY2hhckNvZGU6ICEwLFxyXG4gICAgICAgIGtleTogITAsXHJcbiAgICAgICAga2V5Q29kZTogITAsXHJcbiAgICAgICAgYnV0dG9uOiAhMCxcclxuICAgICAgICBidXR0b25zOiAhMCxcclxuICAgICAgICBjbGllbnRYOiAhMCxcclxuICAgICAgICBjbGllbnRZOiAhMCxcclxuICAgICAgICBvZmZzZXRYOiAhMCxcclxuICAgICAgICBvZmZzZXRZOiAhMCxcclxuICAgICAgICBwb2ludGVySWQ6ICEwLFxyXG4gICAgICAgIHBvaW50ZXJUeXBlOiAhMCxcclxuICAgICAgICBzY3JlZW5YOiAhMCxcclxuICAgICAgICBzY3JlZW5ZOiAhMCxcclxuICAgICAgICB0YXJnZXRUb3VjaGVzOiAhMCxcclxuICAgICAgICB0b0VsZW1lbnQ6ICEwLFxyXG4gICAgICAgIHRvdWNoZXM6ICEwLFxyXG4gICAgICAgIHdoaWNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IGUuYnV0dG9uO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBlLndoaWNoICYmIHdlLnRlc3QoZS50eXBlKSA/IG51bGwgIT0gZS5jaGFyQ29kZSA/IGUuY2hhckNvZGUgOiBlLmtleUNvZGUgOiAhZS53aGljaCAmJiB2b2lkIDAgIT09IHQgJiYgVGUudGVzdChlLnR5cGUpID8gMSAmIHQgPyAxIDogMiAmIHQgPyAzIDogNCAmIHQgPyAyIDogMCA6IGUud2hpY2hcclxuICAgICAgICB9XHJcbiAgICB9LCB3LmV2ZW50LmFkZFByb3ApLCB3LmVhY2goe1xyXG4gICAgICAgIG1vdXNlZW50ZXI6IFwibW91c2VvdmVyXCIsXHJcbiAgICAgICAgbW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxyXG4gICAgICAgIHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxyXG4gICAgICAgIHBvaW50ZXJsZWF2ZTogXCJwb2ludGVyb3V0XCJcclxuICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdy5ldmVudC5zcGVjaWFsW2VdID0ge1xyXG4gICAgICAgICAgICBkZWxlZ2F0ZVR5cGU6IHQsXHJcbiAgICAgICAgICAgIGJpbmRUeXBlOiB0LFxyXG4gICAgICAgICAgICBoYW5kbGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbiwgciA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IGUucmVsYXRlZFRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBvID0gZS5oYW5kbGVPYmo7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAmJiAoaSA9PT0gciB8fCB3LmNvbnRhaW5zKHIsIGkpKSB8fCAoZS50eXBlID0gby5vcmlnVHlwZSwgbiA9IG8uaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBlLnR5cGUgPSB0KSwgblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZm4uZXh0ZW5kKHtcclxuICAgICAgICBvbjogZnVuY3Rpb24gKGUsIHQsIG4sIHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIERlKHRoaXMsIGUsIHQsIG4sIHIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbmU6IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBEZSh0aGlzLCBlLCB0LCBuLCByLCAxKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2ZmOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICB2YXIgciwgaTtcclxuICAgICAgICAgICAgaWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCAmJiBlLmhhbmRsZU9iaikgcmV0dXJuIHIgPSBlLmhhbmRsZU9iaiwgdyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2UgPyByLm9yaWdUeXBlICsgXCIuXCIgKyByLm5hbWVzcGFjZSA6IHIub3JpZ1R5cGUsIHIuc2VsZWN0b3IsIHIuaGFuZGxlciksIHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgaW4gZSkgdGhpcy5vZmYoaSwgdCwgZVtpXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAhMSAhPT0gdCAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgfHwgKG4gPSB0LCB0ID0gdm9pZCAwKSwgITEgPT09IG4gJiYgKG4gPSBrZSksIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3LmV2ZW50LnJlbW92ZSh0aGlzLCBlLCBuLCB0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIE5lID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksXHJcbiAgICAgICAgQWUgPSAvPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSxcclxuICAgICAgICBqZSA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXHJcbiAgICAgICAgcWUgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7XHJcblxyXG4gICAgZnVuY3Rpb24gTGUoZSwgdCkge1xyXG4gICAgICAgIHJldHVybiBOKGUsIFwidGFibGVcIikgJiYgTigxMSAhPT0gdC5ub2RlVHlwZSA/IHQgOiB0LmZpcnN0Q2hpbGQsIFwidHJcIikgPyB3KGUpLmNoaWxkcmVuKFwidGJvZHlcIilbMF0gfHwgZSA6IGVcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBIZShlKSB7XHJcbiAgICAgICAgcmV0dXJuIGUudHlwZSA9IChudWxsICE9PSBlLmdldEF0dHJpYnV0ZShcInR5cGVcIikpICsgXCIvXCIgKyBlLnR5cGUsIGVcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBPZShlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidHJ1ZS9cIiA9PT0gKGUudHlwZSB8fCBcIlwiKS5zbGljZSgwLCA1KSA/IGUudHlwZSA9IGUudHlwZS5zbGljZSg1KSA6IGUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSwgZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFBlKGUsIHQpIHtcclxuICAgICAgICB2YXIgbiwgciwgaSwgbywgYSwgcywgdSwgbDtcclxuICAgICAgICBpZiAoMSA9PT0gdC5ub2RlVHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoSi5oYXNEYXRhKGUpICYmIChvID0gSi5hY2Nlc3MoZSksIGEgPSBKLnNldCh0LCBvKSwgbCA9IG8uZXZlbnRzKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGEuaGFuZGxlLCBhLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZm9yIChpIGluIGwpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuID0gMCwgciA9IGxbaV0ubGVuZ3RoOyBuIDwgcjsgbisrKSB3LmV2ZW50LmFkZCh0LCBpLCBsW2ldW25dKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEsuaGFzRGF0YShlKSAmJiAocyA9IEsuYWNjZXNzKGUpLCB1ID0gdy5leHRlbmQoe30sIHMpLCBLLnNldCh0LCB1KSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTWUoZSwgdCkge1xyXG4gICAgICAgIHZhciBuID0gdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIFwiaW5wdXRcIiA9PT0gbiAmJiBwZS50ZXN0KGUudHlwZSkgPyB0LmNoZWNrZWQgPSBlLmNoZWNrZWQgOiBcImlucHV0XCIgIT09IG4gJiYgXCJ0ZXh0YXJlYVwiICE9PSBuIHx8ICh0LmRlZmF1bHRWYWx1ZSA9IGUuZGVmYXVsdFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJlKGUsIHQsIG4sIHIpIHtcclxuICAgICAgICB0ID0gYS5hcHBseShbXSwgdCk7XHJcbiAgICAgICAgdmFyIGksIG8sIHMsIHUsIGwsIGMsIGYgPSAwLFxyXG4gICAgICAgICAgICBwID0gZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGQgPSBwIC0gMSxcclxuICAgICAgICAgICAgeSA9IHRbMF0sXHJcbiAgICAgICAgICAgIHYgPSBnKHkpO1xyXG4gICAgICAgIGlmICh2IHx8IHAgPiAxICYmIFwic3RyaW5nXCIgPT0gdHlwZW9mIHkgJiYgIWguY2hlY2tDbG9uZSAmJiBqZS50ZXN0KHkpKSByZXR1cm4gZS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHZhciBvID0gZS5lcShpKTtcclxuICAgICAgICAgICAgdiAmJiAodFswXSA9IHkuY2FsbCh0aGlzLCBpLCBvLmh0bWwoKSkpLCBSZShvLCB0LCBuLCByKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChwICYmIChpID0geGUodCwgZVswXS5vd25lckRvY3VtZW50LCAhMSwgZSwgciksIG8gPSBpLmZpcnN0Q2hpbGQsIDEgPT09IGkuY2hpbGROb2Rlcy5sZW5ndGggJiYgKGkgPSBvKSwgbyB8fCByKSkge1xyXG4gICAgICAgICAgICBmb3IgKHUgPSAocyA9IHcubWFwKHllKGksIFwic2NyaXB0XCIpLCBIZSkpLmxlbmd0aDsgZiA8IHA7IGYrKykgbCA9IGksIGYgIT09IGQgJiYgKGwgPSB3LmNsb25lKGwsICEwLCAhMCksIHUgJiYgdy5tZXJnZShzLCB5ZShsLCBcInNjcmlwdFwiKSkpLCBuLmNhbGwoZVtmXSwgbCwgZik7XHJcbiAgICAgICAgICAgIGlmICh1KVxyXG4gICAgICAgICAgICAgICAgZm9yIChjID0gc1tzLmxlbmd0aCAtIDFdLm93bmVyRG9jdW1lbnQsIHcubWFwKHMsIE9lKSwgZiA9IDA7IGYgPCB1OyBmKyspIGwgPSBzW2ZdLCBoZS50ZXN0KGwudHlwZSB8fCBcIlwiKSAmJiAhSi5hY2Nlc3MobCwgXCJnbG9iYWxFdmFsXCIpICYmIHcuY29udGFpbnMoYywgbCkgJiYgKGwuc3JjICYmIFwibW9kdWxlXCIgIT09IChsLnR5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA/IHcuX2V2YWxVcmwgJiYgdy5fZXZhbFVybChsLnNyYykgOiBtKGwudGV4dENvbnRlbnQucmVwbGFjZShxZSwgXCJcIiksIGMsIGwpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEllKGUsIHQsIG4pIHtcclxuICAgICAgICBmb3IgKHZhciByLCBpID0gdCA/IHcuZmlsdGVyKHQsIGUpIDogZSwgbyA9IDA7IG51bGwgIT0gKHIgPSBpW29dKTsgbysrKSBuIHx8IDEgIT09IHIubm9kZVR5cGUgfHwgdy5jbGVhbkRhdGEoeWUocikpLCByLnBhcmVudE5vZGUgJiYgKG4gJiYgdy5jb250YWlucyhyLm93bmVyRG9jdW1lbnQsIHIpICYmIHZlKHllKHIsIFwic2NyaXB0XCIpKSwgci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtcclxuICAgICAgICByZXR1cm4gZVxyXG4gICAgfVxyXG4gICAgdy5leHRlbmQoe1xyXG4gICAgICAgIGh0bWxQcmVmaWx0ZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlLnJlcGxhY2UoTmUsIFwiPCQxPjwvJDI+XCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9uZTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgdmFyIHIsIGksIG8sIGEsIHMgPSBlLmNsb25lTm9kZSghMCksXHJcbiAgICAgICAgICAgICAgICB1ID0gdy5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsIGUpO1xyXG4gICAgICAgICAgICBpZiAoIShoLm5vQ2xvbmVDaGVja2VkIHx8IDEgIT09IGUubm9kZVR5cGUgJiYgMTEgIT09IGUubm9kZVR5cGUgfHwgdy5pc1hNTERvYyhlKSkpXHJcbiAgICAgICAgICAgICAgICBmb3IgKGEgPSB5ZShzKSwgciA9IDAsIGkgPSAobyA9IHllKGUpKS5sZW5ndGg7IHIgPCBpOyByKyspIE1lKG9bcl0sIGFbcl0pO1xyXG4gICAgICAgICAgICBpZiAodClcclxuICAgICAgICAgICAgICAgIGlmIChuKVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobyA9IG8gfHwgeWUoZSksIGEgPSBhIHx8IHllKHMpLCByID0gMCwgaSA9IG8ubGVuZ3RoOyByIDwgaTsgcisrKSBQZShvW3JdLCBhW3JdKTtcclxuICAgICAgICAgICAgICAgIGVsc2UgUGUoZSwgcyk7XHJcbiAgICAgICAgICAgIHJldHVybiAoYSA9IHllKHMsIFwic2NyaXB0XCIpKS5sZW5ndGggPiAwICYmIHZlKGEsICF1ICYmIHllKGUsIFwic2NyaXB0XCIpKSwgc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYW5EYXRhOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0LCBuLCByLCBpID0gdy5ldmVudC5zcGVjaWFsLCBvID0gMDsgdm9pZCAwICE9PSAobiA9IGVbb10pOyBvKyspXHJcbiAgICAgICAgICAgICAgICBpZiAoWShuKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ID0gbltKLmV4cGFuZG9dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmV2ZW50cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAociBpbiB0LmV2ZW50cykgaVtyXSA/IHcuZXZlbnQucmVtb3ZlKG4sIHIpIDogdy5yZW1vdmVFdmVudChuLCByLCB0LmhhbmRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5bSi5leHBhbmRvXSA9IHZvaWQgMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBuW0suZXhwYW5kb10gJiYgKG5bSy5leHBhbmRvXSA9IHZvaWQgMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5mbi5leHRlbmQoe1xyXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEllKHRoaXMsIGUsICEwKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSWUodGhpcywgZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB6KHRoaXMsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSBlID8gdy50ZXh0KHRoaXMpIDogdGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIDEgIT09IHRoaXMubm9kZVR5cGUgJiYgMTEgIT09IHRoaXMubm9kZVR5cGUgJiYgOSAhPT0gdGhpcy5ub2RlVHlwZSB8fCAodGhpcy50ZXh0Q29udGVudCA9IGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LCBudWxsLCBlLCBhcmd1bWVudHMubGVuZ3RoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwZW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZSh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAxICE9PSB0aGlzLm5vZGVUeXBlICYmIDExICE9PSB0aGlzLm5vZGVUeXBlICYmIDkgIT09IHRoaXMubm9kZVR5cGUgfHwgTGUodGhpcywgZSkuYXBwZW5kQ2hpbGQoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXBlbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICgxID09PSB0aGlzLm5vZGVUeXBlIHx8IDExID09PSB0aGlzLm5vZGVUeXBlIHx8IDkgPT09IHRoaXMubm9kZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IExlKHRoaXMsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuaW5zZXJ0QmVmb3JlKGUsIHQuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJlZm9yZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmUodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgdGhpcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFmdGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZSh0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUgJiYgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCB0aGlzLm5leHRTaWJsaW5nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZSwgdCA9IDA7IG51bGwgIT0gKGUgPSB0aGlzW3RdKTsgdCsrKSAxID09PSBlLm5vZGVUeXBlICYmICh3LmNsZWFuRGF0YSh5ZShlLCAhMSkpLCBlLnRleHRDb250ZW50ID0gXCJcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9uZTogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUgPSBudWxsICE9IGUgJiYgZSwgdCA9IG51bGwgPT0gdCA/IGUgOiB0LCB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdy5jbG9uZSh0aGlzLCBlLCB0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaHRtbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHoodGhpcywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpc1swXSB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICBuID0gMCxcclxuICAgICAgICAgICAgICAgICAgICByID0gdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBlICYmIDEgPT09IHQubm9kZVR5cGUpIHJldHVybiB0LmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBlICYmICFBZS50ZXN0KGUpICYmICFnZVsoZGUuZXhlYyhlKSB8fCBbXCJcIiwgXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZSA9IHcuaHRtbFByZWZpbHRlcihlKTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgbiA8IHI7IG4rKykgMSA9PT0gKHQgPSB0aGlzW25dIHx8IHt9KS5ub2RlVHlwZSAmJiAody5jbGVhbkRhdGEoeWUodCwgITEpKSwgdC5pbm5lckhUTUwgPSBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdCAmJiB0aGlzLmVtcHR5KCkuYXBwZW5kKGUpXHJcbiAgICAgICAgICAgIH0sIG51bGwsIGUsIGFyZ3VtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm4gUmUodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB3LmluQXJyYXkodGhpcywgZSkgPCAwICYmICh3LmNsZWFuRGF0YSh5ZSh0aGlzKSksIG4gJiYgbi5yZXBsYWNlQ2hpbGQodCwgdGhpcykpXHJcbiAgICAgICAgICAgIH0sIGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZWFjaCh7XHJcbiAgICAgICAgYXBwZW5kVG86IFwiYXBwZW5kXCIsXHJcbiAgICAgICAgcHJlcGVuZFRvOiBcInByZXBlbmRcIixcclxuICAgICAgICBpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXHJcbiAgICAgICAgaW5zZXJ0QWZ0ZXI6IFwiYWZ0ZXJcIixcclxuICAgICAgICByZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcclxuICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdy5mbltlXSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4sIHIgPSBbXSwgaSA9IHcoZSksIG8gPSBpLmxlbmd0aCAtIDEsIGEgPSAwOyBhIDw9IG87IGErKykgbiA9IGEgPT09IG8gPyB0aGlzIDogdGhpcy5jbG9uZSghMCksIHcoaVthXSlbdF0obiksIHMuYXBwbHkociwgbi5nZXQoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhyKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIFdlID0gbmV3IFJlZ0V4cChcIl4oXCIgKyByZSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiKSxcclxuICAgICAgICAkZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgICAgICAgICByZXR1cm4gbiAmJiBuLm9wZW5lciB8fCAobiA9IGUpLCBuLmdldENvbXB1dGVkU3R5bGUodClcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJlID0gbmV3IFJlZ0V4cChvZS5qb2luKFwifFwiKSwgXCJpXCIpO1xyXG4gICAgISBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gdCgpIHtcclxuICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgIGwuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLCBjLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIiwgYmUuYXBwZW5kQ2hpbGQobCkuYXBwZW5kQ2hpbGQoYyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9IGUuZ2V0Q29tcHV0ZWRTdHlsZShjKTtcclxuICAgICAgICAgICAgICAgIGkgPSBcIjElXCIgIT09IHQudG9wLCB1ID0gMTIgPT09IG4odC5tYXJnaW5MZWZ0KSwgYy5zdHlsZS5yaWdodCA9IFwiNjAlXCIsIHMgPSAzNiA9PT0gbih0LnJpZ2h0KSwgbyA9IDM2ID09PSBuKHQud2lkdGgpLCBjLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiLCBhID0gMzYgPT09IGMub2Zmc2V0V2lkdGggfHwgXCJhYnNvbHV0ZVwiLCBiZS5yZW1vdmVDaGlsZChsKSwgYyA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpLCBvLCBhLCBzLCB1LCBsID0gci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgICAgICBjID0gci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGMuc3R5bGUgJiYgKGMuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcImNvbnRlbnQtYm94XCIsIGMuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiXCIsIGguY2xlYXJDbG9uZVN0eWxlID0gXCJjb250ZW50LWJveFwiID09PSBjLnN0eWxlLmJhY2tncm91bmRDbGlwLCB3LmV4dGVuZChoLCB7XHJcbiAgICAgICAgICAgIGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCgpLCBvXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBpeGVsQm94U3R5bGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCgpLCBzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0KCksIGlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVsaWFibGVNYXJnaW5MZWZ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCgpLCB1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGJveFNpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0KCksIGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIEZlKGUsIHQsIG4pIHtcclxuICAgICAgICB2YXIgciwgaSwgbywgYSwgcyA9IGUuc3R5bGU7XHJcbiAgICAgICAgcmV0dXJuIChuID0gbiB8fCAkZShlKSkgJiYgKFwiXCIgIT09IChhID0gbi5nZXRQcm9wZXJ0eVZhbHVlKHQpIHx8IG5bdF0pIHx8IHcuY29udGFpbnMoZS5vd25lckRvY3VtZW50LCBlKSB8fCAoYSA9IHcuc3R5bGUoZSwgdCkpLCAhaC5waXhlbEJveFN0eWxlcygpICYmIFdlLnRlc3QoYSkgJiYgQmUudGVzdCh0KSAmJiAociA9IHMud2lkdGgsIGkgPSBzLm1pbldpZHRoLCBvID0gcy5tYXhXaWR0aCwgcy5taW5XaWR0aCA9IHMubWF4V2lkdGggPSBzLndpZHRoID0gYSwgYSA9IG4ud2lkdGgsIHMud2lkdGggPSByLCBzLm1pbldpZHRoID0gaSwgcy5tYXhXaWR0aCA9IG8pKSwgdm9pZCAwICE9PSBhID8gYSArIFwiXCIgOiBhXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gX2UoZSwgdCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlKCkpIHJldHVybiAodGhpcy5nZXQgPSB0KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2V0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgemUgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXHJcbiAgICAgICAgWGUgPSAvXi0tLyxcclxuICAgICAgICBVZSA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBWZSA9IHtcclxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIEdlID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sXHJcbiAgICAgICAgWWUgPSByLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGU7XHJcblxyXG4gICAgZnVuY3Rpb24gUWUoZSkge1xyXG4gICAgICAgIGlmIChlIGluIFllKSByZXR1cm4gZTtcclxuICAgICAgICB2YXIgdCA9IGVbMF0udG9VcHBlckNhc2UoKSArIGUuc2xpY2UoMSksXHJcbiAgICAgICAgICAgIG4gPSBHZS5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKG4tLSlcclxuICAgICAgICAgICAgaWYgKChlID0gR2Vbbl0gKyB0KSBpbiBZZSkgcmV0dXJuIGVcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBKZShlKSB7XHJcbiAgICAgICAgdmFyIHQgPSB3LmNzc1Byb3BzW2VdO1xyXG4gICAgICAgIHJldHVybiB0IHx8ICh0ID0gdy5jc3NQcm9wc1tlXSA9IFFlKGUpIHx8IGUpLCB0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gS2UoZSwgdCwgbikge1xyXG4gICAgICAgIHZhciByID0gaWUuZXhlYyh0KTtcclxuICAgICAgICByZXR1cm4gciA/IE1hdGgubWF4KDAsIHJbMl0gLSAobiB8fCAwKSkgKyAoclszXSB8fCBcInB4XCIpIDogdFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFplKGUsIHQsIG4sIHIsIGksIG8pIHtcclxuICAgICAgICB2YXIgYSA9IFwid2lkdGhcIiA9PT0gdCA/IDEgOiAwLFxyXG4gICAgICAgICAgICBzID0gMCxcclxuICAgICAgICAgICAgdSA9IDA7XHJcbiAgICAgICAgaWYgKG4gPT09IChyID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSkgcmV0dXJuIDA7XHJcbiAgICAgICAgZm9yICg7IGEgPCA0OyBhICs9IDIpIFwibWFyZ2luXCIgPT09IG4gJiYgKHUgKz0gdy5jc3MoZSwgbiArIG9lW2FdLCAhMCwgaSkpLCByID8gKFwiY29udGVudFwiID09PSBuICYmICh1IC09IHcuY3NzKGUsIFwicGFkZGluZ1wiICsgb2VbYV0sICEwLCBpKSksIFwibWFyZ2luXCIgIT09IG4gJiYgKHUgLT0gdy5jc3MoZSwgXCJib3JkZXJcIiArIG9lW2FdICsgXCJXaWR0aFwiLCAhMCwgaSkpKSA6ICh1ICs9IHcuY3NzKGUsIFwicGFkZGluZ1wiICsgb2VbYV0sICEwLCBpKSwgXCJwYWRkaW5nXCIgIT09IG4gPyB1ICs9IHcuY3NzKGUsIFwiYm9yZGVyXCIgKyBvZVthXSArIFwiV2lkdGhcIiwgITAsIGkpIDogcyArPSB3LmNzcyhlLCBcImJvcmRlclwiICsgb2VbYV0gKyBcIldpZHRoXCIsICEwLCBpKSk7XHJcbiAgICAgICAgcmV0dXJuICFyICYmIG8gPj0gMCAmJiAodSArPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoZVtcIm9mZnNldFwiICsgdFswXS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKV0gLSBvIC0gdSAtIHMgLSAuNSkpKSwgdVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV0KGUsIHQsIG4pIHtcclxuICAgICAgICB2YXIgciA9ICRlKGUpLFxyXG4gICAgICAgICAgICBpID0gRmUoZSwgdCwgciksXHJcbiAgICAgICAgICAgIG8gPSBcImJvcmRlci1ib3hcIiA9PT0gdy5jc3MoZSwgXCJib3hTaXppbmdcIiwgITEsIHIpLFxyXG4gICAgICAgICAgICBhID0gbztcclxuICAgICAgICBpZiAoV2UudGVzdChpKSkge1xyXG4gICAgICAgICAgICBpZiAoIW4pIHJldHVybiBpO1xyXG4gICAgICAgICAgICBpID0gXCJhdXRvXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgPSBhICYmIChoLmJveFNpemluZ1JlbGlhYmxlKCkgfHwgaSA9PT0gZS5zdHlsZVt0XSksIChcImF1dG9cIiA9PT0gaSB8fCAhcGFyc2VGbG9hdChpKSAmJiBcImlubGluZVwiID09PSB3LmNzcyhlLCBcImRpc3BsYXlcIiwgITEsIHIpKSAmJiAoaSA9IGVbXCJvZmZzZXRcIiArIHRbMF0udG9VcHBlckNhc2UoKSArIHQuc2xpY2UoMSldLCBhID0gITApLCAoaSA9IHBhcnNlRmxvYXQoaSkgfHwgMCkgKyBaZShlLCB0LCBuIHx8IChvID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSwgYSwgciwgaSkgKyBcInB4XCJcclxuICAgIH1cclxuICAgIHcuZXh0ZW5kKHtcclxuICAgICAgICBjc3NIb29rczoge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBGZShlLCBcIm9wYWNpdHlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiID09PSBuID8gXCIxXCIgOiBuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjc3NOdW1iZXI6IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICEwLFxyXG4gICAgICAgICAgICBjb2x1bW5Db3VudDogITAsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAhMCxcclxuICAgICAgICAgICAgZmxleEdyb3c6ICEwLFxyXG4gICAgICAgICAgICBmbGV4U2hyaW5rOiAhMCxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogITAsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICEwLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAhMCxcclxuICAgICAgICAgICAgb3JkZXI6ICEwLFxyXG4gICAgICAgICAgICBvcnBoYW5zOiAhMCxcclxuICAgICAgICAgICAgd2lkb3dzOiAhMCxcclxuICAgICAgICAgICAgekluZGV4OiAhMCxcclxuICAgICAgICAgICAgem9vbTogITBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNzc1Byb3BzOiB7fSxcclxuICAgICAgICBzdHlsZTogZnVuY3Rpb24gKGUsIHQsIG4sIHIpIHtcclxuICAgICAgICAgICAgaWYgKGUgJiYgMyAhPT0gZS5ub2RlVHlwZSAmJiA4ICE9PSBlLm5vZGVUeXBlICYmIGUuc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBvLCBhLCBzID0gRyh0KSxcclxuICAgICAgICAgICAgICAgICAgICB1ID0gWGUudGVzdCh0KSxcclxuICAgICAgICAgICAgICAgICAgICBsID0gZS5zdHlsZTtcclxuICAgICAgICAgICAgICAgIGlmICh1IHx8ICh0ID0gSmUocykpLCBhID0gdy5jc3NIb29rc1t0XSB8fCB3LmNzc0hvb2tzW3NdLCB2b2lkIDAgPT09IG4pIHJldHVybiBhICYmIFwiZ2V0XCIgaW4gYSAmJiB2b2lkIDAgIT09IChpID0gYS5nZXQoZSwgITEsIHIpKSA/IGkgOiBsW3RdO1xyXG4gICAgICAgICAgICAgICAgXCJzdHJpbmdcIiA9PSAobyA9IHR5cGVvZiBuKSAmJiAoaSA9IGllLmV4ZWMobikpICYmIGlbMV0gJiYgKG4gPSB1ZShlLCB0LCBpKSwgbyA9IFwibnVtYmVyXCIpLCBudWxsICE9IG4gJiYgbiA9PT0gbiAmJiAoXCJudW1iZXJcIiA9PT0gbyAmJiAobiArPSBpICYmIGlbM10gfHwgKHcuY3NzTnVtYmVyW3NdID8gXCJcIiA6IFwicHhcIikpLCBoLmNsZWFyQ2xvbmVTdHlsZSB8fCBcIlwiICE9PSBuIHx8IDAgIT09IHQuaW5kZXhPZihcImJhY2tncm91bmRcIikgfHwgKGxbdF0gPSBcImluaGVyaXRcIiksIGEgJiYgXCJzZXRcIiBpbiBhICYmIHZvaWQgMCA9PT0gKG4gPSBhLnNldChlLCBuLCByKSkgfHwgKHUgPyBsLnNldFByb3BlcnR5KHQsIG4pIDogbFt0XSA9IG4pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjc3M6IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XHJcbiAgICAgICAgICAgIHZhciBpLCBvLCBhLCBzID0gRyh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIFhlLnRlc3QodCkgfHwgKHQgPSBKZShzKSksIChhID0gdy5jc3NIb29rc1t0XSB8fCB3LmNzc0hvb2tzW3NdKSAmJiBcImdldFwiIGluIGEgJiYgKGkgPSBhLmdldChlLCAhMCwgbikpLCB2b2lkIDAgPT09IGkgJiYgKGkgPSBGZShlLCB0LCByKSksIFwibm9ybWFsXCIgPT09IGkgJiYgdCBpbiBWZSAmJiAoaSA9IFZlW3RdKSwgXCJcIiA9PT0gbiB8fCBuID8gKG8gPSBwYXJzZUZsb2F0KGkpLCAhMCA9PT0gbiB8fCBpc0Zpbml0ZShvKSA/IG8gfHwgMCA6IGkpIDogaVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB3LmVhY2goW1wiaGVpZ2h0XCIsIFwid2lkdGhcIl0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdy5jc3NIb29rc1t0XSA9IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZSwgbiwgcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4pIHJldHVybiAhemUudGVzdCh3LmNzcyhlLCBcImRpc3BsYXlcIikpIHx8IGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggJiYgZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA/IGV0KGUsIHQsIHIpIDogc2UoZSwgVWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXQoZSwgdCwgcilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGUsIG4sIHIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpLCBvID0gJGUoZSksXHJcbiAgICAgICAgICAgICAgICAgICAgYSA9IFwiYm9yZGVyLWJveFwiID09PSB3LmNzcyhlLCBcImJveFNpemluZ1wiLCAhMSwgbyksXHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IHIgJiYgWmUoZSwgdCwgciwgYSwgbyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYSAmJiBoLnNjcm9sbGJveFNpemUoKSA9PT0gby5wb3NpdGlvbiAmJiAocyAtPSBNYXRoLmNlaWwoZVtcIm9mZnNldFwiICsgdFswXS50b1VwcGVyQ2FzZSgpICsgdC5zbGljZSgxKV0gLSBwYXJzZUZsb2F0KG9bdF0pIC0gWmUoZSwgdCwgXCJib3JkZXJcIiwgITEsIG8pIC0gLjUpKSwgcyAmJiAoaSA9IGllLmV4ZWMobikpICYmIFwicHhcIiAhPT0gKGlbM10gfHwgXCJweFwiKSAmJiAoZS5zdHlsZVt0XSA9IG4sIG4gPSB3LmNzcyhlLCB0KSksIEtlKGUsIG4sIHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gX2UoaC5yZWxpYWJsZU1hcmdpbkxlZnQsIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgaWYgKHQpIHJldHVybiAocGFyc2VGbG9hdChGZShlLCBcIm1hcmdpbkxlZnRcIikpIHx8IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHNlKGUsIHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogMFxyXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4gICAgICAgIH0pKSArIFwicHhcIlxyXG4gICAgfSksIHcuZWFjaCh7XHJcbiAgICAgICAgbWFyZ2luOiBcIlwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiXCIsXHJcbiAgICAgICAgYm9yZGVyOiBcIldpZHRoXCJcclxuICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdy5jc3NIb29rc1tlICsgdF0gPSB7XHJcbiAgICAgICAgICAgIGV4cGFuZDogZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHIgPSAwLCBpID0ge30sIG8gPSBcInN0cmluZ1wiID09IHR5cGVvZiBuID8gbi5zcGxpdChcIiBcIikgOiBbbl07IHIgPCA0OyByKyspIGlbZSArIG9lW3JdICsgdF0gPSBvW3JdIHx8IG9bciAtIDJdIHx8IG9bMF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgXCJtYXJnaW5cIiAhPT0gZSAmJiAody5jc3NIb29rc1tlICsgdF0uc2V0ID0gS2UpXHJcbiAgICB9KSwgdy5mbi5leHRlbmQoe1xyXG4gICAgICAgIGNzczogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHoodGhpcywgZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgICAgIHZhciByLCBpLCBvID0ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgYSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAociA9ICRlKGUpLCBpID0gdC5sZW5ndGg7IGEgPCBpOyBhKyspIG9bdFthXV0gPSB3LmNzcyhlLCB0W2FdLCAhMSwgcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IG4gPyB3LnN0eWxlKGUsIHQsIG4pIDogdy5jc3MoZSwgdClcclxuICAgICAgICAgICAgfSwgZSwgdCwgYXJndW1lbnRzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdHQoZSwgdCwgbiwgciwgaSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgdHQucHJvdG90eXBlLmluaXQoZSwgdCwgbiwgciwgaSlcclxuICAgIH1cclxuICAgIHcuVHdlZW4gPSB0dCwgdHQucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yOiB0dCxcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoZSwgdCwgbiwgciwgaSwgbykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW0gPSBlLCB0aGlzLnByb3AgPSBuLCB0aGlzLmVhc2luZyA9IGkgfHwgdy5lYXNpbmcuX2RlZmF1bHQsIHRoaXMub3B0aW9ucyA9IHQsIHRoaXMuc3RhcnQgPSB0aGlzLm5vdyA9IHRoaXMuY3VyKCksIHRoaXMuZW5kID0gciwgdGhpcy51bml0ID0gbyB8fCAody5jc3NOdW1iZXJbbl0gPyBcIlwiIDogXCJweFwiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gdHQucHJvcEhvb2tzW3RoaXMucHJvcF07XHJcbiAgICAgICAgICAgIHJldHVybiBlICYmIGUuZ2V0ID8gZS5nZXQodGhpcykgOiB0dC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBydW46IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuID0gdHQucHJvcEhvb2tzW3RoaXMucHJvcF07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24gPyB0aGlzLnBvcyA9IHQgPSB3LmVhc2luZ1t0aGlzLmVhc2luZ10oZSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uICogZSwgMCwgMSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uKSA6IHRoaXMucG9zID0gdCA9IGUsIHRoaXMubm93ID0gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiB0ICsgdGhpcy5zdGFydCwgdGhpcy5vcHRpb25zLnN0ZXAgJiYgdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sIHRoaXMubm93LCB0aGlzKSwgbiAmJiBuLnNldCA/IG4uc2V0KHRoaXMpIDogdHQucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSwgdGhpc1xyXG4gICAgICAgIH1cclxuICAgIH0sIHR0LnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IHR0LnByb3RvdHlwZSwgdHQucHJvcEhvb2tzID0ge1xyXG4gICAgICAgIF9kZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgIT09IGUuZWxlbS5ub2RlVHlwZSB8fCBudWxsICE9IGUuZWxlbVtlLnByb3BdICYmIG51bGwgPT0gZS5lbGVtLnN0eWxlW2UucHJvcF0gPyBlLmVsZW1bZS5wcm9wXSA6ICh0ID0gdy5jc3MoZS5lbGVtLCBlLnByb3AsIFwiXCIpKSAmJiBcImF1dG9cIiAhPT0gdCA/IHQgOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHcuZnguc3RlcFtlLnByb3BdID8gdy5meC5zdGVwW2UucHJvcF0oZSkgOiAxICE9PSBlLmVsZW0ubm9kZVR5cGUgfHwgbnVsbCA9PSBlLmVsZW0uc3R5bGVbdy5jc3NQcm9wc1tlLnByb3BdXSAmJiAhdy5jc3NIb29rc1tlLnByb3BdID8gZS5lbGVtW2UucHJvcF0gPSBlLm5vdyA6IHcuc3R5bGUoZS5lbGVtLCBlLnByb3AsIGUubm93ICsgZS51bml0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdHQucHJvcEhvb2tzLnNjcm9sbFRvcCA9IHR0LnByb3BIb29rcy5zY3JvbGxMZWZ0ID0ge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5lbGVtLm5vZGVUeXBlICYmIGUuZWxlbS5wYXJlbnROb2RlICYmIChlLmVsZW1bZS5wcm9wXSA9IGUubm93KVxyXG4gICAgICAgIH1cclxuICAgIH0sIHcuZWFzaW5nID0ge1xyXG4gICAgICAgIGxpbmVhcjogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN3aW5nOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLjUgLSBNYXRoLmNvcyhlICogTWF0aC5QSSkgLyAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBfZGVmYXVsdDogXCJzd2luZ1wiXHJcbiAgICB9LCB3LmZ4ID0gdHQucHJvdG90eXBlLmluaXQsIHcuZnguc3RlcCA9IHt9O1xyXG4gICAgdmFyIG50LCBydCwgaXQgPSAvXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sXHJcbiAgICAgICAgb3QgPSAvcXVldWVIb29rcyQvO1xyXG5cclxuICAgIGZ1bmN0aW9uIGF0KCkge1xyXG4gICAgICAgIHJ0ICYmICghMSA9PT0gci5oaWRkZW4gJiYgZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyBlLnJlcXVlc3RBbmltYXRpb25GcmFtZShhdCkgOiBlLnNldFRpbWVvdXQoYXQsIHcuZnguaW50ZXJ2YWwpLCB3LmZ4LnRpY2soKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdCgpIHtcclxuICAgICAgICByZXR1cm4gZS5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbnQgPSB2b2lkIDBcclxuICAgICAgICB9KSwgbnQgPSBEYXRlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXQoZSwgdCkge1xyXG4gICAgICAgIHZhciBuLCByID0gMCxcclxuICAgICAgICAgICAgaSA9IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodCA9IHQgPyAxIDogMDsgciA8IDQ7IHIgKz0gMiAtIHQpIGlbXCJtYXJnaW5cIiArIChuID0gb2Vbcl0pXSA9IGlbXCJwYWRkaW5nXCIgKyBuXSA9IGU7XHJcbiAgICAgICAgcmV0dXJuIHQgJiYgKGkub3BhY2l0eSA9IGkud2lkdGggPSBlKSwgaVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGx0KGUsIHQsIG4pIHtcclxuICAgICAgICBmb3IgKHZhciByLCBpID0gKHB0LnR3ZWVuZXJzW3RdIHx8IFtdKS5jb25jYXQocHQudHdlZW5lcnNbXCIqXCJdKSwgbyA9IDAsIGEgPSBpLmxlbmd0aDsgbyA8IGE7IG8rKylcclxuICAgICAgICAgICAgaWYgKHIgPSBpW29dLmNhbGwobiwgdCwgZSkpIHJldHVybiByXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3QoZSwgdCwgbikge1xyXG4gICAgICAgIHZhciByLCBpLCBvLCBhLCBzLCB1LCBsLCBjLCBmID0gXCJ3aWR0aFwiIGluIHQgfHwgXCJoZWlnaHRcIiBpbiB0LFxyXG4gICAgICAgICAgICBwID0gdGhpcyxcclxuICAgICAgICAgICAgZCA9IHt9LFxyXG4gICAgICAgICAgICBoID0gZS5zdHlsZSxcclxuICAgICAgICAgICAgZyA9IGUubm9kZVR5cGUgJiYgYWUoZSksXHJcbiAgICAgICAgICAgIHkgPSBKLmdldChlLCBcImZ4c2hvd1wiKTtcclxuICAgICAgICBuLnF1ZXVlIHx8IChudWxsID09IChhID0gdy5fcXVldWVIb29rcyhlLCBcImZ4XCIpKS51bnF1ZXVlZCAmJiAoYS51bnF1ZXVlZCA9IDAsIHMgPSBhLmVtcHR5LmZpcmUsIGEuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYS51bnF1ZXVlZCB8fCBzKClcclxuICAgICAgICB9KSwgYS51bnF1ZXVlZCsrLCBwLmFsd2F5cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGEudW5xdWV1ZWQtLSwgdy5xdWV1ZShlLCBcImZ4XCIpLmxlbmd0aCB8fCBhLmVtcHR5LmZpcmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBmb3IgKHIgaW4gdClcclxuICAgICAgICAgICAgaWYgKGkgPSB0W3JdLCBpdC50ZXN0KGkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVsZXRlIHRbcl0sIG8gPSBvIHx8IFwidG9nZ2xlXCIgPT09IGksIGkgPT09IChnID8gXCJoaWRlXCIgOiBcInNob3dcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXCJzaG93XCIgIT09IGkgfHwgIXkgfHwgdm9pZCAwID09PSB5W3JdKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBnID0gITBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRbcl0gPSB5ICYmIHlbcl0gfHwgdy5zdHlsZShlLCByKVxyXG4gICAgICAgICAgICB9IGlmICgodSA9ICF3LmlzRW1wdHlPYmplY3QodCkpIHx8ICF3LmlzRW1wdHlPYmplY3QoZCkpIHtcclxuICAgICAgICAgICAgZiAmJiAxID09PSBlLm5vZGVUeXBlICYmIChuLm92ZXJmbG93ID0gW2gub3ZlcmZsb3csIGgub3ZlcmZsb3dYLCBoLm92ZXJmbG93WV0sIG51bGwgPT0gKGwgPSB5ICYmIHkuZGlzcGxheSkgJiYgKGwgPSBKLmdldChlLCBcImRpc3BsYXlcIikpLCBcIm5vbmVcIiA9PT0gKGMgPSB3LmNzcyhlLCBcImRpc3BsYXlcIikpICYmIChsID8gYyA9IGwgOiAoZmUoW2VdLCAhMCksIGwgPSBlLnN0eWxlLmRpc3BsYXkgfHwgbCwgYyA9IHcuY3NzKGUsIFwiZGlzcGxheVwiKSwgZmUoW2VdKSkpLCAoXCJpbmxpbmVcIiA9PT0gYyB8fCBcImlubGluZS1ibG9ja1wiID09PSBjICYmIG51bGwgIT0gbCkgJiYgXCJub25lXCIgPT09IHcuY3NzKGUsIFwiZmxvYXRcIikgJiYgKHUgfHwgKHAuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBoLmRpc3BsYXkgPSBsXHJcbiAgICAgICAgICAgIH0pLCBudWxsID09IGwgJiYgKGMgPSBoLmRpc3BsYXksIGwgPSBcIm5vbmVcIiA9PT0gYyA/IFwiXCIgOiBjKSksIGguZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCIpKSwgbi5vdmVyZmxvdyAmJiAoaC5vdmVyZmxvdyA9IFwiaGlkZGVuXCIsIHAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGgub3ZlcmZsb3cgPSBuLm92ZXJmbG93WzBdLCBoLm92ZXJmbG93WCA9IG4ub3ZlcmZsb3dbMV0sIGgub3ZlcmZsb3dZID0gbi5vdmVyZmxvd1syXVxyXG4gICAgICAgICAgICB9KSksIHUgPSAhMTtcclxuICAgICAgICAgICAgZm9yIChyIGluIGQpIHUgfHwgKHkgPyBcImhpZGRlblwiIGluIHkgJiYgKGcgPSB5LmhpZGRlbikgOiB5ID0gSi5hY2Nlc3MoZSwgXCJmeHNob3dcIiwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbFxyXG4gICAgICAgICAgICB9KSwgbyAmJiAoeS5oaWRkZW4gPSAhZyksIGcgJiYgZmUoW2VdLCAhMCksIHAuZG9uZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBnIHx8IGZlKFtlXSksIEoucmVtb3ZlKGUsIFwiZnhzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChyIGluIGQpIHcuc3R5bGUoZSwgciwgZFtyXSlcclxuICAgICAgICAgICAgfSkpLCB1ID0gbHQoZyA/IHlbcl0gOiAwLCByLCBwKSwgciBpbiB5IHx8ICh5W3JdID0gdS5zdGFydCwgZyAmJiAodS5lbmQgPSB1LnN0YXJ0LCB1LnN0YXJ0ID0gMCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZ0KGUsIHQpIHtcclxuICAgICAgICB2YXIgbiwgciwgaSwgbywgYTtcclxuICAgICAgICBmb3IgKG4gaW4gZSlcclxuICAgICAgICAgICAgaWYgKHIgPSBHKG4pLCBpID0gdFtyXSwgbyA9IGVbbl0sIEFycmF5LmlzQXJyYXkobykgJiYgKGkgPSBvWzFdLCBvID0gZVtuXSA9IG9bMF0pLCBuICE9PSByICYmIChlW3JdID0gbywgZGVsZXRlIGVbbl0pLCAoYSA9IHcuY3NzSG9va3Nbcl0pICYmIFwiZXhwYW5kXCIgaW4gYSkge1xyXG4gICAgICAgICAgICAgICAgbyA9IGEuZXhwYW5kKG8pLCBkZWxldGUgZVtyXTtcclxuICAgICAgICAgICAgICAgIGZvciAobiBpbiBvKSBuIGluIGUgfHwgKGVbbl0gPSBvW25dLCB0W25dID0gaSlcclxuICAgICAgICAgICAgfSBlbHNlIHRbcl0gPSBpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHQoZSwgdCwgbikge1xyXG4gICAgICAgIHZhciByLCBpLCBvID0gMCxcclxuICAgICAgICAgICAgYSA9IHB0LnByZWZpbHRlcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICBzID0gdy5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdS5lbGVtXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB1ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkpIHJldHVybiAhMTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSBudCB8fCBzdCgpLCBuID0gTWF0aC5tYXgoMCwgbC5zdGFydFRpbWUgKyBsLmR1cmF0aW9uIC0gdCksIHIgPSAxIC0gKG4gLyBsLmR1cmF0aW9uIHx8IDApLCBvID0gMCwgYSA9IGwudHdlZW5zLmxlbmd0aDsgbyA8IGE7IG8rKykgbC50d2VlbnNbb10ucnVuKHIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMubm90aWZ5V2l0aChlLCBbbCwgciwgbl0pLCByIDwgMSAmJiBhID8gbiA6IChhIHx8IHMubm90aWZ5V2l0aChlLCBbbCwgMSwgMF0pLCBzLnJlc29sdmVXaXRoKGUsIFtsXSksICExKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsID0gcy5wcm9taXNlKHtcclxuICAgICAgICAgICAgICAgIGVsZW06IGUsXHJcbiAgICAgICAgICAgICAgICBwcm9wczogdy5leHRlbmQoe30sIHQpLFxyXG4gICAgICAgICAgICAgICAgb3B0czogdy5leHRlbmQoITAsIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsRWFzaW5nOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IHcuZWFzaW5nLl9kZWZhdWx0XHJcbiAgICAgICAgICAgICAgICB9LCBuKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJvcGVydGllczogdCxcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsT3B0aW9uczogbixcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogbnQgfHwgc3QoKSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBuLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgdHdlZW5zOiBbXSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVR3ZWVuOiBmdW5jdGlvbiAodCwgbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByID0gdy5Ud2VlbihlLCBsLm9wdHMsIHQsIG4sIGwub3B0cy5zcGVjaWFsRWFzaW5nW3RdIHx8IGwub3B0cy5lYXNpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsLnR3ZWVucy5wdXNoKHIpLCByXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSB0ID8gbC50d2VlbnMubGVuZ3RoIDogMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gITA7IG4gPCByOyBuKyspIGwudHdlZW5zW25dLnJ1bigxKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCA/IChzLm5vdGlmeVdpdGgoZSwgW2wsIDEsIDBdKSwgcy5yZXNvbHZlV2l0aChlLCBbbCwgdF0pKSA6IHMucmVqZWN0V2l0aChlLCBbbCwgdF0pLCB0aGlzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjID0gbC5wcm9wcztcclxuICAgICAgICBmb3IgKGZ0KGMsIGwub3B0cy5zcGVjaWFsRWFzaW5nKTsgbyA8IGE7IG8rKylcclxuICAgICAgICAgICAgaWYgKHIgPSBwdC5wcmVmaWx0ZXJzW29dLmNhbGwobCwgZSwgYywgbC5vcHRzKSkgcmV0dXJuIGcoci5zdG9wKSAmJiAody5fcXVldWVIb29rcyhsLmVsZW0sIGwub3B0cy5xdWV1ZSkuc3RvcCA9IHIuc3RvcC5iaW5kKHIpKSwgcjtcclxuICAgICAgICByZXR1cm4gdy5tYXAoYywgbHQsIGwpLCBnKGwub3B0cy5zdGFydCkgJiYgbC5vcHRzLnN0YXJ0LmNhbGwoZSwgbCksIGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLCBsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSwgdy5meC50aW1lcih3LmV4dGVuZCh1LCB7XHJcbiAgICAgICAgICAgIGVsZW06IGUsXHJcbiAgICAgICAgICAgIGFuaW06IGwsXHJcbiAgICAgICAgICAgIHF1ZXVlOiBsLm9wdHMucXVldWVcclxuICAgICAgICB9KSksIGxcclxuICAgIH1cclxuICAgIHcuQW5pbWF0aW9uID0gdy5leHRlbmQocHQsIHtcclxuICAgICAgICAgICAgdHdlZW5lcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiKlwiOiBbZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuY3JlYXRlVHdlZW4oZSwgdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVlKG4uZWxlbSwgZSwgaWUuZXhlYyh0KSwgbiksIG5cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHR3ZWVuZXI6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICBnKGUpID8gKHQgPSBlLCBlID0gW1wiKlwiXSkgOiBlID0gZS5tYXRjaChNKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4sIHIgPSAwLCBpID0gZS5sZW5ndGg7IHIgPCBpOyByKyspIG4gPSBlW3JdLCBwdC50d2VlbmVyc1tuXSA9IHB0LnR3ZWVuZXJzW25dIHx8IFtdLCBwdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZWZpbHRlcnM6IFtjdF0sXHJcbiAgICAgICAgICAgIHByZWZpbHRlcjogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgIHQgPyBwdC5wcmVmaWx0ZXJzLnVuc2hpZnQoZSkgOiBwdC5wcmVmaWx0ZXJzLnB1c2goZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCB3LnNwZWVkID0gZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBlICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgPyB3LmV4dGVuZCh7fSwgZSkgOiB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogbiB8fCAhbiAmJiB0IHx8IGcoZSkgJiYgZSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBlLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiBuICYmIHQgfHwgdCAmJiAhZyh0KSAmJiB0XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiB3LmZ4Lm9mZiA/IHIuZHVyYXRpb24gPSAwIDogXCJudW1iZXJcIiAhPSB0eXBlb2Ygci5kdXJhdGlvbiAmJiAoci5kdXJhdGlvbiBpbiB3LmZ4LnNwZWVkcyA/IHIuZHVyYXRpb24gPSB3LmZ4LnNwZWVkc1tyLmR1cmF0aW9uXSA6IHIuZHVyYXRpb24gPSB3LmZ4LnNwZWVkcy5fZGVmYXVsdCksIG51bGwgIT0gci5xdWV1ZSAmJiAhMCAhPT0gci5xdWV1ZSB8fCAoci5xdWV1ZSA9IFwiZnhcIiksIHIub2xkID0gci5jb21wbGV0ZSwgci5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGcoci5vbGQpICYmIHIub2xkLmNhbGwodGhpcyksIHIucXVldWUgJiYgdy5kZXF1ZXVlKHRoaXMsIHIucXVldWUpXHJcbiAgICAgICAgICAgIH0sIHJcclxuICAgICAgICB9LCB3LmZuLmV4dGVuZCh7XHJcbiAgICAgICAgICAgIGZhZGVUbzogZnVuY3Rpb24gKGUsIHQsIG4sIHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihhZSkuY3NzKFwib3BhY2l0eVwiLCAwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogdFxyXG4gICAgICAgICAgICAgICAgfSwgZSwgbiwgcilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYW5pbWF0ZTogZnVuY3Rpb24gKGUsIHQsIG4sIHIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gdy5pc0VtcHR5T2JqZWN0KGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIG8gPSB3LnNwZWVkKHQsIG4sIHIpLFxyXG4gICAgICAgICAgICAgICAgICAgIGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcHQodGhpcywgdy5leHRlbmQoe30sIGUpLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGkgfHwgSi5nZXQodGhpcywgXCJmaW5pc2hcIikpICYmIHQuc3RvcCghMClcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuZmluaXNoID0gYSwgaSB8fCAhMSA9PT0gby5xdWV1ZSA/IHRoaXMuZWFjaChhKSA6IHRoaXMucXVldWUoby5xdWV1ZSwgYSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGUuc3RvcDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZS5zdG9wLCB0KG4pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgIT0gdHlwZW9mIGUgJiYgKG4gPSB0LCB0ID0gZSwgZSA9IHZvaWQgMCksIHQgJiYgITEgIT09IGUgJiYgdGhpcy5xdWV1ZShlIHx8IFwiZnhcIiwgW10pLCB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gITAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBudWxsICE9IGUgJiYgZSArIFwicXVldWVIb29rc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gdy50aW1lcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBKLmdldCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSkgYVtpXSAmJiBhW2ldLnN0b3AgJiYgcihhW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSBpbiBhKSBhW2ldICYmIGFbaV0uc3RvcCAmJiBvdC50ZXN0KGkpICYmIHIoYVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gby5sZW5ndGg7IGktLTspIG9baV0uZWxlbSAhPT0gdGhpcyB8fCBudWxsICE9IGUgJiYgb1tpXS5xdWV1ZSAhPT0gZSB8fCAob1tpXS5hbmltLnN0b3AobiksIHQgPSAhMSwgby5zcGxpY2UoaSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICF0ICYmIG4gfHwgdy5kZXF1ZXVlKHRoaXMsIGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmaW5pc2g6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gITEgIT09IGUgJiYgKGUgPSBlIHx8IFwiZnhcIiksIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQsIG4gPSBKLmdldCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgciA9IG5bZSArIFwicXVldWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBuW2UgKyBcInF1ZXVlSG9va3NcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSB3LnRpbWVycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHIgPyByLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuLmZpbmlzaCA9ICEwLCB3LnF1ZXVlKHRoaXMsIGUsIFtdKSwgaSAmJiBpLnN0b3AgJiYgaS5zdG9wLmNhbGwodGhpcywgITApLCB0ID0gby5sZW5ndGg7IHQtLTspIG9bdF0uZWxlbSA9PT0gdGhpcyAmJiBvW3RdLnF1ZXVlID09PSBlICYmIChvW3RdLmFuaW0uc3RvcCghMCksIG8uc3BsaWNlKHQsIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHQgPSAwOyB0IDwgYTsgdCsrKSByW3RdICYmIHJbdF0uZmluaXNoICYmIHJbdF0uZmluaXNoLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG4uZmluaXNoXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksIHcuZWFjaChbXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiXSwgZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgdmFyIG4gPSB3LmZuW3RdO1xyXG4gICAgICAgICAgICB3LmZuW3RdID0gZnVuY3Rpb24gKGUsIHIsIGkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09IGUgfHwgXCJib29sZWFuXCIgPT0gdHlwZW9mIGUgPyBuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiB0aGlzLmFuaW1hdGUodXQodCwgITApLCBlLCByLCBpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksIHcuZWFjaCh7XHJcbiAgICAgICAgICAgIHNsaWRlRG93bjogdXQoXCJzaG93XCIpLFxyXG4gICAgICAgICAgICBzbGlkZVVwOiB1dChcImhpZGVcIiksXHJcbiAgICAgICAgICAgIHNsaWRlVG9nZ2xlOiB1dChcInRvZ2dsZVwiKSxcclxuICAgICAgICAgICAgZmFkZUluOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcInNob3dcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWRlT3V0OiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcImhpZGVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWRlVG9nZ2xlOiB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBcInRvZ2dsZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICB3LmZuW2VdID0gZnVuY3Rpb24gKGUsIG4sIHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUodCwgZSwgbiwgcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLCB3LnRpbWVycyA9IFtdLCB3LmZ4LnRpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlLCB0ID0gMCxcclxuICAgICAgICAgICAgICAgIG4gPSB3LnRpbWVycztcclxuICAgICAgICAgICAgZm9yIChudCA9IERhdGUubm93KCk7IHQgPCBuLmxlbmd0aDsgdCsrKShlID0gblt0XSkoKSB8fCBuW3RdICE9PSBlIHx8IG4uc3BsaWNlKHQtLSwgMSk7XHJcbiAgICAgICAgICAgIG4ubGVuZ3RoIHx8IHcuZnguc3RvcCgpLCBudCA9IHZvaWQgMFxyXG4gICAgICAgIH0sIHcuZngudGltZXIgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB3LnRpbWVycy5wdXNoKGUpLCB3LmZ4LnN0YXJ0KClcclxuICAgICAgICB9LCB3LmZ4LmludGVydmFsID0gMTMsIHcuZnguc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJ0IHx8IChydCA9ICEwLCBhdCgpKVxyXG4gICAgICAgIH0sIHcuZnguc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcnQgPSBudWxsXHJcbiAgICAgICAgfSwgdy5meC5zcGVlZHMgPSB7XHJcbiAgICAgICAgICAgIHNsb3c6IDYwMCxcclxuICAgICAgICAgICAgZmFzdDogMjAwLFxyXG4gICAgICAgICAgICBfZGVmYXVsdDogNDAwXHJcbiAgICAgICAgfSwgdy5mbi5kZWxheSA9IGZ1bmN0aW9uICh0LCBuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ID0gdy5meCA/IHcuZnguc3BlZWRzW3RdIHx8IHQgOiB0LCBuID0gbiB8fCBcImZ4XCIsIHRoaXMucXVldWUobiwgZnVuY3Rpb24gKG4sIHIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpID0gZS5zZXRUaW1lb3V0KG4sIHQpO1xyXG4gICAgICAgICAgICAgICAgci5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY2xlYXJUaW1lb3V0KGkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXHJcbiAgICAgICAgICAgICAgICB0ID0gci5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKHIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7XHJcbiAgICAgICAgICAgIGUudHlwZSA9IFwiY2hlY2tib3hcIiwgaC5jaGVja09uID0gXCJcIiAhPT0gZS52YWx1ZSwgaC5vcHRTZWxlY3RlZCA9IHQuc2VsZWN0ZWQsIChlID0gci5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlID0gXCJ0XCIsIGUudHlwZSA9IFwicmFkaW9cIiwgaC5yYWRpb1ZhbHVlID0gXCJ0XCIgPT09IGUudmFsdWVcclxuICAgICAgICB9KCk7XHJcbiAgICB2YXIgZHQsIGh0ID0gdy5leHByLmF0dHJIYW5kbGU7XHJcbiAgICB3LmZuLmV4dGVuZCh7XHJcbiAgICAgICAgYXR0cjogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHoodGhpcywgdy5hdHRyLCBlLCB0LCBhcmd1bWVudHMubGVuZ3RoID4gMSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdy5yZW1vdmVBdHRyKHRoaXMsIGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZXh0ZW5kKHtcclxuICAgICAgICBhdHRyOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICB2YXIgciwgaSwgbyA9IGUubm9kZVR5cGU7XHJcbiAgICAgICAgICAgIGlmICgzICE9PSBvICYmIDggIT09IG8gJiYgMiAhPT0gbykgcmV0dXJuIFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGUuZ2V0QXR0cmlidXRlID8gdy5wcm9wKGUsIHQsIG4pIDogKDEgPT09IG8gJiYgdy5pc1hNTERvYyhlKSB8fCAoaSA9IHcuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV0gfHwgKHcuZXhwci5tYXRjaC5ib29sLnRlc3QodCkgPyBkdCA6IHZvaWQgMCkpLCB2b2lkIDAgIT09IG4gPyBudWxsID09PSBuID8gdm9pZCB3LnJlbW92ZUF0dHIoZSwgdCkgOiBpICYmIFwic2V0XCIgaW4gaSAmJiB2b2lkIDAgIT09IChyID0gaS5zZXQoZSwgbiwgdCkpID8gciA6IChlLnNldEF0dHJpYnV0ZSh0LCBuICsgXCJcIiksIG4pIDogaSAmJiBcImdldFwiIGluIGkgJiYgbnVsbCAhPT0gKHIgPSBpLmdldChlLCB0KSkgPyByIDogbnVsbCA9PSAociA9IHcuZmluZC5hdHRyKGUsIHQpKSA/IHZvaWQgMCA6IHIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdHRySG9va3M6IHtcclxuICAgICAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5yYWRpb1ZhbHVlICYmIFwicmFkaW9cIiA9PT0gdCAmJiBOKGUsIFwiaW5wdXRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHQpLCBuICYmIChlLnZhbHVlID0gbiksIHRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuLCByID0gMCxcclxuICAgICAgICAgICAgICAgIGkgPSB0ICYmIHQubWF0Y2goTSk7XHJcbiAgICAgICAgICAgIGlmIChpICYmIDEgPT09IGUubm9kZVR5cGUpXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA9IGlbcisrXSkgZS5yZW1vdmVBdHRyaWJ1dGUobilcclxuICAgICAgICB9XHJcbiAgICB9KSwgZHQgPSB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gITEgPT09IHQgPyB3LnJlbW92ZUF0dHIoZSwgbikgOiBlLnNldEF0dHJpYnV0ZShuLCBuKSwgblxyXG4gICAgICAgIH1cclxuICAgIH0sIHcuZWFjaCh3LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdmFyIG4gPSBodFt0XSB8fCB3LmZpbmQuYXR0cjtcclxuICAgICAgICBodFt0XSA9IGZ1bmN0aW9uIChlLCB0LCByKSB7XHJcbiAgICAgICAgICAgIHZhciBpLCBvLCBhID0gdC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gciB8fCAobyA9IGh0W2FdLCBodFthXSA9IGksIGkgPSBudWxsICE9IG4oZSwgdCwgcikgPyBhIDogbnVsbCwgaHRbYV0gPSBvKSwgaVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIGd0ID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcclxuICAgICAgICB5dCA9IC9eKD86YXxhcmVhKSQvaTtcclxuICAgIHcuZm4uZXh0ZW5kKHtcclxuICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4geih0aGlzLCB3LnByb3AsIGUsIHQsIGFyZ3VtZW50cy5sZW5ndGggPiAxKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlUHJvcDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1t3LnByb3BGaXhbZV0gfHwgZV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5leHRlbmQoe1xyXG4gICAgICAgIHByb3A6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHZhciByLCBpLCBvID0gZS5ub2RlVHlwZTtcclxuICAgICAgICAgICAgaWYgKDMgIT09IG8gJiYgOCAhPT0gbyAmJiAyICE9PSBvKSByZXR1cm4gMSA9PT0gbyAmJiB3LmlzWE1MRG9jKGUpIHx8ICh0ID0gdy5wcm9wRml4W3RdIHx8IHQsIGkgPSB3LnByb3BIb29rc1t0XSksIHZvaWQgMCAhPT0gbiA/IGkgJiYgXCJzZXRcIiBpbiBpICYmIHZvaWQgMCAhPT0gKHIgPSBpLnNldChlLCBuLCB0KSkgPyByIDogZVt0XSA9IG4gOiBpICYmIFwiZ2V0XCIgaW4gaSAmJiBudWxsICE9PSAociA9IGkuZ2V0KGUsIHQpKSA/IHIgOiBlW3RdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9wSG9va3M6IHtcclxuICAgICAgICAgICAgdGFiSW5kZXg6IHtcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHcuZmluZC5hdHRyKGUsIFwidGFiaW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPyBwYXJzZUludCh0LCAxMCkgOiBndC50ZXN0KGUubm9kZU5hbWUpIHx8IHl0LnRlc3QoZS5ub2RlTmFtZSkgJiYgZS5ocmVmID8gMCA6IC0xXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BGaXg6IHtcclxuICAgICAgICAgICAgXCJmb3JcIjogXCJodG1sRm9yXCIsXHJcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH0pLCBoLm9wdFNlbGVjdGVkIHx8ICh3LnByb3BIb29rcy5zZWxlY3RlZCA9IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICByZXR1cm4gdCAmJiB0LnBhcmVudE5vZGUgJiYgdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsIG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIHQgJiYgKHQuc2VsZWN0ZWRJbmRleCwgdC5wYXJlbnROb2RlICYmIHQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB3LmVhY2goW1widGFiSW5kZXhcIiwgXCJyZWFkT25seVwiLCBcIm1heExlbmd0aFwiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJyb3dTcGFuXCIsIFwiY29sU3BhblwiLCBcInVzZU1hcFwiLCBcImZyYW1lQm9yZGVyXCIsIFwiY29udGVudEVkaXRhYmxlXCJdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdy5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV0gPSB0aGlzXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB2dChlKSB7XHJcbiAgICAgICAgcmV0dXJuIChlLm1hdGNoKE0pIHx8IFtdKS5qb2luKFwiIFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG10KGUpIHtcclxuICAgICAgICByZXR1cm4gZS5nZXRBdHRyaWJ1dGUgJiYgZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24geHQoZSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGUpID8gZSA6IFwic3RyaW5nXCIgPT0gdHlwZW9mIGUgPyBlLm1hdGNoKE0pIHx8IFtdIDogW11cclxuICAgIH1cclxuICAgIHcuZm4uZXh0ZW5kKHtcclxuICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQsIG4sIHIsIGksIG8sIGEsIHMsIHUgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZyhlKSkgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgdyh0aGlzKS5hZGRDbGFzcyhlLmNhbGwodGhpcywgdCwgbXQodGhpcykpKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCh0ID0geHQoZSkpLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuID0gdGhpc1t1KytdKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID0gbXQobiksIHIgPSAxID09PSBuLm5vZGVUeXBlICYmIFwiIFwiICsgdnQoaSkgKyBcIiBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG8gPSB0W2ErK10pIHIuaW5kZXhPZihcIiBcIiArIG8gKyBcIiBcIikgPCAwICYmIChyICs9IG8gKyBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgIT09IChzID0gdnQocikpICYmIG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgcylcclxuICAgICAgICAgICAgICAgICAgICB9IHJldHVybiB0aGlzXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQsIG4sIHIsIGksIG8sIGEsIHMsIHUgPSAwO1xyXG4gICAgICAgICAgICBpZiAoZyhlKSkgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAgICAgdyh0aGlzKS5yZW1vdmVDbGFzcyhlLmNhbGwodGhpcywgdCwgbXQodGhpcykpKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGlmICgodCA9IHh0KGUpKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA9IHRoaXNbdSsrXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9IG10KG4pLCByID0gMSA9PT0gbi5ub2RlVHlwZSAmJiBcIiBcIiArIHZ0KGkpICsgXCIgXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChvID0gdFthKytdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHIuaW5kZXhPZihcIiBcIiArIG8gKyBcIiBcIikgPiAtMSkgciA9IHIucmVwbGFjZShcIiBcIiArIG8gKyBcIiBcIiwgXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpICE9PSAocyA9IHZ0KHIpKSAmJiBuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHMpXHJcbiAgICAgICAgICAgICAgICAgICAgfSByZXR1cm4gdGhpc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gdHlwZW9mIGUsXHJcbiAgICAgICAgICAgICAgICByID0gXCJzdHJpbmdcIiA9PT0gbiB8fCBBcnJheS5pc0FycmF5KGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJib29sZWFuXCIgPT0gdHlwZW9mIHQgJiYgciA/IHQgPyB0aGlzLmFkZENsYXNzKGUpIDogdGhpcy5yZW1vdmVDbGFzcyhlKSA6IGcoZSkgPyB0aGlzLmVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgIHcodGhpcykudG9nZ2xlQ2xhc3MoZS5jYWxsKHRoaXMsIG4sIG10KHRoaXMpLCB0KSwgdClcclxuICAgICAgICAgICAgfSkgOiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHQsIGksIG8sIGE7XHJcbiAgICAgICAgICAgICAgICBpZiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwLCBvID0gdyh0aGlzKSwgYSA9IHh0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ID0gYVtpKytdKSBvLmhhc0NsYXNzKHQpID8gby5yZW1vdmVDbGFzcyh0KSA6IG8uYWRkQ2xhc3ModClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB2b2lkIDAgIT09IGUgJiYgXCJib29sZWFuXCIgIT09IG4gfHwgKCh0ID0gbXQodGhpcykpICYmIEouc2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCB0KSwgdGhpcy5zZXRBdHRyaWJ1dGUgJiYgdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0IHx8ICExID09PSBlID8gXCJcIiA6IEouZ2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiKSB8fCBcIlwiKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdCwgbiwgciA9IDA7XHJcbiAgICAgICAgICAgIHQgPSBcIiBcIiArIGUgKyBcIiBcIjtcclxuICAgICAgICAgICAgd2hpbGUgKG4gPSB0aGlzW3IrK10pXHJcbiAgICAgICAgICAgICAgICBpZiAoMSA9PT0gbi5ub2RlVHlwZSAmJiAoXCIgXCIgKyB2dChtdChuKSkgKyBcIiBcIikuaW5kZXhPZih0KSA+IC0xKSByZXR1cm4gITA7XHJcbiAgICAgICAgICAgIHJldHVybiAhMVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIGJ0ID0gL1xcci9nO1xyXG4gICAgdy5mbi5leHRlbmQoe1xyXG4gICAgICAgIHZhbDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQsIG4sIHIsIGkgPSB0aGlzWzBdOyB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHIgPSBnKGUpLCB0aGlzLmVhY2goZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgICAgICAxID09PSB0aGlzLm5vZGVUeXBlICYmIChudWxsID09IChpID0gciA/IGUuY2FsbCh0aGlzLCBuLCB3KHRoaXMpLnZhbCgpKSA6IGUpID8gaSA9IFwiXCIgOiBcIm51bWJlclwiID09IHR5cGVvZiBpID8gaSArPSBcIlwiIDogQXJyYXkuaXNBcnJheShpKSAmJiAoaSA9IHcubWFwKGksIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09IGUgPyBcIlwiIDogZSArIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9KSksICh0ID0gdy52YWxIb29rc1t0aGlzLnR5cGVdIHx8IHcudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkgJiYgXCJzZXRcIiBpbiB0ICYmIHZvaWQgMCAhPT0gdC5zZXQodGhpcywgaSwgXCJ2YWx1ZVwiKSB8fCAodGhpcy52YWx1ZSA9IGkpKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSkgcmV0dXJuICh0ID0gdy52YWxIb29rc1tpLnR5cGVdIHx8IHcudmFsSG9va3NbaS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkgJiYgXCJnZXRcIiBpbiB0ICYmIHZvaWQgMCAhPT0gKG4gPSB0LmdldChpLCBcInZhbHVlXCIpKSA/IG4gOiBcInN0cmluZ1wiID09IHR5cGVvZiAobiA9IGkudmFsdWUpID8gbi5yZXBsYWNlKGJ0LCBcIlwiKSA6IG51bGwgPT0gbiA/IFwiXCIgOiBuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5leHRlbmQoe1xyXG4gICAgICAgIHZhbEhvb2tzOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gdy5maW5kLmF0dHIoZSwgXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCAhPSB0ID8gdCA6IHZ0KHcudGV4dChlKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQsIG4sIHIsIGkgPSBlLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBlLnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBcInNlbGVjdC1vbmVcIiA9PT0gZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzID0gYSA/IG51bGwgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdSA9IGEgPyBvICsgMSA6IGkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAociA9IG8gPCAwID8gdSA6IGEgPyBvIDogMDsgciA8IHU7IHIrKylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgobiA9IGlbcl0pLnNlbGVjdGVkIHx8IHIgPT09IG8pICYmICFuLmRpc2FibGVkICYmICghbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8ICFOKG4ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID0gdyhuKS52YWwoKSwgYSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnB1c2godClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSByZXR1cm4gc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbiwgciwgaSA9IGUub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbyA9IHcubWFrZUFycmF5KHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhID0gaS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGEtLSkoKHIgPSBpW2FdKS5zZWxlY3RlZCA9IHcuaW5BcnJheSh3LnZhbEhvb2tzLm9wdGlvbi5nZXQociksIG8pID4gLTEpICYmIChuID0gITApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuIHx8IChlLnNlbGVjdGVkSW5kZXggPSAtMSksIG9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB3LmVhY2goW1wicmFkaW9cIiwgXCJjaGVja2JveFwiXSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHcudmFsSG9va3NbdGhpc10gPSB7XHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHQpKSByZXR1cm4gZS5jaGVja2VkID0gdy5pbkFycmF5KHcoZSkudmFsKCksIHQpID4gLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGguY2hlY2tPbiB8fCAody52YWxIb29rc1t0aGlzXS5nZXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbCA9PT0gZS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA/IFwib25cIiA6IGUudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfSksIGguZm9jdXNpbiA9IFwib25mb2N1c2luXCIgaW4gZTtcclxuICAgIHZhciB3dCA9IC9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxcclxuICAgICAgICBUdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9O1xyXG4gICAgdy5leHRlbmQody5ldmVudCwge1xyXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uICh0LCBuLCBpLCBvKSB7XHJcbiAgICAgICAgICAgIHZhciBhLCBzLCB1LCBsLCBjLCBwLCBkLCBoLCB2ID0gW2kgfHwgcl0sXHJcbiAgICAgICAgICAgICAgICBtID0gZi5jYWxsKHQsIFwidHlwZVwiKSA/IHQudHlwZSA6IHQsXHJcbiAgICAgICAgICAgICAgICB4ID0gZi5jYWxsKHQsIFwibmFtZXNwYWNlXCIpID8gdC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpIDogW107XHJcbiAgICAgICAgICAgIGlmIChzID0gaCA9IHUgPSBpID0gaSB8fCByLCAzICE9PSBpLm5vZGVUeXBlICYmIDggIT09IGkubm9kZVR5cGUgJiYgIXd0LnRlc3QobSArIHcuZXZlbnQudHJpZ2dlcmVkKSAmJiAobS5pbmRleE9mKFwiLlwiKSA+IC0xICYmIChtID0gKHggPSBtLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSwgeC5zb3J0KCkpLCBjID0gbS5pbmRleE9mKFwiOlwiKSA8IDAgJiYgXCJvblwiICsgbSwgdCA9IHRbdy5leHBhbmRvXSA/IHQgOiBuZXcgdy5FdmVudChtLCBcIm9iamVjdFwiID09IHR5cGVvZiB0ICYmIHQpLCB0LmlzVHJpZ2dlciA9IG8gPyAyIDogMywgdC5uYW1lc3BhY2UgPSB4LmpvaW4oXCIuXCIpLCB0LnJuYW1lc3BhY2UgPSB0Lm5hbWVzcGFjZSA/IG5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIiArIHguam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIikgOiBudWxsLCB0LnJlc3VsdCA9IHZvaWQgMCwgdC50YXJnZXQgfHwgKHQudGFyZ2V0ID0gaSksIG4gPSBudWxsID09IG4gPyBbdF0gOiB3Lm1ha2VBcnJheShuLCBbdF0pLCBkID0gdy5ldmVudC5zcGVjaWFsW21dIHx8IHt9LCBvIHx8ICFkLnRyaWdnZXIgfHwgITEgIT09IGQudHJpZ2dlci5hcHBseShpLCBuKSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbyAmJiAhZC5ub0J1YmJsZSAmJiAheShpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobCA9IGQuZGVsZWdhdGVUeXBlIHx8IG0sIHd0LnRlc3QobCArIG0pIHx8IChzID0gcy5wYXJlbnROb2RlKTsgczsgcyA9IHMucGFyZW50Tm9kZSkgdi5wdXNoKHMpLCB1ID0gcztcclxuICAgICAgICAgICAgICAgICAgICB1ID09PSAoaS5vd25lckRvY3VtZW50IHx8IHIpICYmIHYucHVzaCh1LmRlZmF1bHRWaWV3IHx8IHUucGFyZW50V2luZG93IHx8IGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhID0gMDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgocyA9IHZbYSsrXSkgJiYgIXQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkgaCA9IHMsIHQudHlwZSA9IGEgPiAxID8gbCA6IGQuYmluZFR5cGUgfHwgbSwgKHAgPSAoSi5nZXQocywgXCJldmVudHNcIikgfHwge30pW3QudHlwZV0gJiYgSi5nZXQocywgXCJoYW5kbGVcIikpICYmIHAuYXBwbHkocywgbiksIChwID0gYyAmJiBzW2NdKSAmJiBwLmFwcGx5ICYmIFkocykgJiYgKHQucmVzdWx0ID0gcC5hcHBseShzLCBuKSwgITEgPT09IHQucmVzdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdC50eXBlID0gbSwgbyB8fCB0LmlzRGVmYXVsdFByZXZlbnRlZCgpIHx8IGQuX2RlZmF1bHQgJiYgITEgIT09IGQuX2RlZmF1bHQuYXBwbHkodi5wb3AoKSwgbikgfHwgIVkoaSkgfHwgYyAmJiBnKGlbbV0pICYmICF5KGkpICYmICgodSA9IGlbY10pICYmIChpW2NdID0gbnVsbCksIHcuZXZlbnQudHJpZ2dlcmVkID0gbSwgdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICYmIGguYWRkRXZlbnRMaXN0ZW5lcihtLCBUdCksIGlbbV0oKSwgdC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICYmIGgucmVtb3ZlRXZlbnRMaXN0ZW5lcihtLCBUdCksIHcuZXZlbnQudHJpZ2dlcmVkID0gdm9pZCAwLCB1ICYmIChpW2NdID0gdSkpLCB0LnJlc3VsdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaW11bGF0ZTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcclxuICAgICAgICAgICAgdmFyIHIgPSB3LmV4dGVuZChuZXcgdy5FdmVudCwgbiwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZSxcclxuICAgICAgICAgICAgICAgIGlzU2ltdWxhdGVkOiAhMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdy5ldmVudC50cmlnZ2VyKHIsIG51bGwsIHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZm4uZXh0ZW5kKHtcclxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHcuZXZlbnQudHJpZ2dlcihlLCB0LCB0aGlzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gdGhpc1swXTtcclxuICAgICAgICAgICAgaWYgKG4pIHJldHVybiB3LmV2ZW50LnRyaWdnZXIoZSwgdCwgbiwgITApXHJcbiAgICAgICAgfVxyXG4gICAgfSksIGguZm9jdXNpbiB8fCB3LmVhY2goe1xyXG4gICAgICAgIGZvY3VzOiBcImZvY3VzaW5cIixcclxuICAgICAgICBibHVyOiBcImZvY3Vzb3V0XCJcclxuICAgIH0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdmFyIG4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB3LmV2ZW50LnNpbXVsYXRlKHQsIGUudGFyZ2V0LCB3LmV2ZW50LmZpeChlKSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHcuZXZlbnQuc3BlY2lhbFt0XSA9IHtcclxuICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaSA9IEouYWNjZXNzKHIsIHQpO1xyXG4gICAgICAgICAgICAgICAgaSB8fCByLmFkZEV2ZW50TGlzdGVuZXIoZSwgbiwgITApLCBKLmFjY2VzcyhyLCB0LCAoaSB8fCAwKSArIDEpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRlYXJkb3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBKLmFjY2VzcyhyLCB0KSAtIDE7XHJcbiAgICAgICAgICAgICAgICBpID8gSi5hY2Nlc3MociwgdCwgaSkgOiAoci5yZW1vdmVFdmVudExpc3RlbmVyKGUsIG4sICEwKSwgSi5yZW1vdmUociwgdCkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZhciBDdCA9IGUubG9jYXRpb24sXHJcbiAgICAgICAgRXQgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgIGt0ID0gL1xcPy87XHJcbiAgICB3LnBhcnNlWE1MID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgbjtcclxuICAgICAgICBpZiAoIXQgfHwgXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbiA9IChuZXcgZS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyh0LCBcInRleHQveG1sXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBuID0gdm9pZCAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuICYmICFuLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoIHx8IHcuZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIgKyB0KSwgblxyXG4gICAgfTtcclxuICAgIHZhciBTdCA9IC9cXFtcXF0kLyxcclxuICAgICAgICBEdCA9IC9cXHI/XFxuL2csXHJcbiAgICAgICAgTnQgPSAvXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksXHJcbiAgICAgICAgQXQgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XHJcblxyXG4gICAgZnVuY3Rpb24ganQoZSwgdCwgbiwgcikge1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHQpKSB3LmVhY2godCwgZnVuY3Rpb24gKHQsIGkpIHtcclxuICAgICAgICAgICAgbiB8fCBTdC50ZXN0KGUpID8gcihlLCBpKSA6IGp0KGUgKyBcIltcIiArIChcIm9iamVjdFwiID09IHR5cGVvZiBpICYmIG51bGwgIT0gaSA/IHQgOiBcIlwiKSArIFwiXVwiLCBpLCBuLCByKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsc2UgaWYgKG4gfHwgXCJvYmplY3RcIiAhPT0geCh0KSkgcihlLCB0KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGZvciAoaSBpbiB0KSBqdChlICsgXCJbXCIgKyBpICsgXCJdXCIsIHRbaV0sIG4sIHIpXHJcbiAgICB9XHJcbiAgICB3LnBhcmFtID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICB2YXIgbiwgciA9IFtdLFxyXG4gICAgICAgICAgICBpID0gZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gZyh0KSA/IHQoKSA6IHQ7XHJcbiAgICAgICAgICAgICAgICByW3IubGVuZ3RoXSA9IGVuY29kZVVSSUNvbXBvbmVudChlKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG51bGwgPT0gbiA/IFwiXCIgOiBuKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpIHx8IGUuanF1ZXJ5ICYmICF3LmlzUGxhaW5PYmplY3QoZSkpIHcuZWFjaChlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGkodGhpcy5uYW1lLCB0aGlzLnZhbHVlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgZm9yIChuIGluIGUpIGp0KG4sIGVbbl0sIHQsIGkpO1xyXG4gICAgICAgIHJldHVybiByLmpvaW4oXCImXCIpXHJcbiAgICB9LCB3LmZuLmV4dGVuZCh7XHJcbiAgICAgICAgc2VyaWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3LnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmlhbGl6ZUFycmF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHcucHJvcCh0aGlzLCBcImVsZW1lbnRzXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgPyB3Lm1ha2VBcnJheShlKSA6IHRoaXNcclxuICAgICAgICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy50eXBlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZSAmJiAhdyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSAmJiBBdC50ZXN0KHRoaXMubm9kZU5hbWUpICYmICFOdC50ZXN0KGUpICYmICh0aGlzLmNoZWNrZWQgfHwgIXBlLnRlc3QoZSkpXHJcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG4gPSB3KHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgPT0gbiA/IG51bGwgOiBBcnJheS5pc0FycmF5KG4pID8gdy5tYXAobiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnJlcGxhY2UoRHQsIFwiXFxyXFxuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuLnJlcGxhY2UoRHQsIFwiXFxyXFxuXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmdldCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2YXIgcXQgPSAvJTIwL2csXHJcbiAgICAgICAgTHQgPSAvIy4qJC8sXHJcbiAgICAgICAgSHQgPSAvKFs/Jl0pXz1bXiZdKi8sXHJcbiAgICAgICAgT3QgPSAvXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLFxyXG4gICAgICAgIFB0ID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXHJcbiAgICAgICAgTXQgPSAvXig/OkdFVHxIRUFEKSQvLFxyXG4gICAgICAgIFJ0ID0gL15cXC9cXC8vLFxyXG4gICAgICAgIEl0ID0ge30sXHJcbiAgICAgICAgV3QgPSB7fSxcclxuICAgICAgICAkdCA9IFwiKi9cIi5jb25jYXQoXCIqXCIpLFxyXG4gICAgICAgIEJ0ID0gci5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIEJ0LmhyZWYgPSBDdC5ocmVmO1xyXG5cclxuICAgIGZ1bmN0aW9uIEZ0KGUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQsIG4pIHtcclxuICAgICAgICAgICAgXCJzdHJpbmdcIiAhPSB0eXBlb2YgdCAmJiAobiA9IHQsIHQgPSBcIipcIik7XHJcbiAgICAgICAgICAgIHZhciByLCBpID0gMCxcclxuICAgICAgICAgICAgICAgIG8gPSB0LnRvTG93ZXJDYXNlKCkubWF0Y2goTSkgfHwgW107XHJcbiAgICAgICAgICAgIGlmIChnKG4pKVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHIgPSBvW2krK10pIFwiK1wiID09PSByWzBdID8gKHIgPSByLnNsaWNlKDEpIHx8IFwiKlwiLCAoZVtyXSA9IGVbcl0gfHwgW10pLnVuc2hpZnQobikpIDogKGVbcl0gPSBlW3JdIHx8IFtdKS5wdXNoKG4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF90KGUsIHQsIG4sIHIpIHtcclxuICAgICAgICB2YXIgaSA9IHt9LFxyXG4gICAgICAgICAgICBvID0gZSA9PT0gV3Q7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGEocykge1xyXG4gICAgICAgICAgICB2YXIgdTtcclxuICAgICAgICAgICAgcmV0dXJuIGlbc10gPSAhMCwgdy5lYWNoKGVbc10gfHwgW10sIGZ1bmN0aW9uIChlLCBzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHModCwgbiwgcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiAhPSB0eXBlb2YgbCB8fCBvIHx8IGlbbF0gPyBvID8gISh1ID0gbCkgOiB2b2lkIDAgOiAodC5kYXRhVHlwZXMudW5zaGlmdChsKSwgYShsKSwgITEpXHJcbiAgICAgICAgICAgIH0pLCB1XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhKHQuZGF0YVR5cGVzWzBdKSB8fCAhaVtcIipcIl0gJiYgYShcIipcIilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB6dChlLCB0KSB7XHJcbiAgICAgICAgdmFyIG4sIHIsIGkgPSB3LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9ucyB8fCB7fTtcclxuICAgICAgICBmb3IgKG4gaW4gdCkgdm9pZCAwICE9PSB0W25dICYmICgoaVtuXSA/IGUgOiByIHx8IChyID0ge30pKVtuXSA9IHRbbl0pO1xyXG4gICAgICAgIHJldHVybiByICYmIHcuZXh0ZW5kKCEwLCBlLCByKSwgZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFh0KGUsIHQsIG4pIHtcclxuICAgICAgICB2YXIgciwgaSwgbywgYSwgcyA9IGUuY29udGVudHMsXHJcbiAgICAgICAgICAgIHUgPSBlLmRhdGFUeXBlcztcclxuICAgICAgICB3aGlsZSAoXCIqXCIgPT09IHVbMF0pIHUuc2hpZnQoKSwgdm9pZCAwID09PSByICYmIChyID0gZS5taW1lVHlwZSB8fCB0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtcclxuICAgICAgICBpZiAocilcclxuICAgICAgICAgICAgZm9yIChpIGluIHMpXHJcbiAgICAgICAgICAgICAgICBpZiAoc1tpXSAmJiBzW2ldLnRlc3QocikpIHtcclxuICAgICAgICAgICAgICAgICAgICB1LnVuc2hpZnQoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH0gaWYgKHVbMF0gaW4gbikgbyA9IHVbMF07XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoaSBpbiBuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVbMF0gfHwgZS5jb252ZXJ0ZXJzW2kgKyBcIiBcIiArIHVbMF1dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbyA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEgfHwgKGEgPSBpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG8gPSBvIHx8IGFcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG8pIHJldHVybiBvICE9PSB1WzBdICYmIHUudW5zaGlmdChvKSwgbltvXVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFV0KGUsIHQsIG4sIHIpIHtcclxuICAgICAgICB2YXIgaSwgbywgYSwgcywgdSwgbCA9IHt9LFxyXG4gICAgICAgICAgICBjID0gZS5kYXRhVHlwZXMuc2xpY2UoKTtcclxuICAgICAgICBpZiAoY1sxXSlcclxuICAgICAgICAgICAgZm9yIChhIGluIGUuY29udmVydGVycykgbFthLnRvTG93ZXJDYXNlKCldID0gZS5jb252ZXJ0ZXJzW2FdO1xyXG4gICAgICAgIG8gPSBjLnNoaWZ0KCk7XHJcbiAgICAgICAgd2hpbGUgKG8pXHJcbiAgICAgICAgICAgIGlmIChlLnJlc3BvbnNlRmllbGRzW29dICYmIChuW2UucmVzcG9uc2VGaWVsZHNbb11dID0gdCksICF1ICYmIHIgJiYgZS5kYXRhRmlsdGVyICYmICh0ID0gZS5kYXRhRmlsdGVyKHQsIGUuZGF0YVR5cGUpKSwgdSA9IG8sIG8gPSBjLnNoaWZ0KCkpXHJcbiAgICAgICAgICAgICAgICBpZiAoXCIqXCIgPT09IG8pIG8gPSB1O1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoXCIqXCIgIT09IHUgJiYgdSAhPT0gbykge1xyXG4gICAgICAgICAgICBpZiAoIShhID0gbFt1ICsgXCIgXCIgKyBvXSB8fCBsW1wiKiBcIiArIG9dKSlcclxuICAgICAgICAgICAgICAgIGZvciAoaSBpbiBsKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocyA9IGkuc3BsaXQoXCIgXCIpKVsxXSA9PT0gbyAmJiAoYSA9IGxbdSArIFwiIFwiICsgc1swXV0gfHwgbFtcIiogXCIgKyBzWzBdXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgITAgPT09IGEgPyBhID0gbFtpXSA6ICEwICE9PSBsW2ldICYmIChvID0gc1swXSwgYy51bnNoaWZ0KHNbMV0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9IGlmICghMCAhPT0gYSlcclxuICAgICAgICAgICAgICAgIGlmIChhICYmIGVbXCJ0aHJvd3NcIl0pIHQgPSBhKHQpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQgPSBhKHQpXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwicGFyc2VyZXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGEgPyBlIDogXCJObyBjb252ZXJzaW9uIGZyb20gXCIgKyB1ICsgXCIgdG8gXCIgKyBvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGF0ZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3LmV4dGVuZCh7XHJcbiAgICAgICAgYWN0aXZlOiAwLFxyXG4gICAgICAgIGxhc3RNb2RpZmllZDoge30sXHJcbiAgICAgICAgZXRhZzoge30sXHJcbiAgICAgICAgYWpheFNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHVybDogQ3QuaHJlZixcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgaXNMb2NhbDogUHQudGVzdChDdC5wcm90b2NvbCksXHJcbiAgICAgICAgICAgIGdsb2JhbDogITAsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiAhMCxcclxuICAgICAgICAgICAgYXN5bmM6ICEwLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcclxuICAgICAgICAgICAgYWNjZXB0czoge1xyXG4gICAgICAgICAgICAgICAgXCIqXCI6ICR0LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJ0ZXh0L3BsYWluXCIsXHJcbiAgICAgICAgICAgICAgICBodG1sOiBcInRleHQvaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgeG1sOiBcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixcclxuICAgICAgICAgICAgICAgIGpzb246IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudHM6IHtcclxuICAgICAgICAgICAgICAgIHhtbDogL1xcYnhtbFxcYi8sXHJcbiAgICAgICAgICAgICAgICBodG1sOiAvXFxiaHRtbC8sXHJcbiAgICAgICAgICAgICAgICBqc29uOiAvXFxianNvblxcYi9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2VGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgIHhtbDogXCJyZXNwb25zZVhNTFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJyZXNwb25zZVRleHRcIixcclxuICAgICAgICAgICAgICAgIGpzb246IFwicmVzcG9uc2VKU09OXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udmVydGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCIqIHRleHRcIjogU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0IGh0bWxcIjogITAsXHJcbiAgICAgICAgICAgICAgICBcInRleHQganNvblwiOiBKU09OLnBhcnNlLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0IHhtbFwiOiB3LnBhcnNlWE1MXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZsYXRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICEwLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dDogITBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWpheFNldHVwOiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdCA/IHp0KHp0KGUsIHcuYWpheFNldHRpbmdzKSwgdCkgOiB6dCh3LmFqYXhTZXR0aW5ncywgZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFqYXhQcmVmaWx0ZXI6IEZ0KEl0KSxcclxuICAgICAgICBhamF4VHJhbnNwb3J0OiBGdChXdCksXHJcbiAgICAgICAgYWpheDogZnVuY3Rpb24gKHQsIG4pIHtcclxuICAgICAgICAgICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgdCAmJiAobiA9IHQsIHQgPSB2b2lkIDApLCBuID0gbiB8fCB7fTtcclxuICAgICAgICAgICAgdmFyIGksIG8sIGEsIHMsIHUsIGwsIGMsIGYsIHAsIGQsIGggPSB3LmFqYXhTZXR1cCh7fSwgbiksXHJcbiAgICAgICAgICAgICAgICBnID0gaC5jb250ZXh0IHx8IGgsXHJcbiAgICAgICAgICAgICAgICB5ID0gaC5jb250ZXh0ICYmIChnLm5vZGVUeXBlIHx8IGcuanF1ZXJ5KSA/IHcoZykgOiB3LmV2ZW50LFxyXG4gICAgICAgICAgICAgICAgdiA9IHcuRGVmZXJyZWQoKSxcclxuICAgICAgICAgICAgICAgIG0gPSB3LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxyXG4gICAgICAgICAgICAgICAgeCA9IGguc3RhdHVzQ29kZSB8fCB7fSxcclxuICAgICAgICAgICAgICAgIGIgPSB7fSxcclxuICAgICAgICAgICAgICAgIFQgPSB7fSxcclxuICAgICAgICAgICAgICAgIEMgPSBcImNhbmNlbGVkXCIsXHJcbiAgICAgICAgICAgICAgICBFID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UmVzcG9uc2VIZWFkZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ID0gT3QuZXhlYyhhKSkgc1t0WzFdLnRvTG93ZXJDYXNlKCldID0gdFsyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdCA9IHNbZS50b0xvd2VyQ2FzZSgpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09IHQgPyBudWxsIDogdFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjID8gYSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09IGMgJiYgKGUgPSBUW2UudG9Mb3dlckNhc2UoKV0gPSBUW2UudG9Mb3dlckNhc2UoKV0gfHwgZSwgYltlXSA9IHQpLCB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBjICYmIChoLm1pbWVUeXBlID0gZSksIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjKSBFLmFsd2F5cyhlW0Uuc3RhdHVzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh0IGluIGUpIHhbdF0gPSBbeFt0XSwgZVt0XV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBlIHx8IEM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpICYmIGkuYWJvcnQodCksIGsoMCwgdCksIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodi5wcm9taXNlKEUpLCBoLnVybCA9ICgodCB8fCBoLnVybCB8fCBDdC5ocmVmKSArIFwiXCIpLnJlcGxhY2UoUnQsIEN0LnByb3RvY29sICsgXCIvL1wiKSwgaC50eXBlID0gbi5tZXRob2QgfHwgbi50eXBlIHx8IGgubWV0aG9kIHx8IGgudHlwZSwgaC5kYXRhVHlwZXMgPSAoaC5kYXRhVHlwZSB8fCBcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChNKSB8fCBbXCJcIl0sIG51bGwgPT0gaC5jcm9zc0RvbWFpbikge1xyXG4gICAgICAgICAgICAgICAgbCA9IHIuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGwuaHJlZiA9IGgudXJsLCBsLmhyZWYgPSBsLmhyZWYsIGguY3Jvc3NEb21haW4gPSBCdC5wcm90b2NvbCArIFwiLy9cIiArIEJ0Lmhvc3QgIT0gbC5wcm90b2NvbCArIFwiLy9cIiArIGwuaG9zdFxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGguY3Jvc3NEb21haW4gPSAhMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChoLmRhdGEgJiYgaC5wcm9jZXNzRGF0YSAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBoLmRhdGEgJiYgKGguZGF0YSA9IHcucGFyYW0oaC5kYXRhLCBoLnRyYWRpdGlvbmFsKSksIF90KEl0LCBoLCBuLCBFKSwgYykgcmV0dXJuIEU7XHJcbiAgICAgICAgICAgIChmID0gdy5ldmVudCAmJiBoLmdsb2JhbCkgJiYgMCA9PSB3LmFjdGl2ZSsrICYmIHcuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSwgaC50eXBlID0gaC50eXBlLnRvVXBwZXJDYXNlKCksIGguaGFzQ29udGVudCA9ICFNdC50ZXN0KGgudHlwZSksIG8gPSBoLnVybC5yZXBsYWNlKEx0LCBcIlwiKSwgaC5oYXNDb250ZW50ID8gaC5kYXRhICYmIGgucHJvY2Vzc0RhdGEgJiYgMCA9PT0gKGguY29udGVudFR5cGUgfHwgXCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSAmJiAoaC5kYXRhID0gaC5kYXRhLnJlcGxhY2UocXQsIFwiK1wiKSkgOiAoZCA9IGgudXJsLnNsaWNlKG8ubGVuZ3RoKSwgaC5kYXRhICYmIChoLnByb2Nlc3NEYXRhIHx8IFwic3RyaW5nXCIgPT0gdHlwZW9mIGguZGF0YSkgJiYgKG8gKz0gKGt0LnRlc3QobykgPyBcIiZcIiA6IFwiP1wiKSArIGguZGF0YSwgZGVsZXRlIGguZGF0YSksICExID09PSBoLmNhY2hlICYmIChvID0gby5yZXBsYWNlKEh0LCBcIiQxXCIpLCBkID0gKGt0LnRlc3QobykgPyBcIiZcIiA6IFwiP1wiKSArIFwiXz1cIiArIEV0KysgKyBkKSwgaC51cmwgPSBvICsgZCksIGguaWZNb2RpZmllZCAmJiAody5sYXN0TW9kaWZpZWRbb10gJiYgRS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIiwgdy5sYXN0TW9kaWZpZWRbb10pLCB3LmV0YWdbb10gJiYgRS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLCB3LmV0YWdbb10pKSwgKGguZGF0YSAmJiBoLmhhc0NvbnRlbnQgJiYgITEgIT09IGguY29udGVudFR5cGUgfHwgbi5jb250ZW50VHlwZSkgJiYgRS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIGguY29udGVudFR5cGUpLCBFLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgaC5kYXRhVHlwZXNbMF0gJiYgaC5hY2NlcHRzW2guZGF0YVR5cGVzWzBdXSA/IGguYWNjZXB0c1toLmRhdGFUeXBlc1swXV0gKyAoXCIqXCIgIT09IGguZGF0YVR5cGVzWzBdID8gXCIsIFwiICsgJHQgKyBcIjsgcT0wLjAxXCIgOiBcIlwiKSA6IGguYWNjZXB0c1tcIipcIl0pO1xyXG4gICAgICAgICAgICBmb3IgKHAgaW4gaC5oZWFkZXJzKSBFLnNldFJlcXVlc3RIZWFkZXIocCwgaC5oZWFkZXJzW3BdKTtcclxuICAgICAgICAgICAgaWYgKGguYmVmb3JlU2VuZCAmJiAoITEgPT09IGguYmVmb3JlU2VuZC5jYWxsKGcsIEUsIGgpIHx8IGMpKSByZXR1cm4gRS5hYm9ydCgpO1xyXG4gICAgICAgICAgICBpZiAoQyA9IFwiYWJvcnRcIiwgbS5hZGQoaC5jb21wbGV0ZSksIEUuZG9uZShoLnN1Y2Nlc3MpLCBFLmZhaWwoaC5lcnJvciksIGkgPSBfdChXdCwgaCwgbiwgRSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChFLnJlYWR5U3RhdGUgPSAxLCBmICYmIHkudHJpZ2dlcihcImFqYXhTZW5kXCIsIFtFLCBoXSksIGMpIHJldHVybiBFO1xyXG4gICAgICAgICAgICAgICAgaC5hc3luYyAmJiBoLnRpbWVvdXQgPiAwICYmICh1ID0gZS5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBFLmFib3J0KFwidGltZW91dFwiKVxyXG4gICAgICAgICAgICAgICAgfSwgaC50aW1lb3V0KSk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAhMSwgaS5zZW5kKGIsIGspXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMpIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaygtMSwgZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGsoLTEsIFwiTm8gVHJhbnNwb3J0XCIpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gayh0LCBuLCByLCBzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbCwgcCwgZCwgYiwgVCwgQyA9IG47XHJcbiAgICAgICAgICAgICAgICBjIHx8IChjID0gITAsIHUgJiYgZS5jbGVhclRpbWVvdXQodSksIGkgPSB2b2lkIDAsIGEgPSBzIHx8IFwiXCIsIEUucmVhZHlTdGF0ZSA9IHQgPiAwID8gNCA6IDAsIGwgPSB0ID49IDIwMCAmJiB0IDwgMzAwIHx8IDMwNCA9PT0gdCwgciAmJiAoYiA9IFh0KGgsIEUsIHIpKSwgYiA9IFV0KGgsIGIsIEUsIGwpLCBsID8gKGguaWZNb2RpZmllZCAmJiAoKFQgPSBFLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkgJiYgKHcubGFzdE1vZGlmaWVkW29dID0gVCksIChUID0gRS5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIikpICYmICh3LmV0YWdbb10gPSBUKSksIDIwNCA9PT0gdCB8fCBcIkhFQURcIiA9PT0gaC50eXBlID8gQyA9IFwibm9jb250ZW50XCIgOiAzMDQgPT09IHQgPyBDID0gXCJub3Rtb2RpZmllZFwiIDogKEMgPSBiLnN0YXRlLCBwID0gYi5kYXRhLCBsID0gIShkID0gYi5lcnJvcikpKSA6IChkID0gQywgIXQgJiYgQyB8fCAoQyA9IFwiZXJyb3JcIiwgdCA8IDAgJiYgKHQgPSAwKSkpLCBFLnN0YXR1cyA9IHQsIEUuc3RhdHVzVGV4dCA9IChuIHx8IEMpICsgXCJcIiwgbCA/IHYucmVzb2x2ZVdpdGgoZywgW3AsIEMsIEVdKSA6IHYucmVqZWN0V2l0aChnLCBbRSwgQywgZF0pLCBFLnN0YXR1c0NvZGUoeCksIHggPSB2b2lkIDAsIGYgJiYgeS50cmlnZ2VyKGwgPyBcImFqYXhTdWNjZXNzXCIgOiBcImFqYXhFcnJvclwiLCBbRSwgaCwgbCA/IHAgOiBkXSksIG0uZmlyZVdpdGgoZywgW0UsIENdKSwgZiAmJiAoeS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsIFtFLCBoXSksIC0tdy5hY3RpdmUgfHwgdy5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRKU09OOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdy5nZXQoZSwgdCwgbiwgXCJqc29uXCIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTY3JpcHQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3LmdldChlLCB2b2lkIDAsIHQsIFwic2NyaXB0XCIpXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZWFjaChbXCJnZXRcIiwgXCJwb3N0XCJdLCBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgIHdbdF0gPSBmdW5jdGlvbiAoZSwgbiwgciwgaSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZyhuKSAmJiAoaSA9IGkgfHwgciwgciA9IG4sIG4gPSB2b2lkIDApLCB3LmFqYXgody5leHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBlLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdCxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogbixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJcclxuICAgICAgICAgICAgfSwgdy5pc1BsYWluT2JqZWN0KGUpICYmIGUpKVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB3Ll9ldmFsVXJsID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdy5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBlLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJzY3JpcHRcIixcclxuICAgICAgICAgICAgY2FjaGU6ICEwLFxyXG4gICAgICAgICAgICBhc3luYzogITEsXHJcbiAgICAgICAgICAgIGdsb2JhbDogITEsXHJcbiAgICAgICAgICAgIFwidGhyb3dzXCI6ICEwXHJcbiAgICAgICAgfSlcclxuICAgIH0sIHcuZm4uZXh0ZW5kKHtcclxuICAgICAgICB3cmFwQWxsOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0gJiYgKGcoZSkgJiYgKGUgPSBlLmNhbGwodGhpc1swXSkpLCB0ID0gdyhlLCB0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSwgdGhpc1swXS5wYXJlbnROb2RlICYmIHQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLCB0Lm1hcChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoZS5maXJzdEVsZW1lbnRDaGlsZCkgZSA9IGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZVxyXG4gICAgICAgICAgICB9KS5hcHBlbmQodGhpcykpLCB0aGlzXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3cmFwSW5uZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnKGUpID8gdGhpcy5lYWNoKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB3KHRoaXMpLndyYXBJbm5lcihlLmNhbGwodGhpcywgdCkpXHJcbiAgICAgICAgICAgIH0pIDogdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gdyh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBuID0gdC5jb250ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgbi5sZW5ndGggPyBuLndyYXBBbGwoZSkgOiB0LmFwcGVuZChlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd3JhcDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBnKGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgICAgICAgICB3KHRoaXMpLndyYXBBbGwodCA/IGUuY2FsbCh0aGlzLCBuKSA6IGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bndyYXA6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudChlKS5ub3QoXCJib2R5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdyh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpXHJcbiAgICAgICAgICAgIH0pLCB0aGlzXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuICF3LmV4cHIucHNldWRvcy52aXNpYmxlKGUpXHJcbiAgICB9LCB3LmV4cHIucHNldWRvcy52aXNpYmxlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gISEoZS5vZmZzZXRXaWR0aCB8fCBlLm9mZnNldEhlaWdodCB8fCBlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKVxyXG4gICAgfSwgdy5hamF4U2V0dGluZ3MueGhyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgZS5YTUxIdHRwUmVxdWVzdFxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9O1xyXG4gICAgdmFyIFZ0ID0ge1xyXG4gICAgICAgICAgICAwOiAyMDAsXHJcbiAgICAgICAgICAgIDEyMjM6IDIwNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgR3QgPSB3LmFqYXhTZXR0aW5ncy54aHIoKTtcclxuICAgIGguY29ycyA9ICEhR3QgJiYgXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiBHdCwgaC5hamF4ID0gR3QgPSAhIUd0LCB3LmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgbiwgcjtcclxuICAgICAgICBpZiAoaC5jb3JzIHx8IEd0ICYmICF0LmNyb3NzRG9tYWluKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZW5kOiBmdW5jdGlvbiAoaSwgbykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGEsIHMgPSB0LnhocigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHMub3Blbih0LnR5cGUsIHQudXJsLCB0LmFzeW5jLCB0LnVzZXJuYW1lLCB0LnBhc3N3b3JkKSwgdC54aHJGaWVsZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChhIGluIHQueGhyRmllbGRzKSBzW2FdID0gdC54aHJGaWVsZHNbYV07XHJcbiAgICAgICAgICAgICAgICB0Lm1pbWVUeXBlICYmIHMub3ZlcnJpZGVNaW1lVHlwZSAmJiBzLm92ZXJyaWRlTWltZVR5cGUodC5taW1lVHlwZSksIHQuY3Jvc3NEb21haW4gfHwgaVtcIlgtUmVxdWVzdGVkLVdpdGhcIl0gfHwgKGlbXCJYLVJlcXVlc3RlZC1XaXRoXCJdID0gXCJYTUxIdHRwUmVxdWVzdFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAoYSBpbiBpKSBzLnNldFJlcXVlc3RIZWFkZXIoYSwgaVthXSk7XHJcbiAgICAgICAgICAgICAgICBuID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuICYmIChuID0gciA9IHMub25sb2FkID0gcy5vbmVycm9yID0gcy5vbmFib3J0ID0gcy5vbnRpbWVvdXQgPSBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGwsIFwiYWJvcnRcIiA9PT0gZSA/IHMuYWJvcnQoKSA6IFwiZXJyb3JcIiA9PT0gZSA/IFwibnVtYmVyXCIgIT0gdHlwZW9mIHMuc3RhdHVzID8gbygwLCBcImVycm9yXCIpIDogbyhzLnN0YXR1cywgcy5zdGF0dXNUZXh0KSA6IG8oVnRbcy5zdGF0dXNdIHx8IHMuc3RhdHVzLCBzLnN0YXR1c1RleHQsIFwidGV4dFwiICE9PSAocy5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIpIHx8IFwic3RyaW5nXCIgIT0gdHlwZW9mIHMucmVzcG9uc2VUZXh0ID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluYXJ5OiBzLnJlc3BvbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBzLnJlc3BvbnNlVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBzLm9ubG9hZCA9IG4oKSwgciA9IHMub25lcnJvciA9IHMub250aW1lb3V0ID0gbihcImVycm9yXCIpLCB2b2lkIDAgIT09IHMub25hYm9ydCA/IHMub25hYm9ydCA9IHIgOiBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICA0ID09PSBzLnJlYWR5U3RhdGUgJiYgZS5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbiAmJiByKClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSwgbiA9IG4oXCJhYm9ydFwiKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5zZW5kKHQuaGFzQ29udGVudCAmJiB0LmRhdGEgfHwgbnVsbClcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobikgdGhyb3cgZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbiAmJiBuKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB3LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLmNyb3NzRG9tYWluICYmIChlLmNvbnRlbnRzLnNjcmlwdCA9ICExKVxyXG4gICAgfSksIHcuYWpheFNldHVwKHtcclxuICAgICAgICBhY2NlcHRzOiB7XHJcbiAgICAgICAgICAgIHNjcmlwdDogXCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50czoge1xyXG4gICAgICAgICAgICBzY3JpcHQ6IC9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udmVydGVyczoge1xyXG4gICAgICAgICAgICBcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdy5nbG9iYWxFdmFsKGUpLCBlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdm9pZCAwID09PSBlLmNhY2hlICYmIChlLmNhY2hlID0gITEpLCBlLmNyb3NzRG9tYWluICYmIChlLnR5cGUgPSBcIkdFVFwiKVxyXG4gICAgfSksIHcuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLmNyb3NzRG9tYWluKSB7XHJcbiAgICAgICAgICAgIHZhciB0LCBuO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VuZDogZnVuY3Rpb24gKGksIG8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0ID0gdyhcIjxzY3JpcHQ+XCIpLnByb3Aoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFyc2V0OiBlLnNjcmlwdENoYXJzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZS51cmxcclxuICAgICAgICAgICAgICAgICAgICB9KS5vbihcImxvYWQgZXJyb3JcIiwgbiA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQucmVtb3ZlKCksIG4gPSBudWxsLCBlICYmIG8oXCJlcnJvclwiID09PSBlLnR5cGUgPyA0MDQgOiAyMDAsIGUudHlwZSlcclxuICAgICAgICAgICAgICAgICAgICB9KSwgci5oZWFkLmFwcGVuZENoaWxkKHRbMF0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBuICYmIG4oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2YXIgWXQgPSBbXSxcclxuICAgICAgICBRdCA9IC8oPSlcXD8oPz0mfCQpfFxcP1xcPy87XHJcbiAgICB3LmFqYXhTZXR1cCh7XHJcbiAgICAgICAganNvbnA6IFwiY2FsbGJhY2tcIixcclxuICAgICAgICBqc29ucENhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gWXQucG9wKCkgfHwgdy5leHBhbmRvICsgXCJfXCIgKyBFdCsrO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1tlXSA9ICEwLCBlXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIiwgZnVuY3Rpb24gKHQsIG4sIHIpIHtcclxuICAgICAgICB2YXIgaSwgbywgYSwgcyA9ICExICE9PSB0Lmpzb25wICYmIChRdC50ZXN0KHQudXJsKSA/IFwidXJsXCIgOiBcInN0cmluZ1wiID09IHR5cGVvZiB0LmRhdGEgJiYgMCA9PT0gKHQuY29udGVudFR5cGUgfHwgXCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSAmJiBRdC50ZXN0KHQuZGF0YSkgJiYgXCJkYXRhXCIpO1xyXG4gICAgICAgIGlmIChzIHx8IFwianNvbnBcIiA9PT0gdC5kYXRhVHlwZXNbMF0pIHJldHVybiBpID0gdC5qc29ucENhbGxiYWNrID0gZyh0Lmpzb25wQ2FsbGJhY2spID8gdC5qc29ucENhbGxiYWNrKCkgOiB0Lmpzb25wQ2FsbGJhY2ssIHMgPyB0W3NdID0gdFtzXS5yZXBsYWNlKFF0LCBcIiQxXCIgKyBpKSA6ICExICE9PSB0Lmpzb25wICYmICh0LnVybCArPSAoa3QudGVzdCh0LnVybCkgPyBcIiZcIiA6IFwiP1wiKSArIHQuanNvbnAgKyBcIj1cIiArIGkpLCB0LmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgfHwgdy5lcnJvcihpICsgXCIgd2FzIG5vdCBjYWxsZWRcIiksIGFbMF1cclxuICAgICAgICB9LCB0LmRhdGFUeXBlc1swXSA9IFwianNvblwiLCBvID0gZVtpXSwgZVtpXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYSA9IGFyZ3VtZW50c1xyXG4gICAgICAgIH0sIHIuYWx3YXlzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdm9pZCAwID09PSBvID8gdyhlKS5yZW1vdmVQcm9wKGkpIDogZVtpXSA9IG8sIHRbaV0gJiYgKHQuanNvbnBDYWxsYmFjayA9IG4uanNvbnBDYWxsYmFjaywgWXQucHVzaChpKSksIGEgJiYgZyhvKSAmJiBvKGFbMF0pLCBhID0gbyA9IHZvaWQgMFxyXG4gICAgICAgIH0pLCBcInNjcmlwdFwiXHJcbiAgICB9KSwgaC5jcmVhdGVIVE1MRG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGUgPSByLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O1xyXG4gICAgICAgIHJldHVybiBlLmlubmVySFRNTCA9IFwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwgMiA9PT0gZS5jaGlsZE5vZGVzLmxlbmd0aFxyXG4gICAgfSgpLCB3LnBhcnNlSFRNTCA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIHJldHVybiBbXTtcclxuICAgICAgICBcImJvb2xlYW5cIiA9PSB0eXBlb2YgdCAmJiAobiA9IHQsIHQgPSAhMSk7XHJcbiAgICAgICAgdmFyIGksIG8sIGE7XHJcbiAgICAgICAgcmV0dXJuIHQgfHwgKGguY3JlYXRlSFRNTERvY3VtZW50ID8gKChpID0gKHQgPSByLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWYgPSByLmxvY2F0aW9uLmhyZWYsIHQuaGVhZC5hcHBlbmRDaGlsZChpKSkgOiB0ID0gciksIG8gPSBBLmV4ZWMoZSksIGEgPSAhbiAmJiBbXSwgbyA/IFt0LmNyZWF0ZUVsZW1lbnQob1sxXSldIDogKG8gPSB4ZShbZV0sIHQsIGEpLCBhICYmIGEubGVuZ3RoICYmIHcoYSkucmVtb3ZlKCksIHcubWVyZ2UoW10sIG8uY2hpbGROb2RlcykpXHJcbiAgICB9LCB3LmZuLmxvYWQgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgIHZhciByLCBpLCBvLCBhID0gdGhpcyxcclxuICAgICAgICAgICAgcyA9IGUuaW5kZXhPZihcIiBcIik7XHJcbiAgICAgICAgcmV0dXJuIHMgPiAtMSAmJiAociA9IHZ0KGUuc2xpY2UocykpLCBlID0gZS5zbGljZSgwLCBzKSksIGcodCkgPyAobiA9IHQsIHQgPSB2b2lkIDApIDogdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiB0ICYmIChpID0gXCJQT1NUXCIpLCBhLmxlbmd0aCA+IDAgJiYgdy5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBlLFxyXG4gICAgICAgICAgICB0eXBlOiBpIHx8IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImh0bWxcIixcclxuICAgICAgICAgICAgZGF0YTogdFxyXG4gICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbyA9IGFyZ3VtZW50cywgYS5odG1sKHIgPyB3KFwiPGRpdj5cIikuYXBwZW5kKHcucGFyc2VIVE1MKGUpKS5maW5kKHIpIDogZSlcclxuICAgICAgICB9KS5hbHdheXMobiAmJiBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgICAgICBhLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbi5hcHBseSh0aGlzLCBvIHx8IFtlLnJlc3BvbnNlVGV4dCwgdCwgZV0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSksIHRoaXNcclxuICAgIH0sIHcuZWFjaChbXCJhamF4U3RhcnRcIiwgXCJhamF4U3RvcFwiLCBcImFqYXhDb21wbGV0ZVwiLCBcImFqYXhFcnJvclwiLCBcImFqYXhTdWNjZXNzXCIsIFwiYWpheFNlbmRcIl0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdy5mblt0XSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uKHQsIGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICByZXR1cm4gdy5ncmVwKHcudGltZXJzLCBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZSA9PT0gdC5lbGVtXHJcbiAgICAgICAgfSkubGVuZ3RoXHJcbiAgICB9LCB3Lm9mZnNldCA9IHtcclxuICAgICAgICBzZXRPZmZzZXQ6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHZhciByLCBpLCBvLCBhLCBzLCB1LCBsLCBjID0gdy5jc3MoZSwgXCJwb3NpdGlvblwiKSxcclxuICAgICAgICAgICAgICAgIGYgPSB3KGUpLFxyXG4gICAgICAgICAgICAgICAgcCA9IHt9O1xyXG4gICAgICAgICAgICBcInN0YXRpY1wiID09PSBjICYmIChlLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiKSwgcyA9IGYub2Zmc2V0KCksIG8gPSB3LmNzcyhlLCBcInRvcFwiKSwgdSA9IHcuY3NzKGUsIFwibGVmdFwiKSwgKGwgPSAoXCJhYnNvbHV0ZVwiID09PSBjIHx8IFwiZml4ZWRcIiA9PT0gYykgJiYgKG8gKyB1KS5pbmRleE9mKFwiYXV0b1wiKSA+IC0xKSA/IChhID0gKHIgPSBmLnBvc2l0aW9uKCkpLnRvcCwgaSA9IHIubGVmdCkgOiAoYSA9IHBhcnNlRmxvYXQobykgfHwgMCwgaSA9IHBhcnNlRmxvYXQodSkgfHwgMCksIGcodCkgJiYgKHQgPSB0LmNhbGwoZSwgbiwgdy5leHRlbmQoe30sIHMpKSksIG51bGwgIT0gdC50b3AgJiYgKHAudG9wID0gdC50b3AgLSBzLnRvcCArIGEpLCBudWxsICE9IHQubGVmdCAmJiAocC5sZWZ0ID0gdC5sZWZ0IC0gcy5sZWZ0ICsgaSksIFwidXNpbmdcIiBpbiB0ID8gdC51c2luZy5jYWxsKGUsIHApIDogZi5jc3MocClcclxuICAgICAgICB9XHJcbiAgICB9LCB3LmZuLmV4dGVuZCh7XHJcbiAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHZvaWQgMCA9PT0gZSA/IHRoaXMgOiB0aGlzLmVhY2goZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHcub2Zmc2V0LnNldE9mZnNldCh0aGlzLCBlLCB0KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHQsIG4sIHIgPSB0aGlzWzBdO1xyXG4gICAgICAgICAgICBpZiAocikgcmV0dXJuIHIuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggPyAodCA9IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIG4gPSByLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHRvcDogdC50b3AgKyBuLnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgbGVmdDogdC5sZWZ0ICsgbi5wYWdlWE9mZnNldFxyXG4gICAgICAgICAgICB9KSA6IHtcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBlLCB0LCBuLCByID0gdGhpc1swXSxcclxuICAgICAgICAgICAgICAgICAgICBpID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKFwiZml4ZWRcIiA9PT0gdy5jc3MociwgXCJwb3NpdGlvblwiKSkgdCA9IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ID0gdGhpcy5vZmZzZXQoKSwgbiA9IHIub3duZXJEb2N1bWVudCwgZSA9IHIub2Zmc2V0UGFyZW50IHx8IG4uZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlICYmIChlID09PSBuLmJvZHkgfHwgZSA9PT0gbi5kb2N1bWVudEVsZW1lbnQpICYmIFwic3RhdGljXCIgPT09IHcuY3NzKGUsIFwicG9zaXRpb25cIikpIGUgPSBlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZSAmJiBlICE9PSByICYmIDEgPT09IGUubm9kZVR5cGUgJiYgKChpID0gdyhlKS5vZmZzZXQoKSkudG9wICs9IHcuY3NzKGUsIFwiYm9yZGVyVG9wV2lkdGhcIiwgITApLCBpLmxlZnQgKz0gdy5jc3MoZSwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgITApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IHQudG9wIC0gaS50b3AgLSB3LmNzcyhyLCBcIm1hcmdpblRvcFwiLCAhMCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdC5sZWZ0IC0gaS5sZWZ0IC0gdy5jc3MociwgXCJtYXJnaW5MZWZ0XCIsICEwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoZSAmJiBcInN0YXRpY1wiID09PSB3LmNzcyhlLCBcInBvc2l0aW9uXCIpKSBlID0gZS5vZmZzZXRQYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZSB8fCBiZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pLCB3LmVhY2goe1xyXG4gICAgICAgIHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIixcclxuICAgICAgICBzY3JvbGxUb3A6IFwicGFnZVlPZmZzZXRcIlxyXG4gICAgfSwgZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICB2YXIgbiA9IFwicGFnZVlPZmZzZXRcIiA9PT0gdDtcclxuICAgICAgICB3LmZuW2VdID0gZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHoodGhpcywgZnVuY3Rpb24gKGUsIHIsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvO1xyXG4gICAgICAgICAgICAgICAgaWYgKHkoZSkgPyBvID0gZSA6IDkgPT09IGUubm9kZVR5cGUgJiYgKG8gPSBlLmRlZmF1bHRWaWV3KSwgdm9pZCAwID09PSBpKSByZXR1cm4gbyA/IG9bdF0gOiBlW3JdO1xyXG4gICAgICAgICAgICAgICAgbyA/IG8uc2Nyb2xsVG8obiA/IG8ucGFnZVhPZmZzZXQgOiBpLCBuID8gaSA6IG8ucGFnZVlPZmZzZXQpIDogZVtyXSA9IGlcclxuICAgICAgICAgICAgfSwgZSwgciwgYXJndW1lbnRzLmxlbmd0aClcclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5lYWNoKFtcInRvcFwiLCBcImxlZnRcIl0sIGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdy5jc3NIb29rc1t0XSA9IF9lKGgucGl4ZWxQb3NpdGlvbiwgZnVuY3Rpb24gKGUsIG4pIHtcclxuICAgICAgICAgICAgaWYgKG4pIHJldHVybiBuID0gRmUoZSwgdCksIFdlLnRlc3QobikgPyB3KGUpLnBvc2l0aW9uKClbdF0gKyBcInB4XCIgOiBuXHJcbiAgICAgICAgfSlcclxuICAgIH0pLCB3LmVhY2goe1xyXG4gICAgICAgIEhlaWdodDogXCJoZWlnaHRcIixcclxuICAgICAgICBXaWR0aDogXCJ3aWR0aFwiXHJcbiAgICB9LCBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgIHcuZWFjaCh7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiaW5uZXJcIiArIGUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHQsXHJcbiAgICAgICAgICAgIFwiXCI6IFwib3V0ZXJcIiArIGVcclxuICAgICAgICB9LCBmdW5jdGlvbiAobiwgcikge1xyXG4gICAgICAgICAgICB3LmZuW3JdID0gZnVuY3Rpb24gKGksIG8pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhID0gYXJndW1lbnRzLmxlbmd0aCAmJiAobiB8fCBcImJvb2xlYW5cIiAhPSB0eXBlb2YgaSksXHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IG4gfHwgKCEwID09PSBpIHx8ICEwID09PSBvID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHoodGhpcywgZnVuY3Rpb24gKHQsIG4sIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geSh0KSA/IDAgPT09IHIuaW5kZXhPZihcIm91dGVyXCIpID8gdFtcImlubmVyXCIgKyBlXSA6IHQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIgKyBlXSA6IDkgPT09IHQubm9kZVR5cGUgPyAobyA9IHQuZG9jdW1lbnRFbGVtZW50LCBNYXRoLm1heCh0LmJvZHlbXCJzY3JvbGxcIiArIGVdLCBvW1wic2Nyb2xsXCIgKyBlXSwgdC5ib2R5W1wib2Zmc2V0XCIgKyBlXSwgb1tcIm9mZnNldFwiICsgZV0sIG9bXCJjbGllbnRcIiArIGVdKSkgOiB2b2lkIDAgPT09IGkgPyB3LmNzcyh0LCBuLCBzKSA6IHcuc3R5bGUodCwgbiwgaSwgcylcclxuICAgICAgICAgICAgICAgIH0sIHQsIGEgPyBpIDogdm9pZCAwLCBhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pLCB3LmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbiAoZSwgdCkge1xyXG4gICAgICAgIHcuZm5bdF0gPSBmdW5jdGlvbiAoZSwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgPyB0aGlzLm9uKHQsIG51bGwsIGUsIG4pIDogdGhpcy50cmlnZ2VyKHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSksIHcuZm4uZXh0ZW5kKHtcclxuICAgICAgICBob3ZlcjogZnVuY3Rpb24gKGUsIHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHQgfHwgZSlcclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5mbi5leHRlbmQoe1xyXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uKGUsIG51bGwsIHQsIG4pXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9mZihlLCBudWxsLCB0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZWdhdGU6IGZ1bmN0aW9uIChlLCB0LCBuLCByKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uKHQsIGUsIG4sIHIpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmRlbGVnYXRlOiBmdW5jdGlvbiAoZSwgdCwgbikge1xyXG4gICAgICAgICAgICByZXR1cm4gMSA9PT0gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMub2ZmKGUsIFwiKipcIikgOiB0aGlzLm9mZih0LCBlIHx8IFwiKipcIiwgbilcclxuICAgICAgICB9XHJcbiAgICB9KSwgdy5wcm94eSA9IGZ1bmN0aW9uIChlLCB0KSB7XHJcbiAgICAgICAgdmFyIG4sIHIsIGk7XHJcbiAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHQgJiYgKG4gPSBlW3RdLCB0ID0gZSwgZSA9IG4pLCBnKGUpKSByZXR1cm4gciA9IG8uY2FsbChhcmd1bWVudHMsIDIpLCBpID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZS5hcHBseSh0IHx8IHRoaXMsIHIuY29uY2F0KG8uY2FsbChhcmd1bWVudHMpKSlcclxuICAgICAgICB9LCBpLmd1aWQgPSBlLmd1aWQgPSBlLmd1aWQgfHwgdy5ndWlkKyssIGlcclxuICAgIH0sIHcuaG9sZFJlYWR5ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID8gdy5yZWFkeVdhaXQrKyA6IHcucmVhZHkoITApXHJcbiAgICB9LCB3LmlzQXJyYXkgPSBBcnJheS5pc0FycmF5LCB3LnBhcnNlSlNPTiA9IEpTT04ucGFyc2UsIHcubm9kZU5hbWUgPSBOLCB3LmlzRnVuY3Rpb24gPSBnLCB3LmlzV2luZG93ID0geSwgdy5jYW1lbENhc2UgPSBHLCB3LnR5cGUgPSB4LCB3Lm5vdyA9IERhdGUubm93LCB3LmlzTnVtZXJpYyA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHQgPSB3LnR5cGUoZSk7XHJcbiAgICAgICAgcmV0dXJuIChcIm51bWJlclwiID09PSB0IHx8IFwic3RyaW5nXCIgPT09IHQpICYmICFpc05hTihlIC0gcGFyc2VGbG9hdChlKSlcclxuICAgIH0sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgJiYgZGVmaW5lKFwianF1ZXJ5XCIsIFtdLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdcclxuICAgIH0pO1xyXG4gICAgdmFyIEp0ID0gZS5qUXVlcnksXHJcbiAgICAgICAgS3QgPSBlLiQ7XHJcbiAgICByZXR1cm4gdy5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICByZXR1cm4gZS4kID09PSB3ICYmIChlLiQgPSBLdCksIHQgJiYgZS5qUXVlcnkgPT09IHcgJiYgKGUualF1ZXJ5ID0gSnQpLCB3XHJcbiAgICB9LCB0IHx8IChlLmpRdWVyeSA9IGUuJCA9IHcpLCB3XHJcbn0pO1xyXG4iLCIvKlxyXG4gVmVyc2lvbjogMS45LjBcclxuICBBdXRob3I6IEtlbiBXaGVlbGVyXHJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cclxuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xyXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xyXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcclxuICovXHJcbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cclxuLypqc2xpbnQgYnJvd3Nlcjp0cnVlICovXHJcbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xyXG4gICAgfVxyXG5cclxufShmdW5jdGlvbigkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XHJcblxyXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcclxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXHJcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXHJcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcclxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcclxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xyXG5cclxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XHJcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XHJcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xyXG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcclxuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XHJcblxyXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XHJcblxyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcblxyXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XHJcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XHJcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcclxuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XHJcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XHJcblxyXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcclxuXHJcbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXHJcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcclxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxyXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xyXG5cclxuXHJcbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xyXG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFNsaWNrO1xyXG5cclxuICAgIH0oKSk7XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xyXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xyXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XHJcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcclxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXHJcbiAgICAgICAgICAgIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcclxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XHJcblxyXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xyXG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGksIGRvdDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XHJcblxyXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID1cclxuICAgICAgICAgICAgXy4kc2xpZGVyXHJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgJChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcclxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xyXG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XHJcblxyXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xyXG5cclxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcclxuXHJcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xyXG5cclxuICAgICAgICBfLmJ1aWxkRG90cygpO1xyXG5cclxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcclxuXHJcblxyXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcclxuXHJcbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcclxuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcclxuICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcclxuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xyXG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcclxuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxyXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcclxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cclxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcclxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXHJcbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cclxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xyXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XHJcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcclxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XHJcblxyXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcclxuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcclxuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxyXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxyXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcclxuXHJcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xyXG5cclxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xyXG5cclxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xyXG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuXHJcbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XHJcblxyXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cykge1xyXG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxyXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy4kbmV4dEFycm93XHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcclxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XHJcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcclxuXHJcbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighcmVmcmVzaCkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XHJcblxyXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcblxyXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gSWYgYW55IGNoaWxkIGVsZW1lbnQgcmVjZWl2ZXMgZm9jdXMgd2l0aGluIHRoZSBzbGlkZXIgd2UgbmVlZCB0byBwYXVzZSB0aGUgYXV0b3BsYXlcclxuICAgICAgICBfLiRzbGlkZXJcclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXHJcbiAgICAgICAgICAgIC5vbihcclxuICAgICAgICAgICAgICAgICdmb2N1cy5zbGljaycsXHJcbiAgICAgICAgICAgICAgICAnKicsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkc2YuaXMoJzpmb2N1cycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICkub24oXHJcbiAgICAgICAgICAgICAgICAnYmx1ci5zbGljaycsXHJcbiAgICAgICAgICAgICAgICAnKicsXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIGEgYmx1ciBvY2N1cnMgb24gYW55IGVsZW1lbnRzIHdpdGhpbiB0aGUgc2xpZGVyIHdlIGJlY29tZSB1bmZvY3VzZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XHJcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gMSArIE1hdGguY2VpbCgoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XHJcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFnZXJRdHkgLSAxO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcclxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcclxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXHJcbiAgICAgICAgICAgIGNvZWY7XHJcblxyXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xyXG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcclxuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIC8gMikgLSAoKF8uc2xpZGVXaWR0aCAqIF8uc2xpZGVDb3VudCkgLyAyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxyXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXHJcbiAgICAgICAgICAgIG1heDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcclxuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xyXG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcclxuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xyXG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5kZXhlcztcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgc3dpcGVUYXJnZXQsIGNlbnRlck9mZnNldDtcclxuXHJcbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBNYXRoLmZsb29yKF8uJGxpc3Qud2lkdGgoKSAvIDIpIDogMDtcclxuICAgICAgICBzd2lwZVRhcmdldCA9IChfLnN3aXBlTGVmdCAqIC0xKSArIGNlbnRlck9mZnNldDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVPdXRlcldpZHRoLCBzbGlkZU9mZnNldCwgc2xpZGVSaWdodEJvdW5kYXJ5O1xyXG4gICAgICAgICAgICAgICAgc2xpZGVPdXRlcldpZHRoID0gJChzbGlkZSkub3V0ZXJXaWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBzbGlkZS5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgKz0gKHNsaWRlT3V0ZXJXaWR0aCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlUmlnaHRCb3VuZGFyeSA9IHNsaWRlT2Zmc2V0ICsgKHNsaWRlT3V0ZXJXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN3aXBlVGFyZ2V0IDwgc2xpZGVSaWdodEJvdW5kYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XHJcblxyXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XHJcblxyXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xyXG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XHJcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcclxuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcclxuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XHJcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xyXG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xyXG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcclxuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLmluaXRBREEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcclxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xyXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcclxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxyXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcclxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcclxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xyXG4gICAgICAgICAgICB9KS5lbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcclxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcclxuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxyXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xyXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xyXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXHJcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xyXG5cclxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcclxuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xyXG5cclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcclxuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XHJcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XHJcblxyXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xyXG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcclxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgXy5pbml0VUkoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xyXG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcclxuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcclxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XHJcblxyXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XHJcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XHJcblxyXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxyXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcclxuXHJcbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcclxuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcclxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcclxuXHJcbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcblxyXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXHJcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxyXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cclxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcblxyXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcclxuXHJcbiAgICAgICAgXy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xyXG5cclxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID1cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xyXG5cclxuICAgICAgICBfLnNldFByb3BzKCk7XHJcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XHJcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcclxuICAgICAgICBfLmJ1aWxkRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xyXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XHJcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcclxuXHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XHJcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcclxuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcclxuICAgICAgICAgICAgeCwgeTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xyXG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XHJcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XHJcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcclxuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XHJcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XHJcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxyXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XHJcblxyXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XHJcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcclxuXHJcbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XHJcblxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcclxuXHJcbiAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xyXG5cclxuICAgICAgICBfLnNldEhlaWdodCgpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XHJcblxyXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XHJcblxyXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcclxuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcclxuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcclxuXHJcbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXHJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXHJcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAuZXEoaW5kZXgpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XHJcblxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xyXG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcclxuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cclxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XHJcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxyXG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XHJcblxyXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXHJcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XHJcblxyXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcclxuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcclxuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xyXG5cclxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xyXG5cclxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xyXG5cclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcclxuXHJcbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcclxuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xyXG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XHJcblxyXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcclxuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxyXG4gICAgICAgICAgICBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xyXG5cclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xyXG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcclxuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXHJcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxyXG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XHJcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XHJcblxyXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xyXG5cclxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XHJcblxyXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XHJcblxyXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcclxuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XHJcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0b3VjaGVzO1xyXG5cclxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XHJcblxyXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuXHJcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcclxuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcclxuICAgICAgICBfLmRlc3Ryb3koKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcclxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxyXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHNcclxuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHNcclxuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXHJcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxyXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcclxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxyXG4gICAgICAgICAgICBpLFxyXG4gICAgICAgICAgICByZXQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXztcclxuICAgIH07XHJcblxyXG59KSk7XHJcbiIsIi8qanNsaW50IGJyb3dzZXI6dHJ1ZSAqL1xyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIC8qPT09IE5hdmlnYXRpb24gbWVudSA9PT0qL1xyXG4gICAgJCgnLm5hdmlnYXRpb24tbWVudScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBNb2JpbGUgTWVudVxyXG4gICAgICAgIHZhciBtZW51SWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSxcclxuICAgICAgICAgICAgbG9nb0F0dHIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbG9nbycpO1xyXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJtb2JpbGUtbWVudVwiIGlkPVwiJyArIG1lbnVJZCArICdcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJvdmVybGF5LWNsb3NlXCI+PC9hPjxkaXYgY2xhc3M9XCJtZW51LWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICAvLyBDb3B5aW5nIFRoZSBNZW51IFRvIE1vYmlsZSBDb250YWluZXJcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKFwidWxcIikuY2xvbmUoKS5hcHBlbmRUbygnIycgKyBtZW51SWQgKyAnIC5tZW51LWNvbnRlbnQnKTtcclxuICAgICAgICAvLyBIYWNraW5nIFN1Ym1lbnUnc1xyXG4gICAgICAgICQoJy5uYXZpZ2F0aW9uLW1lbnUgdWwsLm5hdmlnYXRpb24tbWVudSAubWVnYW1lbnUnKS5wYXJlbnQoJ2xpJykuY2hpbGRyZW4oJ2EnKS5hZGRDbGFzcygnc3VibWVudSB0aS1hcnJvdy1kb3duLWNoZXZyb24nKTtcclxuICAgICAgICAkKCcubW9iaWxlLW1lbnUgdWwsLm1vYmlsZS1tZW51IC5tZWdhbWVudScpLnBhcmVudCgnbGknKS5jaGlsZHJlbignYScpLmFkZENsYXNzKCdzdWJtZW51JykuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwidG9nZ2xlLWRpc3BsYXkgdGktYXJyb3ctZG93bi1jaGV2cm9uXCI+PC9zcGFuPicpO1xyXG4gICAgICAgICQoJy5uYXZpZ2F0aW9uLW1lbnUgLm1lZ2FtZW51JykucGFyZW50KCdsaScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdzdGF0aWMnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gQWRkaW5nIExvZ28gVG8gTW9iaWxlIE1lbnVcclxuICAgICAgICBpZiAodHlwZW9mIGxvZ29BdHRyICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIGxvZ29BdHRyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAkKCcjJyArIG1lbnVJZCkuYWRkQ2xhc3MoJ2hhcy1sb2dvJykuY2hpbGRyZW4oJy5tZW51LWNvbnRlbnQnKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibG9nb1wiPiA8aW1nIHNyYz1cIicgKyBsb2dvQXR0ciArICdcIiBhbHQ9XCJsb2dvXCI+PC9kaXY+ICcpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKj09PSBNb2JpbGUgTWVudSBCdXR0b24gPT09Ki9cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLm1lbnUtYnRuW2RhdGEtaWRdJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG1lbnVJZCA9ICQodGhpcykuYXR0cignZGF0YS1pZCcpO1xyXG4gICAgICAgICQoJyMnICsgbWVudUlkKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKj09PSBNb2JpbGUgTWVudSBPdmVybGF5IENsb3NlID09PSovXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tb2JpbGUtbWVudSAub3ZlcmxheS1jbG9zZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgnLm1vYmlsZS1tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyo9PT0gTW9iaWxlIE1lbnUgU3VibWVudXMgPT09Ki9cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLm1vYmlsZS1tZW51IC50b2dnbGUtZGlzcGxheScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3RpLWNsb3NlIHRpLWFycm93LWRvd24tY2hldnJvbicpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCdsaScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLz09PSBOZXN0ZWQgTXVsdGkgTGV2ZWwgTWVudSA9PT0vL1xyXG4gICAgJCgnLm5lc3RlZC1tZW51IHVsJykucGFyZW50KCdsaScpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ3N1Ym1lbnUgdGktYXJyb3ctZG93bi1jaGV2cm9uJyk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5uZXN0ZWQtbWVudSB1bCAuc3VibWVudScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJ3VsJykuc2xpZGVUb2dnbGUoNzAwKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGknKS50b2dnbGVDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmNoaWxkcmVuKCd1bCcpLnNsaWRlVXAoNzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vPT09IERyb3Bkb3ducyA9PT0vL1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZHJvcGRvd24tYnRuJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJy5kcm9wZG93bi1saXN0Jykuc2xpZGVUb2dnbGUoNTAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIEFueXRoaW5nIHRoYXQgZ2V0cyB0byB0aGUgZG9jdW1lbnQgd2lsbCBoaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmRyb3Bkb3duLWxpc3RcIikuc2xpZGVUb2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIENsaWNrcyB3aXRoaW4gdGhlIGRyb3Bkb3duIHdvbid0IG1ha2UgaXQgcGFzdCB0aGUgZHJvcGRvd24gaXRzZWxmICovXHJcbiAgICAkKFwiLmRyb3Bkb3duLWxpc3RcIikuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0pO1xyXG59KTsiLCIvKmpzbGludCBicm93c2VyOnRydWUgKi9cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICAvKj09PT09IFRhYnMgU3lzdGVtID09PT09Ki9cclxuICAgICQoJy50YWJzLW1lbnUgW2RhdGEtdGFiXTpmaXJzdC1vZi10eXBlLC50YWItY29udGVudDpmaXJzdC1vZi10eXBlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAvLyBBY3RpdmF0ZSBGaXJzdCB0YWIgYW5kIGl0cyBDb250ZW50IEJveFxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcudGFicy1tZW51IFtkYXRhLXRhYl0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRhYklkID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhYicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCdbZGF0YS10YWJdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBBY3RpdmF0ZSBDbGlja2VkIFRhYlxyXG4gICAgICAgICQoJyMnICsgdGFiSWQpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnLnRhYi1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyAvLyBBY3RpdmF0ZSBUYWIgQ29udGVudFxyXG4gICAgfSk7XHJcblxyXG4gICAgLyo9PT09PSBBY2NvcmRpb24gPT09PT0qL1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5hY2NvcmRpb24tdGl0bGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCcuYWNjb3JkaW9uLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpLnBhcmVudCgnLmFjY29yZGlvbi1pdGVtJykuc2libGluZ3MoKS5jaGlsZHJlbignLmFjY29yZGlvbi1jb250ZW50Jykuc2xpZGVVcCgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCcuYWNjb3JkaW9uLWl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJy5hY2NvcmRpb24taXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG59KTsiLCIvKmpzbGludCBicm93c2VyOnRydWUgKi9cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICAvLz09PT09PSBGb3JtcyA9PT09PT0vL1xyXG4gICAgJCgnKltwbGFjZWhvbGRlcl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGxhY2VIb2xkID0gJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgICAgICQodGhpcykub24oe1xyXG4gICAgICAgICAgICBmb2N1c2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJyAnKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGZvY3Vzb3V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywgcGxhY2VIb2xkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuY29sb3ItY2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtY29sb3InKTtcclxuICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kJywnIycgKyBjb2xvcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLz09PT09PSBMaW5lZCBGb3JtIEVmZmVjdCA9PT09PT0vL1xyXG4gICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCcuZm9ybS11aS5saW5lZCBpbnB1dDpub3QoLmJ0biksLmZvcm0tdWkubGluZWQgdGV4dGFyZWEnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgY29udHJvbF92YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmIChjb250cm9sX3ZhbCAhPT0gJycpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9ncmVzcy1iYXInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzVmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICBpZiAoIHBhZ2VEaXJlY3Rpb24gPT0gJ2x0cicgKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOnByb2dyZXNzVmFsdWUsXHJcbiAgICAgICAgICAgIH0pLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1udW1cIiBzdHlsZT1cImxlZnQ6JyArIHByb2dyZXNzVmFsdWUgKyAnXCI+JyArIHByb2dyZXNzVmFsdWUgKyAnPC9zcGFuPicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY3NzKHtcclxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOnByb2dyZXNzVmFsdWUsXHJcbiAgICAgICAgICAgIH0pLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJwcm9ncmVzcy1udW1cIiBzdHlsZT1cInJpZ2h0OicgKyBwcm9ncmVzc1ZhbHVlICsgJ1wiPicgKyBwcm9ncmVzc1ZhbHVlICsgJzwvc3Bhbj4nKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyo9PT09PSBGaWxlIFVwbG9hZGVyID09PT0qL1xyXG4gICAgJChcImJvZHlcIikub24oXCJjaGFuZ2VcIixcIi5maWxlLWlucHV0IGlucHV0W3R5cGU9J2ZpbGUnXVwiLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICB2YXIgZmlsZVBhdGggPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICQodGhpcykuZ2V0KDApLmZpbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGZpbGVQYXRoLnB1c2goJCh0aGlzKS5nZXQoMCkuZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYXR0cignZGF0YS10ZXh0JyxmaWxlUGF0aCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnLmVkaXQtYnRuJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJ2lucHV0LHNlbGVjdCx0ZXh0YXJlYScpLmF0dHIoJ3JlYWRvbmx5JyxmYWxzZSkuZm9jdXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qPT09PT09IFF1YW50aXR5IElucHV0ID09PT09PT0qL1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5xdWFudGl0eS1pbnB1dCAuaW5jcmVhc2UnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC52YWwoIChwYXJzZUludChpbnB1dC52YWwoKSkgKyAxKSApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5xdWFudGl0eS1pbnB1dCAuZGljcmVhc2UnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC52YWwoIChwYXJzZUludChpbnB1dC52YWwoKSkgLSAxKSApO1xyXG4gICAgfSk7XHJcbn0pOyIsIi8qanNsaW50IGJyb3dzZXI6dHJ1ZSAqL1xyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIC8qPT09PT09PT09IE1vZGFscyA9PT09PT09PT0qL1xyXG4gICAgJCgnLm1vZGFsLWJveCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucHJlcGVuZCgnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIj48L2E+Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLW1vZGFsXScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBtb2RhbE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwnKTtcclxuICAgICAgICAkKCcjJyArIG1vZGFsTmFtZSkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcubW9kYWwtYm94IC5tb2RhbC1vdmVybGF5JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5tb2RhbC1ib3gnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tb2RhbC1ib3ggLmNsb3NlLW1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcubW9kYWwtYm94JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn0pOyIsIi8qanNsaW50IGJyb3dzZXI6dHJ1ZSAqL1xyXG5qUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvKj09PT09PT0gQmFja2dyb3VuZHMgPT09PT09Ki9cclxuICAgICQoJ1tkYXRhLXNyY10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYmFja2dyb3VuZEltYWdlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyYycpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgYmFja2dyb3VuZEltYWdlICsgJyknKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qPT09IFN0aWNreSBFbGVtZW50cyA9PT0qL1xyXG4gICAgaWYgKCQoJ1tkYXRhLXN0aWNreV0nKS5sZW5ndGgpIHsgLy8gQ2hlY2sgaWYgRWxlbWVudCBFeGlzdFxyXG4gICAgICAgIC8vPT09IE9mZnNldCBWYXJyaWFibGVzID09PS8vXHJcbiAgICAgICAgdmFyIHRvcCA9ICQoJ1tkYXRhLXN0aWNreV0nKS5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICAgIG9mZnNldHYgPSB0b3AgKyA1MDtcclxuICAgICAgICAvLz09PSBPbiBTY3JvbGwgRXZlbnQgPT09Ly9cclxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgeSA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIGlmICh5ID49IG9mZnNldHYpIHtcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXN0aWNreV0nKS5hZGRDbGFzcygnaXMtc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1zdGlja3ldJykucmVtb3ZlQ2xhc3MoJ2lzLXN0aWNreScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vPT09IENvbGxhcHNlZCBCb3gncyA9PT0vL1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcud2lkZ2V0LWJsb2NrIC50aXRsZSwuY29udGVudC1ibG9jayAudGl0bGUnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2xvc2VkJykuc2libGluZ3MoJy5jb2xsYXBzZWQtY29udGVudCcpLnNsaWRlVG9nZ2xlKDUwMCkudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy89PT0gQW5pbWF0ZWQgTnVtYmVycyA9PT0vL1xyXG4gICAgJCgnW2RhdGEtbnVtYmVyc10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBjb3VudFRvID0gJHRoaXMuYXR0cignZGF0YS1udW1iZXJzJyk7XHJcbiAgICAgICAgJCh7IGNvdW50TnVtOiAkdGhpcy50ZXh0KCkgfSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIGNvdW50TnVtOiBjb3VudFRvXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogODAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJHRoaXMudGV4dChNYXRoLmZsb29yKHRoaXMuY291bnROdW0pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICR0aGlzLnRleHQodGhpcy5jb3VudE51bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qPT09PT0gUmVzcG9uc2l2ZSBYIFRvb2x0aXAgPT09PT0qL1xyXG4gICAgJCgnLnRvb2x0aXAtc3RhcnQudG9vbHRpcC1yZXNwb25zaXZlLC50b29sdGlwLWVuZC50b29sdGlwLXJlc3BvbnNpdmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzdGFydFRpcCA9ICQodGhpcykub2Zmc2V0KCkubGVmdCxcclxuICAgICAgICAgICAgZW5kVGlwID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0ICsgJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpO1xyXG4gICAgICAgIGlmKHN0YXJ0VGlwIDwgMTAwICYmIGVuZFRpcCA8IDEwMCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0b29sdGlwLWJvdHRvbScpLnJlbW92ZUNsYXNzKCd0b29sdGlwLWVuZCcpLnJlbW92ZUNsYXNzKCd0b29sdGlwLXN0YXJ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyo9PT09PSBSZXNwb25zaXZlIFkgVG9vbHRpcCA9PT09PSovXHJcbiAgICAkKCcudG9vbHRpcC50b29sdGlwLXJlc3BvbnNpdmUnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0b3BUaXAgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuICAgICAgICBpZih0b3BUaXAgPCA1MCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0b29sdGlwLWJvdHRvbScpLnJlbW92ZUNsYXNzKCd0b29sdGlwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnRvb2x0aXAtYm90dG9tLnRvb2x0aXAtcmVzcG9uc2l2ZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJvdHRvbVRpcCA9ICQodGhpcykub2Zmc2V0KCkudG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgICBpZihib3R0b21UaXAgPCA1MCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0b29sdGlwJykucmVtb3ZlQ2xhc3MoJ3Rvb2x0aXAtYm90dG9tJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLyo9PT09PSBSZW1vdmUgUGFyZW50IEJ1dHRvbiA9PT09PT0qL1xyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJy5yZW1vdmUtaXRlbScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBHcmFwIE9wdGlvbnNcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgICAgICBwYXJlbnRUYWcgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFnJyk7XHJcbiAgICAgICAgLy8gUmVtb3ZlIFNwZWNpZmljIFRhcmdldFxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIHRhcmdldCAhPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAkKCcjJyArIHRhcmdldCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyZW50VGFnICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmIHBhcmVudFRhZyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIFRhcmdldGVkIEhUTUwgVGFnXHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cyhwYXJlbnRUYWcpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBEaXJlY3QgUGFyZW50XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIi8qPT09IEdsb2JhbCBqUXVlcnkgPT09Ki9cclxualF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLyo9PT0gRGlyZWN0aW9uIERldGVjdG9yID09PT0qL1xyXG4gICAgdmFyIHBhZ2VEaXJlY3Rpb24gPSAkKCdib2R5JykuY3NzKCdkaXJlY3Rpb24nKTtcclxuXHJcbiAgICAvLz09PT0gTXVsdGkgTGFuZ2FnZXMgPT09PS8vXHJcbiAgICBpZiAoIHBhZ2VEaXJlY3Rpb24gPT0gJ3J0bCcgKSB7XHJcbiAgICAgICAgLy89PT09PSBSVEwgQ29kZSA9PT09Ly9cclxuICAgICAgICAkKCcuaG9tZS1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHJ0bDogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czp0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJzbGljay1wcmV2IHRpLWFycm93LWxlZnQtY2hldnJvblwiPjwvYT4nLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJzbGljay1uZXh0IHRpLWFycm93LXJpZ2h0LWNoZXZyb25cIj48L2E+JyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnRvdXJzLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgcnRsOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNzAwMCxcclxuICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJzbGljay1wcmV2IHRpLWFycm93LWxlZnQtY2hldnJvblwiPjwvYT4nLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJzbGljay1uZXh0IHRpLWFycm93LXJpZ2h0LWNoZXZyb25cIj48L2E+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge2JyZWFrcG9pbnQ6IDgwNSxzZXR0aW5nczoge3NsaWRlc1RvU2hvdzogMn19LFxyXG4gICAgICAgICAgICAgICAge2JyZWFrcG9pbnQ6IDY0MCxzZXR0aW5nczoge3NsaWRlc1RvU2hvdzogMSxjZW50ZXJNb2RlOnRydWV9fVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLz09PT09IExUUiBDb2RlID09PT0vL1xyXG4gICAgICAgICQoJy5ob21lLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czp0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJzbGljay1wcmV2IHRpLWFycm93LWxlZnQtY2hldnJvblwiPjwvYT4nLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJzbGljay1uZXh0IHRpLWFycm93LXJpZ2h0LWNoZXZyb25cIj48L2E+JyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLnRvdXJzLXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDcwMDAsXHJcbiAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwic2xpY2stcHJldiB0aS1hcnJvdy1sZWZ0LWNoZXZyb25cIj48L2E+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwic2xpY2stbmV4dCB0aS1hcnJvdy1yaWdodC1jaGV2cm9uXCI+PC9hPicsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHticmVha3BvaW50OiA4MDUsc2V0dGluZ3M6IHtzbGlkZXNUb1Nob3c6IDJ9fSxcclxuICAgICAgICAgICAgICAgIHticmVha3BvaW50OiA2NDAsc2V0dGluZ3M6IHtzbGlkZXNUb1Nob3c6IDEsY2VudGVyTW9kZTp0cnVlfX1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pOyJdfQ==
