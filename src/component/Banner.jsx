import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4 ">
          <div className="inline-flex items-center gap-2  bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-purple-600">
            Supercharge Your
            <br />
            <span className="bg-black bg-clip-text text-transparent">
             Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-700 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">

            <button className="bg-purple-600 hover:bg-purple-500 w-60 h-15 transition-all px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-purple-500/30 flex justify-center items-center gap-3 group text-white">
              Explore Products
              
            </button>

            <button className="font-semibold hover:text-white hover:bg-purple-600 border-purple-600 rounded-full w-40 h-15 flex justify-center items-center border-2 text-purple-600">
             ▶ Watch Demo
              
            </button>

           
          </div>

          
        </div>

        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-xl rounded-3xl "
              src={BannerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;