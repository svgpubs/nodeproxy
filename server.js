const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = 3001;

const app = express();

app.use(
  "/api_to_external_website",
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

app.use(
  "/localhostapi",
  createProxyMiddleware({
    target: `http://localhost:${port}/`,
    headers: {
      accept: "application/json",
      method: "GET",
    },
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  console.log("localhost:3001 api is running");
  const data = { result: `Success! from localhostapi on localhost:${port}!!` };
  res.send(JSON.parse(data));
});

app.listen(port, function () {
  console.log(`server running now.. ${port}`);
});
