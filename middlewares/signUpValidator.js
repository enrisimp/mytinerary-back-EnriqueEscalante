import joi from 'joi'

export const signUpValidator = (req, res, next) =>{

    const schema = joi.object({
      name: joi.string().min(3).max(15).required().messages({
        "string.name": "Complete with text",
        "string.empty": "Required, please complete",
        "string.min": "the minimun is 3 characters ",
      }),
      lastname: joi.string().min(3).max(20).required().messages({
        "string.name": "Complete with text",
        "string.empty": "Required, please complete",
        "string.min": "the minimun is 3 characters ",
      }),
      email: joi.string().required().email(),
      image: joi.string().required().uri(),
      country: joi.string().min(3).max(20),
      password: joi
        .string()
        .min(8)
        .max(16)
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });

    const validate = schema.validate( req.body, {abortEarly : false} )

    if( validate.error ){
        return res.json( {success:false, errors : validate.error.details } )
    }

    next()
}