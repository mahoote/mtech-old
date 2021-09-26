import IndexModule from "./IndexModule.js";

let websites = "";
const websitesContainer = document.querySelector("#websites-container");

IndexModule.printAllWebsites().forEach(site => {
    websites += `
    
    <div class="card column is-3-desktop is-4-tablet m-5 p-0">
        <a href="${site.link}">
        
            <!-- Image -->
            <div class="card-image">
                <figure class="image">
                    <img class="website-image" src="../images/websites/${site.name}.png" alt="${site.name} logo">
                </figure>
            </div>

            <!-- Content -->
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">${site.name}</p>
                    </div>
                </div>

                <div class="content">
                    <p>${site.info}</p>
                </div>
            </div>
        </a>
    </div>
    `;
});

websitesContainer.innerHTML = websites;