import { HStack } from "@chakra-ui/layout";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { authPageSeleted } from "../../atoms";
import { useRouter } from "next/router";
import { LayoutProps } from "../../types";
import { isAuthenticated } from "../../atoms";
import { useToast } from "@chakra-ui/react";
import { createUser, updateUser, userSignIn } from "../../lib/auth";
import AccountAuthPageButton from "./AccountAuthPageButton";

export default function AccountForms({ title }: LayoutProps) {
  const router = useRouter();
  const toast = useToast();
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  // isAuthenticated: to redirect home page; authPageGlobal: to dynamically show and hide username input
  const [authPageGlobal, setAuthPageGlobal] = useRecoilState(authPageSeleted);
  const [isAuth, setIsAuth] = useRecoilState(isAuthenticated);
  const [mounted, setMounted] = useState(false);

  // only renders UI that uses the current theme when mounted ( fix hydration mismatch error )
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const arr = [1, 2, 3, 4];

  const { username, password } = userInput;

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      let result;
      if (authPageGlobal === "Sign Up") {
        if (username.trim().length < 4 || password.length < 4) {
          toast({
            title: "Your name and password must be at least 4 letters",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
          setUserInput({ username: "", password: "" });
          return;
        }
        result = await createUser(username, password);
      } else if (authPageGlobal === "Sign In") {
        result = await userSignIn(password);
      } else if (authPageGlobal === "Recovery") {
        console.log(username);
        result = await updateUser(username, password);
      }

      if (result?.message === "AUTHENTICATED") {
        setIsAuth(true);
        router.replace("/");
        setAuthPageGlobal("Sign In");
      } else if (result?.message === "NOT FOUND") {
        toast({
          title: "Account doesn't exist",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else if (result?.message === "ALREADY EXISTS") {
        toast({
          title: "Username or password already existed",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log("ERROR ", error);
    }
    setUserInput({ username: "", password: "" });
  };

  return (
    <>
      {(authPageGlobal === "Sign Up" || authPageGlobal === "Recovery") && (
        <input
          value={userInput.username}
          onChange={(e) =>
            setUserInput((userInput) => ({
              ...userInput,
              username: e.target.value,
            }))
          }
          required
          name="Username"
          placeholder="Your name"
          className="border-2 border-headline dark:border-btn_dark bg-background dark:bg-background_dark rounded-lg p-4 m-5 w-full"
        />
      )}
      <HStack width="full" className="flex">
        <PinInput
          value={userInput.password}
          onChange={(e: any) =>
            setUserInput((userInput) => ({
              ...userInput,
              password: e,
            }))
          }
        >
          {arr.map((index) => (
            <PinInputField
              flex="1"
              border="main"
              bg="main"
              required
              name="Password"
              key={index}
              className="dark:text-white border-2 border-main dark:border-btn_dark"
            />
          ))}
        </PinInput>
      </HStack>
      <AccountAuthPageButton submitHandler={submitHandler} title={title} />
    </>
  );
}
