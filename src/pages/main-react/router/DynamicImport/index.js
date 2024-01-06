import { Suspense, lazy } from "react"

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

export default function DynamicImport() {
    return(
        <Suspense fallback={<div>Page is loading...</div>}>
            <section>
                <Home />
                <About />
            </section>
        </Suspense>
    )
};
