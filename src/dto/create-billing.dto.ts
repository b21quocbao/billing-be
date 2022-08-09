import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBillingDto {
  @ApiProperty({
    description: 'Một số nguyên mô tả thời gian cuộc gọi tính bằng millisecond',
    required: true,
    default: 3000,
  })
  @IsNumber()
  call_duration = 3000;
}
