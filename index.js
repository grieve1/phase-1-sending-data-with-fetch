function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(data => {
        const newId = data.id;
        const userDiv = document.createElement("div");
        userDiv.textContent = newId;
        document.body.appendChild(userDiv);
    })
    .catch(error => {
        const errorDiv = document.createElement("div");
        errorDiv.textContent = error.message;
        document.body.appendChild(errorDiv);
    });
}