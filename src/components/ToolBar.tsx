export default function Toolbar({
  onPlayMovie,
  onUploadImage,
}: {
  onPlayMovie: () => void;
  onUploadImage: () => void;
}) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("clicked");
      }}
    >
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return <button onClick={onClick}>{children}</button>;
}
