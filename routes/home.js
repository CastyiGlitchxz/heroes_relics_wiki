import { app_scope, button, render_html } from "../ui-kit/airis_kit.js";

export const home = app_scope.app = function() {
render_html.html_defualt(`
    <div class="home_bakground">
        <div class="backdrop">    
            <h1 class="welcome">Welcome to the Fire Emblem heroes relics wiki</h1>
            <p style="color: red; padding: 0 20px">This is a short wiki. It just explains who wields which relic and a bit about what that relic does, nothing too in depth.</p>

            <h2 style="padding: 40px 20px; color: #3366FF;">Click "Relics" to view the heroes relics.</h2>

            <div class="credits_button">
                <a href="./routes/credits.html">Citations</a>
            </div>

            <div class="login_prompt">
                <span>Want to login?</span>
                <button onclick="window.location.href = './routes/login.html'">Login</button>
            </div>
        </div>
    </div>
    `
)}