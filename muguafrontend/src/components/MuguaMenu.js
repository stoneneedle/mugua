import { MenuList, MenuItem } from "@mui/material"; // MUI
import { Link } from "react-router-dom";

export default function MuguaMenu() {
  return (
    <MenuList>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/discussions">Discussions</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/pages">Pages</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/assignments">Assignments</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/files">Files</Link>
      </MenuItem>
    </MenuList>
  );
}