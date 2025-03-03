import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Playlist } from './playlist.entity';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  singer: string;

  @ManyToOne(() => Playlist, (playlist) => playlist.songs)
  playlist: string;
}
