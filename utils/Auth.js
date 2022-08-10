// Redirects to login route if user is not logged in
const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
};
  
module.exports = withAuth;
  