import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { tickets } from "@/db/schema";
import { z } from "zod/v4";

export const insertTicketSchema = createInsertSchema(tickets, {
  title: (field) => field.min(1, "Title is required"),
  description: (field) => field.min(1, "Description is required"),
  tech: (field) => field.email("Invalid email address"),
  customerId: (field) => field.min(1, "Customer ID is required"),
});

export const selectTicketSchema = createSelectSchema(tickets);

export type insertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type selectTicketSchemaType = z.infer<typeof selectTicketSchema>;
