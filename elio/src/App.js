import './App.css';
import HomeScreen from './components/HomeScreen';
import ContactForm from './components/Contact';
import Carroussel from './components/Carroussel';
import Map from './components/Map';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importez les fichiers CSS de PrimeReact
import 'primeicons/primeicons.css'; // Pour les icônes
// import 'primereact/resources/themes/saga-blue/theme.css'; 
// import 'primereact/resources/primereact.min.css'; // Styles généraux de PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css';   
import 'primereact/resources/primereact.css';                       // core css
import 'primeflex/primeflex.css'; 



function App() {
  return (
     <BrowserRouter>
     <div>
      <Routes>
       {/* Configuration des routes */}
       <Route path="/" element={<HomeScreen></HomeScreen>} />
       <Route path="/carroussel" element={<Carroussel></Carroussel>} />
       <Route path="/contact" element={<ContactForm></ContactForm>} />
       <Route path="/map" element={<Map></Map>} />
       </Routes>
     </div>
   </BrowserRouter>
  );
}

export default App;
