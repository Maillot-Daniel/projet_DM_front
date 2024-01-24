import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Section1 from '../Section1/Section1';
import HomePage from '../HomePage/HomePage';
import EntreesPage from '../EntreesPage/EntreesPage';
import PlatsPage from '../PlatsPage/PlatsPage';
import DessertsPage from '../DessertsPage/DessertsPage';
import DiversPage from '../DiversPage/DiversPage';



import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        
        <Header />
        <main>
        <Section1 />
          
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/entrees" element={<EntreesPage />} />
            <Route path="/plats" element={<PlatsPage />} />
            <Route path="/desserts" element={<DessertsPage />} />
            <Route path="/divers" element={<DiversPage />} />
        </Routes>
          
        </main>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
