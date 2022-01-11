import React from "react";
import { Link } from "react-router-dom";

//momentum-ui components
import { Button, Menu, MenuItem, MenuOverlay } from "@momentum-ui/react";

export default function Category() {
  const [category, setCategory] = React.useState(null);

  const categoryClick = (event) => {
    setCategory(event.currentTarget);
  };

  const categoryClose = () => {
    setCategory();
  };

  return (
    <div>
      <MenuOverlay
        menuTrigger={
          <Button
            id="default"
            ariaLabel="Show Menu"
            onClick={categoryClick}
            background="orange"
            text-align="left"
          >
            Products
          </Button>
        }
      >
        <Menu>
          <Link to="/products/mobile">
            <MenuItem onClick={categoryClose} label="Mobile" />
          </Link>
          <Link to="/products/headphone">
            <MenuItem onClick={categoryClose} label="Headphone" />
          </Link>
          <Link to="/products/watch">
            <MenuItem onClick={categoryClose} label="Watch" />
          </Link>
          <Link to="/products/buds">
            <MenuItem onClick={categoryClose} label="Buds" />
          </Link>
        </Menu>
      </MenuOverlay>
    </div>
  );
}
