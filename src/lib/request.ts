const request = {
  products(id = '') {
    return id ? `/products/${id}` : `/products`;
  },
  categories(category = '') {
    return category ? `/products/category/${category}` : `/products/categories`;
  },
};

export default request;
