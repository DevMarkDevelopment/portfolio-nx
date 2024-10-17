import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepositService } from './deposit.service';
import { DepositDto } from './deposit.dto';
import { Deposit } from './deposit.entity';

@Controller('deposit')
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @Post()
  create(@Body() depositDto: DepositDto) {
    return this.depositService.addNewDeposit(depositDto);
  }

  @Get()
  getAllDeposits(): Promise<Deposit[]> {
    return this.depositService.getAllDeposits();
  }

  @Get(':id')
  getDepositWithId(@Param('id') depositId: string): Promise<Deposit> {
    return this.depositService.getDepositWithId(depositId);
  }

  @Put(':id')
  updateDeposit(
    @Param('id') depositId: string,
    @Body() depositDto: DepositDto
  ) {
    return this.depositService.updateDeposit(depositId, depositDto);
  }

  @Delete(':id')
  deleteDeposit(@Param('id') depositId: string): Promise<Deposit> {
    return this.depositService.deleteDeposit(depositId);
  }
}
