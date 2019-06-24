
module.exports = {
    isAuthenticated: (req, res, next) => {
        if (req.session.usuario) {
          next();
        }
        else{
            res.redirect('/login');
        }
    }
};