const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const bookRoutes = require("./routes/bookRoute");

app.use(express.json());

connectDB();

app.listen(PORT, () => {
  console.log(`app is listening at ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Testing");
});

// Routes
app.use("/books", bookRoutes);

module.exports = app;
