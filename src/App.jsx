import { Addresses } from './components/Addresses/Addresses';
import { Categories } from './components/Categories/Categories';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header'
import { News } from './components/News/News';
import { Sale } from './components/Sale/Sale';
import { Stories } from './components/Stories/Stories';
import { TopChart } from './components/TopChart/TopChart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="layout">
      <Header />
      <Stories />
      <Categories />
      <TopChart />
      <News />
      <Sale />
      <Addresses />
      <Footer />
    </div>
  );
}

export default App;
