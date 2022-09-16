import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const submitDataButton = document.getElementById("submit-data");

  function newTableRow() {
    const tableBody = document.getElementById("table-body");

    tableBody.appendChild(document.createElement("tr"));
    let newUsername = document.createElement("td");
    let newEmail = document.createElement("td");
    let newAddress = document.createElement("td");
    let newAdmin = document.createElement("td");

    newUsername.innerText = document.getElementById("input-username").value;
    newEmail.innerText = document.getElementById("input-email").value;
    newAddress.innerText = document.getElementById("input-address").value;
    newAdmin.innerText = document.getElementById("input-admin").value;

    tableBody.lastChild.appendChild(newUsername);
    tableBody.lastChild.appendChild(newEmail);
    tableBody.lastChild.appendChild(newAddress);
    tableBody.lastChild.appendChild(newAdmin);
  }

  submitDataButton.addEventListener("click", function () {
    newTableRow();
  });
}
