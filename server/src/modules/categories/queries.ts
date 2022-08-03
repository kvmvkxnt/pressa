const GET_CATEGORIES = `
  SELECT 
    *
  FROM categories;
`;

const GET_SUBCATEGORIES = `
  SELECT
    *
  FROM subcategories;
`;

const GET_ALL = `
  SELECT 
    c.id, 
    c.title, 
    s.id AS subcategory_id, 
    s.title AS subcategory_title,
    s.category_id
  FROM categories AS c 
  LEFT JOIN subcategories AS s 
    ON s.category_id = c.id;
`;

const ADD_CATEGORY = `
  INSERT INTO categories (title)
  VALUES ($1)
  RETURNING title, id;
`;

export default {
  GET_CATEGORIES,
  GET_SUBCATEGORIES,
  GET_ALL,
  ADD_CATEGORY,
}
