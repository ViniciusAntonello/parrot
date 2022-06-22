const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkpswd = document.querySelector("#checkpswd");
const apartment = document.querySelector("#apartment");
const answer = document.querySelector("#answer");
const btnCreate = document.querySelector("#create");
const BASE_URL = "http://localhost:3333";

const createUser = async () => {
  if (
    !nome.value ||
    !email.value ||
    !password.value ||
    !checkpswd.value ||
    !apartment.value ||
    password.value != checkpswd.value
  ) {
    answer.style.color = "red";
    answer.innerHTML = `Preencha os dados corretamente e tente novamente!`;
    return;
  }

  try {
    const user_data = {
      name: nome.value,
      email: email.value,
      password: password.value,
      apartment: apartment.value,
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(user_data),
      headers: {
        "content-type": "application/json",
      },
    };

    const content = await fetch(`${BASE_URL}/create`, requestOptions);
    const result = await content.json();

    if (result == `E-mail já cadastrado!`) {
      answer.innerHTML = result;
      answer.style.color = "red";
      return;
    }
    localStorage.clear();

    alert(`Usuário cadastrado com sucesso!`);
    window.location = "./login.html";
  } catch (error) {
    console.log(error);
    answer.innerHTML = `${result}`;
  }
};

btnCreate.onclick = (event) => {
  event.preventDefault();
  createUser();
};
