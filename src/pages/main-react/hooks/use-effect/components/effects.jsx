import React, { useEffect, useState} from "react";
import axios from "axios";

export default function Effect(){

    const [state, setState] = useState(0)

    // useEffect(
    //     () =>
    //     {
    //         console.log('component did mount')
    //     },
    //     []
    // )

    // useEffect(
    //     () =>
    //     {
    //         // without dependency
    //         console.log('run every change')
    //     }
    // )

    // useEffect(
    //     () =>
    //     {
    //         console.log('dependency change')
    //     },
    //     [state]
    // )

    //  useEffect(
    //     () =>
    //     {
    //         console.log('effect run')

    //         return () => {
    //             console.log('return run')
    //         }

    //     },
    //     []
    // )

    useEffect(() => {

        console.log('effect')
        // set our variable to true
        let isApiSubscribed = true;
        axios.get("https://6550c03a7d203ab6626e1bc5.mockapi.io/users").then((response) => {
            if (isApiSubscribed) {
                // handle success
                console.log("response")
            }
        }).catch((err) => {
            console.log(err)
        });
        return () => {
            console.log('cleanup')
            // cancel the subscription
            isApiSubscribed = false;
            console.log(isApiSubscribed)
        };
    }, []);

    return(
        <>
            <label htmlFor="">Button</label>
            <br />
            <input type="button" value="click" onClick={() => setState(prev => prev+1)} />
        </>
    )
}