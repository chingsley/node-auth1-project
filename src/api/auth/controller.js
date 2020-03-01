import User from '../../database/models/User';

const registerUser = async (req, res, next) => {
  console.log('\n I am in here ....\n')
  try {
    const returnedValue = await User.add(req.body);
    return res.status(201).json(returnedValue);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error. Registration failed.' });
  }
};

const authController = {
  registerUser,
};

export default authController;
