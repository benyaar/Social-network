import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {"API-KEY": "9be0bca5-90d8-40b7-82f3-b01f74115317"},

})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }, follow(userId) {
        return instance.post(`follow/${userId}`)
    }, unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }, getProfile() {
        return instance.get(`profile/2`)
    },
}

export const authAPI = {
    me (){
        return  instance.get(`auth/me`)
    }
}