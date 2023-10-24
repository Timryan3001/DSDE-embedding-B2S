let viz;

console.log("hello back to school")

// #1 create a variable to store the vizContainer

const vizContainer = document.getElementById("vizContainer");

// #2 create a variable to store the dashboard option

const options = {
    device: "desktop",
    height: "800px",
    width: "1024px"
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

// #12 Filtering!!1

function getRangeValues() {
    const minValue = document.getElementById("minValue").value;
    const maxValue = document.getElementById("maxValue").value;
    console.log(minValue, maxValue);
    // need to get active sheet, but this could be a dashboard or a worksheet
    const workbook = viz.getWorkbook();
    const activeSheet = workbook.getActiveSheet();
    const sheets = activeSheet.getWorksheets();
    //inspect the sheets you need to filter
    console.log(sheets);
    // index of the sheet you want to filter
    const sheetToFilter = sheets[0]
    // do the actual filtering
    sheetToFilter.applyRangeFilterAsync("SUM(Sales)", { min: minValue, max: maxValue }).then(alert("viz filtered"));
}

document.getElementById("filterButton").addEventListener("click", getRangeValues);