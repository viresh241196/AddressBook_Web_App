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
      "<th>ID</th><th>Name</th><th>Address</th><th>Phone Number</th><th>City</th><th>State</th><th>zip</th>";
    let innerHtml = `${headerHtml}`;

      innerHtml = `${innerHtml}
      <tr>
        <td>1</td>
        <td>viresh</td>
        <td>parel</td>
        <td>8655899904</td>
        <td>mumbai</td>
        <td>maharashtra</td>
        <td>400012</td>
      </tr>
      `;

    document.querySelector("#table-display").innerHTML = innerHtml;
  };