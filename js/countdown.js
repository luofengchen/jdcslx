define("//static.360buyimg.com/mtd/pc/components/1.0.0/util/util.js", [], function() {
    "use strict";
    return {
        throttle: function(e, t, n) {
            var a, u, i, r = null , l = 0;
            n || (n = {});
            var c = function() {
                l = n.leading === !1 ? 0 : (new Date).getTime(),
                r = null ,
                i = e.apply(a, u),
                r || (a = u = null )
            }
            ;
            return function() {
                var s = (new Date).getTime();
                l || n.leading !== !1 || (l = s);
                var o = t - (s - l);
                return a = this,
                u = arguments,
                o <= 0 || o > t ? (clearTimeout(r),
                r = null ,
                l = s,
                i = e.apply(a, u),
                r || (a = u = null )) : r || n.trailing === !1 || (r = setTimeout(c, o)),
                i
            }
        },
        debounce: function(e, t, n) {
            var a, u, i, r, l, c = function() {
                var s = (new Date).getTime() - r;
                s < t && s > 0 ? a = setTimeout(c, t - s) : (a = null ,
                n || (l = e.apply(i, u),
                a || (i = u = null )))
            }
            ;
            return function() {
                i = this,
                u = arguments,
                r = (new Date).getTime();
                var s = n && !a;
                return a || (a = setTimeout(c, t)),
                s && (l = e.apply(i, u),
                i = u = null ),
                l
            }
        },
        indexOf: function(e, t) {
            var n = e.length
              , a = Number(arguments[2]) || 0;
            for (a < 0 && (a += n); a < n; ) {
                if (a in e && e[a] === t)
                    return a;
                a++
            }
            return -1
        },
        getCalendar: function(e, t) {
            if (!(!e instanceof Date)) {
                var n = e.getMonth() + 1
                  , a = e.getFullYear()
                  , u = e.getDate() + (t || 0);
                switch (0 === u && (n -= 1,
                0 === n && (n = 12,
                a -= 1)),
                n) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    u = 0 === u ? 31 : u,
                    u > 31 && (n += 1,
                    u = 1);
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    u = 0 === u ? 30 : u,
                    u > 30 && (n += 1,
                    u = 1);
                    break;
                case 2:
                    a % 4 == 0 ? (u = 0 === u ? 29 : u,
                    u > 29 && (n += 1,
                    u = 1)) : (u = 0 === u ? 28 : u,
                    u > 28 && (n += 1,
                    u = 1))
                }
                return n > 12 && (n = 1,
                a += 1),
                a + "/" + n + "/" + u
            }
        }
    }
});
define("//static.360buyimg.com/mtd/pc/components/1.0.0/countdown/countdown.js", [], function(t) {
    "use strict";
    var e = _.Class.extend({
        construct: function(t) {
            $.extend(this, {
                startTime: new Date,
                endTime: new Date,
                state: 1,
                interval: 1e3,
                stateCallback: null ,
                autoStart: !0,
                stateMap: {
                    0: {
                        name: "已结束"
                    },
                    1: {
                        name: "未开始"
                    },
                    2: {
                        name: "进行中"
                    }
                },
                timer: null 
            }, t || {}),
            this.autoStart && this.init()
        },
        init: function() {
            this.start()
        },
        start: function() {
            this.update(+new Date - this.interval)
        },
        pause: function() {
            this.timer && clearTimeout(this.timer)
        },
        update: function(t) {
            var e = +new Date
              , a = e - t
              , i = []
              , n = this
              , s = this.startTime
              , r = this.endTime
              , o = this.interval
              , h = Math.min(o, o + (o - a));
            "[object Array]" !== Object.prototype.toString.call(s) && (s = [s],
            r = [r]);
            for (var l = 0, c = s.length; l < c; l++) {
                var u, m = new Date(s[l]).getTime(), d = new Date(r[l]).getTime();
                m > e && (u = 1),
                d < e && (u = 0),
                e > m && e < d && (u = 2);
                var p = 2 == u ? d - e : m - e
                  , f = this.pad(Math.floor(p / 36e5 % 24), 2)
                  , M = this.pad(Math.floor(p / 1e3 / 60 % 60), 2)
                  , T = this.pad(Math.floor(p / 1e3 % 60), 2)
                  , v = this.pad(Math.floor(p / 100 % 10), 1)
                  , w = this.pad(Math.floor(p / 864e5), 2)
                  , b = {
                    hour: f,
                    minute: M,
                    second: T,
                    millisecond: v,
                    day: w,
                    state: u,
                    current: n.stateMap[u]
                };
                i.push(b)
            }
            this.stateCallback && this.stateCallback.call(this, 1 === i.length ? i[0] : i),
            clearTimeout(this.timer),
            this.timer = setTimeout($.proxy(this.update, this, e), Math.max(0, h))
        },
        pad: function(t, e) {
            return (Array(e).join(0) + t).slice(-e)
        }
    });
    return e
});
