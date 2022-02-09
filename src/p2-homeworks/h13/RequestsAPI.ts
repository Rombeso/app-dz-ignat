import axios from "axios";

const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/`
})

export const API = {
    post(success: boolean) {
        const promise = instance.post('test', {
            success: success
        })
        return promise
    }
}