const Base = require('./base/base.js')

class CarCategory extends Base {
    constructor({ id, name, carIds, price}){
        super({ id,name })

        this.cardIds = carIds
        this.price = price

    }
}

module.exports = carCategory