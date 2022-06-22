const nome = document.querySelector(".name");
const name_user = document.querySelector("#name_user");
const ape = document.querySelector(".ape");
const email = document.querySelector(".email");
const answer = document.querySelector(".answer");
const posts = document.querySelector("#publications");
const loading = document.querySelector(".loading");
const exit = document.querySelector("#getOut");
const user_storage = localStorage.getItem("user");
const user = JSON.parse(user_storage);
const BASE_URL = "http://localhost:3333";
const token = localStorage.getItem("token");

name_user.innerHTML = user.name;

if(!token){
  localStorage.clear();
  window.location = "./login.html";
}

const getUser = async() => {
    try {
        nome.innerHTML = user.name;
        ape.innerHTML += user.apartment;
        email.innerHTML = user.email;
    } catch (error) {
        console.log(error);
        window.location = "./login.html"
    }
}

const removePost = async(id) => {
    try {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        };
if(confirm("Remover publicação ?")){
        const content = await fetch(`${BASE_URL}/post/remove/${id}`, requestOptions);
        const result = await content.json();
        window.location = "./profile.html";
        return;
}
    } catch (error) {
        console.log(error);
    }
}

const getPostsUser = async() => {

    try {
        const requestOptions = {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        };

        const content = await fetch(`${BASE_URL}/user/${user.id}`, requestOptions);
        const result = await content.json();

        console.log(result);

        if(result.publications.length == 0){
            answer.innerHTML = `Você não fez nenhuma publicação ainda!`;
            loading.style.display = "none";
            return;
        }

        result.publications.reverse().forEach((post)=>{

            const section = document.createElement("section");
            section.classList.add("post");
      
            section.innerHTML = `
                  <section>
                              <img src="../assets/img/user.png" alt="user">
                          </section>
      
                          <section class="user_data">
                              <section class="date">
                                  <h4 class="name">${user.name} - apê ${
              user.apartment}</h4>
                                  <p class="day">${new Date(
                                    post.createdAt
                                  ).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}</p>
                              </section>
                              <p>${post.content}</p>
                          </section>
                          <section><button class="remove" onclick="removePost(${post.id})"> X </button></section>
                  `;
            posts.appendChild(section);
        });

        loading.style.display = "none";
    
    } catch (error) {
        console.log(error);
    }
}

getUser();
getPostsUser();

exit.onclick = (event) => {
    event.preventDefault();
    if(confirm("Deseja realmente sair ?")){
    localStorage.clear();
    window.location = "./login.html";
    }
  };

