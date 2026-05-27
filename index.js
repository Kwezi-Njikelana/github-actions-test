const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;

app.get("/", async (req, res) => {
    try{
            res.status(200).json({
                success: true,
                message: "Express server is running!"
            });

    }
    catch(error) {
        console.error("Failed error:", error);

        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});