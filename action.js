const input = document.querySelector("#add");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// this function will allow us to add elements when we click the button
btn.onclick = function() {

    var txt = input.value;
    if (txt == '') {
        alert('you must write something');
    } else {

        // Create new list
        li = document.createElement('li');
        delBtn = document.createElement('button'); // New element
        delBtn.classList.add("deleteButton"); // Adding class
        delBtn.innerHTML = "DELETE"; // Adding text inside element
        donBtn = document.createElement('button');
        donBtn.classList.add("doneButton");
        donBtn.innerHTML = "DONE";
        taskText = document.createElement('span');
        taskText.classList.add("taskText");
        taskText.innerHTML = txt;

        li.appendChild(taskText);
        li.appendChild(delBtn);
        li.appendChild(donBtn);

        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }

};

list.onclick = function(ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
};


// Action button listener
document.addEventListener('click', function(e) {
    if (e.target && e.target.className.includes('deleteButton')) {
        //do something
        e.target.parentNode.remove();
    } else if (e.target && e.target.className.includes('doneButton')) {
        //do something
        // Get taskText element
        var taskText = e.target.parentNode.childNodes[0];
        var donBtn = e.target;

        if (donBtn.innerHTML == "DONE") {
            taskText.className += " checked";
            donBtn.innerHTML = "UNDONE";
        } else {
            var classnames = taskText.className;
            taskText.className = classnames.replace(" checked", "");
            donBtn.innerHTML = "DONE";
        }
    }
});