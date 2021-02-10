import PortfolioItem from "./PortfolioItem";
import CardColumns from "react-bootstrap/CardColumns";
import { portfolioItems } from "./portfolioItemsData";

function PortfolioItems() {
  return (
    <CardColumns>
      {portfolioItems.map((portfolioItem) => {
        return <PortfolioItem key={portfolioItem.id} {...portfolioItem} />;
      })}
    </CardColumns>
  );
}

export default PortfolioItems;
