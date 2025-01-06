import Profile from "src/components/Profile";

const persons = [
  {
    name: "Maria Skłodowska-Curie",
    profession: "physicist and chemist",
    awards: [
      "Nobel Prize in Physics",
      "Nobel Prize in Chemistry",
      "Davy Medal",
      "Matteucci Medal",
    ],
    discovered: "polonium (chemical element)",
    image: "szV5sdG",
  },
  {
    name: "Katsuko Saruhashi",
    profession: "geochemist",
    awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
    discovered: "a method for measuring carbon dioxide in seawater",
    image: "YfeOqp2",
  },
];
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {persons.map((person) => (
        <Profile key={person.name} person={person}></Profile>
      ))}
    </div>
  );
}
