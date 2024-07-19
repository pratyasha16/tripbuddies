import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Aos from "aos";
import HomePage1 from "./pages/homes/home";
import { useEffect } from "react";
import HomePage4 from "./pages/homes/home";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";
import ScrollToTop from "./components/common/ScrollToTop";
import TourListPage1 from "./pages/tour-lists/tour-list-1";
import TourListPage2 from "./pages/tour-lists/tour-list-2";
import TourSinglePage1 from "./pages/tour-singles/tour-single-1";
import BookingPage from "./pages/pages/booking-pages";
import PersonalDetails from "./pages/pages/booking-pages/PersonalDetailsPage.jsx";
import Confirmation from "./pages/pages/booking-pages/ConfirmationPage.jsx";
import DBMainPage from "./pages/dashboard/db-main";
import DBBookingPage from "./pages/dashboard/db-booking";
import DBListingPage from "./pages/dashboard/db-listing";
import DBFavoritesPage from "./pages/dashboard/db-favorites";
import Payment from './components/pages/Payment.jsx';
import Successful from "./components/pages/Succesful.jsx";
import DestinationsPage from "./pages/pages/destinations";
import LoginPage from "./pages/pages/login";
import RegisterPage from "./pages/pages/register";
import NotFoundPage from "./pages/pages/404";
import FindmyCompanion from "./pages/pages/companion"
import CompanionProfile from "./pages/pages/profile"


function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage1 />} />
            <Route path="/home" element={<HomePage4 />} />
            <Route path="/tour-list-1/:title" element={<TourListPage1 />} />
            <Route path="/tour-list-2" element={<TourListPage2 />} />
            <Route path="/tour-single-1/:id" element={<TourSinglePage1 />} />
            <Route path="/booking-pages" element={<BookingPage />} />
            <Route path="/db-main" element={<DBMainPage />} />
            <Route path="/db-booking" element={<DBBookingPage />} />
            <Route path="/db-listing" element={<DBListingPage />} />
            <Route path="/db-favorites" element={<DBFavoritesPage />} />
            <Route path="/destinations/:activity" element={<DestinationsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/companion" element={<FindmyCompanion />} />
            <Route path="/profile" element={<CompanionProfile />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/personal-details" element={<PersonalDetails/> }/>
            <Route path="/confirmation" element={<Confirmation/> }/>
            <Route path="/payment" element={<Payment />}/>
            <Route path="/success" element={<Successful />}/>
          </Route>
        </Routes>
        <ScrollTopBehaviour />
      </BrowserRouter>
      <ScrollToTop />
    </>
  );
}

export default App;