const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        content: Joi.string().required(),
        user_id: Joi.number().required(),
    })
});