let addressbookList;
window.addEventListener("DOMContentLoaded", (event) => {
    addressbookList = getaddressbookDataFromStorage();
  document.querySelector(".emp-count").textContent = addressbookList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp');
});

const getaddressbookDataFromStorage = () => {
    return localStorage.getItem("AddressBookList")
      ? JSON.parse(localStorage.getItem("AddressBookList"))
      : [];
  };
  
  const createInnerHtml = () => {
    if (addressbookList.length == 0) return;
    const headerHtml =
      "<th>ID</th><th>Name</th><th>Address</th><th>Phone Number</th><th>City</th><th>State</th><th>zip</th><th>Action</th>";
    let innerHtml = `${headerHtml}`;
    for (const addressbookData of addressbookList) {
      innerHtml = `${innerHtml}
      <tr>
        <td>${addressbookData._id}</td>
        <td>${addressbookData._name}</td>
        <td>${addressbookData._address}</td>
        <td>${addressbookData._phoneNumber}</td>
        <td>${addressbookData._city}</td>
        <td>${addressbookData._state}</td>
        <td>${addressbookData._zip}</td>
        <td>
        <img id="${addressbookData._id}" src="../assets/icons/delete-black-18dp.svg" onclick="remove(this)"  alt="delete">
        <img src="../assets/icons/create-black-18dp.svg" onclick="update(this)" id="${addressbookData._id}" alt="edit">
          </td>
      </tr>
      `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
  };

  const remove = (node) => {
    console.log(node)
  let addressbookData = addressbookList.find((Data) => Data._id == node.id);
  if (!addressbookData) return;
  const index = addressbookList
    .map((Data) => Data._id)
    .indexOf(addressbookData._id);
    addressbookList.splice(index, 1);
  localStorage.setItem("AddressBookList", JSON.stringify(addressbookList));
  document.querySelector(".emp-count").textContent = addressbookList.length;
  createInnerHtml();
};