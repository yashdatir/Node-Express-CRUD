class Entity {
  constructor(firstname, lastname, email, phone, city, state) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.city = city;
    this.state = state;
  }
}

module.exports = {
  Entity,
};
