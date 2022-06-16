'use strict';

const { faker } = require('@faker-js/faker');

let seed = [
  {
    name: 'Vinny Boy',
    email: 'vinny.admin@email.com',
    apartment: 42,
    password: 'vinnyadmin',
    admin: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
for(let i = 0; i < 10; i++){
  seed.push(
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      apartment: faker.datatype.number({  
        'min': 1,
        'max': 299
      }),
      password: faker.internet.password(7),
      admin: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  )
}

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users', seed);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
