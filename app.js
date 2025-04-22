const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const router = require("./routes/schoolRoute");
app.use("/api", router);
console.log("hello");
// Start server
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("<h2> hello babay</h2>");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
