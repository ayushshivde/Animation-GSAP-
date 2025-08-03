



// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useEffect, useRef ,useState } from 'react';
// import {shopcontext} from "/src/context/Shopcontext.jsx"
// gsap.registerPlugin(ScrollTrigger)



// const Shop_SectionTwoCardContainer = () => {
//     const [activeCategory, setActiveCategory] = useState("all");
//     const cardContainerRef = useRef(null);
// const {AllDeviceDetails}= useContext(shopcontext)



   


// //   {
// //     id: 'phone3',
// //     searchKeywords:["phone"],
// //     name: 'Phone 3',
// //     colors: [
// //       { colorName: 'Black', image: '/images/phone/Phone3Black.png' },
// //       { colorName: 'White', image: '/images/phone/Phone3White.png' },
// //     ],
// //     variants: [
// //       { ram: 12, storage: 256, price: '₹79,999' },
// //       { ram: 16, storage: 512, price: '₹89,999' },
// //     ],
// //     highlights: [
// //       'Qualcomm 8s Gen 4 Processor',
// //       '4k @30/60fps , 120Hz Refresh Rate',
// //       '50MP + 50MP (periscope telephoto) + 50MP | 50MP Front Camera',
// //       '5500 mAh Battery',
// //     ],
// //     defaultImage: '/images/phone/Phone3White.png',
// //   },

// //  {
// //     id: 'phone3apro',
// //      searchKeywords:["phone"],
// //     name: 'Phone 3a Pro',
// //     colors: [
// //       { colorName: 'Black', image: '/images/phone/Phone3aProBlack.png' },
// //       { colorName: 'Grey', image: '/images/phone/Phone3aProGrey.png' },
// //     ],
// //     variants: [
// //       { ram: 8, storage: 256, price: '₹31,999' },
// //       { ram: 12, storage: 256, price: '₹33,999' },
// //     ],
// //     highlights: [
// //       'Qualcomm SM7635 Snapdragon 7s Gen 3',
// //       '6.7 inch 120Hz Refresh rate',
// //       '50MP + 50MP (3X Periscope)+ 8MP (Ultra-Wide) | 50MP Front Camera',
// //       '5000 mAh Battery',
// //     ],
// //     defaultImage: '/images/phone/Phone3aProGrey.png',
// //   },
// //   {
// //     id: 'phone3a',
// //      searchKeywords:["phone"],
// //     name: 'Phone 3a',
// //     colors: [
// //       { colorName: 'Black', image: '/images/phone/Phone3aBlack.png' },
// //       { colorName: 'White', image: '/images/phone/Phone3aWhite.png' },
// //       { colorName: 'Blue', image: '/images/phone/Phone3aBlue.png' },
// //     ],
// //     variants: [
// //       { ram: 8, storage: 128, price: '₹24,999' },
// //       { ram: 8, storage: 256, price: '₹26,999' },
// //     ],
// //     highlights: [
// //       'Qualcomm SM7635 Snapdragon 7s Gen 3',
// //       '6.7 inch 120Hz Refresh rate',
// //       '50MP + 50MP (2X Tele Photo) + 8MP (Ultra-Wide) | 32MP Front Camera',
// //       '5000 mAh Battery',
// //     ],
// //     defaultImage: '/images/phone/Phone3aBlue.png',
// //   },


// //     {
// //     id: 'phone2aplus',
// //      searchKeywords:["phone"],
// //     name: 'Phone 2a Plus',
// //     colors: [
// //       { colorName: 'Black', image: '/images/phone/Phone2aPlusBlack.png' },
// //       { colorName: 'Grey', image: '/images/phone/Phone2aPlusGrey.png' },
// //     ],
// //     variants: [
// //       { ram: 8, storage: 256, price: '₹27,999' },
// //       { ram: 12, storage: 256, price: '₹29,999' },
// //     ],
// //     highlights: [
// //       '17.02 cm (6.7 inch) Full HD+ Display',
// //       '50MP + 50MP | 50MP Front Camera',
// //       '5000 mAh Battery',
// //       'Dimensity 7350 Pro 5G Processor',
// //     ],
// //     defaultImage: '/images/phone/Phone2aPlusBlack.png',
// //   },

