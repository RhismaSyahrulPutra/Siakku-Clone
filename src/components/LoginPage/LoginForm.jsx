import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

function LoginForm() {
  const [nim, setNim] = useState("12345678");
  const [password, setPassword] = useState("password123");
  const navigate = useNavigate();

  const notyf = new Notyf({
    duration: 3000,
    position: { x: "right", y: "top" },
  });

  // Dummy Account
  const dummyAccounts = [{ nim: "12345678", password: "password123" }];

  const handleClear = () => {
    setNim("");
    setPassword("");
  };

  const handleLogin = e => {
    e.preventDefault();

    const account = dummyAccounts.find(
      acc => acc.nim === nim && acc.password === password
    );

    if (account) {
      notyf.success("Login berhasil!");
      console.log("Login dengan:", { nim, password });

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      notyf.error("NIM atau Password salah!");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label htmlFor="nim" className="block font-medium text-sm mb-1">
          NIM
        </label>
        <input
          type="text"
          id="nim"
          value={nim}
          onChange={e => setNim(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          placeholder="Masukkan NIM"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block font-medium text-sm mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
          placeholder="Masukkan Password"
          required
        />
      </div>

      <div className="pt-4 space-y-4">
        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="w-full bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg transition-colors"
        >
          Clear Form
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
