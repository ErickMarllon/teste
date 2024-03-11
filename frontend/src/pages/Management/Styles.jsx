import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
export const ContentClients = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 25px;
  column-gap: 25px;
`;
export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  color: #fafafa;
`;
export const ContentForm = styled.form`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const ContentModals = styled.div`
  display: flex;
  position: relative;
  column-gap: 20px;
`;

export const ButtonSearch = styled.button`
  border-radius: 5px;
  font-size: 18px;
  position: absolute;
  right: -1px;
  cursor: pointer;
  background-color: #4a62ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  transition: 0.8s ease;
  border: none;
  outline: none;
  padding: 0 10px;
  &:hover {
    background-color: #4257e0;
  }
`;

export const ContentEmpyt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const NewClient = styled.button`
  background-color: transparent;
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
