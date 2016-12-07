var path = require("path");
var friendsArray = require("../data/friends.js")
var bodyParser = require("body-parser");




module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    app.get("/api/friends",function(req,res){
        res.json(friendsArray);
    });


    app.post("/api/friends", function(req,res){
        console.log(req.body);
        var newFriend = req.body;

        console.log(friendsArray);
        //find a matching friend
        var friendMatch = findMatch(newFriend)
        //send back the matching friend
        console.log(friendMatch);
        friendsArray.push(newFriend);
        res.json(friendMatch);
    })
}


function findMatch(newFriend){
    var lowestDiff = 100;
    var match;
    for (var i = 0; i < friendsArray.length; i++){
        var currentDiff = 0;
        for (var j = 0; j < newFriend.scores.length; j++){
            currentDiff+=Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendsArray[i].scores[j]));
        }
        console.log(currentDiff);
        //compare current diff to the lowest diff found so far, if it's lower, set that as the new match.
        if (currentDiff <= lowestDiff){
            lowestDiff = currentDiff;
            match = friendsArray[i];
        }
    }
    return match;



}