let ul = document.querySelector('.links-container');
console.log('**ul'+JSON.stringify(ul));

auth.onAuthStateChanged((user)=>{
    console.log('**user'+JSON.stringify(user));
    if(user){
        //user is loggin
        ul.innerHTML +=`
        <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
        <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Logout</a></li>
        `;
        console.log('**ul'+JSON.stringify(ul));
    }else{
        //no one is logged in
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Login</a></li>
        `
    }
})