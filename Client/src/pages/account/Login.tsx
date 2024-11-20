import { useState } from "react";
import { loginService } from "../../utils/registration.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={async () => {
          if (!username || !password) {
            alert("some data is missing");
            return;
          }
          const [s, e] = await loginService({ username, password });
          if (!s) {
            alert(e);
            return;
          }
          alert("succeeded");
          navigate("/");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
