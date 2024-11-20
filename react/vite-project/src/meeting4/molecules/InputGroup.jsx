import React from "react";
import Label from "../atoms/label.jsx";
import Input from "../atoms/input.jsx";

export default function InputGroup({ label, type, name, placeholder, value, onChange, styles }) {
  return (
    <div style={styles.inputGroup}>
      <Label text={label} style={styles.label} />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={styles.input}
      />
    </div>
  );
}
