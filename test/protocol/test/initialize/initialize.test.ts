import { expect } from 'chai'
import { TestLanguageClient } from '../../src/TestLanguageClient'
import { buildClient } from '../client'
import initializeResult from './data/initializeResult.json'

let client!: TestLanguageClient

describe('initialize', () => {
  beforeEach(async () => {
    client = buildClient(__dirname)
    await client.start()
  })

  afterEach(async () => {
    client.stop()
  })

  it('should return InitializeResult with capabilities', async () => {
    const result = await client.initialize()

    expect(result).deep.equals(initializeResult)
  })
})