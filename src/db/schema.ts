import { pgTable, serial, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  isCompleted: boolean("isCompleted").notNull().default(false),
  due: timestamp("due").notNull().defaultNow(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
