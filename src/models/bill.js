import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      minLength: 3,
    },
    nameUser: {
      type: String,
      require: true,
      minLength: 3,
    },
    nameProduct: {
        type: String,
        require: true,
        minLength: 3,
    },
    email: {
        type: String,
        require: true
    },
    price: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
    },
    quantity: {
      type: Number,
      require: true,
    },
    phone: {
        type: Number,
        require: true,
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

export default mongoose.model("Bill", billSchema);
