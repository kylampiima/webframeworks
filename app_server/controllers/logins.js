/* GET 'register' page */
const register = function(req, res){
    res.render('registration', { title: 'Register' });
    };
    /* GET 'Login' page */
    const login = function(req, res){
    res.render('logins', { title: 'Login' });
    };
    module.exports = {
    register,
    login
    };
    