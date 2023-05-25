import Banner from "../Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopolarMenu from "./PopularMenu/PopolarMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <PopolarMenu />
            <Featured />
            <Testimonials/>
        </div>
    );
};

export default Home;