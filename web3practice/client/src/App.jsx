import { Navbar, Welcome, Footer, Services, Transactions, Loader } from './components';
import { useState } from 'react'
import reactLogo from './assets/react.svg'

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
    );
}

export default App
