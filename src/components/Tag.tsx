const TagColors:{[x:number]: string} = {
    0: '#eeeeee',
    1: '#ffdddd',
    2: '#ffeedd',
    3: '#eeffdd',
    4: '#ddffdd',
    5: '#ddffdd',
    6: '#ddffee',
    7: '#ddeeff',
    8: '#ddddff',
    9: '#ffdddd',
    10: '#ffddee',
    11: '#eeddff',
    12: '#ddddff',
}

export const Tag = ({children}:{children: string}) => {
    const bg = TagColors[children[0].charCodeAt(0)%13];
    return (
        <span style={{background: bg}} className={`text-sm rounded-full ${bg} mr-2 px-3 py-1`}>
            {children}
        </span>
    )
}