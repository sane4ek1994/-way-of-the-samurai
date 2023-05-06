import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '6af0ecdb-9076-4ada-b256-5e2ede0d750f'
  }
})

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },

  followUser(id) {
    return instance.post(`follow/${id}`)
  },

  unFollowUser(id) {
    return instance.delete(`follow/${id}`)
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}
