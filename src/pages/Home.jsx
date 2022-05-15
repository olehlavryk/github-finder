import React from 'react'
import UserResults from '../components/users/UserResult/UserResults'
import UserSearch from '../components/users/UserSearch/UserSearch'

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home