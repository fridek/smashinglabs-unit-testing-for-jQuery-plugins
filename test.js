(function(){

  function addTwo(a,b) {
    return a + b;
  }
  
  function addTwo_correct(a,b) {
   var sum = parseInt(a) + parseInt(b);
   if(isNaN(sum)) {throw "add my shiny metal ass"; }
   return sum;
  }

  module("part 1 - basics");

  test('addTwo test basic', function() {
     equal(addTwo(10,20), 30);
  });

  test('addTwo test more assets', function() {
   equal(addTwo(10,20), 30);
   equal(addTwo(10,-20), -10); // negatives ok?
   equal(addTwo(0,0), 0); // zeros?
   equal(addTwo(1000000000000000000000000000000000000000000000000000000000000,1),1000000000000000000000000000000000000000000000000000000000001); // superlong?
   equal(addTwo(10,false), 10); // JS funny stuff
  });
    
  test('addTwo test data from input', function() {
   var a = $('#a'), b = $('#b');
   a.val(10); b.val(20);
   equal(addTwo(a.val(),b.val()), 30);
 
   a.val(10); b.val(-20);
   equal(addTwo(a.val(),b.val()), -10); // negatives ok?
 
   a.val(0); b.val(0);
   equal(addTwo(a.val(),b.val()), 0); // zeros?
 
   a.val(1000000000000000000000000000000000000000000000000000000000000); b.val(1);
   equal(addTwo(a.val(),b.val()),1000000000000000000000000000000000000000000000000000000000001); // superlong?
 
   a.val(10); b.val(false);
   equal(addTwo(a.val(),b.val()), 10); // JS funny stuff
  });  

  test('addTwo test basic - correct', function() {
     equal(addTwo_correct(10,20), 30);
  });

  test('addTwo test more assets - correct', function() {
   equal(addTwo_correct(10,20), 30);
   equal(addTwo_correct(10,-20), -10); // negatives ok?
   equal(addTwo_correct(0,0), 0); // zeros?
   equal(addTwo_correct(1000000000000000000000000000000000000000000000000000000000000,1),1000000000000000000000000000000000000000000000000000000000001); // superlong?
   equal(addTwo_correct(10,false), 10); // JS funny stuff
  });
    
  test('addTwo test data from input - correct', function() {
   var a = $('#a'), b = $('#b');
   a.val(10); b.val(20);
   equal(addTwo_correct(a.val(),b.val()), 30);
 
   a.val(10); b.val(-20);
   equal(addTwo_correct(a.val(),b.val()), -10); // negatives ok?
 
   a.val(0); b.val(0);
   equal(addTwo_correct(a.val(),b.val()), 0); // zeros?
 
   a.val(1000000000000000000000000000000000000000000000000000000000000); b.val(1);
   equal(addTwo_correct(a.val(),b.val()),1000000000000000000000000000000000000000000000000000000000001); // superlong?
 
   a.val(10); b.val(false);
   equal(addTwo_correct(a.val(),b.val()), 10); // JS funny stuff
  });

  module("part 2 - css");
  
  test('headers h2', function() {
   $('#headers h2').each(function() {
      equal($(this).css('font-size'), "12px");
   });
  });
  
  test('headers h2 counting', function() {
   var count = 0, elem;
   $('#headers h2').each(function() {
      elem = $(this);
      if(elem.css('font-size') != "12px") {
          count++;
          elem.css('border', '1px #f00 dotted'); // mark error
      }
   });
   equal(count, 0, 'There are ' + count + ' wrong headers');
  });  

/*
* header should have one line of text only (and it breaks with more)
* width should be fixed 250px
* font size should be 14px for header and 11px for text
* inner image should have 5px margin from text
* inner image should have 5px margin from widget border (sum of margin + padding)
* widget should have 5px padding
*/
  test('widget', function() {
    var widget = $('#widget');
    var header = $('h2', widget);
    var img = $('img', widget);   
    
    equal(widget.css('font-size'), "14px");
    equal(widget.css('padding-left'), "5px");
    equal(widget.css('padding-right'), "5px");
    
    var padding_left = widget.css('padding-left');
    padding_left = padding_left.substring(0,padding_left.length - 2);
    
    var padding_right = widget.css('padding-right');
    padding_right = padding_right.substring(0,padding_right.length - 2);
    
    var widget_width = parseInt(widget.width()) + parseInt(padding_left) + parseInt(padding_right);
    
    equal(widget_width, 250);
    
    equal(header.css('font-size'), "16px");
    ok(header[0].offsetHeight < 30);
    
    equal(widget.offset().left + widget_width - (img.offset().left + img.width()), 5);
    equal(img.css('margin-left'), "5px");
  });
  
  test('floats', function() {
   var count = 0, elem;
   $('div').not('.clearfix').each(function() {
      elem = $(this);
      if(elem.height() == 0) {
          count++;
          elem.css('border', '1px #f00 dotted'); // mark error
      }
   });
   equal(count, 0, 'There are ' + count + ' divs with 0 height');    
  });
  
}());