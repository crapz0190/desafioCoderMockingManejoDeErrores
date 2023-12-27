import { faker } from "@faker-js/faker";

export const generateProduct = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    const product = {
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.product(),
      price: faker.commerce.price({ min: 100, max: 500, dec: 0, symbol: "$" }),
      category: faker.commerce.department(),
      stock: faker.number.int({ min: 10, max: 100 }),
    };

    products.push(product);
  }

  return products;
};

export const generateCart = () => {
  const products = generateProduct(3);

  // dejo el cart comentado para generar el error

  // const cart = [];

  for (let i = 0; i < 5; i++) {
    const createCart = {
      id: faker.database.mongodbObjectId(),
      products: products,
    };

    cart.push(createCart);
  }

  return cart;
};
