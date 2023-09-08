// -----------------------------------------------------
// ===========password value a to z 123 $ etc ... ========
// -----------------------------------------------------
var passwordValue1 = "abcdefghijklmnopqrstuvwxyz";
var passwordValue2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordValue3 = "!@#$%^&*()_+";

var newPassword = ""; 

for (var i = 0 ; i < 4; i++ ){
    var passwordJenrator1 = Math.floor(Math.random() * passwordValue1.length); 
    newPassword += passwordValue1.charAt(passwordJenrator1) 
    }

    for (var i = 0 ; i < 4; i++ ){
        var passwordJenrator2 = Math.floor(Math.random() * passwordValue2.length);
        newPassword += passwordValue2.charAt(passwordJenrator2) 
    }
    
    for (var i = 0 ; i < 4; i++ ){
        var passwordJenrator3 = Math.floor(Math.random() * passwordValue3.length);
        newPassword += passwordValue3.charAt(passwordJenrator3) 
    }
 

document.write("<h1>",newPassword,"</h1>")
// ===============================================================
// ===========================birthday calculate =================
// ===============================================================
var userBirthDay = prompt ("write a you date of birth (date month year)");
var userAge = new Date(userBirthDay);
var currentDate = new Date();
var userMonth = currentDate.getMonth() - userAge.getMonth();
var userDay = currentDate.getDate() - userAge.getDate();
var userMinute = currentDate.getMinutes() - userAge.getMinutes();
var userSecond = currentDate.getSeconds() - userAge.getSeconds();
var userYear = currentDate - userAge ;
var total = Math.floor(userYear / (365.25 * 24 * 60 * 60 * 1000));
document.write("<h1>" ,"br",total+" year ", userMonth+" months ",userDay+" days ",userMinute+" minute ",userSecond+" seconds " ,"</h1>") 

// ===================================
// =============ramzan day============
// ===================================
var ramzanDay = new Date ("10 march 2024")
var currentMyDate = new Date();
var totalDaysCome = ramzanDay - currentMyDate;
var yearconvert = Math.floor(totalDaysCome / 1000 / 60 / 60 / 24 / 365) 
var monthconvert = Math.floor(totalDaysCome / 1000 / 60 / 60 / 24 / 30) 
var dayconvert = Math.floor(totalDaysCome / 1000 / 60 / 60 / 24 ) 
var ramzansecond =currentMyDate.getSeconds()  - ramzanDay.getSeconds()
var ramzanMinute = currentMyDate.getMinutes()  - ramzanDay.getMinutes()
document.write("<h1>"," ramzan Days cooming soon.... ",yearconvert+" year " , monthconvert+" months " , dayconvert +" days ",ramzanMinute + " minutes ",ramzansecond+" seconds ","</h1>")







