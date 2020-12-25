function jsonp(options) {
    var script = document.createElement('script');
    var fName = 'Jsonp' + Math.random().toString().replace('.', '');
    // success不是全局函数，并且是匿名函数
    window[fName] = options.success;
    var params = '';
    for (attr in options.data) {
        params += '&' + attr + '=' + options.data[attr];
    }
    script.src = options.url + '?callback=' + fName + params;
    document.body.appendChild(script);
    script.onload = function () {
        document.body.removeChild(script);
    }
}
