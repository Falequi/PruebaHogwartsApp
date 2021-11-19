export interface Hogwarts {
    name:              string;
    alternate_names?:  string[] | string;
    species?:          Species;
    gender?:           Gender;
    house?:            House;
    dateOfBirth?:      DateOfBirth;
    yearOfBirth:       number | string;
    wizard?:           boolean;
    ancestry?:         Ancestry;
    eyeColour?:        EyeColour;
    hairColour?:       HairColour;
    wand?:             Wand;
    patronus:          Patronus;
    hogwartsStudent?:  boolean;
    hogwartsStaff?:    boolean;
    actor?:            string;
    alternate_actors?: string[];
    alive?:            boolean;
    image:             string;
}

export enum Ancestry {
    Empty = "",
    HalfBlood = "half-blood",
    Muggle = "muggle",
    Muggleborn = "muggleborn",
    PureBlood = "pure-blood",
    Squib = "squib",
}

export enum DateOfBirth {
    Empty = "",
    The01031980 = "01-03-1980",
    The03111959 = "03-11-1959",
    The04101925 = "04-10-1925",
    The05061980 = "05-06-1980",
    The06021950 = "06-02-1950",
    The06121928 = "06-12-1928",
    The09011960 = "09-01-1960",
    The10031960 = "10-03-1960",
    The11081981 = "11-08-1981",
    The13021981 = "13-02-1981",
    The19091979 = "19-09-1979",
    The30071980 = "30-07-1980",
    The31071980 = "31-07-1980",
    The31121926 = "31-12-1926",
}

export enum EyeColour {
    Amber = "amber",
    Black = "black",
    Blue = "blue",
    Brown = "brown",
    Dark = "dark",
    Empty = "",
    Green = "green",
    Grey = "grey",
    Hazel = "hazel",
    Orange = "orange",
    PaleSilvery = "pale, silvery",
    Red = "red",
    White = "white",
    Yellow = "yellow",
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export enum HairColour {
    Bald = "bald",
    Black = "black",
    Blond = "blond",
    Blonde = "blonde",
    Brown = "brown",
    Brows = "brows",
    Dark = "dark",
    Empty = "",
    Ginger = "ginger",
    Grey = "grey",
    Red = "red",
    Sandy = "sandy",
    Silver = "silver",
    White = "white",
}

export enum House {
    Empty = "",
    Gryffindor = "Gryffindor",
    Huffleluff = "Huffleluff",
    Hufflepuff = "Hufflepuff",
    Ravenclaw = "Ravenclaw",
    Slytherin = "Slytherin",
    Slythetin = "Slythetin",
}

export enum Patronus {
    Boar = "boar",
    Doe = "doe",
    Empty = "",
    Goat = "goat",
    Hare = "hare",
    Horse = "horse",
    JackRussellTerrier = "Jack Russell terrier",
    Lynx = "lynx",
    Otter = "otter",
    PersianCat = "persian cat",
    Stag = "stag",
    Swan = "swan",
    TabbyCat = "tabby cat",
    Weasel = "weasel",
    Wolf = "wolf",
}

export enum Species {
    Acromantula = "acromantula",
    Cat = "cat",
    Centaur = "centaur",
    Dragon = "dragon",
    Ghost = "ghost",
    Giant = "giant",
    Goblin = "goblin",
    HalfGiant = "half-giant",
    Hippogriff = "hippogriff",
    HouseELF = "house-elf",
    Human = "human",
    Owl = "owl",
    Poltergeist = "poltergeist",
    ThreeHeadedDog = "three-headed dog",
    Werewolf = "werewolf",
}

export interface Wand {
    wood:   string;
    core:   Core;
    length: number | string;
}

export enum Core {
    DragonHeartstring = "dragon heartstring",
    Empty = "",
    PhoenixFeather = "phoenix feather",
    UnicornHair = "unicorn hair",
    UnicornTailHair = "unicorn tail-hair",
}
