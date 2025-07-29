//Imports
import { useState } from "react";

function Register() {
    //States for user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //Check if passwords match
        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log('Register:', { email, password });
        //TO DO: Send registration request to backend
    };

    return (
        <div>
            <h2>Register</h2>
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
                {/* Confirm password input */}
                <div>
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>
                {/* Submit button */}
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;