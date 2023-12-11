'use strict';

function generateCandy() {
  const stripCounter = document.getElementById('stripCounter').value;
  const candyContainer = document.getElementById('candyContainer');
  candyContainer.innerHTML = '';

  const colors = ['red', 'white'];

  for (let i = 0; i < stripCounter; i++) {
    const stripes = document.createElement('div');
    stripes.style.backgroundColor = colors[i % 2];
    stripes.style.height = '50px';
    stripes.style.width = '20px';
    stripes.style.display = 'inline-block';

    //candyContainer yra parentNode, stripes yra childNode. appendChild leidzia.(method allows you to add a node to the end of the list of child nodes of a specified parent node.)
    candyContainer.appendChild(stripes);
  }
}
