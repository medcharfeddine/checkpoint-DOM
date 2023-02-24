//select all p tags and put them in array
var pTags = document.getElementsByTagName("p");
var pArray = [];
for (var i = 0; i < pTags.length; i++) {
  pArray.push(pTags[i]);
}

//select first p tag in the array and add class 'p1'
pArray[0].classList.add("p1");
//select second p tag in the array and add class 'p2'
pArray[1].classList.add("p2");
//select third p tag in the array and add class 'p3'
pArray[2].classList.add("p3");
//select fourth p tag in the array and add class 'p4'
pArray[3].classList.add("p4");

//select all input tags and add them to array
var inputTags = document.getElementsByTagName("input");
var inputArray = [];
for (var i = 0; i < inputTags.length; i++) {
  inputArray.push(inputTags[i]);
}

//add class 'checked' to all input tags when checked
for (var i = 0; i < inputArray.length; i++) {
  inputArray[i].addEventListener("change", function () {
    if (this.checked) {
      this.classList.add("checked");
    } else {
      this.classList.remove("checked");
    }
  });
}

//select all button tags with class 'plus' and add them to array
var plusTags = document.getElementsByClassName("plus");
var plusArray = [];
for (var i = 0; i < plusTags.length; i++) {
  plusArray.push(plusTags[i]);
}
//select all button tags with class'minus' and add them to array
var minusTags = document.getElementsByClassName("minus");
var minusArray = [];
for (var i = 0; i < minusTags.length; i++) {
  minusArray.push(minusTags[i]);
}
//select all button tags with class 'delete' and add them to array
var deleteTags = document.getElementsByClassName("delete");
var deleteArray = [];
for (var i = 0; i < deleteTags.length; i++) {
  deleteArray.push(deleteTags[i]);
}
//select all button tags with class 'like' and add them to array
var likeTags = document.getElementsByClassName("like");
var likeArray = [];
for (var i = 0; i < likeTags.length; i++) {
  likeArray.push(likeTags[i]);
}

//check if inputArray is checked, if so icrement pArray +1 when clicked on plusArray
plusArray[0].addEventListener("click", function () {
  if (inputArray[0].checked) {
    pArray[0].innerHTML = parseInt(pArray[0].innerHTML) + 1;
  }
});

plusArray[1].addEventListener("click", function () {
  if (inputArray[1].checked) {
    pArray[1].innerHTML = parseInt(pArray[1].innerHTML) + 1;
  }
});

plusArray[2].addEventListener("click", function () {
  if (inputArray[2].checked) {
    pArray[2].innerHTML = parseInt(pArray[2].innerHTML) + 1;
  }
});

plusArray[3].addEventListener("click", function () {
  if (inputArray[3].checked) {
    pArray[3].innerHTML = parseInt(pArray[3].innerHTML) + 1;
  }
});

//decrement pArray when minusArray is pressed and only when inputArray is checked but it don't go below 0
minusArray[0].addEventListener("click", function () {
  if (inputArray[0].checked) {
    if (parseInt(pArray[0].innerHTML) > 0) {
      pArray[0].innerHTML = parseInt(pArray[0].innerHTML) - 1;
      //console.log(pArray[0].innerHTML);
    }
  }
});

minusArray[1].addEventListener("click", function () {
  if (inputArray[1].checked) {
    if (parseInt(pArray[1].innerHTML) > 0) {
      pArray[1].innerHTML = parseInt(pArray[1].innerHTML) - 1;
      //console.log(pArray[1].innerHTML);
    }
  }
});

minusArray[2].addEventListener("click", function () {
  if (inputArray[2].checked) {
    if (parseInt(pArray[2].innerHTML) > 0) {
      pArray[2].innerHTML = parseInt(pArray[2].innerHTML) - 1;
      //console.log(pArray[2].innerHTML);
    }
  }
});

