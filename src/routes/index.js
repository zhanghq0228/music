import React, { lazy, Suspense } from 'react'
const HomeComponent = lazy(() => import('../application/Home/'))
const Home = props => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props} />
    </Suspense>
  )
}

export default [{ path: '/', component: Home, exact: true }]
