import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const TextError = styled.p`
  color: #eb4242;
  font-size: 0.8125em;
  font-weight: 400;
  margin: 1px 0 -10px 0;
  animation: ${fadeInOut} 1s ease-in-out forwards;
`;
