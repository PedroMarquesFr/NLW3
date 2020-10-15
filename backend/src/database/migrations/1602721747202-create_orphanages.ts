import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602721747202 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orphanages",
        columns: [],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
