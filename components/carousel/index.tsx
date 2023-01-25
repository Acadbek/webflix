// import React from "react";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
// import Image from "next/image";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const myLoader = ({ src, width }: any) => {
//   return `${src}?w=${width}}`;
// };

// const MyComponent = ({ data }) => (
//   <AutoPlaySwipeableViews className="text-red-700">
//     {data?.map((item) => (
//       <div key={item.id}>
//         <h1 key={item.id}>{item.poster}</h1>
//         <Image
//           loader={myLoader}
//           src={item?.poster}
//           alt={item.title_en}
//           width={400}
//           height={400}
//         />
//       </div>
//     ))}
//   </AutoPlaySwipeableViews>
// );

// export default MyComponent;
