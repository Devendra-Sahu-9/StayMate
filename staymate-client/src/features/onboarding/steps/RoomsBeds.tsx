import Input from "../../../components/form/Input";
import StepActions from "../components/StepActions";
import StepLayout from "../components/StepLayout";
export default function RoomsBeds() {
  return (
    <StepLayout title="Set Up Rooms & Beds">
      <div className="space-y-4">
        <Input label="Room Name" />
        <Input label="Number of Beds" />

        <StepActions />
      </div>
    </StepLayout>
  );
}
