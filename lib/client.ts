import createClient from "openapi-fetch";
import { paths } from "./api/apiTypes.schema";
export const client = createClient<paths>({
  baseUrl: "https://dummyjson.com/",
});