minusArray[3].addEventListener("click", function () {
  if (inputArray[3].checked) {
    if (parseInt(pArray[3].innerHTML) > 0) {
      pArray[3].innerHTML = parseInt(pArray[3].innerHTML) - 1;
      //console.log(pArray[3].innerHTML);
    }
  }
});

//select all class 'unitPrice' and add them to array
var unitPriceTags = document.getElementsByClassName("unitPrice");
var unitPriceArray = [];
for (var i = 0; i < unitPriceTags.length; i++) {
  unitPriceArray.push(unitPriceTags[i]);
}

//select all class 'price' and add them to array
var priceTags = document.getElementsByClassName("price");
var priceArray = [];
for (var i = 0; i < priceTags.length; i++) {
  priceArray.push(priceTags[i]);
}

//when plusArray pressed add unitPriceArray innerHTML to priceArray innerHTML and add the total sum
plusArray[0].addEventListener("click", function () {
  if (inputArray[0].checked) {
    priceArray[0].innerHTML =
      parseInt(priceArray[0].innerHTML) + parseInt(unitPriceArray[0].innerHTML);
  }
});
plusArray[1].addEventListener("click", function () {
  if (inputArray[1].checked) {
    priceArray[1].innerHTML =
      parseInt(priceArray[1].innerHTML) + parseInt(unitPriceArray[1].innerHTML);
  }
});
plusArray[2].addEventListener("click", function () {
  if (inputArray[2].checked) {
    priceArray[2].innerHTML =
      parseInt(priceArray[2].innerHTML) + parseInt(unitPriceArray[2].innerHTML);
  }
});
plusArray[3].addEventListener("click", function () {
  if (inputArray[3].checked) {
    priceArray[3].innerHTML =
      parseInt(priceArray[3].innerHTML) + parseInt(unitPriceArray[3].innerHTML);
  }
});

//when minusArray pressed add unitPriceArray innerHTML to priceArray innerHTML and subtract the total sum but it don't go below 0
minusArray[0].addEventListener("click", function () {
  if (inputArray[0].checked) {
    if (parseInt(priceArray[0].innerHTML) > 0) {
      priceArray[0].innerHTML =
        parseInt(priceArray[0].innerHTML) -
        parseInt(unitPriceArray[0].innerHTML);
    }
  }
});
minusArray[1].addEventListener("click", function () {
  if (inputArray[1].checked) {
    if (parseInt(priceArray[1].innerHTML) > 0) {
      priceArray[1].innerHTML =
        parseInt(priceArray[1].innerHTML) -
        parseInt(unitPriceArray[1].innerHTML);
    }
  }
});
minusArray[2].addEventListener("click", function () {
  if (inputArray[2].checked) {
    if (parseInt(priceArray[2].innerHTML) > 0) {
      priceArray[2].innerHTML =
        parseInt(priceArray[2].innerHTML) -
        parseInt(unitPriceArray[2].innerHTML);
    }
  }
});
minusArray[3].addEventListener("click", function () {
  if (inputArray[3].checked) {
    if (parseInt(priceArray[3].innerHTML) > 0) {
      priceArray[3].innerHTML =
        parseInt(priceArray[3].innerHTML) -
        parseInt(unitPriceArray[3].innerHTML);
    }
  }
});

//everytime plusArray is pressed and inputArray is checked add the sum of unitPriceArray to id 'total'
var total = 0;
plusArray[0].addEventListener("click", function () {
  if (inputArray[0].checked) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) +
      parseInt(unitPriceArray[0].innerHTML);
  }
});
plusArray[1].addEventListener("click", function () {
  if (inputArray[1].checked) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) +
      parseInt(unitPriceArray[1].innerHTML);
  }
});
plusArray[2].addEventListener("click", function () {
  if (inputArray[2].checked) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) +
      parseInt(unitPriceArray[2].innerHTML);
  }
});
plusArray[3].addEventListener("click", function () {
  if (inputArray[3].checked) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) +
      parseInt(unitPriceArray[3].innerHTML);
  }
});

