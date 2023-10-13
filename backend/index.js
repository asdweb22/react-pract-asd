import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express js server");
});

app.get("/about", (req, res) => {
  res.send("about us");
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://media.istockphoto.com/id/1415858611/photo/wood-texture-for-furniture-or-interior-design-dark-wood-background.webp?b=1&s=170667a&w=0&k=20&c=1JEL2I1xMzssFtPuL31boCiHIhZxbyqhvq2o8ozjPCU=",
    },
    {
      id: 2,
      name: "table metal",
      price: 300,
      image:
        "https://media.istockphoto.com/id/174083799/photo/table.webp?b=1&s=170667a&w=0&k=20&c=wTrq-nciFSrIxscnH-0-ascFYbz5frEMEGo6aRa3HJE=",
    },
    {
      id: 3,
      name: "table plastic",
      price: 400,
      image:
        "https://plus.unsplash.com/premium_photo-1691660740979-e62720ae2b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  // http://localhost:5000/api/products?search=metal
  if (req.query.search) {
    const filteredProduct = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredProduct);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.listen();
