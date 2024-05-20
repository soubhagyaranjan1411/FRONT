import team from '../assets/team.svg'
function Team() {
  return (
    <div className='flex xl:flex-row flex-col h-fit' id='About'>
      <img src={team}/>
      <div className="flex flex-col justify-center items-start text-white bg-custom-red p-5 gap-10">
        <div className="text-6xl font-bold">WE ARE NONPROFIT TEAM</div>
        <div className="text-lg font-semibold">
          Lorem ipsum dolor sit art-let, consectetur adipisicing elit, sed do
          eiusmod ternpor iont incididunt ut labore et dolore magna aliqua, ut
          enim ad minim veniam. quis nostrudti exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </div>
        <button className=" w-fit p-3 text-left bg-black text-white rounded-3xl text-xl font-bold">Donate Now</button>
      </div>
    </div>
  );
}

export default Team;
