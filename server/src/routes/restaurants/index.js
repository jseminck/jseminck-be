import getDatabase, { tables }  from "../../db";
import scrapeTripadvisor from "./scraper";

export default function restaurantRoutes(router) {
    router
        .get('/restaurants', getRestaurants)
        .post('/restaurants', updateRestaurants);
};

async function getRestaurants(ctx) {
    ctx.status = 200;
    ctx.body = {
        data: []
    };
}

async function updateRestaurants(ctx) {
    const data = await scrapeTripadvisor();

    ctx.status = 200;
    ctx.body = {
        ...data
    };
}