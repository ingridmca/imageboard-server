const express = require("express");
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

const PORT = 4000;

const app = express();

app.use(express.json()); //body parser middleware remember this one!!!

app.use("/images", imageRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log("Hello from port 4000"));
