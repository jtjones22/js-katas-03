const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
// let firstAns = ""
for (let i = 1; i <= 20; i++) {
  // firstAns += i + ", "
  let newElement = document.createElement("div");
  let newText = document.createTextNode(i);
  newElement.appendChild(newText);
  let destination = document.getElementById("d1");
  destination.appendChild(newElement);
}

// destination.textContent=(firstAns)

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(i);
    newElement.appendChild(newText);
    let destination = document.getElementById("d2");
    destination.appendChild(newElement);
  }
}
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(i);
    newElement.appendChild(newText);
    let destination = document.getElementById("d3");
    destination.appendChild(newElement);
  }

}
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(i);
    newElement.appendChild(newText);
    let destination = document.getElementById("d4");
    destination.appendChild(newElement);
  }

}
for (let i = 1; i <= 10; i++) {
  let newElement = document.createElement("div");
  let newText = document.createTextNode(i ** 2);
  newElement.appendChild(newText);
  let destination = document.getElementById("d5");
  destination.appendChild(newElement);
}
for (let i = 20; i >= 1; i--) {
  let newElement = document.createElement("div");
  let newText = document.createTextNode(i);
  newElement.appendChild(newText);
  let destination = document.getElementById("d6");
  destination.appendChild(newElement);

}
for (let i = 20; i >= 1; i--) {
  if (i % 2 === 0) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(i);
    newElement.appendChild(newText);
    let destination = document.getElementById("d7");
    destination.appendChild(newElement);
  }
}
for (let i = 20; i >= 1; i--) {
  if (i % 2 === 1) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(i);
    newElement.appendChild(newText);
    let destination = document.getElementById("d8");
    destination.appendChild(newElement);
  }
}
for (let i = 100; i >= 1; i--) {
  if (i % 5 === 0) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(i);
    newElement.appendChild(newText);
    let destination = document.getElementById("d9");
    destination.appendChild(newElement);
  }
}
for (let i = 10; i >= 1; i--) {
  let newElement = document.createElement("div");
  let newText = document.createTextNode(i ** 2);
  newElement.appendChild(newText);
  let destination = document.getElementById("d10");
  destination.appendChild(newElement);
}
for (let i = 0; i < sampleArray.length; i++) {
  let newElement = document.createElement("div");
  let newText = document.createTextNode(sampleArray[i]);
  newElement.appendChild(newText);
  let destination = document.getElementById("d11");
  destination.appendChild(newElement);
}
for (let i = 0; i < sampleArray.length; i++) {
  if (sampleArray[i] % 2 === 0) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(sampleArray[i]);
    newElement.appendChild(newText);
    let destination = document.getElementById("d12");
    destination.appendChild(newElement);
  }
}
for (let i = 0; i < sampleArray.length; i++) {
  if (sampleArray[i] % 2 === 1) {
    let newElement = document.createElement("div");
    let newText = document.createTextNode(sampleArray[i]);
    newElement.appendChild(newText);
    let destination = document.getElementById("d13");
    destination.appendChild(newElement);
  }
}
for (let i = 0; i < sampleArray.length; i++) {
  let newElement = document.createElement("div");
  let newText = document.createTextNode(sampleArray[i] ** 2);
  newElement.appendChild(newText);
  let destination = document.getElementById("d14");
  destination.appendChild(newElement);
}
let i;
let sum = 0
for (i = 1; i <= 20; i++) {
    sum = sum + i

let newElement = document.createElement("div");
  let newText = document.createTextNode(sum);
  newElement.appendChild(newText);
  let destination = document.getElementById("d15");
  destination.appendChild(newElement);
}
let total = 0  
for (let i = 0; i < sampleArray.length; i++) {
    total += sampleArray[i]
  
  let newElement = document.createElement("div");
  let newText = document.createTextNode(total);
  newElement.appendChild(newText);
  let destination = document.getElementById("d16");
  destination.appendChild(newElement);
}

{
let min = Math.min.apply(null, sampleArray) 
let newElement = document.createElement("div");
let newText = document.createTextNode(min);
newElement.appendChild(newText);
let destination = document.getElementById("d17");
destination.appendChild(newElement);
}

{
let max = Math.max.apply(null, sampleArray)
let newElement = document.createElement("div");
let newText = document.createTextNode(max);
newElement.appendChild(newText);
let destination = document.getElementById("d18");
destination.appendChild(newElement);
}