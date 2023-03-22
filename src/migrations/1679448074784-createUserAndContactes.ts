import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserAndContactes1679448074784 implements MigrationInterface {
    name = 'createUserAndContactes1679448074784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contactes" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "temporary_contactes" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, CONSTRAINT "FK_323dc2261394d30936dc62f93a4" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contactes"("id", "name", "email", "phone", "createdAt", "userId") SELECT "id", "name", "email", "phone", "createdAt", "userId" FROM "contactes"`);
        await queryRunner.query(`DROP TABLE "contactes"`);
        await queryRunner.query(`ALTER TABLE "temporary_contactes" RENAME TO "contactes"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contactes" RENAME TO "temporary_contactes"`);
        await queryRunner.query(`CREATE TABLE "contactes" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar)`);
        await queryRunner.query(`INSERT INTO "contactes"("id", "name", "email", "phone", "createdAt", "userId") SELECT "id", "name", "email", "phone", "createdAt", "userId" FROM "temporary_contactes"`);
        await queryRunner.query(`DROP TABLE "temporary_contactes"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "contactes"`);
    }

}
