// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var MovieListFilter = {
  filter_G: function () {
    // 'this' is *unwrapped* element that received event (checkbox)
    if ($(G).is(':checked')) {
      $('tr.G').show();
    } else {
      $('tr.G').hide();
    };
  },
  filter_PG: function () {
    // 'this' is *unwrapped* element that received event (checkbox)
    if ($(PG).is(':checked')) {
      $('tr.PG').show();
    } else {
      $('tr.PG').hide();
    };
  },
  filter_PG_13: function () {
    // 'this' is *unwrapped* element that received event (checkbox)
    if ($(PG_13).is(':checked')) {
      $('tr.PG-13').show();
    } else {
      $('tr.PG-13').hide();
    };
  },
  filter_R: function () {
    // 'this' is *unwrapped* element that received event (checkbox)
    if ($(R).is(':checked')) {
      $('tr.R').show();
    } else {
      $('tr.R').hide();
    };
  },
  filter_NC_17: function () {
    // 'this' is *unwrapped* element that received event (checkbox)
    if ($(NC_17).is(':checked')) {
      $('tr.NC-17').show();
    } else {
      $('tr.NC-17').hide();
    };
  },
  
  setup: function() {
    // construct checkbox with label
    var labelAndCheckbox =
      $('<label for="filter">Rating : </label>' +
        '<label> <input type="checkbox" id="G" checked=true/> <span> G </span> </label>'  +
        '<label> <input type="checkbox" id="PG" checked=true/> <span> PG </span> </label>' +
        '<label> <input type="checkbox" id="PG-13" checked=true/> <span> PG-13 </span> </label>' +
        '<label> <input type="checkbox" id="R" checked=true/> <span> R </span> </label>' +
        '<label> <input type="checkbox" id="NC-17" checked=true/> <span> NC-17 </span> </label>' );
    labelAndCheckbox.insertBefore('#movies');
    $('#G').change(MovieListFilter.filter_G);
    $('#PG').change(MovieListFilter.filter_PG);
    $('#PG-13').change(MovieListFilter.filter_PG_13);
    $('#R').change(MovieListFilter.filter_R);
    $('#NC-17').change(MovieListFilter.filter_NC_17);
  }
}
$(MovieListFilter.setup); // run setup function when document ready


var MoviePopup = {
  setup: function() {
    // add hidden 'div' to end of page to display popup:
    var popupDiv = $('<div id="movieInfo"></div>');
    popupDiv.hide().appendTo($('body'));
    $(document).on('click', '#movies a', MoviePopup.getMovieInfo);
  }
  ,getMovieInfo: function() {
    $.ajax({type: 'GET',
            url: $(this).attr('href'),
            timeout: 5000,
            success: MoviePopup.showMovieInfo,
            error: function(xhrObj, textStatus, exception) { alert('Error!'); }
            // 'success' and 'error' functions will be passed 3 args
           });
    return(false);
  }
  ,showMovieInfo: function(data, requestStatus, xhrObject) {
    // center a floater 1/2 as wide and 1/4 as tall as screen
    var oneFourth = Math.ceil($(window).width() / 4);
    $('#movieInfo').
      css({'left': oneFourth,  'width': 2*oneFourth, 'top': 250}).
      html(data).
      show();
    // make the Close link in the hidden element work
    $('#closeLink').click(MoviePopup.hideMovieInfo);
    return(false);  // prevent default link action
  }
  ,hideMovieInfo: function() {
    $('#movieInfo').hide();
    return(false);
  }
};
$(MoviePopup.setup);




