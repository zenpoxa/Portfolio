const tableau_pages = ["fig.html", "projet-bdd.html", "alternance.html", "projet-interview.html"];
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
