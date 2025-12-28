import Container from "../layout/Container";

export default function HowItWorks() {
  const steps = ["Search", "Compare", "Stay"];

  return (
    <section className="bg-white py-20 border-t">
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step} className="text-center bg-gray-50 p-6 rounded-xl">
              <div className="w-10 h-10 bg-primary text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                {i + 1}
              </div>
              <h4 className="font-medium">{step}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
