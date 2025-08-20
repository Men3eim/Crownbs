import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    logoId: v.id("_storage"),
    website: v.optional(v.string()),
    description: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("otas", {
      ...args,
      featured: args.featured || false,
    });
  },
});

export const list = query({
  args: {
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let otas;
    
    if (args.featured) {
      otas = await ctx.db
        .query("otas")
        .withIndex("by_featured", (q) => q.eq("featured", true))
        .collect();
    } else {
      otas = await ctx.db.query("otas").collect();
    }
    
    // Get logo URLs for each OTA
    return Promise.all(
      otas.map(async (ota) => ({
        ...ota,
        logoUrl: await ctx.storage.getUrl(ota.logoId),
      }))
    );
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const update = mutation({
  args: {
    id: v.id("otas"),
    name: v.optional(v.string()),
    logoId: v.optional(v.id("_storage")),
    website: v.optional(v.string()),
    description: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    return await ctx.db.patch(id, updates);
  },
});

export const remove = mutation({
  args: {
    id: v.id("otas"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
