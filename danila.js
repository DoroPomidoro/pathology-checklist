let textInputValues = []; // Initialize an array to store text input values
// Function to add value of text input to array
function addValueToArray(event) {
  let value = event.target.value; // Get the input value from the event
  let id = event.target.id; // Get the input id from the event

  // Check if value for this input id already exists in the array
  let existingValueIndex = textInputValues.findIndex((item) => item.id === id);

  if (existingValueIndex > -1) {
    // If value for this input id already exists, update it
    textInputValues[existingValueIndex].value = value;
  } else {
    // If value for this input id doesn't exist, add it
    textInputValues.push({ id: id, value: value });
  }
}

// Get all text inputs
let textInputs = document.querySelectorAll('input[type="text"]');

// Add event listener to each text input
textInputs.forEach((input) => {
  input.addEventListener("input", addValueToArray);
});

document
  .getElementById("btn-final")
  .addEventListener("click", processFieldSets);

function isFieldSet(element) {
  return element.tagName.toLowerCase() === "fieldset";
}

function extractInputData(inputs) {
  let inputData = {};
  inputs.forEach((input) => {
    switch (input.type) {
      case "radio":
        // For radio inputs, check if it's selected
        if (input.checked) {
          inputData["answer"] = input.value;
        }
        break;
      case "checkbox":
        // for checkbox inputs
        if (input.checked) {
          inputData["answer"] = input.value;
          break;
        }
      case "text":
        inputData["answer"] = `${input.value} ${textInputValues}`;
        console.log(`TEXT INPUT ${textInputValues}`);
      // Add cases for other types of inputs if needed
    }
  });

  return inputData;
}

function processFieldSets(event) {
  event.preventDefault(); // Prevent form submission

  let fieldSets = document.querySelector("form").children;
  let groupedParagraphs = {};

  // Loop through each child of form (fieldsets)
  for (let i = 0; i < fieldSets.length; i++) {
    if (isFieldSet(fieldSets[i])) {
      // Confirm that it's a fieldset
      let fieldSetName = `section ${i}`;
      groupedParagraphs[fieldSetName] = []; // Initialize empty array for this fieldset

      let paragraphs = fieldSets[i].querySelectorAll("p"); // Select all p tags within this fieldset
      // Loop through each paragraph and add to the corresponding array
      paragraphs.forEach((p) => {
        let inputs = p.querySelectorAll("input"); // Get all inputs within the p tag
        let inputData = extractInputData(inputs); // Extract input data
        if (inputData) {
          groupedParagraphs[fieldSetName].push(inputData);
        } // Push input data to array
      });
    }
  }

  // Print grouped paragraphs to console (for testing)
  console.log(JSON.stringify(groupedParagraphs));

  return groupedParagraphs; // Return grouped paragraphs
}
