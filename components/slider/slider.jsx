import Image from "next/image";
import { sliderArray } from "./constants";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { UiButton } from "../ui-kit/ui-button";

export function Slider() {
  return (
    <Swiper
      navigation={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="main-slider swiper-container text-white"
    >
      {sliderArray.map((slideInfo) => {
        return (
          <SwiperSlide key={slideInfo.id}>
            <SlideElement slideInfo={slideInfo} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
/*export function Slider() {
  const [swiperIndex, setSwiperIndex] = useState(2);
  return (
    <section id="product-slider">
      <div className="main-slider swiper-container">
        <div className="swiper-wrapper">
          {
            <SlideElement
              slideInfo={sliderArray.find(
                (sliderItem) => sliderItem.id === swiperIndex,
              )}
            />
          }
        </div>
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </section>
  );
}
*/
function SlideElement({ slideInfo }) {
  const { title, text, imageSrc, imageAlt, linkHref } = slideInfo;
  return (
    <>
      <Image src={imageSrc} alt={imageAlt} />
      <div className="swiper-slide-content">
        <h2 className="text-3xl md:text-7xl font-bold mb-2 md:mb-4">{title}</h2>
        <p className="mb-4 text-white md:text-2xl">
          {text[0]}
          <br />
          {text[1]}
        </p>
        <UiButton
          variant="borderWhite"
          className="px-4 py-2"
          linkHref={linkHref}
        >
          Купить
        </UiButton>
      </div>
    </>
  );
}
