import db from "../config/mysql.js";

const run = async () => {
  const query = (sql) =>
    new Promise((resolve, reject) => {
      db.query(sql, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });

  try {
    await query("ALTER TABLE cart_items MODIFY product_id INT NULL");
  } catch (err) {
    console.log("Skipping product_id alter:", err.message);
  }

  try {
    await query("ALTER TABLE cart_items ADD COLUMN product_name VARCHAR(255) NOT NULL DEFAULT '' AFTER product_id");
  } catch (err) {
    if (!err.message.includes("Duplicate column")) {
      console.log("Skipping product_name add:", err.message);
    }
  }

  try {
    await query("ALTER TABLE cart_items ADD COLUMN price DECIMAL(10,2) NOT NULL DEFAULT 0 AFTER product_name");
  } catch (err) {
    if (!err.message.includes("Duplicate column")) {
      console.log("Skipping price add:", err.message);
    }
  }

  try {
    await query("ALTER TABLE cart_items ADD COLUMN image VARCHAR(255) NULL AFTER price");
  } catch (err) {
    if (!err.message.includes("Duplicate column")) {
      console.log("Skipping image add:", err.message);
    }
  }

  try {
    await query("ALTER TABLE cart_items DROP FOREIGN KEY cart_items_ibfk_2");
  } catch (err) {
    console.log("Skipping FK drop:", err.message);
  }

  const desc = await query("DESCRIBE cart_items");
  console.log("cart_items structure:", desc);
  process.exit(0);
};

run().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});
