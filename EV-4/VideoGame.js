class VideoGame{
    #title;
    #releaseYear;
    #genre;
    #developer;
    #released
    constructor(title,releaseYear,genre,developer,released){
        this.#title=title;
        this.#releaseYear=releaseYear;
        this.#genre=genre;
        this.#developer=new GameStudio();
        this.#released=released;

    }
    getDetails(){
        return `${this.#title} --- ${this.#genre} --- ${this.#releaseYear}`
    }
    foundedYear(currentYear){
        return currentYear-this.#releaseYear;
    }
    get title(){
        return this.#title;
    }
    set title(newTitle){
        this.#title=newTitle;
    }
    get releaseYear(){
        return this.#releaseYear;
    }
    set releaseYear(newRel){
        this.#releaseYear=newRel;
    }
    get genre(){
        return this.#genre; 
    }
    set genre(newGen){
        this.#genre=newGen;
    }

    get developer(){
        return this.#developer;
    }
    set developer(newdev){
        this.#developer=newdev;
    }
    get released(){
        return this.#released
    }
    set released(newrelyear){
        this.#released=newrelyear;
    }
}   

class GameStudio{
    #username;
    #password;
    #nonReleasedGames;
    constructor(name,foundedYear,country,username,password){
        this.name=name,
        this.foundedYear=foundedYear,
        this.country=country,
        this.#username=username,
        this.#password=password,
        this.#nonReleasedGames=[];
    }

    get username(){
        return this.#username;
    }
    set username(newUserName){
        this.#username=newUserName;
    }
    get password(){
        return this.#password;
    }
    set password(newPasswd){
        this.#password=newPasswd;
    }

    authenticate(username,password){
        return this.#username==username && this.#password==password;
    }

    addGame(game){
        this.#nonReleasedGames.push(game)
    }
    NonReleasedGames(currentYear){
        return this.#nonReleasedGames
    }

    get NonReleasedGames(){
        return this.#nonReleasedGames.slice();
    }
}

const gmStudio=new GameStudio('Mystudio',1999,'India','arpan','my_pass');
console.log(gmStudio)
const auth=gmStudio.authenticate('arpan','my_pass')
console.log("Authentication Status : ",auth)

if (auth){
    gmStudio.addGame((new VideoGame('FastX','action',2003)));
    gmStudio.addGame((new VideoGame('Furious20','thriller',1999)));
}







