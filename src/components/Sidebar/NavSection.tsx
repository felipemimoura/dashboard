import { Box, Text, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

type NavSectionProps = {
  title: string;
  children: ReactNode;
};
export const NavSection = ({ children, title }: NavSectionProps) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" marginTop="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
