invGomb = document.getElementById('invGomb');
const inventoryModal = document.getElementById('inv');
function invmegnyitas() {
  inventoryModal.showModal();
}
invGomb.addEventListener('click', () => {
    invmegnyitas();
})
