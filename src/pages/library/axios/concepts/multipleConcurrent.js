import axios from "axios";

const baseUrl = "https://6550c03a7d203ab6626e1bc5.mockapi.io/";

export default function multipleConcurrent() {
    const concurrentRequest = [
        axios.get(`${baseUrl}/users/1`),
        axios.get(`${baseUrl}/users/2`),
        axios.get(`${baseUrl}/users/3`),
    ];
    //Take note that the Promise.all method immediately rejects if one of the input Promises rejects
    Promise.all(concurrentRequest)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
    //Promise.allSettled waits for all input Promises to either reject or fulfill.
    //Then, you can check each response object’s fulfilled or rejected status.
    Promise.allSettled(concurrentRequest)
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });

    return <></>;
}
