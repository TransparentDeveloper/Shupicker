/** 단위 붙히기 */
export const appendUnit = <T extends string | number>(value: T, unit: string) =>
	[value, unit].join(' ')
