import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { ModeToggle } from "./toggle-dark-mode";

const Header = () => {
    return ( 
        <Card className="rounded-[0px] flex justify-between p-2">
            <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>

            <ModeToggle />
        </Card>
    );
}
 
export default Header;