// Created by: Clara Tyman
// Created on: Mar 2024
// This file contains the JS functions for index.html
/**
 * This function calculates 
 */
function calculate() {
  // input
  const length = parseFloat(document.getElementById('length-of-pyramid').value)
  const width = parseFloat(document.getElementById('width-of-pyramid').value)
  const height = parseFloat(document.getElementById('height-of-pyramid').value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}
