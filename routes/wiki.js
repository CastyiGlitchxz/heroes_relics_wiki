import { app_scope, button, render_html } from "../ui-kit/airis_kit.js";

export const wiki = app_scope.app = function() {
render_html.html_defualt(`
    <div class="content_drawer">
        <h2>How to use</h2>
        <p>Hover over one of the relics to view a description.</p>
    </div>
    
    <div class="museum">
        <div class="relic_case" style="--leader-color: #71b293">
            <div>
                <img src="https://cdn.fireemblemwiki.org/d/d6/FEWATH_Sword_of_the_Creator.png" height=256 width=256/>
                <h2>Sword of the Creator</h2>
            </div>

            <div class="case_description">
                <p>The Sword of the Creator is a weapon wieled by Byleth. The Sword of the Creator can be used as a whip as it can extend itself. This wepaon is made out of the bones of a goddess.</p>
            </div>
        </div>

        <div class="relic_case" style="--leader-color: #3366FF">
            <div>
                <img src="https://static.wikia.nocookie.net/fireemblem/images/2/2a/Areadbhar_CG.png" height=256 width=256/>
                <h2>Areadbhar</h2>
            </div>

            <div class="case_description">
                <p>Areadbhar is a weapon wieled by Dimitri. Dimitri used Areadbhar to protect the kingdom of Faergus, his very own kingdom. Areadbhar can fire electric at it's enemies. This wepaon is made out of the bones of a goddess.</p>
            </div>
        </div>

        <div class="relic_case" style="--leader-color: red">
            <div>
                <img src="https://cdn.fireemblemwiki.org/thumb/2/2a/FEWATH_Aymr.png/250px-FEWATH_Aymr.png" height=256 width=256/>
                <h2>Aymr</h2>
            </div>

            <div class="case_description">
                <p>Aymr is a weapon wieled by Edelgard. This is the weapon Edelgard used to fight against Rhea and the central church. This wepaon can envelope itself in fire. This wepaon is made out of the bones of a goddess.</p>
            </div>
        </div>

        <div class="relic_case" style="--leader-color: yellow">
            <div>
                <img src="https://cdn.fireemblemwiki.org/1/1d/FETH_Failnaught.png" height=256 width=256/>
                <h2>Failnaught</h2>
            </div>

            <div class="case_description">
                <p>Failnaught is a weapon wieled by Claude. Claude can use Failnaught can fire a barrage of wind arrows at his oppenents. This wepaon is made out of the bones of a goddess.</p>
            </div>
        </div>
    </div>
    `
)}