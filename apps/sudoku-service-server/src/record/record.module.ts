import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RecordModuleBase } from "./base/record.module.base";
import { RecordService } from "./record.service";
import { RecordController } from "./record.controller";
import { RecordResolver } from "./record.resolver";

@Module({
  imports: [RecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [RecordController],
  providers: [RecordService, RecordResolver],
  exports: [RecordService],
})
export class RecordModule {}
