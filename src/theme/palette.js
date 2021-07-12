import {colors} from '@material-ui/core'

const white = '#FFFFFF'
const black = "#00000"
const grey = "#AAAAAA"
const green = "#2ECC40"
const blue = "#2C6BFC"
const yellow = "#FFDC00"
const orange = "#FF851B"
const red = "#FF4136"

export default {
    black,
    white,
    primary: {
        contrastText: white,
        light: "#999999",
        main: "#111111",
        dark: "#000000"
    },
    secondary: {
        contrastText: white,
        dark: colors.grey[900],
        main: '#444444',
        light: colors.grey['A400']
    },
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: colors.green[600],
        light: colors.green[400]
    },
    info: {
        contrastText: white,
        dark: colors.blue[900],
        main: colors.blue[600],
        light: colors.blue[400]
    },
    warning: {
        contrastText: white,
        dark: colors.orange[900],
        main: colors.orange[600],
        light: colors.orange[400]
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400]
    },
    text: {
        primary: colors.grey[900],
        secondary: colors.grey[600],
        link: colors.blue[600]
    },
    background: {
        default: '#F4F6F8',
        paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200]
}

export const themeColors = {
    black,
    white,
    grey,
    green,
    blue,
    yellow,
    orange,
    red
}
