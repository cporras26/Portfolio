import Description from "@/app/components/AboutMe/Description";

export default function Information() {
  return (
    <section className="flex gap-6 flex-col lg:flex-row px-5 md:px-24 mb-10">
      <Description
      >
        My name is Carlos Porras. I have a bachelor's degree in IT Management, obtained from
        the University "Technological Institute of Costa Rica". I have been working as a full-stack engineer since
        November of
        2021 and since that moment, I felt in love with programming.
      </Description>
      <Description
      >
        I am always trying to learn new things or emphasize on my existing knowledge, because we, as
        software engineers, always need to stay on top of the changes that arise every now and then.
      </Description>
      <Description
      >
        I love that this job lets me create things from scratch, design and architect my own solutions, and
        always think how I can make my solution better, because there is always a space for improvement.
      </Description>
    </section>);
}