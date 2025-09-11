// function Profile() {
//   return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// export function Profile() {
//   return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// export function Profile() {
//   return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
// }

import { Profile } from "./Profile.jsx";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing image</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
