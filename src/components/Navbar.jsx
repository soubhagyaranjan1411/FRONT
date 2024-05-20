import icons from '../assets/icons.png';
import logo from '../assets/logo.svg';
import ribbon from '../assets/ribbon.svg';
function Navbar() {
    return ( 
        <div className="flex flex-col">
            <div className="w-full bg-layer flex justify-end items-center p-3 ">
                <img src={icons} alt="Icons"/>
            </div>
            <div className='flex flex-row justify-around items-center flex-wrap'>
                <div className='flex justify-center items-center gap-2'>
                <img src={ribbon}/>
                <img src={logo}/>
                </div>
                <div className='flex justify-between gap-12 font-bold flex-wrap p-5'>
                    <a href='#Home'><div>Home</div></a>
                    <a href='#About'><div>About</div></a>
                    <a href='#Causes'><div>Causes</div></a>
                    <a href='#Event'><div>Event</div></a>
                    <a href='#News'><div>News</div></a>
                    <a href='#Contact'><div>Contact</div></a>
                </div>
            </div>
        </div>
     );
}

export default Navbar;
