"use client";

import UserForm, { formValuesTypes } from "@/components/UserForm";
import { $api } from "@/lib/tanstack.query";
import { useParams } from "next/navigation";

function EditUser() {
  const params = useParams();
  const { data } = $api.useQuery(
    "get",
    "/users/{id}",
    {
      params: {
        path: {
          id: params.userId as string,
        },
      },
    },
    { enabled: !!params.userId },
  );
  const onSubmit = (values: formValuesTypes) => {
    console.log(values);
  };
  return <UserForm onSubmit={onSubmit} defaultValues={data} />;
}

export default EditUser;
