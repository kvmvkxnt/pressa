const GET_COMMENTS = `
  SELECT 
    c.*,
    c.id AS comment_id,
    u.id,
    u.username,
    u.avatar
  FROM comments AS c 
  LEFT JOIN users AS u 
    ON u.id = c.user_id
  WHERE c.status = 'active' AND c.event_id = $1;
`

const GET_SUBCOMMENTS = `
  SELECT
    s.*,
    s.id AS subcomment_id,
    u.username,
    u.avatar
  FROM subcomments AS s
  LEFT JOIN users AS u 
      ON u.id = s.user_id
  WHERE s.status = 'active' AND s.comment_id = $1;
`;

const ADD_COMMENT = `
  INSERT INTO comments (event_id, user_id, title)
  VALUES ($1, $2, $3) RETURNING *;
`;

const DELETE_COMMENT = `
  UPDATE comments 
  SET status = 'deleted'
  WHERE id = $1 AND user_id = $2
  RETURNING *;
`;

const ADD_SUBCOMMENT = `
  INSERT INTO subcomments (comment_id, user_id, title)
  VALUES ($1, $2, $3) RETURNING *;
`;

const DELETE_SUBCOMMENT = `
  UPDATE subcomments
  SET status = 'deleted'
  WHERE id = $1 AND user_id = $2
  RETURNING *;
`;

export default {
  GET_COMMENTS,
  GET_SUBCOMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_SUBCOMMENT,
  DELETE_SUBCOMMENT
}
