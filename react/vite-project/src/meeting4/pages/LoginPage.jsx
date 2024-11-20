import React, { useState } from "react";
import LoginTemplate from "../templates/LoginTemplate";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f7f7f7",
    },
    card: {
      width: "400px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      textAlign: "center",
    },
    title: {
      fontSize: "32px",
      color: "#4a4a4a",
      marginBottom: "8px",
    },
    subtitle: {
      fontSize: "14px",
      color: "#888",
      marginBottom: "20px",
    },
    inputGroup: {
      marginBottom: "16px",
      textAlign: "left",
    },
    label: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#007bff",
      marginBottom: "8px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px",
      color: "#555",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#f0ad4e",
      border: "none",
      borderRadius: "4px",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
    footer: {
      marginTop: "16px",
      fontSize: "14px",
      color: "#555",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <LoginTemplate
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      styles={styles}
    />
  );
}
