import { useState } from "react";
import { useRegisterMutation } from "../../services/authSlice";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [register, { isLoading: registerLoading }] = useRegisterMutation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState();

    async function registerAttempt(event) {
        event.preventDefault();

        try {

            if (password !== password2) {
                setError("Passwords do not match");
                return;
            }

            setError(null);
            const userData = {
                username,
                password
            };
            await register(userData).unwrap();

            navigate("/users/me");
            
        } catch (e) {
            console.error(e); 
            setError(e);
        }

    }

    return (
        <section>
            <form onSubmit={registerAttempt}>
                <h1>Login</h1>
                <label>
                    Username
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter you username." required/>
                </label>
                <label>
                    Password
                    <input  type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter you password." required/>
                </label>
                <label>
                    re enter password
                    <input  type="password" value={password2} onChange={(event) => setPassword2(event.target.value)} placeholder="Re Enter you password." required/>
                </label>
                <button className="positive-action" type="submit" disabled={registerLoading}>
                    {registerLoading ? "Creating Account..." : "Create Account"}
                </button>
            </form>
        </section>
    ); 
} 
export default Register;