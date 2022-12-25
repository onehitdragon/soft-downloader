import { Order } from "./Order.enum"
import { Sort } from "./Sort.enum"

export type FilterState = {
    curSort: Sort,
    curOrder: Order
    curChildCategory: ChildCategory | null,
    softs: Soft[],
    sortCur: (state: FilterState) => any
}