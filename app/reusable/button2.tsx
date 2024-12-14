// components/AnimatedButton.js
export default function AnimatedButton2() {
    return (
      <div className="h-screen w-screen bg-blue-500 flex justify-center items-center font-lato">
        <div className="relative w-44 h-16 flex justify-center items-center">
          <button className="relative w-full h-full bg-transparent border border-blue-300 rounded-md overflow-hidden group">
            <svg
              className="absolute top-0 left-0 w-full h-full stroke-white group-hover:stroke-dashoffset-[480] transition-[stroke-dashoffset] duration-1000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 220 60"
            >
              <rect
                x="5"
                y="5"
                width="210"
                height="50"
                rx="25"
                ry="25"
                className="stroke-dasharray-[150, 480] stroke-dashoffset-[150]"
              ></rect>
            </svg>
            <span className="relative text-white text-lg font-light group-hover:text-gray-100 transition duration-1000">
              Click Me
            </span>
          </button>
        </div>
      </div>
    );
  }
  