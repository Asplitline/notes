function ajax(options) {

    var defaults = {
        type: 'get',
        url: '',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function () { },
        error: function () { }
    }

    // 使用options对象覆盖defaults对象
    Object.assign(defaults, options);

    var xhr = new XMLHttpRequest();
    // 拼接请求参数
    var params = "";
    for (var attr in defaults.data) {
        params += `${attr}=${defaults.data[attr]}&`;
    }
    params = params.substr(0, params.length - 1);

    // xhr.setRequestHeader('Content-Type', 'application/json');
    if (defaults.type == 'get') {
        defaults.url += '?' + params;
    }

    // console.log(defaults.type, defaults.url);
    xhr.open(defaults.type, defaults.url);

    if (defaults.type == 'post') {
        var contentType = defaults.header['Content-Type'];
        xhr.setRequestHeader('Content-Type', contentType);
        if (contentType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data));
        } else {
            xhr.send(params);
        }
    } else {
        xhr.send();
    }
    xhr.onload = function () {
        var contentType = xhr.getResponseHeader('Content-Type');
        var responseText = xhr.responseText;
        if (contentType.includes('application/json')) {
            responseText = JSON.parse(responseText);
        }
        if (xhr.status == 200) {
            defaults.success(responseText, xhr);
        } else {
            defaults.error(responseText, xhr)
        }
    }

}
