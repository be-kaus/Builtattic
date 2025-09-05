import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect = async (req, res, next) => {
  try {
    const token =
      req.headers["authorization"]?.split(" ")[1] || req.cookies.IDCard || "";
    if (!token) {
      const err = new Error("Unauthorized");
      err.statusCode = 401;
      return next(err);
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const verifiedUser = await User.findById(decode.id);
    if (!verifiedUser) {
      const err = new Error("Unauthorized");
      err.statusCode = 401;
      return next(err);
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    next(error);
  }
};