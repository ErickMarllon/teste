import styled from 'styled-components';

export const NewClient = styled.button`
  background-color: #4a62ff;
  font-weight: 700;
  font-size: 1rem;
  color: #fafafa;
  cursor: pointer;
  padding: 5px;
  margin-top: 5px;
  border-radius: 10px;
  transition: 0.5s ease;
  &:hover {
    border: 1px solid #4257e0;
  }
`;
export const Container = styled.div`
  ${({ $open }) =>
    $open &&
    `width: 100%;
    min-height: 100%;
    position: fixed;
    top:0;
    left:0;
    backdrop-filter: blur(3px) grayscale(80%);
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;
export const Content = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000000d8;
  border-radius: 10px;
  padding-bottom: 20px;
`;
export const ButtonCloseModal = styled.button`
  content: 'X';
  width: 25px;
  height: 25px;
  color: #fafafa;
  position: absolute;
  background-color: #5f5f5fab;
  z-index: 200;
  cursor: pointer;
  right: -0.4%;
  top: -0.3%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: 'X';
    position: absolute;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02rem;
  padding: 20px 0 0 0;
`;
export const ButtonHandleView = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 10px;
  color: #fafafa;
  background-color: #4a62ff;
  &:hover {
    background-color: #4257e0;
  }
`;
export const ContentClients = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  height: 300px;
  overflow: auto;
  position: relative;
  padding: 20px 0;
`;
export const Client = styled.li`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 250px;
  padding-left: 20px;
  color: #fafafa;
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
export const TextSuccess = styled.p`
  color: #0dc70d;
  text-align: center;
  padding-top: 20px;
`;
