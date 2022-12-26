function findCommentById(id: number, comments: SoftComment[]){
    let stack = [...comments];
    while(stack.length > 0){
        const cur = stack.shift()!;
        if(cur.id === id){
            return cur;
        }
        if(cur.replyComments !== null && cur.replyComments.length > 0){
            stack = [...cur.replyComments, ...stack];
        }
    }
}

export { findCommentById }