import { integer, pgSchema, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const lpddSchema = pgSchema('lpdd');

export const OrganizationsTable = lpddSchema.table('organizations', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  logo_url: text('logo_url'),
  description: text('description'),
  industry: text('industry'),
  website: text('website').notNull(),
  city: text('city').notNull(),
  region: text('region'),
});

export const EventsTable = lpddSchema.table('events', {
  id: serial('id').primaryKey(),
  organization_id: integer('organization_id').references(
    () => OrganizationsTable.id
  ),
  event_url: text('event_url'),
});

export const OrganizationContacts = lpddSchema.table('organization_contacts', {
  id: serial('id').primaryKey(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
  email: text('email').notNull().unique(),
  organization_id: integer('organization_id').references(
    () => OrganizationsTable.id
  ),
});
