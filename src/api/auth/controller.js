import User from '../../database/models/User';
import bcrypt from 'bcryptjs';

const registerUser = async (req, res, next) => {
  let user = req.body;
  user.password = bcrypt.hashSync(user.password, 12);
  try {
    const returnedValue = await User.add(user);
    return res.status(201).json(returnedValue);
  } catch (err) {
    console.error(err.code);
    if (err.code && err.code === 'SQLITE_CONSTRAINT') {
      return res.status(409).json({ error: `${user.username} is taken. Please choose another username.` });
    }
    return res.status(500).json({ error: 'Internal server error. Registration failed.' });
  }
};

const loginUser = (req, res) => {
  const { username } = req.body;
  req.session.username = username;
  return res.status(200).json({ message: `Welcome ${username}` });
};

const authController = {
  registerUser,
  loginUser
};

export default authController;
