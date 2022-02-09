//NEWSLETTER COMPONENT

//IMPORITNG
import { FiSend } from "react-icons/fi";


export default function Newsletter({ className }) {
  return (
    <>
      <div
        className={`flex flex-col px-8 md:px-0 justify-center relative container mx-auto ${className}`}
      >
        <h3 className="title">Newsletter</h3>
        <div className="mt-20 relative">
          <div
            className="absolute md:w-7/12 inset-x-0 mx-auto"
            style={{ top: "-20px" }}
          >
            <div className="relative flex items-center w-full">
              <input
                className="focus:outline-none text-content-dark bg-white w-full filter drop-shadow-xl rounded-full h-16 pl-8 md:pl-16 lowercase"
                placeholder="Your best email..."
                type="email"
                required
              />
              <button className="flex items-center bg-primary rounded-full px-8 h-20 absolute right-0 md:-right-8 text-2xl uppercase hover:bg-primary-dark">
                Sign Up <FiSend className="ml-2 font-bold text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
