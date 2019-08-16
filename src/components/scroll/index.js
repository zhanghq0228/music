import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useState
} from 'react'
import Bscroll from 'better-scroll'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState
  const { refresh } = props
  const scrollContaninerRef = useRef()
  console.log(props)
  useEffect(() => {
    if (bScroll) return
    const scroll = new Bscroll(scrollContaninerRef.current, {
      scrollX: true,
      probeType: 3,
      click: true,
      bounce: {
        top: true,
        bottom: true
      }
    })
    setBScroll(scroll)

    if (refresh) {
      scroll.refresh()
    }
  }, [])

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })
  // useImperativeHandle(ref, () => ({
  //   refresh() {
  //     if (bScroll) {
  //       bScroll.refresh()
  //     }
  //   }
  // }))
  return <ScrollContainer>{props.children}</ScrollContainer>
})

Scroll.propTypes = {
  // click: true,
  refresh: true
}
Scroll.propTypes = {
  refresh: PropTypes.bool
}
export default React.memo(Scroll)
