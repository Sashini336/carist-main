// const data = [
//   {
//     title: "VW New Beetle 2.0TSI",
//     image:
//       "https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_bO.jpg",
//     price: "49 999лв",
//   },
//   {
//     title: "BMW M4",
//     image:
//       "https://mobistatic4.focus.bg/mobile/photosmob/354/1/big1/11662725891193354_UI.jpg",
//     price: "89 200лв",
//   },
//   {
//     title: "Hyundai Elentra 2.0 TSI",
//     image:
//       "https://mobistatic3.focus.bg/mobile/photosmob/361/1/big1/11672766563582361_7h.jpg",
//     price: "39 999лв",
//   },
//   {
//     title: "BMW i3 S 120 ah",
//     image:
//       "https://mobistatic3.focus.bg/mobile/photosmob/227/1/big1/11685691766485227_Fs.jpg",
//     price: "55 999лв",
//   },
// ];

export default function Ad({title, image, price, path}) {
  return (
    <div class="image1">
      <img src={image} />
      <div class="info">
        <a class="link" href={path}>
          {title}
        </a>
        <p class="price">{price}</p>
      </div>
    </div>
  );
}
