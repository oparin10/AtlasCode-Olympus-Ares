import React from "react";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styled from "styled-components";

interface MarkdownFieldProps extends FieldComponentProps {}

const allPlugins = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["paragraphStyle", "blockquote"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["fontColor", "hiliteColor", "textStyle"],
  ["removeFormat"],
  "/",
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "lineHeight"],
  ["table", "link", "image"],
  ["showBlocks", "codeView"],
];

const MarkdownFieldRoot = styled.div`
  .sun-editor {
    /* border: none;; */
    /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25); */
    border: solid 0.5px rgba(51, 51, 51, 0.2);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:focus,
    :active,
    :focus-within,
    :visited {
      box-shadow: 0px 1px 10px rgba(17, 6, 173, 0.5);
    }
  }

  .se-btn-tray {
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  .se-toolbar {
    outline: none;
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.1);
  }

  .se-resizing-bar {
    border: none;
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.1);
  }

  .se-btn-tool-font {
    font-family: "Iceland";
  }

  .se-btn-tool-size {
    font-family: "Iceland";
  }

  .se-btn-tool-format {
    font-family: "Iceland";
  }
`;

const MarkdownFieldWiget = ({
  label,
  changeField,
  currentValues,
  name,
}: MarkdownFieldProps) => {
  const markdownEditorRef: React.RefObject<any> = React.useRef(null);

  React.useEffect(() => {
    console.log(markdownEditorRef.current.editor.core);
  }, []);

  return (
    <MarkdownFieldRoot>
      <SunEditor
        ref={markdownEditorRef}
        onFocus={() => console.log("ass")}
        lang="pt_br"
        onChange={(value: any) => changeField(name, value)}
        setOptions={{
          height: "auto",
          minHeight: "200",
          buttonList: allPlugins,
          imageUrlInput: true,
          imageFileInput: false,
        }}
      />
    </MarkdownFieldRoot>
  );
};

export default MarkdownFieldWiget;
