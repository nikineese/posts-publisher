import {ChangeEvent, useRef} from "react";
import {ExpandingInputWrapper} from "./styled";

export const ExpandingInput = ({ value, onChange, ...rest }: { value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, [key: string]: any }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null)

    return <ExpandingInputWrapper ref={inputRef} value={value} onChange={(e) => {
        if (!inputRef.current) return
        inputRef.current.style.height = ''
        inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
        onChange(e)
    }} {...rest} />
}