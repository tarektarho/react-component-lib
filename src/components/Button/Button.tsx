import './Button.css'

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button id='lib-button'>{props.label}</button>;
};

export default Button;