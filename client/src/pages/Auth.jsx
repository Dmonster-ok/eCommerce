import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const endpoint = isRegister ? "/users/register" : "/users/login";
        const body = isRegister ? { name, email, password } : { email, password };

        try {
            const response = await fetch('http://localhost:3000'+endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            // Ensure the response is JSON
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: "350px" }}>
                <h3 className="text-center mb-3">{isRegister ? "Register" : "Login"}</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    {isRegister && (
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">{isRegister ? "Register" : "Login"}</button>
                </form>
                <div className="text-center mt-3">
                    <button className="btn btn-link" onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
