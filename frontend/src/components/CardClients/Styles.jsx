import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  background-color: #e4fafd;
  border-radius: 10px;
  align-items: center;
  padding: 20px;
`;
export const ContentClient = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e4fafd;
  height: 95px;
  padding-bottom: 10px;
`;
export const Client = styled.li`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 230px;
`;
export const ButtonViewCoordinate = styled.button`
  background-color: #2a81cc;
  width: 150px;
  border-radius: 20px;
  padding: 5px;
`;
