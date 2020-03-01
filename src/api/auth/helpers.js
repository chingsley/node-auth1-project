import bcrypt from 'bcryptjs';
import User from '../../database/models/User';

const verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).json({ error: 'Please provide valid username and password' });
  }
  try {
    const user = await User.findBy({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      next();
    } else {
      return res.status(401).json({ error: 'Invalid username and/or password' });
    }
  } catch (err) {
    console.log(err);
  }
};

const helpers = {
  verifyUser,
};

export default helpers;

