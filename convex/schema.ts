import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    service: v.string(),
    message: v.string(),
    attachments: v.optional(v.array(v.id("_storage"))),
    status: v.string(), // "new", "in-progress", "completed"
  }).index("by_status", ["status"]),
  
  properties: defineTable({
    name: v.string(),
    type: v.string(), // "hotel", "apartment", "commercial"
    location: v.string(),
    description: v.string(),
    images: v.array(v.id("_storage")),
    amenities: v.array(v.string()),
    revenue: v.optional(v.number()),
    occupancyRate: v.optional(v.number()),
    featured: v.boolean(),
  }).index("by_type", ["type"])
    .index("by_featured", ["featured"]),

  partnerships: defineTable({
    name: v.string(),
    logo: v.id("_storage"),
    description: v.string(),
    website: v.optional(v.string()),
    category: v.string(), // "hotel-group", "property-management", "technology", "ota"
    featured: v.boolean(),
  }).index("by_category", ["category"])
    .index("by_featured", ["featured"]),

  testimonials: defineTable({
    clientName: v.string(),
    company: v.string(),
    position: v.string(),
    content: v.string(),
    rating: v.number(),
    image: v.optional(v.id("_storage")),
    featured: v.boolean(),
  }).index("by_featured", ["featured"]),

  otas: defineTable({
    name: v.string(),
    logoId: v.id("_storage"),
    website: v.optional(v.string()),
    description: v.optional(v.string()),
    featured: v.boolean(),
  }).index("by_featured", ["featured"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
