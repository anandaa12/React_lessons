import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import MainReact from '../pages/main-react/'

import MainJS from '../pages/main-js'
import Library from '../pages/library'
import ReactConcepts from '../pages/concepts'



export default function Router() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Navigate replace to="main-react" />
                    }
                    />
                    <Route path="/main-react" element={<MainReact />} />
                    <Route path="/main-js" element={<MainJS />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/react-concepts" element={<ReactConcepts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};
