function processTextElement(textElement: TextElement | ParaElement){
    const text = textElement.value;
    let result = "";
    textElement.links?.forEach((link) => {
        const ss = text.split(link.value);
        result += ss[0];
        ss.forEach((s, idx) => {
            if(idx > 0){
                if(idx === link.nth){
                    result += `<a style="color: #f87171;" href="${link.url}">${link.value}</a>`;
                }
                else{
                    result += link.value;
                }
                result += s;
            }
        })
    })

    return result;
}

export { processTextElement }