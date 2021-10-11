const User = require('../dataBase/User');
const updateValidator = require('../dependencies/update.validator');


module.exports = {
    userIdMiddleware: async (req, res, next) => {
        try {
            const {user_id} = req.params;
            const checkId = await User.findById(user_id).lean();

            if (!checkId) {
                throw new Error('Wrong id');
            }

            req.user = checkId;

            next();
        } catch (e) {
            res.json(e.message);
        }
    },
    updateValid: (req, res, next) => {
        try {
            const {error, value} = updateValidator.updateValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            req.body = value;

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};


