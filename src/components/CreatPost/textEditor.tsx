import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { Dispatch, SetStateAction } from "react";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type TextEditorProps = {
  bodyText: string;
  setBodyText: Dispatch<SetStateAction<string>>;
};

export default function TextEditor({ bodyText, setBodyText }: TextEditorProps) {
  return (
    <div data-color-mode="light">
      <MDEditor
        value={bodyText}
        onChange={(e) => setBodyText(e!)}
        height={400}
      />
    </div>
  );
}
