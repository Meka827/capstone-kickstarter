DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS campaign;
DROP TABLE IF EXISTS creator;
DROP TABLE IF EXISTS comments;

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
    summary TEXT,
    bullet_one TEXT,
    bullet_two TEXT,
    bullet_three TEXT,
    bullet_flavor TEXT
);

CREATE TABLE creator (
    id SERIAL,
    name TEXT,
    bio TEXT,
    created INT,
    backed INT,
    hometown TEXT
);

CREATE TABLE comments (
    id SERIAL,
    name TEXT, 
    comment TEXT
);

INSERT INTO comments (name, comment) VALUES ('Alexandre Savaria', 'Will stretch goal only be single card at each level?
Kinda cheap');

INSERT INTO comments (name, comment) VALUES ('Zimgief', 'Would it be possible to create an add-on (not free) just for the Kickstarter exclusives? As I want to buy the bulk of HR Dungeons in another language, but would like to participate, and to get this sweet necromancer. I know that you will eventually sell them as add-ons on later kickstarters, so why not now? Im a bit sad to have to wait an unrelated kickstarter and get the game far more later just because I do not have the possibility now.:( Id also like to know if the story will have as much text and story as the Ruin of Thandar Campaign in the Adventure booklet, or have a more dungeon-crawler feel (more focused on gameplay)? Thanks!');

INSERT INTO comments (name, comment) VALUES ('donnbobhardy', 'So, the all-in would be $299 for all gameplay, but I would still 
probably need the dials, dividers, and box, for another $110, for a total of $409? Thats... painful. Is there a recommended 
starting point? I suppose the simple answer is just get the $99 pledge and worry about the rest later?');

INSERT INTO comments (name, comment) VALUES ('Florian Schoch', 'I have the Adventurer Box an am wondering if everything will fit 
in there :D please enlighten me. Will it fit? And I mean ALL the Hero Realms Cards');

INSERT INTO comments (name, comment) VALUES ('Brad Andrews', 'Is the "all in" really "all"? Too many addon options. I hate it when 
it is hard to figure out if I am really getting it all.');

INSERT INTO comments (name, comment) VALUES ('Matt Dyal', 'Can this be added to the FAQ: We arent doing packs of cards with 
just errata. This is because over time I dont want there to be a million different errata packs. That would add to our manufacturing 
costs, confuse our logistics, bloats our SKU codes, and would be really confusing to new players.');

INSERT INTO comments (name, comment) VALUES ('Mary Death', 'If I only will buy the Sorcerer add ons and nothing else, when will I recieve
 those expansions? I hope I don not have to wait untill februari 2024 as this campaign for Hero Realms is saying?');

INSERT INTO comments (name, comment) VALUES ('Nathan P. Butler', 'Question for Rob or Derek regarding updated/errata cards: Can you let
 us know which products include any updated cards? We know that the Adventure Packs include updated cards from The Ruin of Thandar and 
 The Lost Village, but are those the only cards being changed, so that those who get the Adventure Packs will have all errata/updated 
 cards, or are there others spread out elsewhere in the product line?');

INSERT INTO comments (name, comment) VALUES ('George Lin', 'trying to figure out what add-on I am missing for Sorcerer, I backed Sorcerer 
at New Stuff Tier, and looking at the add on hero realms of this campaign compared to Sorcerer Endbringer, the only add on the shows 
graphic difference is the Nicodemus Character Pack, not sure about others.. and naming..Anyone know, thanks');

INSERT INTO comments (name, comment) VALUES ('Matt Dyal', 'I am all in on the new content, but it would be nice to have an add-on of just 
the new character+adventure packs like you have for the originals.');

INSERT INTO projects (title, description, pledge_amount,pledge_goal, backers, goal_date)
VALUES ('Hero Realms Dungeons', 'A new 80 card market deck, 6 new characters, and an all-new 12-encounter 
dungeon campaign for 1-5 players!', 371523, 20000, 2479, '2023-02-16 09:00:00');

INSERT INTO campaign (project_id, creator_id, title, image, summary, bullet_one, bullet_two, bullet_three, bullet_flavor) VALUES (1, 1, 'The Adventure Begins!', 'images/hero-realms.png', 'If you are new to Hero Realms, Dungeons is a fantastic place to start. In this single box you get all the amazing gameplay Hero Realm has to offer!', '2-4 player PVP with basic decks', '2 player PVP with the included Alchemist and Barbarian Character packs.', 'Solo and 2-player cooperative play through a 12-encounter dungeon adventure. Fight monsters, find treasure, choose and level up your skills and abilities! Adventure with up to 5 players using expansion packs, such as the ones in the Adventure Tier!', 'We have packed a ton of awesome deckbuilding game fun into this box. You are going to love it!'); 

INSERT INTO creator (name, bio, created, backed, hometown) VALUES ('Robert Dougherty', 'Rob Dougherty grew up in upstate NY. He joined the 
US Army at age 17, completed Airborne training, and served with the 1st infantry division. He then attended Northeastern 
University studying electrical engineering. In 1994 Rob dropped out of college to pursue his life long passion: games. He 
opened the iconic Your Move Games stores, and led the store''s legendary professional team which created a slew of Hall of 
Fame Magic players. Rob went on to run events in New England for Wizards of the Coast and to create his own games. Rob 
was inducted into the Magic Pro Tour Hall of Fame in 2006. Rob has over 25 years of industry experience spanning nearly 
every aspect of hobby gaming: - Magic: The Gathering Pro Tour Champion and Hall of Famer. - Game Designer - Wise Wizard 
Games CEO - Designer and Co-Creator of Epic Card Game. - Co-Creator of the Star Realms Deckbuilding game. - Co-Creator 
of the Hero Realms Deckbuilding game. - Co-Founder/Co-Designer of the Ascension Deckbuilding Game. - Gary Games Inc. 
COO - EpicTCG CEO - Your Move Games Inc. Co-CEO - Stoneblade Entertainment Organized Play Director - Game Store 
Owner - Premier Tournament Organizer - Tournament Judge (Level 3 Magic Judge) - Organized Play Designer/Consultant. Rob 
has founded or co-founded multiple game companies and successfully published dozens of games and gaming accessories.', 15, 91, 'Sudbury, MA')