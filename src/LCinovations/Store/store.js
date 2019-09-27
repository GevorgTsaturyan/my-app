const store = {
    users: [
        { id: 1, firstName: 'Gevorg', lastName: 'Tsaturyan', country: 'Armenia', city: 'Yerevan', address: 'st. Orbeli 1/1', address2: 'st. G. Lusavorich 1/1', selectLegal: 'Individual', package: 'premium' },
        { id: 2, firstName: 'Poghos', lastName: 'Poghosyan', country: 'Armenia', city: 'Vanadzor', address: 'st. Tigran Mets 1/1', address2: 'st. K. Demirchyan 1/1', selectLegal: 'Individual', package: 'premium' },
    ],
    allUsers: function () {
        return this.users;
    },
    currentUser: function (id) {
        return this.users.filter((user) => user.id == id)
    },
    deleteUser: function (id) {
        this.users.map((user, index) => { if (user.id == id) { this.users.splice(index, 1) } });

    },
    addRegisteredUserToStore: function (currentUser) {
        if (this.users.length > 0) {
            const num = this.users.length - 1;
            currentUser.id = this.users[num].id + 1;
            this.users.push(currentUser)
        } else {
            currentUser.id = 1;
            this.users.push(currentUser)
        }
    }

}
export default store;
