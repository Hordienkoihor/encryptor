import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import {EncryptionModule} from './encryption/encryption.module';
import * as process from "node:process";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from './users/users.module';
import {User} from "./users/user.model";
import {EncryptionService} from "./encryption/encryption.service";
import {EncryptionController} from "./encryption/encryption.controller";

@Module({
    imports: [
        ConfigModule.forRoot(
            {envFilePath: `.${process.env.NODE_ENV || 'development'}.env`},
        ),
        EncryptionModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_ROOT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [User],
            synchronize: true,
        }),
        UsersModule
    ],
    controllers: [AppController, EncryptionController],
    providers: [AppService, EncryptionService],
})
export class AppModule {
}
