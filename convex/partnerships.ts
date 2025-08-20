import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { featured: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    let partnerships;
    
    if (args.featured !== undefined) {
      partnerships = await ctx.db
        .query("partnerships")
        .withIndex("by_featured", (q) => q.eq("featured", args.featured as boolean))
        .collect();
    } else {
      partnerships = await ctx.db.query("partnerships").collect();
    }
    
    return Promise.all(
      partnerships.map(async (partnership) => ({
        ...partnership,
        logoUrl: await ctx.storage.getUrl(partnership.logo),
      }))
    );
  },
});

export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const partnerships = await ctx.db
      .query("partnerships")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
    
    return Promise.all(
      partnerships.map(async (partnership) => ({
        ...partnership,
        logoUrl: await ctx.storage.getUrl(partnership.logo),
      }))
    );
  },
});
