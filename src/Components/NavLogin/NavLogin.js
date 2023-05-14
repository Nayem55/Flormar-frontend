import { useEffect } from "react";
import "./NavLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const NavLogin = ({ userLogin, handleUserLogin }) => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);


  if (loading) {
    return;
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
    handleUserLogin(false);
    setTimeout(()=>window.location.reload(),2000)
  };
  return (
    <div
      className={`transition-all top-0 duration-300ms ease-in-out nav-login ${
        userLogin ? "right-0 " : "right-[-500px]"
      } fixed bg-primary w-[330px]  h-[100vh] mb-20 `}
    >
      <div
        className="close-button absolute right-4 top-4"
        onClick={() => handleUserLogin(false)}
      >
        <FontAwesomeIcon icon={faXmark} className="inline mr-2 text-md text-[#000000d0]" />
        <p className="inline text-md text-[#000000d0]">CLOSE</p>
      </div>
      <div className="mt-14 mb-6">
        <p className="text-lg mt-4 font-bold customer-login w-[85%] mx-auto">CUSTOMER LOGIN:</p>
      </div>


      <div className={`w-[85%] mx-auto`}>
        <form onSubmit={handleSignup}>
          <div className={`mb-4 ${user?"hidden":""}`}>
            <p className="text-[14px] font-semibold mb-2 text-[#000000d0]">Email Address</p>
            <input
              type="email"
              className="border px-3 border-secondary border-opacity-50 w-full "
              name="email" placeholder="Email Address"
            />
          </div>
          <div className={`mb-4 ${user?"hidden":""}`}>
            <p className="text-[14px] font-semibold mb-2 text-[#000000d0]">Password</p>
            <input
              type="password"
              className="border px-3 border-secondary border-opacity-50  w-full"
              name="password" placeholder="Password"
            />
          </div>
          <p className="text-error mb-3 font-bold">{error?.message}</p>
          <input
            type="submit"
            value="LOGIN"
            className={`${user?"hidden":""} w-full flex justify-center items-center cursor-pointer y h-[30px] text-xs font-bold nav-login-button`}
          />
          <p className={`${user?"hidden":""} text-[14px] font-semibold my-4  text-center`}>
            Dont have an account ?
            <Link to="/signup" onClick={()=>handleUserLogin(false)} className="text-accent mx-2 font-bold">
              Signup
            </Link>
          </p>
        </form>
        <button onClick={()=>signOut(auth)} className={`${user?"":"hidden"} w-full flex justify-center items-center cursor-pointer y h-[30px] text-xs font-bold border border-secondary`}>LOGOUT</button>
      </div>
    </div>
  );
};

export default NavLogin;
