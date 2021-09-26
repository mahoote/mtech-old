const IndexModule = function () {

    const websites = [
        {name: "MoreGames", info: "MoreGames is a website created for my game developer studio. Here you can find info about the games I produce, as well as social media accounts.", link: "https://moregames.no/"},
        {name: "Cinematic", info: "Cinematic began as a school assignment at the beginning of the 1st semester of college. I chose to continue working and decided to create a platform similar to Netflix.<br><br> This website was developed at an early stage where I only had some knowledge of HTML, CSS and Javascript from high school.", link: "https://mtech.no/cinematic/index.html"},
        {name: "Poseidon", info: "Poseidon is an assignment from the exam in the 1st semester. It was only allowed to use HTML and CSS, no Javascript. It's made by a group of 5, where I was responsible for <i>yachts.html, islands.html</i> and <i>movies.html</i>.<br><br> For this exam, we had no requirements for mobile optimization, so there may be deviations when testing on smaller screens.", link: "https://mtech.no/poseidon/index.html"}
    ];

    const printAllWebsites = () => websites;

    return{printAllWebsites};

}();

export default IndexModule;