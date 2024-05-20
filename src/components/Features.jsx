import fkid1 from "../assets/fkid1.svg";
import fkid2 from "../assets/fkid2.svg";

import FeatureCard from "./FeatureCard";

function Features() {
  const data = [{ img: fkid1, raised: "$300,000",goal: "$800,000",text: "Africa Children Need More Food, Water And Clothes"}, { img: fkid2, raised: "$300,000",goal: "$800,000",text: "Africa Children Need More Food, Water And Clothes" }, { img: fkid1, raised: "$300,000",goal: "$800,000",text: "Africa Children Need More Food, Water And Clothes" }];
  
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <div className="text-5xl font-bold">
        FEATURED <span className="text-custom-red">CLASSES</span>
      </div>
      <div className="flex justify-center gap-10 lg:flex-row flex-col">{
        data.map((data,index)=><FeatureCard key={index} img={data.img} raised={data.raised} goal={data.goal} text={data.text}/>)
      }</div>
    </div>
  );
}

export default Features;
