import PocketBase from "pocketbase";
import {
  JokesResponse,
  UsersRecord,
  UsersResponse,
} from "../../../types/pocketbase-types";

export async function getSingleUser(id: string) {
  const pb = new PocketBase("http://127.0.0.1:8090");

  const record = await pb.collection("users").getOne<UsersResponse>(id, {
    expand: "relField1,relField2.subRelField",
  });

  return record;
}
