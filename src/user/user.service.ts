import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDataDTO } from 'src/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  findUserByEmail(email: string): Promise<User | undefined> {
    const user = this.userRepository.findOne({ where: { email: email }});
    return user;
  }

  addUser( userInform: UserDataDTO ): Promise<User> {
    const user = this.userRepository.create(userInform);
    return this.userRepository.save(user);
  }
  
}
