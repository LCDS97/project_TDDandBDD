const { faker } = require('@faker-js/faker')

const Car = require('./../src/entities/car')
const carCategory = require('./../src/entities/carCategory')
const Customer = require('./../src/entities/customer')

const { join } = require('path')

const seederBaseFolder = join(__dirname, "../", "database")
const ITEMS_AMOUNT = 2

const carCategory = new CarCategory({
    id: faker.datatype.uuid(),
    name: faker.vehicle.type(),
    carIds: [],
    price: faker.finance.amount(20, 100)
})


console.log({
    id: faker.datatype.uuid(),
    name: faker.name.firstName()
})