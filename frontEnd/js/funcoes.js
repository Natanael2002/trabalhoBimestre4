function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("index.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;
   
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
<<<<<<< HEAD
    avaliacao = 1;
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star0.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 1;
   }}
=======
    avaliacao = 2;
    }
    // else {
    // document.getElementById("s1").src = "img/star1.png";
    // document.getElementById("s2").src = "img/star0.png";
    // document.getElementById("s3").src = "img/star0.png";
    // document.getElementById("s4").src = "img/star0.png";
    // document.getElementById("s5").src = "img/star0.png";
    // avaliacao = 1;
    // }
    }
>>>>>>> 637e7bbf8cbdffc9f6dacc6cd34cac6fe1907b7d

   //ESTRELA 2
   if (estrela == 2){ 
    if (s2 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 2;
<<<<<<< HEAD
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star0.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 2;
   }}
=======
    } 
//     else {
//     document.getElementById("s1").src = "img/star1.png";
//     document.getElementById("s2").src = "img/star0.png";
//     document.getElementById("s3").src = "img/star0.png";
//     document.getElementById("s4").src = "img/star0.png";
//     document.getElementById("s5").src = "img/star0.png";
//     avaliacao = 1;
//    }
}
>>>>>>> 637e7bbf8cbdffc9f6dacc6cd34cac6fe1907b7d

   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 3;
<<<<<<< HEAD
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star0.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 3;
   }}
=======
    } 
//     else {
//     document.getElementById("s1").src = "img/star1.png";
//     document.getElementById("s2").src = "img/star1.png";
//     document.getElementById("s3").src = "img/star0.png";
//     document.getElementById("s4").src = "img/star0.png";
//     document.getElementById("s5").src = "img/star0.png";
//     avaliacao = 2;
//    }
}
>>>>>>> 637e7bbf8cbdffc9f6dacc6cd34cac6fe1907b7d
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 4;
<<<<<<< HEAD
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star0.png";
    avaliacao = 4;
   }}
=======
    } 
//     else {
//     document.getElementById("s1").src = "img/star1.png";
//     document.getElementById("s2").src = "img/star1.png";
//     document.getElementById("s3").src = "img/star1.png";
//     document.getElementById("s4").src = "img/star0.png";
//     document.getElementById("s5").src = "img/star0.png";
//     avaliacao = 3;
//    }
}
>>>>>>> 637e7bbf8cbdffc9f6dacc6cd34cac6fe1907b7d

   if (estrela == 5){ 
    if (s5 == url + "img/star0.png") {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star1.png";
    avaliacao = 5;
<<<<<<< HEAD
    } else {
    document.getElementById("s1").src = "img/star1.png";
    document.getElementById("s2").src = "img/star1.png";
    document.getElementById("s3").src = "img/star1.png";
    document.getElementById("s4").src = "img/star1.png";
    document.getElementById("s5").src = "img/star1.png";
    avaliacao = 5;
   }}
=======
    } 
//     else {
//     document.getElementById("s1").src = "img/star1.png";
//     document.getElementById("s2").src = "img/star1.png";
//     document.getElementById("s3").src = "img/star1.png";
//     document.getElementById("s4").src = "img/star1.png";
//     document.getElementById("s5").src = "img/star0.png";
//     avaliacao = 4;
//    }
}
>>>>>>> 637e7bbf8cbdffc9f6dacc6cd34cac6fe1907b7d
   
    document.getElementById('rating').innerHTML = avaliacao;
    
   }