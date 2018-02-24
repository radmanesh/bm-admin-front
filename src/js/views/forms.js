$(function(){
  'use strict';

  $("#date").mask("99/99/9999");

  $('.select2').select2();

  $('textarea.summer2').summernote({
    height: 300
  });

  $('form.jvalidate').validate();


})
