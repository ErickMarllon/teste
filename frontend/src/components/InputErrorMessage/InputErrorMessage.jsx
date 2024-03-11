import PropTypes from 'prop-types';
import * as S from './Styles';

const InputErrorMessage = ({ ...props }) => {
  if (!props.error.error) {
    return null;
  }
  const errorMsg = props.error.message
    ? props.error.message
    : 'Campo obrigatório!';
  return <S.TextError>{errorMsg}</S.TextError>;
};

InputErrorMessage.propTypes = {
  error: PropTypes.shape({
    error: PropTypes.bool,
    message: PropTypes.string,
  }),
};

export default InputErrorMessage;
