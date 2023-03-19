import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

interface ILink {
  href: string;
  label: string;
}

interface INavLinkProps {
  link: ILink;
}

const NavLink: FC<INavLinkProps> = ({ link }) => (
  <ChakraLink
    as={Link}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "orange.200",
      color: "black",
    }}
    href={link.href}
  >
    {link.label}
  </ChakraLink>
);

export default NavLink;
