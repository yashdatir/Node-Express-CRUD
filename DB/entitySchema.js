const { EntitySchema } = require('typeorm');
const Schema = require('./Schema').Entity;
module.exports = new EntitySchema({
  name: 'table',
  target: Schema,
  columns: {
    firstname: {
      type: 'varchar',
      nullable: true,
    },
    lastname: {
      type: 'varchar',
      nullable: true,
    },
    email: {
      type: 'varchar',
      primary: true,
    },
    phone: {
      type: 'varchar',
      nullable: true,
    },
    city: {
      type: 'varchar',
      nullable: true,
    },
    state: {
      type: 'varchar',
      nullable: true,
    },
  },
});
