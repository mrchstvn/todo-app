"use server";

import { db } from "@/db";
import { tasks } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createTask(taskName: string, due: Date) {
  
  try {
    const [task] = await db
      .insert(tasks)
      .values({
        title: taskName,
        due
      })
      .returning();

    revalidatePath("/today");
    return { success: true, data: task };
  } catch (error) {
    console.error("Failed to create task:", error);
    return { success: false, error: "Failed to create task" };
  }
}

export async function getTasks() {
  try {
    return await db.select().from(tasks).orderBy(desc(tasks.createdAt));
  } catch (error) {
    console.error("Failed to get task:", error);
    return [];
  }
}

export async function updateTask(id: number, title: string, due: Date) {
  try {
    const [updated] = await db
      .update(tasks)
      .set({ title, due })
      .where(eq(tasks.id, id))
      .returning();

    if (!updated) {
      return { success: false, error: "Task not found" };
    }

    return { success: true, data: updated };
  } catch (error) {
    console.error("Failed to update task:", error);
    return { success: false, error: "Failed to update task" };
  } finally {
    revalidatePath("/today");
  }
}


export async function completeTask(id: number, completed: boolean){
  try {
    const [updated] = await db
    .update(tasks)
    .set({isCompleted: completed})
    .where(eq(tasks.id, id))
    .returning();

    if (!updated) {
      return { success: false, error: "Task not found" };
    }

    return { success: true, data: updated };

  } catch (error) {
    console.error("Failed to update task:", error);
    return { success: false, error: "Failed to update task" };

  } finally {
    revalidatePath("/today");
  }
}

export async function deleteTask(id: number){
  try {
    const [deleted] = await db
    .delete(tasks)
    .where(eq(tasks.id, id))
    .returning();

    if(!deleted){
      return { success: false, error: "Task not found" };
    }

    return{success: true, };
  } catch (error) {
     console.error("Failed to delete task:", error);
    return { success: false, error: "Failed to delete task" };
  } finally{
    revalidatePath("/today");
  }
}