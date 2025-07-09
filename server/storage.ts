import { users, contacts, type User, type InsertUser, type Contact, type InsertContact } from "@shared/schema";
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

console.log('Setting up database connection with URL:', process.env.DATABASE_URL ? 'URL exists' : 'URL missing');

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

const db = drizzle(pool);

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  currentUserId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export class DrizzleStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    try {
      console.log('Attempting to create contact in database:', insertContact);
      const [contact] = await db.insert(contacts).values(insertContact).returning();
      console.log('Contact created successfully:', contact);
      return contact;
    } catch (error) {
      console.error('Error creating contact in database:', error);
      throw error;
    }
  }

  async getContacts(): Promise<Contact[]> {
    try {
      return await db.select().from(contacts).orderBy(contacts.createdAt);
    } catch (error) {
      console.error('Error getting contacts from database:', error);
      throw error;
    }
  }

  // User methods can be implemented similarly if needed
  async getUser(id: number): Promise<User | undefined> { return undefined; }
  async getUserByUsername(username: string): Promise<User | undefined> { return undefined; }
  async createUser(user: InsertUser): Promise<User> { return undefined as any; }
}

export const storage = new DrizzleStorage();
