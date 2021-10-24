import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => 
        createStyles({
            button: {
                width: 75,
                height: 75,
                margin: 10,
                borderRadius: 50,
                fontSize: 35,
            },
            svg: {
                width: 35,
                height: 35,
                margin: 'auto',
            }
        })
)