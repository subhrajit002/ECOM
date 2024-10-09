import React from "react";
import HomePageVideo from "./HomePageVideo";
import NewRelease from "../NewReleaseCart/NewRelease";
import NewReleasecartData from "../NewReleaseCart/NewReleaseCartData";
import ShopByCategory from "../ShopByCategory/shopByCategory";
import Footer from "../../components/Footer";
const HomePage = () => {
    return (
        <div className="relative mt-0">
            <HomePageVideo />
            <div className=" py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
                <NewRelease data={NewReleasecartData} sectionName={"Trending"} />
                <NewRelease data={NewReleasecartData} sectionName={"Women"} />
                <NewRelease data={NewReleasecartData} sectionName={"Men"} />
                <ShopByCategory />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;