import camera from "@/assets/camera.png";
import thermostats from "@/assets/thermostat.png";
import doorbells from "@/assets/doorbells.png";
import watches from "@/assets/watch.png";
import speakers from "@/assets/speakers.png";

const DemoProducts = () => {
  const demo = [
    {
      id: 1,
      Name: "Doorbells",
      img: doorbells,
    },
    { id: 2, Name: "Thermostats", img: thermostats },
    { id: 3, Name: "Smartwatches", img: watches },
    { id: 4, Name: "Cameras", img: camera },
    { id: 5, Name: "Speakers", img: speakers },
  ];
  return (
    <div className="flex h-[370px] w-[1280px] justify-between">
      {demo.map((data) => (
        <div
          key={data.id}
          className="h-[290px] w-[232px] p-[20px] relative overflow-hidden rounded-2xl drop-shadow-md cursor-pointer hover:-translate-y-3 transition delay-150 duration-400 hover:drop-shadow-xl "
        >
          
          <img
            src={data.img}
            alt=""
            className="absolute h-full top-0  left-0"
          />
          <div className="relative flex justify-center top-56 text-[#252F35] text-[16px] font-medium">{data.Name}</div>
        </div>
      ))}
    </div>
  );
};

export default DemoProducts;
