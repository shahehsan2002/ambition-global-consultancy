import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuBG from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss |Menu</title>
            </Helmet>
            <Cover img={menuBG} title={'our menu'}></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Todays offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory
            items={dessert}
            title="Dessert"
            img={dessertImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
            items={pizza}
            title="Pizza"
            img={pizzaImg}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
            items={salad}
            title="Salad"
            img={saladImg}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
            items={soup}
            title="Soup"
            img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;