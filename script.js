var cardsDiv = document.querySelector("#cards"); // access cards class so we can replace that part on webpage after we got coder's info

var currentUsername = "";

function getUsername(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function makeCoderCard(data) {
    // access API's object key
    var res =   `<div class="cards">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div class="flex-1">
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res; // return your response
}

async function search() {
    var response = await fetch('https://api.github.com/users/' + currentUsername);
    var coderData = await response.json();
    // console.log(coderData);
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML; // update the cards class and add new search on top 

}