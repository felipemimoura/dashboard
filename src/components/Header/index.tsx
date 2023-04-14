import {
  Flex,
  IconButton,
  Image,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { Profile } from "../Profile";
import { RiMenuLine } from "react-icons/ri";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      width="100%"
      height="20"
      maxWidth={1480}
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
      border="2px"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          marginRight="2"
          variant="unstyled"
        ></IconButton>
      )}
      {isWideVersion && (
        <Image
          src="logo.svg"
          alt="Pacto Energia"
          boxSize="150px"
          objectFit="fill"
        />
      )}
      <Flex align="center" marginLeft="auto">
        <Profile />
      </Flex>
    </Flex>
  );
};
