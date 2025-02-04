import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Login16 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", { email, password });
      const token = response.data.access_token;

      if (token) {
        localStorage.setItem("token", token); // Store token
        const decoded = jwtDecode(token);
        setUserProfile(decoded);
      }

      // Fetch profile data
      const profileResponse = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserProfile(profileResponse.data);
    } catch (error) {
      setError(error.response?.data?.message || "Unable to login");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userProfile && (
        <div>
          <h3>Profile</h3>
          <ul>
            <li>ID : {userProfile.id}</li>
            <li>Name : {userProfile.name}</li>
            <li>Email : {userProfile.email}</li>
            <li>Role : {userProfile.role}</li>
            <li>
              <img src={userProfile.avatar} alt="avatar" width="100" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Login16;
