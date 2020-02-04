// Import Middleware
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

// Call EXPRESS method and store it in 'app' variable.
const app = express();
// Import Database connection code.
const connectToDb = require("./DB/DBConnection");

// connectToDb();
// Use middleware.
app.use(cors());
// Middleware function to use 'req' parameters.
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan());

// app.use(express.static(path.join(__dirname, 'React/build')));
app.use(express.json());
app.use(cors());

// Import routes.
const ProffesionRoutes = require("./Routes/ProffesionRoutes");
const UsersRoutes = require("./Routes/UsersRoutes");

// Use routes.
app.use("/profession", ProffesionRoutes);
app.use("/", UsersRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
