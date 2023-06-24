const express = require("express");
const app = express();
const faceApiMock = require("./controllers/face-api-mock");

app.use(express.json());
app.use("/", faceApiMock);

app.listen(process.env.PORT, () => {
  console.log(`app running at http://localhost:${process.env.PORT}`);
});
