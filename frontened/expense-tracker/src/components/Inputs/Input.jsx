import React , {useState} from 'react'
import { FaRegEye , FaRegEyeSlash} from "react-icons/fa-6";
const Input = ({valus,onChange , placeholder , label,type}) => {
    const [showPasswprd ,setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPasswprd);
    };
  return (
    <div>
        <label className="text-[13px] text-slate-800">{label}</label>

        <div className="input-box">
            <input 
            type={type=='password' ? showPassword ? 'text' : 'password' : type} />
            placeholder={placeholder}
            className="w-full bg-transparent outline-none"
            onChange={(e) => onChange(e)}

            {type === "Password" && (
                <>
                {showPassword ?(
                    <FaRegEye
                    size={22}
                    className="text-slate-400 cursor-pointer" 
                    onClick={() => toggleShowPassword()}
                    />
                ) : (
                    <FaRegEyeSlash
                    size={22}
                    className="text-slate-400 cursor-pointer" 
                    onClick={() => toggleShowPassword()}
                    />
                
                )}
                </>
            )}
        </div>
    </div>
  )
}

export default Input