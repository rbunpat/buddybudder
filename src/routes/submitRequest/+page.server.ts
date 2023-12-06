import { db } from "$lib/server/database";

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        let classNum = data.get("classNumber");
        let requestText = data.get("requestText");

        //ts-ignore
        let classNumber = parseInt(classNum);


        console.log(classNumber, requestText);

        await db.buddyRequest.upsert({
            where: {
                classId: classNumber
            },
            update: {
                requestText: requestText
            },
            create: {
                classId: classNumber,
                requestText: requestText
            }
        });

        return {
            success: true
        }

        // await db.request.upsert({
        //     data: {
        //         classNumber: classNumber,
        //         requestText: requestText
        //     }
        // });
    }
}