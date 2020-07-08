import React, { useCallback } from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";

interface Props {
  command: string;
  icon: React.ComponentType<IconBaseProps>;
}

function NoteCommandButton({ command, icon: Icon }: Props) {
  const clickHandler = useCallback(() => {
    document.execCommand(command, false);
  }, [command]);

  return (
    <Container>
      <button onClick={clickHandler}>
        <Icon />
      </button>
    </Container>
  );
}

export default NoteCommandButton;
