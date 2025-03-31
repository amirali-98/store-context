export function calculateTotalProducts(products) {
  return products.reduce((acc, item) => acc + item.quantity, 0);
}

export function calculateTotalCost(products) {
  return products.reduce((acc, item) => acc + item.quantity * item.price, 0);
}

export function calculateProductQuantity(products, id) {
  return products.find(p => p.id === id)?.quantity || 0;
}
