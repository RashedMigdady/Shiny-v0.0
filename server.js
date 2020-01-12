const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/delete", require("./server/delete"));
app.use("/addDonor", require("./server/addDonor"));
app.use("/search", require("./server/search"));
app.use("/report", require("./server/report"));


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));