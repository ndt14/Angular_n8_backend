import dotenv from "dotenv";
import Bill from "../models/bill.js";
import { billSchema } from "../schemas/bill.js";
dotenv.config();

export const getAll = async (req, res) => {
  try {
    const bills = await Bill.find();
    if (bills.length === 0) {
      return res.status(204).json({
        message: "Danh sách trống!",
        data: [],
      });
    }
    return res.status(200).json({
      message: "Lay danh sach san pham thanh cong",
      data: [...bills],
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};


export const getDetail = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(400).json({
        message: "Bill không tồn tại",
        datas: [],
      });
    }
    return res.status(200).json(bill);
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
      datas: [],
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = billSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }
    const bill = await Bill.create(req.body);
    // await Category.findByIdAndUpdate(product.categoryId, {
    //   $addToSet: {
    //     products: product._id,
    //   },
    // });
    // { $addToSet: { <field1>: <value1>, ... } }

    if (!bill) {
      return res.status(400).json({
        message: "Thêm bill thất bại",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Thêm bill thành công",
      data: [bill],
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
    const { error } = billSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        datas: [],
      });
    }

    const bill = await Bill.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!bill) {
      return res.status(400).json({
        messenger: "Cập nhật bill thất bại",
        datas: [],
      });
    }
    return res.status(200).json({
      message: "Cap nhat bill thanh cong!",
      datas: [bill],
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
    const data = await Bill.findByIdAndDelete({ _id: req.params.id });
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
