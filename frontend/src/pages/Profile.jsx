import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/auth");
        }
    });
    return (
        <>
            <h1>Profile</h1>
            <p>Profile page content</p>
        </>
    );
}

export default Profile;