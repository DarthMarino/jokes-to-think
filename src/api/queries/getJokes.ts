import PocketBase from "pocketbase";
import { JokesResponse } from "../../../types/pocketbase-types";
import { UserExpand } from "../../../types/query-types";

export async function getJokes() {
  const pb = new PocketBase("http://127.0.0.1:8090");

  const records = await pb
    .collection("jokes")
    .getFullList<JokesResponse<UserExpand>>({
      sort: "-created",
      expand: "user",
      fields: "*,expand.user.username,expand.user.id",
    });

  return records;
}
