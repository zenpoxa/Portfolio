const tableau_pages = ["projet-tabas-kho.html", "projet-portfolio.html", "projet-interview.html", "projet-bdd.html"];
var currentPage = window.location.href.split('/'); currentPage = (currentPage[currentPage.length - 1]);
var currentIdx = tableau_pages.indexOf(currentPage);

function nextProject() {
    if (currentIdx == tableau_pages.length - 1) {
        window.location.href = "/Pages/" + tableau_pages[0];
    }
    else {
        window.location.href = "/Pages/" + tableau_pages[currentIdx + 1];
    }
}

function prevProject() {
    if (currentIdx == 0) {
        window.location.href = "/Pages/" + tableau_pages[tableau_pages.length - 1];
    }
    else {
        window.location.href = "/Pages/" + tableau_pages[currentIdx - 1];
    }
}

export { prevProject, nextProject };
