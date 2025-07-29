//Imports
import { useState } from "react";

function Login() {
    //States for user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
        //TO DO: Send login request to backend
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                {/* Password input */}
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                {/* Submit button */}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;