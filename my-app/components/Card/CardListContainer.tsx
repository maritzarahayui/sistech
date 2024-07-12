import { CardList } from "./CardList";

const data = [
  {
    title: "lorem ipsum",
    description: "10 min",
    thumbnail: "/images/tinkerbell.jpg",
    url: "https://mareta.codes/",
  },
  {
    title: "lorem ipsum",
    description: "10 min",
    thumbnail: "/images/princess.jpg",
    url: "instagram.com",
  },
];

function CardListContainer() {
  return <CardList cards={data} />;
}

export { CardListContainer };