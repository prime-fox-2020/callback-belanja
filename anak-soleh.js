class AnakSoleh {
  constructor(name, beli) {
    this._name = name
    this._beli = beli
  }

  tolongMama(uang, daftar, cb) {
    if (!daftar.length) return console.log('Uang kembalian = ' + uang)
    cb(uang, daftar[0], sisauang => {
      daftar.shift()
      this.tolongMama(sisauang, daftar, cb)
    })
  }
}

module.exports = AnakSoleh