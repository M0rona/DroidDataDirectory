import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  gap: 3rem;
  
  .column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 24rem;
  }
`;
