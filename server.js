const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const BLYNK_AUTH_TOKEN = "3uAt31-2E_HzK2VSp0FKfo4noABBp5oR";

app.use(cors());

app.get("/get", async (req, res) => {
    const [pinKey] = Object.keys(req.query);

    if (!pinKey) {
        return res.status(400).send("Pin not specified");
    }

    const url = `https://blynk.cloud/external/api/get?token=${BLYNK_AUTH_TOKEN}&${pinKey}`;
    
    try {
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching from Blynk API:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});