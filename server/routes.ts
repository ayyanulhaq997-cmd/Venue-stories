import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // === Inquiries ===
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === Subscribers ===
  app.post(api.subscribers.create.path, async (req, res) => {
    try {
      const input = api.subscribers.create.input.parse(req.body);
      const exists = await storage.getSubscriberByEmail(input.email);
      if (exists) {
        return res.status(409).json({ message: "Email already subscribed" });
      }
      await storage.createSubscriber(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === Spaces ===
  app.get(api.spaces.list.path, async (req, res) => {
    const spaces = await storage.getSpaces();
    res.json(spaces);
  });

  app.get(api.spaces.get.path, async (req, res) => {
    const space = await storage.getSpaceBySlug(req.params.slug as string);
    if (!space) {
      return res.status(404).json({ message: "Space not found" });
    }
    res.json(space);
  });

  // === Stories ===
  app.get(api.stories.list.path, async (req, res) => {
    const stories = await storage.getStories();
    res.json(stories);
  });

  app.get(api.stories.get.path, async (req, res) => {
    const story = await storage.getStoryBySlug(req.params.slug as string);
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.json(story);
  });

  // Seed database
  await seedDatabase();

  return httpServer;
}

// Seed function to add initial data if empty
export async function seedDatabase() {
  const spaces = await storage.getSpaces();
  if (spaces.length === 0) {
    await storage.createSpace({
      name: "The Grand Ballroom",
      slug: "grand-ballroom",
      description: "A magnificent venue with high ceilings and crystal chandeliers, perfect for large receptions and gala dinners.",
      capacity: "Up to 500 Guests",
      location: "Canary Wharf, London",
      imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
    });
    
    await storage.createSpace({
      name: "Riverside Terrace",
      slug: "riverside-terrace",
      description: "Stunning outdoor space overlooking the Thames, ideal for summer parties and cocktail receptions.",
      capacity: "Up to 150 Guests",
      location: "South Bank, London",
      imageUrl: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80"
    });

    await storage.createSpace({
      name: "The Private Cellar",
      slug: "private-cellar",
      description: "An intimate and atmospheric dining room surrounded by fine wines, perfect for exclusive tasting menus.",
      capacity: "Up to 20 Guests",
      location: "City of London",
      imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
    });
  }

  const stories = await storage.getStories();
  if (stories.length === 0) {
    await storage.createStory({
      title: "Summer Event Trends 2025",
      slug: "summer-event-trends-2025",
      excerpt: "Discover the latest trends shaping the luxury event industry this summer, from sustainable catering to immersive experiences.",
      content: "Full article content goes here...",
      imageUrl: "https://images.unsplash.com/photo-1505373877741-e1519f6333b7?auto=format&fit=crop&q=80"
    });

    await storage.createStory({
      title: "A Night at The Grand Ballroom",
      slug: "night-at-grand-ballroom",
      excerpt: "Take a look back at one of our most spectacular gala dinners hosted in the iconic Grand Ballroom.",
      content: "Full article content goes here...",
      imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
    });
  }
}
