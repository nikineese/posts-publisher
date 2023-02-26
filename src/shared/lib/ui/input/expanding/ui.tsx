import {ChangeEvent, useRef} from "react";
import {ExpandingInputWrapper} from "./styled";

export const ExpandingInput = ({ value, onChange, error, ...rest }: { value: string, onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void, error: Error, [key: string]: any }) => {
    const inputRef = useRef<HTMLTextAreaElement>(null)

    return <ExpandingInputWrapper error={error} ref={inputRef} value={value} onChange={(e) => {
        if (!inputRef.current) return
        inputRef.current.style.height = ''
        inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
        onChange(e)
    }} {...rest} />
}