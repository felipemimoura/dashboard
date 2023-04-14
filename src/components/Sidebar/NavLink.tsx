import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";
type NavLinkProps = ChakraLinkProps & {
  icon: ElementType;
  href: string;
  children: string;
  shouldMatchExactHref?: boolean;
};
export const NavLink = ({
  children,
  href,
  icon,
  shouldMatchExactHref,
  ...rest
}: NavLinkProps) => {
  return (
    <ActiveLink
      href={href}
      shouldMatchExactHref={shouldMatchExactHref}
      passHref
    >
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text marginTop="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
};
