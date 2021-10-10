var numKids = [3, 0, 2, 5]
var spouse= ["Michelle",'Lilly',"Brenda","Mia"];
var city= ['Dallas', 'Houston', 'Austin',"Arlington"];
var job= ["Teacher", 'Programmer', 'Artist',"YouTuber"];

var y= Math.floor(Math.random() * 4)

function fortune(job, city, spouse, numKids)
{
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune(job[y], city[y], spouse[y], numKids[y])
