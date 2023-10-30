import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import { Single } from "./Pages/Single/Single";
import Navbar from "./components/Navbar/Navbar";
import PageError from "./PageError";
import Contact from "./Pages/Contact/Contact";
import NosFormations from "./Pages/nosFormations/nosFormations";
import NosCentres from "./Pages/nosCentres/nosCentres";
import TeamSOI from "./Pages/Team/Team";
import Home from "./Pages/Home/Home";
import Footer from './components/Footer/Footer';





// const router = createBrowserRouter([
//   {
//     element: <Root />,
//     children: [
//       {
//         path:'/',
//         element:<Home />,        
//       },
//       {
//         path:'/synergieoi',
//         element:<Home />,        
//       },
//       {
//         path:'/synergie',
//         element:<Home />,        
//       },
//       {
//         path:'/synoi',
//         element:<Home />,        
//       },
//       {
//         path:'actus',
//         element:<Single />,        
//       },
//       {
//         path:'nos-centres',
//         element:<NosCentres />,        
//       },
//       {
//         path:'nos-formations',
//         element:<NosFormations />,
//       },
//       {
//         path:'team',
//         element:<TeamSOI />,        
//       },
//       {
//         path:'contact',
//         element:<Contact />,        
//       },
      
//     ],
//     errorElement:<PageError />,
//   }
// ]);

// function Root(){
//   return (
//     <>
//       <Navbar />
//       <div className="">
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   )
// }

export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/synergieoi/" element={<Home/> } />
            <Route path="/synoi/" element={<Home />} />
            <Route path="/synergie/" element={<Home />} />
            <Route path="/actus" element={<Single />} />
            <Route path="/nos-centres" element={<NosCentres />} />
            <Route path="/nos-formations" element={<NosFormations />} />
            <Route path="/team" element={<TeamSOI />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
            <Route path="/actus?{id}" element={<Single />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
