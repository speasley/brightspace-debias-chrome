setTimeout(() => {
    const isD2l = document.body.classList.contains("d2l-body");

    if (isD2l) {
        const outerShadowHost = document.querySelector("body.d2l-body d2l-consistent-evaluation");

        if (outerShadowHost) {
            const outerShadowRoot = outerShadowHost.shadowRoot;
            const contextBar = findElementInShadowDom(outerShadowRoot, "d2l-user-context-container", "class");

            if (contextBar) { 
                // replace name in context bar
                contextBar.classList.add("brightspace-debias");
                const contextName = contextBar.querySelector(".d2l-consistent-evaluation-lcb-user-name");
                contextName.innerHTML = "[Anonymous]";
                contextName.setAttribute("title", "[Anonymous]");
                const profileCard = contextBar.querySelector("d2l-user-profile-card");
                if (profileCard) {
                    // disable profile card
                    const profileCardShadowRoot = profileCard.shadowRoot;
                    const profileDropdown = profileCardShadowRoot.querySelector("d2l-dropdown");
                    const profileDropdownContent = profileDropdown.querySelector("d2l-dropdown-content");
                    profileDropdownContent.remove();
                    // replace user image
                    const userIcon = findElementInShadowDom(contextBar, "d2l-user-profile-card-dropdown", "class");
                    userIcon.style.setProperty("filter", "blur(3px) contrast(0.1) brightness(1.5)");
                }
            }
        }
    }
}, 4000);

const findElementInShadowDom = (root, target, searchType = "class") => {
    const matchesTarget = (searchType === "class") ? root?.classList?.contains(target) : root?.tagName?.toLowerCase() === target.toLowerCase();

    if (matchesTarget) {
        return root;
    }

    if (root?.shadowRoot) {
        const foundInShadow = findElementInShadowDom(root.shadowRoot, target, searchType);
        if (foundInShadow) {
            return foundInShadow;
        }
    }

    if (root?.children) {
        for (const child of root.children) {
            const foundInChildren = findElementInShadowDom(child, target, searchType);
            if (foundInChildren) {
                return foundInChildren;
            }
        }
    }

    return null;
};
