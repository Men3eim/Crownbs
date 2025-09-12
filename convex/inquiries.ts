import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    service: v.string(),
    message: v.string(),
    attachments: v.optional(v.array(v.id("_storage"))),
    cvFileId: v.optional(v.id("_storage")),
    inquiryType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", {
      ...args,
      status: "new",
    });
    
    return inquiryId;
  },
});

export const createInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    cvFileId: v.optional(v.id("_storage")),
    inquiryType: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", {
      name: args.name,
      email: args.email,
      company: args.company,
      phone: args.phone,
      service: args.inquiryType === 'cv_upload' ? 'CV Upload' : 'General Inquiry',
      message: args.message,
      cvFileId: args.cvFileId,
      inquiryType: args.inquiryType || 'general',
      status: "new",
    });
    
    return inquiryId;
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("inquiries").order("desc").collect();
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});


