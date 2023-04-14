import { Avatar, Flex, Box, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};
export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Pacto Developer</Text>
          <Text fontSize="small">developer@pacto.com.br</Text>
        </Box>
      )}

      <Avatar size="md" name="pacto developer"/>
    </Flex>
  );
};
