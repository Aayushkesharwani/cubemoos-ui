import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p className={styles.breadcrumb}>Home / 404 Error</p>

      <h1 className={styles.title}>404 Not Found</h1>

      <p className={styles.subtitle}>
        Your visited page not found. You may go home page.
      </p>

      <button
        className={styles.btn}
        onClick={() => navigate("/")}
      >
        Back to home page
      </button>
    </div>
  );
};

export default NotFound;
