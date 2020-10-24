import axios from 'axios'

const success = res => res
const error = err => {
    if(401 === err.response.status) {
        window.location = '/'
    } else {
        return Promise.reject(err)
    }
}

// Esse módulo inteiro foi construído para tratar o erro quando o token expira e
// o usuário está navegando na aplicação.
// A parte abaixo foi cadastrada para interceptar todos os usos do axios e chamar
// as funções construídas acima.
axios.interceptors.response.use(success, error)