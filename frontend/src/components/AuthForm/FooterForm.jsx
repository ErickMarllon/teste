import PropTypes from 'prop-types';
import * as S from './Styles';

const FooterForm = ({ AuthFooterText, textFooterButton, handleAuth }) => {
  return (
    <S.ContentFooter>
      <S.AuthFooterText>{AuthFooterText}</S.AuthFooterText>
      <S.AuthFooterButton onClick={handleAuth} type="button">
        {textFooterButton}
      </S.AuthFooterButton>
    </S.ContentFooter>
  );
};
FooterForm.propTypes = {
  AuthFooterText: PropTypes.string,
  textFooterButton: PropTypes.string,
  handleAuth: PropTypes.func,
};
export default FooterForm;
