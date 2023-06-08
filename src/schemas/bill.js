import Joi from "joi";

export const billSchema = Joi.object({
  _id: Joi.string().min(3), 	
  nameUser: Joi.string().required().min(3),
  nameProduct: Joi.string().required().min(3),
  email: Joi.string().email().required(),
  price: Joi.number().required(),
  address: Joi.string(),
  quantity: Joi.number().required(),
  phone: Joi.number().required()
});
