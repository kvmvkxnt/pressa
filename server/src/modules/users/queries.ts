const GET_USER_BY_UP = `
  SELECT
    u.id,
    u.username,
    u.avatar
  FROM users AS u
  WHERE username = $1 AND password = crypt($2, u.password) AND status = 'active';
`;

const GET_USER_BY_ID = `
  SELECT
    u.id,
    u.username,
    u.avatar
  FROM users AS u 
  WHERE id = $1 AND status = 'active';
`;

const GET_USERS = `
  SELECT 
    u.id,
    u.username,
    u.avatar
  FROM users AS u 
  WHERE status = 'active';
`;

const ADD_USER = `
  INSERT INTO users(username, password, avatar)
  VALUES ($1, crypt($2, gen_salt('bf')), $3)
  RETURNING id, username, avatar;
`;

const DELETE_USER = `
  UPDATE users
  SET status = 'deleted'
  WHERE id = $1 AND status = 'active'
  RETURNING id, username, avatar;
`;

export default {
  GET_USER_BY_UP,
  GET_USER_BY_ID,
  GET_USERS,
  ADD_USER,
  DELETE_USER
};