//everytime minusArray is pressed and inputArray is checked subtract the sum of unitPriceArray to id 'total' but don't let it go below 0
var total = 0;
minusArray[0].addEventListener("click", function () {
  if (inputArray[0].checked) {
    if (parseInt(document.getElementById("total").innerHTML) > 0) {
      document.getElementById("total").innerHTML =
        parseInt(document.getElementById("total").innerHTML) -
        parseInt(unitPriceArray[0].innerHTML);
    }
  }
});
minusArray[1].addEventListener("click", function () {
  if (inputArray[1].checked) {
    if (parseInt(document.getElementById("total").innerHTML) > 0) {
      document.getElementById("total").innerHTML =
        parseInt(document.getElementById("total").innerHTML) -
        parseInt(unitPriceArray[1].innerHTML);
    }
  }
});
minusArray[2].addEventListener("click", function () {
  if (inputArray[2].checked) {
    if (parseInt(document.getElementById("total").innerHTML) > 0) {
      document.getElementById("total").innerHTML =
        parseInt(document.getElementById("total").innerHTML) -
        parseInt(unitPriceArray[2].innerHTML);
    }
  }
});
minusArray[3].addEventListener("click", function () {
  if (inputArray[3].checked) {
    if (parseInt(document.getElementById("total").innerHTML) > 0) {
      document.getElementById("total").innerHTML =
        parseInt(document.getElementById("total").innerHTML) -
        parseInt(unitPriceArray[3].innerHTML);
    }
  }
});

//when likeArray pressed toggle change color between red and black and add alert if inputArray not checked "please check item first" and if the color is changed add alert "This item is already in you favorites"
likeArray[0].addEventListener("click", function () {
  if (inputArray[0].checked) {
    likeArray[0].style.color = "red";
    alert("This item has been added in you favorites");
  } else {
    alert("Please select the item first");
  }
});
likeArray[1].addEventListener("click", function () {
  if (inputArray[1].checked) {
    likeArray[1].style.color = "red";
    alert("This item has been added in you favorites");
  } else {
    alert("Please select the item first");
  }
});
likeArray[2].addEventListener("click", function () {
  if (inputArray[2].checked) {
    likeArray[2].style.color = "red";
    alert("This item has been added in you favorites");
  } else {
    alert("Please select the item first");
  }
});
likeArray[3].addEventListener("click", function () {
  if (inputArray[3].checked) {
    likeArray[3].style.color = "red";
    alert("This item has been added in you favorites");
  } else {
    alert("Please select the item first");
  }
});

//when pressed deleteArray remove the parent td
deleteArray[0].addEventListener("click", function () {
  deleteArray[0].parentElement.parentElement.parentElement.remove();
});
deleteArray[1].addEventListener("click", function () {
  deleteArray[1].parentElement.parentElement.parentElement.remove();
});
deleteArray[2].addEventListener("click", function () {
  deleteArray[2].parentElement.parentElement.parentElement.remove();
});
deleteArray[3].addEventListener("click", function () {
  deleteArray[3].parentElement.parentElement.parentElement.remove();
});

//when deleteArray pressed substract the priceArray value from id 'total'
var total = 0;
deleteArray[0].addEventListener("click", function () {
  if (parseInt(document.getElementById("total").innerHTML) > 0) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) -
      parseInt(priceArray[0].innerHTML);
  }
});
deleteArray[1].addEventListener("click", function () {
  if (parseInt(document.getElementById("total").innerHTML) > 0) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) -
      parseInt(priceArray[1].innerHTML);
  }
});
deleteArray[2].addEventListener("click", function () {
  if (parseInt(document.getElementById("total").innerHTML) > 0) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) -
      parseInt(priceArray[2].innerHTML);
  }
});
deleteArray[3].addEventListener("click", function () {
  if (parseInt(document.getElementById("total").innerHTML) > 0) {
    document.getElementById("total").innerHTML =
      parseInt(document.getElementById("total").innerHTML) -
      parseInt(priceArray[3].innerHTML);
  }
});