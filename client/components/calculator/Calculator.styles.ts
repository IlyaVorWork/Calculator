import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => 
        createStyles({
            calc: {
                width: 400,
                height: 700,
                outline: "1px solid black",
                padding: "50px 50px"
            },
            window: {
                width: 392,
                height: 244,
                textAlign: 'right',
                fontSize: 50,
            },
            buttonGrid: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }
        })
)