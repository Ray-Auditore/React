import React from "react";

export default function Input({ type, name, placeholder, value, onChange, style }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
}
