setTimeout(() => {
    const isD2l = document.body.classList.contains("d2l-body");

    if (isD2l) {
        const outerShadowHost = document.querySelector("body.d2l-body d2l-consistent-evaluation");

        if (outerShadowHost) {
            const outerShadowRoot = outerShadowHost.shadowRoot;
            const contextBar = findElementInShadowDom(outerShadowRoot, "d2l-user-context-container", "class");

            if (contextBar) {
                contextBar.setAttribute("aria-hidden", "true");
                contextBar.classList.add("brightspace-debias");
                contextBar.style.setProperty("filter", "blur(5px) grayscale(100%)");
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
