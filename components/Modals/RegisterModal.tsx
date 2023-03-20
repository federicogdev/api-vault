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
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

type Props = {};

const RegisterModal = (props: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const toast = useToast();

  const [registerForm, setRegisterForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await axios.post("/api/register", {
        email: registerForm.email,
        password: registerForm.password,
        username: registerForm.username,
      });

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      await signIn("credentials", {
        email: registerForm.email,
        password: registerForm.password,
      });

      registerModal.onClose();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Try again",
        status: "error",
        duration: 4000,
        isClosable: true,
      });

      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onToggle = () => {
    if (isLoading) {
      return;
    }
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
          <form onSubmit={onSubmit}>
            <Input
              name="email"
              placeholder="email"
              type="email"
              mb={4}
              onChange={onChange}
            />
            <Input
              name="username"
              placeholder="username"
              type="text"
              mb={4}
              onChange={onChange}
            />
            <Input
              name="password"
              placeholder="password"
              type="password"
              mb={4}
              onChange={onChange}
            />

            <Button
              isLoading={isLoading}
              h="36px"
              width="100%"
              my={2}
              type="submit"
            >
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
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
