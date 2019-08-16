import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreate'
import Slider from '../../components/slider/index'
import Scroll from '../../components/scroll/index'
function Recommend(props) {
  console.log(props)
  const { getBannerDispatch } = props
  const { recommend } = props
  useEffect(() => {
    if (!recommend.bannerList.length) {
      getBannerDispatch()
    }
  })
  return (
    <Scroll className="list">
      <div>
        <Slider recommend={recommend} />
      </div>
    </Scroll>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getBannerDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}
export default connect(
  state => {
    return {
      recommend: state.recommend
    }
  },
  mapDispatchToProps
)(Recommend)
