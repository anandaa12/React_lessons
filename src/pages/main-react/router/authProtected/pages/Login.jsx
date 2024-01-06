import React from "react"
import { useAuth } from "../hook/useAuth";

export default function Login() {

    const { login } = useAuth()

    function handleLogin(event) {
        event.preventDefault()

        const formData = new FormData(event.target);
        // Access form data using FormData methods
        const username = formData.get('username');
        const password = formData.get('password');

        login(username)
    }

    return (
        <div style={{ width: "300px", margin: "auto" }}>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="username">Нэвтрэх нэр:</label>
                <input type="text" name="username" />
                <label htmlFor="password">Нууц үг:</label>
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Нэвтрэх" />
            </form>

        </div>
    )
}