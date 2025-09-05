import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";
import ArchiModel from "./src/models/archiModel.js";

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

// ---- ROUTES ----

// auth routes
app.use("/api/auth", authRoutes);

// architecture routes
app.post("/api/archi/save", async (req, res) => {
  try {
    const payload = req.body;
    const doc = new ArchiModel(payload);
    await doc.save();
    return res.json({ success: true, id: doc._id });
  } catch (err) {
    console.error("Save error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/api/archi/data", async (req, res) => {
  try {
    const docs = await ArchiModel.find().sort({ _id: -1 }).limit(100).lean();
    const results = docs.map(d => ({ ...d, _id: d._id.toString() }));
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// error handler
app.use((err, req, res, next) => {
  const errorMessage = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: errorMessage });
});

// python called here or connected here
app.post("/call-python", async (req, res) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/analyze", {
      name: "Ayush",
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).send("Error connecting to Python");
  }
});


// ---- START SERVER ----
const port = process.env.PORT || 4500;
app.listen(port, async () => {
  console.log(`✅ Server Started at http://localhost:${port}`);
  await connectDB();
});
