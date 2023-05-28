import './page.scss';
import Link from 'next/link';
import Image from 'next/image';


const Home = () =>{
  return (
    <main className="main">
      <div id="main-wrapper">
        <h1 id="title">Password manager</h1>

        <section id="description-section">
          <article>
            <h2 id="description">Store your passwords in a secure way</h2>
            <p>Register and keep all your passwords in one place. The passwords stored on this application are encrypted and contained within a database located in Virginia, USA. This application allows you to store unlimited amounts of passwords and access them whenever you wish.</p>
          </article>
          <div id="image-container">
            <Image 
              src="/images/Password.jpg"
              alt="Password"
              fill={true}
              loading="eager"
              priority={true}
            />
          </div>
        </section>

        <section id="button-wrapper">
            <Link href="/register">
              <div className='button' id="register-button">Register</div>
            </Link>
            <Link href="/login">
              <div className='button'>Log in</div>
            </Link>
          </section>
      </div>
    </main>
  )
}

export default Home;