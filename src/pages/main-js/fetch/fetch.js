export default function Fetch(params) {
    fetch('https://catfact.ninja/fact')
        // .then below runs when the remote server responds
        .then(function (response) {
            // response.text() returns a new promise that resolves with the full response text
            // when it loads
            console.log(response)
            return response.json();
        })
        .then(function (json) {
            // ...and here's the content of the remote file
            console.table(json); // {"name": "iliakan", "isAdmin": true}
        });
    // same as above, but response.json() parses the remote content as JSON
    fetch('https://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(responseData => console.log(responseData));



    return (
        <>
            <h4>Fetch</h4>
        </>
    )

};
