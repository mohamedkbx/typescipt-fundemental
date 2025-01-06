//* Index signatures

//? Dictionary of phone #s
const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
};

phones.home;

//? Model as an index signature

const x: { [k: string]: string } = {};

const phones1: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};

phones.home;
phones["work"];
