import PocketBase from "pocketbase";
import { JokesResponse } from "../../../types/pocketbase-types";

export async function getSingleJoke(id: string) {
  const pb = new PocketBase("http://127.0.0.1:8090");

  const record = await pb.collection("jokes").getOne<JokesResponse>(id, {
    expand: "relField1,relField2.subRelField",
  });

  return record;
}
