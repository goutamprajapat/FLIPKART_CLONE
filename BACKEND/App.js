require("dotenv").config();
require("./src/servers");
const db = require("./src/Utils/db");
const express = require("express");
const cors = require("cors");
const PublicRouter = require("./src/Routes/Public.Auth.Routes");
const SellerRoutes = require("./src/Routes/Seller.Auth.Routes");
const helmet = require("helmet");
const SellerProductRoutes = require("./src/Routes/Seller.Product.Routes");
const ProductRouter = require("./src/Routes/Public.Product.Routes");
const config = require("./src/Utils/config");
const { Server } = require("socket.io");
const { createServer } = require("http");
const NotificationRoutes = require("./src/Routes/Notification.Routes");
const socketServer = require("./src/Utils/Socket.io.Server");
const errorHandler = require("./src/Middleware/error.MiddkerWare");

const app = express();
app.use(helmet());
app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: false }));

const httpServer = createServer(app);

app.use(function (req, res, next) {
  res.setHeader(
    "Cache-Control",
    "no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0, max-age=3600"
  );
  next();
});
// user cors policy
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
// product routes
app.use("/products/v1", ProductRouter);
// public routes
app.use("/public", PublicRouter);
// seller Routes
app.use("/seller", SellerRoutes);
// seller Routes
app.use("/seller/products/v1", SellerProductRoutes);
// Notificatios Routes
app.use("/notificatios", NotificationRoutes);
// listion server on port 3031
app.use(errorHandler);
db().then(() => {
  httpServer.listen(config.get("_PORT"), () =>
    console.log(
      ` app listening on port http://localhost:${config.get("_PORT")}`
    )
  );
  const io = new Server(httpServer);
  socketServer(io);
});
