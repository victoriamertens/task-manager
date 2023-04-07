/* Database name in PostgreSQL = "task-manager-data" */ 

CREATE TABLE categories ( 
  "id" serial PRIMARY KEY,
  "name" VARCHAR(40), 
  "description" VARCHAR(150)
);

CREATE TABLE tasks ( 
  "id" serial PRIMARY KEY, 
  "name" VARCHAR(80), 
  "description" VARCHAR(150), 
  "completed" boolean default false, 
  "category_id" INT REFERENCES categories(id)
);

CREATE TABLE sub_tasks ( 
  "id" serial PRIMARY KEY, 
  "task_id" INT FOREIGN KEY REFERENCES tasks(id), 
  "name" VARCHAR(80), 
  "description" VARCHAR(150), 
  "completed" boolean DEFAULT false
);



CREATE TABLE work_times ( 
  "id" serial PRIMARY KEY,
  "date" DATE, 
  "start-time" TIME, 
  "end-time" TIME
);