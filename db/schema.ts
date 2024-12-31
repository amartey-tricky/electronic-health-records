import { pgTable, varchar, serial, text, timestamp, integer, boolean, decimal, jsonb } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  dateOfBirth: timestamp("date_of_birth").notNull(),
  gender: varchar("gender", { length: 10 }).notNull(),
  contactNumber: varchar("contact_number", { length: 20 }),
  address: text("address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const visits = pgTable("visits", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").references(() => patients.id),
  doctorId: integer("doctor_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  weight: decimal("weight", { precision: 5, scale: 2 }),
  temperature: decimal("temperature", { precision: 4, scale: 1 }),
  bloodPressure: varchar("blood_pressure", { length: 20 }),
  pulse: integer("pulse"),
  symptoms: text("symptoms"),
  diagnosis: text("diagnosis"),
  doctorsNotes: text("doctors_notes"),
  //nursesNotes: text("nurses_notes"),
  status: varchar("status", { length: 50 }).notNull().default("open"),
});

export const nursesNotes = pgTable("nurses_notes", {
  id: serial("id").primaryKey(),
  visitId: integer("visit_id").references(() => visits.id),
  nurseId: integer("nurse_id").references(() => users.id),
  note: text("note"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const fileUploads = pgTable('file_uploads', {
  id: serial('id').primaryKey(),
  visitId: integer('visit_id').references(() => visits.id),
  nurseId: integer('nurse_id').references(() => users.id),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  fileType: varchar('file_type', { length: 10 }).notNull(),
  fileUrl: text('file_url').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const prescriptions = pgTable("prescriptions", {
  id: serial("id").primaryKey(),
  visitId: integer("visit_id").references(() => visits.id),
  doctorId: integer("doctor_id").references(() => users.id),
  medication: varchar("medication", { length: 255 }).notNull(),
  dosage: varchar("dosage", { length: 255 }),
  frequency: varchar("frequency", { length: 255 }),
  duration: varchar("duration", { length: 255 }),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const labRequests = pgTable("lab_requests", {
  id: serial("id").primaryKey(),
  visitId: integer("visit_id").references(() => visits.id),
  doctorId: integer("doctor_id").references(() => users.id),
  testType: varchar("test_type", { length: 50 }).notNull(),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const labResults = pgTable("lab_results", {
  id: serial("id").primaryKey(),
  labRequestId: integer("lab_request_id").references(() => labRequests.id),
  technicianId: integer("technician_id").references(() => users.id),
  result: text("result"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").references(() => patients.id),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  type: varchar("type", { length: 50 }).notNull(),
  itemName: varchar("item_name", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const hospitalFees = pgTable("hospital_fees", {
  id: serial("id").primaryKey(),
  serviceName: varchar("service_name", { length: 255 }).notNull().unique(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const drugPrices = pgTable("drug_prices", {
  id: serial("id").primaryKey(),
  drugName: varchar("drug_name", { length: 255 }).notNull().unique(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const labFees = pgTable("lab_fees", {
  id: serial("id").primaryKey(),
  testName: varchar("test_name", { length: 255 }).notNull().unique(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const inventory = pgTable("inventory", {
  id: serial("id").primaryKey(),
  itemName: varchar("item_name", { length: 255 }).notNull().unique(),
  quantity: integer("quantity").notNull(),
  reorderLevel: integer("reorder_level").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})
