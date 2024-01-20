import Image from "next/image";
import Logo from "../../../public/logo.png";
import LogoType from "../svg/logo";
import FooterList from "./footerList";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="flex w-3/12 flex-col items-center md:w-2/12">
          <Image
            src={Logo}
            alt={"logo-image"}
            width={74}
            height={74}
            className="mb-4"
          />
          <LogoType />
        </div>

        <div className="md:hidden">
          <p className="mt-6 font-medium opacity-90">VAROS 2024</p>
          <p className="mt-1 text-sm font-medium opacity-90">
            Todos os direitos reservados
          </p>
        </div>

        <div className="md:flex md:justify-around lg:w-full">
          <div className="mt-6 flex justify-between md:gap-10 lg:mt-0">
            <FooterList title={"Cursos"} list={courses} />
            <FooterList title={"Carteiras"} list={wallets} />
          </div>

          <div className="mt-12 flex justify-between md:mt-5 md:gap-10 lg:mt-0">
            <FooterList title={"Sobre"} list={about} />
            <FooterList title={"Redes Sociais"} list={socialMedias} />
          </div>
        </div>

        <div className="hidden md:block lg:hidden">
          <p className="mt-6 font-medium opacity-90">VAROS 2024</p>
          <p className="mt-1 text-sm font-medium opacity-90">
            Todos os direitos reservados
          </p>
        </div>
      </div>

      <div className="hidden lg:block pl-6">
        <p className="font-medium opacity-90">VAROS 2024</p>
        <p className="mt-1 text-sm font-medium opacity-90">
          Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;

const courses = [
  "Valuation do Zero ao Avançado 2.0",
  "Código.py",
  "Minicurso Reels",
  "Enciclopédia de FII",
];

const wallets = [
  "Carteira FATOR",
  "Carteira Seleção",
  "Carteira Essencial",
  "Carteira Small Caps",
  "Carteira Dividendos",
  "Carteira de Flls",
];

const socialMedias = ["Instagram", "Twitter", "Youtube"];
const about = ["Quem somos"];
