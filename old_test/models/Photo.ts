import { randomUUID } from "crypto"
import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity('photo')
export class PhotoModel {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    filename: string

    @Column()
    views: number

    @Column()
    isPublished: boolean


    constructor(pid: string = randomUUID(), name: string, description: string, filename: string, views: number, isPublished: boolean) {
        this.id = pid
        this.name = name
        this.description = description
        this.filename = filename
        this.views = views
        this.isPublished = isPublished
    }
}