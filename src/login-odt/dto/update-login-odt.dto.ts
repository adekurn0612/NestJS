import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginOdtDto } from './create-login-odt.dto';

export class UpdateLoginOdtDto extends PartialType(CreateLoginOdtDto) {}
