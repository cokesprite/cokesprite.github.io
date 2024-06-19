!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).xlog = {})
}(this, (function(t) {
    "use strict";
    if (typeof window === "undefined") {
        return
    }
    function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ,
        n.apply(this, arguments)
    }
    function r(e) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        r(e)
    }
    function o(e, t) {
        return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        o(e, t)
    }
    function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function u(e, t, n) {
        return u = i() ? Reflect.construct.bind() : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r));
            return n && o(i, n.prototype),
            i
        }
        ,
        u.apply(null, arguments)
    }
    function a(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return a = function(e) {
            if (null === e || (n = e,
            -1 === Function.toString.call(n).indexOf("[native code]")))
                return e;
            var n;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, i)
            }
            function i() {
                return u(e, arguments, r(this).constructor)
            }
            return i.prototype = Object.create(e.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            o(i, e)
        }
        ,
        a(e)
    }
    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function s(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (n)
            return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
            }
        }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var f = function(e, t) {
        return f = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        ,
        f(e, t)
    };
    function l(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        f(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    function p(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function u(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function a(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(u, a)
            }
            c((r = r.apply(e, t || [])).next())
        }
        ))
    }
    function d(e, t) {
        var n, r, o, i, u = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function a(i) {
            return function(a) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; u; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return u.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(),
                                u.trys.pop();
                                continue;
                            default:
                                if (!(o = u.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < o[1]) {
                                    u.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2],
                                    u.ops.push(i);
                                    break
                                }
                                o[2] && u.ops.pop(),
                                u.trys.pop();
                                continue
                            }
                            i = t.call(e, u)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    }
    function v(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , r = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return e && r >= e.length && (e = void 0),
                    {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function h(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var r, o, i = n.call(e), u = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                u.push(r.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return u
    }
    function m(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++)
                !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
    }
    function y(e) {
        return this instanceof y ? (this.v = e,
        this) : new y(e)
    }
    function b(e, t, n) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []), i = [];
        return r = {},
        u("next"),
        u("throw"),
        u("return"),
        r[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        r;
        function u(e) {
            o[e] && (r[e] = function(t) {
                return new Promise((function(n, r) {
                    i.push([e, t, n, r]) > 1 || a(e, t)
                }
                ))
            }
            )
        }
        function a(e, t) {
            try {
                !function(e) {
                    e.value instanceof y ? Promise.resolve(e.value.v).then(c, s) : f(i[0][2], e)
                }(o[e](t))
            } catch (e) {
                f(i[0][3], e)
            }
        }
        function c(e) {
            a("next", e)
        }
        function s(e) {
            a("throw", e)
        }
        function f(e, t) {
            e(t),
            i.shift(),
            i.length && a(i[0][0], i[0][1])
        }
    }
    function g(e) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = v(e),
        t = {},
        r("next"),
        r("throw"),
        r("return"),
        t[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        t);
        function r(n) {
            t[n] = e[n] && function(t) {
                return new Promise((function(r, o) {
                    (function(e, t, n, r) {
                        Promise.resolve(r).then((function(t) {
                            e({
                                value: t,
                                done: n
                            })
                        }
                        ), t)
                    }
                    )(r, o, (t = e[n](t)).done, t.value)
                }
                ))
            }
        }
    }
    function w(e) {
        return "function" == typeof e
    }
    function _(e) {
        var t = e((function(e) {
            Error.call(e),
            e.stack = (new Error).stack
        }
        ));
        return t.prototype = Object.create(Error.prototype),
        t.prototype.constructor = t,
        t
    }
    var E = _((function(e) {
        return function(t) {
            e(this),
            this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(e, t) {
                return t + 1 + ") " + e.toString()
            }
            )).join("\n  ") : "",
            this.name = "UnsubscriptionError",
            this.errors = t
        }
    }
    ));
    function x(e, t) {
        if (e) {
            var n = e.indexOf(t);
            0 <= n && e.splice(n, 1)
        }
    }
    var S = function() {
        function e(e) {
            this.initialTeardown = e,
            this.closed = !1,
            this._parentage = null,
            this._teardowns = null
        }
        var t;
        return e.prototype.unsubscribe = function() {
            var e, t, n, r, o;
            if (!this.closed) {
                this.closed = !0;
                var i = this._parentage;
                if (i)
                    if (this._parentage = null,
                    Array.isArray(i))
                        try {
                            for (var u = v(i), a = u.next(); !a.done; a = u.next()) {
                                a.value.remove(this)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (t = u.return) && t.call(u)
                            } finally {
                                if (e)
                                    throw e.error
                            }
                        }
                    else
                        i.remove(this);
                var c = this.initialTeardown;
                if (w(c))
                    try {
                        c()
                    } catch (e) {
                        o = e instanceof E ? e.errors : [e]
                    }
                var s = this._teardowns;
                if (s) {
                    this._teardowns = null;
                    try {
                        for (var f = v(s), l = f.next(); !l.done; l = f.next()) {
                            var p = l.value;
                            try {
                                I(p)
                            } catch (e) {
                                o = null != o ? o : [],
                                e instanceof E ? o = m(m([], h(o)), h(e.errors)) : o.push(e)
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            l && !l.done && (r = f.return) && r.call(f)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                if (o)
                    throw new E(o)
            }
        }
        ,
        e.prototype.add = function(t) {
            var n;
            if (t && t !== this)
                if (this.closed)
                    I(t);
                else {
                    if (t instanceof e) {
                        if (t.closed || t._hasParent(this))
                            return;
                        t._addParent(this)
                    }
                    (this._teardowns = null !== (n = this._teardowns) && void 0 !== n ? n : []).push(t)
                }
        }
        ,
        e.prototype._hasParent = function(e) {
            var t = this._parentage;
            return t === e || Array.isArray(t) && t.includes(e)
        }
        ,
        e.prototype._addParent = function(e) {
            var t = this._parentage;
            this._parentage = Array.isArray(t) ? (t.push(e),
            t) : t ? [t, e] : e
        }
        ,
        e.prototype._removeParent = function(e) {
            var t = this._parentage;
            t === e ? this._parentage = null : Array.isArray(t) && x(t, e)
        }
        ,
        e.prototype.remove = function(t) {
            var n = this._teardowns;
            n && x(n, t),
            t instanceof e && t._removeParent(this)
        }
        ,
        e.EMPTY = ((t = new e).closed = !0,
        t),
        e
    }()
      , T = S.EMPTY;
    function O(e) {
        return e instanceof S || e && "closed"in e && w(e.remove) && w(e.add) && w(e.unsubscribe)
    }
    function I(e) {
        w(e) ? e() : e.unsubscribe()
    }
    var R = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    }
      , A = {
        setTimeout: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var n = A.delegate;
            return ((null == n ? void 0 : n.setTimeout) || setTimeout).apply(void 0, m([], h(e)))
        },
        clearTimeout: function(e) {
            var t = A.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };
    function k(e) {
        A.setTimeout((function() {
            var t = R.onUnhandledError;
            if (!t)
                throw e;
            t(e)
        }
        ))
    }
    function P() {}
    var C = null;
    function N(e) {
        if (R.useDeprecatedSynchronousErrorHandling) {
            var t = !C;
            if (t && (C = {
                errorThrown: !1,
                error: null
            }),
            e(),
            t) {
                var n = C
                  , r = n.errorThrown
                  , o = n.error;
                if (C = null,
                r)
                    throw o
            }
        } else
            e()
    }
    var L = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.isStopped = !1,
            t ? (n.destination = t,
            O(t) && t.add(n)) : n.destination = M,
            n
        }
        return l(t, e),
        t.create = function(e, t, n) {
            return new j(e,t,n)
        }
        ,
        t.prototype.next = function(e) {
            this.isStopped || this._next(e)
        }
        ,
        t.prototype.error = function(e) {
            this.isStopped || (this.isStopped = !0,
            this._error(e))
        }
        ,
        t.prototype.complete = function() {
            this.isStopped || (this.isStopped = !0,
            this._complete())
        }
        ,
        t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0,
            e.prototype.unsubscribe.call(this),
            this.destination = null)
        }
        ,
        t.prototype._next = function(e) {
            this.destination.next(e)
        }
        ,
        t.prototype._error = function(e) {
            try {
                this.destination.error(e)
            } finally {
                this.unsubscribe()
            }
        }
        ,
        t.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }
        ,
        t
    }(S)
      , j = function(e) {
        function t(t, n, r) {
            var o, i = e.call(this) || this;
            if (w(t))
                o = t;
            else if (t) {
                var u;
                o = t.next,
                n = t.error,
                r = t.complete,
                i && R.useDeprecatedNextContext ? (u = Object.create(t)).unsubscribe = function() {
                    return i.unsubscribe()
                }
                : u = t,
                o = null == o ? void 0 : o.bind(u),
                n = null == n ? void 0 : n.bind(u),
                r = null == r ? void 0 : r.bind(u)
            }
            return i.destination = {
                next: o ? B(o) : P,
                error: B(null != n ? n : D),
                complete: r ? B(r) : P
            },
            i
        }
        return l(t, e),
        t
    }(L);
    function B(e, t) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            try {
                e.apply(void 0, m([], h(t)))
            } catch (e) {
                k(e)
            }
        }
    }
    function D(e) {
        throw e
    }
    var M = {
        closed: !0,
        next: P,
        error: D,
        complete: P
    }
      , F = "function" == typeof Symbol && Symbol.observable || "@@observable";
    function H(e) {
        return e
    }
    function U(e) {
        return 0 === e.length ? H : 1 === e.length ? e[0] : function(t) {
            return e.reduce((function(e, t) {
                return t(e)
            }
            ), t)
        }
    }
    var z = function() {
        function e(e) {
            e && (this._subscribe = e)
        }
        return e.prototype.lift = function(t) {
            var n = new e;
            return n.source = this,
            n.operator = t,
            n
        }
        ,
        e.prototype.subscribe = function(e, t, n) {
            var r, o = this, i = (r = e) && r instanceof L || function(e) {
                return e && w(e.next) && w(e.error) && w(e.complete)
            }(r) && O(r) ? e : new j(e,t,n);
            return N((function() {
                var e = o
                  , t = e.operator
                  , n = e.source;
                i.add(t ? t.call(i, n) : n ? o._subscribe(i) : o._trySubscribe(i))
            }
            )),
            i
        }
        ,
        e.prototype._trySubscribe = function(e) {
            try {
                return this._subscribe(e)
            } catch (t) {
                e.error(t)
            }
        }
        ,
        e.prototype.forEach = function(e, t) {
            var n = this;
            return new (t = W(t))((function(t, r) {
                var o = new j({
                    next: function(t) {
                        try {
                            e(t)
                        } catch (e) {
                            r(e),
                            o.unsubscribe()
                        }
                    },
                    error: r,
                    complete: t
                });
                n.subscribe(o)
            }
            ))
        }
        ,
        e.prototype._subscribe = function(e) {
            var t;
            return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)
        }
        ,
        e.prototype[F] = function() {
            return this
        }
        ,
        e.prototype.pipe = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return U(e)(this)
        }
        ,
        e.prototype.toPromise = function(e) {
            var t = this;
            return new (e = W(e))((function(e, n) {
                var r;
                t.subscribe((function(e) {
                    return r = e
                }
                ), (function(e) {
                    return n(e)
                }
                ), (function() {
                    return e(r)
                }
                ))
            }
            ))
        }
        ,
        e.create = function(t) {
            return new e(t)
        }
        ,
        e
    }();
    function W(e) {
        var t;
        return null !== (t = null != e ? e : R.Promise) && void 0 !== t ? t : Promise
    }
    function q(e) {
        return function(t) {
            if (function(e) {
                return w(null == e ? void 0 : e.lift)
            }(t))
                return t.lift((function(t) {
                    try {
                        return e(t, this)
                    } catch (e) {
                        this.error(e)
                    }
                }
                ));
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }
    var G = function(e) {
        function t(t, n, r, o, i) {
            var u = e.call(this, t) || this;
            return u.onFinalize = i,
            u._next = n ? function(e) {
                try {
                    n(e)
                } catch (e) {
                    t.error(e)
                }
            }
            : e.prototype._next,
            u._error = o ? function(e) {
                try {
                    o(e)
                } catch (e) {
                    t.error(e)
                } finally {
                    this.unsubscribe()
                }
            }
            : e.prototype._error,
            u._complete = r ? function() {
                try {
                    r()
                } catch (e) {
                    t.error(e)
                } finally {
                    this.unsubscribe()
                }
            }
            : e.prototype._complete,
            u
        }
        return l(t, e),
        t.prototype.unsubscribe = function() {
            var t, n = this.closed;
            e.prototype.unsubscribe.call(this),
            !n && (null === (t = this.onFinalize) || void 0 === t || t.call(this))
        }
        ,
        t
    }(L)
      , J = _((function(e) {
        return function() {
            e(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
    }
    ))
      , V = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.closed = !1,
            t.observers = [],
            t.isStopped = !1,
            t.hasError = !1,
            t.thrownError = null,
            t
        }
        return l(t, e),
        t.prototype.lift = function(e) {
            var t = new K(this,this);
            return t.operator = e,
            t
        }
        ,
        t.prototype._throwIfClosed = function() {
            if (this.closed)
                throw new J
        }
        ,
        t.prototype.next = function(e) {
            var t = this;
            N((function() {
                var n, r;
                if (t._throwIfClosed(),
                !t.isStopped) {
                    var o = t.observers.slice();
                    try {
                        for (var i = v(o), u = i.next(); !u.done; u = i.next()) {
                            u.value.next(e)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
            }
            ))
        }
        ,
        t.prototype.error = function(e) {
            var t = this;
            N((function() {
                if (t._throwIfClosed(),
                !t.isStopped) {
                    t.hasError = t.isStopped = !0,
                    t.thrownError = e;
                    for (var n = t.observers; n.length; )
                        n.shift().error(e)
                }
            }
            ))
        }
        ,
        t.prototype.complete = function() {
            var e = this;
            N((function() {
                if (e._throwIfClosed(),
                !e.isStopped) {
                    e.isStopped = !0;
                    for (var t = e.observers; t.length; )
                        t.shift().complete()
                }
            }
            ))
        }
        ,
        t.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0,
            this.observers = null
        }
        ,
        Object.defineProperty(t.prototype, "observed", {
            get: function() {
                var e;
                return (null === (e = this.observers) || void 0 === e ? void 0 : e.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype._trySubscribe = function(t) {
            return this._throwIfClosed(),
            e.prototype._trySubscribe.call(this, t)
        }
        ,
        t.prototype._subscribe = function(e) {
            return this._throwIfClosed(),
            this._checkFinalizedStatuses(e),
            this._innerSubscribe(e)
        }
        ,
        t.prototype._innerSubscribe = function(e) {
            var t = this
              , n = t.hasError
              , r = t.isStopped
              , o = t.observers;
            return n || r ? T : (o.push(e),
            new S((function() {
                return x(o, e)
            }
            )))
        }
        ,
        t.prototype._checkFinalizedStatuses = function(e) {
            var t = this
              , n = t.hasError
              , r = t.thrownError
              , o = t.isStopped;
            n ? e.error(r) : o && e.complete()
        }
        ,
        t.prototype.asObservable = function() {
            var e = new z;
            return e.source = this,
            e
        }
        ,
        t.create = function(e, t) {
            return new K(e,t)
        }
        ,
        t
    }(z)
      , K = function(e) {
        function t(t, n) {
            var r = e.call(this) || this;
            return r.destination = t,
            r.source = n,
            r
        }
        return l(t, e),
        t.prototype.next = function(e) {
            var t, n;
            null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === n || n.call(t, e)
        }
        ,
        t.prototype.error = function(e) {
            var t, n;
            null === (n = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === n || n.call(t, e)
        }
        ,
        t.prototype.complete = function() {
            var e, t;
            null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) || void 0 === t || t.call(e)
        }
        ,
        t.prototype._subscribe = function(e) {
            var t, n;
            return null !== (n = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)) && void 0 !== n ? n : T
        }
        ,
        t
    }(V)
      , X = {
        now: function() {
            return (X.delegate || Date).now()
        },
        delegate: void 0
    }
      , $ = function(e) {
        function t(t, n, r) {
            void 0 === t && (t = 1 / 0),
            void 0 === n && (n = 1 / 0),
            void 0 === r && (r = X);
            var o = e.call(this) || this;
            return o._bufferSize = t,
            o._windowTime = n,
            o._timestampProvider = r,
            o._buffer = [],
            o._infiniteTimeWindow = !0,
            o._infiniteTimeWindow = n === 1 / 0,
            o._bufferSize = Math.max(1, t),
            o._windowTime = Math.max(1, n),
            o
        }
        return l(t, e),
        t.prototype.next = function(t) {
            var n = this
              , r = n.isStopped
              , o = n._buffer
              , i = n._infiniteTimeWindow
              , u = n._timestampProvider
              , a = n._windowTime;
            r || (o.push(t),
            !i && o.push(u.now() + a)),
            this._trimBuffer(),
            e.prototype.next.call(this, t)
        }
        ,
        t.prototype._subscribe = function(e) {
            this._throwIfClosed(),
            this._trimBuffer();
            for (var t = this._innerSubscribe(e), n = this._infiniteTimeWindow, r = this._buffer.slice(), o = 0; o < r.length && !e.closed; o += n ? 1 : 2)
                e.next(r[o]);
            return this._checkFinalizedStatuses(e),
            t
        }
        ,
        t.prototype._trimBuffer = function() {
            var e = this
              , t = e._bufferSize
              , n = e._timestampProvider
              , r = e._buffer
              , o = e._infiniteTimeWindow
              , i = (o ? 1 : 2) * t;
            if (t < 1 / 0 && i < r.length && r.splice(0, r.length - i),
            !o) {
                for (var u = n.now(), a = 0, c = 1; c < r.length && r[c] <= u; c += 2)
                    a = c;
                a && r.splice(0, a + 1)
            }
        }
        ,
        t
    }(V)
      , Y = function(e) {
        function t(t, n) {
            return e.call(this) || this
        }
        return l(t, e),
        t.prototype.schedule = function(e, t) {
            return this
        }
        ,
        t
    }(S)
      , Z = {
        setInterval: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var n = Z.delegate;
            return ((null == n ? void 0 : n.setInterval) || setInterval).apply(void 0, m([], h(e)))
        },
        clearInterval: function(e) {
            var t = Z.delegate;
            return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    }
      , Q = function(e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return r.scheduler = t,
            r.work = n,
            r.pending = !1,
            r
        }
        return l(t, e),
        t.prototype.schedule = function(e, t) {
            if (void 0 === t && (t = 0),
            this.closed)
                return this;
            this.state = e;
            var n = this.id
              , r = this.scheduler;
            return null != n && (this.id = this.recycleAsyncId(r, n, t)),
            this.pending = !0,
            this.delay = t,
            this.id = this.id || this.requestAsyncId(r, this.id, t),
            this
        }
        ,
        t.prototype.requestAsyncId = function(e, t, n) {
            return void 0 === n && (n = 0),
            Z.setInterval(e.flush.bind(e, this), n)
        }
        ,
        t.prototype.recycleAsyncId = function(e, t, n) {
            if (void 0 === n && (n = 0),
            null != n && this.delay === n && !1 === this.pending)
                return t;
            Z.clearInterval(t)
        }
        ,
        t.prototype.execute = function(e, t) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(e, t);
            if (n)
                return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }
        ,
        t.prototype._execute = function(e, t) {
            var n, r = !1;
            try {
                this.work(e)
            } catch (e) {
                r = !0,
                n = e || new Error("Scheduled action threw falsy error")
            }
            if (r)
                return this.unsubscribe(),
                n
        }
        ,
        t.prototype.unsubscribe = function() {
            if (!this.closed) {
                var t = this.id
                  , n = this.scheduler
                  , r = n.actions;
                this.work = this.state = this.scheduler = null,
                this.pending = !1,
                x(r, this),
                null != t && (this.id = this.recycleAsyncId(n, t, null)),
                this.delay = null,
                e.prototype.unsubscribe.call(this)
            }
        }
        ,
        t
    }(Y)
      , ee = function() {
        function e(t, n) {
            void 0 === n && (n = e.now),
            this.schedulerActionCtor = t,
            this.now = n
        }
        return e.prototype.schedule = function(e, t, n) {
            return void 0 === t && (t = 0),
            new this.schedulerActionCtor(this,e).schedule(n, t)
        }
        ,
        e.now = X.now,
        e
    }()
      , te = new (function(e) {
        function t(t, n) {
            void 0 === n && (n = ee.now);
            var r = e.call(this, t, n) || this;
            return r.actions = [],
            r._active = !1,
            r._scheduled = void 0,
            r
        }
        return l(t, e),
        t.prototype.flush = function(e) {
            var t = this.actions;
            if (this._active)
                t.push(e);
            else {
                var n;
                this._active = !0;
                do {
                    if (n = e.execute(e.state, e.delay))
                        break
                } while (e = t.shift());
                if (this._active = !1,
                n) {
                    for (; e = t.shift(); )
                        e.unsubscribe();
                    throw n
                }
            }
        }
        ,
        t
    }(ee))(Q)
      , ne = te
      , re = new z((function(e) {
        return e.complete()
    }
    ));
    function oe(e) {
        return e && w(e.schedule)
    }
    function ie(e) {
        return oe((t = e)[t.length - 1]) ? e.pop() : void 0;
        var t
    }
    var ue = function(e) {
        return e && "number" == typeof e.length && "function" != typeof e
    };
    function ae(e) {
        return w(null == e ? void 0 : e.then)
    }
    function ce(e) {
        return w(e[F])
    }
    function se(e) {
        return Symbol.asyncIterator && w(null == e ? void 0 : e[Symbol.asyncIterator])
    }
    function fe(e) {
        return new TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }
    var le = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    function pe(e) {
        return w(null == e ? void 0 : e[le])
    }
    function de(e) {
        return b(this, arguments, (function() {
            var t, n, r;
            return d(this, (function(o) {
                switch (o.label) {
                case 0:
                    t = e.getReader(),
                    o.label = 1;
                case 1:
                    o.trys.push([1, , 9, 10]),
                    o.label = 2;
                case 2:
                    return [4, y(t.read())];
                case 3:
                    return n = o.sent(),
                    r = n.value,
                    n.done ? [4, y(void 0)] : [3, 5];
                case 4:
                    return [2, o.sent()];
                case 5:
                    return [4, y(r)];
                case 6:
                    return [4, o.sent()];
                case 7:
                    return o.sent(),
                    [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return t.releaseLock(),
                    [7];
                case 10:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function ve(e) {
        return w(null == e ? void 0 : e.getReader)
    }
    function he(e) {
        if (e instanceof z)
            return e;
        if (null != e) {
            if (ce(e))
                return o = e,
                new z((function(e) {
                    var t = o[F]();
                    if (w(t.subscribe))
                        return t.subscribe(e);
                    throw new TypeError("Provided object does not correctly implement Symbol.observable")
                }
                ));
            if (ue(e))
                return r = e,
                new z((function(e) {
                    for (var t = 0; t < r.length && !e.closed; t++)
                        e.next(r[t]);
                    e.complete()
                }
                ));
            if (ae(e))
                return n = e,
                new z((function(e) {
                    n.then((function(t) {
                        e.closed || (e.next(t),
                        e.complete())
                    }
                    ), (function(t) {
                        return e.error(t)
                    }
                    )).then(null, k)
                }
                ));
            if (se(e))
                return me(e);
            if (pe(e))
                return t = e,
                new z((function(e) {
                    var n, r;
                    try {
                        for (var o = v(t), i = o.next(); !i.done; i = o.next()) {
                            var u = i.value;
                            if (e.next(u),
                            e.closed)
                                return
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    e.complete()
                }
                ));
            if (ve(e))
                return me(de(e))
        }
        var t, n, r, o;
        throw fe(e)
    }
    function me(e) {
        return new z((function(t) {
            (function(e, t) {
                var n, r, o, i;
                return p(this, void 0, void 0, (function() {
                    var u, a;
                    return d(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            c.trys.push([0, 5, 6, 11]),
                            n = g(e),
                            c.label = 1;
                        case 1:
                            return [4, n.next()];
                        case 2:
                            if ((r = c.sent()).done)
                                return [3, 4];
                            if (u = r.value,
                            t.next(u),
                            t.closed)
                                return [2];
                            c.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [3, 11];
                        case 5:
                            return a = c.sent(),
                            o = {
                                error: a
                            },
                            [3, 11];
                        case 6:
                            return c.trys.push([6, , 9, 10]),
                            r && !r.done && (i = n.return) ? [4, i.call(n)] : [3, 8];
                        case 7:
                            c.sent(),
                            c.label = 8;
                        case 8:
                            return [3, 10];
                        case 9:
                            if (o)
                                throw o.error;
                            return [7];
                        case 10:
                            return [7];
                        case 11:
                            return t.complete(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            )(e, t).catch((function(e) {
                return t.error(e)
            }
            ))
        }
        ))
    }
    function ye(e, t, n, r, o) {
        void 0 === r && (r = 0),
        void 0 === o && (o = !1);
        var i = t.schedule((function() {
            n(),
            o ? e.add(this.schedule(null, r)) : this.unsubscribe()
        }
        ), r);
        if (e.add(i),
        !o)
            return i
    }
    function be(e, t) {
        return void 0 === t && (t = 0),
        q((function(n, r) {
            n.subscribe(new G(r,(function(n) {
                return ye(r, e, (function() {
                    return r.next(n)
                }
                ), t)
            }
            ),(function() {
                return ye(r, e, (function() {
                    return r.complete()
                }
                ), t)
            }
            ),(function(n) {
                return ye(r, e, (function() {
                    return r.error(n)
                }
                ), t)
            }
            )))
        }
        ))
    }
    function ge(e, t) {
        return void 0 === t && (t = 0),
        q((function(n, r) {
            r.add(e.schedule((function() {
                return n.subscribe(r)
            }
            ), t))
        }
        ))
    }
    function we(e, t) {
        if (!e)
            throw new Error("Iterable cannot be null");
        return new z((function(n) {
            ye(n, t, (function() {
                var r = e[Symbol.asyncIterator]();
                ye(n, t, (function() {
                    r.next().then((function(e) {
                        e.done ? n.complete() : n.next(e.value)
                    }
                    ))
                }
                ), 0, !0)
            }
            ))
        }
        ))
    }
    function _e(e, t) {
        if (null != e) {
            if (ce(e))
                return function(e, t) {
                    return he(e).pipe(ge(t), be(t))
                }(e, t);
            if (ue(e))
                return function(e, t) {
                    return new z((function(n) {
                        var r = 0;
                        return t.schedule((function() {
                            r === e.length ? n.complete() : (n.next(e[r++]),
                            n.closed || this.schedule())
                        }
                        ))
                    }
                    ))
                }(e, t);
            if (ae(e))
                return function(e, t) {
                    return he(e).pipe(ge(t), be(t))
                }(e, t);
            if (se(e))
                return we(e, t);
            if (pe(e))
                return function(e, t) {
                    return new z((function(n) {
                        var r;
                        return ye(n, t, (function() {
                            r = e[le](),
                            ye(n, t, (function() {
                                var e, t, o;
                                try {
                                    t = (e = r.next()).value,
                                    o = e.done
                                } catch (e) {
                                    return void n.error(e)
                                }
                                o ? n.complete() : n.next(t)
                            }
                            ), 0, !0)
                        }
                        )),
                        function() {
                            return w(null == r ? void 0 : r.return) && r.return()
                        }
                    }
                    ))
                }(e, t);
            if (ve(e))
                return function(e, t) {
                    return we(de(e), t)
                }(e, t)
        }
        throw fe(e)
    }
    function Ee(e, t) {
        return t ? _e(e, t) : he(e)
    }
    function xe() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var n = ie(e);
        return Ee(e, n)
    }
    function Se(e, t) {
        return q((function(n, r) {
            var o = 0;
            n.subscribe(new G(r,(function(n) {
                r.next(e.call(t, n, o++))
            }
            )))
        }
        ))
    }
    var Te = Array.isArray;
    function Oe(e) {
        return Se((function(t) {
            return function(e, t) {
                return Te(t) ? e.apply(void 0, m([], h(t))) : e(t)
            }(e, t)
        }
        ))
    }
    function Ie(e, t, n) {
        return void 0 === n && (n = 1 / 0),
        w(t) ? Ie((function(n, r) {
            return Se((function(e, o) {
                return t(n, e, r, o)
            }
            ))(he(e(n, r)))
        }
        ), n) : ("number" == typeof t && (n = t),
        q((function(t, r) {
            return function(e, t, n, r, o, i, u, a) {
                var c = []
                  , s = 0
                  , f = 0
                  , l = !1
                  , p = function() {
                    !l || c.length || s || t.complete()
                }
                  , d = function(e) {
                    return s < r ? v(e) : c.push(e)
                }
                  , v = function(e) {
                    i && t.next(e),
                    s++;
                    var a = !1;
                    he(n(e, f++)).subscribe(new G(t,(function(e) {
                        null == o || o(e),
                        i ? d(e) : t.next(e)
                    }
                    ),(function() {
                        a = !0
                    }
                    ),void 0,(function() {
                        if (a)
                            try {
                                s--;
                                for (var e = function() {
                                    var e = c.shift();
                                    u ? ye(t, u, (function() {
                                        return v(e)
                                    }
                                    )) : v(e)
                                }; c.length && s < r; )
                                    e();
                                p()
                            } catch (e) {
                                t.error(e)
                            }
                    }
                    )))
                };
                return e.subscribe(new G(t,d,(function() {
                    l = !0,
                    p()
                }
                ))),
                function() {
                    null == a || a()
                }
            }(t, r, e, n)
        }
        )))
    }
    function Re(e) {
        return void 0 === e && (e = 1 / 0),
        Ie(H, e)
    }
    function Ae() {
        return Re(1)
    }
    var ke = ["addListener", "removeListener"]
      , Pe = ["addEventListener", "removeEventListener"]
      , Ce = ["on", "off"];
    function Ne(e, t, n, r) {
        if (w(n) && (r = n,
        n = void 0),
        r)
            return Ne(e, t, n).pipe(Oe(r));
        var o = h(function(e) {
            return w(e.addEventListener) && w(e.removeEventListener)
        }(e) ? Pe.map((function(r) {
            return function(o) {
                return e[r](t, o, n)
            }
        }
        )) : function(e) {
            return w(e.addListener) && w(e.removeListener)
        }(e) ? ke.map(Le(e, t)) : function(e) {
            return w(e.on) && w(e.off)
        }(e) ? Ce.map(Le(e, t)) : [], 2)
          , i = o[0]
          , u = o[1];
        if (!i && ue(e))
            return Ie((function(e) {
                return Ne(e, t, n)
            }
            ))(he(e));
        if (!i)
            throw new TypeError("Invalid event target");
        return new z((function(e) {
            var t = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return e.next(1 < t.length ? t : t[0])
            };
            return i(t),
            function() {
                return u(t)
            }
        }
        ))
    }
    function Le(e, t) {
        return function(n) {
            return function(r) {
                return e[n](t, r)
            }
        }
    }
    function je(e, t, n) {
        void 0 === e && (e = 0),
        void 0 === n && (n = ne);
        var r = -1;
        return null != t && (oe(t) ? n = t : r = t),
        new z((function(t) {
            var o, i = (o = e)instanceof Date && !isNaN(o) ? +e - n.now() : e;
            i < 0 && (i = 0);
            var u = 0;
            return n.schedule((function() {
                t.closed || (t.next(u++),
                0 <= r ? this.schedule(void 0, r) : t.complete())
            }
            ), i)
        }
        ))
    }
    function Be(e, t) {
        return void 0 === e && (e = 0),
        void 0 === t && (t = te),
        e < 0 && (e = 0),
        je(e, e, t)
    }
    function De(e, t) {
        return q((function(n, r) {
            var o = 0;
            n.subscribe(new G(r,(function(n) {
                return e.call(t, n, o++) && r.next(n)
            }
            )))
        }
        ))
    }
    function Me(e) {
        return function(t) {
            for (var n = [], r = function(r) {
                n.push(he(e[r]).subscribe(new G(t,(function(e) {
                    if (n) {
                        for (var o = 0; o < n.length; o++)
                            o !== r && n[o].unsubscribe();
                        n = null
                    }
                    t.next(e)
                }
                ))))
            }, o = 0; n && !t.closed && o < e.length; o++)
                r(o)
        }
    }
    function Fe(e, t) {
        return void 0 === t && (t = null),
        t = null != t ? t : e,
        q((function(n, r) {
            var o = []
              , i = 0;
            n.subscribe(new G(r,(function(n) {
                var u, a, c, s, f = null;
                i++ % t == 0 && o.push([]);
                try {
                    for (var l = v(o), p = l.next(); !p.done; p = l.next()) {
                        (m = p.value).push(n),
                        e <= m.length && (f = null != f ? f : []).push(m)
                    }
                } catch (e) {
                    u = {
                        error: e
                    }
                } finally {
                    try {
                        p && !p.done && (a = l.return) && a.call(l)
                    } finally {
                        if (u)
                            throw u.error
                    }
                }
                if (f)
                    try {
                        for (var d = v(f), h = d.next(); !h.done; h = d.next()) {
                            var m = h.value;
                            x(o, m),
                            r.next(m)
                        }
                    } catch (e) {
                        c = {
                            error: e
                        }
                    } finally {
                        try {
                            h && !h.done && (s = d.return) && s.call(d)
                        } finally {
                            if (c)
                                throw c.error
                        }
                    }
            }
            ),(function() {
                var e, t;
                try {
                    for (var n = v(o), i = n.next(); !i.done; i = n.next()) {
                        var u = i.value;
                        r.next(u)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                r.complete()
            }
            ),void 0,(function() {
                o = null
            }
            )))
        }
        ))
    }
    function He(e) {
        for (var t, n, r = [], o = 1; o < arguments.length; o++)
            r[o - 1] = arguments[o];
        var i = null !== (t = ie(r)) && void 0 !== t ? t : te
          , u = null !== (n = r[0]) && void 0 !== n ? n : null
          , a = r[1] || 1 / 0;
        return q((function(t, n) {
            var r = []
              , o = !1
              , c = function(e) {
                var t = e.buffer;
                e.subs.unsubscribe(),
                x(r, e),
                n.next(t),
                o && s()
            }
              , s = function() {
                if (r) {
                    var t = new S;
                    n.add(t);
                    var o = {
                        buffer: [],
                        subs: t
                    };
                    r.push(o),
                    ye(t, i, (function() {
                        return c(o)
                    }
                    ), e)
                }
            };
            null !== u && u >= 0 ? ye(n, i, s, u, !0) : o = !0,
            s();
            var f = new G(n,(function(e) {
                var t, n, o = r.slice();
                try {
                    for (var i = v(o), u = i.next(); !u.done; u = i.next()) {
                        var s = u.value
                          , f = s.buffer;
                        f.push(e),
                        a <= f.length && c(s)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        u && !u.done && (n = i.return) && n.call(i)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
            }
            ),(function() {
                for (; null == r ? void 0 : r.length; )
                    n.next(r.shift().buffer);
                null == f || f.unsubscribe(),
                n.complete(),
                n.unsubscribe()
            }
            ),void 0,(function() {
                return r = null
            }
            ));
            t.subscribe(f)
        }
        ))
    }
    function Ue(e) {
        return q((function(t, n) {
            var r, o = null, i = !1;
            o = t.subscribe(new G(n,void 0,void 0,(function(u) {
                r = he(e(u, Ue(e)(t))),
                o ? (o.unsubscribe(),
                o = null,
                r.subscribe(n)) : i = !0
            }
            ))),
            i && (o.unsubscribe(),
            o = null,
            r.subscribe(n))
        }
        ))
    }
    function ze(e, t, n, r, o) {
        return function(i, u) {
            var a = n
              , c = t
              , s = 0;
            i.subscribe(new G(u,(function(t) {
                var n = s++;
                c = a ? e(c, t, n) : (a = !0,
                t),
                r && u.next(c)
            }
            ),o && function() {
                a && u.next(c),
                u.complete()
            }
            ))
        }
    }
    var We = function(e, t) {
        return e.push(t),
        e
    };
    function qe() {
        return q((function(e, t) {
            (function(e, t) {
                return q(ze(e, t, arguments.length >= 2, !1, !0))
            }
            )(We, [])(e).subscribe(t)
        }
        ))
    }
    function Ge(e, t) {
        return void 0 === t && (t = te),
        q((function(n, r) {
            var o = null
              , i = null
              , u = null
              , a = function() {
                if (o) {
                    o.unsubscribe(),
                    o = null;
                    var e = i;
                    i = null,
                    r.next(e)
                }
            };
            function c() {
                var n = u + e
                  , i = t.now();
                if (i < n)
                    return o = this.schedule(void 0, n - i),
                    void r.add(o);
                a()
            }
            n.subscribe(new G(r,(function(n) {
                i = n,
                u = t.now(),
                o || (o = t.schedule(c, e),
                r.add(o))
            }
            ),(function() {
                a(),
                r.complete()
            }
            ),void 0,(function() {
                i = o = null
            }
            )))
        }
        ))
    }
    function Je(e) {
        return e <= 0 ? function() {
            return re
        }
        : q((function(t, n) {
            var r = 0;
            t.subscribe(new G(n,(function(t) {
                ++r <= e && (n.next(t),
                e <= r && n.complete())
            }
            )))
        }
        ))
    }
    function Ve(e, t) {
        return t ? function(n) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return Ae()(Ee(e, ie(e)))
            }(t.pipe(Je(1), q((function(e, t) {
                e.subscribe(new G(t,P))
            }
            ))), n.pipe(Ve(e)))
        }
        : Ie((function(t, n) {
            return e(t, n).pipe(Je(1), function(e) {
                return Se((function() {
                    return e
                }
                ))
            }(t))
        }
        ))
    }
    function Ke(e, t, n) {
        var r = w(e) || t || n ? {
            next: e,
            error: t,
            complete: n
        } : e;
        return r ? q((function(e, t) {
            var n;
            null === (n = r.subscribe) || void 0 === n || n.call(r);
            var o = !0;
            e.subscribe(new G(t,(function(e) {
                var n;
                null === (n = r.next) || void 0 === n || n.call(r, e),
                t.next(e)
            }
            ),(function() {
                var e;
                o = !1,
                null === (e = r.complete) || void 0 === e || e.call(r),
                t.complete()
            }
            ),(function(e) {
                var n;
                o = !1,
                null === (n = r.error) || void 0 === n || n.call(r, e),
                t.error(e)
            }
            ),(function() {
                var e, t;
                o && (null === (e = r.unsubscribe) || void 0 === e || e.call(r)),
                null === (t = r.finalize) || void 0 === t || t.call(r)
            }
            )))
        }
        )) : H
    }
    var Xe = "customError"
      , $e = "customEvent"
      , Ye = "customTime"
      , Ze = {
        ua: window.navigator.userAgent,
        width: window.innerWidth,
        height: window.innerHeight,
        url: window.location.href,
        xlogVersion: "3.4.9"
    }
      , Qe = "XLOG_UNREPORTED"
      , et = "XLOG_REPORTING_IDS"
      , tt = {
        BASE_INFO: "baseInfo",
        PERFORMANCE: "performance",
        XHR: "xhr",
        FETCH: "fetch",
        USER_EVENT: "userEvent",
        WINODW_ERROR: "windowError",
        SOURCE_ERROR: "sourceError",
        ROUTE_CHANGE: "routeChange",
        CONSOLE: "console",
        UNHANDLED_REJECTION: "unhandledrejection",
        PAGE_LOAD: "load",
        PAGE_INIT: "pageInit",
        OBSERVABLE_ERROR: "observableError",
        BATCH: "batch",
        BLANK_SCREEN: "blankScreen",
        BUSINESS_POINT: "businessPoint"
    }
      , nt = "sourceError"
      , rt = "unhandledrejection"
      , ot = "windowError"
      , it = "componentError"
      , ut = "xhrError"
      , at = "fetchError"
      , ct = "xhrSuccess"
      , st = "fetchSuccess"
      , ft = "pc_web"
      , lt = "log_init"
      , pt = "observableError"
      , dt = "captureError"
      , vt = "componentErrorBlankScreen"
      , ht = "baseInfo"
      , mt = "performance"
      , yt = "xhr"
      , bt = "fetch"
      , gt = "userEvent"
      , wt = "windowError"
      , _t = "sourceError"
      , Et = "routeChange"
      , xt = "consoleMethods"
      , St = "unhandledrejection"
      , Tt = "https:" === window.location.protocol ? "https:" : "http:"
      , Ot = {
        prd_inner_test: Tt + "//168.63.21.186/dsj/collect/web/report",
        prd_outer_test: Tt + "//168.63.21.186/dsj/collect/web/report",
        prd_inner: "http://eip.htsc.com.cn/HTAI/collect/web/report",
        prd_inner_fort: "http://168.7.76.117:8080/HTAI/collect/web/report",
        prd_outer: "https://crm.htsc.com.cn:3443/collect/web/report",
        uat_outer_test: Tt + "//221.6.6.135:9111/HTAI/collect/web/report"
    }
      , It = {
        prd_inner_test: Tt + "//168.63.21.186/dsj/collect/web/config",
        prd_outer_test: Tt + "//168.63.21.186/dsj/collect/web/config",
        prd_inner: "http://eip.htsc.com.cn/HTAI/collect/web/config",
        prd_inner_fort: "http://168.7.76.117:8080/HTAI/collect/web/config",
        prd_outer: "https://crm.htsc.com.cn:3443/collect/web/config",
        uat_outer_test: Tt + "//221.6.6.135:9111/HTAI/collect/web/config"
    }
      , Rt = function(e) {
        var t = [];
        for (var n in e)
            e.hasOwnProperty(n) && t.push(e[n]);
        return t
    }
      , At = function(e) {
        var t = Pt(e);
        return function(e) {
            return n({}, (null == e ? void 0 : e.reportProxyConfig) || {}, Ot)
        }(e)[t.channel_env]
    }
      , kt = Rt(Ot)
      , Pt = function(e) {
        var t = (null == e ? void 0 : e.myTrackConfig) || {};
        return t.getEnv && (t.channel_env = t.getEnv(),
        delete t.getEnv),
        t
    }
      , Ct = {
        HTTP_CODE: "HTTP_CODE",
        RESPONSE_VALIDATOR: "RESPONSE_VALIDATOR",
        UNKNOW_ERROR: "UNKNOW_ERROR"
    }
      , Nt = "jsErrorBlankScreen"
      , Lt = "sourceErrorBlankScreen"
      , jt = "unhandledrejectionBlankScreen"
      , Bt = ["IMG", "AUDIO", "VIDEO", "SOURCE"]
      , Dt = "routePath"
      , Mt = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    }
      , Ft = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming"in self))
                    return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }
                ));
                return n.observe({
                    type: e,
                    buffered: !0
                }),
                n
            }
        } catch (e) {}
    }
      , Ht = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r),
            t && (removeEventListener("visibilitychange", n, !0),
            removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0)
    }
      , Ut = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }
        ), !0)
    }
      , zt = function(e, t, n) {
        var r;
        return function(o) {
            t.value >= 0 && (o || n) && (t.delta = t.value - (r || 0),
            (t.delta || void 0 === r) && (r = t.value,
            e(t)))
        }
    }
      , Wt = -1
      , qt = function() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    }
      , Gt = function() {
        Ht((function(e) {
            var t = e.timeStamp;
            Wt = t
        }
        ), !0)
    }
      , Jt = function() {
        return Wt < 0 && (Wt = qt(),
        Gt(),
        Ut((function() {
            setTimeout((function() {
                Wt = qt(),
                Gt()
            }
            ), 0)
        }
        ))),
        {
            get firstHiddenTime() {
                return Wt
            }
        }
    }
      , Vt = {};
    function Kt(e, t) {
        void 0 === t && (t = {});
        for (var n = function(e) {
            for (var t = [], n = 0; n < e.length; ) {
                var r = e[n];
                if ("*" !== r && "+" !== r && "?" !== r)
                    if ("\\" !== r)
                        if ("{" !== r)
                            if ("}" !== r)
                                if (":" !== r)
                                    if ("(" !== r)
                                        t.push({
                                            type: "CHAR",
                                            index: n,
                                            value: e[n++]
                                        });
                                    else {
                                        var o = 1
                                          , i = "";
                                        if ("?" === e[a = n + 1])
                                            throw new TypeError('Pattern cannot start with "?" at ' + a);
                                        for (; a < e.length; )
                                            if ("\\" !== e[a]) {
                                                if (")" === e[a]) {
                                                    if (0 == --o) {
                                                        a++;
                                                        break
                                                    }
                                                } else if ("(" === e[a] && (o++,
                                                "?" !== e[a + 1]))
                                                    throw new TypeError("Capturing groups are not allowed at " + a);
                                                i += e[a++]
                                            } else
                                                i += e[a++] + e[a++];
                                        if (o)
                                            throw new TypeError("Unbalanced pattern at " + n);
                                        if (!i)
                                            throw new TypeError("Missing pattern at " + n);
                                        t.push({
                                            type: "PATTERN",
                                            index: n,
                                            value: i
                                        }),
                                        n = a
                                    }
                                else {
                                    for (var u = "", a = n + 1; a < e.length; ) {
                                        var c = e.charCodeAt(a);
                                        if (!(c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || 95 === c))
                                            break;
                                        u += e[a++]
                                    }
                                    if (!u)
                                        throw new TypeError("Missing parameter name at " + n);
                                    t.push({
                                        type: "NAME",
                                        index: n,
                                        value: u
                                    }),
                                    n = a
                                }
                            else
                                t.push({
                                    type: "CLOSE",
                                    index: n,
                                    value: e[n++]
                                });
                        else
                            t.push({
                                type: "OPEN",
                                index: n,
                                value: e[n++]
                            });
                    else
                        t.push({
                            type: "ESCAPED_CHAR",
                            index: n++,
                            value: e[n++]
                        });
                else
                    t.push({
                        type: "MODIFIER",
                        index: n,
                        value: e[n++]
                    })
            }
            return t.push({
                type: "END",
                index: n,
                value: ""
            }),
            t
        }(e), r = t.prefixes, o = void 0 === r ? "./" : r, i = "[^" + $t(t.delimiter || "/#?") + "]+?", u = [], a = 0, c = 0, s = "", f = function(e) {
            if (c < n.length && n[c].type === e)
                return n[c++].value
        }, l = function(e) {
            var t = f(e);
            if (void 0 !== t)
                return t;
            var r = n[c]
              , o = r.type
              , i = r.index;
            throw new TypeError("Unexpected " + o + " at " + i + ", expected " + e)
        }, p = function() {
            for (var e, t = ""; e = f("CHAR") || f("ESCAPED_CHAR"); )
                t += e;
            return t
        }; c < n.length; ) {
            var d = f("CHAR")
              , v = f("NAME")
              , h = f("PATTERN");
            if (v || h) {
                var m = d || "";
                -1 === o.indexOf(m) && (s += m,
                m = ""),
                s && (u.push(s),
                s = ""),
                u.push({
                    name: v || a++,
                    prefix: m,
                    suffix: "",
                    pattern: h || i,
                    modifier: f("MODIFIER") || ""
                })
            } else {
                var y = d || f("ESCAPED_CHAR");
                if (y)
                    s += y;
                else if (s && (u.push(s),
                s = ""),
                f("OPEN")) {
                    m = p();
                    var b = f("NAME") || ""
                      , g = f("PATTERN") || ""
                      , w = p();
                    l("CLOSE"),
                    u.push({
                        name: b || (g ? a++ : ""),
                        pattern: b && !g ? i : g,
                        prefix: m,
                        suffix: w,
                        modifier: f("MODIFIER") || ""
                    })
                } else
                    l("END")
            }
        }
        return u
    }
    function Xt(e, t) {
        var n = [];
        return function(e, t, n) {
            void 0 === n && (n = {});
            var r = n.decode
              , o = void 0 === r ? function(e) {
                return e
            }
            : r;
            return function(n) {
                var r = e.exec(n);
                if (!r)
                    return !1;
                for (var i = r[0], u = r.index, a = Object.create(null), c = function(e) {
                    if (void 0 === r[e])
                        return "continue";
                    var n = t[e - 1];
                    "*" === n.modifier || "+" === n.modifier ? a[n.name] = r[e].split(n.prefix + n.suffix).map((function(e) {
                        return o(e, n)
                    }
                    )) : a[n.name] = o(r[e], n)
                }, s = 1; s < r.length; s++)
                    c(s);
                return {
                    path: i,
                    index: u,
                    params: a
                }
            }
        }(Qt(e, n, t), n, t)
    }
    function $t(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }
    function Yt(e) {
        return e && e.sensitive ? "" : "i"
    }
    function Zt(e, t, n) {
        return function(e, t, n) {
            void 0 === n && (n = {});
            for (var r = n.strict, o = void 0 !== r && r, i = n.start, u = void 0 === i || i, a = n.end, c = void 0 === a || a, s = n.encode, f = void 0 === s ? function(e) {
                return e
            }
            : s, l = "[" + $t(n.endsWith || "") + "]|$", p = "[" + $t(n.delimiter || "/#?") + "]", d = u ? "^" : "", v = 0, h = e; v < h.length; v++) {
                var m = h[v];
                if ("string" == typeof m)
                    d += $t(f(m));
                else {
                    var y = $t(f(m.prefix))
                      , b = $t(f(m.suffix));
                    if (m.pattern)
                        if (t && t.push(m),
                        y || b)
                            if ("+" === m.modifier || "*" === m.modifier) {
                                var g = "*" === m.modifier ? "?" : "";
                                d += "(?:" + y + "((?:" + m.pattern + ")(?:" + b + y + "(?:" + m.pattern + "))*)" + b + ")" + g
                            } else
                                d += "(?:" + y + "(" + m.pattern + ")" + b + ")" + m.modifier;
                        else
                            d += "(" + m.pattern + ")" + m.modifier;
                    else
                        d += "(?:" + y + b + ")" + m.modifier
                }
            }
            if (c)
                o || (d += p + "?"),
                d += n.endsWith ? "(?=" + l + ")" : "$";
            else {
                var w = e[e.length - 1]
                  , _ = "string" == typeof w ? p.indexOf(w[w.length - 1]) > -1 : void 0 === w;
                o || (d += "(?:" + p + "(?=" + l + "))?"),
                _ || (d += "(?=" + p + "|" + l + ")")
            }
            return new RegExp(d,Yt(n))
        }(Kt(e, n), t, n)
    }
    function Qt(e, t, n) {
        return e instanceof RegExp ? function(e, t) {
            if (!t)
                return e;
            for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, o = n.exec(e.source); o; )
                t.push({
                    name: o[1] || r++,
                    prefix: "",
                    suffix: "",
                    modifier: "",
                    pattern: ""
                }),
                o = n.exec(e.source);
            return e
        }(e, t) : Array.isArray(e) ? function(e, t, n) {
            var r = e.map((function(e) {
                return Qt(e, t, n).source
            }
            ));
            return new RegExp("(?:" + r.join("|") + ")",Yt(n))
        }(e, t, n) : Zt(e, t, n)
    }
    function en(e, t, n, r, o, i) {
        var u = "";
        if (e.length) {
            u += t.spacingOuter;
            for (var a = n + t.indent, c = 0; c < e.length; c++) {
                if (u += a,
                c === t.maxWidth) {
                    u += "…";
                    break
                }
                c in e && (u += i(e[c], t, a, r, o)),
                c < e.length - 1 ? u += "," + t.spacingInner : t.min || (u += ",")
            }
            u += t.spacingOuter + n
        }
        return u
    }
    function tn(e, t, n, r, o, i) {
        var u = ""
          , a = function(e, t) {
            var n = Object.keys(e)
              , r = null !== t ? n.sort(t) : n;
            return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((function(t) {
                Object.getOwnPropertyDescriptor(e, t).enumerable && r.push(t)
            }
            )),
            r
        }(e, t.compareKeys);
        if (a.length) {
            u += t.spacingOuter;
            for (var c = n + t.indent, s = 0; s < a.length; s++) {
                var f = a[s];
                u += c + i(f, t, c, r, o) + ": " + i(e[f], t, c, r, o),
                s < a.length - 1 ? u += "," + t.spacingInner : t.min || (u += ",")
            }
            u += t.spacingOuter + n
        }
        return u
    }
    function nn(e, t) {
        return t ? "[Function " + (e.name || "anonymous") + "]" : "[Function]"
    }
    function rn(e) {
        return String(e).replace(/^Symbol\((.*)\)(.*)$/, "Symbol($1)")
    }
    var on = Object.prototype.toString
      , un = Date.prototype.toISOString
      , an = Error.prototype.toString
      , cn = RegExp.prototype.toString
      , sn = /\n/gi
      , fn = function(e) {
        return "function" == typeof e.constructor && e.constructor.name || "Object"
    };
    var ln = {
        callToJSON: !0,
        compareKeys: void 0,
        escapeRegex: !1,
        escapeString: !0,
        indent: 2,
        maxDepth: 1 / 0,
        maxWidth: 1 / 0,
        min: !1,
        plugins: [],
        printBasicPrototype: !0,
        printFunctionName: !0
    }
      , pn = Object.keys({
        comment: "gray",
        content: "reset",
        prop: "yellow",
        tag: "cyan",
        value: "green"
    });
    function dn(e) {
        return "[" + an.call(e) + "]"
    }
    var vn = function() {
        return ln.printFunctionName
    }
      , hn = function() {
        return ln.escapeRegex
    }
      , mn = function() {
        return ln.escapeString
    };
    function yn(e, t, n, r) {
        if (!0 === e || !1 === e)
            return "" + e;
        if (void 0 === e)
            return "undefined";
        if (null === e)
            return "null";
        var o = typeof e;
        if ("number" === o)
            return "" + e;
        if ("bigint" === o)
            return "" + e;
        if ("string" === o)
            return r ? '"' + e.replace(/"|\\/g, "\\$&") + '"' : '"' + e + '"';
        if ("function" === o)
            return nn(e, t);
        if ("symbol" === o)
            return rn(e);
        var i = on.call(e);
        return "[object WeakMap]" === i ? "WeakMap {}" : "[object WeakSet]" === i ? "WeakSet {}" : "[object Function]" === i || "[object GeneratorFunction]" === i ? nn(e, t) : "[object Symbol]" === i ? rn(e) : "[object Date]" === i ? isNaN(+e) ? "Date { NaN }" : un.call(e) : "[object Error]" === i ? dn(e) : "[object RegExp]" === i ? n ? cn.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : cn.call(e) : e instanceof Error ? dn(e) : null
    }
    var bn = function(e) {
        var t, n;
        function r(t, n) {
            var r;
            return (r = e.call(this, t) || this).stack = n,
            r.name = r.constructor.name,
            r
        }
        return n = e,
        (t = r).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        o(t, n),
        r
    }(a(Error));
    function gn(e, t, n, r, o, i) {
        var u = function(e, t) {
            for (var n = 0; n < e.length; n++)
                try {
                    if (e[n].test(t))
                        return e[n]
                } catch (e) {
                    throw new bn(e.message,e.stack)
                }
            return null
        }(t.plugins, e);
        if (null !== u)
            return function(e, t, n, r, o, i) {
                var u;
                try {
                    u = function(e) {
                        return null !== e.serialize
                    }(e) ? e.serialize(t, n, r, o, i, gn) : e.print(t, (function(e) {
                        return gn(e, n, r, o, i)
                    }
                    ), (function(e) {
                        var t = r + n.indent;
                        return t + e.replace(sn, "\n" + t)
                    }
                    ), {
                        edgeSpacing: n.spacingOuter,
                        min: n.min,
                        spacing: n.spacingInner
                    }, n.colors)
                } catch (e) {
                    throw new bn(e.message,e.stack)
                }
                if ("string" != typeof u)
                    throw new Error('pretty-format: Plugin must return type "string" but instead returned "' + typeof u + '".');
                return u
            }(u, e, t, n, r, o);
        var a = yn(e, t.printFunctionName, t.escapeRegex, t.escapeString);
        return null !== a ? a : wn(e, t, n, r, o, i)
    }
    function wn(e, t, n, r, o, i) {
        if (-1 !== o.indexOf(e))
            return "[Circular]";
        (o = o.slice()).push(e);
        var u = ++r > t.maxDepth
          , a = t.min;
        if (t.callToJSON && !u && e.toJSON && "function" == typeof e.toJSON && !i)
            return gn(e.toJSON(), t, n, r, o, !0);
        var c = on.call(e);
        return "[object Arguments]" === c ? u ? "[Arguments]" : (a ? "" : "Arguments ") + "[" + en(e, t, n, r, o, gn) + "]" : function(e) {
            return "[object Array]" === e || "[object ArrayBuffer]" === e || "[object DataView]" === e || "[object Float32Array]" === e || "[object Float64Array]" === e || "[object Int8Array]" === e || "[object Int16Array]" === e || "[object Int32Array]" === e || "[object Uint8Array]" === e || "[object Uint8ClampedArray]" === e || "[object Uint16Array]" === e || "[object Uint32Array]" === e
        }(c) ? u ? "[" + e.constructor.name + "]" : (a ? "" : t.printBasicPrototype || "Array" !== e.constructor.name ? e.constructor.name + " " : "") + "[" + en(e, t, n, r, o, gn) + "]" : "[object Map]" === c ? u ? "[Map]" : "Map {" + function(e, t, n, r, o, i, u) {
            void 0 === u && (u = ": ");
            var a = ""
              , c = 0
              , s = e.next();
            if (!s.done) {
                a += t.spacingOuter;
                for (var f = n + t.indent; !s.done; ) {
                    if (a += f,
                    c++ === t.maxWidth) {
                        a += "…";
                        break
                    }
                    a += i(s.value[0], t, f, r, o) + u + i(s.value[1], t, f, r, o),
                    (s = e.next()).done ? t.min || (a += ",") : a += "," + t.spacingInner
                }
                a += t.spacingOuter + n
            }
            return a
        }(e.entries(), t, n, r, o, gn, " => ") + "}" : "[object Set]" === c ? u ? "[Set]" : "Set {" + function(e, t, n, r, o, i) {
            var u = ""
              , a = 0
              , c = e.next();
            if (!c.done) {
                u += t.spacingOuter;
                for (var s = n + t.indent; !c.done; ) {
                    if (u += s,
                    a++ === t.maxWidth) {
                        u += "…";
                        break
                    }
                    u += i(c.value, t, s, r, o),
                    (c = e.next()).done ? t.min || (u += ",") : u += "," + t.spacingInner
                }
                u += t.spacingOuter + n
            }
            return u
        }(e.values(), t, n, r, o, gn) + "}" : u || function(e) {
            return "undefined" != typeof window && e === window
        }(e) ? "[" + fn(e) + "]" : (a ? "" : t.printBasicPrototype || "Object" !== fn(e) ? fn(e) + " " : "") + "{" + tn(e, t, n, r, o, gn) + "}"
    }
    function _n(e) {
        var t, n = yn(e, vn(), hn(), mn());
        return null !== n ? n : wn(e, {
            callToJSON: ln.callToJSON,
            colors: pn.reduce((function(e, t) {
                return e[t] = {
                    close: "",
                    open: ""
                },
                e
            }
            ), Object.create(null)),
            compareKeys: ln.compareKeys,
            escapeRegex: hn(),
            escapeString: mn(),
            indent: (t = ln.indent,
            new Array(t + 1).join(" ")),
            maxDepth: ln.maxDepth,
            maxWidth: ln.maxWidth,
            min: ln.min,
            plugins: ln.plugins,
            printBasicPrototype: !0,
            printFunctionName: vn(),
            spacingInner: "\n",
            spacingOuter: "\n"
        }, "", 0, [])
    }
    function En() {
        var e = Date.now()
          , t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16),
            ("x" == t ? n : 3 & n | 8).toString(16)
        }
        ));
        return t
    }
    var xn = function() {
        return {
            TraceId: En(),
            ChainId: "0.0"
        }
    }
      , Sn = function(e, t) {
        for (var n = (e || []).length, r = 0; r < n; r++) {
            var o = e[r];
            if (0 === t.indexOf(o))
                return !0
        }
        return !1
    };
    var Tn, On = function(e) {
        var t = (null == e ? void 0 : e.btn_title) || {};
        return null == t ? void 0 : t.storageId
    }, In = function(e, t, n) {
        var r = e[t];
        r && (e[t] = function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                t[o] = arguments[o];
            r.call.apply(r, [this].concat(t)),
            n.call.apply(n, [this].concat(t))
        }
        )
    }, Rn = function(e) {
        return encodeURIComponent(e)
    }, An = function() {
        try {
            var e = function(e) {
                for (var t, n = document.cookie.split("; "), r = n.length, o = 0; o < r; o++) {
                    var i = n[o].split("=")
                      , u = i[0]
                      , a = i[1];
                    if (u === e) {
                        t = a;
                        break
                    }
                }
                return t
            }("sensorsdata2015jssdkcross");
            return JSON.parse(decodeURIComponent(e)).device_id
        } catch (e) {
            return null
        }
    }, kn = (Tn = null,
    function() {
        if (Tn)
            return Tn;
        var e = An()
          , t = "XLOG_UUID"
          , n = Date.now()
          , r = Math.floor(n / 1e3 / 3600 / 24) + "_" + Math.random() + "_" + n
          , o = "";
        try {
            var i = window.localStorage.getItem(t);
            i ? o = i : (o = r,
            window.localStorage.setItem(t, o))
        } catch (e) {
            o = r
        }
        return Tn = e || o
    }
    ), Pn = function(e) {
        var t = e.url
          , n = e.method
          , r = e.params
          , o = void 0 === r ? {} : r
          , i = e.callback
          , u = e.error
          , a = new XMLHttpRequest;
        a.open(n, t, !0),
        a.onreadystatechange = function() {
            if (4 == a.readyState)
                if (200 === a.status) {
                    var e = {};
                    try {
                        e = a.responseText,
                        e = JSON.parse(e)
                    } catch (e) {
                        u && u()
                    }
                    i && i(e)
                } else
                    u && u(a.status)
        }
        ;
        var c = null;
        "POST" === n && (c = Object.keys(o).map((function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(o[e])
        }
        )).join("&")).length && a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        a.send(c)
    }, Cn = function(e) {
        return Object.prototype.toString.call(e).toLowerCase().slice(8, -1)
    }, Nn = function(e) {
        return "array" === Cn(e)
    }, Ln = function(e) {
        return "object" === Cn(e)
    }, jn = function(e) {
        return "function" === Cn(e)
    }, Bn = function(e) {
        return "promise" === Cn(e)
    }, Dn = function(e) {
        return "error" === Cn(e) ? e.message + "\n " + e.stack : e
    }, Mn = function(e) {
        for (var t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t++) {
            var n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Fn = {
        init: function() {
            var e = Hn.get(Qe)
              , t = Date.now();
            Fn.updatelockStorageIds(),
            Object.keys(e).length >= 100 ? Hn.set(Qe, {}) : (Object.keys(e).forEach((function(n) {
                var r = e[n].timestamp;
                (!r || t - r > 864e6) && delete e[n]
            }
            )),
            Hn.set(Qe, e))
        },
        get: function() {
            return Hn.get(Qe)
        },
        getUnreportedKeys: function() {
            return Object.keys(Fn.get())
        },
        set: function(e, t) {
            var n = Hn.get(Qe);
            n[e] = t,
            Hn.set(Qe, n)
        },
        remove: function(e) {
            var t = Hn.get(Qe)
              , n = Fn.getLockedIds();
            e.forEach((function(e) {
                delete t[e],
                delete n[e]
            }
            )),
            Hn.set(Qe, t),
            Fn.setLockedIds(n)
        },
        lockStorageIds: function(e) {
            if (null != e && e.length) {
                var t = Fn.getLockedIds()
                  , n = Date.now();
                e.forEach((function(e) {
                    t[e] = n
                }
                )),
                Fn.setLockedIds(t)
            }
        },
        getLockedIds: function() {
            return Hn.get(et)
        },
        setLockedIds: function(e) {
            return Hn.set(et, e)
        },
        updatelockStorageIds: function() {
            var e = Fn.getLockedIds()
              , t = Date.now();
            for (var n in e) {
                if (e.hasOwnProperty(n))
                    t - e[n] > 6e4 && delete e[n]
            }
            Fn.setLockedIds(e)
        }
    }, Hn = {
        get: function(e) {
            try {
                return JSON.parse(window.localStorage.getItem(e)) || {}
            } catch (e) {
                return {}
            }
        },
        set: function(e, t) {
            try {
                return window.localStorage.setItem(e, JSON.stringify(t || {}))
            } catch (e) {}
        }
    }, Un = "hash", zn = "history", Wn = function(e) {
        return e === Un ? function(e) {
            void 0 === e && (e = window.location.href);
            var t = e.indexOf("#")
              , n = e.indexOf("?");
            if (-1 === t)
                return "/";
            if (-1 === n && t > -1)
                return e.slice(t + 1);
            var r = e.indexOf("?", t);
            return r > -1 ? e.slice(t + 1, r) : e.slice(t + 1)
        }() : window.location.pathname
    }, qn = function(e) {
        var t = "";
        try {
            t = Gn((e || []).join(","), $n)
        } catch (e) {}
        return t
    }, Gn = function(e, t) {
        void 0 === t && (t = 2);
        var n = e || ""
          , r = 1024 * t;
        return n.length > r ? n.slice(0, r) : n
    }, Jn = function(e, t) {
        return !!Nn(e) && e.indexOf(t) > -1
    };
    function Vn(e) {
        var t = Kn(e)
          , n = t.pagePath
          , r = t.pageHref
          , o = function(e) {
            return null == e ? void 0 : e.pv_id
        }(e);
        return {
            pagePath: n,
            pageHref: r,
            pv_id: o
        }
    }
    function Kn(e) {
        var t = [Un, zn]
          , n = e || {}
          , r = n.routeConfig
          , o = void 0 === r ? {} : r
          , i = n.pagePathType
          , u = o || {}
          , a = u.routeType
          , c = void 0 === a ? Un : a
          , s = u.dynamicRoutes
          , f = void 0 === s ? [] : s
          , l = u.redirectRoute
          , p = void 0 === l ? {} : l;
        if (Jn(t, c)) {
            var d = Wn(c);
            d = function(e, t) {
                return (null == t ? void 0 : t[e]) || e
            }(d, p),
            d = function(e, t) {
                var n = e
                  , r = (t || []).length;
                if (0 === r)
                    return n;
                for (var o = 0; o < r; o++) {
                    var i = t[o];
                    if (Xt(i)(n)) {
                        n = i;
                        break
                    }
                }
                return n
            }(d, f);
            var v = i === Dt ? d : function(e, t) {
                var n = window.location.pathname;
                return e === Un ? n + "#" + t : "" + t
            }(c, d);
            return {
                pageHref: window.location.href,
                pagePath: v
            }
        }
        console.error("路由类型只有hash、history")
    }
    var Xn = function(e, t) {
        return Object.keys(e || {}).reduce((function(n, r) {
            return t.indexOf(r) > -1 && (n[r] = e[r]),
            n
        }
        ), {})
    }
      , $n = 50
      , Yn = function(e, t) {
        void 0 === t && (t = $n);
        try {
            var n = _n(e);
            return Gn(n, t)
        } catch (e) {
            return ""
        }
    }
      , Zn = function(e) {
        var t = e || ""
          , n = t.indexOf("?");
        return n > -1 ? t.slice(0, n) : t
    }
      , Qn = function(e, t) {
        if (Nn(t))
            for (var n = 0; n < t.length; n++)
                if ((e || "").indexOf(t[n]) > -1)
                    return !0;
        return !1
    }
      , er = function(e) {
        return function(e) {
            if (e.type === tt.XHR) {
                var t = null == e ? void 0 : e.content
                  , n = (null == t ? void 0 : t.url) || ""
                  , r = Qn(n, kt);
                if (!n || r)
                    return !1
            }
            return !0
        }
    }
      , tr = function(e, t) {
        var n = (null == e ? void 0 : e.ignoreJsErrorList) || [];
        return Jn(n, t)
    }
      , nr = function(e, t) {
        for (var n = (null == e ? void 0 : e.ignoreConsoleList) || [], r = n.length, o = 0; o < r; o++) {
            var i = n[o];
            if (t.indexOf(i) > -1)
                return !0
        }
        return !1
    }
      , rr = function(e) {
        return "zlcft" === e
    }
      , or = function(e) {
        return "myTrack" === e
    };
    function ir(e) {
        var t = tt.BLANK_SCREEN
          , n = e || {}
          , r = n.type
          , o = n.content;
        return Jn([t], r) || o.page_id === t
    }
    var ur = function() {
        for (var e = [], t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return n.forEach((function(t) {
            t.forEach((function(t) {
                Jn(e, t) || e.push(t)
            }
            ))
        }
        )),
        e
    }
      , ar = function(e) {
        if ("formdata" === Cn(e))
            try {
                for (var t, n = {}, r = s(e.entries()); !(t = r()).done; ) {
                    var o = t.value
                      , i = o[0]
                      , u = o[1];
                    n[i] = "string" === Cn(u) ? u : "--"
                }
                return n
            } catch (t) {
                return e
            }
        return e
    }
      , cr = function() {
        return performance.now()
    }
      , sr = {}
      , fr = function(e, t) {
        return e + "-" + t
    }
      , lr = function(e) {
        return fr(e, "load")
    }
      , pr = function(e) {
        return fr(e, "bootstrapped")
    }
      , dr = function(e) {
        return fr(e, "mounted")
    }
      , vr = function(e) {
        return fr(e, "unmounted")
    }
      , hr = function(e) {
        var t, n;
        return null == e || null == (t = e.detail) || null == (n = t.app) ? void 0 : n.name
    }
      , mr = function(e, t, r) {
        var o = Vn(r);
        e.next({
            type: tt.PERFORMANCE,
            subtype: "bigbox",
            content: n({}, t, o)
        })
    };
    function yr(e) {
        return function(e) {
            return e && "string" == typeof e && 0 === e.indexOf("parcel-")
        }(e) ? "parcel" : e
    }
    var br = function(e) {
        return new z((function(t) {
            window.addEventListener("bigbox:app-beforeload", (function(e) {
                var t = hr(e);
                t && (sr[lr(t)] = cr())
            }
            )),
            window.addEventListener("bigbox:app-loaded", (function(n) {
                var r = hr(n);
                if (r) {
                    var o = lr(r);
                    if (sr.hasOwnProperty(o)) {
                        var i = cr() - sr[o];
                        delete sr[o];
                        var u = function(e) {
                            var t = null;
                            try {
                                var n = window[e + "Instance"];
                                n && (t = Object.prototype.hasOwnProperty.call(n, "createInstance") ? "v2" : "v1")
                            } catch (e) {}
                            return t
                        }(r)
                          , a = {
                            instance_name: yr(r),
                            bigbox_load: i
                        };
                        u && (a.bigbox_ver = u),
                        mr(t, a, e)
                    }
                }
            }
            ))
        }
        ))
    }
      , gr = function(e) {
        var t = br(e)
          , n = function(e) {
            return new z((function(t) {
                window.addEventListener("bigbox:app-beforebootstrap", (function(e) {
                    var t = hr(e);
                    t && (sr[pr(t)] = cr())
                }
                )),
                window.addEventListener("bigbox:app-bootstrapped", (function(n) {
                    var r = hr(n);
                    if (r) {
                        var o = pr(r);
                        if (sr.hasOwnProperty(o)) {
                            var i = cr() - sr[o];
                            delete sr[o],
                            mr(t, {
                                instance_name: yr(r),
                                bigbox_bootstrap: i
                            }, e)
                        }
                    }
                }
                ))
            }
            ))
        }(e)
          , r = function(e) {
            return new z((function(t) {
                window.addEventListener("bigbox:app-beforemount", (function(e) {
                    var t = hr(e);
                    t && (sr[dr(t)] = cr())
                }
                )),
                window.addEventListener("bigbox:app-mounted", (function(n) {
                    var r = hr(n);
                    if (r) {
                        var o = dr(r);
                        if (sr.hasOwnProperty(o)) {
                            var i = cr() - sr[o];
                            delete sr[o],
                            mr(t, {
                                instance_name: yr(r),
                                bigbox_mount: i
                            }, e)
                        }
                    }
                }
                ))
            }
            ))
        }(e)
          , o = function(e) {
            return new z((function(t) {
                window.addEventListener("bigbox:app-beforeunmount", (function(e) {
                    var t = hr(e);
                    t && (sr[vr(t)] = cr())
                }
                )),
                window.addEventListener("bigbox:app-unmounted", (function(n) {
                    var r = hr(n);
                    if (r) {
                        var o = vr(r);
                        if (sr.hasOwnProperty(o)) {
                            var i = cr() - sr[o];
                            delete sr[o],
                            mr(t, {
                                instance_name: yr(r),
                                bigbox_unmount: i
                            }, e)
                        }
                    }
                }
                ))
            }
            ))
        }(e);
        return Ee([t, n, r, o]).pipe(Re())
    }
      , wr = {
        t: !1,
        i: !1,
        o: 3e4
    }
      , _r = window
      , Er = _r.console
      , xr = document
      , Sr = _r.navigator
      , Tr = _r.performance
      , Or = function() {
        return Sr.deviceMemory
    }
      , Ir = function() {
        return Sr.hardwareConcurrency
    }
      , Rr = function() {
        return Tr && !!Tr.getEntriesByType && !!Tr.now && !!Tr.mark
    }
      , Ar = "4g"
      , kr = !1
      , Pr = function() {
        return !!(Ir() && Ir() <= 4) || !!(Or() && Or() <= 4)
    }
      , Cr = function(e, t) {
        switch (e) {
        case "slow-2g":
        case "2g":
        case "3g":
            return !0;
        default:
            return Pr() || t
        }
    }
      , Nr = {
        u: !1
    }
      , Lr = function(e) {
        xr.hidden && (e(),
        Nr.u = xr.hidden)
    }
      , jr = function(e) {
        return parseFloat(e.toFixed(4))
    }
      , Br = function(e) {
        return "number" != typeof e ? null : jr(e / Math.pow(1024, 2))
    }
      , Dr = [2e3, 4e3]
      , Mr = [2500, 4e3]
      , Fr = [.1, .25]
      , Hr = {
        ttfb: [200, 500],
        fp: Dr,
        fcp: Dr,
        lcp: Mr,
        lcpFinal: Mr,
        fid: [100, 300],
        cls: Fr,
        clsFinal: Fr,
        tbt: [300, 600]
    }
      , Ur = function(e, t) {
        return Hr[e] ? t <= Hr[e][0] ? "good" : t <= Hr[e][1] ? "needsImprovement" : "poor" : null
    }
      , zr = function(e, t, n) {
        var r;
        r = function() {
            Nr.u && e.indexOf("Final") < 0 || !wr.analyticsTracker || wr.analyticsTracker({
                metricName: e,
                data: t,
                eventProperties: n || {},
                navigatorInformation: Sr ? {
                    deviceMemory: Or() || 0,
                    hardwareConcurrency: Ir() || 0,
                    serviceWorkerStatus: "serviceWorker"in Sr ? Sr.serviceWorker.controller ? "controlled" : "supported" : "unsupported",
                    isLowEndDevice: Pr(),
                    isLowEndExperience: Cr(Ar, kr)
                } : {},
                vitalsScore: Ur(e, t)
            })
        }
        ,
        "requestIdleCallback"in _r ? _r.requestIdleCallback(r, {
            timeout: 3e3
        }) : r()
    }
      , Wr = function(e, t, n) {
        Object.keys(t).forEach((function(e) {
            "number" == typeof t[e] && (t[e] = jr(t[e]))
        }
        )),
        zr(e, t, n)
    }
      , qr = function(e, t, n) {
        var r = jr(e);
        r <= wr.o && r >= 0 && zr(t, r, n)
    }
      , Gr = {}
      , Jr = {
        value: 0
    }
      , Vr = {
        value: 0
    }
      , Kr = {
        value: 0
    }
      , Xr = {
        value: {
            beacon: 0,
            css: 0,
            fetch: 0,
            img: 0,
            other: 0,
            script: 0,
            total: 0,
            xmlhttprequest: 0
        }
    }
      , $r = {
        value: 0
    }
      , Yr = function(e) {
        var t = e.pop();
        t && !t.s && t.value && (Jr.value += t.value)
    }
      , Zr = {}
      , Qr = function(e, t) {
        try {
            var n = new PerformanceObserver((function(e) {
                t(e.getEntries())
            }
            ));
            return n.observe({
                type: e,
                buffered: !0
            }),
            n
        } catch (e) {
            Er.warn("Perfume.js:", e)
        }
        return null
    }
      , eo = function(e) {
        Zr[e] && Zr[e].disconnect(),
        delete Zr[e]
    }
      , to = function(e) {
        var t = e.pop();
        t && qr(t.processingStart - t.startTime, "fid", {
            performanceEntry: t
        }),
        eo(1),
        qr(Kr.value, "lcp"),
        Zr[3] && "function" == typeof Zr[3].takeRecords && Zr[3].takeRecords(),
        qr(Jr.value, "cls"),
        setTimeout((function() {
            qr($r.value, "tbt"),
            Wr("dataConsumption", Xr.value)
        }
        ), 1e4)
    }
      , no = function(e) {
        e.forEach((function(e) {
            if (!("self" !== e.name || e.startTime < Vr.value)) {
                var t = e.duration - 50;
                t > 0 && ($r.value += t)
            }
        }
        ))
    }
      , ro = function(e) {
        e.forEach((function(e) {
            "first-paint" === e.name ? qr(e.startTime, "fp") : "first-contentful-paint" === e.name && (Vr.value = e.startTime,
            qr(Vr.value, "fcp"),
            Zr[4] = Qr("longtask", no),
            eo(0))
        }
        ))
    }
      , oo = function(e) {
        var t = e.pop();
        t && (Kr.value = t.renderTime || t.loadTime)
    }
      , io = function(e) {
        e.forEach((function(e) {
            e.identifier && qr(e.startTime, e.identifier)
        }
        ))
    }
      , uo = function(e) {
        e.forEach((function(e) {
            if (wr.t && Wr("resourceTiming", e),
            e.decodedBodySize && e.initiatorType) {
                var t = e.decodedBodySize / 1e3;
                Xr.value[e.initiatorType] += t,
                Xr.value.total += t
            }
        }
        ))
    }
      , ao = function() {
        Zr[2] && (qr(Kr.value, "lcpFinal"),
        eo(2)),
        Zr[3] && ("function" == typeof Zr[3].takeRecords && Zr[3].takeRecords(),
        qr(Jr.value, "clsFinal"),
        eo(3))
    }
      , co = function(e) {
        var t = "usageDetails"in e ? e.usageDetails : {};
        Wr("storageEstimate", {
            quota: Br(e.quota),
            usage: Br(e.usage),
            caches: Br(t.caches),
            indexedDB: Br(t.indexedDB),
            serviceWorker: Br(t.serviceWorkerRegistrations)
        })
    }
      , so = function() {
        function e(e) {
            if (void 0 === e && (e = {}),
            this.l = "6.2.0",
            wr.analyticsTracker = e.analyticsTracker,
            wr.t = !!e.resourceTiming,
            wr.i = !!e.elementTiming,
            wr.o = e.maxMeasureTime || wr.o,
            Rr()) {
                "PerformanceObserver"in _r && (Zr[0] = Qr("paint", ro),
                Zr[1] = Qr("first-input", to),
                Zr[2] = Qr("largest-contentful-paint", oo),
                wr.t && Qr("resource", uo),
                Zr[3] = Qr("layout-shift", Yr),
                wr.i && Qr("element", io)),
                void 0 !== xr.hidden && xr.addEventListener("visibilitychange", Lr.bind(this, ao));
                var t = function() {
                    if (!Rr())
                        return {};
                    var e = Tr.getEntriesByType("navigation")[0];
                    if (!e)
                        return {};
                    var t = e.responseStart
                      , n = e.responseEnd;
                    return {
                        fetchTime: n - e.fetchStart,
                        workerTime: e.workerStart > 0 ? n - e.workerStart : 0,
                        totalTime: n - e.requestStart,
                        downloadTime: n - t,
                        timeToFirstByte: t - e.requestStart,
                        headerSize: e.transferSize - e.encodedBodySize || 0,
                        dnsLookupTime: e.domainLookupEnd - e.domainLookupStart,
                        redirectTime: e.redirectEnd - e.redirectStart
                    }
                }();
                Wr("navigationTiming", t),
                t.timeToFirstByte && qr(t.timeToFirstByte, "ttfb"),
                Wr("networkInformation", function() {
                    if ("connection"in Sr) {
                        var e = Sr.connection;
                        return "object" != typeof e ? {} : (Ar = e.effectiveType,
                        kr = !!e.saveData,
                        {
                            downlink: e.downlink,
                            effectiveType: e.effectiveType,
                            rtt: e.rtt,
                            saveData: !!e.saveData
                        })
                    }
                    return {}
                }()),
                Sr && Sr.storage && "function" == typeof Sr.storage.estimate && Sr.storage.estimate().then(co)
            }
        }
        return e.prototype.start = function(e) {
            Rr() && !Gr[e] && (Gr[e] = !0,
            Tr.mark("mark_" + e + "_start"),
            Nr.u = !1)
        }
        ,
        e.prototype.end = function(e, t) {
            void 0 === t && (t = {}),
            Rr() && Gr[e] && (Tr.mark("mark_" + e + "_end"),
            delete Gr[e],
            Wr(e, jr(function(e) {
                Tr.measure(e, "mark_" + e + "_start", "mark_" + e + "_end");
                var t = Tr.getEntriesByName(e).pop();
                return t && "measure" === t.entryType ? t.duration : -1
            }(e)), t))
        }
        ,
        e.prototype.endPaint = function(e, t) {
            var n = this;
            setTimeout((function() {
                n.end(e, t)
            }
            ))
        }
        ,
        e.prototype.clear = function(e) {
            delete Gr[e],
            Tr.clearMarks && (Tr.clearMarks("mark_" + e + "_start"),
            Tr.clearMarks("mark_" + e + "_end"))
        }
        ,
        e
    }()
      , fo = function(e) {
        return new z((function(t) {
            new so({
                resourceTiming: !0,
                analyticsTracker: function(r) {
                    var o, i = null == r ? void 0 : r.metricName, u = null == r ? void 0 : r.data, a = "";
                    switch (i) {
                    case "fid":
                        a = "fid";
                        break;
                    case "cls":
                        a = "cls";
                        break;
                    case "tbt":
                        a = "tbt"
                    }
                    if (a) {
                        var c = Vn(e)
                          , s = e.initialPagePath;
                        c.pagePath === s && function(e, t) {
                            e.next({
                                type: tt.PERFORMANCE,
                                subtype: "timing",
                                content: t
                            })
                        }(t, n(((o = {})[a] = u,
                        o), c))
                    }
                }
            })
        }
        ))
    }
      , lo = function(e) {
        var t = new z((function(t) {
            !function(e, t) {
                var n, r = Jt(), o = Mt("FCP"), i = function(e) {
                    "first-contentful-paint" === e.name && (a && a.disconnect(),
                    e.startTime < r.firstHiddenTime && (o.value = e.startTime,
                    o.entries.push(e),
                    n(!0)))
                }, u = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], a = u ? null : Ft("paint", i);
                (u || a) && (n = zt(e, o, t),
                u && i(u),
                Ut((function(r) {
                    o = Mt("FCP"),
                    n = zt(e, o, t),
                    requestAnimationFrame((function() {
                        requestAnimationFrame((function() {
                            o.value = performance.now() - r.timeStamp,
                            n(!0)
                        }
                        ))
                    }
                    ))
                }
                )))
            }((function(r) {
                var o = Vn(e)
                  , i = null == r ? void 0 : r.value
                  , u = e.initialPagePath;
                if (o.pagePath !== u || !i)
                    return re;
                t.next({
                    type: tt.PERFORMANCE,
                    subtype: "timing",
                    content: n({
                        fcp: i
                    }, o)
                })
            }
            ))
        }
        ));
        return t
    }
      , po = function(e) {
        var t = new z((function(t) {
            !function(e, t) {
                var n, r = Jt(), o = Mt("LCP"), i = function(e) {
                    var t = e.startTime;
                    t < r.firstHiddenTime && (o.value = t,
                    o.entries.push(e),
                    n())
                }, u = Ft("largest-contentful-paint", i);
                if (u) {
                    n = zt(e, o, t);
                    var a = function() {
                        Vt[o.id] || (u.takeRecords().map(i),
                        u.disconnect(),
                        Vt[o.id] = !0,
                        n(!0))
                    };
                    ["keydown", "click"].forEach((function(e) {
                        addEventListener(e, a, {
                            once: !0,
                            capture: !0
                        })
                    }
                    )),
                    Ht(a, !0),
                    Ut((function(r) {
                        o = Mt("LCP"),
                        n = zt(e, o, t),
                        requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                o.value = performance.now() - r.timeStamp,
                                Vt[o.id] = !0,
                                n(!0)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            }((function(r) {
                var o = Vn(e)
                  , i = null == r ? void 0 : r.value
                  , u = e.initialPagePath;
                if (o.pagePath !== u || !i)
                    return re;
                t.next({
                    type: tt.PERFORMANCE,
                    subtype: "timing",
                    content: n({
                        lcp: i
                    }, o)
                })
            }
            ))
        }
        ));
        return t
    }
      , vo = function(e) {
        return Ne(window, "error").pipe(Se((function(t) {
            var r = t.error || {}
              , o = Vn(e)
              , i = Yn(t.message);
            if (tr(e, i))
                return re;
            var u = Yn(null == r ? void 0 : r.stack);
            return {
                type: tt.WINODW_ERROR,
                content: n({
                    errorMessage: i,
                    errorStack: u
                }, o)
            }
        }
        )), e.shouldWindowErrorRepeatReport ? Ke((function() {}
        )) : (t = function(e) {
            return "" + (e && e.content ? e.content.errorMessage : "")
        }
        ,
        q((function(e, n) {
            var o = new Set;
            e.subscribe(new G(n,(function(e) {
                var r = t ? t(e) : e;
                o.has(r) || (o.add(r),
                n.next(e))
            }
            ))),
            null == r || r.subscribe(new G(n,(function() {
                return o.clear()
            }
            ),P))
        }
        ))));
        var t, r
    }
      , ho = ["error"]
      , mo = function(e) {
        var t = e.consoleMethods ? function(e) {
            var t = ["error", "warn", "log", "info"];
            return Nn(e) ? e.filter((function(e) {
                return t.indexOf(e) > -1
            }
            )) : (console.error("consoleMethods必须是一个数组！"),
            [])
        }(e.consoleMethods) : ho
          , r = [];
        return t.forEach((function(t) {
            var o = new z((function(r) {
                In(window.console, t, (function() {
                    for (var o = Vn(e), i = arguments.length, u = new Array(i), a = 0; a < i; a++)
                        u[a] = arguments[a];
                    var c = u.map(Dn)
                      , s = Yn(c);
                    if (nr(e, s))
                        return re;
                    r.next({
                        type: tt.CONSOLE,
                        subtype: "console." + t,
                        content: n({
                            message: s
                        }, o)
                    })
                }
                ))
            }
            ));
            r.push(o)
        }
        )),
        Ee(r).pipe(Re())
    }
      , yo = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self,
    {
        exports: {}
    });
    !function(e, t) {
        "undefined" != typeof self ? self : "undefined" != typeof window && window,
        e.exports = function() {
            var e = "3.7.5";
            try {
                var t = e
                  , n = "function" == typeof atob
                  , r = "function" == typeof btoa
                  , o = "function" == typeof Buffer
                  , i = "function" == typeof TextDecoder ? new TextDecoder : void 0
                  , u = "function" == typeof TextEncoder ? new TextEncoder : void 0
                  , a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                  , c = Array.prototype.slice.call(a)
                  , s = function(e) {
                    var t = {};
                    return e.forEach((function(e, n) {
                        return t[e] = n
                    }
                    )),
                    t
                }(c)
                  , f = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
                  , l = String.fromCharCode.bind(String)
                  , p = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function(e) {
                    return new Uint8Array(Array.prototype.slice.call(e, 0))
                }
                  , d = function(e) {
                    return e.replace(/=/g, "").replace(/[+\/]/g, (function(e) {
                        return "+" == e ? "-" : "_"
                    }
                    ))
                }
                  , v = function(e) {
                    return e.replace(/[^A-Za-z0-9\+\/]/g, "")
                }
                  , h = function(e) {
                    for (var t, n, r, o, i = "", u = e.length % 3, a = 0; a < e.length; ) {
                        if ((n = e.charCodeAt(a++)) > 255 || (r = e.charCodeAt(a++)) > 255 || (o = e.charCodeAt(a++)) > 255)
                            throw new TypeError("invalid character found");
                        i += c[(t = n << 16 | r << 8 | o) >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t]
                    }
                    return u ? i.slice(0, u - 3) + "===".substring(u) : i
                }
                  , m = r ? function(e) {
                    return btoa(e)
                }
                : o ? function(e) {
                    return Buffer.from(e, "binary").toString("base64")
                }
                : h
                  , y = o ? function(e) {
                    return Buffer.from(e).toString("base64")
                }
                : function(e) {
                    for (var t = 4096, n = [], r = 0, o = e.length; r < o; r += t)
                        n.push(l.apply(null, e.subarray(r, r + t)));
                    return m(n.join(""))
                }
                  , b = function(e, t) {
                    return void 0 === t && (t = !1),
                    t ? d(y(e)) : y(e)
                }
                  , g = function(e) {
                    if (e.length < 2)
                        return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? l(192 | t >>> 6) + l(128 | 63 & t) : l(224 | t >>> 12 & 15) + l(128 | t >>> 6 & 63) + l(128 | 63 & t);
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return l(240 | t >>> 18 & 7) + l(128 | t >>> 12 & 63) + l(128 | t >>> 6 & 63) + l(128 | 63 & t)
                }
                  , w = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
                  , _ = function(e) {
                    return e.replace(w, g)
                }
                  , E = o ? function(e) {
                    return Buffer.from(e, "utf8").toString("base64")
                }
                : u ? function(e) {
                    return y(u.encode(e))
                }
                : function(e) {
                    return m(_(e))
                }
                  , x = function(e, t) {
                    return void 0 === t && (t = !1),
                    t ? d(E(e)) : E(e)
                }
                  , S = function(e) {
                    return x(e, !0)
                }
                  , T = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g
                  , O = function(e) {
                    switch (e.length) {
                    case 4:
                        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                        return l(55296 + (t >>> 10)) + l(56320 + (1023 & t));
                    case 3:
                        return l((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                    default:
                        return l((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                    }
                }
                  , I = function(e) {
                    return e.replace(T, O)
                }
                  , R = function(e) {
                    if (e = e.replace(/\s+/g, ""),
                    !f.test(e))
                        throw new TypeError("malformed base64.");
                    e += "==".slice(2 - (3 & e.length));
                    for (var t, n, r, o = "", i = 0; i < e.length; )
                        t = s[e.charAt(i++)] << 18 | s[e.charAt(i++)] << 12 | (n = s[e.charAt(i++)]) << 6 | (r = s[e.charAt(i++)]),
                        o += 64 === n ? l(t >> 16 & 255) : 64 === r ? l(t >> 16 & 255, t >> 8 & 255) : l(t >> 16 & 255, t >> 8 & 255, 255 & t);
                    return o
                }
                  , A = n ? function(e) {
                    return atob(v(e))
                }
                : o ? function(e) {
                    return Buffer.from(e, "base64").toString("binary")
                }
                : R
                  , k = o ? function(e) {
                    return p(Buffer.from(e, "base64"))
                }
                : function(e) {
                    return p(A(e).split("").map((function(e) {
                        return e.charCodeAt(0)
                    }
                    )))
                }
                  , P = function(e) {
                    return k(N(e))
                }
                  , C = o ? function(e) {
                    return Buffer.from(e, "base64").toString("utf8")
                }
                : i ? function(e) {
                    return i.decode(k(e))
                }
                : function(e) {
                    return I(A(e))
                }
                  , N = function(e) {
                    return v(e.replace(/[-_]/g, (function(e) {
                        return "-" == e ? "+" : "/"
                    }
                    )))
                }
                  , L = function(e) {
                    return C(N(e))
                }
                  , j = function(e) {
                    if ("string" != typeof e)
                        return !1;
                    var t = e.replace(/\s+/g, "").replace(/={0,2}$/, "");
                    return !/[^\s0-9a-zA-Z\+/]/.test(t) || !/[^\s0-9a-zA-Z\-_]/.test(t)
                }
                  , B = function(e) {
                    return {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }
                  , D = function() {
                    var e = function(e, t) {
                        return Object.defineProperty(String.prototype, e, B(t))
                    };
                    e("fromBase64", (function() {
                        return L(this)
                    }
                    )),
                    e("toBase64", (function(e) {
                        return x(this, e)
                    }
                    )),
                    e("toBase64URI", (function() {
                        return x(this, !0)
                    }
                    )),
                    e("toBase64URL", (function() {
                        return x(this, !0)
                    }
                    )),
                    e("toUint8Array", (function() {
                        return P(this)
                    }
                    ))
                }
                  , M = function() {
                    var e = function(e, t) {
                        return Object.defineProperty(Uint8Array.prototype, e, B(t))
                    };
                    e("toBase64", (function(e) {
                        return b(this, e)
                    }
                    )),
                    e("toBase64URI", (function() {
                        return b(this, !0)
                    }
                    )),
                    e("toBase64URL", (function() {
                        return b(this, !0)
                    }
                    ))
                }
                  , F = function() {
                    D(),
                    M()
                }
                  , H = {
                    version: e,
                    VERSION: t,
                    atob: A,
                    atobPolyfill: R,
                    btoa: m,
                    btoaPolyfill: h,
                    fromBase64: L,
                    toBase64: x,
                    encode: x,
                    encodeURI: S,
                    encodeURL: S,
                    utob: _,
                    btou: I,
                    decode: L,
                    isValid: j,
                    fromUint8Array: b,
                    toUint8Array: P,
                    extendString: D,
                    extendUint8Array: M,
                    extendBuiltins: F,
                    Base64: {}
                };
                Object.keys(H).forEach((function(e) {
                    return H.Base64[e] = H[e]
                }
                ))
            } catch (e) {}
            return H
        }()
    }(yo);
    var bo = [];
    ["click"].forEach((function(e) {
        var t = Ne(window, e).pipe(Se((function(t) {
            var n = t.target || {};
            return {
                type: tt.USER_EVENT,
                subtype: "userEvent." + e,
                content: {
                    x: t.clientX || t.pageX,
                    y: t.clientY || t.pageY,
                    target: {
                        nodeName: n.nodeName,
                        innerText: (n.innerText || "").slice(0, 10)
                    }
                }
            }
        }
        )));
        bo.push(t)
    }
    ));
    var go = Ee(bo).pipe(Re());
    function wo(e, t) {
        if (window.FileReader)
            try {
                !function(e, t) {
                    var n = new FileReader;
                    n.onload = function() {
                        t(n.result)
                    }
                    ,
                    n.onerror = function() {
                        t(n.error)
                    }
                    ,
                    n.readAsText(e)
                }(e, t)
            } catch (n) {
                t(e)
            }
        else
            t(e)
    }
    function _o(e, t) {
        e.responseType && "text" !== e.responseType ? "document" === e.responseType ? t(e.responseXML) : wo(e.response, t) : t(e.responseText)
    }
    var Eo = function(e) {
        if (!window.XMLHttpRequest)
            return re;
        var t = new z((function(t) {
            var r = At(e)
              , o = (e || {}).traceIdApiList
              , i = void 0 === o ? [] : o
              , u = function(o, i) {
                void 0 === o && (o = "");
                var u = e.responseValidator
                  , a = e.submitType
                  , c = e.ignoreApiSuccessList
                  , s = i && i.currentTarget || {}
                  , f = s.xhrConfig || {}
                  , l = s.status
                  , p = f.openURL || ""
                  , d = f.startTime || ""
                  , v = f.reqHeader || {}
                  , h = (v || {}).TraceId;
                if (!(p.indexOf(r) > -1)) {
                    var m = Zn(p);
                    if (!rr(a) || !Jn(["/reqxml", "/reqlocal", "/reqsofttodo", "/reqsavemap", "/reqsavefile", "/reqreadfile", "/reqreadmap"], m)) {
                        var y = {
                            url: p,
                            api: m,
                            apiErrorType: "",
                            errorMessage: "",
                            status: "" + l,
                            traceId: h || "",
                            params: "requestParams：" + Rn(Yn(ar(o))) + "，requestHeader：" + Yn(v),
                            pagePath: f.pagePath,
                            pageHref: f.pageHref,
                            pv_id: f.pv_id,
                            response: "",
                            duration: null
                        };
                        d && (y.duration = Date.now() - d);
                        var b = function(e, r) {
                            var o = function(r) {
                                var o = Yn(r);
                                t.next({
                                    type: tt.XHR,
                                    subtype: "xhrError",
                                    content: n({}, y, {
                                        apiErrorType: e,
                                        errorMessage: o
                                    })
                                })
                            };
                            r ? o(r) : _o(s, (function(e) {
                                o(e)
                            }
                            ))
                        }
                          , g = function() {
                            Jn(c, m) || t.next({
                                type: tt.XHR,
                                subtype: "xhrSuccess",
                                content: n({}, y)
                            })
                        };
                        l >= 200 && l < 400 ? function() {
                            jn(u) ? _o(s, (function(e) {
                                try {
                                    var t = e;
                                    try {
                                        "string" == typeof e && (t = JSON.parse(e))
                                    } catch (e) {}
                                    u(t, p) ? g() : b(Ct.RESPONSE_VALIDATOR, t)
                                } catch (e) {
                                    g()
                                }
                            }
                            )) : g()
                        }() : b(l ? Ct.HTTP_CODE : Ct.UNKNOW_ERROR)
                    }
                }
            };
            In(window.XMLHttpRequest.prototype, "open", (function(t, o) {
                var u = this
                  , a = Vn(e);
                if (this.xhrConfig = n({
                    openURL: o,
                    startTime: Date.now(),
                    reqHeader: {}
                }, a),
                !(o.indexOf(r) > -1) && Sn(i, o)) {
                    var c = xn();
                    Object.keys(c).forEach((function(e) {
                        u.setRequestHeader(e, c[e])
                    }
                    ))
                }
            }
            )),
            In(window.XMLHttpRequest.prototype, "setRequestHeader", (function(e, t) {
                this.xhrConfig && this.xhrConfig.reqHeader && (this.xhrConfig.reqHeader[e] = t)
            }
            )),
            In(window.XMLHttpRequest.prototype, "send", (function() {
                var e = (arguments.length <= 0 ? void 0 : arguments[0]) || "";
                this.addEventListener ? (this.addEventListener("error", u.bind(null, e)),
                this.addEventListener("load", u.bind(null, e)),
                this.addEventListener("abort", u.bind(null, e))) : In(this, "onreadystatechange", (function(t) {
                    4 === this.readyState && u(e, t)
                }
                ))
            }
            ))
        }
        ));
        return t
    };
    function xo(e, t) {
        var r = (t || {}).traceIdApiList
          , o = void 0 === r ? [] : r
          , i = xn()
          , u = e[0]
          , a = e[1]
          , c = void 0 === a ? null : a
          , f = u
          , l = c;
        if ("request" === Cn(u)) {
            var p = u.headers
              , d = {}
              , v = u.url
              , h = u.method;
            if (Sn(o, v))
                try {
                    Object.keys(i).forEach((function(e) {
                        p.append(e, i[e])
                    }
                    ));
                    for (var m, y = s(p.entries()); !(m = y()).done; ) {
                        var b = m.value
                          , g = b[0]
                          , w = b[1];
                        d[g] = w
                    }
                } catch (e) {}
            f = v,
            l = {
                url: v,
                method: h,
                headers: d
            }
        } else
            Sn(o, u) && (c ? (c.headers = n({}, c.headers || {}, i),
            l = c) : (e[1] = {
                headers: i
            },
            l = {
                headers: i
            }));
        return {
            apiPath: f,
            reportParams: l
        }
    }
    var So, To = null, Oo = null;
    (So = window.fetch) && (window.fetch = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        if (!Oo || !To)
            return So.apply(this, t).then((function(e) {
                return e
            }
            )).catch((function(e) {
                throw e
            }
            ));
        var o = Oo
          , i = o.responseValidator
          , u = o.ignoreApiSuccessList
          , a = void 0 === u ? [] : u
          , c = o.contentTypes
          , s = void 0 === c ? [] : c
          , f = xo(t, Oo)
          , l = f.apiPath
          , p = f.reportParams
          , d = Zn(l)
          , v = Vn(Oo)
          , h = Date.now()
          , m = "";
        try {
            var y = p || {}
              , b = y.headers
              , g = void 0 === b ? {} : b;
            m = (null == g ? void 0 : g.TraceId) || ""
        } catch (e) {}
        var w = ["application/json", "text/plain", "text/xml"]
          , _ = ur(w, s)
          , E = p;
        return p && p.body && (E = n({}, p, {
            body: ar(p.body)
        })),
        So.apply(this, t).then((function(e) {
            var t = !1;
            try {
                var r = e.headers.get("Content-Type");
                r && Sn(_, r) && (t = !0)
            } catch (e) {}
            var o = n({
                url: l,
                api: d,
                apiErrorType: "",
                errorMessage: "",
                status: "" + e.status,
                traceId: m,
                params: Rn(Yn(E)),
                response: "",
                duration: Date.now() - h
            }, v);
            if (!t)
                return e.ok || To.next({
                    type: tt.FETCH,
                    subtype: "fetchError",
                    content: n({}, o, {
                        apiErrorType: Ct.HTTP_CODE,
                        errorMessage: e.status
                    })
                }),
                e;
            var u = e.clone()
              , c = e.clone()
              , s = function(e, t) {
                var r = function(e) {
                    To.next({
                        type: tt.FETCH,
                        subtype: "fetchError",
                        content: n({}, o, {
                            apiErrorType: t,
                            errorMessage: Yn(e)
                        })
                    })
                };
                e.text().then((function(e) {
                    r(e)
                }
                )).catch((function(e) {
                    var t = e && e.message || "";
                    r(t)
                }
                ))
            }
              , f = function() {
                Jn(a, d) || To.next({
                    type: tt.FETCH,
                    subtype: "fetchSuccess",
                    content: n({}, o)
                })
            };
            return function(e) {
                e.status >= 200 && e.status < 400 ? function(e) {
                    try {
                        var t = "xlog catch json"
                          , n = u.json().catch((function() {
                            return t
                        }
                        ));
                        jn(i) && Bn(n) ? n.then((function(n) {
                            n !== t ? i(n, l) ? f() : s(e, Ct.RESPONSE_VALIDATOR) : f()
                        }
                        )).catch((function() {
                            f()
                        }
                        )) : f()
                    } catch (e) {
                        f()
                    }
                }(e) : s(e, Ct.HTTP_CODE)
            }(c),
            e
        }
        )).catch((function(e) {
            throw To.next({
                type: tt.FETCH,
                subtype: "fetchError",
                content: n({
                    url: l,
                    api: d,
                    apiErrorType: Ct.UNKNOW_ERROR,
                    errorMessage: Yn(e.message),
                    status: "",
                    traceId: m,
                    params: Rn(Yn(E)),
                    response: "",
                    duration: Date.now() - h
                }, v)
            }),
            e
        }
        ))
    }
    );
    var Io = function(e) {
        if (e) {
            for (var t = [], n = [e], r = n.shift(); r; ) {
                t.push(r);
                var o = r.children.length;
                if (o)
                    for (var i = o - 1; i >= 0; i--)
                        n.unshift(r.children[i]);
                r = n.shift()
            }
            return t
        }
    };
    var Ro = {
        "accent-color": "auto",
        "align-content": "normal",
        "align-items": "normal",
        "align-self": "auto",
        animation: "none 0s ease 0s 1 normal none running",
        appearance: "none",
        background: "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
        "background-image": "none",
        "border-top": void 0,
        "border-right": void 0,
        "border-bottom": void 0,
        "border-left": void 0,
        "border-radius": "0px",
        bottom: "auto",
        "box-shadow": "none",
        "box-sizing": "border-box",
        "caption-side": "top",
        clear: "none",
        clip: "auto",
        "clip-path": "none",
        color: void 0,
        content: "normal",
        direction: "ltr",
        display: "block",
        fill: "rgb(0, 0, 0)",
        "fill-opacity": "1",
        flex: "0 1 auto",
        "flex-basis": "auto",
        "flex-direction": "row",
        "flex-flow": "row nowrap",
        "flex-grow": "0",
        "flex-shrink": "1",
        "flex-wrap": "nowrap",
        float: "none",
        "flood-opacity": "1",
        "font-size": void 0,
        "font-style": "normal",
        "font-weight": void 0,
        "font-stretch": "100%",
        "grid-template": "none / none / none",
        gap: "normal",
        grid: "none / none / none / row / auto / auto",
        "grid-area": "auto / auto / auto / auto",
        "grid-template-rows": "none",
        "grid-template-columns": "none",
        "grid-template-areas": "none",
        "grid-column-gap": "normal",
        "grid-row-gap": "normal",
        "grid-column-start": "auto",
        "grid-column-end": "auto",
        "grid-row-start": "auto",
        "grid-row-end": "auto",
        height: void 0,
        "inline-size": void 0,
        "justify-content": "normal",
        "justify-items": "normal",
        "justify-self": "auto",
        left: "auto",
        "letter-spacing": "normal",
        "line-height": "normal",
        margin: void 0,
        "max-height": "none",
        "max-inline-size": "none",
        "max-width": "none",
        "min-height": "0px",
        "min-inline-size": "0px",
        "min-width": "0px",
        "object-fit": "fill",
        "object-position": "50% 50%",
        opacity: "1",
        order: "0",
        outline: "rgb(0, 0, 0) none 0px",
        overflow: "visible",
        padding: void 0,
        perspective: "none",
        "perspective-origin": void 0,
        "place-content": "normal",
        "place-items": "normal",
        "place-self": "auto",
        position: "static",
        right: "auto",
        rotate: "none",
        scale: "none",
        "shape-margin": "0px",
        "shape-outside": "none",
        stroke: "none",
        "stroke-width": "1px",
        "stroke-opacity": "1",
        "tab-size": "8",
        "text-align": "start",
        "text-indent": "0px",
        "text-overflow": "clip",
        "text-shadow": "none",
        "text-size-adjust": "auto",
        top: "auto",
        transform: "none",
        "transform-origin": void 0,
        "transform-style": "flat",
        translate: "none",
        visibility: "visible",
        "white-space": "normal",
        width: void 0,
        "will-change": "auto",
        "word-break": "normal",
        "writing-mode": "horizontal-tb",
        "z-index": "auto",
        zoom: "1",
        "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
    }
      , Ao = Object.keys(Ro)
      , ko = Ao.length - 1;
    function Po(e) {
        var t = "";
        try {
            var r = document.documentElement
              , o = r.cloneNode(!0);
            t = function(e, t) {
                var n, r = Io(e), o = ((n = Io(t)).forEach((function(e) {
                    "SCRIPT" === e.tagName && (e.src = ""),
                    "LINK" === e.tagName && (e.href = "")
                }
                )),
                n);
                return r.forEach((function(e, t) {
                    var n = o[t];
                    if (!["SCRIPT", "HEAD", "STYLE", "META", "LINK", "TITLE"].includes(e.tagName)) {
                        var r = getComputedStyle(e);
                        Ao.forEach((function(t, o) {
                            var i = r.getPropertyValue(t);
                            if ("background" !== t && "background-image" !== t || i.indexOf("base64") > -1 && (i = ""),
                            Ro[t] !== i && n.style.setProperty(t, i),
                            o === ko && "IMG" === e.tagName) {
                                var u = e.src;
                                u.indexOf("base64") > -1 ? u = "" : 0 === u.indexOf("/") && (u = "" + window.location.origin + u),
                                n.setAttribute("src", u)
                            }
                        }
                        ))
                    }
                }
                )),
                (new XMLSerializer).serializeToString(t)
            }(r, o),
            t = Yn(yo.exports.Base64.toBase64(t), 300)
        } catch (t) {
            !function(e, t) {
                var r = (t || {}).foo
                  , o = Vn(t)
                  , i = {
                    id: "develop_custom",
                    page_id: "error",
                    page_title: "",
                    btn_id: dt,
                    btn_title: n({
                        errorMessage: Yn(e.message),
                        errorStack: Yn(e.stack)
                    }, o)
                };
                r && r(i)
            }(t, e)
        }
        return t
    }
    var Co = !1
      , No = function(e) {
        Co = e
    }
      , Lo = "CONTENT_EMPTY"
      , jo = "WHITE_PIXEL"
      , Bo = function(e) {
        return e.blankScreenPollingNum || 3
    }
      , Do = function(e) {
        return 1e3 * Bo(e)
    };
    function Mo(e) {
        return Nn(e) ? e : [e]
    }
    function Fo(e) {
        var t = !1
          , n = "";
        return !function(e) {
            for (var t = (e || {}).blankScreenSelector, n = !1, r = Mo(void 0 === t ? "#app" : t), o = r.length, i = 0; i < o; i++) {
                var u = r[i];
                try {
                    var a = document.querySelector(u);
                    if (a && !a.firstElementChild) {
                        n = !0;
                        break
                    }
                } catch (e) {
                    console.error("检测元素的内容是否为空报错：" + e)
                }
            }
            return n
        }(e) ? function(e) {
            if (!document.elementsFromPoint && !document.msElementsFromPoint)
                return !1;
            var t = 0
              , n = (e || {}).blankScreenSelector
              , r = Mo(void 0 === n ? "#app" : n)
              , o = ["html", "body"].concat(r);
            function i(e) {
                try {
                    var n = function(e) {
                        var t = e.id
                          , n = e.className
                          , r = e.nodeName;
                        if (t)
                            return "#" + t;
                        if (!n)
                            return r.toLowerCase();
                        try {
                            return "." + n.split(" ").filter((function(e) {
                                return !!e
                            }
                            )).join(".")
                        } catch (e) {
                            return ""
                        }
                    }(e);
                    -1 !== o.indexOf(n) && t++
                } catch (e) {
                    console.error("检测像素点下的元素报错：" + e)
                }
            }
            return function(e, t, n) {
                for (var r = [], o = [], u = window.innerWidth, a = window.innerHeight, c = e; c <= t; c++)
                    document.elementsFromPoint ? (r = document.elementsFromPoint(u * c / n, a / 2),
                    o = document.elementsFromPoint(u / 2, a * c / n)) : document.msElementsFromPoint && (r = document.msElementsFromPoint(u * c / n, a / 2),
                    o = document.msElementsFromPoint(u / 2, a * c / n)),
                    r[0] && i(r[0]),
                    o[0] && i(o[0])
            }(3, 7, 10),
            10 === t
        }(e) && (t = !0,
        n = jo) : (t = !0,
        n = Lo),
        {
            isBlankScreen: t,
            blankScreenType: n
        }
    }
    function Ho(e, t) {
        var r, o = Bo(e), i = (r = o,
        Be(1e3).pipe(Je(r)));
        return [Se((function() {
            return i
        }
        )), Ae(), Se((function() {
            if (!Co)
                return {
                    isBlankScreen: !1,
                    blankScreenType: ""
                };
            var t = Fo(e);
            return {
                isBlankScreen: t.isBlankScreen,
                blankScreenType: t.blankScreenType
            }
        }
        )), Fe(o), Se((function(r) {
            return function(e) {
                for (var t = (e || []).length, n = 0; n < t; n++) {
                    var r = e[n];
                    if (null == r || !r.isBlankScreen)
                        return !1
                }
                return 0 !== t
            }(r) ? function(e) {
                var t = e.data
                  , r = e.opts
                  , o = e.subtype;
                if (!Co)
                    return re;
                var i = (t || {}).blankScreenType
                  , u = r.errorMessage
                  , a = r.errorStack
                  , c = void 0 === a ? "" : a
                  , s = Vn(r);
                return No(!1),
                {
                    type: tt.BLANK_SCREEN,
                    subtype: o,
                    content: n({
                        blankScreenType: i,
                        message: u,
                        errorStack: c,
                        capture: Po(r)
                    }, s)
                }
            }({
                data: r[0],
                opts: e,
                subtype: t
            }) : re
        }
        ))]
    }
    var Uo = function(e) {
        var t = function(e) {
            var t = Ne(window, "error")
              , n = Do(e);
            return t.pipe.apply(t, [Ge(n), De((function(t) {
                var n = t.error || {}
                  , r = Yn(t.message);
                return !tr(e, r) && (e.errorMessage = r,
                e.errorStack = Yn(n.stack),
                !0)
            }
            ))].concat(Ho(e, Nt)))
        }(e)
          , n = function(e) {
            var t = Ne(window, "error", !0)
              , n = Do(e);
            return t.pipe.apply(t, [Ge(n), De((function(t) {
                if (t instanceof window.ErrorEvent)
                    return !1;
                var n = t.target
                  , r = n.tagName;
                return !!Jn(["SCRIPT"], r) && (e.errorMessage = n.src || n.href,
                e.errorStack = "",
                !0)
            }
            ))].concat(Ho(e, Lt)))
        }(e)
          , r = function(e) {
            var t = Ne(window, "unhandledrejection")
              , n = Do(e);
            return t.pipe.apply(t, [Ge(n), De((function(t) {
                var n = t.reason || {}
                  , r = n.message || n || ""
                  , o = n.stack || ""
                  , i = Yn(r);
                return !tr(e, i) && (e.errorMessage = i,
                e.errorStack = Yn(o),
                !0)
            }
            ))].concat(Ho(e, jt)))
        }(e);
        return Ee([t, n, r]).pipe(Re())
    }
      , zo = function(e) {
        var t = []
          , r = Kn(e).pagePath
          , o = Date.now()
          , i = function() {
            var t = Kn(e).pagePath
              , n = window.location.origin || ""
              , i = Date.now()
              , u = {
                origin: n,
                previousTime: o,
                currentTime: i,
                previous: r,
                current: t,
                stay: i - o
            };
            return r = t,
            o = i,
            u
        };
        ["hashchange", "popstate"].forEach((function(e) {
            var n = Ne(window, e).pipe(Se((function() {
                return {
                    type: tt.ROUTE_CHANGE,
                    subtype: "routeChange." + e,
                    content: i()
                }
            }
            )));
            t.push(n)
        }
        ));
        ["pushState", "replaceState"].forEach((function(e) {
            var n = new z((function(t) {
                In(window.history, e, (function() {
                    t.next({
                        type: tt.ROUTE_CHANGE,
                        subtype: "routeChange." + e,
                        content: i()
                    })
                }
                ))
            }
            ));
            t.push(n)
        }
        ));
        var u = "XLOG_UNLOAD_DATA_KEY";
        Ne(window, "beforeunload").subscribe((function() {
            window.sessionStorage.setItem(u, JSON.stringify(i()))
        }
        ));
        var a = window.sessionStorage.getItem(u);
        if (a) {
            var c = new z((function(e) {
                var t;
                try {
                    t = JSON.parse(a),
                    e.next({
                        type: tt.ROUTE_CHANGE,
                        subtype: tt.PAGE_LOAD,
                        content: t
                    })
                } catch (e) {}
            }
            ));
            window.sessionStorage.setItem(u, ""),
            t.push(c)
        }
        var s = {
            type: tt.ROUTE_CHANGE,
            subtype: tt.PAGE_INIT,
            content: n({}, i(), {
                previous: ""
            })
        };
        return t.push(xe(s)),
        Ee(t).pipe(Re(), De((function(e) {
            var t = e.content;
            return [tt.PAGE_LOAD, tt.PAGE_INIT].indexOf(e.subtype) > -1 || t.current !== t.previous
        }
        )), Se((function(t) {
            var r = t.content;
            if ([tt.PAGE_LOAD].indexOf(t.subtype) > -1)
                return t;
            var o = En();
            return e.pv_id = o,
            No(!0),
            n({}, t, {
                content: n({}, r, {
                    pv_id: o
                })
            })
        }
        )), Ke((function(t) {
            if (e.handleRouteChange && t.subtype !== tt.PAGE_INIT) {
                var n = t.content
                  , r = n.stay
                  , o = n.previousTime
                  , i = n.currentTime
                  , u = n.previous
                  , a = n.current;
                e.handleRouteChange.call(null, {
                    stay: r,
                    lastPageLoadTime: o,
                    currentPageLoadTime: i,
                    lastPageUrl: u,
                    currentPageUrl: a
                })
            }
        }
        )))
    }
      , Wo = ["content", "subtype", "timestamp", "storageId"]
      , qo = function(e, t) {
        return e[t]
    }
      , Go = function(e) {
        var t = e.id
          , n = e.page_id
          , r = e.page_title
          , o = e.btn_id
          , i = e.btn_title;
        return {
            id: t,
            page_id: n,
            page_title: r,
            btn_id: o,
            btn_title: i,
            timestamp: (i || {}).timestamp || Date.now()
        }
    }
      , Jo = function(e) {
        var t = e.content
          , r = e.storageId
          , o = e.timestamp
          , i = "disappear" === t.loadtype ? n({}, t, {
            storageId: r
        }) : {
            loadtype: "appear",
            pageid: qo(t, "current"),
            pre: qo(t, "previous"),
            pv_id: t.pv_id,
            storageId: r
        };
        return {
            id: "develop_custom",
            page_id: "autotrack",
            page_title: "",
            btn_id: ft,
            btn_title: i,
            timestamp: o
        }
    }
      , Vo = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "system",
            page_title: "",
            btn_id: lt,
            btn_title: Xn(e, Wo)
        })
    }
      , Ko = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "console",
            page_title: "",
            btn_id: e.subtype,
            btn_title: Xn(e, Wo)
        })
    }
      , Xo = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "network",
            page_title: "",
            btn_id: e.subtype,
            btn_title: Xn(e, Wo)
        })
    }
      , $o = function(e) {
        var t = e.content
          , r = t.btn_title || {};
        return Go(n({}, t, {
            btn_title: n({}, r, {
                storageId: e.storageId,
                timestamp: Date.now()
            })
        }))
    }
      , Yo = function(e) {
        var t = e.content;
        return n({}, t, {
            btn_title: n({}, t.btn_title || {}),
            timestamp: Date.now()
        })
    }
      , Zo = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "performance",
            page_title: "",
            btn_id: e.subtype,
            btn_title: Xn(e, Wo)
        })
    }
      , Qo = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "error",
            page_title: "",
            btn_id: nt,
            btn_title: Xn(e, Wo)
        })
    }
      , ei = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "error",
            page_title: "",
            btn_id: rt,
            btn_title: Xn(e, Wo)
        })
    }
      , ti = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "userEvent",
            page_title: "",
            btn_id: e.subtype,
            btn_title: Xn(e, Wo)
        })
    }
      , ni = function(e) {
        return Go({
            id: "develop_custom",
            page_id: tt.BLANK_SCREEN,
            page_title: "",
            btn_id: e.subtype,
            btn_title: Xn(e, Wo)
        })
    }
      , ri = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "error",
            page_title: "",
            btn_id: ot,
            btn_title: Xn(e, Wo)
        })
    }
      , oi = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "network",
            page_title: "",
            btn_id: e.subtype,
            btn_title: Xn(e, Wo)
        })
    }
      , ii = function(e) {
        return Go({
            id: "develop_custom",
            page_id: "error",
            page_title: "",
            btn_id: pt,
            btn_title: Xn(e, Wo)
        })
    }
      , ui = function(e, t, r) {
        if (!e.length)
            return "";
        var o = e[0]
          , i = o.traceId
          , u = o.uuid
          , a = o.from
          , c = o.type
          , s = o.event
          , f = o.content
          , l = void 0 === f ? {} : f
          , p = o.distinctId
          , d = t.product_id
          , v = t.product_name
          , h = t.channel_env
          , m = []
          , y = {}
          , b = l.__channel;
        if (b && (y = Mn(y, Xn(b, ["from", "product_id", "product_name"])),
        delete l.__channel),
        c === tt.BATCH)
            m = s.map((function(e) {
                return n({}, e, {
                    timestamp: Date.now()
                })
            }
            ));
        else {
            var g = function(e, t) {
                var r = function(e) {
                    return {
                        loadtype: "disappear",
                        stay: e.stay,
                        pageid: qo(e, "previous")
                    }
                }
                  , o = [];
                return e.forEach((function(e) {
                    if (o.push(e),
                    e.type === tt.ROUTE_CHANGE) {
                        var t = e.content;
                        e.subtype === tt.PAGE_LOAD ? e.content = r(t) : e.subtype !== tt.PAGE_INIT && o.push(n({}, e, {
                            content: r(t)
                        }))
                    }
                }
                )),
                o
            }(e)
              , w = function(e) {
                return e.reduce((function(e, t) {
                    return Nn(t.content) && t.type === tt.PERFORMANCE ? t.content.forEach((function(r) {
                        e.push(n({}, t, r))
                    }
                    )) : e.push(t),
                    e
                }
                ), [])
            }(g);
            m = function(e) {
                var t, n = ((t = {})[tt.ROUTE_CHANGE] = Jo,
                t[tt.BASE_INFO] = Vo,
                t[tt.CONSOLE] = Ko,
                t[tt.FETCH] = Xo,
                t.myTrack = $o,
                t.businessPoint = Yo,
                t[tt.PERFORMANCE] = Zo,
                t[tt.SOURCE_ERROR] = Qo,
                t[tt.UNHANDLED_REJECTION] = ei,
                t[tt.USER_EVENT] = ti,
                t[tt.WINODW_ERROR] = ri,
                t[tt.XHR] = oi,
                t[tt.OBSERVABLE_ERROR] = ii,
                t[tt.BLANK_SCREEN] = ni,
                t), r = e.filter((function(e) {
                    return n[e.type]
                }
                )).map((function(e) {
                    return (0,
                    n[e.type])(e)
                }
                ));
                return r
            }(w)
        }
        return m.length ? n({
            from: a,
            uuid: u,
            traceId: i,
            id: "login",
            track_alias: "xlog",
            event: m,
            distinctId: p,
            basic: Ze,
            product_id: d,
            product_name: v,
            channel_env: h
        }, y) : ""
    }
      , ai = !1;
    var ci, si, fi, li = function(e, t, r) {
        var o = Date.now()
          , i = Vn(e);
        return {
            id: "develop_custom",
            page_id: "error",
            page_title: "before report hook error",
            btn_id: ot,
            btn_title: {
                content: n({
                    errorMessage: "hook function beforeReport execute error：" + Yn(t.message),
                    errorStack: Yn(r)
                }, i),
                timestamp: o
            },
            timestamp: o
        }
    }, pi = function(e) {
        return n = (t = e || {}).id,
        r = t.page_id,
        o = t.btn_id,
        "develop_custom" === n && "error" === r && o === nt || function(e) {
            var t = e || {}
              , n = t.id
              , r = t.page_id
              , o = t.btn_id;
            return "develop_custom" === n && "error" === r && Jn([rt, ot, it], o)
        }(e) || function(e) {
            var t = e || {}
              , n = t.id
              , r = t.page_id
              , o = t.btn_id;
            return "develop_custom" === n && "network" === r && Jn([ut, ct, at, st], o)
        }(e) || function(e) {
            var t = e.id
              , n = e.page_id;
            return "develop_custom" === t && n === tt.PERFORMANCE
        }(e) || function(e) {
            var t = e.id
              , n = e.page_id;
            return "develop_custom" === t && n === tt.BLANK_SCREEN
        }(e) || function(e) {
            var t = e.id
              , n = e.page_id;
            return "develop_custom" === t && n === tt.CONSOLE
        }(e) || function(e) {
            var t = e || {}
              , n = t.id
              , r = t.page_id;
            return "develop_custom" === n && "customReport" === r
        }(e);
        var t, n, r, o
    }, di = function(e, t) {
        var r = {
            eventItem: null,
            errorReportItem: null
        }
          , o = pi(e) ? function(e, t) {
            var r = {
                eventItem: null,
                errorReportItem: null
            }
              , o = n({}, e || {})
              , i = (t || {}).beforeReport;
            try {
                var u = o.btn_title
                  , a = i({
                    type: o.btn_id,
                    content: (null == u ? void 0 : u.content) || {}
                });
                if (a) {
                    var c = (a || {}).content
                      , s = void 0 === c ? {} : c;
                    null != o && o.btn_title || (o.btn_title = {}),
                    o.btn_title.content = s,
                    r.eventItem = o
                } else {
                    var f = On(o);
                    f && Fn.remove([f])
                }
            } catch (e) {
                var l = li(t, e, o);
                r.errorReportItem = l,
                r.eventItem = o
            }
            return r
        }(e, t) : function(e, t) {
            var r = {
                eventItem: null,
                errorReportItem: null
            }
              , o = n({}, e)
              , i = (t || {}).beforeReport;
            try {
                var u = i(o);
                if (u)
                    r.eventItem = u;
                else {
                    var a = On(o);
                    a && Fn.remove([a])
                }
            } catch (e) {
                var c = li(t, e, o);
                r.errorReportItem = c,
                r.eventItem = o
            }
            return r
        }(e, t)
          , i = o.eventItem
          , u = o.errorReportItem;
        return r.eventItem = i,
        r.errorReportItem = u,
        r
    }, vi = function(e, t, n) {
        if (null != n && n.event) {
            var r = (e || {}).submitType;
            n.event = function(e, t) {
                var n = t.event
                  , r = (e || {}).beforeReport;
                if (void 0 === r)
                    return n;
                if (!jn(r))
                    return console.error("hook function beforeReport defined error"),
                    n;
                for (var o = (null == n ? void 0 : n.length) || 0, i = [], u = 0; u < o; u++) {
                    var a = di(n[u], e)
                      , c = a.eventItem
                      , s = a.errorReportItem;
                    s && i.push(s),
                    c && i.push(c)
                }
                return i
            }(e, n),
            0 !== n.event.length && (rr(r) ? e.commonLogsHandler && e.commonLogsHandler.call(null, n) : yi(t, n))
        }
    }, hi = function(e, t) {
        var r = null == e ? void 0 : e.submitType;
        if (!ai) {
            var o = Pt(e)
              , i = At(e)
              , u = o && o.product_id && o.product_name && o.channel_env && 3 === Object.keys(o).length;
            if (!(i && u || "myTrack" !== r))
                return ai = !0,
                console.error("myTrackConfig请正确配置product_id，product_name，channel_env（或getEnv方法）");
            var a = function(e, t, n) {
                var r = t.reduce((function(e, t) {
                    var n = t.uuid
                      , r = e.idMap;
                    return r[n] ? r[n].push(t) : (r[n] = [t],
                    e.order.push(n)),
                    e
                }
                ), {
                    order: [],
                    idMap: {}
                });
                return r.order.map((function(e) {
                    return r.idMap[e]
                }
                )).map((function(e) {
                    return ui(e, n)
                }
                )).filter((function(e) {
                    return e
                }
                ))
            }(0, t.filter(er()), o) || []
              , c = function(e, t) {
                var r = e.bufferTimeArray;
                r[0],
                r[1];
                var o = r[2];
                return t.reduce((function(e, t) {
                    for (var r = null == t ? void 0 : t.event; r && r.length > o; ) {
                        var i = r.splice(0, o);
                        e.push(n({}, t, {
                            event: i
                        }))
                    }
                    return null != r && r.length && e.push(n({}, t, {
                        event: r
                    })),
                    e
                }
                ), [])
            }(e, a);
            c.forEach((function(t) {
                vi(e, i, t)
            }
            ))
        }
    }, mi = null, yi = function(e, t, r) {
        var o = (null == t ? void 0 : t.event) || [];
        if (o.length) {
            var i = function(e) {
                return e.map((function(e) {
                    return On(e)
                }
                )).filter((function(e) {
                    return e
                }
                ))
            }(o)
              , u = !1
              , a = n({}, t || {}, {
                event: o.map((function(e) {
                    var t = n({}, e.btn_title || {});
                    return t.useSendBeacon && (u = !0,
                    delete t.useSendBeacon),
                    delete t.storageId,
                    n({}, e, {
                        btn_title: t
                    })
                }
                ))
            })
              , c = JSON.stringify(a);
            if (c.length > 1048576)
                return Fn.remove(i),
                console.error("上传数据过大，请检查埋点数据是否上传了base64或其他导致req过大的数据");
            if (u) {
                var s = new FormData;
                return s.append("events", c),
                void navigator.sendBeacon(e, s)
            }
            mi.next({
                url: e,
                events: c,
                keys: i,
                retry: r,
                data: t
            })
        }
    }, bi = function(e, t) {
        var n = null == e ? void 0 : e.submitType;
        (or(n) || rr(n)) && hi(e, t)
    }, gi = function(e, t) {
        var n = e || {}
          , r = n.id
          , o = n.page_id
          , i = n.page_title
          , u = n.btn_id;
        console.warn("请注意：检测到业务埋点事件id为" + r + "\n    （其中page_id, page_title, btn_id分别为" + o + ", " + i + ", " + u + "）不符合元事件规则，请尽快修改。\n    元事件列表：" + t)
    }, wi = function e(t, n, r) {
        for (var o in void 0 === r && (r = []),
        t)
            if (t.hasOwnProperty(o)) {
                var i = [].concat(r, [o]);
                if (o === n)
                    return {
                        path: i,
                        value: t[o]
                    };
                if (Ln(t[o])) {
                    var u = e(t[o], n, i);
                    if (u.path)
                        return u
                }
            }
        return {}
    }, _i = (ci = {},
    function(e, t) {
        var n = e.type + t
          , r = ci[n];
        if (ci.hasOwnProperty(n))
            return function(e, t) {
                if (!t)
                    return null;
                for (var n = e, r = 0; r < t.length; r++)
                    n = n[t[r]] || {};
                return n
            }(e, r);
        var o = wi(e, t);
        return ci[n] = (null == o ? void 0 : o.path) || null,
        (null == o ? void 0 : o.value) || null
    }
    ), Ei = function(e, t) {
        return ((null == e ? void 0 : e.customConfig) || {})[t]
    }, xi = (si = null,
    fi = !1,
    function(e, t) {
        if (!fi)
            try {
                var n = Ei(t, "constructionIgnore");
                fi = !0,
                si = n ? JSON.parse(n) : {}
            } catch (e) {
                return console.error("server config constructionIgnore parse error", e),
                si = {},
                !0
            }
        return !(si && si.ignoreConfigList || []).filter((function(t) {
            if (t.type.indexOf(e.type) > -1) {
                var n = _i(e, t.property);
                return Qn(n, t.keywords)
            }
            return !1
        }
        )).length
    }
    ), Si = function(e) {
        return {
            type: "serverConfig",
            content: e
        }
    }, Ti = function(t) {
        var r = {}
          , o = Be(t.fetchConfigTimeout || 5e3).pipe(Je(1), Se((function() {
            return Si(r)
        }
        )))
          , i = new z((function(e) {
            t.getProductConfigAsync && t.getProductConfigAsync((function(t) {
                return e.next(Si(t))
            }
            ))
        }
        ))
          , u = new z((function(o) {
            var i = Pt(t)
              , u = i.channel_env
              , a = function(e, t) {
                var r = e.fetchProxyConfig || {};
                return n({}, It, r)[t]
            }(t, u)
              , c = i.product_id
              , s = function(t, n) {
                var o = {};
                try {
                    var i = function(e) {
                        for (var t = e.config || [], n = {}, r = 0; r < t.length; r++) {
                            var o = t[r] || {};
                            for (var i in o)
                                o.hasOwnProperty(i) && (n[i] = o[i])
                        }
                        return n
                    }(o = n ? t : JSON.parse(t))
                      , u = i.ignoreRules;
                    o.customConfig = i,
                    u && "false" !== u && (o = r)
                } catch (t) {
                    console.error("server config parse error", e),
                    o = r
                }
                return o
            };
            return t.localProductConfig ? o.next(Si(s(t.localProductConfig, !0))) : a && c ? void Pn({
                url: a,
                params: {
                    productId: c
                },
                method: "POST",
                callback: function(e) {
                    var t = e && e.msg || ""
                      , n = {};
                    try {
                        n = s(t)
                    } catch (e) {
                        n = r
                    }
                    o.next(Si(n))
                },
                error: function() {
                    o.next(Si(r))
                }
            }) : o.next(Si(r))
        }
        ))
          , a = (t.getProductConfigAsync ? i : u).pipe(function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return e.length ? q((function(t, n) {
                Me(m([t], h(e)))(n)
            }
            )) : H
        }(o));
        return a
    }, Oi = [ht, yt, bt, gt, mt, wt, _t, Et, xt, St], Ii = kn(), Ri = function() {
        var e = kn()
          , t = e
          , n = "XLOG_DEVICE_ID";
        try {
            var r = window.localStorage.getItem(n);
            t = r || (An() || e)
        } catch (e) {}
        return window.localStorage.setItem(n, t),
        t
    }(), Ai = null, ki = null;
    t.isReady = !1;
    var Pi = function(e) {
        var t = e || {}
          , n = t.btn_id
          , r = t.subtype
          , o = t.errorMessage
          , i = t.status
          , u = t.params
          , a = t.response
          , c = t.apiPath
          , s = t.duration
          , f = t.traceId
          , l = t.apiErrorType
          , p = {
            subtype: r,
            url: c,
            api: Zn(c || ""),
            apiErrorType: l || "",
            errorMessage: o,
            status: i,
            traceId: f || "",
            params: u,
            response: a
        };
        void 0 !== s && (p.duration = s);
        var d = {
            id: "develop_custom",
            page_id: "network",
            page_title: "",
            btn_id: n,
            btn_title: p
        };
        if (!Ai)
            return console.error("apiCommonLog：请执行init方法对xlog进行初始化");
        Ai(d)
    };
    function Ci(e, t, r) {
        var o = e || {}
          , i = o.name
          , u = o.message
          , a = o.ext
          , c = o.labels;
        if (i) {
            var s = {};
            u && (s.message = Yn(u)),
            a && (s.ext = Yn(a)),
            null != c && c.length && (s.labels = qn(c));
            var f = {
                id: "develop_custom",
                page_id: "customReport",
                page_title: "",
                btn_id: r,
                btn_title: n({
                    subtype: i
                }, s)
            };
            Ai ? Ai(f) : console.error(t + "：请执行init方法对xlog进行初始化")
        } else
            console.error(t + "：name属性不能为空")
    }
    var Ni = function(e, t, n) {
        var r, o, i = t.channelConfig || {}, u = {
            from: t.from,
            product_id: null == (r = t.myTrackConfig) ? void 0 : r.product_id,
            product_name: null == (o = t.myTrackConfig) ? void 0 : o.product_name
        }, a = (n ? [].concat(e, [u]) : e).map((function(e) {
            var t, n, r = {};
            if (Ln(e) ? r = e : "string" === Cn(e) && (r = i[e] || {}),
            null != (t = r) && t.from && null != (n = r) && n.product_id)
                return r
        }
        )).filter((function(e) {
            return e
        }
        )).reduce((function(e, t) {
            var n = t.from + t.product_id;
            return e[n] || (e[n] = t),
            e
        }
        ), {});
        return Rt(a)
    }
      , Li = function(e) {
        if (!Ai)
            return console.error("logMultiple：请执行init方法对xlog进行初始化");
        var t = e.channels || [];
        t.length ? Ni(t, ki, e.withBaseReport).forEach((function(t) {
            Ai(n({}, e, {
                __channel: t
            }))
        }
        )) : Ai(e)
    };
    t.API_ERROR_TYPE = Ct,
    t.apiErrorLog = function(e) {
        var t = e || {}
          , n = t.errorMessage
          , r = void 0 === n ? "" : n
          , o = t.status
          , i = void 0 === o ? "" : o
          , u = t.params
          , a = void 0 === u ? "" : u
          , c = t.response
          , s = void 0 === c ? "" : c
          , f = t.apiPath
          , l = t.duration
          , p = t.traceId
          , d = t.apiErrorType;
        Pi({
            btn_id: at,
            subtype: at,
            status: i,
            params: Yn(a),
            duration: l,
            apiPath: f || "",
            apiErrorType: d || "",
            errorMessage: Yn(r) || "fetchError",
            response: Yn(s) || "",
            traceId: p
        })
    }
    ,
    t.apiSuccessLog = function(e) {
        var t = e || {}
          , n = t.apiPath
          , r = t.params
          , o = void 0 === r ? "" : r
          , i = t.duration
          , u = t.traceId;
        Pi({
            btn_id: st,
            subtype: st,
            status: "200",
            params: Yn(o),
            duration: i,
            apiPath: n || "",
            errorMessage: "",
            response: "",
            traceId: u
        })
    }
    ,
    t.componentErrorLog = function(e) {
        var t = e || {}
          , n = t.errorMessage
          , r = t.errorStack
          , o = {
            id: "develop_custom",
            page_id: "error",
            page_title: "",
            btn_id: it,
            btn_title: {
                errorMessage: Yn(n) || "componentError",
                errorStack: Yn(r) || ""
            }
        };
        if (!Ai)
            return console.error("componentErrorLog：请执行init方法对xlog进行初始化");
        Ai(o)
    }
    ,
    t.init = function(e) {
        if (Ai)
            return Ai;
        var r = ((ki = Mn({}, {
            types: [],
            uuid: Ii,
            shouldWindowErrorRepeatReport: !1,
            bufferTimeArray: [5e3, null, 10],
            reportRandom: 1,
            maxBufferSize: 100,
            maxParallelReport: 2,
            submitType: "myTrack"
        }, e)) || {}).submitType
          , o = or(r)
          , i = rr(r);
        if (!ki.from)
            return console.error("xlog from字段必填，命名示例@bpc/h5kh");
        t.isReady = !0,
        No(!0),
        ki.uuid = ki.uuid || Ii,
        ki.ignoreJsErrorList = ki.ignoreJsErrorList ? (ki.ignoreJsErrorList || []).reduce((function(e, t) {
            return e.push(t),
            e.push('"' + t + '"'),
            e
        }
        ), []) : [];
        var u = Kn(ki).pagePath;
        ki.initialPagePath = u,
        function(e) {
            new z((function(e) {
                mi = e
            }
            )).pipe(Ie((function(e) {
                var t = e.url
                  , n = e.events
                  , r = e.keys
                  , o = e.retry
                  , i = e.data;
                return new z((function(e) {
                    Pn({
                        url: t,
                        method: "POST",
                        params: {
                            events: n
                        },
                        callback: function(n) {
                            200 === (n || {}).httpStatus ? Fn.remove(r) : o || setTimeout((function() {
                                yi(t, i, !0)
                            }
                            ), 5e3),
                            e.complete()
                        },
                        error: function() {
                            e.complete()
                        }
                    })
                }
                ))
            }
            ), e.maxParallelReport)).subscribe((function() {}
            ))
        }(ki);
        var a = null
          , c = new z((function(e) {
            a = e
        }
        ))
          , s = function(e) {
            var t = Vn(ki);
            return xe(b({
                type: tt.OBSERVABLE_ERROR,
                content: n({
                    errorMessage: Yn(e.message),
                    errorStack: Yn(e.stack)
                }, t)
            }))
        }
          , f = {
            userEvent: function() {
                return go
            },
            performance: function() {
                return function(e) {
                    return Ee([Ne(window, "load").pipe(Se((function() {
                        var t = window.performance && window.performance.timing;
                        if (!t)
                            return re;
                        var r = Vn(e)
                          , o = e.initialPagePath;
                        return r.pagePath !== o ? re : {
                            type: tt.PERFORMANCE,
                            subtype: "timing",
                            content: n({
                                perfTiming: t
                            }, r)
                        }
                    }
                    ))), gr(e), fo(e), lo(e), po(e)]).pipe(Re())
                }(ki)
            },
            sourceError: function() {
                return function(e) {
                    return Ne(window, "error", !0).pipe(Se((function(t) {
                        if (t instanceof window.ErrorEvent)
                            return re;
                        var r = Vn(e)
                          , o = t.target
                          , i = o.tagName;
                        if (Bt.indexOf(i) > -1 && !o.getAttribute("src"))
                            return re;
                        var u = "";
                        try {
                            u = Yn(yo.exports.Base64.toBase64(o.outerHTML))
                        } catch (t) {}
                        return {
                            type: tt.SOURCE_ERROR,
                            content: n({
                                tagName: i,
                                sourcePath: o.src || o.href,
                                message: u
                            }, r)
                        }
                    }
                    )))
                }(ki)
            },
            routeChange: function() {
                return zo(ki)
            },
            unhandledrejection: function() {
                return function(e) {
                    return Ne(window, "unhandledrejection").pipe(Se((function(t) {
                        if (!t.reason)
                            return re;
                        var r = Vn(e)
                          , o = t.reason || {}
                          , i = o.message || o || ""
                          , u = o.stack || ""
                          , a = Yn(i);
                        return tr(e, a) ? re : {
                            type: tt.UNHANDLED_REJECTION,
                            content: n({
                                errorMessage: a,
                                errorStack: Yn(u)
                            }, r)
                        }
                    }
                    )))
                }(ki)
            },
            xhr: function() {
                return Eo(ki)
            },
            fetch: function() {
                return function(e) {
                    return new z((function(t) {
                        Oo = e,
                        To = t
                    }
                    ))
                }(ki)
            },
            consoleMethods: function() {
                return mo(ki)
            },
            baseInfo: function() {
                return function(e) {
                    return new z((function(t) {
                        t.next({
                            type: tt.BASE_INFO,
                            content: n({}, e, Ze)
                        })
                    }
                    ))
                }(ki)
            },
            windowError: function() {
                return vo(ki)
            },
            myTrack: function() {
                return function(e) {
                    return "myTrack" === e.submitType ? new z((function(e) {
                        window.onHTSCEvent = function(t, n, r, o, i) {
                            if (i && "object" !== Cn(i))
                                return console.error("数据" + t + "中btn_title类型错误，必须是json对象");
                            e.next({
                                type: tt.BUSINESS_POINT,
                                content: {
                                    id: t,
                                    page_id: n,
                                    page_title: r,
                                    btn_id: o,
                                    btn_title: i || {}
                                }
                            })
                        }
                    }
                    )) : re
                }(ki)
            },
            customReport: function() {
                return function(e) {
                    var t = e.customReport;
                    if (!t)
                        return re;
                    var n = Nn(t) ? t : [t]
                      , r = [];
                    return n.forEach((function(e) {
                        var t = new z((function(t) {
                            e((function(e) {
                                t.next({
                                    type: "customReport",
                                    content: e
                                })
                            }
                            ))
                        }
                        ));
                        r.push(t)
                    }
                    )),
                    r.length ? Ee(r).pipe(Re()) : re
                }(ki)
            },
            directObservable: function() {
                return c
            },
            blankScreen: function() {
                return Uo(ki)
            }
        }
          , l = ki.types.filter((function(e) {
            return Oi.indexOf(e) > -1
        }
        ))
          , p = function(e) {
            l.indexOf(e) > -1 || l.push(e)
        };
        p(tt.BASE_INFO),
        p(tt.BLANK_SCREEN),
        p(tt.PERFORMANCE),
        o && p("myTrack"),
        p("routeChange"),
        p("customReport"),
        p("directObservable");
        var d = ki.bufferTimeArray
          , v = ki.uuid + "_" + Date.now()
          , h = ki.maxBufferSize;
        Be(1e4).subscribe((function() {
            h = ki.maxBufferSize
        }
        ));
        var m = Date.now() + "_"
          , y = 0
          , b = function(e) {
            return e.storageId ? e : n({}, e, {
                traceId: v,
                distinctId: Ri,
                uuid: ki.uuid || Ii,
                from: ki.from,
                timestamp: Date.now(),
                storageId: m + y++
            })
        }
          , g = function(e) {
            return [tt.BUSINESS_POINT, tt.BATCH].indexOf(e) > -1
        };
        !function(e) {
            Fn.init();
            var t = Fn.get() || {}
              , n = Fn.getLockedIds()
              , r = Object.keys(t).filter((function(e) {
                return !n[e]
            }
            )).map((function(e) {
                return t[e]
            }
            )).filter((function(t) {
                return (null == t ? void 0 : t.from) === e.from
            }
            ));
            Ee(r).pipe(Fe(10, 10), qe()).subscribe((function(t) {
                t.forEach((function(t) {
                    t && hi(e, t)
                }
                ))
            }
            ))
        }(ki);
        var w = {}
          , _ = Ti(ki).pipe(Je(1), Ke((function(e) {
            w = e.content
        }
        )), Se((function(e) {
            return {}
        }
        )))
          , E = new $;
        Ee(l.map((function(e) {
            return f[e].call()
        }
        )).map((function(e) {
            return e.pipe(Ue((function(e) {
                return s(e)
            }
            )))
        }
        ))).pipe(Re()).subscribe(E);
        var x, S, T = _.pipe((x = function() {
            return E
        }
        ,
        q((function(e, t) {
            var n = null
              , r = 0
              , o = !1
              , i = function() {
                return o && !n && t.complete()
            };
            e.subscribe(new G(t,(function(e) {
                null == n || n.unsubscribe();
                var o = 0
                  , u = r++;
                he(x(e, u)).subscribe(n = new G(t,(function(n) {
                    return t.next(S ? S(e, n, u, o++) : n)
                }
                ),(function() {
                    n = null,
                    i()
                }
                )))
            }
            ),(function() {
                o = !0,
                i()
            }
            )))
        }
        )))), O = T.pipe(De((function(e) {
            return e && e.type
        }
        )), De(er()), De((function(e) {
            return xi(e, w)
        }
        )), Se(b), Ke((function(e) {
            if (g(e.type)) {
                var t = function(e, t) {
                    var n = t.metaEvent || []
                      , r = function(e) {
                        return !n.length || n.indexOf(e) > -1
                    };
                    if (e.type === tt.BUSINESS_POINT) {
                        var o = e.content || {}
                          , i = o.id;
                        r(i) || gi(o, n)
                    } else
                        e.type === tt.BATCH && (e.event || []).filter((function(e) {
                            return r(e.id) || gi(e, n),
                            !0
                        }
                        ));
                    return e
                }(e, w);
                t && hi(ki, [t])
            } else
                !function(e) {
                    if (o) {
                        var t = (e || {}).storageId;
                        Fn.lockStorageIds([t]),
                        Fn.set(t, e)
                    }
                }(e)
        }
        )), De((function(e) {
            return !g(e.type)
        }
        )), De((function(e) {
            return function(e, t) {
                if (e.type === tt.BASE_INFO)
                    return !0;
                var n = Ei(t, "developCustomDropWeight");
                return !n || Math.random() >= n
            }(e, w)
        }
        )), Ke((function(e) {
            ir(e) && hi(ki, [e])
        }
        )), De((function(e) {
            return !ir(e)
        }
        )), Ue((function(e) {
            return s(e)
        }
        )), He.apply(void 0, d), De((function(e) {
            return e.length > 0
        }
        )), function(e, t) {
            void 0 === t && (t = te);
            var n = je(e, t);
            return Ve((function() {
                return n
            }
            ))
        }(10)).subscribe((function(e) {
            var t = e || [];
            if ((h -= t.length) <= 0) {
                O.unsubscribe();
                var r = Vn(ki)
                  , o = b({
                    type: tt.OBSERVABLE_ERROR,
                    content: n({
                        errorMessage: "report times more than maxBufferSize(" + ki.maxBufferSize + ") in 10s",
                        errorStack: "xlog init from is " + (ki.from || "")
                    }, r)
                });
                t.push(o)
            }
            ki.submitHandler && ki.submitHandler.call(null, t),
            function(e, t) {
                if (Math.random() < e.reportRandom)
                    bi(e, t);
                else {
                    var n = t.filter((function(e) {
                        return "baseInfo" === e.type
                    }
                    ));
                    n.length && bi(e, n)
                }
            }(ki, t)
        }
        )), I = function(e) {
            var t;
            if (o || i) {
                var r = e || {}
                  , u = r.id
                  , c = r.page_id
                  , s = r.page_title
                  , f = r.btn_id
                  , l = r.btn_title
                  , p = r.type
                  , d = r.__channel;
                if (p === tt.BATCH)
                    return a.next(e);
                var v = "develop_custom" === u
                  , h = l || {};
                if ("object" !== Cn(h))
                    return console.error("数据" + u + "中btn_title类型错误，必须是json对象");
                var m = h;
                if (v && (m = {
                    content: h,
                    timestamp: Date.now()
                },
                h.subtype && (m.subtype = l.subtype,
                delete h.subtype)),
                m = function(e, t, r) {
                    var o = e || {}
                      , i = o.btn_id
                      , u = o.page_id
                      , a = Vn(r)
                      , c = [at, st, it]
                      , s = ["blankScreen", "customReport"];
                    return null != t && t.content && (Jn(c, i) || Jn(s, u)) && (t.content = n({}, t.content, a)),
                    t
                }(e, m, ki),
                !u || !c)
                    return console.error("错误的myTrack上报入参, id 或 page_id不存在");
                t = {
                    type: v ? "myTrack" : tt.BUSINESS_POINT,
                    content: {
                        id: u,
                        page_id: c,
                        page_title: s || "",
                        btn_id: f || "",
                        btn_title: m,
                        __channel: d
                    }
                }
            } else
                t = {
                    type: "customReport",
                    content: e
                };
            a.next(t)
        };
        return Ai = function(e) {
            if (o || i) {
                var t = e || {}
                  , n = t.btn_id
                  , r = t.btn_title;
                n === it && Co && function(e, t, n) {
                    var r = e.blankScreenPollingNum || 3
                      , o = 0
                      , i = 0
                      , u = {}
                      , a = setInterval((function() {
                        var c = t(e)
                          , s = c.isBlankScreen
                          , f = c.blankScreenType;
                        s ? (i++,
                        u.blankScreenType || (u.blankScreenType = f)) : clearInterval(a),
                        ++o === r && (i === r && n(u),
                        clearInterval(a))
                    }
                    ), 1e3)
                }(ki, Fo, (function(e) {
                    var t = (e || {}).blankScreenType;
                    No(!1);
                    var n = {
                        id: "develop_custom",
                        page_id: tt.BLANK_SCREEN,
                        page_title: "",
                        btn_id: vt,
                        btn_title: {
                            blankScreenType: t,
                            message: (null == r ? void 0 : r.errorMessage) || "",
                            capture: Po(ki)
                        }
                    };
                    I(n)
                }
                ))
            }
            I(e)
        }
        ,
        ki.foo = Ai,
        Ai.setUUID = function(e) {
            Ai({
                id: "develop_custom",
                page_id: "login",
                page_title: "",
                btn_id: "set_uuid_login",
                btn_title: {
                    currentId: e,
                    lastId: ki.uuid
                }
            }),
            ki.uuid = e
        }
        ,
        Ai
    }
    ,
    t.log = function(e) {
        return Ai ? e.channels ? Li(e) : void Ai(e) : console.error("log：请执行init方法对xlog进行初始化")
    }
    ,
    t.logBatch = function(e) {
        if (!Ai)
            return console.error("logBatch：请执行init方法对xlog进行初始化");
        Ai({
            type: tt.BATCH,
            event: e
        })
    }
    ,
    t.logMultiple = Li,
    t.logPV = function(e) {
        if (!Ai)
            return console.error("logPV：请执行init方法对xlog进行初始化");
        Ai(n({
            id: "page"
        }, e))
    }
    ,
    t.logable = function(e) {
        return Ai ? function(t, r, o) {
            var i = o.value;
            return n({}, o, {
                value: function() {
                    Ai(e);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return i.apply(this, n)
                }
            })
        }
        : console.error("logable：请执行init方法对xlog进行初始化")
    }
    ,
    t.reportError = function(e) {
        Ci(e, "reportError", Xe)
    }
    ,
    t.reportEvent = function(e) {
        Ci(e, "reportEvent", $e)
    }
    ,
    t.reportSpeed = function(e) {
        var t = e || {}
          , r = t.name
          , o = t.duration
          , i = t.ext
          , u = t.labels;
        if (r)
            if ("number" === Cn(o)) {
                var a = {
                    duration: o
                };
                i && (a.ext = Yn(i)),
                null != u && u.length && (a.labels = qn(u));
                var c = {
                    id: "develop_custom",
                    page_id: "customReport",
                    page_title: "",
                    btn_id: Ye,
                    btn_title: n({
                        subtype: r
                    }, a)
                };
                Ai ? Ai(c) : console.error("reportSpeed：请执行init方法对xlog进行初始化")
            } else
                console.error("reportSpeed：duration属性必须是number类型");
        else
            console.error("reportSpeed：name属性不能为空")
    }
    ,
    t.setUUID = function(e) {
        if (!Ai)
            return console.error("setUUID：请执行init方法对xlog进行初始化");
        Ai.setUUID(e)
    }
    ,
    t.uuidv4 = En,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}
));
//# sourceMappingURL=index.js.map
