import Container from "../layout/Container";
import Card from "../ui/Card";

export default function Features() {
  const items = [
    "Verified Listings",
    "Affordable Pricing",
    "Flexible Stays",
    "Trusted Community",
  ];

  return (
    <section className="py-20">
      <Container>
        <h3 className="text-3xl font-semibold text-center mb-12">
          Why Choose StayMate?
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item}>
              <h4 className="font-medium text-center">{item}</h4>
              <p className="text-sm text-gray-500 text-center mt-2">
                Reliable and secure experience.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