// //   {
// //     id: 'phone2a',
// //      searchKeywords:["phone"],
// //     name: 'Phone 2a',
// //     colors: [
// //       { colorName: 'Black', image: '/images/phone/Phone2aBlack.png' },
// //       { colorName: 'Milk', image: '/images/phone/Phone2aMilk.png' },
// //     ],
// //     variants: [
// //       { ram: 8, storage: 128, price: '₹23,999' },
// //       { ram: 12, storage: 256, price: '₹25,999' },
// //     ],
// //     highlights: [
// //       '50MP (OIS) + 50MP | 32MP Front Camera',
// //       '5000 mAh Battery',
// //       'Dimensity 7200 Pro Processor',
// //       '17.02 cm (6.7 inch) Full HD+ Display',
// //     ],
// //     defaultImage: '/images/phone/Phone2aMilk.png',
// //   },




// //   {
// //     id: 'Cmfphone2',
// //      searchKeywords:["CMF"],
// //     name: 'CMF Phone 2 Pro',
// //     colors: [
// //       { colorName: 'Black', image: '/images/phone/CMFPhone2ProBlack.png' },
// //       { colorName: 'Green', image: '/images/phone/CMFPhone2ProGreen.png' },
// //       { colorName: 'Orange', image: '/images/phone/CMFPhone2ProOrange.png' },
// //       { colorName: 'White', image: '/images/phone/CMFPhone2ProWhite.png' },
// //     ],
// //     variants: [
// //       { ram: 8, storage: 128, price: '₹18,999' },
// //       { ram: 8, storage: 256, price: '₹20,999' },
// //     ],
// //     highlights: [
// //       '5000 mAh battery',
// //       '17.2 cm (6.77 inch) Display',
// //       '50MP + 50MP + 8MP | 16MP Front Camera',
// //       'Dimensity 7300 Pro 5G Processor',
// //     ],
// //     defaultImage: '/images/phone/CMFPhone2ProWhite.png',
// //   },






// //   {
// //     id: 'Cmfphone1',
// //      searchKeywords:["CMF"],

// //     name: 'CMF Phone 1',
// //     colors: [
// //       { colorName: 'Orange', image: '/images/phone/CMFPhone1Orange.png' },
// //       { colorName: 'Black', image: '/images/phone/CMFPhone1Black.png' },
// //       { colorName: 'Green', image: '/images/phone/CMFPhone1Green.png' },
// //     ],
// //     variants: [
// //       { ram: 6, storage: 128, price: '₹15,999' },
// //       { ram: 8, storage: 128, price: '₹17,999' },
// //     ],
// //     highlights: [
// //       '5000 mAh battery',
// //       '16.94 cm (6.67 inch) Full HD+ Display',
// //       '50 MP Sony rear camera',
// //       'Dimensity 7300 5G Processor',
// //     ],
// //     defaultImage: '/images/phone/CMFPhone1Orange.png',
// //   },

 


// // {
// //     id: 'earwhite',
// //      searchKeywords:["audio"],

// //     name: 'Ear',
// //     colors: [
// //       { colorName: 'Black', image: '/images/audioDevices/EarWhite.png'  },
// //       { colorName: 'White', image: '/images/audioDevices/EarBlack.png'  },
// //     ],
// //   variants: [
// //       { price:"₹11,999" },
      
// //     ],
// //     highlights: [
// //       '24-bit Hi-Res Audio',
// //       '40.5 h battery',
// //       '45 dB active noise cancellation',
     

// //     ],
// //     defaultImage: '/images/audioDevices/EarBlack.png'
// //   },






// //   {
// //     id: 'eara',
// //      searchKeywords:["audio"],

// //     name: 'Ear (a)',
// //     colors: [
   
