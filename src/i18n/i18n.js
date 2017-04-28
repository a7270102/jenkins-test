import Vue from 'vue'
import VueI18n from 'vue-i18n'
import CustomFormatter from './customFormatter'
// 自定义格式化方法
// import Formatter from './formatter'

Vue.use(VueI18n)

const locale = 'en-US' // default locale
const formatter = new CustomFormatter({ locale })

export default new VueI18n({
  locale,
  // formatter,
  messages: {
    en: {
      hello: 'hello world',
      helloHtml: 'hello <a target="_blank" href="">World</a>',
      helloPlace: 'hello {place}',
      helloList: 'hello {0}',
      helloPercent: 'hello %{place}',
      plural: 'hello world |Hello Worlds'
	},
	ja: {
	    hello: 'こんにちは、世界',
	    helloHtml: 'こんにちは、 <a target="_blank" href="">世界</a>',
	    helloPlace: 'こんにちは、 {place}',
	    helloList: 'こんにちは、 {0}',
	    helloPercent: 'こんにちは、 %{place}',
	    plural: 'こんにちは、世界 | こんにちは、大世界'
	}
  }
})