import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
  color: #555;
`;

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <p>Sorry, but the page you're searching for is nowhere to be found.</p>
    </NotFoundContainer>
  );
};
