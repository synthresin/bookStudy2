/*The MIT License (MIT)

Copyright (c) 2014 K. Popolov http://github.com/ezhikov/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/
(function($) {
  $.fn.selectbox = function(options) {
    var settings;
	var text;
    settings = $.extend({
      customList: false
    }, options);
    return this.each(function() {
      var list, opts, select, wrapper;
	  //var box = $(this).closest('.sel_box');
      select = $(this).css({
        'opacity': 0,
        'position': 'absolute',
        'z-index': 2,
        'top': 0,
        'width': '100%',
        'height': '100%'
      });
      if (settings.customList) {
        opts = select.children();
      }


      wrapper = select.wrap("<div class='selectbox'></div>").parent().css({
        'position': 'relative'
      });


	 var disabled = $(this).hasClass('disabled');
	 var selected = $(this).hasClass('selected');
	 if(disabled) $(this).closest('.selectbox').addClass('disabled');

	 if(selected){
		var sel_idx = 0;
		$(this).children('option').each(function(){
			var n = $(this).attr('selected');
			if(n != null) sel_idx = $(this).index();
		});
		wrapper.append("<span class='value'>" + opts.eq(sel_idx).text() + "</span>");
	 }else{
		wrapper.append("<span class='value'>" + opts.eq(0).text() + "</span>");
	 }

      if (settings.customList) {
        select.hide();
        list = wrapper.append("<ul class='list'></ul>").find('ul');
        opts.each(function() {
          return list.append("<li>" + this.text + "</li>");
        });
        list.hide();
      }

      select.on('change', function() {
        wrapper.children('.value').text(text);
        return false;
      });

	  $(document).on('click', function() {
		 list.hide();
      });

      if (settings.customList) {
        wrapper.click(function() {
		 if($(this).hasClass('disabled')) return false;
		 $('.selectbox .list').hide();
          list.toggle();
          return false;
        });


        list.children().click(function() {
          list.toggle();
		  text = opts.eq(list.children().index(this)).text();

          select.val(opts.eq(list.children().index(this)).val()).trigger('change');
          return false;
        });
      }
      return $(this);
    });
  };
  return false;
})(jQuery);
