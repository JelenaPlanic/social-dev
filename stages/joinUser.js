const joinUser = [
     // podaci o user-u:
     {
        $lookup: {
            from:"users",
            localField: "userId",
            foreignField: "_id",
            as: "user", // novo polje ali je array
            pipeline: [{$project: {firstName:1, lastName:1}}]
        }
    },
    {
        $project: {userId:0} // da se ne vraca user id
    },
    {
        $unwind:"$user" // da mi user(jer je 1 u arr!) ne bude vracen kao array (sada je object)
    }
];

module.exports = joinUser;

