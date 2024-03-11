import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import InputErrorMessage from '../InputErrorMessage/InputErrorMessage';
import * as S from './Styles';

const Input = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <S.Label htmlFor={props.id}>{props?.label}</S.Label>
      {props.type === 'password' ? (
        <S.ContentInputPassword>
          <S.Input
            id={props.id}
            type={!showPassword ? props.type : 'text'}
            autoComplete="off"
            name={props.id}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            value={props.value || ''}
            onChange={props.onChange}
            $error={props?.error?.path === props.id}
          />
          <S.ButtonPasswordVisibility
            onClick={togglePasswordVisibility}
            type="button"
          >
            {showPassword ? <BsEye /> : <BsEyeSlash />}
          </S.ButtonPasswordVisibility>
        </S.ContentInputPassword>
      ) : (
        <S.Input
          id={props.id}
          type={props.type}
          autoComplete="off"
          name={props.id}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          value={props.value || ''}
          onChange={props.onChange}
          $error={props?.error?.path === props.id}
        />
      )}
      {props?.error?.path === props.id && (
        <InputErrorMessage error={props.error} />
      )}
    </>
  );
};
Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.shape({
    error: PropTypes.bool,
    path: PropTypes.string,
    message: PropTypes.string,
  }),
};

export default Input;
