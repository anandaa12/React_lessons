import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainReact from '../pages/main-react/'

import MainJS from '../pages/main-js'
import Library from '../pages/library'
import ReactConcepts from '../pages/concepts'


export default function Router(params) {


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/main-react" element={<MainReact />} />
                <Route path="/main-js" element={<MainJS />} />
                <Route path="/library" element={<Library />} />
                <Route path="/react-concepts" element={<ReactConcepts />} />
            </Routes>
        </BrowserRouter>
    )
};
