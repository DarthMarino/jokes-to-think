import PocketBase from "pocketbase";
import { JokesResponse } from "../../../types/pocketbase-types";

export async function getUserJokes(id: string) {
  const pb = new PocketBase("http://127.0.0.1:8090");

  const records = await pb.collection("jokes").getFullList<JokesResponse>({
    sort: "-created",
    filter: `user = "${id}"`,
  });

  return records;
}
