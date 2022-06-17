import baseUrl from "./config";

interface Login {
    email: string;
    password: string;
}

export const loginUsuario = async (login: Login) => {
    try {
        const response =  await baseUrl.post('/login', login)
        console.log(response)
        return response
    } catch (error) {
        throw new Error('Não foi possível realizar o login!')
    }
}