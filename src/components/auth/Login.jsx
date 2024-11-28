import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/authSlice";

function Login() {
    const [login, { isLoading: loginLoading }] = useLoginMutation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            navigate("/inbox");
        }
    }, [token, navigate]); 

    async function loginAttempt(event) {
        event.preventDefault();
        
        try {
            setError(null); 
            const userData = { username, password };
            await login(userData).unwrap();
            navigate("/inbox");
        } catch (e) {
            console.error(e);
            setError(e);
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
                <button type="submit" disabled={loginLoading}>
                    { loginLoading ? "Login in to account..." : "Login" }
                </button>
            </form>
        </section>
    ); 
} 
export default Login;






