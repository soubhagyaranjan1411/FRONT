import team1 from "../assets/foot1.svg";
import team2 from "../assets/foot2.svg";
import team3 from "../assets/foot3.svg";
import team4 from "../assets/foot4.svg";
import team5 from "../assets/foot5.svg";
import team6 from "../assets/foot6.svg";
import loc from "../assets/loc.png";
import ph from "../assets/ph.png";
import mail from "../assets/mail.png";
import call from "../assets/call.png";
import input from "../assets/input.png";

function Footer() {
  const links = ["Home", "About", "Causes", "Event", "News", "Contact"];
  const images = [
    { img: team1 },
    { img: team2 },
    { img: team3 },
    { img: team4 },
    { img: team5 },
    { img: team6 },
  ];
  const contacts = [
    {
      img: loc,
      heading: "Head Office",
      text1: "123, Main Street, Your City",
      text2: "USA 789456",
    },
    {
      img: ph,
      heading: "Phone Number",
      text1: "+123 456 7890",
      text2: "+123 456 7890",
    },
    {
      img: mail,
      heading: "Email",
      text1: "free@psdfreebies.com",
      text2: "www.psdfreebies.com",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-16 p-20 bg-black text-white relative" id="Contact">
      <div className="flex justify-around items-start gap-10 md:flex-row flex-col">
        <div className="flex flex-col justify-start items-start gap-10 md:w-1/4 w-full">
          <div className="text-3xl font-extrabold">OUR MISSION</div>
          <div className="text-lg font-semibold">
            Lorem psum o ors ame consec e ur dipisicing "lit. sod do oiusmod
            tempor ncididunt ut labore et dolore magna liqua. Ut enim ad minim
            veniarn
          </div>
          <div className="text-lg font-semibold">
            Quis nostrud exercitation ullamco laboris isi ut aliquip ex ea
            commodo consequat. uis auto Iruro dolor.
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-start items-start md:w-1/4  w-full ">
          <div className="text-xl font-semibold md:mx-auto">QUICK LINKS</div>
          <div className="flex flex-col justify-start items-start gap-3 md:mx-auto">
            {links.map((link) => {
              return (
                <div className="flex justify-start items-center gap-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                  <a href={`#${link}`}><div>{link}</div></a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 md:w-1/4 w-full">
          <div className="text-xl font-semibold">GALLERY</div>
          <div className="flex flex-wrap gap-3">
            {images.map((image) => {
              return (
                <div
                  className="  w-36 h-36 bg-cover bg-center border-gray-100"
                  style={{ backgroundImage: `url(${image.img})` }}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-5 md:w-1/4 w-full">
          <div className="text-xl font-semibold">CONTACT US</div>
          <div className="flex flex-col items-start justify-start gap-5">
            {contacts.map((contact) => {
              return (
                <div className="flex flex-col justify-start items-start text-lg font-semibold">
                  <div className="flex justify-start items-center gap-5">
                    <div className="flex justify-center items-center bg-custom-red p-3 rounded-full">
                      <img src={contact.img} />
                    </div>
                    <div>{contact.heading}</div>
                  </div>
                  <div className="flex flex-col">
                    <div>{contact.text1}</div>
                    <div>{contact.text2}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        Copyright {"\u00A9"} 201 7, PSDFREEBIES.COM. All Rights Reserved.
      </div>
      <div className="absolute w-full md:w-4/5 h-20 bg-custom-red flex md:p-0 p-3 justify-around items-center -top-10 left-30">
        <img src={call} className=" h-9 md:h-14"/>
        <div className="md:text-lg font-extralight">DO YOU HAVE A QUESTION?</div>
        <div className="md:text-4xl font-extrabold">+0123 456 789</div>
        <div className="flex rounded-3xl  bg-white justify-start items-center h-10 w-1/5 text-black p-2 gap-3 invisible md:visible">
            <label><img src={input}/></label>
            <input type="email" className="border-none bg-none outline-none font-semibold"/>
        </div>
        <button className=" w-40 p-3 text-center bg-black text-white rounded-3xl text-lg font-bold">Subscribe</button>

      </div>
      
    </div>
  );
}

export default Footer;
