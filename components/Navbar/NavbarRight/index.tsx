import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import UserDropdown from "./UserDropdown";
type Props = {};

const NavbarRight = (props: Props) => {
  const isLoggedIn = false;
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  return (
    <>
      {isLoggedIn ? (
        <Flex alignItems={"center"}>
          <Button
            variant={"solid"}
            colorScheme={"orange"}
            bg="orange.200"
            size={"sm"}
            mr={4}
          >
            <AddIcon />
          </Button>
          <UserDropdown />
        </Flex>
      ) : (
        <Flex alignItems={"center"}>
          <Button
            variant={"solid"}
            colorScheme={"orange"}
            size={"sm"}
            mr={4}
            onClick={() => loginModal.onOpen()}
          >
            Login
          </Button>
          <Button
            variant={"outline"}
            colorScheme={"orange"}
            size={"sm"}
            mr={4}
            onClick={() => registerModal.onOpen()}
          >
            Register
          </Button>
        </Flex>
      )}
    </>
  );
};

export default NavbarRight;
