import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

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
}
const ChoosePet: React.FC<Props> = ({ pet }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <Avatar>
        <AvatarFallback>{pet.name?.[0].toUpperCase()}</AvatarFallback>

        {pet.imageUrl && <AvatarImage src={pet.imageUrl} />}
      </Avatar>

      <p className="font-medium opacity-90">{pet.name}</p>
    </div>
  );
};

export default ChoosePet;
