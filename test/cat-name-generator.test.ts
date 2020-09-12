import CatNameGen from '../src/cat-name-generator'

/**
 * Dummy test
 */
const catGen = new CatNameGen()

describe('Test Class', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('CatGen is instantiable', () => {
    expect(new CatNameGen()).toBeInstanceOf(CatNameGen)
  })

  it('CatGen Can Produce Cat Name', () => {
    console.log(catGen.getRawData())

    expect(catGen.getRawData()[0].catName).toBe('liz')
  })

  it('getRandomName', () => {
    expect(catGen.getRandomName()).not.toBeUndefined()
    console.log(`The random data generated ${catGen.getRandomName()}`)
  })

  it('generateNameByGender()', function() {
    expect(catGen.generateNameByGender('female')).not.toBeUndefined()

    console.log('The female name generated is ' + catGen.generateNameByGender('female'))
  })

  it('getNameArrayByGender', function() {
    expect(catGen.getNameArrayByGender('female')).not.toBeUndefined()

    console.log('nameArrayByGender: ' + catGen.getNameArrayByGender('female'))
  })

  it('should return this.data', function() {
    expect(catGen.getData()).not.toBeUndefined()
    console.log(`this.data: ${catGen.getData()}`)
  })

  it('generate a random name by language', function() {
    expect(catGen.generateNameByLanguage('English')).not.toBeUndefined()
  })

  it('should generate a name by both gender and language', function() {
    let i
    for (i = 0; i < 200; i++) {
      expect(catGen.generateNameByGenderAndLanguage('male', 'English')).not.toBeUndefined()
      console.log(
        `generateNameByGenderAndLanguage: ${catGen.generateNameByGenderAndLanguage(
          'female',
          'English'
        )}`
      )
    }
  })

  it('should return a list of names by gender', function() {
    expect(catGen.getNameListByGender('female')).not.toBeUndefined()
    console.log(`name list by gender: ${catGen.getNameListByGender('female')}`)
    console.log(`name list by gender: ${catGen.getNameListByGender('female')}`)
  })
})
