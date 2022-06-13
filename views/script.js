const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const apartment = document.querySelector("#apartment");
const password = document.querySelector("#password");
const button = document.querySelector("#btnCreate");
const root = document.querySelector("#root");

const listUsers = async()=>{
    try {
        const resposta = await fetch("http://localhost:3333/");
        const conteudo = await resposta.json();

        conteudo.forEach((user)=>{
            const div = document.createElement("div");
            div.innerHTML += `
            <p><strong>Nome: </strong>${user.name}</p>
            <p><strong>E-mail: </strong>${user.email}</p>
            <p><strong>Apartamento: </strong>${user.apartment}</p>
            <p><strong>Senha: </strong>${user.password}</p>
            <p><strong>Criado em: </strong>${user.createdAt}</p>
            <p><strong>Atualizado em: </strong>${user.updatedAt}</p>
            <hr>
            `;

            root.appendChild(div);
        })
        console.log(conteudo);
    } catch (error) {
        console.log(`Falha ao listar usuários\n: ${error}`);
    }
}

const createUser = async()=>{
    try {
        let raw = {
            name: nome.value,
            email: email.value,
            apartment: Number(apartment.value),
            password: password.value,
        }

        const reqOptions = {
            method: "POST",
            follow: "redirect",
            body: JSON.stringify(raw),
            headers: {
                "Content-type": "application/json"
            }
        }

        const resposta = await fetch("http://localhost:3333/", reqOptions);
        const conteudo = await resposta.json();
        window.location.href = "./index.html"
    } catch (error) {
        console.log(`Falha ao cadastrar usuário:\n ${error}`);
    }
}

button.onclick = (event)=>{
    event.preventDefault();
    createUser();
}

listUsers();