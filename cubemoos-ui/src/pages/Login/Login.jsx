import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import loginImg from "../../assets/images/login.png";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/account"); // login ke baad
    } catch (err) {
      console.log(err);
      alert("Google login failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={loginImg} alt="Login" />
      </div>

      <div className={styles.right}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>

        <input type="text" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />

        <button className={styles.googleBtn} onClick={handleGoogleLogin}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
