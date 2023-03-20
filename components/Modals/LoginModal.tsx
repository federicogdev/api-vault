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
import { useToast } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

type Props = {};

const LoginModal = (props: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const toast = useToast();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);

      await signIn("credentials", {
        email: loginForm.email,
        password: loginForm.password,
      });

      toast({
        title: "Successfully logged in",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      loginModal.onClose();
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
          <form onSubmit={onSubmit}>
            <Input
              name="email"
              placeholder="email"
              type="email"
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
              h="36px"
              width="100%"
              my={2}
              type="submit"
              isLoading={isLoading}
            >
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
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
