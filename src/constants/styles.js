import { StyleSheet } from "react-native"

//---------background
export const BACKGROUND_COLOR = "#222222"  
// export const BACKGROUND_COLOR = "#303030"
// export const BACKGROUND_COLOR = "#1E2125"

//---------foreground
export const ACCENT_COLOR = "#F2F2F2"
export const CONTENT_COLOR = "#D8D8D8" 
// export const CONTENT_COLOR = "#F2F2F2" 
// export const CONTENT_COLOR = "#EFEFEF"

//---------Sizings
export const HEADER_SIZE = 24
export const CONTENT_SIZE = 16
export const VIEW_PADDING = 16

export const STYLES = StyleSheet.create({
    HEADER_STYLE: {
        color: ACCENT_COLOR,
        fontSize: HEADER_SIZE,
        fontWeight: "600"
    },
    CONTENT_STYLE: {
        color: CONTENT_COLOR,
        fontSize: CONTENT_SIZE,
        fontWeight: "500"
    }
})

export const DARKMODE_NAV_STACK = {
    cardStyle: {
        backgroundColor: BACKGROUND_COLOR,
    },
    headerShown: false
}

export const DARKMODE_NAV_DRAWER = {
    headerTintColor: ACCENT_COLOR, 
    headerStyle: {
        backgroundColor: BACKGROUND_COLOR,
    },
    drawerStyle: {
        backgroundColor: BACKGROUND_COLOR,
    }
}