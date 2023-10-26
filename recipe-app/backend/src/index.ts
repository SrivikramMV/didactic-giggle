// @ts-ignore
import express from "express";
// @ts-ignore
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipe/search", async (req, res) => {
    res.json({ message: "success" });
});

app.listen(5010, () => {
    console.log("Server running on localhost:5000");
});