import './style.css';

let list = [
  {
    index: 0,
    description: 'Do laundry',
    completed: false,
  },
  {
    index: 1,
    description: 'Do laundry',
    completed: false,
  },
  {
    index: 2,
    description: 'Do Challenge',
    completed: false,
  },

];

const store = () => {
  const json = JSON.stringify(list);
  localStorage.setItem('list', json);
};

export {
  list
};