'use strict';

const { faker } = require('@faker-js/faker')

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('posts', [
      {
        content: faker.lorem.words(10),
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};
