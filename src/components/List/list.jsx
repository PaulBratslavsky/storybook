import { ListStyled } from './styles';

export default function List({ items, icon }) {
  return (
    <ListStyled>
      {items &&
        items.map((item, index) => (
          <li key={index}>
            {icon && icon}
            <span>{item}</span>
          </li>
        ))}
    </ListStyled>
  );
}