import { NavLink } from "react-router-dom";

function CustomNavLink({ to, children, className = "" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${className} active` : className
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
