let products = {};

fetch('products.json')
  .then(res => res.json())
  .then(data => products = data);

function lookup() {
  const code = document.getElementById('codeInput').value.trim();
  console.log("Looking up product:", code);
  const product = products[code];

  if (product) {
    document.getElementById('productImage').src = product.image;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDisplay').style.display = 'block';
  } else {
    alert('Product not found');
  }
}

function markSold() {
  const code = document.getElementById('codeInput').value.trim();
  let sold = JSON.parse(localStorage.getItem("soldItems") || "[]");
  sold.push({ code, time: new Date().toISOString() });
  localStorage.setItem("soldItems", JSON.stringify(sold));
  alert("Transaction recorded");
}
