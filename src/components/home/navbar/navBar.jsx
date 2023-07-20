import Image from "next/image";
import { useState } from "react";
import priceIcon from "../../../assets/icon-price.png"
import notificationsIcon from "../../../assets/icon-notifications.png"
import favoriteIcon from "../../../assets/icon-favorite.png"
import DrobdownButton from "@/components/shared/drobdown";

function Navbar() {
  const [links, setLinks] = useState([
    "الرئيسية",
    "التصنيفات",
    "مشترياتى",
    "حسابى",
  ]);
  const itemsLang = [
    {
      label: "العربيه",
      key: "العربيه",
    },
    {
      label: "الانجليزيه",
      key: "الانجليزيه",
    },
  ];

  return (
    <header className="z-50 backy ">
      <div className="container  h-16 mx-auto flex justify-between items-center sm:gap-0 ">
        <nav className="" >
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className={`${link}  text-white`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-[20px]">
          <Image src={priceIcon} alt="priceIcon" />
          <Image src={notificationsIcon} alt="notificationsIcon" />
          <Image src={favoriteIcon} alt="favoriteIcon" />
          <DrobdownButton items={itemsLang} mainClass="search-button" />

        </div>

      </div>
    </header>
  );
}

export default Navbar;



// import Head from "next/head";
// import Link from "next/link";
// import { useState } from "react";

// export default function Home() {
//   const [navbar, setNavbar] = useState(false);
//      const [links, setLinks] = useState([
//      "الرئيسية",
//      "التصنيفات",
//      "مشترياتى",
//      "حسابى",
//    ]);
//   return (
//     <div>
//       <Head>
//         <title>Create Next Responsive Navbar With Tailwind CSS</title>
//         <meta
//           name="description"
//           content="Create Next JS Responsive Menu with Tailwind CSS"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <nav className="w-full bg-gray-800 shadow">
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex items-center justify-between py-3 md:py-5 md:block">
//               <a href="#">
//                 <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
//               </a>
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-white"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-6 h-6 text-white"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:flex-col md:pb-0 md:mt-0 ${
//                 navbar ? "block" : "hidden"
//               }`}
//             >
//               <ul className="flex items-center gap-[40px] md:flex  md:space-x-6 md:space-y ">
//                 {links.map((link) => (
//                   <li key={link}>
//                     <a
//                       href={`/${link.toLowerCase()}`}
//                       className={`${link}  text-white`}
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>

//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="flex justify-center items-center mt-8">
//         <h1 className="text-2xl font-bold text-purple-500">
//           Create Responsive Navbar Menu in Next js with Tailwind CSS
//         </h1>
//       </div>
//     </div>
//   );
// }
