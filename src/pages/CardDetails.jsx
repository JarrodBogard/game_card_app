import { useLoaderData } from "react-router";
const CardDetails = () => {
  const { data } = useLoaderData();
  const card = data[5];

  console.log(data);

  const CardDetails = (
    <div>
      <h1>{card.name}</h1>
      <ul>
        <li>Attack: {card.attack}</li>
        <li>Health: {card.health}</li>
        <li>Cost: {card.cost}</li>
        <li>Faction: {card.faction}</li>
      </ul>
      <img src={card.img} />
    </div>
  );

  return <div>{CardDetails}</div>;
};

export default CardDetails;
