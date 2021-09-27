const IndexModule = function () {

    const websites = [
        {name: "MoreGames", info: "<i>MoreGames</i> is a website created for my game developer studio. Here you can find info about the games I produce, as well as social media accounts.", link: "https://moregames.no/"},
        {name: "Gyldne Pizza", info: "<i>Gylne Pizza</i> is an assignment from the exam in the 2nd semester of college. We were a group of 6 and the focus was universal design and ease of use. I was responsible for meny.html. <br><br><b>There was no requirement for a backend, but we created a type of login service that I was involved in developing.</b>", link: "https://mtech.no/gyldne_pizza/"},
        {name: "Cinematic", info: "<i>Cinematic</i> began as a school assignment at the beginning of the 1st semester of college. I chose to continue working and decided to create a platform similar to Netflix. <br><br><b>This website was developed at an early stage where I only had some knowledge of HTML, CSS and Javascript from high school.</b>", link: "https://mtech.no/cinematic/index.html"},
        {name: "Poseidon", info: "<i>Poseidon</i> is an assignment from the exam in the 1st semester of college. Only HTML and CSS was allowed, no Javascript. It's made by a group of 5, where I was responsible for <i>yachts.html, islands.html</i> and <i>movies.html</i>.<br><br> <b>For this exam, we had no requirements for mobile optimization, therefore it's not suitable for smaller devies.</b>", link: "https://mtech.no/poseidon/index.html"}
    ];

    const printAllWebsites = () => websites;

    return{printAllWebsites};

}();

export default IndexModule;