import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${({ theme }) => theme.color.secondary};

  :hover {
    background: ${({ theme }) => shade(0.2, theme.color.secondary)};
  }

  button {
    width: 100%;
    height: 100%;
    padding: 4px;
  }

  svg {
    color: ${({ theme }) => theme.color.fontSecondary};
    width: 100%;
    height: 100%;
  }
`;
