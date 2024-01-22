import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from '~~/server/db';
import { Users } from "./users";
import { Workstations } from "./workstations";

export const Shedules = sequelize.define("Shedule", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    start: DataTypes.DATE,
    stop: DataTypes.DATE,
    archived: DataTypes.BOOLEAN, // пометка удаления
    canceled: DataTypes.BOOLEAN, // ставит администратор когда юзер отменил
    presence: DataTypes.BOOLEAN, // ставит администратор когда юзер пришел
}, {
    tableName: 'Shedules',
    name: {
        plural: "Shedules", singular: "Shedule"
    }
});


Shedules.belongsTo(Users);
Shedules.belongsTo(Workstations);


Shedules.sync();
