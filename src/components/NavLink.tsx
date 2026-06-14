import { forwardRef } from "react";
import {
  Link,
  LinkProps,
  NavLink as RouterNavLink,
  NavLinkProps,
  To,
} from "react-router-dom";
import { cn } from "@/lib/utils";

export function hrefToTo(href: string): To {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return href;

  const pathname = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex + 1);
  return { pathname, hash: hash ? `#${hash}` : undefined };
}

interface AppLinkProps extends Omit<LinkProps, "to"> {
  href: string;
}

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ href, ...props }, ref) => <Link ref={ref} to={hrefToTo(href)} {...props} />,
);

AppLink.displayName = "AppLink";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className" | "to"> {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={hrefToTo(href)}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { AppLink, NavLink };
