import { Footer } from "../components/footer/index";
import { Header } from "../components/header/index";
import { Banner } from "../components/home-page/banner";
import {
  LatestProductArray,
  PopularProductArray,
  ProductBannerArray,
} from "../components/home-page/products/constants";
import { ProductBanners } from "../components/home-page/products/product-banners";
import { ProductLine } from "../components/home-page/products/product-line";
import { SubscribeSection } from "../components/home-page/subscribe";
import { Slider } from "../components/slider";

export default function HomePage({ children }) {
  return (
    <>
      <Header />
      <Slider />
      <ProductBanners productArray={ProductBannerArray} />
      <ProductLine
        name="Popular products"
        id="popular-products"
        productArray={PopularProductArray}
      />
      <ProductLine
        name="Latest products"
        id="latest-products"
        productArray={LatestProductArray}
      />
      <Banner id="banner" title="Добро пожаловать в наш магазин" />
      <SubscribeSection id="subscribe">
        {" "}
        Подпишитесь на наш канал и{" "}
        <span className="text-primary">получите 10% скидку</span> на первый
        заказ!
      </SubscribeSection>
      <Footer />
    </>
  );
}
