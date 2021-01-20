const person = { name: 'Alan' }
try {
    if (!person.email) {
        throw new TypeError('email not exist')
    }


} catch (error) {
    console.log(error.message)
} finally {
    // console.log('close file')
    if (person.name) {
        throw new TypeError('name exist')
    }
}

console.log('continue')