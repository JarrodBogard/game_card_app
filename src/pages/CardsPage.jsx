import { useLoaderData } from "react-router";

const CardsPage = () => {
  const data = useLoaderData();

  const cards = (
    <ul>
      {data.map((card) => (
        <li key={card.cardId + card.name}>
          <h1>{card.name}</h1>
          <img src={card.img} />
        </li>
      ))}
    </ul>
  );

  return <div>{cards}</div>;
};

export default CardsPage;
