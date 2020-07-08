import React from "react";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
} from "react-icons/fa";
import NoteCommandButton from "../NoteCommandButton";
import {
  CommandWrapper,
  Container,
  EditableArea,
  CommandSeparator,
} from "./styles";

function Note() {
  return (
    <Container>
      <CommandWrapper>
        <CommandSeparator />
        <NoteCommandButton icon={FaAlignLeft} command="justifyLeft" />
        <NoteCommandButton icon={FaAlignCenter} command="justifyCenter" />
        <NoteCommandButton icon={FaAlignRight} command="justifyRight" />
        <NoteCommandButton icon={FaAlignJustify} command="justifyFull" />
        <CommandSeparator />
      </CommandWrapper>
      <EditableArea contentEditable={true}  />
    </Container>
  );
}

export default Note;
