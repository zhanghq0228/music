import apiMethod from './config'
export const getRecommend = () => {
  return apiMethod.getMthod('/recommend', '', '')
}
