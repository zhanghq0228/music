import React from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Title, Tabs } from './style'
function Home(props) {
  const { route } = props
  return (
    <div>
      <Title>
        <span className="iconfont">&#xe664;</span>
        <span className="iconfont">音乐播放器</span>
        <span className="iconfont">&#xe62a;</span>
      </Title>
      <Tabs>
        <NavLink to="/recommend" activeClassName="selectd">
          <span>推荐</span>
        </NavLink>
        <NavLink to="/leaderboard" activeClassName="selectd">
          <span>排行榜</span>
        </NavLink>
        <NavLink to="/search" activeClassName="selectd">
          <span>搜索</span>
        </NavLink>
      </Tabs>
      {renderRoutes(route.routrs)}
    </div>
  )
}
export default Home
