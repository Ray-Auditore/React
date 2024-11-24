import React from "react";
import Text from "../atoms/text";
import LoginForm from "../organisms/LoginForm";

export default function LoginTemplate({ formData, handleChange, handleSubmit, styles }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Text text="Login" style={styles.title} />
        <Text text="selamat datang di website kami" style={styles.subtitle} />
        <LoginForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          styles={styles}
        />
        <Text
          text={
            <>
              belum punya akun{" "}
              <a href="/register" style={styles.link}>
                Register
              </a>    
            </>
          }
          style={styles.footer}
        />
      </div>
    </div>
  );
}
