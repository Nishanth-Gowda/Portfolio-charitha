import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      variant={"ghost"}
      onClick={toggleColorMode}
      color={useColorModeValue("gray.400", "gray.600")}
    />
  );
};
