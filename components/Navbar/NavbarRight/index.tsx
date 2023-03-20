import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import UserDropdown from "./UserDropdown";
type Props = {};

const NavbarRight = (props: Props) => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  return (
    <>
      {currentUser ? (
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
          <UserDropdown user={currentUser} />
        </Flex>
      ) : (
        <Flex alignItems={"center"}>
          <Button
            variant={"solid"}
            colorScheme={"orange"}
            size={"sm"}
            mr={{ base: 0, md: 4 }}
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
            display={{ base: "none", md: "unset" }}
          >
            Register
          </Button>
        </Flex>
      )}
    </>
  );
};

export default NavbarRight;
