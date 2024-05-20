import HelpCard from "./HelpCard";

import kid1 from '../assets/kid1.svg'
import kid2 from '../assets/kid2.svg'
import kid3 from '../assets/kid3.svg'
import kid4 from '../assets/kid4.svg'

function Help() {

    const data=[
        {img:kid1,heading:"Expertise Skill",text:`Lorem Ipsum is sirnply dummy text of the printing and typesetting industry. Lorem Ipsum has been`},{img:kid2,heading:"Give Inspiration",text:`Lorem Ipsum is sirnply dummy text of the printing and typesetting industry. Lorem Ipsum has been`},{img:kid3,heading:"Expertise Skill",text:`Lorem Ipsum is sirnply dummy text of the printing and typesetting industry. Lorem Ipsum has been`},{img:kid4,heading:"Give Inspiration",text:`Lorem Ipsum is sirnply dummy text of the printing and typesetting industry. Lorem Ipsum has been`}
    ]
    return ( 
        <div className="flex flex-col justify-between items-center p-10" id="Causes">
            <div className="text-6xl font-bold">HOW COULD <span className=" text-custom-red">YOU HELP ?</span></div>
            <div className="flex justify-around p-10 gap-5 md:flex-row flex-col">
                {
                    data.map((data,index)=><HelpCard key={index} img={data.img} text={data.text} heading={data.heading}/>)
                }
            </div>
        </div>
     );
}

export default Help;