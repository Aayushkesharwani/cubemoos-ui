import styles from "./Signup.module.css";
import signupImg from "../../assets/images/signup.jpg";
import googleIcon from "../../assets/images/google.png";
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img src={signupImg} alt="signup" />
      </div>

      <div className={styles.right}>
        <h2>Create an account</h2>
        <p>Enter your details below</p>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />

        <button className={styles.createBtn}>Create Account</button>

        <button className={styles.googleBtn}>
          <img src={googleIcon} alt="google" />
          Sign up with Google
        </button>

        <p>
         Already have an account?{" "}
        <Link to="/login" className={styles.loginLink}>
         Login
         </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
