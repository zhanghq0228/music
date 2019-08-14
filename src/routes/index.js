import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
const HomeComponent = lazy(() => import('../application/Home/'))
const Home = props => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props} />
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
const LeaderboardComponent = lazy(() => import('../application/Leaderboard/'))
const Leaderboard = props => {
  return (
    <Suspense fallback={null}>
      <LeaderboardComponent {...props} />
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
    routrs: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />
      },
      {
        path: '/recommend/',
        exact: true,
        key: 'home',
        component: Recommend
      },
      {
        path: '/leaderboard',
        key: 'leaderboard',
        exact: true,
        component: Leaderboard
      },
      {
        path: '/search',
        key: 'search',
        exact: true,
        component: Search
      }
    ]
  }
]
