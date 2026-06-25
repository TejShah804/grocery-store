import React, { useState } from "react";
import axios from "axios";

function LoginModal({ isOpen, onClose, onSuccess }) {
  const [view, setView] = useState("login"); // 'login', 'register', 'forgotPassword'

  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setView("login");
    setMessage("");
    setFormData({
      name: "",
      emailOrPhone: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- REGISTER ----------------

  const handleRegister = async () => {
    setMessage("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setMessage("Please fill all fields.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }
      );

      setMessage(res.data.message);

      setTimeout(() => {
        setView("login");
        setMessage("");
      }, 1500);
    } catch (err) {
      setMessage(
        err.response?.data?.message || "Registration Failed"
      );
    }

    setLoading(false);
  };

  // ---------------- LOGIN ----------------

  const handleLogin = async () => {
    setMessage("");

    if (!formData.emailOrPhone || !formData.password) {
      return setMessage("Please fill all fields.");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
        }
      );

      setMessage(res.data.message || "Login successful!");

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      setTimeout(() => {
        handleClose();
        if (onSuccess) onSuccess(res.data.user);
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed. Please try again.");
    }

    setLoading(false);
  };

  // ---------------- FORGOT PASSWORD ----------------

  const handleForgotPassword = async () => {
    setMessage("");

    if (!formData.emailOrPhone || !formData.password || !formData.confirmPassword) {
      return setMessage("Please fill all fields.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          emailOrPhone: formData.emailOrPhone,
          password: formData.password,
        }
      );

      setMessage(res.data.message);

      setTimeout(() => {
        setView("login");
        setMessage("");
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to update password");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded shadow p-4"
        style={{ width: "400px", maxWidth: "95%" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3
            style={{
              color: "#00B207",
              fontWeight: "700",
            }}
          >
            {view === "register" ? "Create Account" : view === "forgotPassword" ? "Forgot Password" : "Login"}
          </h3>

          <button
            className="btn-close"
            onClick={handleClose}
          ></button>
        </div>

        {message && (
          <div className="alert alert-info py-2">
            {message}
          </div>
        )}

        {/* REGISTER VIEW */}

        {view === "register" && (
          <>
            <div className="mb-3">
              <label>Full Name</label>

              <input
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
              />
            </div>

            <div className="mb-3">
              <label>Email</label>

              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>

            <div className="mb-3">
              <label>Mobile Number</label>

              <input
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>

              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>

            <div className="mb-3">
              <label>Confirm Password</label>

              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>

            <button
              className="btn btn-success w-100"
              style={{ background: "#00B207" }}
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? "Please Wait..." : "Register"}
            </button>
          </>
        )}

        {/* LOGIN VIEW */}

        {view === "login" && (
          <>
            <div className="mb-3">
              <label>Email or Mobile Number</label>

              <input
                className="form-control"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                placeholder="Enter Email or Mobile Number"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>

              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>

            <div className="text-end mb-3">
              <button
                className="btn btn-link p-0"
                style={{
                  color: "#00B207",
                  textDecoration: "none",
                }}
                onClick={() => setView("forgotPassword")}
              >
                Forgot Password?
              </button>
            </div>

            <button
              className="btn btn-success w-100"
              style={{ background: "#00B207" }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Please Wait..." : "Login"}
            </button>
          </>
        )}

        {/* FORGOT PASSWORD VIEW */}

        {view === "forgotPassword" && (
          <>
            <div className="mb-3">
              <label>Email or Mobile Number</label>
              <input
                className="form-control"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                placeholder="Enter Email or Mobile Number"
              />
            </div>
            <div className="mb-3">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter New Password"
              />
            </div>
            <div className="mb-3">
              <label>Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
              />
            </div>

            <button
              className="btn btn-success w-100"
              style={{ background: "#00B207" }}
              onClick={handleForgotPassword}
              disabled={loading}
            >
              {loading ? "Please Wait..." : "Set New Password"}
            </button>
          </>
        )}

        <div className="text-center mt-4">
          {view === "register" ? (
            <>
              Already have an account?{" "}
              <button
                className="btn btn-link p-0"
                style={{
                  color: "#00B207",
                  textDecoration: "none",
                }}
                onClick={() => {
                  setView("login");
                  setMessage("");
                }}
              >
                Login
              </button>
            </>
          ) : view === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                className="btn btn-link p-0"
                style={{
                  color: "#00B207",
                  textDecoration: "none",
                }}
                onClick={() => {
                  setView("register");
                  setMessage("");
                }}
              >
                Register
              </button>
            </>
          ) : (
            <button
              className="btn btn-link p-0"
              style={{
                color: "#00B207",
                textDecoration: "none",
              }}
              onClick={() => {
                setView("login");
                setMessage("");
              }}
            >
              Back to Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;