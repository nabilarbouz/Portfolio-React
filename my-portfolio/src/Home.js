import MyNavbar from "./MyNavbar";
import Container from "react-bootstrap/Container";
import PortfolioItems from "./PortfolioItems";

const Home = () => {
  return (
    <section>
      <Container className="m-8">
        <h2>Projects and Code</h2>
        <PortfolioItems />
      </Container>
    </section>
  );
};

export default Home;
