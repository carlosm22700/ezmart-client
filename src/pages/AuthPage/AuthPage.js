import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO: Submit the form to server to authenticate the user

        
    };


    return (
        //create form that will submit to server when button is clicked
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // on change, set the username to the value of the input
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // on change, set the password to the value of the input
            />
            <button type="submit">Login</button>
        </form>
    )
}
