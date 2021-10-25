import { FunctionComponent } from "react"
import { useStyles } from "./Button.styles"
import { Remove, Add, BackspaceOutlined, Close } from '@mui/icons-material'
import clsx from "clsx"


type ButtonProps = {
    value: string
    setValue: any
    buttonValue: string
}

const Button: FunctionComponent<ButtonProps> = (props) => {

    const classes = useStyles()

    const changeInput = () => {
        switch (props.buttonValue) {
            case '=': {
                let str = props.value
                let l = str.split('(').length - 1
                console.log(l)
                let r = str.split(')').length - 1
                console.log(r)
                if (l - r > 0) {
                    let i = 0
                    for (i; i != l - r; i++) {
                        str += ')'
                    }
                }
                else if(r - l > 0) {
                    let i = 0
                    let sstr = str.split('').reverse().join('')
                    console.log(sstr)
                    for (i; i != r - l; i++) {
                        sstr += '('
                    }
                    console.log(sstr)
                    str = sstr.split('').reverse().join('')
                    console.log(str)
                }
                try {
                    let res = +eval(str).toFixed(13)
                } catch {
                    let res = 'Error'
                }
                if (res == Infinity || res == -Infinity) {
                    props.setValue('Error')
                    break
                }
                props.setValue(res.toString())
                break
            }
            case 'reset': {
                props.setValue('0')
                break
            }
            case 'delete': {
                let res = props.value.slice(0, -1)
                res == '' || res == 'Erro' ? props.setValue('0') : props.setValue(res)
                break
            }
            case '/':
            case '*': {
                if (props.value == '0') {
                    break
                }
            }
            default: {
                if (props.value.length > 19){
                    break
                }
                else {
                    if (props.value == '0') {
                        props.setValue(props.buttonValue)
                        break
                    }
                    else{
                        props.setValue(props.value + `${props.buttonValue}`)
                        break
                    }
                }
            }
        }
    }

    switch(props.buttonValue){
        case '/': {
            return (
                <button className={classes.button} onClick={changeInput}>
                    :
                </button>
            )
        }
        case '*': {
            return (
                <button className={classes.button} onClick={changeInput}>
                    <Close/>
                </button>
            )
        }
        case 'delete': {
            return (
                <button className={classes.button} onClick={changeInput}>
                    <BackspaceOutlined/>
                </button>
            )
        }
        case 'reset': {
            return (
                <button className={classes.button} onClick={changeInput}>
                    C
                </button>
            )
        }
        default: {
            return (
                <button className={classes.button} onClick={changeInput}>
                    {props.buttonValue}
                </button>
            )
        }
    }
}

export default Button
