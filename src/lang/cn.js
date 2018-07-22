import cnLocale from 'element-ui/lib/locale/lang/zh-CN'

import axios from 'axios'

window.messages = {}
axios.get("/api/user/i18n?lng=cn").then(d => d.data).then(datas => {
    var data = datas
    for (var k in data) {
        var v = data[k];
        window.messages.cn[k] = v
    }
});
export default {
    ...cnLocale,
    ok: "确定",
    cancel: "取消",
    about: "关于",
    home: "首页",
    "about.title": "这是一个关于页面",
    'date.placeholder': '请选择日期'
}