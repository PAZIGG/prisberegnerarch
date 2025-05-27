function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bKQTYphqZK":
        Script1();
        break;
      case "6P3NOvAQB45":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();

// retrieve the current full date from the computer
var SystemDate = new Date();

// create an array to convert day number into day text
var weekdays = new Array(7);
 weekdays[0]=  "Sun";
 weekdays[1] = "Mon";
 weekdays[2] = "Tue";
 weekdays[3] = "Wed";
 weekdays[4] = "Thu";
 weekdays[5] = "Fri";
 weekdays[6] = "Sat";

// create an array to convert month number into month text
var months = new Array(12);
 months[0]=  "januar";
 months[1] = "februar";
 months[2] = "marts";
 months[3] = "april";
 months[4] = "maj";
 months[5] = "juni";
 months[6] = "juli";
 months[7] = "august";
 months[8] = "september";
 months[9] = "oktober";
 months[10] = "november";
 months[11] = "december";

// set Javascript variables from above
var weekDay = weekdays[SystemDate.getDay()];
var dateDay = SystemDate.getDate();
var dateMonth = months[SystemDate.getMonth()];
var dateYear = SystemDate.getFullYear();

var formattedDate = dateDay + ". " + dateMonth + ", " + dateYear;

// set variables in Storyline to variables from Javascript above
player.SetVar("SystemDate", SystemDate);
player.SetVar("weekDay", weekDay);
player.SetVar("dateDay", dateDay);
player.SetVar("dateMonth", dateMonth);
player.SetVar("dateYear", dateYear);
player.SetVar("formattedDate", formattedDate);
}

