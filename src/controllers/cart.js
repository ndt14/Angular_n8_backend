import dotenv from "dotenv";
import Cart from "../models/cart.js";
import { cartSchema } from "../schemas/cart";
dotenv.config();

export const getAll = async (req, res) => {
  try {
    const carts = await Cart.find();
    if (carts.length === 0) {
      return res.status(204).json({
        message: "Danh sách cart trống!",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach cart thanh cong",
      data: [...carts],
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

export const getDetail = async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      if (!cart) {
        return res.status(400).json({
          message: "Cart không tồn tại",
          datas: [],
        });
      }
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({
        message: "Loi server",
        datas: [],
      });
    }
  };



export const create = async (req, res) => {
  try {
    const { error } = cartSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }
    const cart = await Cart.create(req.body);
    // await Category.findByIdAndUpdate(product.categoryId, {
    //   $addToSet: {
    //     carts: product._id,
    //   },
    // });
    // { $addToSet: { <field1>: <value1>, ... } }

    if (!cart) {
      return res.status(400).json({
        message: "Thêm cart thất bại",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Thêm cart thành công",
      data: [cart],
    });
  } catch (error) {
    return res.status(400).json({
      message: "Loi server",
      datas: [],
    });
  }
};



export const update = async (req, res) => {
    try {
      const { error } = cartSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
          datas: [],
        });
      }
  
      const cart = await Cart.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      if (!cart) {
        return res.status(400).json({
          messenger: "Cập nhật sản phẩm thất bại",
          datas: [],
        });
      }
      return res.status(200).json({
        message: "Cap nhat san pham thanh cong!",
        datas: [cart],
      });
    } catch (error) {
      return res.status(500).send({
        message: "Loi server",
        datas: [],
      });
    }
  };


export const remove = async (req, res) => {
  try {
    const data = await Cart.findByIdAndDelete({ _id: req.params.id });
    return res.json({
      message: "Xóa thành công",
      data: data,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
