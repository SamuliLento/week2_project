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
  const emptyTableButton = document.getElementById("empty-table");

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
    if (document.getElementById("input-admin").checked) {
      newAdmin.innerText = "X";
    } else {
      newAdmin.innerText = "-";
    }

    tableBody.lastChild.appendChild(newUsername);
    tableBody.lastChild.appendChild(newEmail);
    tableBody.lastChild.appendChild(newAddress);
    tableBody.lastChild.appendChild(newAdmin);
  }

  function emptyTable() {
    const tableBody = document.getElementById("table-body");
    while (tableBody.hasChildNodes()) {
      tableBody.removeChild(tableBody.lastChild);
    }
  }

  submitDataButton.addEventListener("click", function () {
    newTableRow();
  });

  emptyTableButton.addEventListener("click", function () {
    emptyTable();
  });
}