window.Script2 = function()
{
  // Der er forsøgt forskellige løsninger vha. css, men holder os til inline styling i html i stedet. 

var player = GetPlayer();
var pris = player.GetVar("Pris");
var formattedDate = player.GetVar("formattedDate");
var type = player.GetVar("Type");
var bordplade_1_b = player.GetVar("Bordplade_1_b");
var bordplade_1_l = player.GetVar("Bordplade_1_l");
var bordplade_2_b = player.GetVar("Bordplade_2_b");
var bordplade_2_l = player.GetVar("Bordplade_2_l");
var bordplade_3_b = player.GetVar("Bordplade_3_b");
var bordplade_3_l = player.GetVar("Bordplade_3_l");
var bordplade_4_b = player.GetVar("Bordplade_4_b");
var bordplade_4_l = player.GetVar("Bordplade_4_l");
var subtotal = player.GetVar("Subtotal");
var moms = player.GetVar("Moms");

// set styles
var linebreak = "<br>";
var tablestart = "<table style='width:105%; font-size:13; background-color:#FFFFFF; border-collapse:collapse;'!important><tr style='font-size: 11;height:0.5cm; border-top: #cb5354 3px solid; border-bottom: #cb5354 1 px solid;'><td style='width:40%; padding-left:0.2cm; background-color:#FFFFFF;border-bottom: #CB5354 1px solid; border-top: #CB5354 3px solid; border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align:left; font-size: 11;'>Beskrivelse</p></td><td style='width:15%; padding-left:0.2cm; background-color:#FFFFFF;border-bottom: #CB5354 1px solid; border-top: #CB5354 3px solid;border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align:right;'></p>";

var tablequestionstart = "</h2></td><td style='width:15%; background-color:#FFFFFF;border-bottom: #CB5354 1px solid; border-top: #CB5354 3px solid; margin-left: 5px;border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align: left'></p></td><td style='width:15%;border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid; background-color:#FFFFFF;border-bottom: #CB5354 1px solid; border-top: #CB5354 3px solid;'><p style='text-align:right; font-size: 11;'>Enhedspris</p></td><td style='width:15%; background-color:#FFFFFF;border-bottom: #CB5354 1px solid; border-top: #CB5354 3px solid;border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align:right;font-size: 11;'>Pris</p></td></tr>";

var tablequestion = "</td><td style='width:15%;border-top: 1px dotted #EF4D40;border-right: 1px solid #EF4D40;'><p></p></td><td style='width:15%;border-top: 1px dotted #EF4D40;border-right: 1px solid #EF4D40;'></td><td style='color:blue;width:15%;border-top: 1px dotted #EF4D40;border-right: 1px solid #EF4D40;'></td></tr>";

var tablerow1 = "</td></tr><tr style='height:0.69cm;;'><td style='width:15%;padding-left:0.2cm;padding-top:0.2cm;padding-bottom:0.2cm;border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'>";

var tableend = "</table>";

var pstyleright = "<p style=font-size:13;text-align:right;>";

var pstyle = "<p style=font-size:13;text-align:center;>";

var tableafter1 = "</td><td style='border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align:right;'></p></td><td style='margin-left: 5px;border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align:left;'></td><td style='border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align:right;'>";

var tableafter2 = "</p></td><td style='border-left: #FFFFFF 1px solid; border-right: #FFFFFF 1px solid;'><p style='text-align:right;'>";

// Define content vars
var HtmlHead = "<!DOCTYPE html><html><head><meta charset='utf-8'><style>body{font-family: 'roboto slab', arial, serif; font-size:13; white-space: pre-wrap; background-color: #FFFFFF;} p{font-family: 'roboto slab', arial, serif;} table{border: solid #EF4D40 1pt; font-family: 'roboto slab', arial, serif; white-space: pre-wrap; background-color: #FFFFFF;} td{background-color:#FFFFFF; font-family: 'roboto slab', arial, serif; font-size:13; white-space: pre-wrap; background-color: #FFFFFF;} tr{border-top: dotted #EF4D40 1pt;font-family: 'roboto slab', arial, serif; font-size:13; white-space: pre-wrap; background-color: #FFFFFF;}</style></head><body>";

var EndHtml = tableend + pstyleright + "Subtotal:   " + subtotal + " kr." + linebreak + linebreak + "Moms, 25%:   " + moms + " kr." + linebreak + linebreak + "<b> Total pris:   " + pris + " kr.</b>" + linebreak + linebreak + linebreak + pstyle + " Tilbuddet er givet d. " + formattedDate + "." + linebreak + linebreak + linebreak + linebreak + linebreak + "<p style=font-size:11;>Staalbordplader.dk - Kroager 9, 4000 Roskilde - CVR: 42170437 - info@staalbordplader.dk - www.staalbordplader.dk </p></body></html>"

var type_1 = tablerow1 + "Bordplade: " + bordplade_1_b + "mm x " + bordplade_1_l + "mm." + tableafter1 + subtotal + tableafter2 + subtotal;

var type_2 = tablerow1 + "test2 - mål:" + linebreak + "Plade 1: " + bordplade_1_b + "mm x " + bordplade_1_l + "mm." + linebreak + "Plade 2: " + bordplade_2_b + "mm x " + bordplade_2_l + "mm.";


// ENTER YOUR HTML/CONTENT HERE - use strings for tags and player.GetVar for the Storyline variables
var html = HtmlHead +
"<h1 style='text-align:center; color:#cb5354;'>Staalbordplader.dk</h1>" + "<span style='font-size: 13;'>Tak for jeres forespørgsel, Vi kan tilbyde følgende: <br><br>" + "<h2 style='color:#cb5354;'>Tilbud</h2> <br> </span>" + linebreak + tablestart + tablequestionstart;

if (type == 1){ 
 html = html + type_1;
}

if (type == 2){ 
 html = html + type_2;
}

var html = html + tableend + linebreak + EndHtml;

///// THIS IS ALL GENERATION USING THE HTML string. 

//This specifies the type
var blob = new Blob(['\ufeff', html], {
type: 'application/msword'
    });
    
// This specifies the link url
var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
// SPECIFY THE FILE NAME HERE
filename = 'ARC_tilbud.doc';
    
// This specifies the download link element
var downloadLink = document.createElement("a");

document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // This sets the link to the file
        downloadLink.href = url;
        
        // This sets the file name
        downloadLink.download = filename;
        
        // This triggers the function
       downloadLink.click();
    }
}

};
