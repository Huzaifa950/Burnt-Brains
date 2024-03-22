const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class usersServices {
  async userRegister(username, password) {
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new Error("Username already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });

      await newUser.save();
      return newUser;
    } catch (err) {
      console.log("Error Encountered while Registering User Service: ", err);
    }
  }

  async userLogIn(username, password) {
    try {
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
    } catch (err) {
      console.log("Error Encountered while LogIn User Service: ", err);
    }
  }

  async deleteUser(id) {
    try {
      console.log(id);
      const userDeleted = await User.findOneAndDelete({ _id: id });
      if (!userDeleted) {
        throw new Error("User not found");
      }
      console.log(userDeleted);
      return userDeleted;
    } catch (err) {
      console.log("Error Encountered while Deleting User Service: ", err);
    }
  }

  async updateUser(id, currentPassword, newPassword) {
    try {
      const user = await User.findById(id);

      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = await user.comparePassword(currentPassword);

      if (!isPasswordValid) {
        throw new Error("Current password is incorrect");
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      user.password = hashedNewPassword;

      const updatedUser = await user.save();
      console.log(updatedUser);

      return updatedUser;
    } catch (err) {
      console.log("Error while Updating User Service: ", err);
    }
  }
}

module.exports = usersServices;
