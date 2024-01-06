import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate, useParams, useNavigate } from "react-router-dom";

function Stats({ user }) {

    if (!user) {
        return (
            <Navigate to={'/login'} replace />
        )
    }

    return (
        <div style={{ padding: 10 }}>
            <h2>Stats View</h2>
            <p>Lorem ipsum</p>
        </div>
    )
}

function Login({ onLogin }) {
    const [creds, setCreds] = useState({})
    const navigate = useNavigate()

    function handleLogin() {

        if (creds.username === 'admin' && creds.password === '123') {
            onLogin && onLogin({ username: creds.name })
            navigate('/stats')
        }
    }


    return (
        <div style={{ padding: 10 }}>
            <br />

            <span>Username:</span>
            <br />
            <input
                type="text"
                onChange={(e) => setCreds({ ...creds, username: e.target.value })}
            />
            <br />
            <span>Password</span>
            <br />
            <input
                type="password"
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            />
            <br />
            <br />

            <button onClick={handleLogin}> Login</button>
        </div>
    )
}

function AppLayout() {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    function logOut() {
        setUser(null)
        navigate('/')
    }

    return (
        <>
            <nav style={{ margin: 10 }}>
                {user && <Link to="/stats" style={{ padding: 5 }}>
                    Stats
                </Link>}
                {!user && <Link to="/login" style={{ padding: 5 }}>
                    Login
                </Link>}
                {user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>
                    Logout
                </span>}
            </nav>
            <Routes>
                <Route path="/login" element={<Login onLogin={setUser} />} />
                {/* <Route path="/stats" element={<Stats user={user} />} /> */}

                <Route path="/stats" element={<ProtectedRoute user={user}> <Stats /> </ProtectedRoute>} />

            </Routes>

        </>
    )

}

export default AppLayout


function ProtectedRoute({ user, children }) {

    if (!user) {
        return (
            <Navigate to="/login" replace />
        );
    }
    return children;
}