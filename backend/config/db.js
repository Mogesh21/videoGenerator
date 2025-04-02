import mysql from "mysql2";

const db = mysql.createPool({
  database: "interviewbix_videos",
  user: "root",
  password: "root",
  host: "localhost",
});

export default db.promise();
