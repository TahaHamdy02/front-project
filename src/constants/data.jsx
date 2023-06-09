import images from "./images";

const wines = [
  {
    id: 1,
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    id: 2,
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    id: 3,
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  { id: 4, title: "Rhino Pale Ale", price: "$31", tags: "CA | 750 ml" },
  {
    id: 5,
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];
const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];
const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

const customer = [
  {
    image: images.customer04,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ducimus perspiciatis facere consectetur adipisci a quod? Ipsa perferendis",
    name: "Brooklyn Simmons",
    job: "Caterer",
    stars: [1, 1, 1, 0, 0],
  },
  {
    image: images.customer02,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ducimus perspiciatis facere consectetur adipisci a quod? Ipsa perferendis",
    name: "Jane Cooper",
    job: "Chef",
    stars: [1, 1, 1, 1, 0],
  },
  {
    name: "Alex Smith",
    job: "Designer | Developer",
    stars: [1, 1, 0, 0, 0],
    quote:
      "Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.",
    image: images.customer01,
  },
  {
    name: "Steven Chris",
    job: "YouTuber | Blogger",
    stars: [1, 1, 1, 0, 0],
    quote:
      "Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.",
    image: images.customer02,
  },
  {
    name: "Kristina Bellis",
    job: "Freelancer | Advertiser",
    stars: [1, 1, 1, 1, 0],
    quote:
      "Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.",
    image: images.customer03,
  },
  {
    name: "Brooklyn Simmons",
    job: "Freelancer | Advertiser",
    stars: [1, 1, 1, 1, 0],
    quote:
      "Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.",
    image: images.customer04,
  },
];

const OurChefs = [
  {
    id: 6,
    imgUrl: images.chef01,
    name: "Kevin Luo",
    jobTitle: "Head Chef",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eveniet repellat magni. Facilis dolores, tempora alias nulla reprehenderit iusto, modi quibusdam",
    quote1: "Graduated from culinary institue of New jersy ,USA",
    quote2: "Worked as  A Jounior Chef At Rus's italiano",
    quote3: "contributed 20+ new recipes on international platform",
    quote4: "Trained under renowned chef gusteau marcellini",
    Facebook: "Facebook link",
    Twitter: "Twitter link ",
    Instageam: "Instagram link ",
    imgAwardUrl1: images.award02,
    title1: "Bib Gourmond",
    subtitle1: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl2: images.award01,
    title2: "Rising Star",
    subtitle2: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl3: images.award05,
    title3: "AA Hospitality",
    subtitle3: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl4: images.award03,
    title4: "Outstanding Chef",
    subtitle4: "Lorem ipsum dolor sit amet, consectetur.",
    dessert: images.dessert01,
  },
  {
    id: 7,
    imgUrl: images.chef02,
    name: "Patrick Choi",
    jobTitle: "Deputy Chef",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eveniet repellat magni. Facilis dolores, tempora alias nulla reprehenderit iusto, modi quibusdam",
    quote1: "Graduated from culinary institue of New jersy ,USA",
    quote2: "Worked as  A Jounior Chef At Rus's italiano",
    quote3: "contributed 20+ new recipes on international platform",
    quote4: "Trained under renowned chef gusteau marcellini",
    Facebook: "Facebook link",
    Twitter: "Twitter link ",
    Instageam: "Instagram link ",
    imgAwardUrl1: images.award01,
    title1: "Bib Gourmond",
    subtitle1: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl2: images.award02,
    title2: "Rising Star",
    subtitle2: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl3: images.award01,
    title3: "AA Hospitality",
    subtitle3: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl4: images.award03,
    title4: "Outstanding Chef",
    subtitle4: "Lorem ipsum dolor sit amet, consectetur.",
    dessert: images.dessert02,
  },

  {
    id: 8,
    imgUrl: images.chef03,
    name: "Jack Biscoff",
    jobTitle: "Station Chef",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eveniet repellat magni. Facilis dolores, tempora alias nulla reprehenderit iusto, modi quibusdam",
    quote1: "Graduated from culinary institue of New jersy ,USA",
    quote2: "Worked as  A Jounior Chef At Rus's italiano",
    quote3: "contributed 20+ new recipes on international platform",
    quote4: "Trained under renowned chef gusteau marcellini",
    Facebook: "Facebook link",
    Twitter: "Twitter link ",
    Instageam: "Instagram link ",
    imgAwardUrl1: images.award03,
    title1: "Bib Gourmond",
    subtitle1: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl2: images.award01,
    title2: "Rising Star",
    subtitle2: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl3: images.award05,
    title3: "AA Hospitality",
    subtitle3: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl4: images.award02,
    title4: "Outstanding Chef",
    subtitle4: "Lorem ipsum dolor sit amet, consectetur.",
    dessert: images.dessert03,
  },
  {
    id: 9,
    imgUrl: images.chef04,
    name: "Stacy Lee",
    jobTitle: "Station Chef",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eveniet repellat magni. Facilis dolores, tempora alias nulla reprehenderit iusto, modi quibusdam",
    quote1: "Graduated from culinary institue of New jersy ,USA",
    quote2: "Worked as  A Jounior Chef At Rus's italiano",
    quote3: "contributed 20+ new recipes on international platform",
    quote4: "Trained under renowned chef gusteau marcellini",
    Facebook: "Facebook link",
    Twitter: "Twitter link ",
    Instageam: "Instagram link ",
    imgAwardUrl1: images.award03,
    title1: "Bib Gourmond",
    subtitle1: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl2: images.award01,
    title2: "Rising Star",
    subtitle2: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl3: images.award05,
    title3: "AA Hospitality",
    subtitle3: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl4: images.award02,
    title4: "Outstanding Chef",
    subtitle4: "Lorem ipsum dolor sit amet, consectetur.",
    dessert: images.dessert04,
  },
  {
    id: 10,
    imgUrl: images.chef05,
    name: "Aren Goodman",
    jobTitle: "Junior Chef",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eveniet repellat magni. Facilis dolores, tempora alias nulla reprehenderit iusto, modi quibusdam",
    quote1: "Graduated from culinary institue of New jersy ,USA",
    quote2: "Worked as  A Jounior Chef At Rus's italiano",
    quote3: "contributed 20+ new recipes on international platform",
    quote4: "Trained under renowned chef gusteau marcellini",
    Facebook: "Facebook link",
    Twitter: "Twitter link ",
    Instageam: "Instagram link ",
    imgAwardUrl1: images.award05,
    title1: "Bib Gourmond",
    subtitle1: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl2: images.award02,
    title2: "Rising Star",
    subtitle2: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl3: images.award03,
    title3: "AA Hospitality",
    subtitle3: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl4: images.award02,
    title4: "Outstanding Chef",
    subtitle4: "Lorem ipsum dolor sit amet, consectetur.",
    dessert: images.dessert05,
  },
  {
    id: 11,
    imgUrl: images.chef06,
    name: "Javier Dowsing",
    jobTitle: "Junior Chef",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eveniet repellat magni. Facilis dolores, tempora alias nulla reprehenderit iusto, modi quibusdam",
    quote1: "Graduated from culinary institue of New jersy ,USA",
    quote2: "Worked as  A Jounior Chef At Rus's italiano",
    quote3: "contributed 20+ new recipes on international platform",
    quote4: "Trained under renowned chef gusteau marcellini",
    Facebook: "Facebook link",
    Twitter: "Twitter link ",
    Instageam: "Instagram link ",
    imgAwardUrl1: images.award05,
    title1: "Bib Gourmond",
    subtitle1: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl2: images.award03,
    title2: "Rising Star",
    subtitle2: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl3: images.award03,
    title3: "AA Hospitality",
    subtitle3: "Lorem ipsum dolor sit amet, consectetur.",
    imgAwardUrl4: images.award02,
    title4: "Outstanding Chef",
    subtitle4: "Lorem ipsum dolor sit amet, consectetur.",
    dessert: images.dessert06,
  },
];
const accordionData = [
  {
    title: "How Do I Reach To The Restaurant ?",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title: "Is There A Reservation Required?",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi`,
  },
  {
    title: "Can I Host An Event At The Restaurent ?",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "Is Valet Parking Available At Restaurant ?",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
  {
    title: "When Are The Happy Hours Of Your Bar?",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi`,
  },
  {
    title: "Is Seafood Available At The Restaurant?",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];
const data = {
  wines,
  cocktails,
  awards,
  customer,
  OurChefs,
  accordionData,
};
export default data;
