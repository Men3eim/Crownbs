import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { featured: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    let testimonials;
    
    if (args.featured !== undefined) {
      testimonials = await ctx.db
        .query("testimonials")
        .withIndex("by_featured", (q) => q.eq("featured", args.featured as boolean))
        .collect();
    } else {
      testimonials = await ctx.db.query("testimonials").collect();
    }
    
    return Promise.all(
      testimonials.map(async (testimonial) => ({
        ...testimonial,
        imageUrl: testimonial.image ? await ctx.storage.getUrl(testimonial.image) : null,
      }))
    );
  },
});
