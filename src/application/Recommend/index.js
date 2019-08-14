import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreate'
function Recommend(props) {
  console.log(props)
  const { getBannerDispatch } = props
  const { recommend } = props
  useEffect(() => {
    getBannerDispatch()
  }, [getBannerDispatch])
  return <div />
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
