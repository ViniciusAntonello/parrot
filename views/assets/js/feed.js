const BASE_URL = `http://localhost:3333`;
const name_user = document.querySelector("#name_user");
const posts = document.querySelector("#publications");
const message = document.querySelector("#message");
const user_storage = localStorage.getItem("user");
const user = JSON.parse(user_storage);
const btnPublicate = document.querySelector("#publicate");
const loading = document.querySelector(".loading");
const exit = document.querySelector("#getOut");
const answer = document.querySelector(".answer");

token = localStorage.getItem("token");

if(!token){
  localStorage.clear();
  window.location = "./login.html";
}

const getFeed = async () => {

  name_user.innerHTML = `Olá, ${user.name} |`;

  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const content = await fetch(`${BASE_URL}/posts`, requestOptions);
    const result = await content.json();

    if (result.length == 0) {
      answer.innerHTML = `Nehuma publicação ainda!`;
      loading.style.display = "none";
      return;
    }

    result.reverse().forEach((post) => {
      const section = document.createElement("section");
      section.classList.add("post");

      section.innerHTML = `
            <section>
                        <img src="../assets/img/user.png" alt="user">
                    </section>

                    <section class="user_data">
                        <section class="date">
                            <p class="name">${post.publications.name} - apê ${post.publications.apartment}</p>
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
            `;
      posts.appendChild(section);
    });

    loading.style.display = "none";
  } catch (error) {
    console.log(error);
    window.location = "./login.html";
  }
};

const sendPost = async () => {
  if (!message.value) {
    return alert("Preencha os campos corretamente e tente novamente!");
  }

  try {
    const user_data = {
      user_id: user.id,
      content: message.value,
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(user_data),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const content = await fetch(`${BASE_URL}/post`, requestOptions);
    const result = await content.json();

    window.location = `./feed.html`;
  } catch (error) {
    console.log(error);

  }
};

getFeed();

btnPublicate.onclick = (event) => {
  event.preventDefault();
  sendPost();
};

exit.onclick = (event) => {
  event.preventDefault();
  if(confirm("Deseja realmente sair ?")){
  localStorage.clear();
  window.location = "./login.html";
  }
};
