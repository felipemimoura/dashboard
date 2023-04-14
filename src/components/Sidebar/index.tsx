import { Stack } from "@chakra-ui/react"
import { NavSection } from "./NavSection"
import { NavLink } from "./NavLink"
import {RiDashboardLine} from "react-icons/ri"

export const Sidebar = () => {
    return(
        <Stack spacing="12" alignItems="center" border="2px">
            <NavSection title="Cadastro de aplicações">
            <NavLink href="/dashboard" icon={RiDashboardLine}>
                Dashboard
            </NavLink>
            </NavSection>
        </Stack>
    )
}