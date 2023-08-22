import { Link, animateScroll as scroll } from "react-scroll";

const NavItem = ({
  title,
  name,
  isActive,
}: {
  key: string;
  title: string;
  name: string;
  isActive: boolean;
}) => {
  return (
    <li
      className={` ${
        isActive
          ? "bg-dark text-light hover:bg-semiDark"
          : "text-dark bg-ghost hover:bg-semiLight"
      } section cursor-pointer duration-100 text-2xl px-2 py-1 rounded-xl `}
    >
      <Link
        className="text-2xl"
        smooth={true}
        duration={400}
        offset={-120}
        to={name}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
