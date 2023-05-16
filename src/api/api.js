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
    console.warn('Obsolete method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },

  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },

  setUserStatus(status) {
    return instance.put(`profile/status`, { status })
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },

  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe })
  },

  logout() {
    return instance.delete('auth/login')
  }
}
