const initialOrders = [
  {
    status: 'OPEN',
    name: 'Darth Vader',
    phone: '89908807060',
    comment: 'I am your father',
  },
  {
    status: 'OPEN',
    name: 'Neo',
    phone: '88008888800',
    comment: 'There is no spoon.',
  },
  {
    status: 'DELIVERED',
    name: 'Tyler Durden',
    phone: '89998887766',
    comment: 'The first rule about fight club is you dont talk about fight',
  },
  {
    status: 'ACCEPTED',
    name: 'James Bond',
    phone: '88008888800',
    comment: 'My name is Bond.',
  },
  {
    status: 'ACCEPTED',
    name: 'Terminator',
    phone: '89876543210',
    comment: 'I will be back',
  },
  {
    status: 'INPROGRESS',
    name: 'Gollum',
    phone: '899999099',
    comment: 'My precious!',
  },
  {
    status: 'ACCEPTED',
    name: 'Gendalf',
    phone: '899999099',
    comment: 'You shall not pass!',
  },
  {
    status: 'OPEN',
    name: 'Sherlock Holmes',
    phone: '89008007065',
    comment: 'Elementary, Watson.',
  },
  {
    status: 'DELIVERED',
    name: 'Obi-Wan Kenobi',
    phone: '89008007065',
    comment: 'May he Force will be with you.',
  },
  {
    status: 'INPROGRESS',
    name: 'Jenny Curran',
    phone: '89008007065',
    comment: 'Run, Forrest! Run!',
  },
  {
    status: 'INPROGRESS',
    name: 'Bill Kilgore',
    phone: '899887665432',
    comment: 'I love the smell of napalm in the morning.',
  },
  {
    status: 'INPROGRESS',
    name: "Katie Scarlett O'Hara",
    phone: '88005553535',
    comment: 'After all, tomorrow is another day!',
  },
  {
    status: 'OPEN',
    name: 'Coul',
    phone: '88005553535',
    comment: 'I see dead people.',
  },
  {
    status: 'ACCEPTED',
    name: 'Osgood Fielding III',
    phone: '88005553535',
    comment: 'Well, nobody is perfect.',
  },
  {
    status: 'ACCEPTED',
    name: 'Jim Lovell',
    phone: '88005553535',
    comment: 'Houston, we have a problem.',
  },
  {
    status: 'ACCEPTED',
    name: 'Victor Frankenstein',
    phone: '89007654321',
    comment: 'It is alive! It is alive!',
  },
];

const initialUser = {
  username: 'test',
  password: 'QWEqwe123123',
};

module.exports = {
  initialUser,
  initialOrders,
};
