import { ButtonStyled } from './styles'

export default function Button({ text = "title", disabled, icon, ...rest }) {
  return (
    <ButtonStyled disabled={disabled} {...rest} >
      <span>{text}</span>
      {icon && icon}
    </ButtonStyled>
  );
}