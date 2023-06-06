import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
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
      require: true,
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

export default mongoose.model("Product", productSchema);