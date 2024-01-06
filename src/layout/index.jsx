import { Link } from "react-router-dom"


export default function Layout({ children }) {

    return (
        <>
            <header className="w-100" style={{height: "70px",backgroundColor: "#edede9"}}>
                <nav className="d-flex justify-content-center align-items-center" style={{ height: "100%"}}>
                    <a href="main-js" className="p-1 text-dark" >
                        Main JS
                    </a>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </>
    )
};
