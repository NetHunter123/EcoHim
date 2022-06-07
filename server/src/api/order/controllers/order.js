'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');

/*
"use strict";
const unparsed = require("koa-body/unparsed.js");

 *  task controller
 */

/*
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // async findOne(ctx) {
  //   const { slug } = ctx.params;
  //
  //   const entity = await strapi.db.query("api::order.order").findOne({
  //     where: { slug },
  //   });
  //   const sanitizedEntity = await this.sanitizeOutput(entity);
  //
  //   return this.transformResponse(sanitizedEntity);
  // },
  async create(ctx) {
    // const entity = await strapi.db.query("api::task.task").create(ctx.request.body);
    // const sanitizedEntity = await this.sanitizeOutput(entity);
    // console.log(JSON.stringify(ctx, null, 2));
    // console.log(JSON.stringify(ctx.state, null, 2));
    // console.log(JSON.stringify(ctx.state.user, null, 2));
    // console.log(JSON.stringify(ctx.request.body, null, 2));
    // console.log(JSON.stringify(ctx.state.user.username, null, 2));
    let entity
    const order = ctx.request.body;
    console.log(("or1"),JSON.stringify(order, null, 2));
    order.data.user = ctx.state.user.username;
    console.log(JSON.stringify(order, null, 2));
    entity = await strapi.services.order.create(order)
    return entity;
    // const response = await super.create(order);
    // return response
  },
}));
*/
