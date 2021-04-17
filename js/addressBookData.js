class AddressBookData {
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegx = RegExp("^[A-Z]{1}[a-zA-Z ]{2,}$");
    if (nameRegx.test(name)) this._name = name;
    else throw "Invalid name";
  }
  get address() {
    return this._address;
  }
  set address(address) {
    let nameRegx = RegExp("^[a-zA-Z ]{3,}$");
    if (nameRegx.test(address)) this._address = address;
    else throw "Invalid address";
  }

  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let nameRegx = RegExp("^[0-9]{2}[: :]([0-9]){10}$");
    if (nameRegx.test(phoneNumber)) this._phoneNumber = phoneNumber;
    else throw "Invalid phone Number";
  }
  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }
  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }
  get zip() {
    return this._zip;
  }
  set zip(zip) {
    this._zip = zip;
  }

  toString() {
      return ("id="+this.id+" Name="+this.name+" Address="+this.address+" PhoneNumber"+this.phoneNumber+" city="+this.city
      +" State="+this.state+" Zip="+this.zip);
  }
}

