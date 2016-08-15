var used = [];

function randomize()
{
  $.getJSON("data.json", function(data) {
    var random = getNewRandom(data);
    if (random != -1) {
      $('#tododiv').empty().append(data[random][0]).append(data[random][1]);
    } else {
      //all todos have been used
    }
  });

  function getNewRandom(data) {
    if(used.length >= data.length) {
      return -1;
    } else {
      while (true) {
        var random = Math.floor((Math.random() * data.length) + 0) //get random value
        if ($.inArray(random, used) == -1) {//check if value is new
          used.push(random); //add value to used
          return random; //return value
        }
      }
    }
  }
}
