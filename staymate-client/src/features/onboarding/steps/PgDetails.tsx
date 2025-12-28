import Input from "../../../components/form/Input";
import Checkbox from "../../../components/form/Checkbox";
import StepLayout from "../components/StepLayout";
import StepActions from "../components/StepActions";
export default function PgDetails() {
  return (
    <StepLayout
      title="Add Your First PG"
      description="You can add more PGs later."
    >
      <div className="space-y-4">
        <Input label="PG Name" />
        <Input label="Location" />

        <Checkbox label="PG for Boys" />
        <Checkbox label="PG for Girls" />
      </div>
      <StepActions />
    </StepLayout>
  );
}
