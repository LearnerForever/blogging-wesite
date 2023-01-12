let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector('.login');
console.log('***login'+login.innerHTML);
const blogSection = document.querySelector('.blogs-section');

auth.onAuthStateChanged((user)=>{
    console.log('***user'+user);
    if(user){
        getUserWrittenBlogs();
        login.style.display = "none";
    }else{
        console.log('2');
        setupLoginButton();
    }
})

const setupLoginButton = ()=>{
    console.log('1111');
    ui.start("#loginUI",{
        callbacks:{
            
            signInSuccessWithAuthResult: function(authResult,redirectURL){
                login.style.display = "none";

                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
          ]
    })
}

//fetch user written blogs
const getUserWrittenBlogs = ()=>{
    db.collection("blogs").where("author","==", auth.currentUser.email.split('@')[0])
    .get()
    .then((blogs)=>{
        blogs.forEach((blog) => {
            createBlog(blog);
        })
    })
    .catch((error)=>{
        console.log("Error getting blogs");
    })
}

const createBlog = (blog)=>{
    let data = blog.data();
    console.log('data');
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
        <a href="/${blog.id}/editor" class="btn grey">edit</a>
        <a href="#" onclick="deleteBlog('${blog.id}')" class="btn danger">delete</a>
    </div>
    `;
}


const deleteBlog = (id)=>{
    db.collection("blogs").doc(id).delete().then(()=>{
        location.reload();
    })
    .catch((error)=>{
        console.log("Error deleting the blog");
    })
}
