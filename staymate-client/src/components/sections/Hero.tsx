import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <Container>
        <h2 className="text-4xl font-bold max-w-xl">
          Find Your Perfect Stay, Made Simple
        </h2>
        <p className="text-gray-600 mt-4 max-w-md">
          Affordable, verified stays designed for modern living.
        </p>
      </Container>
    </section>
  );
}
