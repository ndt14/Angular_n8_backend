import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  { id: {
        type: String,
        require: true,
        minLength:3, 	
    },
    name: {
      type: String,
      require: true,
      minLength: 3,
    },
    price: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
    },
    brand: {
        type: String,
        minLength: 3,
      }
    // categoryId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Category",
    // },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export default mongoose.model("Cart", cartSchema);