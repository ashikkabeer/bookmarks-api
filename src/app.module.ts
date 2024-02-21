import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
/*
* Decorators -> addition of metadata and additional behaviors to classes,
    methods, properties, and function parameters
    eg: @Module
*/

@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
})
export class AppModule {}
