import './List.scss';

interface ListProps {
    list: any[];
}

function List({ list }: ListProps) {
    return (
        <div className='list'>
            {list.map((item, index) => (
                // Chamar componente item
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}

export default List;