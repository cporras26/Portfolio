import PortfolioBackground from "@/app/components/Portfolio/PortfolioBackground";
import Container from "@/app/UI/Container";
import PortfolioHeading from "@/app/components/Portfolio/PortfolioHeading";
import { DataArray } from "@/app/data";
import Card from "@/app/components/Portfolio/PortfolioCards/Card";
import CardsContainer from "@/app/components/Portfolio/PortfolioCards/CardsContainer";

export default function Portfolio() {
  return (
    <PortfolioBackground>
      <Container>
        <PortfolioHeading />
        <CardsContainer>
          {DataArray.map((item, index) => (
            <Card item={item} />
          ))}
        </CardsContainer>
      </Container>
    </PortfolioBackground>);
}