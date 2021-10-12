module.exports = {
    USER: 'user',
    ADMIN: 'admin',
    MANAGER: 'manager',
    passwordRegExp: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    emailRegExp: new RegExp(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
};
