const socket = io();

const productsContainer = document.getElementById("products_table_body");

socket.on("products", (products) => {
  const allProductsElements = products
    .map(
      (product) => `
        <tr>
            <td> ${product.title} </td>
            <td> ${product.price} </td>
            <td> ${product.code} </td>
        </tr>
    `
    )
    .join(" ");

  productsContainer.innerHTML = allProductsElements;
});

// Creando producto con api form (usando fetch y el POST de api/products)ç
const addProductApiForm = document.getElementById("add_product_api");

addProductApiForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(addProductApiForm);

    const product = {};
    formData.forEach((value, key) => {
      product[key] = value;
    });

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    if (!data.success) {
      alert(data.message ?? data.error ?? "Ocurrio un error");
    }
  } catch (error) {
    console.log(error);
  }
});

// Creando producto con web socket form (enviando con emit)
const addProductSocketsForm = document.getElementById(
  "add_product_web_sockets"
);

addProductSocketsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData(addProductSocketsForm);

    const product = {};
    formData.forEach((value, key) => {
      product[key] = value;
    });

    socket.emit("add-product", product);
  } catch (error) {
    console.log(error);
  }
});

socket.on("add-product-error", (error) => {
  alert(error);
});