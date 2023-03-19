import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

type Props = {};

const UserDropdown = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar size={"sm"} />
      </MenuButton>
      <MenuList>
        <MenuItem as={Link} href="/test">
          My Profile
        </MenuItem>

        <MenuItem
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Light Mode" : "Dark Mode"}
        </MenuItem>
        <MenuItem icon={<FiLogOut />} color="red.300">
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserDropdown;
