const express = require("express");
const app = express();
const faceApiMock = require("./controllers/face-api-mock");
const port = 3000;

app.use(express.json());
app.use("/", faceApiMock);

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
