import p from "pema";
import store from "primate/store";
import db from "@/config/db";
import {PostSchema} from "@/schemas/PostSchema";

export default store({
  table: "post",
  db,
  schema: PostSchema,
});
