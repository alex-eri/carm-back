import { Shedules } from "~~/server/models/shedule"
import { Op } from "sequelize"

export default defineEventHandler(async (event) => {

    const q = getQuery(event);



    console.log({
                start: { [Op.lte]: new Date(q.stop) },
                stop: { [Op.gte]: new Date(q.start) },
            })

    if (q.start && q.stop)

        return await Shedules.findAll({
            where: {
                start: { [Op.lte]: new Date(q.stop) },
                stop: { [Op.gte]: new Date(q.start) },
            }
        })
    else
        setResponseStatus(event, 400, 'Filters required')
})