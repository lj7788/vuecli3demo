import enLocale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'
window.messages = {}
axios.get("/api/user/i18n?lng=en").then(datas => {
    var data = datas.data
    for (var k in data) {
        var v = data[k];
        window.messages.en[k] = v
    }
});
export default {
    ...enLocale,
    ok: "Ok",
    cancel: "Cancel",
    about: "About",
    home: "Home",
    "about.title": "This is an about page",
    'date.placeholder': 'Select Date'
}