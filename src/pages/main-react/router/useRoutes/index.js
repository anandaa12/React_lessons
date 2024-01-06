import { BrowserRouter, useRoutes, Link, Outlet, useParams } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/404'
import Post from "./pages/Post";

const BlogPosts = {
    'first-blog-post': {
        title: 'First Blog Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    'second-blog-post': {
        title: 'Second Blog Post',
        description: 'Hello React Router v6'
    }
}

export default function UseRoutes(){
    function Routes(){
        const element = useRoutes(
            [
                {
                    path: "/", element: <Home />
                },
                {
                    path: "/posts",
                    element: <Posts />,
                    children: [
                        {
                            index: true, element: <PostLists />
                        },
                        {
                            path: ":slug", element: <Post />
                        }
                    ],
                },
                {
                    path: "/about", element: <About />
                },
                {
                    path: "*", element: <NoMatch />
                }
            ],
        )
        return element
    }

    return(
        <BrowserRouter>
            <nav style={{ margin: 10}}>
                <Link to="/" style={{padding: 5}}>
                    Home
                </Link>
                <Link to="/posts" style={{padding: 5}}>
                    Posts
                </Link>
                <Link to="about" style={{padding: 5}}>
                    About
                </Link>
            </nav>

            <Routes />

        </BrowserRouter>
    )

}

function Posts() {
    return (
        <div>
            <h2>Blogg</h2>
            <Outlet />
        </div>
    )
}

function PostLists() {

    return (
        <ul>
            {
                Object.entries(BlogPosts).map(([slug, { title }]) => (
                    <li key={slug}>
                        <Link to={`/posts/${slug}`}>
                            <h3>{title}</h3>
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}


