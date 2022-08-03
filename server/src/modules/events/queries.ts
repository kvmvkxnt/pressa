const GET_ALL_EVENTS = `
  SELECT
    e.*,
    e.id AS event_id, 
    u.username,
    u.avatar,
    u.id
  FROM events AS e
  LEFT JOIN users AS u 
    ON u.id = e.user_id
  WHERE e.status = 'active';
`;

const GET_EVENT_BY_ID = `
  SELECT 
    e.*,
    e.id AS event_id,
    c.*,
    c.id AS comment_id,
    s.*,
    s.id AS subcomment_id,
    u.*,
    u.id AS id,
  FROM events AS e 
  LEFT JOIN users AS u 
    ON u.id = e.user_id
  LEFT JOIN comments AS c 
    ON c.event_id = e.id 
  LEFT JOIN subcomments AS s 
    ON c.id = s.comment_id 
  WHERE e.status = 'active' AND e.id = $1;
`;

const ADD_EVENT = `
  INSERT INTO events(event_date, event_time, subcategory_id, type, link_address, user_id, organizator_entity_type, organizator_legal_name, organizator_profession, organizator_phone, organizator_additional_phone, post_title, post_description, post_images, post_text)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
  RETURNING *, id AS event_id;
`;

const DELETE_EVENT = `
  UPDATE events 
  SET status = 'deleted'
  WHERE id = $1
  RETURNING *, id AS event_id;
`;

export default {
  GET_ALL_EVENTS,
  GET_EVENT_BY_ID,
  ADD_EVENT,
  DELETE_EVENT
}
