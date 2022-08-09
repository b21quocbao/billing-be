import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Billing, BillingDocument } from './schemas/billing.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Billing.name) private billingModel: Model<BillingDocument>,
  ) {}

  async receiveCall(userName: string, callDuration: number): Promise<Billing> {
    const user = await this.billingModel.findOne({ userName });

    if (!user) {
      return this.billingModel.create({
        userName,
        callCount: (user?.callCount || 0) + 1,
        blockCount:
          (user?.blockCount || 0) + Math.ceil(callDuration / (30 * 1000)),
      });
    } else {
      return this.billingModel.findByIdAndUpdate(
        user._id,
        {
          $set: {
            callCount: (user?.callCount || 0) + 1,
            blockCount:
              (user?.blockCount || 0) + Math.ceil(callDuration / (30 * 1000)),
          },
        },
        { new: true },
      );
    }
  }

  async receiveBilling(
    userName: string,
  ): Promise<{ call_count: number; block_count: number }> {
    const user = await this.billingModel.findOne({ userName });
    return {
      call_count: user.callCount,
      block_count: user.blockCount,
    };
  }
}
