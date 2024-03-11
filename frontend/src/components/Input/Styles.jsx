import styled from 'styled-components';

export const Label = styled.label`
  color: #fafafa;
  text-align: left;
  font-size: clamp(0.8rem, 0.0426rem + 2.1064vw, 1rem);
  padding-top: 10px;
`;
export const Input = styled.input`
  border: 0.0625rem solid
    ${({ $error }) => ($error ? ` #eb4242` : 'transparent')};
  border-radius: 5px;
  text-indent: 5px;
  background-color: #f5f5f5;
  color: #000;
  height: 30px;
  position: relative;
  width: 100%;
  &:focus {
    border: none;
    outline: 0.01rem solid #e5e7eb30;
  }
  &:invalid {
    outline: 0.0625rem solid #eb4242;
  }
`;
export const ContentInputPassword = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 250px;
`;
export const ButtonPasswordVisibility = styled.button`
  height: 100%;
  padding: 0 20px;
  color: #000;
  background-color: transparent;
  right: 0;
  position: absolute;
  outline: none;
  border: none;
  svg {
    margin-top: 3.7px;
  }
  &:focus {
    border: none;
    outline: none;
  }
`;
