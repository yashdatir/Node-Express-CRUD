const { getConnection } = require('typeorm');
const { Entity } = require('./Schema');

const SELECT = async () => {
  try {
    return await getConnection()
      .getRepository(Entity)
      .createQueryBuilder()
      .getMany();
  } catch (err) {
    return err;
  }
};

const INSERT = async ({ firstname, lastname, email, phone, city, state }) => {
  try {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Entity)
      .values({
        firstname,
        lastname,
        email,
        phone,
        city,
        state,
      })
      .execute();
  } catch (err) {
    return err;
  }
};

const UPDATE = async ({ firstname, lastname, email, phone, city, state }) => {
  try {
    return await getConnection()
      .createQueryBuilder()
      .update(Entity)
      .set({ firstname, lastname, phone, city, state })
      .where('email = :id', {
        id: email,
      })
      .execute();
  } catch (err) {
    return err;
  }
};

const DELETE = async (email) => {
  try {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Entity)
      .where('email = :id', { id: email })
      .execute();
  } catch (err) {
    return err;
  }
};
module.exports = {
  SELECT,
  INSERT,
  UPDATE,
  DELETE,
};
