import { Helmet } from "react-helmet-async";
import Banner2 from "./Banner/Banner2";
import Testimonials from "../Testimonials/Testimonials";
import Services from "./Services/Services";
import Supply from "./Supply/Supply";
import Consultancy from "./Consultancy/Consultancy";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Ambition |Home</title>
            </Helmet>
            <Banner2></Banner2>
            <Services></Services>
            <Supply></Supply>
            <Consultancy></Consultancy>
            <Testimonials></Testimonials>
            
            
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
    );
};

export default Home;