import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import messages from './index'
Vue.use(VueI18n)

function lang() {
    // 将选择的语言存在localStorage中
    let t = window.localStorage.getItem('language')
    if (t) return t
        // 默认中文
    else return 'cn'
}
const language = lang()
window.lang = lang()
window.messages = messages;

const i18n = new VueI18n({
    locale: language,
    messages: messages
})

locale.i18n((key, value) => i18n.t(key, value))
export default i18n