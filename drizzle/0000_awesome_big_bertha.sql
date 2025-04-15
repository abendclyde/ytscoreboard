CREATE TABLE "categories" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "categories_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"youtuber" varchar(255) NOT NULL,
	"weight" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "points" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "points_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"category" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "points" ADD CONSTRAINT "points_category_categories_id_fk" FOREIGN KEY ("category") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;