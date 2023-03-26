import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
     <h1>Welcome to my website!</h1>
     <nav>
       <div>
         <p><a href="#">Home</a></p>
         <p><a href="#">About</a></p>
         <p><a href="#">Services</a></p>
         <p><a href="#">Contact</a></p>
       </div>
     </nav>
   </header>

  );
}

function Main() {
  return (
    <main>
    <section>
      <h2>About Us</h2>
      <p>
        We are a small team of web developers based in the United States. We
        specialise in creating modern and responsive websites for businesses
        and individuals.
      </p>
    </section>
    <section>
      <h2>Our Services</h2>
      <div>
        <p>Web Design</p>
        <p>Web Development</p>
        <p>E-commerce Solutions</p>
        <p>Search Engine Optimization (SEO)</p>
      </div>
    </section>
  </main>
  );
}
export default App;
