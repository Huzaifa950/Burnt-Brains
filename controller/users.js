const jwt = require("jsonwebtoken");
const usersService = require("../services/users");

class usersController {
  constructor() {}

  async register(req, res) {
    const registerUserService = new usersService();
    const { username, password } = req.body;

    const newUser = await registerUserService.userRegister(username, password);
    const token = jwt.sign({ username: newUser.username }, "secret_key", {
      expiresIn: "30m",
    });
    res.status(201).json({ message: "User Registered Successfully", token });
  }

  async logIn(req, res) {
    const logInUserService = new usersService();
    const { username, password } = req.body;

    const token = await logInUserService.userLogIn(username, password);
    res.status(200).json({ message: "User Logged In Successfully", token });
  }

  async delete(req, res) {
    const deleteUserService = new usersService();
    const userId = req.params.id;
    console.log("User Id = ", userId);

    const removeUser = await deleteUserService.deleteUser(userId);
    res
      .status(200)
      .json({
        message: `User with id:${userId} Deleted Successfully`,
        removeUser,
      });
  }

  async update(req, res) {
    const updateUserService = new usersService();
    const  id  = req.params._id;
    const newPass = req.params.password;

    const updatedUser = await updateUserService.updateUser(id, newPass);
    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        user: updatedUser,
      });
  }
}

module.exports = new usersController();
