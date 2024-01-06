import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'

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
export default function NestedRoute() {


    return (
        <fieldset style={{border: "1px black solid"}}>
            <legend>NestedRoute</legend>
            <BrowserRouter>

                <nav style={{ margin: 10 }}>
                    <Link to='/' style={{ padding: 5 }}>
                        Home
                    </Link>
                    <Link to='/posts' style={{ padding: 5 }}>
                        Blog
                    </Link>
                    <Link to='/about' style={{ padding: 5 }}>
                        About
                    </Link>
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NoMatch />} />

                    <Route path='/posts' element={<Posts />}>
                        <Route index element={<PostLists />}></Route>
                        <Route path=":slug" element={<Post />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </fieldset>

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

function Post(){
    const { slug } = useParams()
    const post = BlogPosts[slug]
    if(!post){
        return <span>The Plog Post you've requested doesn't exist</span>
    }
    const { title, description} =post
    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}


function Home() {
    return (
        <div>
            <h2>Home view</h2>
            <p>bla bla</p>
        </div>
    )
}
function About() {
    return (
        <div>
            <h2>About view</h2>
            <p>bla bla</p>
        </div>
    )
}

function NoMatch() {
    return (
        <div>
            <h2>404: Page Not Found</h2>
            <p>bla bla</p>
        </div>
    )
}