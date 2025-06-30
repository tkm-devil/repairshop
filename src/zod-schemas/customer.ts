import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";
import { z } from "zod/v4";

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (field) => field.min(1, "First name is required"),
    lastName: (field) => field.min(1, "Last name is required"),
    address1: (field) => field.min(1, "Address is required"),
    city: (field) => field.min(1, "City is required"),
    state: (field) => field.length(2, "State must be exactly 2 characters"),
    zip: (field) => field.regex(/^\d{5}(-\d{4})?$/, "Invalid zip code format"),
    email: (field) => field.email("Invalid email format"),
    phone: (field) => field.regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Phone format: (555) 123-4567"),
});

export const selectCustomerSchema = createSelectSchema(customers);

// Type inference
export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;
