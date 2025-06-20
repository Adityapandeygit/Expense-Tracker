import React, { useState } from 'react';
import AuthLayout from '../../components/layout/authLayout';
import { Link,useNavigate } from "react-router-dom";
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !fullName) {
      setError("Please fill all fields.");
      return;
    }
    setError("");
    //SignUp Api call
  };

  return (
    <AuthLayout>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-full max-w-2xl px-8 py-10 rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl font-bold text-black mb-1">Create an Account</h2>
          <p className="text-sm text-slate-600 mb-6">Join us today by entering your details below.</p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center">
              <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="John"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
              <input
                type="password"
                placeholder="Min 8 Characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            </div>

          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type="submit" className='btn-primary'>
            SIGN UP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className='font-medium text-primary underline' to="/login">
            Login
            </Link>

          </p>
            
          </form>
        </div>
        
      </div>
    </AuthLayout>
  );
};

export default SignUp;
