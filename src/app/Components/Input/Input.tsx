import * as S from "./Input.styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  size?: number;
  className?: string;
  label?: string;
}

export const Input = (props: InputProps) => {
  const { label, autoFocus, placeholder, value, onChange, type, disabled, id } =
    props;

  return (
    <S.InputWrapper>
      <S.Label htmlFor={label}>{label}</S.Label>
      <S.InputField
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete="off"
        autoFocus={autoFocus}
      />
    </S.InputWrapper>
  );
};

export default Input;
