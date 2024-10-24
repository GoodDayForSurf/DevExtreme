import {
  formatVersion,
  makeVersion,
} from "./version-utils";

describe('version utils', () => {

  test.each<{ value: string | undefined, expected: string | undefined }>([
    { value: undefined, expected: undefined },
    { value: '', expected: undefined },
    { value: '23.2.1', expected: '23.2.1' },
    { value: '23.2.1-', expected: '23.2.1' },
    { value: '23.2.1-abc', expected: '23.2.1' },
    { value: '23.2.1-abc-def', expected: '23.2.1' },
    { value: '23.2.1-abc-def-4', expected: '23.2.1' },
    { value: '23.2.1.10', expected: '23.2.1' },
  ])('formatVersion [%#]', ({ value, expected }) => {
    expect(formatVersion(value)).toBe(expected);
  })

  test.each<{ baseVersion: string, daily: boolean, date: Date, expectedFullVersion: string, expectedBuild?: string }>([
    // minor
    { baseVersion: '23.2.4', daily: false, date: new Date(2000, 2, 30, 4, 15), expectedFullVersion: '23.2.4' },
    // daily, possible hotfix
    { baseVersion: '23.2.4', daily: true, date: new Date(1234, 5, 16, 7, 18), expectedFullVersion: '23.2.5-build-34167-0718', expectedBuild: '34167-0718' },
    // before EAP
    { baseVersion: '24.1.0', daily: true, date: new Date(2234, 5, 16, 7, 18), expectedFullVersion: '24.1.1-alpha-34167-0718', expectedBuild: '34167-0718' },
    // EAP and after it
    { baseVersion: '24.1.1', daily: true, date: new Date(2000, 0, 1, 22, 33), expectedFullVersion: '24.1.2-alpha-00001-2233', expectedBuild: '00001-2233' },
    // beta
    { baseVersion: '24.1.2', daily: false, date: new Date(2000, 2, 30, 4, 15), expectedFullVersion: '24.1.2-beta' },
    // daily after beta
    { baseVersion: '24.1.2', daily: true, date: new Date(2000, 2, 30, 4, 15), expectedFullVersion: '24.1.3-build-00090-0415', expectedBuild: '00090-0415' },
    // RTM
    { baseVersion: '24.1.3', daily: false, date: new Date(2000, 2, 30, 4, 15), expectedFullVersion: '24.1.3' },
    // daily, possible hotfix
    { baseVersion: '24.1.3', daily: true, date: new Date(1234, 5, 16, 7, 18), expectedFullVersion: '24.1.4-build-34167-0718', expectedBuild: '34167-0718' },

    { baseVersion: '23.2.3', daily: true, date: new Date(2001, 2, 30, 4, 15), expectedFullVersion: '23.2.4-build-01089-0415', expectedBuild: '01089-0415' },
    { baseVersion: '23.2.3', daily: true, date: new Date(2023, 5, 10, 0, 10), expectedFullVersion: '23.2.4-build-23161-0010', expectedBuild: '23161-0010' },
   ])('makeVersion [%#]', ({ baseVersion, daily, date, expectedFullVersion, expectedBuild }) => {
    const result = makeVersion(baseVersion, daily, date);

    expect(result.fullVersion).toBe(expectedFullVersion);
    expect(result.baseVersion).toBe(baseVersion);
    expect(result.build).toBe(expectedBuild);
  })

  test.each<{ baseVersion: string, date: Date }>([
    { baseVersion: undefined as any, date: new Date(2023, 5, 5, 12, 30) },
    { baseVersion: '1234.5', date: new Date(2023, 5, 5, 12, 30) },
    { baseVersion: '123456', date: new Date(2023, 5, 5, 12, 30) },
    { baseVersion: 'abcdef', date: new Date(2023, 5, 5, 12, 30) },
  ])('makeVersion [%#]', ({ baseVersion, date }) => {
    expect(() => { makeVersion(baseVersion, true,  date) }).toThrow(Error);
  })
});
