import leaf from "../assets/b-leaf.png";
import FlowerIcon from "../components/Icons/FlowerIcon";

function JoinUs() {
  return (
    <section
      id="join-us"
      className="relative bg-secondary p-10 lg:py-20 text-3xl lg:text-5xl tracking-wide uppercase text-center"
    >
      <h3>
        Invite you
        <span className="text-primary italic text-xl lg:text-2xl block my-2 lg:my-6 normal-case font-bold">
          to
        </span>
        join the celebration
        <span className="text-primary italic text-xl lg:text-2xl block my-2 lg:my-6 normal-case font-bold">
          of
        </span>
        their marriage
        <div className="flex justify-around lg:justify-evenly my-8 max-w-80 mx-auto">
          <FlowerIcon className="w-10 fill-primary" />
          <FlowerIcon className="w-10 fill-primary [transform:rotateY(180deg)]" />
        </div>
        <span className="font-bold">18th July 2022</span>
      </h3>
      <img
        className="w-16 mt-14 mb-0 mx-auto "
        src={leaf}
        alt="Decoration leaf"
      />
    </section>
  );
}

export default JoinUs;
