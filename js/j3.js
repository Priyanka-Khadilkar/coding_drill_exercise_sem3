//J3: 2020
window.onload = readyToLoad;
function readyToLoad() {
    let Form = document.getElementById("form");
    let Output = document.getElementById("Output");
    let Inputs = document.getElementById("inputs");

    //Form submit 
    Form.addEventListener('submit', getOutput);

    //Function to call on form submit
    function getOutput(event) {
        let inputsVal = Inputs.value;
        let lines = inputsVal.split(/\r|\r\n|\n/);
        let count = lines.length;
        let xPoints = [];
        let yPoints = [];

        //Validate the inputs
        if (count > 0 && (count - 1 < lines[0] || count - 1 > lines[0])) {
            Output.innerHTML = "Invalid inputs";
        }
        else {
            //Grab X points and Y points into the array
            for (let i = 1; i < count; i++) {
                let point = lines[i].split(',');
                xPoints.push(parseInt(point[0]));
                yPoints.push(parseInt(point[1]));
            }
            //min X point
            let xPointMin = Math.min(...xPoints);

            //max x point
            let xPointMax = Math.max(...xPoints);

            //min Y point
            let yPointMin = Math.min(...yPoints);

            //max Y point
            let yPointMax = Math.max(...yPoints);

            //Bottom left point
            let bottomLeftX = xPointMin;
            let bottomLeftY = yPointMin;

            //Top right point
            let topRightX = xPointMax + 1;
            let topRightY = yPointMax + 1;

            if (bottomLeftX > 0) {
                bottomLeftX = bottomLeftX - 1;
            }
            if (bottomLeftY > 0) {
                bottomLeftY = bottomLeftY - 1;
            }

            Output.innerHTML = bottomLeftX + ", " + bottomLeftY + "<br/>" + topRightX + ", " + topRightY;

        }
        event.preventDefault();
    }
}