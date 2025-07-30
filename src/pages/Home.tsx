
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import './Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="container">
          <h1>Welcome to Intlayer Blog Demo</h1>
          <p>This is a demo showing how to use Intlayer for content management in a React application.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};