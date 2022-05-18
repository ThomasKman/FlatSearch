const Joi = require('joi');

function validateApartment(apartment) {                                                                    //
    const schema = Joi.object({
        description: Joi.string(),
        number_of_bedrooms: Joi.number(),
        number_of_bathrooms: Joi.number(),

    });
    return schema.validate(apartment);
}

module.exports = {
    validateApartment,

}