DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS campaign;
DROP TABLE IF EXISTS creator;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS pledge;

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

CREATE TABLE pledge (
    id SERIAL,
    title TEXT,
    description TEXT,
    includes TEXT,
    amount INT
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
    comment TEXT,
    image TEXT
);

INSERT INTO comments (name, comment, image) VALUES ('Alexandre Savaria', 'Will stretch goal only be single card at each level?
Kinda cheap', 'https://ksr-ugc.imgix.net/assets/023/489/466/7ffe9bdbeecc7683574d84007febc4fa_original.jpg?ixlib=rb-4.0.2&w=200&h=200&fit=crop&v=1544101374&auto=format&frame=1&q=92&s=72c9523f593ab7e56dfca6edd5d46cd7');

-- INSERT INTO comments (name, comment) VALUES ('Zimgief', "Would it be possible to create an add-on (not free) just for the 
-- Kickstarter exclusives? As I want to buy the bulk of HR Dungeons in another language, but would like to participate, and 
-- to get this sweet necromancer. I know that you will eventually sell them as add-ons on later kickstarters, so why not now? 
-- I’m a bit sad to have to wait an unrelated kickstarter and get the game far more later just because I do not have the possibility now. :(
-- I’d also like to know if the story will have as much text and story as the Ruin of Thandar Campaign in the Adventure booklet, 
-- or have a more dungeon-crawler feel (more focused on gameplay)? Thanks!");
INSERT INTO comments (name, comment) VALUES ('Zimgief', 'Would it be possible to create an add-on (not free) just for the Kickstarter exclusives? As I want to buy the bulk of HR Dungeons in another language, but would like to participate, and to get this sweet necromancer. I know that you will eventually sell them as add-ons on later kickstarters, so why not now? Im a bit sad to have to wait an unrelated kickstarter and get the game far more later just because I do not have the possibility now.:( Id also like to know if the story will have as much text and story as the Ruin of Thandar Campaign in the Adventure booklet, or have a more dungeon-crawler feel (more focused on gameplay)? Thanks!');

-- INSERT INTO comments (name, comment) VALUES ('donnbobhardy', "So, the all-in would be $299 for all gameplay, but I would still 
-- probably need the dials, dividers, and box, for another $110, for a total of $409? That's... painful. Is there a recommended 
-- starting point? I suppose the simple answer is 'just get the $99 pledge and worry about the rest later'?");

INSERT INTO comments (name, comment, image) VALUES ('Florian Schoch', 'I have the Adventurer Box an am wondering if everything will fit 
in there :D please enlighten me. Will it fit? And I mean ALL the Hero Realms Cards', 'https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-4.0.2&w=200&h=200&fit=crop&v=&auto=format&frame=1&q=92&s=38b545eeac1249d5d25c87db69d5ee12');

INSERT INTO comments (name, comment, image) VALUES ('Brad Andrews', 'Is the "all in" really "all"? Too many addon options. I hate it when 
it is hard to figure out if I am really getting it "all".', 'https://ksr-ugc.imgix.net/assets/007/026/998/e96e94ccb778912ef85d450ba8d15a33_original.png?ixlib=rb-4.0.2&w=200&h=200&fit=crop&v=1521141872&auto=format&frame=1&q=92&s=fbd6deb4b0ffe603b6a4f9b115e408dd');

-- INSERT INTO comments (name, comment) VALUES ('Matt Dyal', "Can this be added to the FAQ: 'We aren't doing packs of cards with 
-- just errata. This is because over time I don't want there to be a million different errata packs. That would add to our manufacturing 
-- costs, confuse our logistics, bloats our SKU codes, and would be really confusing to new players.'");

INSERT INTO comments (name, comment, image) VALUES ('Mary Death', 'If I only will buy the Sorcerer add ons and nothing else, when will I recieve
 those expansions? I hope I don not have to wait untill februari 2024 as this campaign for Hero Realms is saying?', 'https://ksr-ugc.imgix.net/assets/008/928/058/6522d5e80510c740b884d9ff18987472_original.jpg?ixlib=rb-4.0.2&w=200&h=200&fit=crop&v=1461550236&auto=format&frame=1&q=92&s=4994b4f795a17ff00658ecd9f3e010a5');

INSERT INTO comments (name, comment, image) VALUES ('Nathan P. Butler', 'Question for Rob or Derek regarding updated/errata cards: Can you let
 us know which products include any updated cards? We know that the Adventure Packs include updated cards from The Ruin of Thandar and 
 The Lost Village, but are those the only cards being changed, so that those who get the Adventure Packs will have all errata/updated 
 cards, or are there others spread out elsewhere in the product line?', 'https://ksr-ugc.imgix.net/assets/008/209/741/c24a428d1fe4678c7651327275a52f29_original.JPG?ixlib=rb-4.0.2&w=200&h=200&fit=crop&v=1552499795&auto=format&frame=1&q=92&s=197f7b5aecf263c62236d00a739d7163');

INSERT INTO comments (name, comment, image) VALUES ('George Lin', 'trying to figure out what add-on I am missing for Sorcerer, I backed Sorcerer 
at New Stuff Tier, and looking at the add on hero realms of this campaign compared to Sorcerer Endbringer, the only add on the shows 
graphic difference is the Nicodemus Character Pack, not sure about others.. and naming..Anyone know, thanks', 'https://ksr-ugc.imgix.net/assets/008/657/448/e202b541140e7a8572c136e9e16c8b03_original.jpg?ixlib=rb-4.0.2&w=200&h=200&fit=crop&v=1461537323&auto=format&frame=1&q=92&s=ac80de439c9aa0d4be07b562eb537133');

INSERT INTO comments (name, comment, image) VALUES ('Matt Dyal', 'I am all in on the new content, but it would be nice to have an add-on of just 
the new character+adventure packs like you have for the originals.', 'https://ksr-ugc.imgix.net/assets/007/997/224/162cbd290fdbfe619d12188c66d4e6b8_original.png?ixlib=rb-4.0.2&w=200&h=200&fit=crop&v=1500083723&auto=format&frame=1&q=92&s=2cf9f549ad809fd08cf556e5888d08a1');

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
has founded or co-founded multiple game companies and successfully published dozens of games and gaming accessories.', 15, 91, 'Sudbury, MA');



INSERT INTO pledge (title, description, includes, amount) VALUES ('Pledge Manager Tier', 'Not sure what tier to get, or you only want add-ons? Back at this level and you will be in the pledge manager with a $30 credit that can be used toward add-ons and/or whatever tier you want (and shipping of course). You don''t need to choose add-ons now.', '', 30);
INSERT INTO pledge (title, description, includes, amount) VALUES ('Dungeons Tier', 'You Get the 300-card Hero Realms Dungeons Box Set and all the Stretch Goals! \n Play 2 player PVP with or without characters! Level up the Alchemist and Barbarian from level 1 to 24! Play multiplayer with the four included standard decks or even a 6 player Emperor game with one team led by the Alchemist and the other by the Barbarian. Play the 12 part dungeon adventure, leveling up as you go. Fight monsters, gain experience, learn new skills, abilities, and find fantastic treasures!
This complete 1-6 player game includes: A beautiful double-sided game board, 3 score dials, An all-new 80 card market deck, 4 standard starting decks, the Alchemist Character Pack, the Alchemist Adventure Deck, the Barbarian Character Pack, the Barbarian Adventure Deck, and a 12 encounter solo or cooperative campaign full of deadly Masters and minions to battle against!','Hero Realms Dungeons *All Unlocked Stretch Goals - Includes KICKSTARTER EXCLUSIVES', 59);
INSERT INTO pledge (title, description, includes, amount) VALUES ('Adventure Tier', 'If you want Dungeons AND all the new characters, get this tier! Save $27! \n You''ll get the all-new 80 card market deck, the beautiful double-sided game board, 4 score dials, the 12 part dungeon adventure, all 6 new characters with their Adventure Deck gear (including the Kickstarter Exclusive Necromancer) and of course you''ll get all the unlocked Stretch Goals!','Hero Realms Dungeons * Bard Character Pack * Bard Adventure Deck * Druid Character Pack * Druid Adventure Deck * Monk Character Pack * Monk Adventure Deck * Necromancer Character Pack - KICKSTARTER EXCLUSIVE * Necromancer Adventure Deck - KICKSTARTER EXCLUSIVE * All Unlocked Stretch Goals - Includes KICKSTARTER EXCLUSIVES', 99);
INSERT INTO pledge (title, description, includes, amount) VALUES ('Hero Realms All-In Tier', 'Save $142! \n You get EVERY Hero Realms card form ALL 3 Hero Realms Kickstarters plus the big, beautiful Adventure Storage Box to keep them in! That is everything from this Kickstarter''s Adventure Tier, plus every card from the Hero Realms Journeys Kickstarter and the original Hero Realms Kickstarter including all their Kickstarter Exclusive Stretch Goals! \n This tier does not include optional accessories such as card sleeves or additional score dials.','Hero Realms Dungeons * Bard Character Pack * Bard Adventure Deck * Druid Character Pack * Druid Adventure Deck * Monk Character Pack * Monk Adventure Deck * Necromancer Character Pack - KICKSTARTER EXCLUSIVE * Necromancer Adventure Deck - 
KICKSTARTER EXCLUSIVE * All Unlocked Stretch Goals - Includes KICKSTARTER EXCLUSIVES * Hero Realms Base Game * Cleric Character Pack * Fighter Character Pack * Ranger Character Pack * Thief Character Pack * Wizard Character Pack * Cleric Adventure Deck * Fighter Adventure Deck * Ranger Adventure Deck * Thief Adventure Deck * Wizard Adventure Deck * Dragon Boss Deck * Lich Boss Deck * Journeys Conquest Pack * Journeys Discovery Pack * Journeys Hunters Pack * Journeys Travelers Pack * Ancestry Pack * The Ruin of Thandar Campaign Deck * The Lost Village Campaign Deck * Watery Graves Campaign Deck * 1st Hero Realms Kickstarter Stretch Goal Promo Pack (35 cards!) * Journeys Kickstarter Promo Pack * Adventure Storage Box', 299);
INSERT INTO pledge (title, description, includes, amount) VALUES ('Retailer Tier - Dungeons Prerelease Kit', 'FOR VERIFIED BRICK AND MORTAR RETAIL STORES ONLY! \n NOT FOR ONLINE SALES! \n Limit 2 kits per store. \n The Hero Realms Dungeons Prerelease Kit will include 6 copies of everything in the Adventure Tier. You are free to sell items separately, and we will let you know our suggested retail prices for the Kickstarter Exclusives and Stretch Goals. We expect the combined MSRP for all the included items to be over $900. \n Your store must be a member of (or join) the Wizards Retail Guild to get this Prerelease Kit. The Wizards Retail Guild is free to join and has no membership fees. You can sign your store up here: https://www.wisewizardgames.com/retailer/ \n
This kit includes FREE SHIPPING to stores withing the 48 contiguous US States. For stores outside the 48 contiguous US States shipping will be charged separately.','6x Hero Realms Dungeons * 6x Bard Character Pack * 6x Bard Adventure Deck * 6x Druid Character Pack * 6x Druid Adventure Deck * 6x Monk Character Pack * 6x Monk Adventure Deck * 6x Necromancer Character Pack - KICKSTARTER EXCLUSIVE * 6x Necromancer Adventure Deck - KICKSTARTER EXCLUSIVE * 6x All Unlocked Stretch Goals - Includes KICKSTARTER EXCLUSIVES', 399);
