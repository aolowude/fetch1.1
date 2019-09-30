import * as React from "react";
import { Card } from "./Card";
import { CardData } from "./types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <ul className="card-list">
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

export const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);

const cardData: CardData[] = [
  // Photo by ivan Torres on Unsplash
  {
    id: "c",
    category: "Weight Gain",
    title: "Increase your weight and muscle",
    pointOfInterest: 80,
    backgroundColor: "#814A0E"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "FITNESS",
    title: "Foods to keep your energy up and weight down",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    category: "MOODY",
    title: "Foods to help with those mood swings",
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    category: "Weight loss",
    title: "Foods to replace those cupcakes we love so much",
    pointOfInterest: 60,
    backgroundColor: "#282F49"
  }
];
