export default function Nav(props) {
  return (
    <ul className={props.open ? "header__nav-mobile" : "header__nav"}>
      {props.data.map((item) => (
        <li
          className={
            props.open
              ? `header__nav-item-mobile header__nav-item-mobile_type_${item.name.toLowerCase()}`
              : "header__nav-item"
          }
          onClick={() => props.handleNavClick(item)}
          key={item.name}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
