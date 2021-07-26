// // // // // document.getElementById("count-el").innerText = 5

// // // // // let firstBatch = 5;
// // // // // let secondBatch = 97;

// // // // // let count = firstBatch + secondBatch;

// // // // // console.log(firstBatch);

// // // // let myAge = 27;
// // // // let humanDogRatio = 7;

// // // // let myDogAge = myAge * humanDogRatio;

// // // // console.log(myDogAge);

// // // // let count = 5;
// // // // count = count++;
// // // // console.log(count)

// // // // let bonusPoints = 50;

// // // // bonusPoints = bonusPoints + 50;
// // // // console.log(bonusPoints);

// // // // bonusPoints = bonusPoints - 75;
// // // // console.log(bonusPoints);

// // // // bonusPoints = bonusPoints + 45;
// // // // console.log(bonusPoints);

// // // // function increment() {
// // // //     console.log("The button was clicked!")
// // // // }

// // // // function countDown() {
// // // //     console.log(5)
// // // //     console.log(4)
// // // //     console.log(3)
// // // //     console.log(2)
// // // //     console.log(1)
// // // // }

// // // // countDown();

// // // // countDown()

// // // function results() {
// // //     console.log(42)
// // // }

// // // results();

// // let lap1 = 34;
// // let lap2 = 33;
// // let lap3 = 36;

// // // function lapResults() {
// // //     console.log(lap1);
// // //     console.log(lap2);
// // //     console.log(lap3);
// // // }

// // function lapResults() {
// //     // let totalTime = lap1 + lap2 + lap3;
// //     console.log(lap1 + lap2 + lap3);
// // }
// // // lapResults();

// let lapsCompleted = 0;

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// let countEl = document.getElementById("count-el")
// console.log(countEl)
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0;
}
