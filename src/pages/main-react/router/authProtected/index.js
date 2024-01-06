import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"

import Home from './pages/Home'
import Login from './pages/Login'
import { AuthProvider } from "./hook/useAuth"


export default function AuthProtectedApp() {

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

// https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/