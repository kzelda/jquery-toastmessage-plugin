var msg = function (m, t, s, p) {
    if (t === undefined) t = 'notice';
    if (s === undefined) s = true;
    if (p === undefined) p = 'top-right';
    $().toastmessage('showToast', {
        text: m,
        sticky: s,
        position: p,
        type: t
    });
};

var msgErr = function (m, s, p) {
    msg(m, 'error', s, p);
};

var msgSuc = function (m, s, p) {
    msg(m, 'success', s, p);
};

var msgWarn = function (m, s, p) {
    msg(m, 'warning', s, p);
};