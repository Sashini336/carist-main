import Head from "next/head";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarVw(props) {
  const images = [
    "https://mobistatic3.focus.bg/mobile/photosmob/361/1/big1/11672766563582361_7h.jpg",
    "https://mobistatic3.focus.bg/mobile/photosmob/361/1/big1/11672766563582361_Gy.jpg",
    "https://mobistatic3.focus.bg/mobile/photosmob/361/1/big1/11672766563582361_f9.jpg",
    "https://mobistatic3.focus.bg/mobile/photosmob/361/1/big1/11672766563582361_PL.jpg",

  ];
  const data = {
    title: "Hyundai Elantra ПРОМОЦИЯ *2.0 MPI*",
    price: "39 999лв",
    date: "януари 2021г",
    engine: "Бензинов",
    horsepower: "151кс",
    trans: "Автоматична",
    eco: "Евро 6",
    millage: "1162 км",
    color: "Тъмно Сив",
    moreInfo: `Автокъща Гладис Ви передставя HYUNDAI ELANTRA модел 2021г с двигател 2. 0 MPI.
    Автомобилът е на реални км. и неразличим от нов.`,
  };
  return (
    <div>
      <Head>
        <title>Car</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <a id="home" class='link' href="/">Home</a>
        <div class="container">
          <h3 class="title">{data.title}</h3>
          <div className="carousel-container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              className="external-buttons"
              spaceBetween={24}
              slidesPerView={1}
              navigation
              updateOnWindowResize
              observer
              observerParents
              initialSlide={1}
              loop
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img alt="img" className="image" src={image} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div class="desc">
              <p id="name">{data.title}</p>
              <p id="price">{data.price}</p>
              <ul class="specs">
                <li>
                  Дата на производство : <p id="year">{data.date}</p>
                </li>
                <li>
                  Тип двигател: <p id="engine">{data.engine}</p>
                </li>
                <li>
                  Мощност: <p id="horsepower">{data.horsepower}</p>
                </li>
                <li>
                  Евростандарт: <p id="eco">{data.eco}</p>
                </li>
                <li>
                  Скоростна кути: <p id="trans">{data.trans}</p>
                </li>
                <li>
                  Пробег: <p id="millage">{data.millage}</p>
                </li>
                <li>
                  Цвят: <p id="color">{data.color}</p>
                </li>
              </ul>
              <div class="more-info">Допълнителна Информация:</div>
              <p class="the-info">{data.moreInfo}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
