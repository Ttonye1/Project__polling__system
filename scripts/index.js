const options=[
    {id:"option1", text: "UI/UX", votes:0},
    {id:"option2", text: "Frontend", votes:0},
    {id:"option3", text: "Backend", votes:0},
    {id:"option4", text: "Data Analysis", votes:0},
];


function submitVote(){
    const selectedOption = document.querySelector("input[name='poll']:checked");
    
    if(!selectedOption){
        // alert("Please select an Option");
        document.getElementById("fade-text").innerHTML="Please select an option";
        return;
    }

    const optionId = selectedOption.value;
    const selectedOptionObj = options.find((option)=> option.id === optionId);


    if (selectedOptionObj){
        selectedOptionObj.votes++;
        console.log(selectedOptionObj);
        displayResult();
    }
}

function displayResult(){
    const result = document.getElementById("results");
    result.innerHTML= "";

    options.forEach((option)=>{
        const percentage = ((option.votes/ getTotalVotes()) * 100).toFixed(2) || 0;
        const barWidth = percentage > 0 ? percentage + "%" : "0%";

        const optionResult = document.createElement("div");
        optionResult.className = "option__result";
        optionResult.innerHTML = `
            <span class = "option__text">${option.text}</span>
            <div class = "bar__container">
                <div class = "bar" style="width: ${barWidth};"></div>
            </div>
            <span class = "percentage">${percentage}%</span>
        `;

        result.appendChild(optionResult);
    });
} 

function getTotalVotes(){
    return options.reduce((total,option) => total + option.votes, 0);
};

displayResult();