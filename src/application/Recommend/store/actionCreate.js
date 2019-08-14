import * as actionType from './actionType'
import { getRecommend } from '../../../api/request'
const setRecommend = res => ({
  type: actionType.RECOMMEND_LIST,
  data: res.data.data
})

export const getRecommendList = () => {
  return dispatch => {
    getRecommend()
      .then(res => {
        dispatch(setRecommend(res))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
