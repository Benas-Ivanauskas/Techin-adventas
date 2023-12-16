"use strict"

document.addEventListener("DOMContentLoaded", function() {
  let dropzone = document.getElementById("dropzone");

  // susikele visus draggable elemtus i masyva
  let draggableElements = [
      document.getElementById("draggable"),
      document.getElementById("draggable1"),
      document.getElementById("draggable2")
  ];

  draggableElements.forEach(function(draggable) {
      draggable.addEventListener("dragstart", function(e) {
          e.dataTransfer.setData("text/plain", draggable.innerText);
      });
  });


  dropzone.addEventListener("dragover", function(e) {
      e.preventDefault();
  });

  dropzone.addEventListener("drop", function(e) {
      e.preventDefault();

      // patikrinam ar draged elemnt is text
      if (e.dataTransfer.types.includes("text/plain")) {
          // sukuriame apvalu style, kai idedame i drop zone pasirinkta elementa
          let draggedElement = document.createElement("div");
          draggedElement.classList.add("draggable-item");
          draggedElement.innerText = e.dataTransfer.getData("text/plain");

          // nustatome pozicija pagal index ir droped elemento koordinates
          let index = dropzone.children.length;
          draggedElement.style.left = "12px";
          draggedElement.style.top = index * 60  + "px"; 
        

         
          dropzone.appendChild(draggedElement);
      }
  });
});