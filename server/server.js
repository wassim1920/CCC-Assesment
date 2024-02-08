const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET", "OPTIONS", "PUT"],
  allowedHeaders: ["Content-Type", "token"],
};

app.use(cors(corsOptions));

//routes
app.use(express.json());
app.use("/user", require("./routes/user"));

//server

app.listen(5000, (err) =>
  err ? console.log(err) : console.log(`Server is running  `)
);
