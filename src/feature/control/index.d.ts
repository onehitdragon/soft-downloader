import { MenuItemType } from "./MenuItemType.enum"

type ControlMenuState = {
    curMenuItem: MenuItemType
}

type Info = {
    totalView: number,
    totalUser: number
    totalPost: number,
    totalCategory: number,
    totalComment: number
}

type ControlState = {
    info: Info | null
}