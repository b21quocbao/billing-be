import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBillingDto } from './dto/create-billing.dto';
import { Billing } from './schemas/billing.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Put('/mobile/:user_name/call')
  async receiveCall(
    @Param('user_name') userName: string,
    @Body() body: CreateBillingDto,
  ): Promise<Billing> {
    return this.appService.receiveCall(userName, +body.call_duration);
  }

  @Get('/mobile/:user_name/billing')
  async receiveBilling(
    @Param('user_name') userName: string,
  ): Promise<{ call_count: number; block_count: number }> {
    return this.appService.receiveBilling(userName);
  }
}
