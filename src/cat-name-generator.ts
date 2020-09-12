import { Gender, Language, NameEntity, NameOption } from './entity'
import { catNameData } from './cat-name-generator.const-ts'
const formattedData: NameEntity[] = catNameData.map(item => new NameEntity(item))

export default class CatNameGen {
  data: NameEntity[]

  constructor() {
    this.data = formattedData
  }

  getName(option?: NameOption): string {
    if (!option) {
      return this.getRandomName()
    } else {
      return this.getNameWithOption(option)
    }
  }

  getData(): NameEntity[] {
    const array: NameEntity[] = this.data

    return array
  }

  getRandomName(): string {
    const randomIndex: number = this.generateRandomIndex(this.data)
    const randomName = this.data[randomIndex].name
    return randomName
  }

  generateRandomIndex(data: NameEntity[]): number {
    const lengthOfData = data.length
    return Math.floor(Math.random() * lengthOfData)
  }

  getNameWithOption(option: NameOption): string {
    if (option.gender && option.language) {
      return this.generateNameByGenderAndLanguage(option.gender, option.language)
    }
    if (option.gender) {
      return this.generateNameByGender(option.gender)
    }
    if (option.language) {
      return this.generateNameByLanguage(option.language)
    }
  }

  getNameArrayByGender(gender: Gender): string {
    const nameArrayByGender = JSON.stringify(this.data.filter(item => item.gender === gender))
    console.log('nameArrayByGender: ' + nameArrayByGender)
    return nameArrayByGender
  }

  generateNameByGender(gender: Gender): string {
    const nameArrayByGender = this.data.filter(item => item.gender === gender)
    const index = this.generateRandomIndex(nameArrayByGender)
    return nameArrayByGender[index].name
  }

  generateNameByLanguage(language: Language): string {
    const nameArrayByLanguage = this.data.filter(item => item.language === language)
    const index = this.generateRandomIndex(nameArrayByLanguage)
    return nameArrayByLanguage[index].name
  }

  generateNameByGenderAndLanguage(gender: Gender, language: Language): string {
    const nameArrayByGenderAndLanguage = this.data.filter(
      item => item.gender === gender && item.language === language
    )
    const index = this.generateRandomIndex(nameArrayByGenderAndLanguage)
    return nameArrayByGenderAndLanguage[index].name
  }

  getNameListByGender(gender: Gender): string[] {
    const nameListByGender = []
    const arrayByGender = this.data.filter(item => item.gender === gender)
    arrayByGender.map(item => nameListByGender.push(item.name))
    return nameListByGender
  }
}
