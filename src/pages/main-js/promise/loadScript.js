import { useState } from "react";

export default function LoadScript(params) {


    const [script, setScript] = useState('')

    function loadScript_(src) {
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error(`Script load error for ${src}`));
            document.getElementById("script").append(script);
        });
    }

    let promise = loadScript_("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

    promise.then(
        script => alert(`${script.src} is loaded!`),
        error => alert(`Error: ${error.message}`)
    );

    promise.then(script => alert('Another handler...'));


    return(
        <div id={"script"}>
            <h4>Load Script</h4>
            {
                script
            }
        </div>
    )
};




