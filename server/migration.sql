DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL,
    title TEXT,
    description TEXT,
    creator_id TEXT,
    pledge_amount INT,
    pledge_goal INT,
    backers INT,
    goal_date date,
    story_id INT
);

CREATE TABLE campaign (
    project_id INT, 
    title TEXT,
    image TEXT,
    summary TEXT
);
     
