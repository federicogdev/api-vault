import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

type Props = {};

const LoginModal = (props: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const onToggle = () => {
    registerModal.onOpen();
    loginModal.onClose();
  };

  return (
    <Modal isOpen={loginModal.isOpen} onClose={loginModal.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input name="email" placeholder="email" type="email" mb={4} />
          <Input
            name="password"
            placeholder="password"
            type="password"
            mb={4}
          />

          <Button h="36px" width="100%" my={2} type="submit">
            Login
          </Button>

          <Flex fontSize="9pt" justify="center" mb={2}>
            <Text mr={1}>New around here?</Text>
            <Text
              color="orange.200"
              fontWeight={700}
              cursor="pointer"
              onClick={onToggle}
              _hover={{ textDecoration: "underline" }}
            >
              Register
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
