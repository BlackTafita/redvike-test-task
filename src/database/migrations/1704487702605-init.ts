import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1704487702605 implements MigrationInterface {
  name = 'Init1704487702605';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "amenity" ("id" SERIAL NOT NULL, "name" text, CONSTRAINT "PK_f981de7b1a822823e5f31da10dc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "reservation" ("id" SERIAL NOT NULL, "amenity_id" integer NOT NULL, "user_id" integer NOT NULL, "start_time" integer NOT NULL, "end_time" integer NOT NULL, "date" TIMESTAMP NOT NULL, "amenityId" integer, CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "reservation" ADD CONSTRAINT "FK_76588699c8b3502288baa1ac1cf" FOREIGN KEY ("amenityId") REFERENCES "amenity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reservation" DROP CONSTRAINT "FK_76588699c8b3502288baa1ac1cf"`,
    );
    await queryRunner.query(`DROP TABLE "reservation"`);
    await queryRunner.query(`DROP TABLE "amenity"`);
  }
}
