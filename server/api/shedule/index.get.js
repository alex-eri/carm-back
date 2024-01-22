import { Shedules } from "~~/server/models/shedule"
import { Op } from "sequelize"

export default defineEventHandler(async (event) => {

    const q = useQuery(event);

    if (q.start && q.stop)

        return await Shedules.findAll({
            where: {
                start: { [Op.lte]: q.stop },
                stop: { [Op.gte]: q.start },
            }
        })
    else
        setResponseStatus(event, 400, 'Filters required')
})