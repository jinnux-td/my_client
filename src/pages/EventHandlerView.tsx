import Toolbar from "src/components/ToolBar";

export default function ConditionalView() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}
