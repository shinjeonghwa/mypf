
// 클릭하면 1 page로 이동하는 jq
$(document).ready(function () {

  $('.top-btn').click(function () {

    var offset = $('header').offset().left;

    $('html').animate({scrollLeft: offset}, 1000);
  });

});

// nav를 클릭하면 해당 페이지로 이동
$(document).ready(function () {

  $('.btn1').click(function (e) {

    e.preventDefault();
    var offset = $('#div1').offset().left;

    $('html').animate({scrollLeft: offset}, 1000);

  });

  $(document).ready(function () {

    $('.btn2').click(function (e) {
  
      e.preventDefault();
      var offset = $('#div2').offset().left;
  
      $('html').animate({scrollLeft: offset}, 1000);
    });

  })

  $(document).ready(function () {

    $('.title2 > span:nth-child(1)').click(function () {
      var offset = $('#div1').offset().left;

      $('html').animate({scrollLeft: offset},1000);
    });
  });

  $(document).ready(function () {

    $('.title2 > span:nth-child(3)').click(function () {
      var os = $('#div3').offset().left;

      $('html').animate({scrollLeft: os},1500);
    });
  });

  $(document).ready(function () {

    $('.title3 > span:nth-child(1)').click(function () {
      var offset = $('#div2').offset().left;

      $('html').animate({scrollLeft: offset},1000);
    });
  });

  $(document).ready(function () {

    $('.title3 > span:nth-child(3)').click(function () {
      var os = $('#div4').offset().left;

      $('html').animate({scrollLeft: os},1500);
    });
  });

  // nav에 호버 시 click이라는 태그가 보여지는 것
  $('.nav-sub1').hover(function () {

    $('.click-bg1').show();
  }, function () {
    $('.click-bg1').hide();
  });

  $('.nav-sub2').hover(function () {

    $('.click-bg2').show();
  }, function () {
    $('.click-bg2').hide();
  });

  $('.nav-sub3').hover(function () {

    $('.click-bg3').show();
  }, function () {
    $('.click-bg3').hide();
  });

  $('.nav-sub4').hover(function () {
    $('.click-bg4').show();
  }, function () {
    $('.click-bg4').hide();
  });

  // header영역에서 꽃이 내리는 모습
  function createFlower() {
    var fl = document.createElement("div");

    fl.classList.add('flower');
    fl.style.marginLeft = randomPosition() + 'px';
    document.body.appendChild(fl);
  }

  function randomPosition(){
    return Math.floor(Math.random() * window.innerWidth)
    ;}

  for(let i = 0; i < 15; i++) { 
    createFlower();
  }
});

// 웹 사이트 click event
$('.web.gnb > li:first-child').find('ul.sub').show();
$('.web.gnb > li:first-child > a').css('backgroundColor','#f1f1f1');
$('.web.gnb > li:first-child > a').css('color','#000');

$('.web.gnb > li:nth-child(1)').click(function() {
  $(this).find('ul.sub').show();
  $('.web.gnb > li:nth-child(1) > a').css('backgroundColor','#f1f1f1');
  $('.web.gnb > li:nth-child(1) > a').css('color','#000');
  
  $('.web.gnb > li:nth-child(2)').find('ul.sub').hide();
  $('.web.gnb > li:nth-child(2) > a').css('backgroundColor','');
  $('.web.gnb > li:nth-child(2) > a').css('color','#f1f1f1');

  $('.web.gnb > li:nth-child(3)').find('ul.sub').hide();
  $('.web.gnb > li:nth-child(3) > a').css('backgroundColor','');
  $('.web.gnb > li:nth-child(3) > a').css('color','#f1f1f1');
})

$('.web.gnb > li:nth-child(2)').click(function() {
  $(this).find('ul.sub').show();
  $('.web.gnb > li:nth-child(2) > a').css('backgroundColor','#f1f1f1');
  $('.web.gnb > li:nth-child(2) > a').css('color','#000');

  $('.web.gnb > li:nth-child(1)').find('ul.sub').hide();
  $('.web.gnb > li:nth-child(1) > a').css('backgroundColor','');
  $('.web.gnb > li:nth-child(1) > a').css('color','#f1f1f1');
  $('.web.gnb > li:nth-child(3)').find('ul.sub').hide();
  $('.web.gnb > li:nth-child(3) > a').css('backgroundColor','');
  $('.web.gnb > li:nth-child(3) > a').css('color','#f1f1f1');
});


  $('.web.gnb > li:nth-child(3)').click(function() {
  $(this).find('ul.sub').show();
  $('.web.gnb > li:nth-child(3) > a').css('backgroundColor','#f1f1f1');
  $('.web.gnb > li:nth-child(3) > a').css('color','#000');

  $('.web.gnb > li:nth-child(2)').find('ul.sub').hide();
  $('.web.gnb > li:nth-child(2) > a').css('backgroundColor','');
  $('.web.gnb > li:nth-child(2) > a').css('color','#f1f1f1');
  $('.web.gnb > li:nth-child(1)').find('ul.sub').hide();
  $('.web.gnb > li:nth-child(1) > a').css('backgroundColor','');
  $('.web.gnb > li:nth-child(1) > a').css('color','#f1f1f1');
})


$('.sub.slide1 > li:nth-child(2)').hover(function() {

  $('.sub > li > div > img').css('top', '-2000px');
  }, function () {
  $('li > div > img').css('top', '0');
  });

  $('.sub.slide2 > li:nth-child(2)').hover(function() {

    $('.sub > li > div > img').css('top', '-9000px');
    }, function () {
    $('li > div > img').css('top', '3%');
    });

  $('.sub.slide3 > li:nth-child(2) > .mini-site').hover(function() {

    $('.sub.slide3 > li > .mini-site > img').css('top', '-1400px');
    }, function () {
    $('li > div > img').css('top', '3%');
    });




