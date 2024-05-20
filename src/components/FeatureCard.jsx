function FeatureCard(props) {
  return (
    <div className="flex flex-col text-white">
      <div className="relative w-full">
        <img src={props.img} className="w-full"/>

        <div className="w-3/5 h-8 absolute left-20 lg:left-16 xl:left-20 -bottom-4 bg-white rounded-2xl">
          <div className="flex  items-center justify-center gap-5 ">
            <div className="w-3/5 h-3 rounded-2xl bg-gray-200 relative">
              <div className="w-[50%] h-3 absolute top-0 left-0 z-10 bg-custom-red rounded-2xl"></div>
            </div>

            <div className="text-black font-semibold">30%</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 justify-around items-center bg-custom-red h-full p-5">
        <div className="flex justify-between w-full text-xl font-semibold">
          <div>Raised: {props.raised}</div>
          <div>Goal: {props.goal}</div>
        </div>
        <div className="w-1/2 font-semibold text-center">{props.text}</div>
        <button className=" w-1/2 p-3 text-center bg-black text-white rounded-3xl text-base font-bold">
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default FeatureCard;
