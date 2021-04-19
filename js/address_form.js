let isUpdate = false;
let addressBookObj = {};

window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#fullname");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new AddressBookData().name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });
  checkForUpdate();
});

const address = document.querySelector("#address");
const addressError = document.querySelector(".address-error");
address.addEventListener("input", function () {
  if (address.value.length == 0) {
    addressError.textContent = "";
    return;
  }
  try {
    new AddressBookData().address = address.value;
    addressError.textContent = "";
  } catch (e) {
    addressError.textContent = e;
  }
});

const phone = document.querySelector("#phoneNumber");
const phoneError = document.querySelector(".phone-error");
phone.addEventListener("input", function () {
  if (phone.value.length == 0) {
    phoneError.textContent = "";
    return;
  }
  try {
    new AddressBookData().phoneNumber = phone.value;
    phoneError.textContent = "";
  } catch (e) {
    phoneError.textContent = e;
  }
});

const save = (event) => {
  event.preventDefault();
  event.stopPropagation();
  try {
    setAddressBookObject();
    createAndUpdateStorage();
    resetForm();
    window.location.replace("../pages/addressBookForm.html");
  } catch (e) {
    return;
  }
};

const setAddressBookObject = () => {
  addressBookObj._name = getInputValueById("#fullname");
  addressBookObj._address = getInputValueById("#address");
  addressBookObj._city = getInputValueById("#city");
  addressBookObj._state = getInputValueById("#state");
  addressBookObj._zip = getInputValueById("#zip");
  addressBookObj._phoneNumber = getInputValueById("#phoneNumber");
};

const createAndUpdateStorage = () => {
  let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
  if (addressBookList) {
    let addressBookData = addressBookList.find(
      (contactData) => contactData._id == addressBookObj._id
    );
    if (!addressBookData) {
      addressBookList.push(createAddressBookData());
    } else {
      const index = addressBookList
        .map((contactData) => contactData._id)
        .indexOf(addressBookData._id);
      addressBookList.splice(
        index,
        1,
        createAddressBookData(addressBookData._id)
      );
    }
  } else {
    addressBookList = [createAddressBookData()];
  }
  localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
};

const createAddressBookData = (id) => {
  let addressBookData = new AddressBookData();
  if (!id) addressBookData.id = localStorage.getItem("AddressBookList").length;
  else addressBookData.id = id;
  setAddressBookData(addressBookData);
  return addressBookData;
};

const createAddressBook = () => {
  let addressBookData = new AddressBookData();
  let id;
  if (localStorage.getItem("counter") != null) {
    id = localStorage.getItem("counter");
    id++;
    localStorage.setItem("counter", id);
  } else {
    id = 1;
    localStorage.setItem("counter", id);
  }
  try {
    addressBookData.name = getInputValueById("#fullname");
  } catch (e) {
    setTextValue(".text-error", e);
    throw e;
  }
  addressBookData.id = id;
  addressBookData.address = getInputValueById("#address");
  addressBookData.city = getInputValueById("#city");
  addressBookData.state = getInputValueById("#state");
  addressBookData.zip = getInputValueById("#zip");
  addressBookData.phoneNumber = getInputValueById("#phoneNumber");
  alert(addressBookData.toString());
  return addressBookData;
};

const resetForm = () => {
  setValue("#name", "");
  setValue("#address", "");
  setValue("#city", "");
  setValue("#state", "");
  setValue("#zip", "");
  setValue("#phoneNumber", "");
};

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

const setAddressBookData = (addressBookData) => {
  addressBookData.name = addressBookObj._name;
  addressBookData.address = addressBookObj._address;
  addressBookData.city = addressBookObj._city;
  addressBookData.state = addressBookObj._state;
  addressBookData.zip = addressBookObj._zip;
  addressBookData.phoneNumber = addressBookObj._phoneNumber;
  alert(addressBookData.toString());
};

const setForm = () => {
  setValue("#fullname", addressBookObj._name);
  setValue("#address", addressBookObj._address);
  setValue("#city", addressBookObj._city);
  setValue("#state", addressBookObj._state);
  setValue("#zip", addressBookObj._zip);
  setValue("#phoneNumber", addressBookObj._phoneNumber);
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
};

const checkForUpdate = () => {
  const addressbookJson = localStorage.getItem("editEmp");
  isUpdate = addressbookJson ? true : false;
  if (!isUpdate) return;
  addressBookObj = JSON.parse(addressbookJson);
  console.log(addressBookObj);
  setForm();
};
