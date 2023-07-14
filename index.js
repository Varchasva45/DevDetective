const btnsubmit = document.querySelector(".btn-search");
const searchInput = document.querySelector("[data-searchInput]");
const url = "https://api.github.com/users/";
const btnMode = document.querySelector(".btn-mode");
const avatar = document.getElementById("avatar");
const userName = document.getElementById("name");
const user = document.getElementById("user");
const date = document.getElementById("date");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const city = document.getElementById("location");
const website = document.getElementById("website");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");

let darkMode = false;


// fetches user info when submit is clicked
btnsubmit.addEventListener("click", () => {
    if(searchInput.value != ""){
        getUserData(url + searchInput.value);
    }
});


// fetches user info when enter is pressed
searchInput.addEventListener(
    "keydown",
  function (e) {
    if (e.key == "Enter") {
      if (input.value !== "") {
        getUserData(url + input.value);
      }
    }
  },
  false
);


// API call
async function getUserData(gitUrl){
    try{
        const res = await fetch(gitUrl);
        const data = await res.json();
        console.log(data);
        updateProfile(data);
    }
    catch(err){

    }
}

function updateProfile(data) {
    if(data?.message !== "Not Found"){
        avatar.src = data?.avatar_url;
        userName.innerText = data?.name;
        user.innerText = `@${data?.login}`;
        user.href = data?.html_url;
        bio.innerText = `${data?.bio}`;
        repos.innerText = data?.public_repos;
        followers.innerText = data?.followers;
        following.innerText = data?.following;
        location.innerText = `${data?.location}`;
        city.innerText = data?.location;
        website.href = data?.blog;
        twitter.href = "https://twitter.com/ " + data?.twitter_username;
        twitter.innerText = data?.twitter_username;
        company.innerText = data?.company;
    }else{

    }
}

btnMode.addEventListener("click", () => {
    if(darkMode == false){
        darkModeProperties();
    }else{
        lightModeProperties();
    }
})


function darkModeProperties() {

}

function lightModeProperties() {

}


// initialise UI 

function init() {

}


