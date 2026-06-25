import db from "../config/mysql.js";

const alterSql =
  "ALTER TABLE order_items ADD COLUMN product_name VARCHAR(255) NOT NULL DEFAULT '' AFTER product_id";

db.query(alterSql, (err) => {
  if (err) {
    if (err.message.includes("Duplicate column")) {
      console.log("product_name column already exists");
    } else {
      console.error("Migration failed:", err.message);
      process.exit(1);
    }
  } else {
    console.log("product_name column added to order_items");
  }

  db.query("DESCRIBE order_items", (describeErr, result) => {
    if (describeErr) {
      console.error(describeErr.message);
    } else {
      console.log(result);
    }
    process.exit(0);
  });
});
