import { IconButton, Input } from '@/components'
import { useDialog } from '@/hooks'
import { ALIGN_CENTER, DIRECTION_COLUMN, FLEX_CENTER } from '@/libs/styled-components/css-utils'
import { BORDER_RADIUS, COLOR, FONT_SIZE } from '@/libs/styled-components/reference-tokens'
import { faClose, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, type Dispatch, type SetStateAction } from 'react'
import styled from 'styled-components'

type RecordInputProps = {
	recordArray: Array<string>
	setRecordArray: Dispatch<SetStateAction<Array<string>>>
}

const RecordedInput = ({ recordArray, setRecordArray }: RecordInputProps) => {
	const { onAlert } = useDialog()
	const inputRef = useRef<HTMLInputElement>(null)
	const onAddRecordOne = () => {
		if (inputRef.current === null) return
		const inputValue = inputRef.current.value

		if (!!!inputValue.length) {
			onAlert('옵션명을 적어주세요.')
			return
		}
		if (recordArray.includes(inputValue)) {
			onAlert('해당 옵션은 이미 있습니다.')
			return
		}
		inputRef.current.value = ''
		setRecordArray((prev) => [...prev, inputValue])
	}
	const onRemoveRecordOne = (recordIdx: number) => {
		if (recordIdx === 0) {
			onAlert('해당 옵션은 삭제할 수 없습니다.')
			return
		}
		setRecordArray((prev) => {
			const _prev = [...prev]
			_prev.splice(recordIdx, 1)
			return _prev
		})
	}

	return (
		<S.Container>
			<S.RecordedInputBase>
				<S.ScrollWrapper>
					<S.ScrollList>
						{recordArray.map((record, idx) => (
							<S.RecordToggle key={idx}>
								<FontAwesomeIcon
									icon={faClose}
									size="sm"
									onClick={() => {
										onRemoveRecordOne(idx)
									}}
								/>
								<S.RecordText>{record}</S.RecordText>
							</S.RecordToggle>
						))}
					</S.ScrollList>
				</S.ScrollWrapper>
				<Input width="100%" ref={inputRef} />
			</S.RecordedInputBase>
			<IconButton type="button" iconData={faUpload} onClick={onAddRecordOne} />
		</S.Container>
	)
}

export default RecordedInput

const Container = styled.div`
	${FLEX_CENTER}
	gap: 0.5rem;
	width: 100%;
	height: 100%;
`

const RecordedInputBase = styled.div`
	${DIRECTION_COLUMN}
	${FLEX_CENTER}
  gap: 0.1rem;
	width: 100%;
	height: 100%;
`

const ScrollWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 1.5rem;
	overflow-y: visible;
`
const ScrollList = styled.div`
	${ALIGN_CENTER}
	position: absolute;
	top: -0.3rem;
	width: 100%;
	height: fit-content;
	gap: 0.5rem;
	overflow-x: scroll;
`
const RecordToggle = styled.div`
	${ALIGN_CENTER}
	flex-wrap: nowrap;
	gap: 0.5rem;
	width: fit-content;
	height: fit-content;
	padding: 0 0.5rem;
	background-color: ${COLOR.grayScale[250]};
	border-radius: ${BORDER_RADIUS.lg};
`

const RecordText = styled.div`
	font-size: ${FONT_SIZE.ti};
	color: ${COLOR.grayScale[1000]};
	white-space: nowrap;
`

const S = {
	Container,
	ScrollWrapper,
	ScrollList,
	RecordToggle,
	RecordText,
	RecordedInputBase
}
