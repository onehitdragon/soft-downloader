import Footer from "./footer/Footer";
import HeaderBar from "./headerbar/HeaderBar";
import CategoryViewingArea from "./home/CategoryViewingArea";
import HightestViewingArea from "./home/HightestViewingArea";
import NewestViewingArea from "./home/NewestViewingArea";
import MainMenu from "./main-menu/MainMenu";
import SlideBar from "./slidebar/SlideBar";

function Home(){
    return (
        <div className="mx-14 my-4 bg-slate-700 text-white">
            <HeaderBar />
            <MainMenu />
            <SlideBar />
            <HightestViewingArea />
            <NewestViewingArea />
            <CategoryViewingArea />
            <Footer />
        </div>
    );
}

export default Home;