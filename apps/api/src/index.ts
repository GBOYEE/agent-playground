import express from "express";

import usersRouter from "./routes/users";

const app = express();
const port = process.env.PORT || 4000;

// Disable X-Powered-By header (security)
app.disable("x-powered-by");

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "taskflow-api" });
});

app.use("/users", usersRouter);

// JSON 404 handler for unknown API routes
app.use((_req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: "The requested API endpoint does not exist.",
  });
});

app.listen(port, () => {
  console.log(`TaskFlow API listening on port ${port}`);
});
