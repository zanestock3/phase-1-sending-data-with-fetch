const body = document.getElementsByTagName("body")[0];

function submitData(firstName, email) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": firstName,
            "email": email
        })
    };
    return fetch ("http://localhost:3000/users", configObj)
    .then(res => res.json())
    .then(body => addNewContact(body.id))

    .catch(function(error){
        alert("Unauthorized Access");
    })
}
submitData("Name", "name@name.com");