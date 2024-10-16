const { PRICE } = require("@prisma/client");
import prisma from "../utils/services/db";
import type { Cuisine, Location, Restaurant } from "@prisma/client";

async function main() {
  await prisma.booking.deleteMany();
  await prisma.bookingsOnTables.deleteMany();
  await prisma.table.deleteMany();
  await prisma.review.deleteMany();
  await prisma.item.deleteMany();
  await prisma.restaurant.deleteMany();
  await prisma.location.deleteMany();
  await prisma.cuisine.deleteMany();
  await prisma.user.deleteMany();

  await prisma.location.createMany({
    data: [{ name: "rome" }, { name: "prague" }, { name: "berlin" }],
  });

  await prisma.cuisine.createMany({
    data: [{ name: "italian" }, { name: "mexican" }, { name: "indian" }],
  });

  const locations = await prisma.location.findMany();
  const cuisines = await prisma.cuisine.findMany();

  const italianCuisineId =
    cuisines.find((cuisine: Cuisine) => cuisine.name === "italian")?.id || 1;
  const mexicanCuisineId =
    cuisines.find((cuisine: Cuisine) => cuisine.name === "mexican")?.id || 1;
  const indianCuisineId =
    cuisines.find((cuisine: Cuisine) => cuisine.name === "indian")?.id || 1;

  const romeLocationId =
    locations.find((location: Location) => location.name === "rome")?.id || 1;
  const pragueLocationId =
    locations.find((location: Location) => location.name === "prague")?.id || 1;
  const berlinLocationId =
    locations.find((location: Location) => location.name === "berlin")?.id || 1;

  await prisma.restaurant.createMany({
    data: [
      // ITALIAN //
      {
        name: "Cano Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/43463549.jpg",
        price: PRICE.REGULAR,
        description:
          "Our back patio has now officially reopened for FOOD SERVICE only. Drinks can be ordered and consumed at the bar before, during, or after dinner service.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463554.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463745.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463748.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463750.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463751.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "cano-restaurant-rome",
        location_id: romeLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Blu Ristorante",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47350167.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Victorian Building with two floors of dining space and large side and front patio. Tastefully designed to host your special event, romantic dinner, corporate buyout or a celebration of any sort.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305566.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305567.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305568.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305569.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305570.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30091570.jpg",
        ],
        open_time: "15:00:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "blu-ristorante-rome",
        location_id: romeLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Stelvio",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/50557365.jpg",
        price: PRICE.REGULAR,
        description:
          "Stelvio on Dundas West is an authentic Italian restaurant serving classic old world fare using traditional recipes and ingredients. Recipes have been fine-tuned to satisfy the palate of the modern guest, and fresh meals are prepared daily.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/26374971.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374974.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374975.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374976.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50557389.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "stelvio-rome",
        location_id: romeLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Terra Adelaide",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/46827195.jpg",
        price: PRICE.REGULAR,
        description:
          "Terra Adelaide’s multi-level location is located in Prague’s historic York County Court House circa 1853.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309468.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309469.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309470.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309472.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309474.png",
        ],
        open_time: "12:00:00.000Z",
        close_time: "18:00:00.000Z",
        slug: "terra-adelaide-berlin",
        location_id: berlinLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "EST Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49169798.jpg",
        price: PRICE.CHEAP,
        description:
          "ēst is a modern, newly reopened restaurant serving Italian-French courses, captivating cocktails and wine.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253937.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253940.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253941.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415599.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415604.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49696221.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49999039.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "est-restaurant-berlin",
        location_id: berlinLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Sofia",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25558850.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Tapping into true Italian tastes, the menu starts with a selection of antipasti including a citrus salad and grilled octopus, and a plentiful selection of crudo. ",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/25629442.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25636273.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25679656.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25825772.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26011606.jpg",
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "sofia-prague",
        location_id: pragueLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "Terra Sud Forno",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49463645.png",
        price: PRICE.REGULAR,
        description:
          "Spaccio West, near the Lower Junction on the West Prague Railpath, acts as the backstage to the main show taking place at all Terra locations.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741813.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741816.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741821.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741826.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741827.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "terra-sud-forno-produzione-e-spaccio-prague",
        location_id: pragueLocationId,
        cuisine_id: italianCuisineId,
      },
      {
        name: "il Padrino",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49616181.jpg",
        price: PRICE.CHEAP,
        description:
          "Welcome to the newest edition to College street iL PADRINO Ristorante has joined the list of Italian restaurants where Chef Connie award winning Italian Chef makes every Italian dish with love like no other. ",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494556.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494562.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494563.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49494887.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49533502.jpg",
        ],
        open_time: "07:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "il-padrino-prague",
        location_id: pragueLocationId,
        cuisine_id: italianCuisineId,
      },
      // MEXICAN //
      {
        name: "Eldorado Taco",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/42557297.jpg",
        price: PRICE.REGULAR,
        description:
          "Eldorado Taco restaurant is excited to serve you traditional Mexican cuisine, re-imagined with a distinct modern flair, in a stylish setting on Preston street. Striving to bring you some of Rome’s best Tacos, margaritas and Tequila. Reserve your table now!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501707.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501713.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/29501715.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42557295.jpg",
        ],
        open_time: "16:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "eldorado-taco-rome",
        location_id: romeLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "La Bartola",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/48981502.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At La Bartola, we inspire a passion for authentic Mexican flavours. We use simple, fresh, and high-quality local & Mexican ingredients to craft delicious and thoughtful food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981480.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981483.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981485.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981487.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981490.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981492.jpg",
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "la-bartola-rome",
        location_id: romeLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "El Catrin",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/28028883.png",
        price: PRICE.CHEAP,
        description:
          "Reservations are booked for indoors only. Seating time will be limited to two hours maximum.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770621.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770622.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770624.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770625.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-rome",
        location_id: romeLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "3 Mariachis",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/32449465.jpg",
        price: PRICE.CHEAP,
        description:
          "Specializing in the preparation of high quality Mexican food. Our vibrant décor, carefully selected menu, great staff and exciting entertainment will ensure that you are treated to a unique dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490939.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490987.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32507838.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/41724689.jpg",
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-prague",
        location_id: pragueLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "Casa Madera",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47744844.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "The first location in Canada, from famed restauranteurs Noble 33, welcomes patrons into an immersive dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745080.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745081.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745093.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745144.jpg",
        ],
        open_time: "15:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-prague",
        location_id: pragueLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "Taco N Tequila",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47429858.jpg",
        price: PRICE.CHEAP,
        description:
          "As a family owned business, our goal is simple: to consistently deliver fresh and delicious Mexican flavours in a FUN and friendly atmosphere with the best service around!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47600418.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429797.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429802.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429814.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-berlin",
        location_id: berlinLocationId,
        cuisine_id: mexicanCuisineId,
      },
      {
        name: "El Jefe",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47710768.jpg",
        price: PRICE.CHEAP,
        description:
          "Lively cantina serving Mexican favorites & potent margaritas in a vibrant, airy space with murals.",
        images: [],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-jefe-berlin",
        location_id: berlinLocationId,
        cuisine_id: mexicanCuisineId,
      },
      // INDIAN //
      {
        name: "Vivaan - fine Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        price: PRICE.REGULAR,
        description:
          "Vivaan is Modern Indian Cuisine serving dishes from different regions of India. We carefully select our ingredients and use them to make authentic Indian recipes and our chef puts his modern flair and twists to the dishes.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg",
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "vivaan-fine-indian-cuisine-rome",
        location_id: romeLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "RamaKrishna Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47417441.jpg",
        price: PRICE.CHEAP,
        description:
          "With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417455.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417456.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417457.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417458.jpg",
        ],
        open_time: "12:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "ramakrishna-indian-restaurant-rome",
        location_id: romeLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Coconut Lagoon",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/48545745.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At Coconut Lagoon prepare yourselves for a most memorable journey through South Indian cuisine and feast on high quality food of inimitable flavour, aroma and originality in the vibrant setting of Coconut Lagoon.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045353.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48545766.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045356.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49399187.jpg",
        ],
        open_time: "17:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "coconut-lagoon-rome",
        location_id: romeLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Last Train to Delhi",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/26429498.jpg",
        price: PRICE.REGULAR,
        description:
          "Welcome to Last Train to Delhi. We are a progressive Indian restaurant in the beautiful Glebe community in Rome. Our speciality is Northern Indian food, classics like Murg Mahkini and some modern dishes like Crispy Shrimp. We are a small cozy restaurant, so make sure that you reserve through OpenTable.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29477326.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29777084.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104059.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104066.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "last-train-to-delhi-rome",
        location_id: romeLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Adrak Yorkville",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/4/47914200.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Namaste and welcome to Adrak - a place where food unites all. We take you through a journey of the past and present, as we hope to encourage thought-provoking conversations amid elevated Indian food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914186.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980632.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980634.jpg",
        ],
        open_time: "16:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "adrak-yorkville-prague",
        location_id: pragueLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Curryish Tavern",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49294128.jpg",
        price: PRICE.REGULAR,
        description:
          "The most unique Indian food in the world! We are inspired by the seasons of Ontario and the cooking techniques of the world. Regale in the imagination of Chef Miheer Shete's dishes and change your palate for life.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765139.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765149.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765157.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765162.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "curryish-tavern-prague",
        location_id: pragueLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Utsav",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
        price: PRICE.CHEAP,
        description:
          "Utsav is an ancient Sanskrit word meaning festival. An integral part of Indian culture, Indian festivals are innumerable and equally varied in origin from the Himalayan foothills to the Peninsula's tip and food plays a very prominent part of the festive events.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646761.jpg",
        ],
        open_time: "14:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "utsav-prague",
        location_id: pragueLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Pukka",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/25733300.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At this refined, yet casual, Indian restaurant, the portions are large, the wine list is top-notch, and the ambience encourages sharing.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733294.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733295.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733296.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733297.jpg",
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "pukka-berlin",
        location_id: berlinLocationId,
        cuisine_id: indianCuisineId,
      },
      {
        name: "Kamasutra Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25602522.jpg",
        price: PRICE.CHEAP,
        description:
          "This elegant fine dining Indian Restaurant has been satisfying the Indian tandoori and curry cravings for 12 years in Prague.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854188.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25684161.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26009011.jpg",
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "kamasutra-indian-restaurant-and-wine-bar-berlin",
        location_id: berlinLocationId,
        cuisine_id: indianCuisineId,
      },
    ],
  });

  const restaurants = await prisma.restaurant.findMany();

  const vivaanId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Vivaan - fine Indian"
    )?.id || 1;
  const RamaKrishnaId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "RamaKrishna Indian"
    )?.id || 1;
  const coconutLagoonId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Coconut Lagoon"
    )?.id || 1;
  const lastTrainToDelhiId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Last Train to Delhi"
    )?.id || 1;
  const adrakYorkvilleId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Adrak Yorkville"
    )?.id || 1;
  const curryishTavernId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Curryish Tavern"
    )?.id || 1;
  const utsavId =
    restaurants.find((restaurant: Restaurant) => restaurant.name === "Utsav")
      ?.id || 1;
  const pukkaId =
    restaurants.find((restaurant: Restaurant) => restaurant.name === "Pukka")
      ?.id || 1;
  const kamasutraIndianId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Kamasutra Indian"
    )?.id || 1;
  const eldoradoTacoId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Eldorado Taco"
    )?.id || 1;
  const laBartolaId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "La Bartola"
    )?.id || 1;
  const elCatrinId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "El Catrin"
    )?.id || 1;
  const mariachisId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "3 Mariachis"
    )?.id || 1;
  const casaMaderaId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Casa Madera"
    )?.id || 1;
  const tacoNtequilaId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Taco N Tequila"
    )?.id || 1;
  const elJefeId =
    restaurants.find((restaurant: Restaurant) => restaurant.name === "El Jefe")
      ?.id || 1;
  const canoRestaurantId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Cano Restaurant"
    )?.id || 1;
  const bluRistoranteId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Blu Ristorante"
    )?.id || 1;
  const stelvioId =
    restaurants.find((restaurant: Restaurant) => restaurant.name === "Stelvio")
      ?.id || 1;
  const terraAdelaideId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Terra Adelaide"
    )?.id || 1;
  const estRestaurantId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "EST Restaurant"
    )?.id || 1;
  const sofiaId =
    restaurants.find((restaurant: Restaurant) => restaurant.name === "Sofia")
      ?.id || 1;
  const terraSudFornoId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "Terra Sud Forno"
    )?.id || 1;
  const ilPadrinoId =
    restaurants.find(
      (restaurant: Restaurant) => restaurant.name === "il Padrino"
    )?.id || 1;

  await prisma.item.createMany({
    data: [
      {
        name: "Ghee roast chicken wings",
        description:
          "Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.",
        price: "€10.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Sol Kadhi scallop ceviche",
        description: "Cured scallop served with mangosteen and coconut broth",
        price: "€10.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Butte ka kees",
        description:
          "Bhutte( Corn) Khees( grated) and spiced and tempered served with waffers",
        price: "€11.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Burrata Paapdi Chaat",
        description:
          "Our house made paapdi served with spiced potatoes and burrata cheese dressed with in house chutneys",
        price: "€9.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Shaadi Waala Chicken Curry",
        description:
          "Chicken curry usually served in weddings back home (Must Try)",
        price: "€18.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Shahi Tukda",
        description:
          "Chef’s signature dessert : crispy bread poched with flavoured milk and topped with homemade cream made of pistachios, rose.",
        price: "€7.00",
        restaurant_id: vivaanId,
      },
      {
        name: "Four-In-One Chicken",
        description:
          "Boneless chicken breast pieces marinated with four different kind of texture and Indian spices for each piece and grilled in clay oven",
        price: "€9.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Chicken Tikka",
        description:
          "Boneless Chicken marinated overnight with yogurt, Indian spices and cooked in a Tandoor oven",
        price: "€11.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Paneer Tikka",
        description:
          "Tandoori Paneer Tikka is made from homemade cottage cheese which is marinated in yogurt and dry aromatic Indian spices along with diced onions and capsicum and grilled in clay oven",
        price: "€11.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Fish Tikka",
        description:
          "Deboned fish marinated in ginger, garlic and other spices and grilled in clay oven",
        price: "€11.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Prawn Tandoori",
        description:
          "Large juicy prawn marinated in ginger, garlic, fresh squeezed lemon juice and along with various dry spices and grilled in clay oven",
        price: "€12.49",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Mixed Grill",
        description:
          "Tandoori chicken, lamb tikka, chicken tikka and fish grilled in our clay oven",
        price: "€15.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Coconut Curry",
        description:
          "Choice of boneless chicken breast, lamb, beef, fish or shrimp cooked in a creamy coconut, butter and onion sauce",
        price: "10.99",
        restaurant_id: RamaKrishnaId,
      },
      {
        name: "Quilon Chicken",
        description:
          "free range grass fed chicken cooked in a tangy tomato masala",
        price: "€15.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Mariposa's Duck Biryani**",
        description: "slow baked in kiama rice, quail egg and raita",
        price: "€18.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Pala Lamb Peralan",
        description: "tender morsels of lamb in an exotic masala",
        price: "€16.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Roasted Salmon In Moilee Sauce",
        description: "marinated in green mango, spices and roasted",
        price: "€14.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Vegetable Aviyal",
        description:
          "assorted vegetables cooked in yoghurt, coconut spiked with cumin",
        price: "€13.00",
        restaurant_id: coconutLagoonId,
      },
      {
        name: "Aloo Tiki",
        description:
          "Potato croquette topped with pickled seasonal vegetables and an assortment of chutneys",
        price: "€7.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Spicy Lamb Chops",
        description:
          "Lamb chops are coated in a spicy marinade and seared. It's paired with mint chutney, mango chutney, and raita. Allergens: Meat",
        price: "€10.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Crispy Shrimp",
        description:
          "Tandoori shrimp wrapped in crispy potato accompanied by a seasonal chutney and micro greens from the garden",
        price: "€9.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Bhaingan Bharta",
        description: "Smokey eggplant and peas",
        price: "€8.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "Kofta Curry",
        description:
          "Indian kofta served with bottleneck gourds and potatoes in a cashew coconut sauce",
        price: "€12.00",
        restaurant_id: lastTrainToDelhiId,
      },
      {
        name: "murgh salaad",
        description: "Chicken breast, mix greens, mint vinegar dressing",
        price: "€10.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "papad ki tokri",
        description: "Papadams, assorted chutneys & salsa",
        price: "€11.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "khumb korma",
        description:
          "Aged basmati rice, marinated lamb & puff pastry cover, garlic yogurt",
        price: "€22.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "dal tadka",
        description: "Yellow lentils, indian tempering",
        price: "€12.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "cocochoco rasmalai cheese cake",
        description:
          "Coconut crémeux, chocolate hazelnut crunch, coconut snow, citrus gel, cardamom ice cream",
        price: "€11.00",
        restaurant_id: adrakYorkvilleId,
      },
      {
        name: "Molasses Braised Beef Cheeks Curry",
        description:
          "Caramelised root vegetables, deggi mirch, buttermilk onion rings",
        price: "€18.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Coconut Vatan Stuffed Whole Branzino",
        description: "Turmeric lemon butter sauce, curry leaves, mustard seeds",
        price: "€18.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Goan Chorizo + Braised Pork Shoulder Curry",
        description:
          "Double smoked bacon, roasted parsnips, red kidney beans, apple achar",
        price: "€19.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Screech Rum Soaked Gulab Jamun",
        description: "Whipped mascarpone cream, pistachio crumble",
        price: "€8.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Ontario Apple + Almond Halwa Tart",
        description: "Whipped cinnamon malai, red currants",
        price: "€8.00",
        restaurant_id: curryishTavernId,
      },
      {
        name: "Vegetable samosa",
        description: "Seasoned potatoes and peas wrapped in a light pastry",
        price: "€3.00",
        restaurant_id: utsavId,
      },
      {
        name: "Goan fish curry",
        description:
          "Filet of salmon cooked in a traditional hot and tangy coconut curry",
        price: "€9.00",
        restaurant_id: utsavId,
      },
      {
        name: "Lamb vindaloo",
        description:
          "A delicacy from Goa - Boneless lamb cooked in a hot, spicy and tangy sauce with potatoes",
        price: "€10.00",
        restaurant_id: utsavId,
      },
      {
        name: "Matar paneer",
        description:
          "Cottage cheese and green peas cooked in butter flavored onion and tomato gravy",
        price: "€7.00",
        restaurant_id: utsavId,
      },
      {
        name: "Chicken vindaloo",
        description:
          "Chicken cooked with herbs and spices in special hot spicy and tangy sauce with potatoes",
        price: "€9.00",
        restaurant_id: utsavId,
      },
      {
        name: "Chicken jalfrezi",
        description:
          "Chicken cooked with delicious mix of green peppers, onions, green chillies and tomatoes",
        price: "€8.00",
        restaurant_id: utsavId,
      },
      {
        name: "Lamb Lollipops",
        description: "grilled chops with turmeric, mint and fenugreek curry",
        price: "€24.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Vegan Tikka Masala",
        description: "tofu, sweet peppers, red onion, tomato and cashew cream",
        price: "€15.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Short Ribs",
        description:
          "PEI beef braised with black cumin, cloves, cardamom and fennel seeds",
        price: "€20.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Punjabi Chicken Curry",
        description: "spicy home-style chicken curry",
        price: "€15.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Pukka Chaat",
        description:
          "string vegetables, sprouts, rice crisps, pomegranate, mango, green apple, chutneys and yoghurt",
        price: "€9.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Chicken Tikka",
        description:
          "herb-infused white meat, tandoor roasted and served with tamarind chutney",
        price: "€14.00",
        restaurant_id: pukkaId,
      },
      {
        name: "Butter Chicken Poutine",
        description:
          "Fries are served topped with melting cheese and butter chicken gravy",
        price: "€6.99",
        restaurant_id: kamasutraIndianId,
      },
      {
        name: "Vegetable Appy Platter",
        description:
          "2 Vegetable samosas, vegetable pakora, paneer pakora, 1 papadum, served with chickpea curry",
        price: "€8.99",
        restaurant_id: kamasutraIndianId,
      },
      {
        name: "Pulled Chicken",
        description: "marinated chicken with salsa",
        price: "8.00",
        restaurant_id: eldoradoTacoId,
      },
      {
        name: "Fettuccine Pescatore",
        description: "Scallops, mussels, shrimp and crab meat in a rose sauce",
        price: "€18.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Colosseo Pizze",
        description:
          "Luciano's spicy Italian sausage, black olives, hot peppers, mozzarella and parmigiano cheeses",
        price: "€13.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Vitello alla Griglia",
        description:
          "Grilled veal medallion, with seasonal vegetables and potatoes",
        price: "€20.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Agnello",
        description:
          "Grilled lamb chops in a citrus marinade, with seasonal vegetables and potatoes",
        price: "€20.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "Orata ai Porri",
        description: "€18.00",
        price:
          "Pan seared sea bream filet with sautéed leeks, served over a wild rice medley and greens",
        restaurant_id: laBartolaId,
      },
      {
        name: "Insalata di Mare",
        description:
          "Mixed greens tossed in our house viniagriette, topped with grilled shrimp and crab meat",
        price: "€18.00",
        restaurant_id: laBartolaId,
      },
      {
        name: "PASTOR",
        description:
          "Marinated shaved pork, pineapple, red onion dice, cilantro, salsa verde, corn tortilla",
        price: "€17.00",
        restaurant_id: elCatrinId,
      },
      {
        name: "COCHINITA PIBIL",
        description:
          "Achiote rubbed pork, black bean puree, pickled red onion, cilantro, habanero salsa",
        price: "€15.00",
        restaurant_id: elCatrinId,
      },
      {
        name: "Seafood Molcajete",
        description: "Grilled calamari, morita garlic shrimp, octopus",
        price: "€16.00",
        restaurant_id: mariachisId,
      },
      {
        name: "Sirloin Steak & Tuetano Osso Buco",
        description:
          "Bone marrow, slow cooked in the oven, topped with our seasoning",
        price: "€18.00",
        restaurant_id: mariachisId,
      },
      {
        name: "Fajitas",
        description:
          "A sizzling bed of onions and bell peppers topped with your choice of protein",
        price: "€11.50",
        restaurant_id: mariachisId,
      },
      {
        name: "Hamachi",
        description:
          "Ponzu à la truffe, truffe noire râpée [Salmon Tataki, Truffle ponzu, Shaved black truffle]",
        price: "€17.00",
        restaurant_id: canoRestaurantId,
      },
      {
        name: "Tartare de Thon",
        description:
          "Soja Yuzu, piment serrano [Hot Hamachi, Yuzu soy, Serrano pepper]",
        price: "€16.00",
        restaurant_id: canoRestaurantId,
      },
      {
        name: "Tataki de Saumon",
        description:
          "Purée d'avocat, chili soja [Tuna Tartar, Avocado puree, Chili soy]",
        price: "€18.00",
        restaurant_id: canoRestaurantId,
      },
      {
        name: "Tomato Braised Beef Cheek Ragu",
        description:
          "Wild Mushrooms, Sweet Potato & Ricotta Gnocchi, Fresh Basil",
        price: "€16.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Roasted Butternut Squash Ravioli",
        description:
          "Gorgonzola, Balsamic Reduction, Brown Butter, Crispy Sage",
        price: "€20.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Pan Seared Atlantic Salmon",
        description:
          "Heirloom Carrots, Green Beans, Parsnip Puree, Beluga Lentils & Barley, Chive Oil",
        price: "€20.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Woodfire Grilled 12oz AAA Ribeye",
        description:
          "Heirloom Carrots, Green Beans, Sweet Potato Gratin, Mushroom Veal jus",
        price: "€38.00",
        restaurant_id: bluRistoranteId,
      },
      {
        name: "Pizzoccheri di Teglio",
        description:
          "Homemade short buckwheat Pasta coated in three-cheese sauce, savoy cabbage, potatoes, butter and sage",
        price: "€16.00",
        restaurant_id: stelvioId,
      },
      {
        name: "Gnocchi al Gorgonzola",
        description: "Fresh homemade Gnocchi served in a blue cheese sauce",
        price: "€13.00",
        restaurant_id: stelvioId,
      },
      {
        name: "Risotto ai Funghi",
        description: "Aironi Carnaroli risotto served with mushrooms",
        price: "€15.00",
        restaurant_id: stelvioId,
      },
      {
        name: "Spezzatino con Polenta",
        description:
          "Traditional Northern Italian Specialty. Slow-cooked feef stew, cooked in tomato sauce and red wine reduction, served over soft polenta",
        price: "€16.00",
        restaurant_id: stelvioId,
      },
    ],
  });

  const userLaith = await prisma.user.create({
    data: {
      first_name: "Laith",
      last_name: "Harb",
      email: "laith@hotmail.com",
      city: "rome",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userJosh = await prisma.user.create({
    data: {
      first_name: "Josh",
      last_name: "Allen",
      email: "josh@hotmail.com",
      city: "prague",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userLebron = await prisma.user.create({
    data: {
      first_name: "LeBron",
      last_name: "James",
      email: "lebron@hotmail.com",
      city: "berlin",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userCassidy = await prisma.user.create({
    data: {
      first_name: "Cassidy",
      last_name: "Marksom",
      email: "cassidy@hotmail.com",
      city: "prague",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  await prisma.user.create({
    data: {
      first_name: "Antonio",
      last_name: "Cazzullo",
      email: "antonio@cazzullo.com",
      city: "prato",
      password: "$2b$10$YwepSc7Ox0ukyAb9rYSLHeSK2WCSNIWdwemVyTzWKixFmCbHCHH/W",
      phone: "1112223333",
    },
  });

  await prisma.user.create({
    data: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@hotmail.com",
      city: "las vegas",
      password: "$2b$10$yzbW5vB3U8Ek6P/y9dNIoObYGaDXWksOAg4aYKfDzjMQPRWakCtc2",
      phone: "1112223333",
    },
  });

  await prisma.review.createMany({
    data: [
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: vivaanId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Extremely disappointing in our experience.",
        rating: 2,
        restaurant_id: laBartolaId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
        rating: 5,
        restaurant_id: kamasutraIndianId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Restaurant was loud and crowded. Food is not worth the price.",
        rating: 3,
        restaurant_id: eldoradoTacoId,
        user_id: userLaith.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
        rating: 4,
        restaurant_id: vivaanId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
        rating: 5,
        restaurant_id: sofiaId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
        rating: 3,
        restaurant_id: curryishTavernId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
        rating: 3,
        restaurant_id: adrakYorkvilleId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Wonderful food and service.",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Great food, great staff. You can’t ask for much more from a restaurant.",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userJosh.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
        rating: 5,
        restaurant_id: RamaKrishnaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
        rating: 4,
        restaurant_id: lastTrainToDelhiId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
        rating: 4,
        restaurant_id: curryishTavernId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
        rating: 5,
        restaurant_id: pukkaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Very nice evening spent with special family.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userLebron.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
        rating: 4,
        restaurant_id: bluRistoranteId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
        rating: 3,
        restaurant_id: laBartolaId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: utsavId,
        user_id: userCassidy.id,
      },
    ],
  });

  await prisma.table.createMany({
    data: [
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 2,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 4,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 4,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 2,
      },
      {
        restaurant_id: RamaKrishnaId,
        seats: 2,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: coconutLagoonId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 4,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 2,
      },
      {
        restaurant_id: lastTrainToDelhiId,
        seats: 2,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 4,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 4,
      },
      {
        restaurant_id: adrakYorkvilleId,
        seats: 2,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 4,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 4,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 2,
      },
      {
        restaurant_id: curryishTavernId,
        seats: 2,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 4,
      },
      {
        restaurant_id: utsavId,
        seats: 2,
      },
      {
        restaurant_id: pukkaId,
        seats: 4,
      },
      {
        restaurant_id: pukkaId,
        seats: 4,
      },
      {
        restaurant_id: pukkaId,
        seats: 2,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 4,
      },
      {
        restaurant_id: kamasutraIndianId,
        seats: 2,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 4,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 4,
      },
      {
        restaurant_id: eldoradoTacoId,
        seats: 2,
      },
      {
        restaurant_id: laBartolaId,
        seats: 4,
      },
      {
        restaurant_id: laBartolaId,
        seats: 4,
      },
      {
        restaurant_id: laBartolaId,
        seats: 2,
      },
      {
        restaurant_id: laBartolaId,
        seats: 2,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: elCatrinId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 4,
      },
      {
        restaurant_id: mariachisId,
        seats: 2,
      },
      {
        restaurant_id: casaMaderaId,
        seats: 4,
      },
      {
        restaurant_id: casaMaderaId,
        seats: 4,
      },
      {
        restaurant_id: casaMaderaId,
        seats: 2,
      },
      {
        restaurant_id: casaMaderaId,
        seats: 2,
      },
      {
        restaurant_id: tacoNtequilaId,
        seats: 4,
      },
      {
        restaurant_id: tacoNtequilaId,
        seats: 4,
      },
      {
        restaurant_id: tacoNtequilaId,
        seats: 4,
      },
      {
        restaurant_id: tacoNtequilaId,
        seats: 2,
      },
      {
        restaurant_id: elJefeId,
        seats: 4,
      },
      {
        restaurant_id: elJefeId,
        seats: 4,
      },
      {
        restaurant_id: elJefeId,
        seats: 4,
      },
      {
        restaurant_id: elJefeId,
        seats: 2,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: canoRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 4,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 4,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      {
        restaurant_id: bluRistoranteId,
        seats: 2,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 4,
      },
      {
        restaurant_id: stelvioId,
        seats: 2,
      },
      {
        restaurant_id: stelvioId,
        seats: 2,
      },
      {
        restaurant_id: terraAdelaideId,
        seats: 4,
      },
      {
        restaurant_id: terraAdelaideId,
        seats: 4,
      },
      {
        restaurant_id: terraAdelaideId,
        seats: 2,
      },
      {
        restaurant_id: terraAdelaideId,
        seats: 2,
      },
      {
        restaurant_id: estRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: estRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: estRestaurantId,
        seats: 4,
      },
      {
        restaurant_id: estRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: estRestaurantId,
        seats: 2,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 4,
      },
      {
        restaurant_id: sofiaId,
        seats: 2,
      },
      {
        restaurant_id: terraSudFornoId,
        seats: 4,
      },
      {
        restaurant_id: terraSudFornoId,
        seats: 4,
      },
      {
        restaurant_id: terraSudFornoId,
        seats: 2,
      },
      {
        restaurant_id: terraSudFornoId,
        seats: 2,
      },
      {
        restaurant_id: terraSudFornoId,
        seats: 2,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 4,
      },
      {
        restaurant_id: ilPadrinoId,
        seats: 2,
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seeding completed.");
  })
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
