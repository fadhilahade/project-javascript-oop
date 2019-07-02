class Grocery {
    constructor(idproduct, name, price, quantityAvailable, available) {
        this.idproduct = idproduct
        this.name = name
        this.price = price
        this.quantityAvailable = quantityAvailable
        this.available = available
    }

    shopping() {
        console.log(`the ${this.name} with the price ${this.price} is available ${this.quantityAvailable} at the store`)
    }

    getProduct() {
        return this.name
    }


}

const newProduct = new Grocery('21569', 'Pocari Sweat', '20000', '25', 'true')

console.log(newProduct)
newProduct.shopping()
console.log(newProduct.getProduct())

class GroceryShopping extends Grocery {
    constructor(idproduct, name, price, quantityAvailable, total, available) {
        super(idproduct, name, price, quantityAvailable, available)
        this.total = total
    }

    getPrice(tryMe) {
        const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0
        }).format(tryMe)

        return formattedPrice
    }

    totalPrice() {
        const totalPrice = this.price * this.total;
        return this.getPrice(totalPrice)
    }

    quantityUpdate() {
        const update = this.quantityAvailable - this.total
        return update
    }

    receipt() {
        console.log(`you bought ${this.total} ${this.name}(s) at our store. The price total is ${this.totalPrice()}\nif you want to buy again, we still have ${this.quantityUpdate()} left in our store\nThank You`)
    }
}

const veryNewProduct = new GroceryShopping(21569, 'Pocari Sweat', 20000, 25, 2, 'true')

console.log(veryNewProduct.totalPrice())
console.log(veryNewProduct.quantityUpdate())

veryNewProduct.receipt()