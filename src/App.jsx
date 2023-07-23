// import "./styles.css";
// import Plx from "react-plx";

// export default function App() {
//   return (
//     <div className="container">
//       <div style={{ position: "absolute", top: "50%", left: "50%" }}>
      

//   <p>2023</p>
// </div>
//       <Plx 
//         parallaxData={[
//           {
//             start: 0,
//             end: 700,
//             easing: "ease-in",
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 1.6,
//                 property: "scale"
//               }
//             ]
//           }
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%",
//           zIndex: 100
//         }}
//       >
//         <img style={{ width: "100%" }} src="bg.png" alt="foreground" />
       
//       </Plx>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 800,
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 1.18,
//                 property: "scale"
//               }
//             ]
//           }
//         ]}
//         style={{  
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: "100%"
//         }}
//       >
//         <img style={{ width: "100%" }} src="background.jpg" alt="background" />
//       </Plx>
//       <Plx
//         parallaxData={[
//           {
//             start: 0,
//             end: 400,
//             properties: [
//               {
//                 startValue: 1,
//                 endValue: 0,
//                 property: "opacity"
//               }
//             ]
//           }
//         ]}
//         style={{
//           position: "fixed",
//           left: 0,
//           top: "26vw",
//           width: "100%"
//         }}
//       >
//         <img
//           style={{
//             width: "30vw"
//           }}
//           src="/text-img.webp"
//           alt="Goonies"
//         />
//       </Plx>
//       <div
//         style={{
//           position: "fixed",
//           lefft: 0,
//           top: 0,
//           zIndex: 200,
//           paddingTop: "56%",
//           height: "400vh",
//           width: "100%"
//         }}
//       >
//         <div
//           style={{
//             background: "#000",
//             height: "100%"
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// }


import "./styles.css";
import Plx from "react-plx";

export default function App() {
  return (
    <div className="container">
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "3em",
          textShadow: "0 0 10px #06d6a0, 0 0 20px #06d6a0, 0 0 30px #06d6a0",
        }}
      >
        <Plx
          parallaxData={[
            {
              start: 0,
              end: 700,
              easing: "ease-in",
              properties: [
                {
                  startValue: 1,
                  endValue: 1.6,
                  property: "scale"
                }
              ]
            }
          ]}
        >
          <p className="neon-text">Maharshi</p>
        </Plx>
      </div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 1
        }}
      >
        <img style={{ width: "100%", height: "100vh", objectFit: "cover" }} src="bg.png" alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 1
        }}
      >
        <img style={{ width: "100%", height: "100vh", objectFit: "cover" }} src="background.jpg" alt="background" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
          zIndex: 1
        }}
      >
        <img
          style={{
            width: "30vw"
          }}
          src="/text-img.webp"
          alt="Goonies"
        />
      </Plx>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 0,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
}
