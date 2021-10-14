import { QuoteBoxStyled } from './styles';

export default function QuoteBox({ text, name, icon, width }) {
  return (
    <QuoteBoxStyled width={width}>
      {icon && icon}
      <p>{text}</p>
      <footer>
        <img
          src="https://keystonejs.com/assets/wesbos-square.jpg"
          alt="Wes Bos"
        />
        <span>{name}</span>
      </footer>
    </QuoteBoxStyled>
  );
}