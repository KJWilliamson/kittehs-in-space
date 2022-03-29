document.querySelector("#check").addEventListener("click", check);

const kitty = "one";
function check() {
  const kitty = document.querySelector("#kitty").value.toLowerCase();

  //Conditionals go here
  if (kitty === "1") {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://i.pinimg.com/originals/b8/cb/da/b8cbdac13e256bb2c51b059024a2068c.gif')";
    

  } else if (kitty == "2") {
    document.querySelector("#placeToSee").innerText =
      "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/tumblr_m8jscf6OEa1r4xjo2o1_500.gifv')";
    
  } else if (kitty == "3") {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://i.pinimg.com/originals/78/a9/a7/78a9a7cd75a2ea329a2e02531c8b9bae.gif')";
    
  } else if (kitty === "4") {
    document.querySelector("#placeToSee").innerText =
      "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/870c0b9e65463c45ea027fd719ac36c7/tumblr_nw80yj1gSt1tuaz2oo1_500.gifv')";
    
  } else if (kitty === "5") {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/Oh27.gif')";
    
  } else if (kitty == "6") {
    document.querySelector("#placeToSee").innerText =
      "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://media.giphy.com/media/w7ecqmItFMEgg/giphy.gif')";
    
  } else if (kitty == "7") {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/309269ccd0205c930db15aa5e5009d5c/tumblr_np669qVLBV1uw80y9o1_500.gifv')";
    
  } else if (kitty == "8") {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/tumblr_lvozdcKIoy1r4xjo2o1_500.gifv')";
    
    } else if (kitty == "9") {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('http://24.media.tumblr.com/30510ad9913c2c392e7afa0b08717a52/tumblr_mjz2h1D7gp1qiyq2ro1_1280.gif')";
    
    } else if (kitty == "10") {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/168c23deb341f173aeeaa6004f56dcf0/tumblr_mojo1plDWG1r4xjo2o1_500.gifv')";
    
    } else {
    document.querySelector("#placeToSee").innerText = "KITTEH";
    document.querySelector("body").style.backgroundImage =
      "url('https://giffiles.alphacoders.com/165/16589.gif')";
    
    } 
}

