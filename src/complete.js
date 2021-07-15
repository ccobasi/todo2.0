import { store, list } from '../index';

const updateList = (lists, check) => {
  const listInLists = list.find((t) => t.description === lists.description);

  listInLists.completed = check;

  lists.completed = check;
  store();
};

export default updateList;