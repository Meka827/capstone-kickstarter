DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS campaign;
DROP TABLE IF EXISTS creator;

CREATE TABLE projects (
    id SERIAL,
    title TEXT,
    description TEXT,
    pledge_amount INT,
    pledge_goal INT,
    backers INT,
    goal_date date
);

CREATE TABLE campaign (
    project_id INT, 
    creator_id INT,
    title TEXT,
    image TEXT,
    summary TEXT
);

CREATE TABLE creator (
    id SERIAL,
    name TEXT,
    summary TEXT
);


INSERT INTO projects (title, description, pledge_amount, backers, goal_date)
VALUES ('Hero Realms Dungeons', 'A new 80 card market deck, 6 new characters, and an all-new 12-encounter 
dungeon campaign for 1-5 players!', 371523, 2479, '2023-02-16 09:00:00');

INSERT INTO campaign (project_id, creator_id, title, image, summary)
VALUES (1, 1, 'The Adventure Begins!', 'images/hero-realms.png', 'If you are new to Hero Realms, Dungeons 
is a fantastic place to start. In this single box you get all the amazing gameplay Hero Realm has to offer!');

INSERT INTO creator (name, summary) VALUES ('Robert Dougherty', 'Rob Dougherty grew up in upstate NY. He joined the 
US Army at age 17, completed Airborne training, and served with the 1st infantry division. He then attended Northeastern 
University studying electrical engineering. In 1994 Rob dropped out of college to pursue his life long passion: games. He 
opened the iconic Your Move Games stores, and led the store''s legendary professional team which created a slew of Hall of 
Fame Magic players. Rob went on to run events in New England for Wizards of the Coast and to create his own games. Rob 
was inducted into the Magic Pro Tour Hall of Fame in 2006. Rob has over 25 years of industry experience spanning nearly 
every aspect of hobby gaming: • Magic: The Gathering Pro Tour Champion and Hall of Famer. • Game Designer • Wise Wizard 
Games CEO • Designer and Co-Creator of Epic Card Game. • Co-Creator of the Star Realms Deckbuilding game. • Co-Creator 
of the Hero Realms Deckbuilding game. • Co-Founder/Co-Designer of the Ascension Deckbuilding Game. • Gary Games Inc. 
COO • EpicTCG CEO • Your Move Games Inc. Co-CEO • Stoneblade Entertainment Organized Play Director • Game Store 
Owner • Premier Tournament Organizer • Tournament Judge (Level 3 Magic Judge) • Organized Play Designer/Consultant. Rob 
has founded or co-founded multiple game companies and successfully published dozens of games and gaming accessories.')

