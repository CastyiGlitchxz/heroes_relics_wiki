import { app_navigation } from "./ui-kit/navigation.js";
import { app_scope, button, render_html } from "./ui-kit/airis_kit.js";
import { home } from "./routes/home.js";
import { wiki } from "./routes/wiki.js";
import { credits } from "./routes/credits.js";

const app =  app_scope.app = function() {};

const app_routes = app_navigation.add_tab({
    "Home": home,
    "Relics": wiki,
    "Credits": credits,
});

app_navigation.setup(app_routes);

app_scope.run(app);
home.call()