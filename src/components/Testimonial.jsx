import team1 from "../assets/team1.svg";
import team2 from "../assets/team2.svg";
import team3 from "../assets/team3.svg";
import team4 from "../assets/team4.svg";
import team5 from "../assets/team5.svg";
import team6 from "../assets/team6.svg";

function Testimonial() {
  const data = [
    { img: team1 },
    { img: team2 },
    { img: team3 },
    { img: team4 },
    { img: team5 },
    { img: team6 },
  ];
  return (
    <div className="text-white flex flex-col justify-around p-10 gap-10 items-center bg-custom-red" id="News">
      <div className="text-6xl font-extrabold">WHAT PEOPLE SAY</div>
      <div className="flex flex-col justify-around items-center w-4/5 bg-white p-5 rounded-xl gap-5">
        <div className="text-gray-400 ">
          <span className="text-7xl font-extrabold text-custom-red">"</span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicinq elit. sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua_ ut enim ad
          minim veniam. Quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat_ Duis aute irure dolor.Lorem ipsum
          dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor
          inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </div>
        <div className="text-4xl font-extrabold text-black">
          <span className="text-custom-red">Jhon Doe </span>| NGO
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-10 flex-wrap">
      {data.map((data) => {
        return (
          <div
            className="flex items-center justify-center rounded-full border-2 shadow-xl w-20 h-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${data.img})` }}
          ></div>
        );
      })}
      </div>
    </div>
  );
}

export default Testimonial;
