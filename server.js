const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = 3001;

const app = express();
app.use(
  "/coins/markets",
  createProxyMiddleware({
    target:
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    headers: {
      accept: "application/json",
      method: "GET",
    },
    changeOrigin: true,
  })
);
app.listen(port, function () {
  console.log(`server running now.. ${port}`);
});
