import { useState, useEffect } from "react";

const videoDataPassenger = [{
    name : "Complete Body",
    logo : "https://s3-alpha-sig.figma.com/img/ca3f/7d1a/ca7720c84c7d80fc4e21e4260dff0088?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CY44OdYD1T1qe3HxYdlouwzdhq5ewpiXOmfhCo-Y3X5-9D6Fpt~TenwAgudocJO3wQ4UJZxHUthIrSintcWizXKBV8VsiX2LmHS1GsfcF-YZM40s5MldngjY8heCXVOvhpaxTFJWMVlDWYgWNgQfSIL7Y-BRvTQAsXStho8q5r~T0h1euJ4oTW7cx0D2VbDgF6wm2gi7Nt7DCMABm7PKV86W4l7KOwuuCKUxp2HKEaDOmINCNIQosck-RlpV1g1vTO4Haa~IpUPrqWVRe2IbB~Rz7W8tss3rbPJBGjtUrYFaOleGO3ugwbU1~7WeC~po4n7n~HYvPBgWUc6xP-rYtg__",
    VideoUrl : "https://supreme-group.vercel.app/static/media/Passenger%20Alpha.bc06b347f5b526ad9a60.mp4"
},
{
    name : "Front",
    logo : "https://s3-alpha-sig.figma.com/img/b712/c34d/cb91ae1aaa52961fbcc485059552c791?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p9uPmKwlY7H1H9bKlt-Ag0HR5ijCYtwxNUQQx9wTVZQCV-NTp0dUoWszluROUPrEnvL~zcpDTlwuFWvCvIYpQihrRV8NmnWN8jM-m6JWkDSvurHrj0nZ14Ao9pEwK5~CrEJM8uUlJuDnFsII2fJeMe0yTpXEZvoIryMRY7OEa38S5a4CoGe3VoAAOMxo-JsYGVYk~6DB0qiD1vHges6I8yZiHsJ1LeQ4ok7D1hdUr9H6N4aglVvzop3lY9eA0mekxrO7OpDQiW2tJnLyY8NZuF5vL~KbrDxFhJjw8GxHtPZgDGwzGHN1ljQtWOaL~Ag2JDtVSnAihSDws661zP2VEg__",
    VideoUrl : "https://supreme-group.vercel.app/static/media/Front.8f5fda304d3095ab6b02.mp4"
},
{
    name : "Trunk",
    logo : "https://s3-alpha-sig.figma.com/img/6f43/d3b4/ec66648298d67a25dd152eac8a5ac8e1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gPrPg2X1EmI6Hbbd1bkSKWlGxFr5NcU-yptKdhlTFU2gN3cIZlpQBkrQZZdnzOdGNEUVpDUcv-JEftfnMzxlmcgwzpFEraygFHng1rcdXmNXGoQN9XPtvk~uDnMQvtQRVHGSpqCIDxs1pf-TjgsA5RdeTt5X-jJWVRSpaXOyensBwAZpwAW7uz2AvMXfEG2t12Ld9lzFFIMJlCc3DbqYRzfMSvh43wdmvLH1So5juQ8hPQLOirRT39RLEXr4c1pt-EPchP6n1znFB56d7i28NPEdHxMrC4GcN9tlnnIMphT4q2L22TUvJM7kA3eM5pripyo~7zh5Fx-cN4QQ4XTgWg__",
    VideoUrl : "https://supreme-group.vercel.app/static/media/Cabin.3260d3e4f52b3804dae5.mp4"
},
{
    name : "Exterior",
    logo : "https://s3-alpha-sig.figma.com/img/81ac/d315/5b700995d92d75de4039f74e877af952?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i2KC2FtvvaYRuKV8B9Xvb8RfRCYIptMeZ7sMh5Lc51ngGIc2RkTaZC1Ke9f7-RWDgRYEI9zlT4kszO~-ZDeikJ~nWigGnyvNYJAvmskUn6Dxz167l1IHftQx~nls7fNOJN62pB~x6kBSPweUobad~6UI5ejODLPEFyLgqxamueD3A2-nuL6QHifOBVmDFYIn793K5ZZx3oXFFKsTfnEX5oOAzKMW-hiWDysGvvJxdcdb~3zZgRgvwkKMsk3TF15R~vE0O20DIlctxzPx-fG5HTmjBFJtZQqRuCXM62iRCkeRMvgOAyBNYFl8LysjfjjfuIMMSBBDkxEyWC-XMmzVcA__",
    VideoUrl : "https://supreme-group.vercel.app/static/media/Exterior.a127ebb308e655c7e32c.mp4"
},
];


