import type { NextPage } from 'next'
import { Header } from '../src/components/header'
import { Login } from '../src/components/login'

const Home: NextPage = () => {
  return (
    <div className="p-3 flex items-center ">
      <Header/>
      Welcome to Vidify!
        <Login/>
    </div>
  )
}

export default Home
