import React from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/button";

export default function LoginForm({ formData, handleChange, handleSubmit, styles }) {
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        label="Username"
        type="text"
        name="username"
        placeholder="Fill The Username"
        value={formData.username}
        onChange={handleChange}
        styles={styles}
      />
      <InputGroup
        label="Password"
        type="password"
        name="password"
        placeholder="Fill The Password"
        value={formData.password}
        onChange={handleChange}
        styles={styles}
      />
      <Button text="Login" type="submit" style={styles.button} />
    </form>
  );
}
