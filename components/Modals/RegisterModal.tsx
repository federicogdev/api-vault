import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const RegisterModal = (props: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const onToggle = () => {
    registerModal.onClose();
    loginModal.onOpen();
  };

  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input name="email" placeholder="email" type="email" mb={4} />
          <Input name="username" placeholder="username" type="text" mb={4} />
          <Input
            name="password"
            placeholder="password"
            type="password"
            mb={4}
          />

          <Button h="36px" width="100%" my={2} type="submit">
            Register
          </Button>

          <Flex fontSize="9pt" justify="center" mb={2}>
            <Text mr={1}>Got an account already?</Text>
            <Text
              color="orange.200"
              fontWeight={700}
              cursor="pointer"
              onClick={onToggle}
              _hover={{ textDecoration: "underline" }}
            >
              Login
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