const videoDataComer = [
  {
    name: "Complete Body",
    logo: "https://supreme-group.vercel.app/static/media/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg",
    VideoUrl: "https://supreme-group.vercel.app/static/media/Commercial Alpha.92c92d40f9116c837d1d.mp4"
  },
  {
    name: "Engine",
    logo: "https://supreme-group.vercel.app/static/media/commercial-engine.474985507c936157fc7a6daa457d4f04.svg",
    VideoUrl: "https://supreme-group.vercel.app/static/media/Commercial-Engine.d8957f7c027ca396858e.mp4"
  },
  {
    name: "Cabin",
    logo: "https://supreme-group.vercel.app/static/media/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg",
    VideoUrl: "https://supreme-group.vercel.app/static/media/Commercial-Cabin.69adf15a8021267cbe8c.mp4"
  }
];

const VehicleSection = () => {
    const [activeTab, setActiveTab] = useState<"passenger" | "commercial">("passenger");
    const [activeTabData, setActiveTabData] = useState<any>(videoDataPassenger);
    const [activeVideo, setActiveVideo] = useState<string>(videoDataPassenger[0].VideoUrl);
  
    // Update video and data on tab change
    useEffect(() => {
      if (activeTab === "passenger") {
        setActiveTabData(videoDataPassenger);
        setActiveVideo(videoDataPassenger[0].VideoUrl);
      } else {
        setActiveTabData(videoDataComer);
        setActiveVideo(videoDataComer[0].VideoUrl);
      }
    }, [activeTab]);
  
    return (
      <section className="relative h-screen w-full bg-black text-white overflow-hidden">
        {/* Top Heading */}
        <div className="text-center pt-10">
          <h1 className="text-2xl md:text-4xl font-light">
            Evolving the drive with <span className="font-semibold">360-degree</span><br />
            comprehensive solutions
          </h1>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col md:flex-row w-full h-full items-center justify-between">
          {/* Tabs */}
          <div className="flex flex-col gap-8 md:w-1/3 px-6 mt-10">
            <div
              className={`cursor-pointer border-l-4 pl-4 ${
                activeTab === "passenger" ? "border-white" : "border-transparent text-gray-400"
              }`}
              onClick={() => setActiveTab("passenger")}
            >
              <h2 className="text-2xl font-semibold">Passenger vehicles</h2>
              <p className="text-sm mt-1">Revving up innovation from interior to exterior.</p>
            </div>
  
            <div
              className={`cursor-pointer border-l-4 pl-4 ${
                activeTab === "commercial" ? "border-white" : "border-transparent text-gray-400"
              }`}
              onClick={() => setActiveTab("commercial")}
            >
              <h2 className="text-2xl font-semibold">Commercial vehicles</h2>
              <p className="text-sm mt-1">Advancing engineering for heavy-duty vehicles.</p>
            </div>
          </div>
  
          {/* Video Section */}
          <div className="md:w-2/3 w-full flex justify-center h-full flex-col-reverse">
            {/* Bottom Icons */}
            <div className="flex gap-8 items-center justify-center mb-10 flex-wrap px-4">
              {activeTabData.map((item: any, index: number) => (
                <div
                  key={index}
                  className="text-xs text-center cursor-pointer"
                  onClick={() => setActiveVideo(item.VideoUrl)}
                >
                  <img src={item.logo} alt={item?.name} className="w-16 h-16 mb-1" />
                  <p>{item?.name}</p>
                </div>
              ))}
            </div>
  
            {/* Video */}
            <div className="mb-10 w-full flex justify-center">
              <video
                key={activeVideo} // Forces remount
                autoPlay
                loop
                muted
                playsInline
                className="w-full md:w-[500px] object-cover"
              >
                <source src={activeVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default VehicleSection;
