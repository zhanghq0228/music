import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-config'
const HomeComponent = lazy(() => import('../application/Home/'))
const Home = props => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props} />
    </Suspense>
  )
}
const LeaderboardComponent = lazy(() => import('../application/Leaderboard/'))
const Leaderboard = props => {
  return (
    <Suspense fallback={null}>
      <LeaderboardComponent {...props} />
    </Suspense>
  )
}
const RecommendComponent = lazy(() => import('../application/Recommend/'))
const Recommend = props => {
  return (
    <Suspense fallback={null}>
      <RecommendComponent {...props} />
    </Suspense>
  )
}
const SearchComponent = lazy(() => import('../application/Search/'))
const Search = props => {
  return (
    <Suspense fallback={null}>
      <SearchComponent {...props} />
    </Suspense>
  )
}

export default [
  {
    path: '/',
    component: Home,
    routes:[
      {
        path: "/",
        exact: true,
        render:  ()=> (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend/",
        extra: true,
        key: 'home',
        component: Recommend,
        routes:[{
          path: '/recommend/:id',
          component: Album,
        }]
      },
      {
        path: "/singers",
        component: Singers,
        key: 'singers',
        routes: [{
          path: "/singers/:id",
          component: Singer
        }]
      },
    ]
  }
]
