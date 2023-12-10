'use strict';

document.querySelector('.btn-on').addEventListener('click', function () {
  const lightParagraphs = document.querySelectorAll('.btn p');
  lightParagraphs.forEach(function (paragraph) {
    paragraph.classList.add('light-btn-on');
  });
  const lightH2 = document.querySelectorAll('.btn h2');
  lightH2.forEach(function (header) {
    header.classList.add('light-btn-on1');
  });
  document.querySelector('.topic').style.color = '#7da832';
});

const btnOff = document.querySelector('.btn-off');
btnOff.addEventListener('click', function () {
  console.log('click');
  const lightParagraphs = document.querySelectorAll('.btn p');
  lightParagraphs.forEach(function (paragraph) {
    paragraph.classList.remove('light-btn-on');
  });
  const lightH2 = document.querySelectorAll('.btn h2');
  lightH2.forEach(function (header) {
    header.classList.remove('light-btn-on1');
  });
  document.querySelector('.topic').style.color = 'white';
});
