import { Workstations } from "~~/server/models/workstations"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const WSId = event.context.params.id
    
    body.id = WSId;

    const [Workstation, created] = await Workstations.upsert(body)
    if (created)
        return Workstation;
    else
        return false;
})