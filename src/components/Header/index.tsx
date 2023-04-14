import { Flex, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      width="100%"
      height="20"
      maxWidth={1480}
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align={"center"}
      border={"2px"}
    >
      <Image
        src="logo.svg"
        alt="Pacto Energia"
        boxSize="150px"
        objectFit="fill"
      />
    </Flex>
  );
};
