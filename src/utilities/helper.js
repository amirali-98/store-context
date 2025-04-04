export function calculateTotalProducts(products) {
  return products.reduce((acc, item) => acc + item.quantity, 0);
}

export function calculateTotalCost(products) {
  return products.reduce((acc, item) => acc + item.quantity * item.price, 0);
}

export function calculateProductQuantity(products, id) {
  return products.find(p => p.id === id)?.quantity || 0;
}

export function searchedProducts(products, search) {
  if (search && search !== "") {
    return products.filter(p =>
      p.title.trim().toLowerCase().includes(search.trim().toLowerCase())
    );
  }
  return products;
}

export function categoryProducts(products, category) {
  if (category && category !== "all") {
    return products.filter(p => p.category.toLowerCase() === category);
  }
  return products;
}

export function queryString({ search, category }) {
  let queryString = {};

  if (search && search !== "") {
    queryString = {
      ...queryString,
      search,
    };
  }

  if (category && category !== "all") {
    queryString = {
      ...queryString,
      category,
    };
  }

  return queryString;
}
