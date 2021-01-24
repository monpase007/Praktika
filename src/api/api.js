import * as axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '10987f61-2b92-444b-9edb-5d305a5cf845'
    }
});

export const userAPI = {
    getUser(sizePage, currentPage) {
        return instans.get(`users?count=${sizePage}&page=${currentPage}`)
            .then(request => request.data)
    },
    getFriends(sizePage, currentPage) {
        return instans.get(`users?count=${sizePage}&page=${currentPage}&friend${true}`)
            .then(request => request.data)
    }
};
export const followAPI = {
    follow(userId) {
        return instans.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instans.delete(`follow/${userId}`)
    },
};
export const AuthAPI = {
    auth() {
        return instans.get('auth/me')
    },
    login(email, password, rememberMe, captcha) {
        return instans.post('auth/login', {email, password, rememberMe, captcha});
    },
    logout() {
        return instans.delete('auth/login');
    },
    captcha() {
        return instans.get('security/get-captcha-url');
    }

};
export const ProfileAPI = {
    viewUserProfile(userId) {
        return instans.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instans.get(`profile/status/${userId}`)
    },
    setStatus(status) {
        return instans.put(`profile/status/`, {status: status})
    }
};