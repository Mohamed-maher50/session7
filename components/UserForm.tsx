"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const userZodSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  age: z.number().min(18, { message: "Age must be a > 18 " }),
  gender: z.enum(["male", "female"], { message: "Gender is required" }),
  email: z.email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Invalid phone number" }),
});
type userFormValuesTypes = z.infer<typeof userZodSchema>;
const updateZodSchema = userZodSchema.partial();
type updateFormValuesTypes = z.infer<typeof updateZodSchema>;

export type formValuesTypes = userFormValuesTypes | updateFormValuesTypes;
export type UserFormProps =
  | {
      defaultValues?: userFormValuesTypes;
      mode?: "create";
      onSubmit?: (values: formValuesTypes) => void;
    }
  | {
      defaultValues?: updateFormValuesTypes;
      mode: "edit";
      onSubmit: (values: formValuesTypes) => void;
    };

const DEFAULT_VALUES: userFormValuesTypes = {
  firstName: "",
  lastName: "",
  age: 18,
  gender: "male",
  email: "",
  phone: "",
};

function UserForm({
  defaultValues = DEFAULT_VALUES,
  mode = "create",
  onSubmit,
}: UserFormProps) {
  const isEditMode = mode === "edit";

  const form = useForm<formValuesTypes>({
    resolver: zodResolver(isEditMode ? updateZodSchema : userZodSchema),
    values: defaultValues,
  });

  return (
    <form
      className="grid gap-4 rounded-xl border bg-card p-6 text-card-foreground shadow-sm"
      onSubmit={form.handleSubmit(onSubmit || (() => {}))}
    >
      <FieldSet>
        <FieldLegend>{isEditMode ? "Update user" : "Create user"}</FieldLegend>

        <FieldGroup>
          <Field data-invalid={!!form.formState.errors.firstName}>
            <FieldLabel htmlFor="firstName">First name</FieldLabel>
            <Input id="firstName" {...form.register("firstName")} />
            <FieldError errors={[form.formState.errors.firstName]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.lastName}>
            <FieldLabel htmlFor="lastName">Last name</FieldLabel>
            <Input id="lastName" {...form.register("lastName")} />
            <FieldError errors={[form.formState.errors.lastName]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.age}>
            <FieldLabel htmlFor="age">Age</FieldLabel>
            <Input
              id="age"
              type="number"
              {...form.register("age", { valueAsNumber: true })}
            />
            <FieldError errors={[form.formState.errors.age]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.gender}>
            <FieldLabel htmlFor="gender">Gender</FieldLabel>
            <Select id="gender" {...form.register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
            <FieldError errors={[form.formState.errors.gender]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.email}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" {...form.register("email")} />
            <FieldError errors={[form.formState.errors.email]} />
          </Field>

          <Field data-invalid={!!form.formState.errors.phone}>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input id="phone" {...form.register("phone")} />
            <FieldError errors={[form.formState.errors.phone]} />
          </Field>
        </FieldGroup>
      </FieldSet>

      <Button type="submit" disabled={form.formState.isSubmitting}>
        {isEditMode ? "Update user" : "Create user"}

        {form.formState.isSubmitting ? "..." : ""}
      </Button>
    </form>
  );
}

export default UserForm;
