import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection"
import CardsSection from '../../components/CardsSection/CardsSection';
import CarouselSection from '../../components/CarouselSection/CarouselSection';
import TabsSection from '../../components/TabsSection/TabsSection';
import BookingSection from '../../components/BookingSection/Booking';
import Footer from '../../components/FooterSection/Footer';

function HomePage() {

    return (
        <>
            <div className="landing_page">

                {/* <!--------NAVBAR ------------------> */}
                < Navbar />

                {/* <!--------INTRO SECTION -----------> */}
                < HeroSection />

                {/* <!--------CARDS SECTION -----------> */}
                < CardsSection />

                {/* <!-- -----CAROUSEL SECTION---------> */}
                < CarouselSection />

                {/* <!--------TABS SECTION-------------> */}
                < TabsSection />

                {/* <!--------BOOKING SECTION------- --> */}
                < BookingSection />

                {/* <!--------FOOTER SECTION-----------> */}
                <Footer />

                <div className="last"> </div>

            </div>
        </>
    )
}

export default HomePage;