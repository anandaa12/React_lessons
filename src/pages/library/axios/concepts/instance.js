import axios from "axios"
import { useEffect, useState } from "react";

const baseUrl = "https://6550c03a7d203ab6626e1bc5.mockapi.io/";


export default function AxiosInstance(){
    const axiosInstance = axios.create({baseURL: baseUrl})

    // axiosInstance.get('/users/').then((response) => console.log(response.data))

    const [data, setData] =useState()


    const NewInstance = axios.create({
        //Configuration
        baseURL: baseUrl,
        // timeout: 5000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": 'application/json',
        }
    })
    // NewInstance.interceptors.response.use((config) => console.log(config))
    // NewInstance.get('/users/')

    const fetchUser = async () => {

        try {
            const response = await NewInstance.get('/users/')
            console.log(response)

        } catch (error) {
            console.log('error')
        }
        // if(response){
        //     console.log("response irsen")
        // }
    }

    useEffect(
        ()=>
        {
            fetchUser()
        },
        []
    )

    return(
        <div>
            <h1>instance</h1>
            {
                data?.map(val => (<p key={val.id}>{val?.name}</p>))
            }
        </div>
    )
}
