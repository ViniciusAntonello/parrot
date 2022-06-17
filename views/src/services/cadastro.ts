import baseUrl from "./config";

interface Cadastro {
    name: string,
    email: string,
    password: string,
    apartment: number
}

export const cadastroUsuario = async (cadastro: Cadastro) => {
    const body = JSON.stringify(cadastro)
    const jsonData = JSON.parse(body)
    try {
        const response =  await baseUrl.post('/create', jsonData)
        return response.data
    } catch (error) {
        throw new Error('Não foi possível realizar o cadastro!')
    }
}