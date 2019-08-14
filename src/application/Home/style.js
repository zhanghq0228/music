import styled from 'styled-components'
import style from '../../assets/global-style'
export const Title = styled.div`
  padding: 5px 10px;
  height: 45px;
  background: ${style['theme-color']};
  font-size: 20px;
  color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconfont {
    font-size: 25px;
  }
`
export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background: ${style['theme-color']};
  a {
    color: #e4e4e4;
    text-decoration: none;
    &.selectd {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`
