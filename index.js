const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "./index.html"; 
}

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    renderTable(data);
  })
  .catch(err => {
    console.log("API xato:", err);
  });

function renderTable(products) {
  const tbody = document.getElementById("tableBody");

  if (!tbody) {
    console.log("tableBody topilmadi");
    return;
  }

  tbody.innerHTML = "";

  products.forEach(function (item, index) {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>${item.category}</td>
        <td>${item.description.slice(0, 80)}...</td>
        <td>${item.price}$</td>
        <td>
          <img src="${item.image}" width="50">
        </td>
        <td>
          <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    `;
  });
}


function logout() {
  localStorage.removeItem("token");
  window.location.href = "../login.html"; 
}





function renderTable(products) {
  const tbody = document.getElementById("tableBody");

  if (!tbody) {
    console.log("tableBody topilmadi");
    return;
  }

  tbody.innerHTML = "";

  products.forEach(function (item, index) {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>${item.category}</td>
        <td>${item.description.slice(0, 80)}...</td>
        <td>${item.price}$</td>
        <td>
          <img src="${item.image}" width="50">
        </td>
        <td>
          <button>View</button>
          <button>Edit</button>
          <button onclick="deleteProduct(${item.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}




