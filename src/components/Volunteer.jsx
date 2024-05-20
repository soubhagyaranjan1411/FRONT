import team1 from "../assets/team1.svg";
import team2 from "../assets/team2.svg";
import team3 from "../assets/team3.svg";
import team4 from "../assets/team4.svg";
import VolunteerCard from "./VolunteerCard";


function Volunteer() {

    const data=[{img:team1,name:'JHON DOE',text:'Volunteer'},{img:team2,name:'JHON DOE',text:'Volunteer'},{img:team3,name:'JHON DOE',text:'Volunteer'},{img:team4,name:'JHON DOE',text:'Volunteer'},]
    return ( 
        <div className="flex flex-col p-20 gap-10 items-center justify-around" id="Event">
            <div className="text-6xl font-extrabold">BEST <span className="text-custom-red">VOLUNTEER</span></div>
            <div className="flex justify-around gap-5 items-center w-full md:flex-row flex-col">
                {
                    data.map((data,index)=><VolunteerCard key={index} img={data.img} text={data.text} name={data.name}/>)
                }
            </div>
        </div>
     );
}

export default Volunteer;