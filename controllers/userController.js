const UserService = require("../services/userServices");

exports.create = async (req, res) => {
  try {
    const response = await UserService.create(req.body);
    if(response?.code) {
      return res.send({message: "Email Already exist"});
    }
    res.send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.send(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const response = await UserService.getUser(req.params.id);
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const response = await UserService.updateUser(req.params.id, req.body);
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const response = await UserService.deleteUser(req.params.id);
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};