import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required(),
  description: Joi.string(),
  image: Joi.string(),
  brand: Joi.string().min(3).required(),
  quantity: Joi.number().required()
  // categoryId: Joi.string().required(),
});
