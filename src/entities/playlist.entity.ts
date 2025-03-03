import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Song } from './song.entity';
import { User } from './user.entity';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  creator: string;

  @OneToMany(() => Song, (song) => song.playlist)
  songs: Song[];

  @ManyToOne(() => User, (user) => user.playlists)
  owner: string;
}
