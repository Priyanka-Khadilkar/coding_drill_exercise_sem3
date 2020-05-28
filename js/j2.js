//J2: 2020
window.onload = readyToLoad;
function readyToLoad() {
    let TotalNoOfPeople = document.getElementById("TotalNoOfPeople");
    let NoOfPeopleDayZero = document.getElementById("NoOfPeopleDayZero");
    let NoOfOtherPeopleInfected = document.getElementById("NoOfOtherPeopleInfected");
    let Form = document.getElementById("form");
    let Output = document.getElementById("Output");

    Form.addEventListener('submit', getValue);

    //Calculate infected people thresold 
    function getValue(event) {
        let P = parseInt(TotalNoOfPeople.value);
        let N = parseInt(NoOfPeopleDayZero.value);
        let R = parseInt(NoOfOtherPeopleInfected.value);
        let count = 0;
        let lastTrailingValue = N;
        let totalInfected = 0;

        while (totalInfected <= P) {
            if (count > 0) {
                lastTrailingValue = lastTrailingValue * R;         
            }
            totalInfected = totalInfected + lastTrailingValue; 
            count++;
        }
        Output.innerHTML = count-1;
        event.preventDefault();
    }
}