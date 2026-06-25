import db from "../config/mysql.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ================= REGISTER =================

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    db.query(
      "SELECT * FROM users WHERE email=? OR phone=?",
      [email, phone],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        if (result.length > 0) {
          return res.status(400).json({
            success: false,
            message: "User already exists",
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
          "INSERT INTO users(name,email,phone,password) VALUES(?,?,?,?)",
          [name, email, phone, hashedPassword],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: err.message,
              });
            }

            res.status(201).json({
              success: true,
              message: "Registration Successful",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ================= FORGOT PASSWORD =================

export const forgotPassword = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    if (!emailOrPhone || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter your Email/Mobile and New Password",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "UPDATE users SET password = ? WHERE email = ? OR phone = ?",
      [hashedPassword, emailOrPhone, emailOrPhone],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            message: "User not found",
          });
        }

        res.status(200).json({
          success: true,
          message: "Password updated successfully",
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= LOGIN =================

export const loginUser = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    if (!emailOrPhone || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter Email/Mobile and Password",
      });
    }

    db.query(
      "SELECT * FROM users WHERE email=? OR phone=?",
      [emailOrPhone, emailOrPhone],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        if (result.length === 0) {
          return res.status(400).json({
            success: false,
            message: "User not found",
          });
        }

        const user = result[0];

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return res.status(400).json({
            success: false,
            message: "Invalid Password",
          });
        }

        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );

        res.json({
          success: true,
          message: "Login Successful",
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
          },
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};