// src/App.jsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
    return (
        <div>
            <Navbar />
            <AppRoutes /> {/* Render the routes here */}
            <Footer />
        </div>
    );
}

export default App;
