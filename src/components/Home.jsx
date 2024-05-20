

function Home() {
    return (
      <div className="relative flex items-start justify-start bg-back w-full h-full p-10 bg-bottom text-white" id="Home">
        <div className="flex flex-col justify-around space-y-4 w-1/2 z-20">
          <div className=" text-3xl sm:text-5xl lg:text-7xl">BRING CLEAN WATER TO <span className="font-bold">AN ASIAN VILLAGE</span></div>
          <div className="text-base  sm:text-lg font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry, Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry, Lorem Ipsum has been
          </div>
          <button className=" w-fit p-3 text-left bg-black text-white rounded-3xl text-xl font-bold">Donate Now</button>
        </div>
        
        <div className="bg-triangle absolute top-0 -left-24 w-full h-full z-10 bg-no-repeat"></div>
      </div>
    );
  }
  
  export default Home;
  