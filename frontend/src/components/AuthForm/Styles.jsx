import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff2b;
  border-radius: 10px;
`;
export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02rem;
  padding: 20px 0 0 0;
`;
export const ContentForm = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  column-gap: 30px;
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0;
  color: #fafafa;
`;
export const ButtonSubmit = styled.button`
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #4a62ff;
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  transition: 0.8s ease;
  &:hover {
    background-color: #4257e0;
    color: #c9c9c9;
  }
  &:active {
    transform: scale(0.95);
  }
`;
export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  height: 40px;
`;
export const AuthFooterText = styled.p`
  font-size: 0.8rem;
  color: #fff;
`;
export const AuthFooterButton = styled.button`
  font-size: 0.8rem;
  text-decoration: none;
  list-style: none;
  font-weight: 700;
  color: #c9c9c9;
  background-color: transparent;
  transition: 0.8s ease;
  padding: 10px 20px 10px 5px;

  &:hover {
    color: #fafafa;
  }
  &:focus {
    outline: none;
  }
`;
