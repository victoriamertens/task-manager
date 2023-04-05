/* Database name in PostgreSQL = "task-manager-data" */ 

CREATE TABLE users ( 
  "id" serial PRIMARY KEY, 
  "name" VARCHAR(40), 
  "username" VARCHAR(40), 
  "password" VARCHAR(20)
); 

CREATE TABLE tasks ( 
  "id" serial PRIMARY KEY, 
  "user_id" FOREIGN KEY REFERENCES users(id), 
  "name" VARCHAR(80), 
  "description" VARCHAR(150), 
  "completed" boolean default false, 
  "category_id" FOREIGN KEY REFERENCES categories(id)
)

CREATE TABLE sub_tasks ( 
  "id" serial PRIMARY KEY, 
  "task_id" FOREIGN KEY REFERENCES tasks(id), 
  "name" VARCHAR(80), 
  "description" VARCHAR(150), 
  "completed" boolean DEFAULT false
)

CREATE TABLE categories ( 
  "id" serial PRIMARY KEY,
  "user_id" FOREIGN KEY REFERENCES users(id), 
  "name" VARCHAR(40), 
  "description" VARCHAR(150)
)

CREATE TABLE work_times ( 
  "id" serial PRIMARY KEY,
  "user_id" FOREIGN KEY REFERENCES users(id), 
  "date" DATE, 
  "start-time" TIME, 
  "end-time" TIME
)