// 1. syntax percabangan if 

var totalbelanja = 20000;

if(totalbelanja > 5000 ){
    document.getElementById("if").innerHTML = "selamat dapat gelas"
}


// 2. syntax percabangan if else

var umurpengunjung = 17;

if(umurpengunjung >= 17){
   document.getElementById("ifelse").innerHTML="boleh masuk"}
else{
    document.getElementById("ifelse").innerHTML="ga boleh  masuk"  
}


// 3. syntax percabangan ifelseif

var tiket = 8;

if(tiket >= 6){
    document.getElementById("ifelseif").innerHTML="dapat popcorn";
}else if( tiket>= 2){
    document.getElementById("ifelseif").innerHTML="dapat mknan ringan";
}else if(tiket<= 2){
    document.getElementById("ifelseif").innerHTML="dapat permen";
}else{
    document.getElementById("ifelseif").innerHTML=" tida dapat ";
}     
    

// 4. syntax swicth case;

var umurpengunjung = prompt ("masukkan umur anda!");
var wahana;

switch(true){
     case umurpengunjung >= 18:
        wahana = "boleh masuk kora kora";
        document.getElementById("switchcase").innerHTML = wahana;
        break;

        case umurpengunjung >= 16:
            wahana = "boleh masuk flying fox";
            document.getElementById("switchcase").innerHTML = wahana;
            break;


            case umurpengunjung >= 14:
                wahana = "boleh masuk halilintar";
                document.getElementById("switchcase").innerHTML = wahana;
                break;


        default:
            wahana = "trimakasiiiiiiiii"
            document.getElementById("switchcase").innerHTML = wahana;



// CARA KEDUA
var nilai = prompt("masukkan nilai anda");
var grade = "";

switch(true){
    case nilai > 90:
        grade ="A+"
        document.getElementById("switchcase").innerHTML = grade;
        break;
    case nilai > 80:
        grade ="A"
        document.getElementById("switchcase").innerHTML = grade; 
        default:
            grade = "F";
            document.getElementById("switchcase").innerHTML = grade;
       
}



// 5. CABANG TERNARY;
var tanya = prompt("apakah serang ibu kota banten?");

var jawaban = (tanya.toUpperCase() == "IYAAAAAA" ) ? "benar": "salah";
document.getElementById("ternary").innerHTML = jawaban;


// 6. PERCABANGAN NESTED
var user = {
    nama:"alissa",
    email:"aliss@gmail.com",
    password:"1234",
    role:"admin"
};

function masuk (){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

console.log(email);
if(user.email == email ){
    if(user.password == password){
        if(user.role == "admin"){
            alert("selamat datang " + user.nama);
        }
    }else{
        alert("tidak boeee masuk");
    }
}else{
    alert("lu siapeeeee ??? pacar bukan ngelarang ngelarang");
}
}}


    
    
