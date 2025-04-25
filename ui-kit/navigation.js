import { app_scope } from "./airis_kit.js";

export const app_navigation = {
    setup: function(tabs_ref) {;
        console.log(tabs_ref);
        this.execute(tabs_ref);
    },

    add_tab: function(tabs = {}) {
        return tabs;
    },

    set_page: function(page_name = new Function()) {
        document.querySelector('.airis-app').remove();
        page_name.call();
    },

    execute: function(tabs = new Function()) {
        const tab_switcher = document.createElement("div");
        tab_switcher.id = "app_navigation_bar"
        const app_keys = Object.entries(tabs);
        document.body.appendChild(tab_switcher)

        for (const [key, value] of app_keys) {
            const button = document.createElement("button");
            button.innerHTML = key

            button.onclick = function() {
                app_scope.run();
                document.querySelector('.airis-app').remove();
                tabs[key].call();
            }
                
            tab_switcher.appendChild(button);
        }
    },
}