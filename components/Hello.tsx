import React from "react";
import { CoolButton } from "./CoolButton";

type Props = {
  prop: string;
};

export function Hello({ prop }: Props): JSX.Element {
  return (
    <div>
      <h1 className="text-left font-display md:text-4xl font-bold pb-6 tracking-widest max-w-md">
        Hey Welcome ✌️!
      </h1>
      <h2 className="text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
        Quick intro about me .I’go by {prop} ,My Full Name is Salbi Mohamed Im a
        software Engineering Student at Ensias,Mostly Self Taught,Freelancer,
        passionate about web development and game developement.
      </h2>
      <h1 className="text-left font-display md:text-4xl font-bold pt-10 tracking-widest max-w-md">
        Contact 📝!
        {/* <div className="text-white  bg-black font-bold px-10 py-4 shadow-md rounded-xl full-bold my-3 hover:shadow-xl active:scale-90 transation cursor-pointer duration-150 "> */}
          <CoolButton
            description="Get In Touch"
            mail="mailto:mohamedsali602@live.com"
          />
         
          {/* <a href="">
            <button className="hidden md:inline  text-white bg-gray-700  font-bold px-10 py-4 shadow-md rounded-lg full-bold my-8 hover:shadow-xl active:scale-90 transation duration-150  ">
              {" "}
              Get In Touch .
            </button>
          </a> */}
        {/* </div> */}
      </h1>
      <h1 className="text-left font-display md:text-4xl font-bold pt-10 tracking-widest max-w-md">
        Hobbies ✨!
      </h1>

      <ol className="">
        <li className="">
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../play.svg" alt=' play league of legends w.o.w ' width={100} height={100} />
            </div>
            Music
          </h2>
        </li>
        <li>
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../music.svg" alt='music guitar' width={100} height={100} />
            </div>
            Guitar Player 🎸 ,TOOL is My Favorite Band x)
          </h2>
        </li>
        <li className="">
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../gaming.svg" alt='games gamming'  width={100} height={100} />
            </div>
            Gaming
          </h2>
        </li>
        <li>
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../1gaming.png" alt='games' width={100} height={100} />
            </div>
            Mostly L.O.L xD
          </h2>
        </li>
        <li className="">
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../book.svg" alt='vulture salbi psychology books philosophy width={100} height={100}  '/>
            </div>
            Reading
          </h2>
        </li>
        <li>
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../read.svg" alt='vulture salbi psychology philosophy ' width={100} height={100}  />
            </div>
            Into Carl Jung, Nietzsche , Dostoevsky & Franz Kafka
          </h2>
        </li>
        <li className="">
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../eye.svg" alt='an eye meditation' width={100} height={100}  />
            </div>
            Meditation
          </h2>
        </li>
        <li>
          <h2 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../meditate.svg" alt='meditation breathing ' width={100} height={100}  />
            </div>
            Big Fan of Breathing Techniques x)
          </h2>
        </li>
      </ol>
    </div>
  );
}
