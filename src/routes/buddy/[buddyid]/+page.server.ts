import { db } from "$lib/server/database";

export const load = async ({ params }) => {


    const buddyid = params.buddyid;

    const budid = parseInt(buddyid);

    const requestDetails = await db.buddyRequest.findUnique({
        where: {
            classId: budid
        }
    });

    console.log(requestDetails);

    return { requestDetails }
}