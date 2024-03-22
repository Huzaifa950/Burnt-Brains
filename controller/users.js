const jwt = require("jsonwebtoken");
const usersService = require("../services/users");

class usersController {
  constructor() {}

  async register(req, res) {
    try {
      const registerUserService = new usersService();
      const { username, password } = req.body;

      const newUser = await registerUserService.userRegister(
        username,
        password
      );
      const token = jwt.sign({ username: newUser.username }, "secret_key", {
        expiresIn: "30m",
      });
      res.status(201).json({ message: "User Registered Successfully", token });
    } catch (err) {
      console.log("Error Encountered while Registering User Controller: ", err);
    }
  }

  async logIn(req, res) {
    try {
      const logInUserService = new usersService();
      const { username, password } = req.body;

      const token = await logInUserService.userLogIn(username, password);
      res.status(200).json({ message: "User Logged In Successfully", token });
    } catch (err) {
      console.log("Error Encountered while LohIn User Controller: ", err);
    }
  }

  async delete(req, res) {
    try {
      const deleteUserService = new usersService();
      const userId = req.params.id;
      console.log("User Id = ", userId);

      const removeUser = await deleteUserService.deleteUser(userId);
      res.status(200).json({
        message: `User with id:${userId} Deleted Successfully`,
        removeUser,
      });
    } catch (err) {
      console.log("Error Encountered while Deleting User Controller: ", err);
    }
  }

  async update(req, res) {
    const updateUserService = new usersService();
    const id = req.params.id;
    const { currentPassword, newPassword, repeatNewPassword } = req.body;

    if (newPassword !== repeatNewPassword) {
      return res
        .status(400)
        .json({ error: "New password and repeat new password do not match" });
    }

    try {
      const updatedUser = await updateUserService.updateUser(
        id,
        currentPassword,
        newPassword
      );
      res
        .status(200)
        .json({
          message: `Password for user with id:${id} updated successfully`,
          updatedUser,
        });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new usersController();
