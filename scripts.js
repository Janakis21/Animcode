// Function to show program options based on category
function showPrograms(category) {
    let algorithms = {};
    let programNames = [];

    // Fetch algorithm data based on the selected category
    switch (category) {
        case 'searching':
            algorithms = searchingAlgorithms;
            break;
        case 'sorting':
            algorithms = sortingAlgorithms;
            break;
        case 'graph':
            algorithms = graphAlgorithms;
            break;
        case 'dynamic':
            algorithms = dynamicProgramming;
            break;
        case 'mathematical':
            algorithms = mathematicalAlgorithms;
            break;
        case 'strings':
            algorithms = stringAlgorithms;
            break;
    }

    // Gather program names
    programNames = Object.keys(algorithms);

    // Prompt for program selection
    const program = prompt("Available Programs:\n" + programNames.join("\n") + "\n\nEnter the program name:");
    if (program && algorithms[program]) {
        const languages = Object.keys(algorithms[program]);
        const language = prompt("Available Languages:\n" + languages.join("\n") + "\n\nEnter the language name:");
        if (language && algorithms[program][language]) {
            const code = algorithms[program][language];

            // Redirect to the new page with algorithm data in URL parameters
            window.location.href = `algorithmOutput.html?algorithm=${program}&language=${language}&code=${encodeURIComponent(code)}`;
        } else {
            alert("Language not found!");
        }
    } else {
        alert("Program not found!");
    }
}
