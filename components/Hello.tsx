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
      <h4 className="text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
        Quick intro about me .I’go by {prop} ,My Full Name is Salbi Mohamed Im a
        software Engineering Student at Ensias,Mostly Self Taught,Freelancer,
        passionate about web development and game developement.
      </h4>
      <h1 className="text-left font-display md:text-4xl font-bold pt-10 tracking-widest max-w-md">
        Contact 📝!
        <div className="text-white  bg-black font-bold px-10 py-4 shadow-md rounded-xl full-bold my-3 hover:shadow-xl active:scale-90 transation cursor-pointer duration-150 ">
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
        </div>
      </h1>
      <h1 className="text-left font-display md:text-4xl font-bold pt-10 tracking-widest max-w-md">
        Hobbies ✨!
      </h1>

      <ol className="">
        <li className="">
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../play.svg" />
            </div>
            Music
          </h4>
        </li>
        <li>
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../music.svg" />
            </div>
            Guitar Player 🎸 ,TOOL is My Favorite Band x)
          </h4>
        </li>
        <li className="">
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../gaming.svg" />
            </div>
            Gaming
          </h4>
        </li>
        <li>
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../1gaming.png" />
            </div>
            Mostly L.O.L xD
          </h4>
        </li>
        <li className="">
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../book.svg" />
            </div>
            Reading
          </h4>
        </li>
        <li>
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../read.svg" />
            </div>
            Into Carl Jung, Nietzsche , Dostoevsky & Franz Kafka
          </h4>
        </li>
        <li className="">
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-10">
              <img src="../eye.svg" />
            </div>
            Meditation
          </h4>
        </li>
        <li>
          <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            <div className="w-56">
              <img src="../meditate.svg" />
            </div>
            Big Fan of Breathing Techniques x)
          </h4>
        </li>
      </ol>
    </div>
  );
}
