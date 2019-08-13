import React from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
function Home(props) {
  console.log(props)
  return (
    <div>
      <NavLink to="/recommend">推荐</NavLink>
      <NavLink to="/leaderboard">排行榜</NavLink>
      <NavLink to="/search">搜索</NavLink>
      {renderRoutes()}
    </div>
  )
}
export default Home
