import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Gallery from './Gallery';
import Footer from './Footer/Footer';
import Faq from './Faq/Faq';
import Tabel from './DataFetch/Tabel';

function Content() {
  return (
    <div>
      <Navbar/>
      {/*Content*/}
      <Hero/>
      <Gallery/>
      <Services/>
      <Faq/>
      <Tabel/>
      {/*Content*/}

      <Footer/>

    </div>
  );
}

export default Content;

