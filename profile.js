var approvedBtn = $('.approved');
var cardContainer = $('.card-container');
var roommateList = JSON.parse(localStorage.getItem('roomies')) || [];

function appendAllRoomies() {
 roommateList.forEach(function(approved){
   cardContainer.append (`
     <div>
      <p class="newCard">${approved}
      <button class="remove">Remove</button></p>
    </div>
  `);
 })
}
appendAllRoomies();

approvedBtn.on("click", newApproved);

function newApproved() {
var approved = $(this).attr('id');

cardContainer.append (`
  <div>
   <p class="newCard">${approved}
   <button class="remove">Remove</button></p>
 </div>
`);
 setStorage(approved);

}

function setStorage(approved) {
 roommateList.push(approved);
 var approvedString = JSON.stringify(roommateList);
 localStorage.setItem('roomies', approvedString);
}
cardContainer.on("click", ".remove", removeRoomie);

function removeRoomie(event) {
 var roomieToDelete = event.target.parentNode.children[0].textContent;
 var indexToDelete = roommateList.indexOf(roomieToDelete);
 roommateList.splice(indexToDelete, 1);
 var approvedString = JSON.stringify(roommateList);
 localStorage.setItem('roomies', approvedString);

 event.target.parentNode.remove()
}




function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
