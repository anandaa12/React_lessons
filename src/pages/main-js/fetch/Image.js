

export default function ImageFetch(params) {



    // ================== Random Joke
    // Make a request for user.json
    fetch('https://dog.ceo/api/breeds/image/random')
        // Load it as json
        .then(response => {
            console.log(response)
            return response.json()
        })
        // rendering image
        .then(image => {
            let img = document.createElement('img');
            img.src = image.message;
            img.className = "promise-dog-image";
            img.width = '300'
            document.getElementById("imageFetch").append(img);
            return image
        }).then(image => {
            console.log(image)
            if (image.status == 'success') {
                // Random joke
                fetch('https://official-joke-api.appspot.com/random_joke')
                    .then(response => {
                        console.log(response)
                        return response.json()
                    })
                    .then(joke => {
                        let jokeQuestion = document.createElement('p')
                        let jokeAnswer = document.createElement('p')
                        jokeQuestion.textContent = "Q: " + joke.setup
                        jokeAnswer.textContent = "P: " + joke.punchline
                        document.getElementById("imageFetch").append(jokeQuestion);
                        document.getElementById("imageFetch").append(jokeAnswer);
                        console.log(joke)
                    })
            }
        })
    return (
        <div id="imageFetch">
            <h4>Image Fetch</h4>
        </div>
    )

};
