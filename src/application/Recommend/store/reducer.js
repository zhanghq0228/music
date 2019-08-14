import { RECOMMEND_LIST } from './actionType'
const defaultState = {
  bannerList: [],
  recommendList: [],
  enterLoading: true
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case RECOMMEND_LIST:
      console.log(action.data)
      const { data } = action
      return {
        ...state,
        bannerList: data.slider,
        recommendList: data.radioList,
        enterLoading: false
      }
    default:
      return state
  }
}
