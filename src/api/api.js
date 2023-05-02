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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
  },

  followUser(id) {
    return instance.post(`follow/${id}`).then(response => response.data.resultCode)
  },

  unFollowUser(id) {
    return instance.delete(`follow/${id}`).then(response => response.data.resultCode)
  }
}
