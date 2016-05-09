$(document).ready(function(){
  
  
    $(".next").on( "click", function() {
    $(this).parent('section').removeClass('right left up down center').addClass('left');
      
      var $foo = $(this).attr("data-Page");
      $($foo).addClass('center'); 
      if ($('#cover').hasClass('center')) {$('.home').addClass('hide');} else {
        if ($('.home').hasClass('hide')) {$('.home').removeClass('hide');}
      }
      
    });
  
  $(".back").on( "click", function() {
    $(this).parent('section').removeClass('right left up down center').addClass('right');
      var $bar = $(this).attr("data-Page");
      $($bar).addClass('center'); 
     if ($('#cover').hasClass('center')) {$('.home').addClass('hide');} else {
        if ($('.home').hasClass('hide')) {$('.home').removeClass('hide');}
      }
    });
  
  
  $("#cover h1").on("click", function() {
    $("#cover h1").addClass("floating");
  });
  
    $(".home").on( "click", function() {
   $('#p1,#p2,#p3,#p4,#p5,#p6,#p7,#p8,#p9,#p10,#p11,#p12,#p13, #p14,#p15, #p16, #p17, #p18').removeClass('right left up down center');
      $('#p1').addClass('right'); 
      $('#p2').addClass('right');
      $('#p3').addClass('right');
      $('#p4').addClass('right');
      $('#p5').addClass('right');
      $('#p6').addClass('right');
      $('#p7').addClass('right');
      $('#p8').addClass('right');
      $('#p9').addClass('right');
      $('#p10').addClass('right');
      $('#p11').addClass('right');
      $('#p12').addClass('right');
      $('#p13').addClass('right');
      $('#p14').addClass('right');
      $('#p15').addClass('right');
      $('#p16').addClass('right');
      $('#p17').addClass('right');
      $('#p18').addClass('right');
      var $bar = $(this).attr("data-Page");
      $($bar).addClass('center'); 
      $('.home').addClass('hide');
    });
  
  
});

var locations = [
  ['<b>France</b>', 46.0000,2.0000, 1, 83.7, '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png" width=75%'],
  ['<b>United States</b>', 39.0921167,-94.8559125, 2, 74.8, '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" width=75%>'],
  ['<b>Spain</b>', 40.0000,-4.0000, 3, 65, '<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Spain_(state_version)_new_republic.svg" width=75%>'],
  ['<b>China</b>', 35.86166, 104.19539699999996, 4, 55.6, '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Sample_PRC_Flag.svg/3000px-Sample_PRC_Flag.svg.png" width=75%>'],
  ['<b>Italy</b>', 41.8719, 12.5674, 5, 48.6, '<img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" width=75%>'],
  ['<b>Turkey</b>', 38.963745, 35.243322000000035, 6, 39.8, '<img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" width=75%>'],
  ['<b>Germany</b>', 51.165691, 10.451526000000058, 7, 33, '<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Germany_as_seen_in_Tagesschau.jpg" width=75%>'],
  ['<b>United Kingdom</b>', 52.3555, 1.1743, 8, 32.6, '<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" width=75%>'],
  ['<b>Russia</b>', 61.5240, 105.3188, 9, 29.8, '<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Standard_of_the_President_of_the_Russian_Federation.svg" width=65% height=75%>'],
  ['<b>Mexico</b>', 19.427013, -99.127588, 10, 29.1, '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2000px-Flag_of_Mexico.svg.png" width=75%>']
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 2,
  center: new google.maps.LatLng(40.0000,-4.0000),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow({
  });
var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

 google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0] + ' is ranked number '+ locations[i][3] + ' in the top 10 travel destinations of 2014, according to the U.N. World Tourism Organization Network, with ' + locations[i][4] + ' million visitors.&nbsp' + locations[i][5]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}