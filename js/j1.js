//J1: 2020
window.onload = readyToLoad;
function readyToLoad() {
    let smalltreats = document.getElementById("SmallTreats");
    let mediumtreats = document.getElementById("MediumTreats");
    let largeTreats = document.getElementById("LargeTreats");
    let output = document.getElementById("Output");

    smalltreats.addEventListener('change', updateValue);
    mediumtreats.addEventListener('change', updateValue);
    largeTreats.addEventListener('change', updateValue);

    //Check if barely is happy or sad
    function updateValue() {
        let S = smalltreats.value;
        let M = mediumtreats.value;
        let L = largeTreats.value;
        let happinessscore = (1 * S) + (2 * M) + (3 * L);
        //if score is 10 and more than 10 then Barely is happy else sad.
        if (happinessscore >= 10) {
            output.innerHTML = "Barley is happy";
        }
        else {
            output.innerHTML = "Barley is sad";
        }
    }
}