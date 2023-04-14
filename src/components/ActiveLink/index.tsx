import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
};

export const ActiveLink = ({
  children,
  shouldMatchExactHref,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  let isActive = false
  if(shouldMatchExactHref && (asPath === rest.href || asPath == rest.as)){
    isActive = true
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(rest.href.toString()) ||
      !!rest.as && asPath.startsWith(rest.as.toString()))
  ) {
    isActive = true;
  }

  return(
    <Link {...rest}>
    {cloneElement(children,{color: isActive ? 'green.500' : 'blue.800'})}
    </Link>
  )
};
