const authorizeUser = (req, res, next) => {
  if (req.session && req.session.username) {
    next();
  } else {
    return res.status(401).json({ error: 'Authorization failed. Please login to continue.' });
  }
}


const helpers = {
  authorizeUser,
};

export default helpers;
