export default function E_1(params) {


    let promise = new Promise(function (resolve, reject) {
        // executor (the production code, "singer")
        console.log('run')
    })

    let promise_1 = new Promise(function (resolve, reject) {
        // the function is executed automatically when the promise is constructed

        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve("done"), 1000);
    });

    promise_1.then(
        result => console.log(result),
        error => console.log(error)
    )

    new Promise((resolve, reject) => {
        /* do something that takes time, and then call resolve or maybe reject */
    })
    // runs when the promise is settled, doesn't matter successfully or not
    // .finally(() => stop loading indicator)
    // so the loading indicator is always stopped before we go on
    // .then(result => show result, err => show error)

    return (
        <>
            <h4>E 1</h4>
        </>
    )
};
