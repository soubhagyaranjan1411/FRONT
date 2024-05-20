

function HelpCard(props) {
    return ( 
        <div className='flex flex-col justify-between items-center gap-5'>
           <div
                className=" rounded-full border-8 shadow-xl w-36 h-36 bg-cover bg-center border-gray-100"
                style={{ backgroundImage: `url(${props.img})` }}
            >
                
            </div>
            <div className='text-xl font-bold'>{props.heading}</div>
            <div className=' text-base font-semibold text-gray-300'>{props.text}</div>
        </div>
     );
}

export default HelpCard;