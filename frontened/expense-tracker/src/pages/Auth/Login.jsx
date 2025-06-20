import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AuthLayout from '../../components/layout/authLayout';
import { Link } from "react-router-dom";

// import Input from '../../components/ui/Input'; // Make sure this exists or use basic input

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Handle login form
  const handleLogin = async (e) => {
    e.preventDefault();
    // Example dummy logic
    if (email === "admin@example.com" && password === "admin123") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  // Login Api call

  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your details to log in</p>

        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          
            
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ravi@gmail.com"
              type="text"
              className="border p-2 rounded w-full"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 8 characters"
              type="password"
              className="border p-2 rounded w-full"
            />
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type="submit" className='btn-primary'>
            LOGIN
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account?{" "}
            <Link className='font-medium text-primary underline' to="/signup">
            SignUp
            </Link>

          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
