import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/authSlice";

function Login() {
    const [login, { isLoading: loginLoading }] = useLoginMutation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function loginAttempt(event) {
        event.preventDefault();
        
        try {
            setError(null); 
            const userData = { username, password };
            await login(userData).unwrap();
            navigate("/");
        } catch (e) {
            console.error(errorMessage);
            setError(errorMessage);
        }
    }

    return (
        <section>
            <form onSubmit={loginAttempt}>
                <h1>Login</h1>
                <label>
                    Username
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter you username." required/>
                </label>
                <label>
                    Password
                    <input  type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter you password." required/>
                </label>
                <button className="positive-action" type="submit" disabled={loginLoading}>
                    { loginLoading ? "Login in to account..." : "Login" }
                </button>
            </form>
        </section>
    ); 
} 
export default Login;






