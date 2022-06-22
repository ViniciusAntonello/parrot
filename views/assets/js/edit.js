const BASE_URL = `http://localhost:3333`;
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkpswd = document.querySelector("#checkpswd");
const apartment = document.querySelector("#apartment");
const btnUpdate = document.querySelector("#create");
const btnDelete = document.querySelector("#remove");
const answer = document.querySelector("#answer");
const user_storage = localStorage.getItem("user");
const user = JSON.parse(user_storage);
const exit = document.querySelector("#getOut");

if(nome.value == "" || email.value == "" || password.value == "" || checkpswd.value == "" || apartment.value == ""){
    nome.value = user.name;
    email.value = user.email;
    password.value = user.password;
    checkpswd.value = user.password;
    apartment.value = user.apartment;

};

const updateUser = async () => {
    try {
        const user_data = {
            id: user.id,
            name: nome.value,
            email: email.value,
            password: password.value,
            apartment: +apartment.value
        }

        const requestOptions = {
            method: "PUT",
            body: JSON.stringify(user_data),
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        };

        const content = await fetch(`${BASE_URL}/update/${user.id}`, requestOptions);
        const result = await content.json();

        if(result == "Usuário atualizado com sucesso!"){
            localStorage.setItem("user", JSON.stringify(user_data));
            alert("Usuário atualizado com sucesso!");
            window.location = "./profile.html"
        }

        console.log(result);
    } catch (error) {
        console.log(error)
    }
};

const removeUser = async(id) => {
    try {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        };
if(confirm("Remover Usuário ?")){
        const content = await fetch(`${BASE_URL}/delete/${user.id}`, requestOptions);
        const result = await content.json();
        window.location = "./login.html";
        localStorage.clear();
        console.log(result)
        return;
}
    } catch (error) {
        console.log(error);
    }
};


btnUpdate.onclick = (event) => {
    event.preventDefault();
    updateUser();
};

btnDelete.onclick = (event) => {
    event.preventDefault();
    removeUser();
}



exit.onclick = (event) => {
    event.preventDefault();
    if(confirm("Deseja realmente sair ?")){
    localStorage.clear();
    window.location = "./login.html";
    }
  };