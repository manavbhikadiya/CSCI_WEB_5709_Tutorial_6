const User = require("../models/user");

exports.create = async (requestBody) => {
  try {
    const createdUsers = await User.create(requestBody);
    return createdUsers;
  } catch (error) {
    return error;
  }
};

exports.getAllUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    return error;
  }
};

exports.updateUser = async (userId, updates) => {
  try {
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });
    return user;
  } catch (error) {
    return error;
  }
};

exports.getUser = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    return error;
  }
};

exports.deleteUser = async (userId) => {
  try {
    const user = await User.deleteOne({ _id: userId });
    return user;
  } catch (error) {
    return error;
  }
};
