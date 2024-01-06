import { useEffect, useState } from "react"


export default function Parent() {

    const [state, setState] = useState(false)

    useEffect(
        () =>
        {
            console.log('parent effect run ')
            return () => {
                console.log('return parent')
            }
        },
        []
    )

    return (
        <>
            <h2>Parent Component</h2>
            {
                state ? <Child /> : null
            }
            <button
                onClick={() => setState(!state)}
            >
                toggle child
            </button>

        </>
    )
}

export function Child() {

    useEffect(
        () =>
        {
            // console.log('child effect run')
            return () => {
                console.log('child comp hidden')
                console.log('unmount')
            }
        },
        []
    )

    return(
        <>
            <h4>Child Component</h4>
        </>
    )
}