import About from '../components/About';
import Partners from '../components/Partners';
import Footer from '../components/common/footer';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      <About/>
      <Gallery />
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Home;