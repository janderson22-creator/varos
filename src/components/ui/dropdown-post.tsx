import { MoreVertical, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const DropdownPost = () => {
  return (
    <DropdownMenu>
      <div className="ml-auto">
        <DropdownMenuTrigger asChild>
          <MoreVertical size={18} />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mr-5">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Trash className="mr-2 h-4 w-4" />
              <span>Excluir</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              <span>Editar</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default DropdownPost;
