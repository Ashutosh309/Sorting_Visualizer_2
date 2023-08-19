let speedslow = false;
let speedmedium = false;
let speedfast = false;
let animationspeed = -1;

var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray() {
    for (var i = 0; i < 20; i++) {

        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);

        // Creating element div
        var array_ele = document.createElement("div");

        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

// Asynchronous SelectionSort function
async function SelectionSort(delay = animationspeed) {
    var blocks = document.querySelectorAll(".block");
    var minindexblock = 0;


    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        // Coloring the current block with sky blue color.
        blocks[i].style.backgroundColor = "#87CEEB";
        minindexblock = i;

        for (var j = i + 1; j < blocks.length; j += 1) {

            //Providing red color to the jth block
            blocks[j].style.backgroundColor = "#FF0000";

            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, animationspeed)
            );

            // console.log("run");
            // Storing the integer value of the jth block in value1.
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            // Storing the integer value of the minindex block in value2.
            var value2 = Number(blocks[minindexblock]
                .childNodes[0].innerHTML);

            // To compare value of two blocks
            if (value1 < value2) {
                if (minindexblock !== i) {
                    //Providing dark blue color to the minindex block 
                    blocks[minindexblock].style.backgroundColor = "#6b5b95";
                }
                minindexblock = j;
            } else {
                blocks[j].style.backgroundColor = "#6b5b95";
            }
        }

        //Now swaping the ith and minindexth block 
        // let temphtml = blocks[i].innerHTML;
        let temptext = blocks[i].childNodes[0].innerText;
        let tempheight = blocks[i].style.height;

        // blocks[i].innerHTML = blocks[minindexblock].innerHTML;
        blocks[i].style.height = blocks[minindexblock].style.height;
        blocks[minindexblock].style.height = tempheight;

        // blocks[minindexblock].innerHTML = temphtml;
        blocks[i].childNodes[0].innerText = blocks[minindexblock].childNodes[0].innerText;
        blocks[minindexblock].childNodes[0].innerText = temptext;

        //Providing dark blue color to the minindex block
        blocks[minindexblock].style.backgroundColor = "#6b5b95";

        //Providing light green color to the ithe block.
        blocks[i].style.backgroundColor = "#13CE66";

        //changing the color of greatest element
        //found in the above traversal
        // blocks[blocks.length - i - 1]
        //     .style.backgroundColor = "#13CE66";
    }


    document.getElementById('slowbtn').disabled = false;
    document.getElementById('mediumbtn').disabled = false;
    document.getElementById('fastbtn').disabled = false;
    document.getElementById('genbtn').disabled = false;
    document.getElementById('startbtn').disabled = false;
}

function generateNewArray() {
    // This function is used to generate a new array containing elements of random numbers having random values.

    // We have to empty the msg written in the stop div block.
    document.getElementById('stopMessage').innerText = "";

    let divblock = document.getElementById('array');
    divblock.innerText = "";

    generatearray();
}

function startAnimation() {
    // This function is used for starting the animation of the array which is generated by the generate function.

    // We have to empty the msg written in the stop div block.
    document.getElementById('stopMessage').innerText = "";

    // First check if the speed of the animation is set if not then set it.
    if (animationspeed == -1)
        animationspeed = 250;

    // Now disable all the buttons leaving stop button if and only if array is generated in the div block.
    if (document.getElementById('array').innerText != "") {
        document.getElementById('slowbtn').disabled = true;
        document.getElementById('mediumbtn').disabled = true;
        document.getElementById('fastbtn').disabled = true;
        document.getElementById('genbtn').disabled = true;
        document.getElementById('startbtn').disabled = true;
        SelectionSort();
    }
}

function stopAnimation() {
    let msg = "";
    let divblock = document.getElementById('array');
    if (divblock.innerText != "") {
        document.getElementById('stopMessage').innerText = "Animation Stopped";
        document.getElementById('stopMessage').classList.add("stopMessageClass");
    }
    divblock.innerText = msg;

    document.getElementById('slowbtn').disabled = false;
    document.getElementById('mediumbtn').disabled = false;
    document.getElementById('fastbtn').disabled = false;
    document.getElementById('genbtn').disabled = false;
    document.getElementById('startbtn').disabled = false;


}

// Fast-0 Medium-250 Slow-500

function speedSlow() {
    speedslow = true;
    speedmedium = false;
    speedfast = false;

    animationspeed = 500;
}

function speedMedium() {
    speedslow = false;
    speedmedium = true;
    speedfast = false;

    animationspeed = 250;
}

function speedFast() {
    speedslow = false;
    speedmedium = false;
    speedfast = true;

    animationspeed = 0;
}