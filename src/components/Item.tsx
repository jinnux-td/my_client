export default function Item({
  name,
  isPacked,
}: {
  name: string;
  isPacked: boolean;
}) {
  return (
    <li className="item">
      {name} {isPacked && "✅"}
    </li>
  );
}
