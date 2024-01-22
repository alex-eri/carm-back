import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from '~~/server/db';
import { Users } from "./users";

export const Workstations = sequelize.define("Workstation", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  hostname: DataTypes.TEXT
}, {
  tableName: 'Workstations',
  name: {
    plural: "Workstations", singular: "Workstation"
  }
});

Workstations.sync();
