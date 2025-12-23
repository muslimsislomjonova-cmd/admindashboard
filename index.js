const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "./index.html";
}


let products = [];
let editIndex = null;


fetch("https://fakestoreapi.com/products")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    products = data;
    renderTable();
  })
  .catch(function (error) {
    console.log("Xatolik:", error);
  });


function renderTable() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  products.forEach(function (item, index) {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>${item.category}</td>
        <td>${item.description.slice(0, 40)}...</td>
        <td>${item.price}$</td>
        <td>
          <img src="${item.image}" width="40">
        </td>
        <td>
          <button onclick="editProduct(${index})">Edit</button>
          <button onclick="deleteProduct(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}


function openAddModal() {
  editIndex = null;
  document.getElementById("modalTitle").innerText = "Add Product";
  clearInputs();
  document.getElementById("modal").style.display = "flex";
}




function saveProduct() {
  const product = {
    title: titleInput.value,
    category: categoryInput.value,
    price: priceInput.value,
    description: descInput.value,
    image: imageInput.value
  };

  if (editIndex === null) {
    products.push(product);
  } else {
    products[editIndex] = product;
  }

  renderTable();
  closeModal();
}


function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
}


function clearInputs() {
  titleInput.value = "";
  categoryInput.value = "";
  priceInput.value = "";
  descInput.value = "";
  imageInput.value = "";
}


function logout() {
  localStorage.removeItem("token");
  window.location.href = "../login.html";
}
