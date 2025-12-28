import Container from "../layout/Container";
import Button from "../ui/Button";
import Select from "../ui/Select";
import { LOCATIONS, STAY_TYPES, DURATIONS } from "../../app/constants";

export default function SearchBar() {
  return (
    <section className="-mt-12 relative z-10">
      <Container>
        <div className="bg-bgCard rounded-2xl shadow-lg p-6 grid md:grid-cols-4 gap-4">
          <Select placeholder="Select Location" options={LOCATIONS} />

          <Select placeholder="Stay Type" options={STAY_TYPES} />

          <Select placeholder="Duration" options={DURATIONS} />

          <Button>Search</Button>
        </div>
      </Container>
    </section>
  );
}
