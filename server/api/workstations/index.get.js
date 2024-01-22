import { Workstations } from "~~/server/models/workstations"

export default defineEventHandler(async (event) => {
    return await Workstations.findAll()
})