const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.get("/api/roster/:team", async (req, res) => {
  const team = req.params.team;
  try {
    const response = await fetch(
      `https://api-web.nhle.com/v1/roster/${team}/current`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
