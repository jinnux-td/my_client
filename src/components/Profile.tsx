import Card from "src/components/Card";
import { getImageUrl } from "src/utils/utils";

export default function Profile({
  person: { name, profession, awards, discovered, image },
  imageSize = 70,
}: {
  person: {
    name: string;
    profession: string;
    awards: string[];
    discovered: string;
    image: string;
  };
  imageSize?: number;
}) {
  return (
    <section className="profile">
      <Card>
        <div className="card-content">
          <img
            className="avatar"
            src={getImageUrl(image)}
            alt={name}
            width={imageSize}
            height={imageSize}
          />
          <h2>{name}</h2>
        </div>
      </Card>
      <Card>
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: 4 </b>({awards.join(", ")})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </Card>
    </section>
  );
}
