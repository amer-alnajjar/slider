//جبنا الصور وحطيناهم في ارري
var sliderimg = Array.from(document.querySelectorAll(".slider-container img"));

////انجيب عدد الصور الي في الاارري
var slideimgcount = sliderimg.length;

// السلايد الي هنبدا منه
var slidestart = 1;

//هنحيب الديف الي بيعرض احنا موجودين في اي سلايد
var slidnum = document.getElementById("slid-num");

//جيب زر (previos)
var previosButton = document.getElementById("prev");

//جيب زر (next)
var nextButton = document.getElementById("next");

//هنعمل على كل زر فانكشن اتسير لما نضغط على الزر
//بدل ما نعمل الفانكشن هان نعملها تحت ونستدعيها في لااي مكان بدنا اياه احسن من كرر
previosButton.onclick = previosslide;

nextButton.onclick = nextslide;

//هننشء ul
var creeatul = document.createElement("ul");

//هنحط ايدي لل يو ل
creeatul.setAttribute("id", "ul");

//هننشء العنصر ل اي حسب عدد الصور

for (let index = 1; index <= slideimgcount; index++) {
  //creat li
  var creeatli = document.createElement("li");
  //  هنحط اتريبيوت لل ل اي وهيكون اسمه داتا اندكس والفاليو الاندكس تبع اللوب
  creeatli.setAttribute("data-index", index);
  //هنضع الرقام داخل ل هي
  creeatli.appendChild(document.createTextNode(index));
  //هنحط ل هي داخل يو ل
  creeatul.appendChild(creeatli);
}

//هنضع يو ل داخل السبان تبعه في الدوكيمنت
var numberSlide = document.getElementById("numberSlide");
numberSlide.appendChild(creeatul);

//هستدعي الاي دي الي في يو ل
var id_ul = document.getElementById("ul");

//هنعمل ارري لعناصر ل اي
var li_array = Array.from(document.querySelectorAll("ul li"));

//هنعمل لوب على عناصر يو ل انه لما نضغط على وحدة منهم خلي السلايد ستارت = الاتريبيوت الداتا اندكس
for (let i = 0; i < li_array.length; i++) {
  li_array[i].onclick = function () {
    slidestart = parseInt(this.getAttribute("data-index"));
    cheak();
  };
}

//function next //نستدعي اسمها بس
function nextslide() {
  //عملنل انو لما يضغط على البتن نكست يزيد عدد السلايد وعملنا شرط انو لمايكون ديسيبلد ميعملش اشي عشان الايروور
  if (nextButton.classList.contains("disapled")) {
    return false;
  } else {
    slidestart++;
    cheak();
  }
}

//function previos//نستدعي اسمها بس
function previosslide() {
  //عملنل انو لما يضغط على البتن البريفيس بنقص عدد السلايد وعملنا شرط انو لمايكون ديسيبلد ميعملش اشي عشان الايروور
  if (previosButton.classList.contains("disapled")) {
    return false;
  } else {
    slidestart--;
    cheak();
  }
}

//تشغل الشيك  لل رقم السلايد الي فوق
cheak();

//هاي الفانكشن فيها اكتر من شغلة
function cheak() {
  //حطينا في الي بتعرض رقم السلايد فوق اسم سلايد ورقمه من العدد الكلي واستدعيناه فوق
  slidnum.textContent = "Slide :" + slidestart + " of " + slideimgcount;

  //استتدعسنا فانكشن الحدف
  removeactive();

  //هنحط كلاس الاكتيف على الصورة من خلال السلايد ستارت الي عرفناه فوق ناقص 1لانه هاد اندكس  ارري ببدا بصفر
  sliderimg[slidestart - 1].classList.add("active");

  //هنحط اكتيف كلاس على ل اي في  يو ل
  //جبنا يو ل وجبنا اطفاله الي هما ل اي الي هما عبارة عن ارري واعطيناهم الاكتيف
  li_array[slidestart - 1].classList.add("active");

  //هنعمل شرط اذا كان السلايد الي احنا فيه الاول حطلي على البريف كلاس الديسيبلد واذالا احدفه
  if (slidestart === 1) {
    //ضيف عليه كلاس الديسيبلد
    previosButton.classList.add("disapled");
  } else {
    //احدف منه كلاس الديسيبلد
    previosButton.classList.remove("disapled");
  }

  //هنعمل شرط اذا كان السلايد الي احنا فيه الاخير حطلي على النكست كلاس الديسيبلد واذالا احدفه
  if (slidestart === slideimgcount) {
    //ضيف عليه كلاس الديسيبلد
    nextButton.classList.add("disapled");
  } else {
    //احدف منه كلاس الديسيبلد
    nextButton.classList.remove("disapled");
  }
}

// هنعمل فانكشن تحدف كلاس الكتيف من جميع الصور ول اي الي في يو ل
function removeactive() {
  ////الصور
  sliderimg.forEach(function (el) {
    el.classList.remove("active");
  });

  ///ل اي
  li_array.forEach(function (el) {
    el.classList.remove("active");
  });
}
