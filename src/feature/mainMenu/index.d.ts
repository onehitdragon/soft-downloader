type ChildCategory = {
    id: number,
    name: string,
    iconUrl: string
}

type Category = {
    id: number,
    name: string,
    childCategories: ChildCategory[]
}

type MainMenuState = {
    categories: Category[]
}