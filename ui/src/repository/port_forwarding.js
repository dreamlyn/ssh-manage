
import { COLLECTION_NAME_PORT_FORWARDING, getPocketBase } from "./_pocketbase";

export const list = async (request) => {
  const pb = getPocketBase();

  const filters = [];
  // if (request.keyword) {
  //   filters.push(pb.filter("name~{:keyword}", { keyword: request.keyword }));
  // }

  return await pb.collection(COLLECTION_NAME_PORT_FORWARDING).getFullList({
    filter: filters.join(" && "),
    sort: "label",
    requestKey: null,
  });
};

export const get = async (id) => {
  return await getPocketBase().collection(COLLECTION_NAME_PORT_FORWARDING).getOne(id, {
    requestKey: null,
  });
};

export const save = async (record) => {
  if (record.id) {
    return await getPocketBase()
      .collection(COLLECTION_NAME_PORT_FORWARDING)
      .update(record.id, record);
  }

  return await getPocketBase().collection(COLLECTION_NAME_PORT_FORWARDING).create(record);
};

export const remove = async (record) => {
  return await getPocketBase().collection(COLLECTION_NAME_PORT_FORWARDING).delete(record.id);
};

export const subscribe = async (id, cb) => {
  return getPocketBase().collection(COLLECTION_NAME_PORT_FORWARDING).subscribe(id, cb);
};

export const unsubscribe = async (id) => {
  return getPocketBase().collection(COLLECTION_NAME_PORT_FORWARDING).unsubscribe(id);
};
