import React from 'react'
import { Button, Icon, Input } from "@momentum-ui/react";
import { Menu, MenuItem, MenuOverlay } from "@momentum-ui/react";
import { Link } from 'react-router-dom';

function Account() {
    return (
        <div>
             <MenuOverlay
            menuTrigger={
              <Button    >
                Account
              </Button>
            }
          >
            <Menu>
              <Link to="/SignIn">
                <MenuItem label="SignIn" />
              </Link>
              <Link to="/SignUp">
                <MenuItem label="SignUp" />
              </Link>
            </Menu>
          </MenuOverlay>
            
        </div>
    )
}

export default Account
