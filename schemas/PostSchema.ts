import p from "pema";
import store from "primate/store";

export const PostSchema = {
  id: store.key.primary(p.u32),
  title: p.string.max(100),
  body: p.string,
  created: p.date.now(),
  updated: p.date.now(),
}
