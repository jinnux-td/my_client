import Item from "src/components/Item";

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}