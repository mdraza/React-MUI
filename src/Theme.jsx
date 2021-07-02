// import {createMuiTheme} from '@material-ui/core/styles'
// import blue from '@material-ui/core/colors/blue'
// import amber from '@material-ui/core/colors/amber'

// const theme = createMuiTheme({
//     palette: {
//         primary: blue,
//         secondary: amber
//     }
// })

// export default theme

import {createMuiTheme} from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import pink from '@material-ui/core/colors/pink'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[500],
            dark: orange[900]
        },
        secondary: {
            main: pink[500],
            light: pink[100]
        }
    },
    typography: {
        fontFamily: 'Raleway',
        h4:{
            fontFamily: "roboto"
        },
        button: {
            fontFamily: 'Dancing Script'
        }
    }
})

export default theme