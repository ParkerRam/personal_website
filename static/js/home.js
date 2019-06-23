$(function() {
    $(".typed").typed({
      strings: [
        "Welcome to my personal website!<br/>" + 
        "><span class='caret'>$</span> education: University of British Columbia - BSc. Statistics (Year 4)<br/> ^100" +
        "><span class='caret'>$</span> interests: data analytics, data science, software development<br/> ^300" +
        "><span class='caret'>$</span> hobbies: powerlifting, soccer, hockey<br/> ^300" +
        "><span class='caret'>$</span> current job: Data Analyst Co-op at FreshBooks<br/> ^100"
      ],
      showCursor: true,
      cursorChar: '_',
      autoInsertCss: true,
      typeSpeed: 0.001,
      startDelay: 50,
      loop: false,
      showCursor: false,
      onStart: $('.message form').hide(),
      onStop: $('.message form').show(),
      onTypingResumed: $('.message form').hide(),
      onTypingPaused: $('.message form').show(),
      onComplete: $('.message form').show(),
      onStringTyped: function(pos, self) {$('.message form').show();},
    });
    $('.message form').hide()
  });