const express = require("express");
const path = require('path')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/fitnessTracker",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.listen(PORT, () =>
    console.log(`API Server now listening on PORT ${PORT}!`)
)