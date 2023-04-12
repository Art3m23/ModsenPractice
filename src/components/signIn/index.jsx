import { useGoogleLogin } from '@react-oauth/google';
import styles from './style.module.css'

export const SignIn = ({ setToken }) => {
  const handleClick = useGoogleLogin({
    onSuccess: codeResponse => {
      localStorage.setItem('token', JSON.stringify(codeResponse));
      setToken(codeResponse);
    },
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
  });

  return (
    <div className={styles.modal}>
      <div>
        <h2 className={styles.title}>Weather App</h2>
        <button type="button" onClick={() => handleClick()} className={styles.sign_in}>Sign in</button>
      </div>
    </div>
  );
}