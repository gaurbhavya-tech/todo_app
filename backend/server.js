const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

let tasks = [];

app.post("/add", upload.single("file"), (req, res) => {
  const { text } = req.body;
  const file = req.file ? req.file.filename : null;

  const task = { id: Date.now(), text, file };
  tasks.push(task);

  res.json(task);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.delete("/delete/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));