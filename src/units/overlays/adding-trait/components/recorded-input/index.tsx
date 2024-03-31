import { IconButton, Input } from '@/components'
import { useDialog } from '@/hooks'
import { faClose, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import * as S from './recorded-input.style'
import type * as T from './recorded-input.type'

const RecordedInput = ({ recordArray, setRecordArray }: T.RecordInputProps) => {
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
