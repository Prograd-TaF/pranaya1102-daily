const mongoose = require("mongoose");
const User = require("./user");
mongoose.connect(
  "mongodb+srv://admin:pranaya123@cluster0.swxw9.mongodb.net/MyDatabase?retryWrites=true&w=majority"
);
run();
async function run() {
  const user = new User({ name: "pranaya", age: 22 });
  await user.save();
  console.log(user);
}
