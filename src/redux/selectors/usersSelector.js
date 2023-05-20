import { createSelector } from 'reselect'

const getUsersListSelector = state => {
  return state.usersReducer.users
}

export const getUsersList = createSelector(getUsersListSelector, users => {
  return users.filter(u => true)
})

export const getPageSize = state => {
  return state.usersReducer.pageSize
}

export const getTotalUsersCount = state => {
  return state.usersReducer.totalUsersCount
}

export const getCurrentPage = state => {
  return state.usersReducer.currentPage
}

export const getIsFetching = state => {
  return state.usersReducer.isFetching
}

export const getFollowingInProgress = state => {
  return state.usersReducer.followingInProgress
}
