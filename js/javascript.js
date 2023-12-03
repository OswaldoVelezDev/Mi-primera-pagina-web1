document.addEventListener('DOMContentLoaded', function () {
  var createProductBtn = document.getElementById('createProductBtn');
  createProductBtn.addEventListener('click', function () {
      var productName = document.getElementById('name').value;
      var productPrice = document.getElementById('price').value;
      var productInventory = document.getElementById('inventory').value;

      if (productName === '' || productPrice === '' || productInventory === '') {
          alert('Por favor, completa todos los campos.');
      } else {
          mostrarModal('Producto creado exitosamente:<br><br>Nombre: ' + productName + '<br>Precio: ' + productPrice + '<br>Inventario: ' + productInventory);
      }
  });
});

function mostrarModal(mensaje) {
  var modal = document.getElementById('modal');
  var modalText = document.getElementById('modalText');
  modalText.innerHTML = mensaje;
  modal.style.display = 'block';
}

function cerrarModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}


