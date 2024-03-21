const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class usersServices {
  async userRegister(username, password) {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();
    return newUser;
  }

  async userLogIn(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Invalid Username or Password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid Username or Password");
    }

    const token = jwt.sign({ username: user.username }, "secret_key", {
      expiresIn: "30m",
    });
    return token;
  }

  async deleteUser(id) {
    console.log(id);
    const userDeleted = await User.findOneAndDelete({ _id: id });
    if (!userDeleted) {
      throw new Error("User not found");
    }
    console.log(userDeleted);
    return userDeleted;
  }

  async updateUser(id, newPass) {
    const userUpdated = await User.findByIdAndUpdate(id, newPass, {new: true});
    // console.log('User updated successfully:', userUpdated);
    return userUpdated;
  }
}

module.exports = usersServices;
