import Input from "../../../components/form/Input";
import Checkbox from "../../../components/form/Checkbox";
import StepLayout from "../components/StepLayout";
import StepActions from "../components/StepActions";

export default function Caretaker() {
  return (
    <StepLayout title="Assign Caretaker">
      <div className="space-y-4">
        <Checkbox label="Assign Now" />
        <Input label="Caretaker Name" />
        <Input label="Phone Number" />

        <StepActions />
      </div>
    </StepLayout>
  );
}
