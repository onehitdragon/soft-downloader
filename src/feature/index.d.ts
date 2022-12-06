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

type Role = {
    id: number,
    name: string
}

type User = {
    id: number,
    username: string,
    password: string,
    fullName: string,
    createDate: Date,
    role: Role
}

type TitleElement = {
    type: "title",
    value: string
}

type LinkElement = {
    value: string,
    nth: number,
    url: string
}

type TextElement = {
    type: "text",
    value: string,
    links?: LinkElement[]
}

type ParaElement = {
    type: "para",
    value: string,
    links?: LinkElement[]
}

type ListElement = {
    type: "list"
    value: (string | TextElement | ParaElement)[]
}

type ImageElement = {
    type: "image",
    url: string
}

class Soft{
    id: number;
    title: string;
    content: (TitleElement | TextElement | ParaElement | ListElement | ImageElement)[];
    author: User;
    amountView: number;
    createDate: Date;
    childCategories: ChildCategory[]
}