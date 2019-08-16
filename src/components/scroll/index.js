// import React, {
//   forwardRef,
//   useImperativeHandle,
//   useEffect,
//   useRef,
//   useState
// } from 'react'
// import Bscroll from 'better-scroll'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'

// const ScrollContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `
// const Scroll = forwardRef((props, ref) => {
//   const [bScroll, setBScroll] = useState
//   const { refresh } = props
//   const scrollContaninerRef = useRef()
//   console.log(props)
//   useEffect(() => {
//     if (bScroll) return
//     const scroll = new Bscroll(scrollContaninerRef.current, {
//       scrollX: true,
//       probeType: 3,
//       click: true,
//       bounce: {
//         top: true,
//         bottom: true
//       }
//     })
//     setBScroll(scroll)

//     if (refresh) {
//       scroll.refresh()
//     }
//   }, [])

//   useEffect(() => {
//     if (refresh && bScroll) {
//       bScroll.refresh()
//     }
//   })
//   useImperativeHandle(ref, () => ({
//     refresh() {
//       if (bScroll) {
//         bScroll.refresh()
//       }
//     }
//   }))
//   return (
//     <ScrollContainer ref={scrollContaninerRef}>
//       {props.children}
//     </ScrollContainer>
//   )
// })

// Scroll.propTypes = {
//   // click: true,
//   refresh: true
// }
// Scroll.propTypes = {
//   refresh: PropTypes.bool
// }
// export default React.memo(Scroll)
import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle
} from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import styled from 'styled-components'
// import Loading from '../loading/index'
// import Loading2 from '../loading-v2/index'
// import { debounce } from '../../api/utils'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const PullUpLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`

export const PullDownLoading = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState()

  const scrollContaninerRef = useRef()

  const {
    direction,
    click,
    refresh,
    pullUpLoading,
    pullDownLoading,
    bounceTop,
    bounceBottom
  } = props

  const { pullUp, pullDown, onScroll } = props

  useEffect(() => {
    if (bScroll) return
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)
    if (pullUp) {
      scroll.on('scrollEnd', () => {
        //判断是否滑动到了底部
        if (scroll.y <= scroll.maxScrollY + 100) {
          pullUp()
        }
      })
    }
    if (pullDown) {
      scroll.on('touchEnd', pos => {
        //判断用户的下拉动作
        if (pos.y > 50) {
          debounce(pullDown, 0)()
        }
      })
    }

    if (onScroll) {
      scroll.on('scroll', scroll => {
        onScroll(scroll)
      })
    }

    if (refresh) {
      scroll.refresh()
    }
    return () => {
      scroll.off('scroll')
      setBScroll(null)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh()
        bScroll.scrollTo(0, 0)
      }
    }
  }))

  const PullUpdisplayStyle = pullUpLoading
    ? { display: '' }
    : { display: 'none' }
  const PullDowndisplayStyle = pullDownLoading
    ? { display: '' }
    : { display: 'none' }
  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
      {/* 滑到底部加载动画 */}
      {/* <PullUpLoading style={PullUpdisplayStyle}>
        <Loading />
      </PullUpLoading> */}
      {/* 顶部下拉刷新动画 */}
      <PullDownLoading style={PullDowndisplayStyle}>
        <Loading2 />
      </PullDownLoading>
    </ScrollContainer>
  )
})

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: () => {},
  pullDown: () => {},
  bounceTop: true,
  bounceBottom: true
}

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool, //是否支持向上吸顶
  bounceBottom: PropTypes.bool //是否支持向上吸顶
}

export default React.memo(Scroll)
