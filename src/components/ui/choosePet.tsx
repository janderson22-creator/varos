import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Pet } from "@prisma/client";
import { SheetTrigger } from "./sheet";

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
  post?: boolean;
}

const ChoosePet: React.FC<Props> = ({ pet, setPet, post }) => {
  if (post) {
    return (
      <SheetTrigger
        onClick={() => setPet(pet as Pet)}
        className="flex w-full items-center gap-2 border-b py-2"
      >
        <Avatar>
          <AvatarFallback>{pet.name?.[0].toUpperCase()}</AvatarFallback>
          {pet.imageUrl && <AvatarImage src={pet.imageUrl} />}
        </Avatar>
        <p className="font-medium opacity-90">{pet.name}</p>
      </SheetTrigger>
    );
  }

  return (
    <Link
      onClick={() => setPet(pet as Pet)}
      href={`/profile/${pet.slug.toLocaleLowerCase()}`}
      className="flex w-full items-center gap-2 border-b py-2"
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
