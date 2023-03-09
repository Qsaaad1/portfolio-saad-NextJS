import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="data:image/png;base64,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"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale " // transition duration-300 ease-in-out
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">70%</p>
        </div>
      </div>

    {/* Try */}

    


      
    </div>
  );
}

export default Skill;
