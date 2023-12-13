import React from 'react'
 import arr from '../Array'
// import img1 from '../images/pexels-photo-1062175.jpeg'
// import img2 from '../images/pexels-photo-132037.webp'
// import img3 from '../images/pexels-photo-2236713.webp'
// import img4 from '../images/pexels-photo-709552.jpeg'
// import img5 from '../images/sea-bay-waterfront-beach-50594.jpeg'
// let arr=[img1,img2,img3,img4,img5]
const Images = () => {
  return (
     <div>
      

           {arr.map( (ele)=>{
            return <img src={ele} alt="images" height={400} width={400} />
           })}

        {/* w<img src={img1} alt="qwww"  height={400}  width={400} />
        <img src={img2} alt="qwww" height={400}  width={400} />
        <img src={img4} alt="qwww"  height={400} width={400} />
        <img src={img3} alt="qww"  height={400} width={400} /> */}
     </div>
  )
}

export default Images