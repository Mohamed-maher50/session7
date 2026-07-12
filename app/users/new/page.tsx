"use client";

import UserForm, { formValuesTypes } from "@/components/UserForm";
import { $api } from "@/lib/tanstack.query";

function CreateNewUser() {
  const createUser = $api.useMutation("post", "/users/add");
  const onSubmit = async (values: formValuesTypes) => {
    await createUser.mutateAsync({
      body: values as Required<formValuesTypes>,
    });
  };
  return <UserForm onSubmit={onSubmit} mode="create" />;
}

export default CreateNewUser;
