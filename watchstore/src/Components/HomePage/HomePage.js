import { Banner } from "./Partials/Banner";
import { Hero } from "./Partials/Hero";
import { TopProducts } from "./Partials/TopProducts";

export function HomePage(){
    return(<>
        <Hero></Hero>
        <Banner></Banner>
        <TopProducts></TopProducts>
    </>
    );
}