import './page.scss';
import Link from 'next/link';


const Home = () =>{
  return (
    <main className="main">
      <div id="main-wrapper">
        <h1 id="title">Password manager</h1>
        <h2 id="description">Register and store your passwords in a secure way</h2>

        <div id="button-wrapper">
          <Link href="/register">
            <div className='button' id="register-button">Register</div>
          </Link>
          <Link href="/login">
            <div className='button'>Log in</div>
          </Link>
        </div>
        
      </div>
    </main>
  )
}

export default Home;