// //       { colorName: 'White', image: '/images/audioDevices/EaraWhite.png'  },
// //       { colorName: 'Black', image: '/images/audioDevices/EaraBlack.png'  },
// //       { colorName: 'Yellow', image: '/images/audioDevices/EaraYellow.png'  },
// //     ],

// //        variants: [
// //       { price:"₹7999" },
      
// //     ],
  
// //     highlights: [
// //       '42.5 h battery',
// //       'Hi-Res Audio with LDAC',
// //       '45 dB active noise cancellation',
     

// //     ],
// //     defaultImage: '/images/audioDevices/EaraWhite.png'
// //   },

// // {
// //     id: 'headphone1white',
// //      searchKeywords:["audio"],

// //     name: 'Headphone 1',
// //     colors: [
// //       { colorName: 'Black', image: '/images/audioDevices/Headphone1Black.png'  },
// //       { colorName: 'White', image: '/images/audioDevices/Headphone1White.png'  },
// //     ],

// //      variants: [
// //       { price:"₹21,999" },
      
// //     ],
  
// //     highlights: [
// //       'Up to 80 hours of playback',
// //       'Real-time adaptive ANC',
// //       'Support for Hi-Res Audio, LDAC',
// //       'Bluetooth and Wired'

// //     ],
// //     defaultImage: '/images/audioDevices/Headphone1White.png',
// //   },
// //   {
// //     id: 'earopen',
// //      searchKeywords:["audio"],

// //     name: 'Ear Open',
// //     colors: [
   
// //       { colorName: 'White', image: '/images/audioDevices/EarOpenWhite.png'   },
// //     ],
// //     variants: [
// //       { price:"₹7999" },
      
// //     ],
// //     highlights: [
// //       '30 hr of playback',
// //       '14.2mm dynamic driver',
// //       'AI-enhanced technologyn',
     

// //     ],
// //     defaultImage: '/images/audioDevices/EarOpenWhite.png'
// //   },

// //   {
// //     id: 'cmfbudspro2',
// //      searchKeywords:["audio","CMF"],

// //     name: 'CMF Buds Pro 2',
// //     colors: [
   
// //       { colorName: 'White', image: '/images/audioDevices/CMFBudsPro2White.png'  },
// //       { colorName: 'Black', image: '/images/audioDevices/CMFBudsPro2Black.png'  },
// //       { colorName: 'Orange', image: '/images/audioDevices/CMFBudsPro2Orange.png'   },
// //       { colorName: 'Blue', image: '/images/audioDevices/CMFBudsPro2Blue.png'  },
// //     ],

// //          variants: [
// //       { price:"₹4,299" },
      
// //     ],
  
// //     highlights: [
// //       '11 MM + 6 MM Dual drivers',
// //       '50 DB Hybrid ANC',
// //       '6 HD mics',
     

// //     ],
// //     defaultImage: '/images/audioDevices/CMFBudsPro2White.png'
// //   },

// //  {
// //     id: 'cmfbuds2plus',
// //      searchKeywords:["audio","CMF"],

// //     name: 'CMF Buds 2 Plus',
// //     colors: [
   
// //       { colorName: 'White', image: '/images/audioDevices/CMFBuds2PlusWhite.png'  },
// //       { colorName: 'Blue', image: '/images/audioDevices/CMFBuds2PlusBlue.png'   },
// //     ],
  
// //          variants: [
// //       { price:"₹3,299" },
      
// //     ],
  


// //     highlights: [
// //       '12 mm LCP drivers',
// //       '50 dB hybrid ANC',
// //       'Hi-Res Audio with LDAC',
     

// //     ],
// //     defaultImage:  '/images/audioDevices/CMFBuds2PlusWhite.png'
// //   },




// //  {
// //     id: 'cmfbuds2a',
// //      searchKeywords:["audio"],

// //     name: 'CMF Buds 2a',
// //     colors: [
   
// //       { colorName: 'White', image: '/images/audioDevices/CMFBuds2aWhite.png'  },
// //       { colorName: 'Orange', image: '/images/audioDevices/CMFBuds2aOrange.png'  },
// //       { colorName: 'Black', image: '/images/audioDevices/CMFBuds2aBlack.png'  },
// //     ],
  

