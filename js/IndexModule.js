const IndexModule = function () {

    const websites = [
        {name: "MoreGames", info: "This website was made for my mobile game studio. Here i post info about my games.", link: "https://moregames.no/"},
        {name: "Cinematic", info: "An attemt to create a website like netflix.", link: "https://mtech.no/cinematic/index.html"},
        {name: "Poseidon", info: "My first web exam only using HTML and CSS", link: "https://mtech.no/poseidon/index.html"}
    ];

    const printAllWebsites = () => websites;

    return{printAllWebsites};

}();

export default IndexModule;