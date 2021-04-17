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

const save = () => {
  try {
    let addressBookData = createAddressBook();
    console.log(addressBookData);
    createAndUpdateStorage(addressBookData);
  } catch (e) {
    return;
  }
};
function createAndUpdateStorage(addressBookData) {
    addressbookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressbookList != undefined) {
      addressbookList.push(addressBookData);
    } else {
      addressbookList = [addressBookData];
    }
    alert(addressbookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressbookList));
  }
  
const createAddressBook = () => {
  let addressBookData = new AddressBookData();
  try {
    addressBookData.name = getInputValueById("#fullname");
    console.log("working");
  } catch (e) {
    setTextValue(".text-error", e);
    console.log("not working");
    throw e;
  }
  addressBookData.address = getInputValueById("#address");
  addressBookData.city = getInputValueById("#city");
  addressBookData.state = getInputValueById("#state");
  addressBookData.zip = getInputValueById("#zip");
  addressBookData.phoneNumber = getInputValueById("#phoneNumber");
  alert(addressBookData.toString());
  return addressBookData;
};

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};
