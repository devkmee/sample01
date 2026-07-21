import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import Header from './components/cmm/Header.jsx';
import Footer from './components/cmm/Footer.jsx';

import GuestMain from './pages/main/GuestMain.jsx';
import Detail from './pages/Detail.jsx';

function App() {
    return (
        <>
            <Header />

            <nav>
                <Link to="/">Main</Link> | <Link to="/detail">Detail</Link>
            </nav>

            <Routes>
                <Route path="/" element={<GuestMain />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
