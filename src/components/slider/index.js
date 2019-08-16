import React, { useEffect, useState } from 'react'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import { SliderContainer } from './style'
function Slider(props) {
  console.log(props)
  const [sliderSwiper, setSliderSwiper] = useState(null)
  const { recommend } = props
  useEffect(() => {
    if (recommend.bannerList.length && !sliderSwiper) {
      let sliderSwiper = new Swiper('.slider-container', {
        autoplay: true,
        loop: true,
        pagination: { el: '.swiper-pagination' }
      })
      setSliderSwiper(sliderSwiper)
    }
  }, [recommend.bannerList.length, sliderSwiper])
  return (
    <SliderContainer>
      <div className="before" />
      <div className="slider-container">
        <div className="swiper-wrapper">
          {recommend.bannerList.map(slider => {
            return (
              <div className="swiper-slide" key={slider}>
                <div className="slider-nav">
                  <img src={slider} width="100%" height="100%" alt="推荐" />
                </div>
              </div>
            )
          })}
        </div>
        <div className="swiper-pagination" />
      </div>
    </SliderContainer>
  )
}
export default Slider
