import User from '../../database/models/User';

const findAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Failed to get users.' });
  }
};

const userController = {
  findAllUsers,
};

export default userController;
