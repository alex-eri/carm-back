import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from '~~/server/db';

export const Users = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    name: DataTypes.TEXT,
    login: DataTypes.TEXT,
    password: DataTypes.TEXT,
    archive: DataTypes.BOOLEAN
}, {
    tableName: 'Users',
    name: {
        plural: "Users", singular: "User"
    }
});

Users.sync();