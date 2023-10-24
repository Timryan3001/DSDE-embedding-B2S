let viz;

console.log("hello back to school")

// #1 create a variable to store the vizContainer

const vizContainer = document.getElementById("vizContainer");

// #2 create a variable to store the dashboard option

const options = {
    device: "desktop",
    height: "800px",
    width: "1100px"
};

// #3 create a variable to store the URL

const url = "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia";

// #4 Creating the function to display our viz

function initViz() {
    viz = new tableau.Viz(vizContainer, url, options);
}

// #5 actually run the function

initViz();

// #6 create a constant for our pdf button 

const exportPdfButton = document.getElementById("exportPdf");

// #7 create a function which exports a pdf

function exportPdfFunction() {
    viz.showExportPDFDialog();
}

// #8 call the function when button is pressed

exportPdfButton.addEventListener("click", exportPdfFunction);


// #9 create a constant for our ppt button 

const exportPptButton = document.getElementById("exportPpt");

// #10 create a function which exports a pdf

function exportPptFunction() {
    viz.showExportPowerPointDialog();
}

// #11 call the function when button is pressed

exportPptButton.addEventListener("click", exportPptFunction);