// //          variants: [
// //       { price:"₹2.199" },
      
// //     ],


// //     highlights: [
// //       '12.4mm Bio-fibre Driver',
// //       '42 dB Active Noise Cancellation',
// //       'Up to 8 hours of playback',
     

// //     ],
// //     defaultImage:  '/images/audioDevices/CMFBuds2aWhite.png'
// //   },

 

  
// // ];

// useEffect(() => {
//   if (cardContainerRef.current) {
//     gsap.fromTo(
//       cardContainerRef.current.children,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power3.out",
//       }
//     );
//   }
// }, [activeCategory]);


// const filteredData = AllDeviceDetails.filter((item) => {
//   if (activeCategory === "all") return true;
//   return item.searchKeywords.includes(activeCategory);
// });

//   return (
//      <div className="Section-two-header w-screen   bg-black   ">
//     <section className='filterbar w-screen  ' >

// <h1 onClick={()=>setActiveCategory("all")}>SHOP ALL</h1>
// <h1  onClick={()=>setActiveCategory("phone")}>PHONE</h1>
// <h1  onClick={()=>setActiveCategory("audio")}>AUDIO</h1>
// <h1  onClick={()=>setActiveCategory("CMF")}>CMF</h1>
 

// </section>
// <div ref={cardContainerRef} className="cardcontainer">
//       {filteredData.map((phone)=>{
//        return phone.colors.map((coloroption)=>{
//           return<Link to={`/shop/productinfo/${phone.id}`}  key={`${phone.id}-${coloroption.colorName}`} className='card'>
//           <div className='image-wrapper'>
//             <img  loading="lazy" src={coloroption.image} alt={`${phone.name}-(${coloroption.colorName})`} />
//           </div>
//           <div className='card-info'>
//             <h3>{phone.name} ({coloroption.colorName})</h3>
//             <p>FROM  {phone.variants[0].price}</p>
//           </div>
          
          
//           </Link>
//         })
//       })}

   
//     </div>

    
//    </div>
//   )
// }

// export default Shop_SectionTwoCardContainer







import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useRef ,useState } from 'react';
import {shopcontext} from "/src/context/Shopcontext.jsx"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



const Shop_SectionTwoCardContainer = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const cardContainerRef = useRef(null);
const {AllDeviceDetails}= useContext(shopcontext)



   





useEffect(() => {
  const ctx = gsap.context(() => {
    if (cardContainerRef.current) {
      gsap.fromTo(
        cardContainerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, cardContainerRef);

  return () => ctx.revert(); 
}, [activeCategory]);


const filteredData = AllDeviceDetails.filter((item) => {
  if (activeCategory === "all") return true;
  return item.searchKeywords.includes(activeCategory);
});

  return (
     <div className="Section-two-header w-screen   bg-black   ">
    <section className='filterbar w-screen  ' >

<h1 onClick={()=>setActiveCategory("all")}>SHOP ALL</h1>
<h1  onClick={()=>setActiveCategory("phone")}>PHONE</h1>
<h1  onClick={()=>setActiveCategory("CMF")}>CMF</h1>
<h1  onClick={()=>setActiveCategory("audio")}>AUDIO</h1>
 

</section>
<div ref={cardContainerRef} className="cardcontainer">
      {filteredData.map((phone)=>{
       return phone.colors.map((coloroption)=>{
          return<Link to={`/shop/productinfo/${phone.id}`}  key={`${phone.id}-${coloroption.colorName}`} className='card'
          
         
          >
          <div className='image-wrapper'>
            <img  loading="lazy" src={coloroption.image} alt={`${phone.name}-(${coloroption.colorName})`} />
          </div>
          <div className='card-info'>
            <h3>{phone.name} ({coloroption.colorName})</h3>
            <p>FROM  {phone.variants[0].price}</p>
          </div>
          
          
          </Link>
        })
      })}

   
    </div>

    
   </div>
  )
}

export default Shop_SectionTwoCardContainer