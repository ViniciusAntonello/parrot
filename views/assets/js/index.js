const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.querySelector("#login");
const BASE_URL = "http://localhost:3333";
const user_storage = localStorage.getItem("user");
const user = JSON.parse(user_storage);
const answer = document.querySelector("#answer");

const getIn = async () => {
    await localStorage.clear();
  try {
    const user_data = {
      email: email.value,
      password: password.value,
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(user_data),
      headers: {
        "Content-type": "application/json",
        user: user_data,
      },
    };

    const content = await fetch(`${BASE_URL}/login`, requestOptions);
    const result = await content.json();
    console.log(result)
    if (
      result === "Email ou senha inválidos" ||
      result === "Usuário não cadastrado!"
    ) {
        answer.innerHTML = `Usuário ou senha inválidos!`;
        answer.style.color = "red";
        return;
    }



    localStorage.setItem("token", result[0]);
    localStorage.setItem("user", JSON.stringify(result[1]));
    window.location = "./feed.html";

    console.log()

  } catch (error) {
    console.log(`error`);

  }
};

login.onclick = (event) => {
  event.preventDefault();
  if (!email.value || !password.value) {
    alert("Preencha os dados corretamente!");
    return;
  }
  getIn();
};
