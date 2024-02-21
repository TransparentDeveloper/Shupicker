export type GridElementProps = {
	row?: number
	column?: number
	rowSpan?: number
	columnSpan?: number
	children?: React.ReactNode
}

export type $ElementWrapper = {
	$row: number
	$column: number
	$rowSpan: number
	$columnSpan: number
}
