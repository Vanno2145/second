

function Player(props){

    return(
        <li>
            {props.value.firstName} {props.value.lastName} - {props.value.birthYear}
        </li>
    );
}

export function Players(props){

    return(
        <div id = 'cont' className='cont'>
            <ul>
                {props.arr.map((item, i) => <Player value={item}/>)}
            </ul>
        </div>
    );
}