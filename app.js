const userDetails = async () =>{
try{
const res = await fetch('https://randomuser.me/api/');

const {picture: image, name : Name} = await res.json();


// const userProfile = document.querySelector(".user-profile");
const userImage = document.querySelector(".user-photo");
const userName = document.querySelector(".user-name");

userImage.innerHTML = image;
userName.textContent = Name;
}catch(e){
    console.log(e.message);
}

}