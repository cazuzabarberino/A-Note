import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 600px;

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CommandWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;

  background: ${({ theme }) => theme.color.secondary};
  padding: 8px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.color.fontPrimary};
`;

export const CommandSeparator = styled.div`
  align-self: stretch;
  width: 2px;
  margin: 4px;
  background: ${({ theme }) => theme.color.fontSecondary};
`;

export const EditableArea = styled.div`
  flex: 1;
  padding: 32px;
`;
