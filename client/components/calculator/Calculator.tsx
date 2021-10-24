import { Grid } from "@material-ui/core"
import React, { FunctionComponent, useState } from "react"
import Button from '../button/Button'
import { useStyles } from "./Calculator.styles"

const Calculator: FunctionComponent = () => {

    const classes = useStyles()

    const diggitButtons = ['=', ')','0', '(', '.', '3', '2', '1', '+', '6', '5', '4', '-', '9', '8', '7', 'delete', '*', '/', 'reset'].reverse()

    const [value, setValue] = useState<string>('0')

    return (
        <div className={classes.calc}>
            <input className={classes.window} value={value}></input>
            <Grid container className={classes.buttonGrid}>
                {diggitButtons.map((b) => (
                    <Button value={value} setValue={setValue} buttonValue={b}/>
                ))}
            </Grid>
        </div>
    )
}

export default Calculator