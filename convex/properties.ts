import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { featured: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    let properties;
    
    if (args.featured !== undefined) {
      properties = await ctx.db
        .query("properties")
        .withIndex("by_featured", (q) => q.eq("featured", args.featured as boolean))
        .order("desc")
        .collect();
    } else {
      properties = await ctx.db.query("properties").order("desc").collect();
    }
    
    return Promise.all(
      properties.map(async (property) => ({
        ...property,
        imageUrls: await Promise.all(
          property.images.map(async (imageId) => await ctx.storage.getUrl(imageId))
        ),
      }))
    );
  },
});

export const getByType = query({
  args: { type: v.string() },
  handler: async (ctx, args) => {
    const properties = await ctx.db
      .query("properties")
      .withIndex("by_type", (q) => q.eq("type", args.type))
      .collect();
    
    return Promise.all(
      properties.map(async (property) => ({
        ...property,
        imageUrls: await Promise.all(
          property.images.map(async (imageId) => await ctx.storage.getUrl(imageId))
        ),
      }))
    );
  },
});
