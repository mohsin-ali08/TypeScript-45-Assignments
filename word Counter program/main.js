import inquirer from "inquirer";
function counterFunction(text) {
    let freeWhiteSpace = text.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
;
async function startWord(counterFunction) {
    do {
        let response = await inquirer.prompt({
            type: "input",
            message: "Write a Sentence:",
            name: "text",
        });
        console.log(counterFunction(response.text));
    } while (true);
}
startWord(counterFunction);
