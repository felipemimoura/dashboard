import { Stack } from "@chakra-ui/react"
import { NavSection } from "./NavSection"
import { NavLink } from "./NavLink"
import {RiDashboardLine} from "react-icons/ri"

export const SidebarNav =  () => {
    return(
        <Stack spacing="12" alignItems="flex-start">
            <NavSection title="Cadastro Aplicações">
                <NavLink href="/dashboard" icon={RiDashboardLine}>
                    Dashboard
                </NavLink>
                <NavLink href="/test" icon={RiDashboardLine}>
                    teste
                </NavLink>
            
            </NavSection>
        </Stack>
    )
}