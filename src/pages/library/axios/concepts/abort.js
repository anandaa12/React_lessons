import axios from "axios"
import { useEffect } from "react"

export default function AbortReq(){


    useEffect(
        () =>
        {
            const abortController = new AbortController()
            const url = "https://6550c03a7d203ab6626e1bc5.mockapi.io/"

            const fetchUser = async () => {
                try {
                    const response = await axios.get(url, {signal: abortController.signal})
                    console.log(response)
                }catch (error) {
                    if(abortController.signal.aborted){
                        console.log('Data fetching cancelled')
                    }
                }
            }

            fetchUser()

            return () => abortController.abort('Data fetching cancelled')
        },
        []
    )

    return null
}