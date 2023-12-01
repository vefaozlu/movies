import { DataTypes } from "sequelize";
import Review from "./Review.model";
import sequelize from "../config";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Review, {
  foreignKey: "userId",
  onDelete: "cascade",
  onUpdate: "cascade",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  sequelize
    .sync()
    .then(() => {
      console.log("Table synced successfully.");
    })
    .catch((error) => {
      console.error("Unable to sync table", error);
    });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default User;
