import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  return res.json({
    message: "Hello from the server! new update by Jayesh again111 444444",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
