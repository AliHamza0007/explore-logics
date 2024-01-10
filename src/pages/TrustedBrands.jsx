import "../styles/TrustedBrands.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { brands } from "./utilsBrands";
const TrustedBrands = () => {
  return (
    <div className="container TrustedBrands py-5 mt-5 text-center">
      <h2 className="fs-1 cgray fw-normal">
        Trusted by leading <br />
        <span className="px-2  cgreen fw-bold"> Businesses </span> World Wide
      </h2>

      <div className="pt-5 mt-5">
        <Swiper
          modules={[Autoplay]}
          speed="1000"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1524: { slidesPerView: 7 },
            2024: { slidesPerView: 8 },
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 4 },
            300: { slidesPerView: 3 },
          }}
          className="swiper"
        >
          {brands?.map((brand) => {
            return (
              <SwiperSlide key={brand.id}>
                <img
                  src={brand.Url}
                  className="img-fluid mx-auto px-2 "
                  alt={brand.Url}
                />
              </SwiperSlide>
            );
          })}{" "}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedBrands;
