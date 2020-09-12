import * as uuid from 'uuid'

export type Gender = 'male' | 'female' | 'unisex'


export interface NameOption extends NameEntity {
  gender: Gender
  language: Language

}

export type Language = 'English' | 'Chinese'

export class NameEntity {
  id = uuid.v4();
  name: string
  gender: Gender
  language: Language

  constructor(nameEntity) {

    Object.assign(this, nameEntity)


  }
}

