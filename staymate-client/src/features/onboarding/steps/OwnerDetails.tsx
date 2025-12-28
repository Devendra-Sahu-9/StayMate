import Input from "../../../components/form/Input";
import Select from "../../../components/form/Select";
import StepActions from "../components/StepActions";
import StepLayout from "../components/StepLayout";

export default function OwnerDetails() {
  return (
    <StepLayout
      title="Complete Owner Profile"
      description="This information helps us manage your properties securely."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Full Name" />
        <Input label="Phone Number" type="number" />
        <Input label="Email Address" />
        <Select
          label="Verification Type"
          options={[
            { label: "Individual", value: "individual" },
            { label: "Company / Trust", value: "company" },
          ]}
        />
        <div>
          <h4 className="font-medium mb-4">Address Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <Input label="Street" />
            <Input label="ZIP Code" />
            <Select
              label="City"
              options={[
                { label: "New York", value: "new_york" },
                { label: "Los Angeles", value: "los_angeles" },
                { label: "Chicago", value: "chicago" },
              ]}
            />
            <Select label="State" options={[{ label: "Cg", value: "Mp" }]} />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <StepActions hideBack />
      </div>
    </StepLayout>
  );
}
