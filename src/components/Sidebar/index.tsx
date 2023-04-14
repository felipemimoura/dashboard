import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiDashboardLine } from "react-icons/ri";
import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  return (
    <Stack spacing="12" alignItems="center">
      <SidebarNav />
    </Stack>
  );
};
