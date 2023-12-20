import Container from "@/app/UI/Container";
import Background from "@/app/components/AboutMe/Background";
import Header from "@/app/components/AboutMe/Header";
import Information from "@/app/components/AboutMe/Information";
import TechSkills from "@/app/components/AboutMe/AboutMeCards/TechSkills";


export default function AboutMe() {
  return (
    <Background>
      <Container>
        <Header />
        <Information />
        <TechSkills />
      </Container>
    </Background>

  );
}