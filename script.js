function hasClassName(inElement, inClassName) {
  const regExp = new RegExp("(?:^|\\s+)" + inClassName + "(?:\\s+|$)");
  return regExp.test(inElement.className);
}

function addClassName(inElement, inClassName) {
  if (!hasClassName(inElement, inClassName))
    inElement.className = [inElement.className, inClassName].join(" ");
}

function removeClassName(inElement, inClassName) {
  if (hasClassName(inElement, inClassName)) {
    const regExp = new RegExp(
      "(?:^|\\s+)" + inClassName + "(?:\\s+|$)",
      "g"
    );
    const curClasses = inElement.className;
    inElement.className = curClasses.replace(regExp, " ");
  }
}

function toggleClassName(inElement, inClassName) {
  if (hasClassName(inElement, inClassName))
    removeClassName(inElement, inClassName);
  else addClassName(inElement, inClassName);
}

function toggleShape() {
  const shape = document.getElementById("shape");
  if (hasClassName(shape, "cube") || hasClassName(shape, "autoLoad")) {
    if (hasClassName(shape, "cube")) {
      removeClassName(shape, "cube");
    }
    if (hasClassName(shape, "autoLoad")) {
      removeClassName(shape, "autoLoad");
    }
    addClassName(shape, "ring");
  } else {
    removeClassName(shape, "ring");
    addClassName(shape, "cube");
  }

  const stage = document.getElementById("stage");
  if (hasClassName(shape, "ring"))
    stage.style.webkitTransform = "translateZ(-200px)";
  else stage.style.webkitTransform = "";
}
function downloadLink() {
  location.href = "https://www.facebook.com/lengocha.2607/";
}
let count = 0;
let num_bg = 0;
let next_bg = 0;
let preLoadbg;
const bgImage = [
  "./hahuyen/bg/1_beoa0m.jpg",
  "./hahuyen/bg/2_w3sf3i.jpg",
  "./hahuyen/bg/3_jhtrw6.jpg",
  "./hahuyen/bg/4_pnb09s.jpg",
  "./hahuyen/bg/5_livhfm.jpg",
  "./hahuyen/bg/6_kjhefj.jpg",
  "./hahuyen/bg/7_kboujt.jpg",
  "./hahuyen/bg/8_vlddif.jpg",
  "./hahuyen/bg/9_qicqht.jpg",
  "./hahuyen/bg/10_fdferr.jpg",
  "./hahuyen/bg/12_dabzid.jpg",
  "./hahuyen/bg/15_lzsjjy.jpg",
];
function timedCount() {
  if (count >= 8) {
    count = 0;
    autoLoad();
  } else {
    count = count + 1;
  }
  if (next_bg >= 15) {
    num_bg = num_bg + 1;
    if (num_bg > 10) {
      num_bg = 0;
    }
    document.body.style.backgroundImage = `url(${bgImage[num_bg]})`;
    preLoadbg = new Image();
    if (num_bg == 10) {
      preLoadbg.src = bgImage[0];
    } else {
      preLoadbg.src = bgImage[num_bg + 1];
    }
    next_bg = 0;
  } else {
    next_bg = next_bg + 1;
  }
  setTimeout(timedCount, 1000);
}
function autoLoad() {
  const shapeTest = document.getElementById("shape");
  if (hasClassName(shapeTest, "cube")) {
    removeClassName(shapeTest, "cube");
    addClassName(shapeTest, "autoLoad");
  } else {
    toggleShape();
  }
}

function openSatan() {
  document.querySelector("#btn").style.display = "none";
  document.querySelector(".christmas").style.display = "block";
  document.querySelector(".mery-christmas-wrapper").style.background =
    "#de2f32";
}
function openGallaryImage() {
  document.querySelector(".christmas").style.display = "none";
  document.querySelector(".mery-christmas-wrapper").style.display =
    "none";
  document.querySelector("#container").style.display = "block";
  timedCount();
}


function display_after2s()
{
    document.getElementById("after2s").style.display= "block";
}
      window.onload = function()
{
  setTimeout(display_after2s, 1500)
    
};
 

      const audios = [
        "https://redirect.nhq.vn/demo/audio/That_Girl.mp3",
        "https://redirect.nhq.vn/demo/audio/Im_Yours.mp3",
        "https://redirect.nhq.vn/demo/audio/My_Girl.mp3",
        "https://redirect.nhq.vn/demo/audio/Girls_Like_You.mp3",
        "https://redirect.nhq.vn/demo/audio/There_For_You.mp3",
        "https://redirect.nhq.vn/demo/audio/What_Makes_You_Beautiful.mp3",
        "https://redirect.nhq.vn/demo/audio/I_Do.mp3",
        "https://redirect.nhq.vn/demo/audio/A_Little_Love.mp3",
        "https://redirect.nhq.vn/demo/audio/Beautiful_In_White.mp3",
        "https://redirect.nhq.vn/demo/audio/Proud_Of_You.mp3",
      ];

      const music = document.getElementById("player");
      const soundImage = document.getElementById("sound-image");
      const getSrc = document.getElementsByTagName("source");

      getSrc[0].src = audios[Math.floor(Math.random() * 10)];
      music.load();

      let index = audios.indexOf(getSrc[0].src);

      music.addEventListener("ended", function () {
        if (index == -1 || index >= 9) {
          index = 0;
        } else {
          index = index + 1;
        }
        getSrc[0].src = audios[index];
        music.load();
        music.play();
      });

      let i = 0;
      soundImage.addEventListener("click", function () {
        if (i % 2 === 0) {
          music.play();
        } else {
          music.pause();
        }
        i++;
      });
      const firstPreload = new Image();
      firstPreload.src = bgImage[1];
    