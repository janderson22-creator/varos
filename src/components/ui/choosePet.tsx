import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Pet } from "@prisma/client";

interface Props {
  pet: {
    id: string;
    name: string;
    slug: string;
    imageUrl: string;
    backgroundURL: string;
    description: string;
    userId: string;
  };
  setPet: (pet: Pet) => void;
}
const ChoosePet: React.FC<Props> = ({ pet, setPet }) => {
  return (
    <Link
      onClick={() => setPet(pet as Pet)}
      href={`/profile/${pet.slug}`}
      className="flex flex-col items-center gap-1"
    >
      <Avatar>
        <AvatarFallback>{pet.name?.[0].toUpperCase()}</AvatarFallback>

        {pet.imageUrl && <AvatarImage src={pet.imageUrl} />}
      </Avatar>

      <p className="font-medium opacity-90">{pet.name}</p>
    </Link>
  );
};

export default ChoosePet;
