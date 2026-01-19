import { db } from "./db";
import {
  inquiries,
  subscribers,
  spaces,
  stories,
  type InsertInquiry,
  type InsertSubscriber,
  type Space,
  type Story,
  type InsertSpace,
  type InsertStory,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<void>;
  
  // Subscribers
  createSubscriber(subscriber: InsertSubscriber): Promise<void>;
  getSubscriberByEmail(email: string): Promise<boolean>;

  // Spaces
  getSpaces(): Promise<Space[]>;
  getSpaceBySlug(slug: string): Promise<Space | undefined>;
  createSpace(space: InsertSpace): Promise<Space>;

  // Stories
  getStories(): Promise<Story[]>;
  getStoryBySlug(slug: string): Promise<Story | undefined>;
  createStory(story: InsertStory): Promise<Story>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    await db.insert(inquiries).values(inquiry);
  }

  async createSubscriber(subscriber: InsertSubscriber): Promise<void> {
    await db.insert(subscribers).values(subscriber);
  }

  async getSubscriberByEmail(email: string): Promise<boolean> {
    const result = await db.select().from(subscribers).where(eq(subscribers.email, email));
    return result.length > 0;
  }

  async getSpaces(): Promise<Space[]> {
    return await db.select().from(spaces);
  }

  async getSpaceBySlug(slug: string): Promise<Space | undefined> {
    const [space] = await db.select().from(spaces).where(eq(spaces.slug, slug));
    return space;
  }

  async createSpace(space: InsertSpace): Promise<Space> {
    const [newSpace] = await db.insert(spaces).values(space).returning();
    return newSpace;
  }

  async getStories(): Promise<Story[]> {
    return await db.select().from(stories);
  }

  async getStoryBySlug(slug: string): Promise<Story | undefined> {
    const [story] = await db.select().from(stories).where(eq(stories.slug, slug));
    return story;
  }

  async createStory(story: InsertStory): Promise<Story> {
    const [newStory] = await db.insert(stories).values(story).returning();
    return newStory;
  }
}

export const storage = new DatabaseStorage();
