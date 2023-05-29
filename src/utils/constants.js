import Cat1 from "../assets/category/cat-1.jpg";
import Cat2 from "../assets/category/cat-2.jpg";
import Cat3 from "../assets/category/cat-3.jpg";
import Cat4 from "../assets/category/cat-4.jpg";

import bud_prod1 from "../assets/products/earbuds-prod-1.webp";
import bud_prod2 from "../assets/products/earbuds-prod-2.webp";
import bud_prod3 from "../assets/products/earbuds-prod-3.webp";
import bud_prod4 from "../assets/products/earbuds-prod-4.webp";
import bud_prod5 from "../assets/products/earbuds-prod-5.webp";

import head_prod1 from "../assets/products/headphone-prod-1.webp";
import head_prod2 from "../assets/products/headphone-prod-2.webp";
import head_prod3 from "../assets/products/headphone-prod-3.webp";
import head_prod4 from "../assets/products/headphone-prod-4.webp";
import head_prod5 from "../assets/products/headphone-prod-5.webp";
import head_prod6 from "../assets/products/headphone-prod-6.webp";

import watch_prod1 from "../assets/products/watch-prod-1.webp";
import watch_prod2 from "../assets/products/watch-prod-2.webp";
import watch_prod3 from "../assets/products/watch-prod-3.webp";

import speaker_prod1 from "../assets/products/speaker-prod-1.webp";
import speaker_prod2 from "../assets/products/speaker-prod-2.webp";
import speaker_prod3 from "../assets/products/speaker-prod-3.webp";
import speaker_prod4 from "../assets/products/speaker-prod-4.webp";
import speaker_prod5 from "../assets/products/speaker-prod-5.webp";

export const CATEGORY = {
  data: [
    {
      id: 1,
      attributes: {
        img: {
          data: {
            attributes: {
              url: Cat1,
            },
          },
        },
      },
    },
    {
      id: 2,
      attributes: {
        img: {
          data: {
            attributes: {
              url: Cat2,
            },
          },
        },
      },
    },
    {
      id: 3,
      attributes: {
        img: {
          data: {
            attributes: {
              url: Cat3,
            },
          },
        },
      },
    },
    {
      id: 4,
      attributes: {
        img: {
          data: {
            attributes: {
              url: Cat4,
            },
          },
        },
      },
    },
  ],
};

export const PRODUCTS = {
  data: [
    {
      id: 1,
      attributes: {
        id: 1,
        title:
          "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver",
        price: "1999",
        img: {
          data: [
            {
              attributes: {
                url: head_prod1,
              },
            },
          ],
        },
        attributes: {
          quantity: 0,
        },
      },
    },
    {
      id: 2,
      attributes: {
        id: 2,
        title: "Rockerz 550 Over Ear Bluetooth Headphone",
        price: "2490",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: head_prod2,
              },
            },
          ],
        },
      },
    },
    {
      id: 3,
      attributes: {
        id: 3,
        title: "boAt Rockerz 518 Wireless Headphone",
        price: "1290",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: head_prod3,
              },
            },
          ],
        },
      },
    },
    {
      id: 4,
      attributes: {
        id: 4,
        title: "Rockerz 400",
        price: "2222",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: head_prod4,
              },
            },
          ],
        },
      },
    },
    {
      id: 5,
      attributes: {
        id: 5,
        title: "Trebel Rockerz 550 Wireless Bluetooth Headphones",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: head_prod5,
              },
            },
          ],
        },
      },
    },
    {
      id: 6,
      attributes: {
        id: 6,
        title: "Rockerz 450 Superman DC Edition - Wireless Bluetooth Headphone",
        price: "2399",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: head_prod6,
              },
            },
          ],
        },
      },
    },
    {
      id: 7,
      attributes: {
        id: 7,
        title:
          "boAt Wave Neo | 1.69 HD Display, Upto 7 Days Battery Life, IP68 Sweat",
        price: "2499",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: watch_prod1,
              },
            },
          ],
        },
      },
    },
    {
      id: 8,
      attributes: {
        id: 8,
        title:
          "boAt Iris | Round Dial Smart Watch with 1.39 AMOLED Display, Multiple Watch Faces",
        price: "899",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: watch_prod2,
              },
            },
          ],
        },
      },
    },
    {
      id: 9,
      attributes: {
        id: 9,
        title:
          "boAt Vertex | Smartwatch with Fitness Trackers, 1.69 HD Display, Sleep Tracking, 100+ Watch Faces",
        price: "1999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: watch_prod3,
              },
            },
          ],
        },
      },
    },
    {
      id: 10,
      attributes: {
        id: 10,
        title: "Stone 352 - Wireless Portable Bluetooth Speaker",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: speaker_prod1,
              },
            },
          ],
        },
      },
    },
    {
      id: 11,
      attributes: {
        id: 11,
        title: "Stone 1000v2",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: speaker_prod5,
              },
            },
          ],
        },
      },
    },
    {
      id: 12,
      attributes: {
        id: 12,
        title: "boAt Stone 500 - Portable Bluetooth Speaker",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: speaker_prod4,
              },
            },
          ],
        },
      },
    },
    {
      id: 13,
      attributes: {
        id: 13,
        title: "Party Pal 60",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: speaker_prod3,
              },
            },
          ],
        },
      },
    },
    {
      id: 14,
      attributes: {
        id: 14,
        title: "boAt Party Pal 50 - Bluetooth Speaker",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: speaker_prod2,
              },
            },
          ],
        },
      },
    },
    {
      id: 15,
      attributes: {
        id: 15,
        title:
          "TRebel Airdopes 141 | 8mm drivers, Upto 42 Hours Total Playback, ENxTM Technology, ASAPTM Charge",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: bud_prod1,
              },
            },
          ],
        },
      },
    },
    {
      id: 16,
      attributes: {
        id: 16,
        title:
          "Airdopes 131 DC Edition with 13 mm Drivers, Type-C Carry Case, 12 hours Nonstop Music",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: bud_prod2,
              },
            },
          ],
        },
      },
    },
    {
      id: 17,
      attributes: {
        id: 17,
        title:
          "boAt Airdopes 141 Pro | 12mm Drivers, Upto 45 Hours Playback, Quad Mics with ENx™️ Technology",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: bud_prod3,
              },
            },
          ],
        },
      },
    },
    {
      id: 18,
      attributes: {
        id: 18,
        title:
          "boAt Airdopes 441 | Wireless Earbuds with 6mm Driver For Immersive Sound",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: bud_prod4,
              },
            },
          ],
        },
      },
    },
    {
      id: 19,
      attributes: {
        id: 19,
        title:
          "boAt TRebel Airdopes 402 | In-Ear Earbuds With 10mm Driver, IPX4 Sweat",
        price: "999",
        attributes: {
          quantity: 0,
        },
        img: {
          data: [
            {
              attributes: {
                url: bud_prod5,
              },
            },
          ],
        },
      },
    },
  ],
};

export const PRODUCT = {
  title:
    "boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver",
  price: "999",
  img: {
    data: [
      {
        attributes: {
          url: "qwewq",
        },
      },
    ],
  },
};
