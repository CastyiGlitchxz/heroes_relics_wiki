import { app_scope, button, render_html } from "../ui-kit/airis_kit.js";

export const credits = app_scope.app = function() {
    render_html.html_defualt(`
        Citations

        “Sword of the Creator.” Fire Emblem Wiki, 19 July 2019, fireemblemwiki.org/wiki/Sword_of_the_Creator.

        “AYMR.” Fire Emblem Wiki, 23 Sept. 2019, fireemblemwiki.org/wiki/Aymr.

        “Fódlan.” Fire Emblem Wiki, Fandom, Inc., 12 June 2018, fireemblem.fandom.com/wiki/F%C3%B3dlan.

        “Areadbhar.” Fire Emblem Wiki, Fandom, Inc., 7 Aug. 2019, fireemblem.fandom.com/wiki/Areadbhar.

        “Failnaught.” Fire Emblem Wiki, 4 Aug. 2019, fireemblemwiki.org/wiki/Failnaught.
    `
)}