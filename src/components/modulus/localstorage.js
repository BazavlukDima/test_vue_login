module.exports = {
  ls: window.localStorage,

  get: (key) => {
    var currentItem = this.ls.getItem(key)

    if (currentItem) {
      return currentItem
    }

    return null
  },

  set: (key, data) => {
    this.ls.setItem(key, data)
  },

  remove: (key) => {
    return this.ls.removeItem(key)
  }
}
