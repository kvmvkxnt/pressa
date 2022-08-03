INSERT INTO users(username, password) VALUES ('kvmvkxnt', crypt('qwerty', gen_salt('bf'))), ('test1', crypt('12345678', gen_salt('bf')));

INSERT INTO categories(title) VALUES ('IT'), ('Дизайн'), ('Бизнес'), ('Образование');

INSERT INTO subcategories(title, category_id) VALUES ('Веб-разработка', 1), ('Мобильная разработка', 1), ('UI/UX дизайн', 2), ('Графический дизайн', 2), ('Менеджмнет', 3), ('Кредит и аудит', 3), ('Математика', 4), ('Физика', 4);

INSERT INTO events(event_date, event_time, subcategory_id, type, link_address, user_id, organizator_entity_type, organizator_legal_name, organizator_profession, organizator_phone, organizator_additional_phone, post_title, post_description, post_images, post_text) VALUES
('2022-07-29', '13:00', 7, 'online', 'https://www.youtube.com/watch?v=PO_1i_Uh9As', '6bac3b1c-3b7a-4704-8288-12c9683a33d2', 'physical', NULL, 'Web Developer', '998991406814', NULL, 'Мастер класс по математике от kvmvkxnt', 'Lorem ipsum dolor set amet. Lorem... ipsum... dolor... sit... amet...', NULL, 'Lorem ipsum dolor sit amet.'), 
('2022-07-30', '19:00', 1, 'offline', 'Ташкент, Шайхантахурский р-он, ул. Четотам, дом 8А', '1d885542-820e-462c-b336-fb6ede74da1f', 'legal', 'Najot Talim', 'Web Developer', '998971234567', '998711234567', 'Мастер класс от образовательной платформы Najot Talim', 'Lorem ipsum dolor si amet.', '{"stock.jpg"}', 'Lorem ipsum dolor sit amet.');

INSERT INTO comments(user_id, event_id, title) VALUES ('6bac3b1c-3b7a-4704-8288-12c9683a33d2', 2, 'Wow, great!'), ('1d885542-820e-462c-b336-fb6ede74da1f', 1, 'Интересненько');

INSERT INTO subcomments(user_id, comment_id, title) VALUES ('1d885542-820e-462c-b336-fb6ede74da1f', 1, 'Не то слово!'), ('6bac3b1c-3b7a-4704-8288-12c9683a33d2', 2, 'Действительно!');
