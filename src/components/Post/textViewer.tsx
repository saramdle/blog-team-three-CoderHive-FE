import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import dynamic from "next/dynamic";

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

type TextEditorProps = {
  bodyText: string;
};

export default function TextViewer({ bodyText }: TextEditorProps) {
  return (
    <div data-color-mode="light">
      <MarkdownPreview source={bodyText} style={{ fontSize: 14 }} />
    </div>
  );
}
