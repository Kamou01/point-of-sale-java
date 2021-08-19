fetch("")
    .then(response => response.json())
    .then(data => data, {
        console.log(data)
    })