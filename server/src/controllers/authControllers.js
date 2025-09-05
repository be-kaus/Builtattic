import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";

export const Register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      const err = new Error("all fields must be required");
      err.statusCode = 400;
      return next(err);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const err = new Error("User already exists");
      err.statusCode = 409;
      return next(err);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registration successfull" });
  } catch (error) {
    next(error);
  }
};
export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const err = new Error("all fields must be required");
      err.statusCode = 400;
      return next(err);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const err = new Error("invalid username or password");
      err.statusCode = 401;
      return next(err);
    }

    const isverified = await bcrypt.compare(password, existingUser.password);
    if (!isverified) {
      const err = new Error("invalid username or password");
      err.statusCode = 401;
      return next(err);
    }

    const token = genAuthToken(existingUser);

    res
      .status(200)
      .cookie("IDCard", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: "none",
        Strict: false,
      })
      .json({
        message: `welcome back ${existingUser.fullName}`,
        data: existingUser,
      });
  } catch (error) {
    next(error);
  }
};
export const Getme = async (req, res, next) => {
  try {
    const user = req.user;
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};
export const Update = async (req, res, next) => {
  try {
    const { fullName, password, newPassword } = req.body;
    if (!fullName || !password || !newPassword) {
      const err = new Error("all fields are required");
      err.statusCode = 400;
      return next(err);
    }

    const currentUser = req.user;
    if (!currentUser) {
      const error = new Error("user not found login again");
      error.stausCode = 401;
      return next(error);
    }

    const isverified = await bcrypt.compare(password, currentUser.password);
    if (!isverified) {
      const error = new Error("wrong password");
      error.stausCode = 401;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        fullName,
        password: hashedPassword,
      },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "user update successfull", data: updatedUser });
  } catch (error) {
    next(error);
  }
};
export const Logout = async (req, res, next) => {
  try {
    res
      .status(200)
      .clearCookie("IDCard", { maxAge: 0 })
      .json({ message: "user logout successfull" });
  } catch (error) {
    next(error);
  }
};

export const Delete = async (req, res, next) => {
  try {
    const { email, password, newPassword } = req.body;
   console.log(newPassword)
    if (!email || !password || !newPassword) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("Unauthorized");
      error.statusCode = 400;
      return next(error);
    }

    if (existingUser._id.toString() !== req.user._id.toString()) {
      const error = new Error("Unauthorized");
      error.statusCode = 400;
      return next(error);
    }

    const isverified = await bcrypt.compare(password, existingUser.password);
    if (!isverified) {
      const error = new Error("Invalid Username or password");
      error.statusCode = 401;
      return next(error);
    }

    await User.findByIdAndDelete(req.user._id);

    res
      .status(200)
      .clearCookie("IDCard", { maxAge: 0 })
      .json({ message: "user deleted successfull" });
  } catch (error) {
    next(error);
  }
};