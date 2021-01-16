class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
    }
    message() {
        return `Hello this is ${this.firstName} ${this.lastName}`
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, email) {
        super(firstName, lastName)
        this.phone = phone
        this.email = email
    }
    static boughtItemsFee(item) {
        return item * 100
    }
}

const alan = new Customer('Alan', 'Smith', '123456', 'email@email.com')
console.log(alan)
console.log(alan.message())
console.log(Customer.boughtItemsFee(3))