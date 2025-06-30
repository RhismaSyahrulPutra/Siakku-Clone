import SignOn_Logo from "../assets/SignOn_Logo.svg";

// Components
import TooltipInfo from "../components/LoginPage/TooltipInfo";
import LoginForm from "../components/LoginPage/LoginForm";

function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-red-800 via-red-700 to-red-600 text-white flex flex-col items-center justify-center p-4">
      <img src={SignOn_Logo} alt="Single Sign-On Logo" className="w-96 mb-10" />

      <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-full max-w-sm relative">
        <TooltipInfo />

        <h2 className="text-lg font-bold mb-6 text-center">
          Enter Your NIM and Password
        </h2>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
