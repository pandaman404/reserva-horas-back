-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MedicalCenter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_MedicalCenter" ("address", "id", "name") SELECT "address", "id", "name" FROM "MedicalCenter";
DROP TABLE "MedicalCenter";
ALTER TABLE "new_MedicalCenter" RENAME TO "MedicalCenter";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
