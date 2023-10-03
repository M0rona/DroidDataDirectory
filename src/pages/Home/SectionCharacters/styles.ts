import styled from 'styled-components';

interface HeaderProps {
  $space: boolean;
}

export const Header = styled.header<HeaderProps>`
  display: flex;
  justify-content: ${({ $space }) => ($space ? 'space-between' : 'center')};
  gap: 30px;
  align-items: center;

  margin-right: 20px;
`;

export const Characters = styled.ul`
  overflow: hidden;
  overflow-y: auto;
`;

export const NumberCharacters = styled.p`
  color: #B6B6B6;

  span {
    color: #fff;
    font-weight: bold;
  }
`
