function VolunteerCard(props) {
    return ( 
        <div className=" flex flex-col justify-around items-center gap-5">
             <div
                className=" rounded-full border-8 shadow-xl w-36 h-36 bg-cover bg-center border-gray-100"
                style={{ backgroundImage: `url(${props.img})` }}
            >
                
            </div>
            <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-extrabold text-custom-red">{props.name}</div>
            <div className="text-lg font-extrabold">{props.text}</div>
            </div>
        </div>
     );
}

export default VolunteerCard;