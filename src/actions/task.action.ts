"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";

export async function createTask(taskName: string) {
  try {
    const [task] = await db
      .insert(tasks)
      .values({
        title: taskName,
      })
      .returning();
  } catch (error) {
    console.error("Failed to create task:", error);
    return { success: false, error: "Failed to create task" };
  }
}
