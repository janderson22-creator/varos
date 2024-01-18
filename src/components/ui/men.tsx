import Image from "next/image";
import MenImage from "../../../public/men.webp";

const Men = () => {
  return (
    <div>
      <Image src={MenImage} alt={"Men"} />

      <div className="mt-[48px] flex items-center justify-around rounded-[32px] border p-4">
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-[#C6CAD2]">+ 1000</p>
          <p className="text-center text-xs font-normal text-[#FAFAFA]">
            Nota média geral das aulas
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-[#19C819]">4,8/5</p>
          <p className="text-center text-xs font-normal text-[#FAFAFA]">
            Nota média geral das aulas
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-lg font-bold text-[#C6CAD2]">10k +</p>
          <p className="text-center text-xs font-normal text-[#FAFAFA]">
            Nota média geral das aulas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Men;
