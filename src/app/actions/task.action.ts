"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import {and , desc, eq} from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createTask(taskName: string) {
  try {
    const [task] = await db
      .insert(tasks)
      .values({
        title: taskName,
      })
      .returning();

      revalidatePath("/today");
  } catch (error) {
    console.error("Failed to create task:", error);
    return { success: false, error: "Failed to create task" };
  }
}


export async function getTasks() {
  try {
    return await db
    .select()
    .from(tasks)
    .orderBy(desc(tasks.createdAt))
  } catch (error) {
    console.error("Failed to create task:", error);
    return [];
  }
}