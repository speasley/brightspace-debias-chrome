setTimeout(() => {

    // find the contextBar that contains the learner details
    const isD2l = document.querySelector("body.d2l-body");
    let contextBar, fileName = null;

    // put on your DOM boots, we're going on a hike
    if (isD2l) {
        const outerShadowHost = document.querySelector("body.d2l-body").querySelector("d2l-consistent-evaluation");
        const outerShadowRoot = outerShadowHost.shadowRoot;
        const middleShadowHost = outerShadowRoot.querySelector("d2l-consistent-evaluation-page");
        const middleShadowRoot = middleShadowHost.shadowRoot;
        const templateShadowHost = middleShadowRoot.querySelector("d2l-template-primary-secondary");
        const contextBarSlot = templateShadowHost.querySelector("div[slot='header']");
        contextBar = contextBarSlot.querySelector("d2l-consistent-evaluation-learner-context-bar");
        const fileNameSlot = templateShadowHost.querySelector("div[slot='primary']");
        const outerFileNamePanelShadowHost = fileNameSlot.querySelector("d2l-consistent-evaluation-left-panel");
        const outerFileNamePanelShadowRoot = outerFileNamePanelShadowHost.shadowRoot;
        const middleFileNamePanelShadowHost = outerFileNamePanelShadowRoot.querySelector("d2l-consistent-evaluation-evidence-assignment");
        const middleFileNamePanelShadowRoot = middleFileNamePanelShadowHost.shadowRoot;
        const submissionsPagesHost = middleFileNamePanelShadowRoot.querySelector("d2l-consistent-evaluation-assignments-submissions-page");
        const submissionsPagesRoot = submissionsPagesHost.shadowRoot;
        const submissionsListView = submissionsPagesRoot.querySelector("div.d2l-consistent-evaluation-submission-list-view");
        const submissionsListShadowHost = submissionsListView.querySelector("d2l-list");
        const submissionsListItemShadowHost = submissionsListShadowHost.querySelector("d2l-consistent-evaluation-assignments-submission-item");
        const submissionsListItemShadowRoot = submissionsListItemShadowHost.shadowRoot;
        const innerListShadowHost = submissionsListItemShadowRoot.querySelector("d2l-list"); // outer container
        if (innerListShadowHost) { // file-submitted assessment
            const innerListItem = innerListShadowHost.querySelector("d2l-list-item");
            const innerListContainer = innerListItem.querySelector("div.d2l-submission-attachment-list-item-flexbox");
            const innerListContent = innerListContainer.querySelector(".d2l-submission-attachment-list-item-content");
            fileName = innerListContent.querySelector("a");
        }
    }

    if (contextBar) {
        contextBar.setAttribute("aria-hidden", "true"); // hide from screen readers
        contextBar.classList.add("brightspace-debias"); // add class to leverage to show we have modified the DOM
        contextBar.style.setProperty("filter", "blur(5px) grayscale(100%)"); // add blur, grayscale effects
    }

    if (fileName) {
        fileName.setAttribute("aria-hidden", "true"); // hide from screen readers
        fileName.style.setProperty("filter", "blur(5px) grayscale(100%)"); // add blur, grayscale effects
    }

}, 4000);
