import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Flex, Heading, Table, Th, Tr, Thead } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" padding="6">
        <Sidebar />
        <Box flex="1" borderRadius="8" paddingX="8">
          <Flex marginBottom={8} justifyContent="space-between" align="center">
            <Heading color="white">Aplicativos</Heading>
          </Flex>
          <Table bg="blue.800" borderRadius="8">
            <Thead>
              <Tr>
                <Th color="blue.100">ID</Th>
                <Th color="blue.100">Lista de aplicativos</Th>
                <Th color="blue.100">Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
          </Table>
        </Box>
      </Flex>
    </Flex>
  );
}
