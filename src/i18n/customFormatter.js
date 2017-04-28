import Formatter from 'vue-i18n'

export default class CustomFormatter {
  constructor (options = {}) {
    this._locale = options.locale || 'en-US'
    this._formatter = new Formatter(this._locale)
    this._caches = Object.create(null)
  }

  format (message, ...args) {
    let fn = this._caches[message]
    if (!fn) {
      fn = this._formatter.compile(message, this._locale)
      this._caches[message] = fn
    }
    return fn(...args)
  }
}