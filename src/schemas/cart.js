import Joi from "joi";

export const cartSchema = Joi.object({
  _id: Joi.string(), 	//cart id must be a positive integer. 	(required) 	number
  name: Joi.string().required().min(3),
  price: Joi.number().required(),
  description: Joi.string(),
  image: Joi.string(),
  brand: Joi.string().min(3),
  quantity: Joi.number()
  // categoryId: Joi.string().required(),
});
