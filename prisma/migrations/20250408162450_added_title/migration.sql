/*
  Warnings:

  - Added the required column `title` to the `Fish13` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `NukesTop5` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `TrekTrendy` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fish13" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "points" TEXT NOT NULL
);
INSERT INTO "new_Fish13" ("id", "points", "score") SELECT "id", "points", "score" FROM "Fish13";
DROP TABLE "Fish13";
ALTER TABLE "new_Fish13" RENAME TO "Fish13";
CREATE TABLE "new_NukesTop5" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "points" TEXT NOT NULL
);
INSERT INTO "new_NukesTop5" ("id", "points", "score") SELECT "id", "points", "score" FROM "NukesTop5";
DROP TABLE "NukesTop5";
ALTER TABLE "new_NukesTop5" RENAME TO "NukesTop5";
CREATE TABLE "new_TrekTrendy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "points" TEXT NOT NULL
);
INSERT INTO "new_TrekTrendy" ("id", "points", "score") SELECT "id", "points", "score" FROM "TrekTrendy";
DROP TABLE "TrekTrendy";
ALTER TABLE "new_TrekTrendy" RENAME TO "TrekTrendy";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
