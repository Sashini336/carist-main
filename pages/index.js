import Head from "next/head";
import Image from "next/image";
import Ad from "../components/search";
import Social from "../components/social";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "VW New Beetle 2.0TSI",
    image:
      "https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_bO.jpg",
    path: "/vw",
    price: "49 999лв",
  },
  {
    title: "BMW M4",
    image:
      "https://mobistatic4.focus.bg/mobile/photosmob/354/1/big1/11662725891193354_UI.jpg",
    path: "/m4",
    price: "89 200лв",
  },
  {
    title: "Hyundai Elentra 2.0 TSI",
    image:
      "https://mobistatic3.focus.bg/mobile/photosmob/361/1/big1/11672766563582361_7h.jpg",
    path: "/hyndai",
    price: "39 999лв",
  },
  {
    title: "BMW i3 S 120 ah",
    image:
      "https://mobistatic3.focus.bg/mobile/photosmob/227/1/big1/11685691766485227_Fs.jpg",
    path: "/bmwi3",
    price: "55 999лв",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>CarSite</title>
        <meta name="description" content="" />
        <link
          rel="icon"
          href="https://images.unsplash.com/photo-1646029642262-022158ff5794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        />
      </Head>
      <main>
        <div class="searchBar">
          <input id="search" type="search" placeholder="Search..."></input>
          <div class="container1">
            <div class="images">
              <Ad
                title={data[0].title}
                image={data[0].image}
                price={data[0].price}
                path={data[0].path}
              ></Ad>
              <Ad
                title={data[1].title}
                image={data[1].image}
                price={data[1].price}
                path={data[1].path}
              ></Ad>
              <Ad
                title={data[2].title}
                image={data[2].image}
                price={data[2].price}
                path={data[2].path}
              ></Ad>
              <Ad
                title={data[3].title}
                image={data[3].image}
                price={data[3].price}
                path={data[3].path}
              ></Ad>
              {data.map((ad) => {
                return (
                  <Ad
                    title={ad.title}
                    image={ad.image}
                    price={ad.price}
                    path={ad.path}
                  ></Ad> // same
                );
              })}
            </div>
          </div>
        </div>
        <Social icon={faMagnifyingGlass}></Social>
      </main>
    </div>
  );
}
