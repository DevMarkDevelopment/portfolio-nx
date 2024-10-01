import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Deposit } from './deposit.entity';
import { Model } from 'mongoose';
import { DepositDto } from './deposit.dto';

@Injectable()
export class DepositService {
  constructor(
    @InjectModel(Deposit.name) private depositModel: Model<Deposit>
  ) {}

  async getAllDeposits(): Promise<Deposit[]> {
    return this.depositModel.find().exec();
  }

  async addNewDeposit(createDepositDto: DepositDto): Promise<Deposit> {
    const newDeposit = new this.depositModel(createDepositDto);
    return newDeposit.save();
  }

  async getDepositWithId(depositId: string): Promise<Deposit> {
    return this.depositModel.findById(depositId).exec();
  }

  async deleteDeposit(depositId: string): Promise<Deposit> {
    return this.depositModel.findByIdAndDelete(depositId).exec();
  }

  async updateDeposit(
    depositId: string,
    depositDto: DepositDto
  ): Promise<Deposit> {
    return this.depositModel
      .findByIdAndUpdate(depositId, depositDto, { new: true })
      .exec();
  }
}
